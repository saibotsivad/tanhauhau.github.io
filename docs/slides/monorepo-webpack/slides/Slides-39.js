/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "/svelte/internal.js";

import Folder from "/components/Folder.js";
import toFolder from "/components/toFolder.js";
import Notes from "/components/Notes.js";

function create_fragment(ctx) {
	let h2;
	let t1;
	let folder_1;
	let t2;
	let pre;

	let raw_value = `
<code class="language-js"><span class="token comment">// checkout-page/package.json</span>
<span class="token punctuation">&#123;</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"checkout-page"</span><span class="token punctuation">,</span>
  <span class="token string">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token string">"crypto-js"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
    <span class="token string">"paymnent-utils"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// payment-utils/package.json</span>
<span class="token punctuation">&#123;</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"checkout-page"</span><span class="token punctuation">,</span>
  <span class="token string">"peerDependencies"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token string">"crypto-js"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span>
  <span class="token punctuation">&#125;</span>  
<span class="token punctuation">&#125;</span></code>` + "";

	let t3;
	let notes;
	let current;
	folder_1 = new Folder({ props: { folder: /*folder*/ ctx[0] } });

	notes = new Notes({
			props: {
				note: "common scenario, like react-router uses react, but mark react as peer"
			}
		});

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "🐛 Problem #2: Problem #1 2.0 🤮";
			t1 = space();
			create_component(folder_1.$$.fragment);
			t2 = space();
			pre = element("pre");
			t3 = space();
			create_component(notes.$$.fragment);
			attr(pre, "class", "language-js");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			mount_component(folder_1, target, anchor);
			insert(target, t2, anchor);
			insert(target, pre, anchor);
			pre.innerHTML = raw_value;
			insert(target, t3, anchor);
			mount_component(notes, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(folder_1.$$.fragment, local);
			transition_in(notes.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(folder_1.$$.fragment, local);
			transition_out(notes.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			destroy_component(folder_1, detaching);
			if (detaching) detach(t2);
			if (detaching) detach(pre);
			if (detaching) detach(t3);
			destroy_component(notes, detaching);
		}
	};
}

function instance($$self) {
	const folder = toFolder`
+ shopee
+ packages
  + checkout-page
    + node_modules
      - payment-utils --> ../../payment-utils
      - crypto-js
  + payment-utils
    - index.js # import 'crypto-js';
`;

	return [folder];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;