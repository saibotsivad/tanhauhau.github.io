function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function a(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,n,o,a){return t[1]&&a?e(o.ctx.slice(),t[1](a(n))):o.ctx}function i(t,e,n,o,a,c,s){const i=function(t,e,n,o){if(t[2]&&o){const a=t[2](o(n));if(void 0===e.dirty)return a;if("object"==typeof a){const t=[],n=Math.max(e.dirty.length,a.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|a[o];return t}return e.dirty|a}return e.dirty}(e,o,a,c);if(i){const a=r(e,n,o,s);t.p(a,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(){return p("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,o){for(let o=0;o<t.length;o+=1){const a=t[o];if(a.nodeName===e){let e=0;const c=[];for(;e<a.attributes.length;){const t=a.attributes[e++];n[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)a.removeAttribute(c[t]);return t.splice(o,1)[0]}}return o?d(e):f(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function w(t){return E(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}class T{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=f(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let L;function N(t){L=t}function M(t){(function(){if(!L)throw new Error("Function called outside component initialization");return L})().$$.on_mount.push(t)}const k=[],I=[],_=[],S=[],j=Promise.resolve();let H=!1;function B(t){_.push(t)}let F=!1;const z=new Set;function P(){if(!F){F=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];N(e),q(e.$$)}for(k.length=0;I.length;)I.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];z.has(e)||(z.add(e),e())}_.length=0}while(k.length);for(;S.length;)S.pop()();H=!1,F=!1,z.clear()}}function q(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const C=new Set;function O(t,e){t&&t.i&&(C.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function R(t){t&&t.c()}function U(t,e){t&&t.l(e)}function V(t,e,o){const{fragment:s,on_mount:r,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,o),B(()=>{const e=r.map(n).filter(c);i?i.push(...e):a(e),t.$$.on_mount=[]}),l.forEach(B)}function D(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(k.push(t),H||(H=!0,j.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,c,s,r,i,l=[-1]){const u=L;N(e);const m=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let d=!1;if(f.ctx=c?c(e,m,(t,n,...o)=>{const a=o.length?o[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=a)&&(f.bound[t]&&f.bound[t](a),d&&G(e,t)),n}):[],f.update(),d=!0,a(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=$(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&O(e.$$.fragment),V(e,n.target,n.anchor),P()}N(u)}class Y{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function K(e){let n,o,a,c,s,r,i,m,v,A,x,T,L,N,M,k,I,_,S,j,H,B,F,z,P,q,C,O,J,R,U,V,D,G,W;return{c(){n=f("header"),o=f("nav"),a=f("ul"),c=f("li"),s=f("a"),r=p("Tan Li Hau"),i=g(),m=f("li"),v=f("a"),A=p("About"),x=g(),T=f("li"),L=f("a"),N=p("Writings"),M=g(),k=f("li"),I=f("a"),_=p("Talks"),S=g(),j=f("li"),H=f("a"),B=p("Notes"),F=g(),z=f("li"),P=f("a"),q=p("Newsletter"),C=g(),O=f("li"),J=f("a"),R=d("svg"),U=d("path"),V=g(),D=f("a"),G=d("svg"),W=d("path"),this.h()},l(t){n=b(t,"HEADER",{class:!0});var e=$(n);o=b(e,"NAV",{});var l=$(o);a=b(l,"UL",{class:!0});var u=$(a);c=b(u,"LI",{class:!0});var f=$(c);s=b(f,"A",{href:!0,class:!0});var d=$(s);r=E(d,"Tan Li Hau"),d.forEach(h),f.forEach(h),i=w(u),m=b(u,"LI",{class:!0});var p=$(m);v=b(p,"A",{href:!0,class:!0});var g=$(v);A=E(g,"About"),g.forEach(h),p.forEach(h),x=w(u),T=b(u,"LI",{class:!0});var y=$(T);L=b(y,"A",{href:!0,class:!0});var Y=$(L);N=E(Y,"Writings"),Y.forEach(h),y.forEach(h),M=w(u),k=b(u,"LI",{class:!0});var K=$(k);I=b(K,"A",{href:!0,class:!0});var Q=$(I);_=E(Q,"Talks"),Q.forEach(h),K.forEach(h),S=w(u),j=b(u,"LI",{class:!0});var X=$(j);H=b(X,"A",{href:!0,class:!0});var Z=$(H);B=E(Z,"Notes"),Z.forEach(h),X.forEach(h),F=w(u),z=b(u,"LI",{class:!0});var tt=$(z);P=b(tt,"A",{href:!0,class:!0});var et=$(P);q=E(et,"Newsletter"),et.forEach(h),tt.forEach(h),C=w(u),O=b(u,"LI",{class:!0});var nt=$(O);J=b(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(J);R=b(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var at=$(R);U=b(at,"path",{d:!0},1),$(U).forEach(h),at.forEach(h),ot.forEach(h),V=w(nt),D=b(nt,"A",{"aria-label":!0,href:!0,class:!0});var ct=$(D);G=b(ct,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var st=$(G);W=b(st,"path",{d:!0},1),$(W).forEach(h),st.forEach(h),ct.forEach(h),nt.forEach(h),u.forEach(h),l.forEach(h),e.forEach(h),this.h()},h(){y(s,"href","/"),y(s,"class","svelte-f3e4uo"),y(c,"class","svelte-f3e4uo"),y(v,"href","/about"),y(v,"class","svelte-f3e4uo"),y(m,"class","svelte-f3e4uo"),y(L,"href","/blogs"),y(L,"class","svelte-f3e4uo"),y(T,"class","svelte-f3e4uo"),y(I,"href","/talks"),y(I,"class","svelte-f3e4uo"),y(k,"class","svelte-f3e4uo"),y(H,"href","/notes"),y(H,"class","svelte-f3e4uo"),y(j,"class","svelte-f3e4uo"),y(P,"href","/newsletter"),y(P,"class","svelte-f3e4uo"),y(z,"class","svelte-f3e4uo"),y(U,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),y(R,"viewBox","0 0 24 24"),y(R,"width","1em"),y(R,"height","1em"),y(R,"class","svelte-f3e4uo"),y(J,"aria-label","Twitter account"),y(J,"href","https://twitter.com/lihautan"),y(J,"class","svelte-f3e4uo"),y(W,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),y(G,"viewBox","0 0 24 24"),y(G,"width","1em"),y(G,"height","1em"),y(G,"class","svelte-f3e4uo"),y(D,"aria-label","Github account"),y(D,"href","https://github.com/tanhauhau"),y(D,"class","svelte-f3e4uo"),y(O,"class","social svelte-f3e4uo"),y(a,"class","svelte-f3e4uo"),y(n,"class","svelte-f3e4uo")},m(t,e){u(t,n,e),l(n,o),l(o,a),l(a,c),l(c,s),l(s,r),l(a,i),l(a,m),l(m,v),l(v,A),l(a,x),l(a,T),l(T,L),l(L,N),l(a,M),l(a,k),l(k,I),l(I,_),l(a,S),l(a,j),l(j,H),l(H,B),l(a,F),l(a,z),l(z,P),l(P,q),l(a,C),l(a,O),l(O,J),l(J,R),l(R,U),l(O,V),l(O,D),l(D,G),l(G,W)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Q extends Y{constructor(t){super(),W(this,t,null,K,s,{})}}function X(e){let n,o,a,c,s,r,i,m,d,v,A,T,L,N,M,k,I,_,S,j;return{c(){n=f("div"),o=f("h1"),a=p("Subscribe to my newsletter"),c=g(),s=f("h2"),r=p("Get the latest blog posts and project updates delivered right to your inbox"),i=g(),m=f("form"),d=f("div"),v=f("input"),A=g(),T=f("input"),N=g(),M=f("input"),k=g(),I=f("p"),_=p("Powered by Buttondown."),this.h()},l(t){n=b(t,"DIV",{class:!0});var e=$(n);o=b(e,"H1",{});var l=$(o);a=E(l,"Subscribe to my newsletter"),l.forEach(h),c=w(e),s=b(e,"H2",{class:!0});var u=$(s);r=E(u,"Get the latest blog posts and project updates delivered right to your inbox"),u.forEach(h),i=w(e),m=b(e,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var f=$(m);d=b(f,"DIV",{class:!0});var p=$(d);v=b(p,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),A=w(p),T=b(p,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),p.forEach(h),N=w(f),M=b(f,"INPUT",{type:!0,value:!0,name:!0,class:!0}),k=w(f),I=b(f,"P",{class:!0});var g=$(I);_=E(g,"Powered by Buttondown."),g.forEach(h),f.forEach(h),e.forEach(h),this.h()},h(){y(s,"class","svelte-1k1s1co"),y(v,"type","email"),y(v,"name","email"),y(v,"id","bd-email"),y(v,"aria-label","email address"),y(v,"placeholder","youremail@example.com"),y(v,"class","svelte-1k1s1co"),y(T,"type","submit"),T.value="Subscribe",T.disabled=L=!e[0],y(T,"class","svelte-1k1s1co"),y(d,"class","form-item svelte-1k1s1co"),y(M,"type","hidden"),M.value="1",y(M,"name","embed"),y(M,"class","svelte-1k1s1co"),y(I,"class","svelte-1k1s1co"),y(m,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),y(m,"method","post"),y(m,"target","popupwindow"),y(m,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),y(m,"class","embeddable-buttondown-form"),y(n,"class","form svelte-1k1s1co")},m(t,h){var f,p,g,y;u(t,n,h),l(n,o),l(o,a),l(n,c),l(n,s),l(s,r),l(n,i),l(n,m),l(m,d),l(d,v),x(v,e[0]),l(d,A),l(d,T),l(m,N),l(m,M),l(m,k),l(m,I),l(I,_),S||(f=v,p="input",g=e[1],f.addEventListener(p,g,y),j=()=>f.removeEventListener(p,g,y),S=!0)},p(t,[e]){1&e&&v.value!==t[0]&&x(v,t[0]),1&e&&L!==(L=!t[0])&&(T.disabled=L)},i:t,o:t,d(t){t&&h(n),S=!1,j()}}}function Z(t,e,n){let o;return[o,function(){o=this.value,n(0,o)}]}class tt extends Y{constructor(t){super(),W(this,t,Z,X,s,{})}}function et(t){return M(()=>(setTimeout(()=>{if(window.innerWidth>1080){const t=document.createElement("script");t.async=!0,t.type="text/javascript",t.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",t.id="_carbonads_js",document.body.appendChild(t)}},5e3),()=>{try{const t=document.getElementById("carbonads");t.parentNode.removeChild(t)}catch(t){}})),[]}class nt extends Y{constructor(t){super(),W(this,t,et,null,s,{})}}function ot(t,e,n){const o=t.slice();return o[6]=e[n],o}function at(t,e,n){const o=t.slice();return o[6]=e[n],o}function ct(t){let e,n;return{c(){e=f("meta"),this.h()},l(t){e=b(t,"META",{name:!0,content:!0}),this.h()},h(){y(e,"name","keywords"),y(e,"content",n=t[6])},m(t,n){u(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&y(e,"content",n)},d(t){t&&h(e)}}}function st(t){let e,n,o=t[6]+"";return{c(){e=f("span"),n=p(o),this.h()},l(t){e=b(t,"SPAN",{class:!0});var a=$(e);n=E(a,o),a.forEach(h),this.h()},h(){y(e,"class","svelte-9tqnza")},m(t,o){u(t,e,o),l(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&A(n,o)},d(t){t&&h(e)}}}function rt(t){let e,n,o,a,c,s,d,x,L,N,M,k,I,_,S,j,H,B,F,z,P,q,C,G,W,Y,K,X,Z,et,rt,it,lt,ut,ht,mt,ft=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:t[3],copyrightHolder:t[3],copyrightYear:"2020",creator:t[3],publisher:t[3],description:t[1],headline:t[0],name:t[0],inLanguage:"en"})}<\/script>`,dt=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Ftracking-git-commits",name:t[0]},name:t[0],position:2}]})}<\/script>`;document.title=e=t[0]+" | Tan Li Hau";let pt=t[2],gt=[];for(let e=0;e<pt.length;e+=1)gt[e]=ct(at(t,pt,e));C=new Q({});let vt=t[2],yt=[];for(let e=0;e<vt.length;e+=1)yt[e]=st(ot(t,vt,e));const $t=t[5].default,bt=function(t,e,n,o){if(t){const a=r(t,e,n,o);return t[0](a)}}($t,t,t[4],null);return lt=new tt({}),ht=new nt({}),{c(){n=f("meta"),o=f("meta"),a=f("meta"),c=f("meta"),s=f("meta"),d=f("meta"),x=f("meta"),L=f("meta"),N=f("meta"),M=f("meta"),k=f("meta");for(let t=0;t<gt.length;t+=1)gt[t].c();I=f("meta"),_=f("meta"),j=v(),B=v(),F=g(),z=f("a"),P=p("Skip to content"),q=g(),R(C.$$.fragment),G=g(),W=f("main"),Y=f("h1"),K=p(t[0]),X=g();for(let t=0;t<yt.length;t+=1)yt[t].c();Z=g(),et=f("article"),bt&&bt.c(),rt=g(),it=f("footer"),R(lt.$$.fragment),ut=g(),R(ht.$$.fragment),this.h()},l(e){const r=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-15e3uyc"]',document.head);n=b(r,"META",{name:!0,content:!0}),o=b(r,"META",{name:!0,content:!0}),a=b(r,"META",{name:!0,content:!0}),c=b(r,"META",{name:!0,content:!0}),s=b(r,"META",{name:!0,content:!0}),d=b(r,"META",{name:!0,content:!0}),x=b(r,"META",{name:!0,content:!0}),L=b(r,"META",{name:!0,content:!0}),N=b(r,"META",{name:!0,content:!0}),M=b(r,"META",{name:!0,content:!0}),k=b(r,"META",{name:!0,content:!0});for(let t=0;t<gt.length;t+=1)gt[t].l(r);I=b(r,"META",{itemprop:!0,content:!0}),_=b(r,"META",{itemprop:!0,content:!0}),j=v(),B=v(),r.forEach(h),F=w(e),z=b(e,"A",{href:!0,class:!0});var i=$(z);P=E(i,"Skip to content"),i.forEach(h),q=w(e),U(C.$$.fragment,e),G=w(e),W=b(e,"MAIN",{id:!0,class:!0});var l=$(W);Y=b(l,"H1",{});var u=$(Y);K=E(u,t[0]),u.forEach(h),X=w(l);for(let t=0;t<yt.length;t+=1)yt[t].l(l);Z=w(l),et=b(l,"ARTICLE",{});var m=$(et);bt&&bt.l(m),m.forEach(h),l.forEach(h),rt=w(e),it=b(e,"FOOTER",{class:!0});var f=$(it);U(lt.$$.fragment,f),ut=w(f),U(ht.$$.fragment,f),f.forEach(h),this.h()},h(){y(n,"name","description"),y(n,"content",t[1]),y(o,"name","image"),y(o,"content",null),y(a,"name","og:image"),y(a,"content",null),y(c,"name","og:title"),y(c,"content",t[0]),y(s,"name","og:description"),y(s,"content",t[1]),y(d,"name","og:type"),y(d,"content","website"),y(x,"name","twitter:card"),y(x,"content","summary_large_image"),y(L,"name","twitter:creator"),y(L,"content","@lihautan"),y(N,"name","twitter:title"),y(N,"content",t[0]),y(M,"name","twitter:description"),y(M,"content",t[1]),y(k,"name","twitter:image"),y(k,"content",null),y(I,"itemprop","url"),y(I,"content","https%3A%2F%2Flihautan.com%2Ftracking-git-commits"),y(_,"itemprop","image"),y(_,"content",null),S=new T(j),H=new T(B),y(z,"href","#content"),y(z,"class","skip svelte-9tqnza"),y(W,"id","content"),y(W,"class","blog svelte-9tqnza"),y(it,"class","svelte-9tqnza")},m(t,e){l(document.head,n),l(document.head,o),l(document.head,a),l(document.head,c),l(document.head,s),l(document.head,d),l(document.head,x),l(document.head,L),l(document.head,N),l(document.head,M),l(document.head,k);for(let t=0;t<gt.length;t+=1)gt[t].m(document.head,null);l(document.head,I),l(document.head,_),S.m(ft,document.head),l(document.head,j),H.m(dt,document.head),l(document.head,B),u(t,F,e),u(t,z,e),l(z,P),u(t,q,e),V(C,t,e),u(t,G,e),u(t,W,e),l(W,Y),l(Y,K),l(W,X);for(let t=0;t<yt.length;t+=1)yt[t].m(W,null);l(W,Z),l(W,et),bt&&bt.m(et,null),u(t,rt,e),u(t,it,e),V(lt,it,null),l(it,ut),V(ht,it,null),mt=!0},p(t,[o]){if((!mt||1&o)&&e!==(e=t[0]+" | Tan Li Hau")&&(document.title=e),(!mt||2&o)&&y(n,"content",t[1]),(!mt||1&o)&&y(c,"content",t[0]),(!mt||2&o)&&y(s,"content",t[1]),(!mt||1&o)&&y(N,"content",t[0]),(!mt||2&o)&&y(M,"content",t[1]),4&o){let e;for(pt=t[2],e=0;e<pt.length;e+=1){const n=at(t,pt,e);gt[e]?gt[e].p(n,o):(gt[e]=ct(n),gt[e].c(),gt[e].m(I.parentNode,I))}for(;e<gt.length;e+=1)gt[e].d(1);gt.length=pt.length}if((!mt||3&o)&&ft!==(ft=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:t[3],copyrightHolder:t[3],copyrightYear:"2020",creator:t[3],publisher:t[3],description:t[1],headline:t[0],name:t[0],inLanguage:"en"})}<\/script>`)&&S.p(ft),(!mt||1&o)&&dt!==(dt=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Ftracking-git-commits",name:t[0]},name:t[0],position:2}]})}<\/script>`)&&H.p(dt),(!mt||1&o)&&A(K,t[0]),4&o){let e;for(vt=t[2],e=0;e<vt.length;e+=1){const n=ot(t,vt,e);yt[e]?yt[e].p(n,o):(yt[e]=st(n),yt[e].c(),yt[e].m(W,Z))}for(;e<yt.length;e+=1)yt[e].d(1);yt.length=vt.length}bt&&bt.p&&16&o&&i(bt,$t,t,t[4],o,null,null)},i(t){mt||(O(C.$$.fragment,t),O(bt,t),O(lt.$$.fragment,t),O(ht.$$.fragment,t),mt=!0)},o(t){J(C.$$.fragment,t),J(bt,t),J(lt.$$.fragment,t),J(ht.$$.fragment,t),mt=!1},d(t){h(n),h(o),h(a),h(c),h(s),h(d),h(x),h(L),h(N),h(M),h(k),m(gt,t),h(I),h(_),h(j),t&&S.d(),h(B),t&&H.d(),t&&h(F),t&&h(z),t&&h(q),D(C,t),t&&h(G),t&&h(W),m(yt,t),bt&&bt.d(t),t&&h(rt),t&&h(it),D(lt),D(ht)}}}function it(t,e,n){let{title:o=""}=e,{description:a=""}=e,{tags:c=[]}=e;const s={"@type":"Person",name:"Tan Li Hau"};let{$$slots:r={},$$scope:i}=e;return t.$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,a=t.description),"tags"in t&&n(2,c=t.tags),"$$scope"in t&&n(4,i=t.$$scope)},[o,a,c,s,i,r]}class lt extends Y{constructor(t){super(),W(this,t,it,rt,s,{title:0,description:1,tags:2})}}function ut(t){let e,n;return{c(){e=f("p"),n=p("find the origin of a change")},l(t){e=b(t,"P",{});var o=$(e);n=E(o,"find the origin of a change"),o.forEach(h)},m(t,o){u(t,e,o),l(e,n)},d(t){t&&h(e)}}}function ht(t){let n,o;const a=[mt];let c={$$slots:{default:[ut]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)c=e(c,a[t]);return n=new lt({props:c}),{c(){R(n.$$.fragment)},l(t){U(n.$$.fragment,t)},m(t,e){V(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},a={$$scope:1};let c=t.length;for(;c--;){const s=t[c],r=e[c];if(r){for(const t in s)t in r||(o[t]=1);for(const t in r)a[t]||(n[t]=r[t],a[t]=1);t[c]=r}else for(const t in s)a[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(a,[(c=mt,"object"==typeof c&&null!==c?c:{})]):{};var c;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){J(n.$$.fragment,t),o=!1},d(t){D(n,t)}}}const mt={title:"tracing git commits",wip:!0,slug:"tracking-git-commits",type:"blog"};class ft extends Y{constructor(t){super(),W(this,t,null,ht,s,{})}}setTimeout(()=>{new ft({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
