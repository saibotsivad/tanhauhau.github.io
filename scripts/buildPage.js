const fs = require('fs').promises;
const path = require('path');
const mdsvex = require('mdsvex');
const render = require('./render-svelte');
const bundle = require('./bundle');
const { mkdirp } = require('./mkdirp');
const visit = require('unist-util-visit');
const { encodeUrl } = require('./encodeUrl');
const { renderTemplate } = require('./renderTemplate');
const { OUTPUT_FOLDER, HOSTNAME } = require('./config');
const { cleanup } = require('./cleanup');

global.Prism = require('prismjs');
require('prism-svelte');
require('prismjs/components/prism-json');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-sql');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-diff');
require('prismjs/plugins/diff-highlight/prism-diff-highlight');
Prism.languages['diff-js'] = Prism.languages['diff'];
Prism.languages['diff-svelte'] = Prism.languages['diff'];
Prism.languages['sh'] = Prism.languages['bash'];

async function buildPage({ layouts, jsTemplate, template, meta }) {
  const outputFolder = path.join(OUTPUT_FOLDER, meta.slug);
  const markdown = await fs.readFile(meta.mdPath, 'utf8');

  await cleanup(outputFolder);
  await mkdirp(outputFolder);

  try {
    const svelteCode = await mdsvex.compile(markdown, {
      layout: layouts,
      smartypants: false,
      remarkPlugins: [
        function imageExternal() {
          const map = { ["'"]: '&#39;', ['"']: '&#34;' };
          return tree => {
            let i = 0;
            const imports = [];

            visit(tree, ['image', 'imageReference'], node => {
              if (/^https?\:\/\//.test(node.url)) return;
              const { url } = node;
              imports.push(`import __build_img__${i} from '${node.url}'`);
              node.url = `{__build_img__${i}}`;
              if (node.title) {
                node.title = node.title.replace(/['"]/g, value => map[value]);
              }
              if (node.alt) {
                node.alt = node.alt.replace(/['"]/g, value => map[value]);
              }

              if (/\.(jpg|png)$/.test(url)) {
                node.type = 'html';
                node.value = ['<picture>', `<source type="image/webp" srcset="{__build_img_webp__${i}}" />`, `<source type="image/jpeg" srcset="${node.url}" />`, `<img title="${node.title}" alt="${node.alt}" data-src="${node.url}" loading="lazy" />`, '</picture>'].join('');

                imports.push(`import __build_img_webp__${i} from 'webp://${url}'`);
              } else {
                node.type = 'html';
                node.value = `<img title="${node.title}" alt="${node.alt}" data-src="${node.url}" loading="lazy" />`;
              }

              i++;
            });

            tree.children.push({
              type: 'html',
              value: ['<script context="module">', ...imports, '</script>'].join('\n'),
            });
          };
        },
        function tableOfContents() {
          function toHtml(headings) {
            const html = ['<section><ul class="sitemap" id="sitemap" role="navigation" aria-label="Table of Contents">'];
            let previousDepth = 2;
            for (const heading of headings) {
              let { depth } = heading;
              while (depth > previousDepth) {
                html.push('<ul>');
                previousDepth++;
              }
              while (depth < previousDepth) {
                html.push('</ul>');
                previousDepth--;
              }
              html.push(`<li><a href="#${heading.link}">${heading.title}</a></li>`);
              previousDepth = depth;
            }
            html.push('</ul></section>');
            return html.join('');
          }

          return tree => {
            const titles = [];
            const indexes = [];
            tree.children.forEach((node, index) => {
              if (node.type !== 'heading') return;
              indexes.push(index);
              const link = node.children
                .map(child => (child.type !== 'html' && child.value ? child.value.toLowerCase() : ''))
                .filter(Boolean)
                .join(' ')
                .replace(/[^a-z]+/g, '-')
                .replace(/(^-|-$)/g, '');
              titles.push({
                title: node.children.map(child => (child.type !== 'html' && child.value ? child.value : '')).join(' '),
                link,
                depth: node.depth,
              });
              node.children.unshift({
                type: 'html',
                value: `<a href="#${link}" id="${link}">`,
              });
              node.children.push({
                type: 'html',
                value: '</a>',
              });
            });
            let offset = 0;
            let isStart = true;

            for (const idx of indexes) {
              if (!isStart) {
                tree.children.splice(idx + offset++, 0, {
                  type: 'html',
                  value: '</section>',
                });
              }
              tree.children.splice(idx + offset++, 0, {
                type: 'html',
                value: '<section>',
              });
              isStart = false;
            }

            if (titles.length) {
              tree.children.splice(tree.children[0].type === 'yaml' ? 1 : 0, 0, {
                type: 'html',
                value: toHtml(titles),
              });
            }
          };
        },
        function forTalk() {
          return (tree, vfile) => {
            if (meta.type === 'talk') {
              Object.assign(
                vfile.data.fm,
                Object.assign(
                  {
                    layout: 'talk',
                  },
                  vfile.data.fm
                )
              );
            }
          };
        },
        function forNotes() {
          return (tree, vfile) => {
            vfile.data.fm = {
              ...vfile.data.fm,
              slug: meta.slug,
              type: meta.type,
            };
            if (meta.type === 'notes') {
              const match = meta.filename.match(/(\d+-\d+-\d+)\s*-\s*(.+)\.md$/);
              if (match) {
                const [_, date, name] = match;
                Object.assign(
                  vfile.data.fm,
                  Object.assign(
                    {
                      date,
                      name,
                      title: `${date} - ${name}`,
                      layout: 'note',
                    },
                    vfile.data.fm
                  )
                );
              } else {
                const name = meta.filename.replace(/\.md$/, '');
                Object.assign(
                  vfile.data.fm,
                  Object.assign(
                    {
                      name,
                      title: name,
                      layout: 'note',
                    },
                    vfile.data.fm
                  )
                );
              }
            }
          };
        },
        function removeNewLine() {
          return (tree, vfile) => {
            visit(tree, ['html'], node => {
              if (node.lang) {
                node.value = node.value.replace(/(@html `)\s+(.)/gm, '$1$2');
              }
            });
          };
        },
      ],
      highlight: {
        highlighter(code, lang) {
          console.log(lang, !!Prism.languages[lang]);
          if (Prism.languages[lang]) {
            const highlighted = highlightWrap(Prism.highlight(code, Prism.languages[lang], lang));
            return `<pre class="language-${lang}">{@html \`<code class="language-${lang || ''}">${escape_svelty(highlighted)}</code>\`}</pre>`;
          } else {
            return `<pre class="language-${lang}">{@html \`<code class="language-${lang || ''}">${escape_svelty(escapeHtml(code))}</code>\`}</pre>`;
          }
        },
      },
    });

    const [ssrBundle, clientBundle] = await Promise.all([
      bundle({ [meta.mdPath + '.svelte']: svelteCode.code }, meta.mdPath + '.svelte', { ssr: true, hostname: HOSTNAME + meta.slug }).then(_ => _.generate({ format: 'commonjs', exports: 'named' })),
      bundle(
        {
          [meta.mdPath]: jsTemplate,
          [path.join(meta.mdPath, '../@@page-markup.svelte')]: svelteCode.code,
        },
        meta.mdPath,
        { hostname: HOSTNAME + meta.slug }
      ),
    ]);

    const [ssrOutput, clientOutput] = await Promise.all([
      render(ssrBundle.output[0].code).then(_ => _.render()),
      clientBundle.write({
        entryFileNames: '[hash].js',
        dir: outputFolder,
      }),
    ]);

    const preloads = [];
    const styles = [];
    const scripts = [];

    for (const { fileName } of clientOutput.output) {
      if (fileName.endsWith('.js')) {
        scripts.push(`<script src="./${encodeUrl(fileName)}" async></script>`);
        preloads.push(`<link as="script" rel="preload" href="./${encodeUrl(fileName)}">`);
      } else if (fileName.endsWith('.css')) {
        styles.push(`<link href="./${encodeUrl(fileName)}" rel="stylesheet">`);
        preloads.push(`<link as="style" rel="preload" href="./${encodeUrl(fileName)}">`);
      }
    }

    await fs.writeFile(
      path.join(outputFolder, 'index.html'),
      renderTemplate(template, {
        head: ssrOutput.head + preloads.join('') + styles.join(''),
        body: ssrOutput.html + scripts.join(''),
      }),
      'utf-8'
    );

    return {
      metadata: { ...ssrOutput.metadata, type: meta.type },
      slug: meta.slug,
    };
  } catch (error) {
    console.log('Failed to compile ' + meta.mdPath);
    console.log(error);
    throw error;
  }
}

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const numOfCores = require('os').cpus().length;

function buildPageWithWorkerPool(tasks) {
  const workers = Array(Math.min(numOfCores, tasks.length))
    .fill(null)
    .map(_ => new Worker(__filename));
  let totalTaskLeft = tasks.length;
  let totalTaskFinished = 0;
  const results = [];

  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  function onDone(workerIndex) {
    return function(workerResult) {
      results.push(workerResult);
      if (++totalTaskFinished === tasks.length) {
        workers.forEach(worker => worker.terminate());
        resolve(results);
      } else if (totalTaskLeft > 0) {
        workers[workerIndex].postMessage(tasks[--totalTaskLeft]);
      }
    };
  }

  function onFailed(error) {
    reject(error);
  }

  // initial assignment
  for (let i = 0; i < workers.length; i++) {
    workers[i].on('message', onDone(i));
    workers[i].on('error', onFailed);
    workers[i].on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
    workers[i].postMessage(tasks[--totalTaskLeft]);
  }

  return promise;
}

module.exports = function(pages, data) {
  const tasks = pages.map(meta => ({ ...data, meta }));
  if (tasks.length < numOfCores * 2) {
    return Promise.all(tasks.map(task => buildPage(task)));
  } else {
    return buildPageWithWorkerPool(tasks);
  }
};
if (!isMainThread) {
  parentPort.on('message', task => {
    buildPage(task).then(result => {
      parentPort.postMessage(result);
    });
  });
}

function escape_svelty(str) {
  return str.replace(/[{}`]/g, c => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c])).replace(/\\([trn])/g, '&#92;$1');
}

// inspired from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-remark-prismjs/src/directives.js

const HIGHLIGHTED_JSX_COMMENT_START = `<span class="token punctuation">\\{<\\/span><span class="token comment">\\/\\*`;
const HIGHLIGHTED_JSX_COMMENT_END = `\\*\\/<\\/span><span class="token punctuation">\\}</span>`;
const HIGHLIGHTED_HTML_COMMENT_START = `&lt;!--`;

const PRISMJS_COMMENT_OPENING_SPAN_TAG = `(<span\\sclass="token\\scomment">)?`;
const PRISMJS_COMMENT_CLOSING_SPAN_TAG = `(<\\/span>)?`;

const COMMENT_START = new RegExp(`(#|\\/\\/|\\{\\/\\*|\\/\\*+|${HIGHLIGHTED_HTML_COMMENT_START})`);

const createDirectiveRegExp = featureSelector => new RegExp(`${featureSelector}-(next-line|line|start|end|range)({([^}]+)})?`);

const COMMENT_END = new RegExp(`(-->|\\*\\/\\}|\\*\\/)?`);
const HIGHLIGHT_DIRECTIVE = createDirectiveRegExp(`highlight`);

const END_DIRECTIVE = /highlight-end/;

const MULTILINE_TOKEN_SPAN = /<span class="token ([^"]+)">[^<]*\n[^<]*<\/span>/g;

function highlightWrap(code) {
  const toHighlight = new Set();
  const toHide = new Set();

  if (HIGHLIGHT_DIRECTIVE.test(code)) {
    // HACK split multiline spans with line separators inside into multiple spans
    // separated by line separator - this fixes line highlighting behaviour for
    //  - plain-text in jsx,
    //  - tripple-quoted-string in python,
    //  - comment in c-like languages (including javascript), etc.
    code = code.replace(MULTILINE_TOKEN_SPAN, (match, token) => match.replace(/\n/g, `</span>\n<span class="token ${token}">`));
  }
  const lines = code.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (HIGHLIGHT_DIRECTIVE.test(lines[i])) {
      const [, directive, directiveRange] = lines[i].match(HIGHLIGHT_DIRECTIVE);
      switch (directive) {
        case 'next-line':
          toHide.add(i);
          toHighlight.add(i + 1);
          break;
        case 'start': {
          let end = i + 1;
          while (end < lines.length && !END_DIRECTIVE.test(lines[end])) end++;
          toHide.add(i);
          toHide.add(end);
          for (let j = i + 1; j < end; j++) {
            toHighlight.add(j);
          }
        }
      }
    }
  }

  return lines
    .map((line, index) => {
      if (toHighlight.has(index)) return `<span class="prism-highlight-code-line">${line}</span>`;
      return line;
    })
    .filter((line, index) => !toHide.has(index))
    .join('\n');
}

const matchHtmlRegExp = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}