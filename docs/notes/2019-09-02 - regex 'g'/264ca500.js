function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,s,a){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(l){const r=c(e,n,o,a);t.p(r,l)}}function f(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function E(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return g(e)}function y(t){return w(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const k=[],N=[],T=[],I=[],L=Promise.resolve();let _=!1;function q(t){T.push(t)}let S=!1;const j=new Set;function M(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),H(e.$$)}for(k.length=0;N.length;)N.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];j.has(e)||(j.add(e),e())}T.length=0}while(k.length);for(;I.length;)I.pop()();_=!1,S=!1,j.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const B=new Set;function C(t,e){t&&t.i&&(B.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),(void 0).c.push(()=>{B.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function P(t){t&&t.c()}function z(t,e){t&&t.l(e)}function O(t,e,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:f}=t.$$;a&&a.m(e,o),q(()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(q)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(k.push(t),_||(_=!0,L.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,s,a,c,l,f=[-1]){const i=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:f};let m=!1;if(d.ctx=s?s(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&V(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&C(e.$$.fragment),O(e,n.target,n.anchor),M()}x(i)}class D{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function G(e){let n,o,r,s,a,c,l,h,b,A,x,k,N,T,I,L,_,q,S,j,M,H,B,C,F,P,z,O,R,V,W,D,G,K,U;return{c(){n=d("header"),o=d("nav"),r=d("ul"),s=d("li"),a=d("a"),c=g("Tan Li Hau"),l=p(),h=d("li"),b=d("a"),A=g("About"),x=p(),k=d("li"),N=d("a"),T=g("Writings"),I=p(),L=d("li"),_=d("a"),q=g("Talks"),S=p(),j=d("li"),M=d("a"),H=g("Notes"),B=p(),C=d("li"),F=d("a"),P=g("Newsletter"),z=p(),O=d("li"),R=d("a"),V=m("svg"),W=m("path"),D=p(),G=d("a"),K=m("svg"),U=m("path"),this.h()},l(t){n=E(t,"HEADER",{class:!0});var e=$(n);o=E(e,"NAV",{});var f=$(o);r=E(f,"UL",{class:!0});var i=$(r);s=E(i,"LI",{class:!0});var d=$(s);a=E(d,"A",{href:!0,class:!0});var m=$(a);c=w(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=y(i),h=E(i,"LI",{class:!0});var g=$(h);b=E(g,"A",{href:!0,class:!0});var p=$(b);A=w(p,"About"),p.forEach(u),g.forEach(u),x=y(i),k=E(i,"LI",{class:!0});var v=$(k);N=E(v,"A",{href:!0,class:!0});var J=$(N);T=w(J,"Writings"),J.forEach(u),v.forEach(u),I=y(i),L=E(i,"LI",{class:!0});var Q=$(L);_=E(Q,"A",{href:!0,class:!0});var X=$(_);q=w(X,"Talks"),X.forEach(u),Q.forEach(u),S=y(i),j=E(i,"LI",{class:!0});var Y=$(j);M=E(Y,"A",{href:!0,class:!0});var Z=$(M);H=w(Z,"Notes"),Z.forEach(u),Y.forEach(u),B=y(i),C=E(i,"LI",{class:!0});var tt=$(C);F=E(tt,"A",{href:!0,class:!0});var et=$(F);P=w(et,"Newsletter"),et.forEach(u),tt.forEach(u),z=y(i),O=E(i,"LI",{class:!0});var nt=$(O);R=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(R);V=E(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(V);W=E(rt,"path",{d:!0},1),$(W).forEach(u),rt.forEach(u),ot.forEach(u),D=y(nt),G=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var st=$(G);K=E(st,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var at=$(K);U=E(at,"path",{d:!0},1),$(U).forEach(u),at.forEach(u),st.forEach(u),nt.forEach(u),i.forEach(u),f.forEach(u),e.forEach(u),this.h()},h(){v(a,"href","/"),v(a,"class","svelte-f3e4uo"),v(s,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(N,"href","/blogs"),v(N,"class","svelte-f3e4uo"),v(k,"class","svelte-f3e4uo"),v(_,"href","/talks"),v(_,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(M,"href","/notes"),v(M,"class","svelte-f3e4uo"),v(j,"class","svelte-f3e4uo"),v(F,"href","/newsletter"),v(F,"class","svelte-f3e4uo"),v(C,"class","svelte-f3e4uo"),v(W,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(V,"viewBox","0 0 24 24"),v(V,"width","1em"),v(V,"height","1em"),v(V,"class","svelte-f3e4uo"),v(R,"aria-label","Twitter account"),v(R,"href","https://twitter.com/lihautan"),v(R,"class","svelte-f3e4uo"),v(U,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(K,"viewBox","0 0 24 24"),v(K,"width","1em"),v(K,"height","1em"),v(K,"class","svelte-f3e4uo"),v(G,"aria-label","Github account"),v(G,"href","https://github.com/tanhauhau"),v(G,"class","svelte-f3e4uo"),v(O,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){i(t,n,e),f(n,o),f(o,r),f(r,s),f(s,a),f(a,c),f(r,l),f(r,h),f(h,b),f(b,A),f(r,x),f(r,k),f(k,N),f(N,T),f(r,I),f(r,L),f(L,_),f(_,q),f(r,S),f(r,j),f(j,M),f(M,H),f(r,B),f(r,C),f(C,F),f(F,P),f(r,z),f(r,O),f(O,R),f(R,V),f(V,W),f(O,D),f(O,G),f(G,K),f(K,U)},p:t,i:t,o:t,d(t){t&&u(n)}}}class K extends D{constructor(t){super(),W(this,t,null,G,a,{})}}function U(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=E(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){i(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=g(o),this.h()},l(t){e=E(t,"SPAN",{class:!0});var r=$(e);n=w(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){i(t,e,o),f(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,s,a,m,A,x,k,N,T,I,L,_,q,S,j,M,H;document.title=e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau";let B=t[2],V=[];for(let e=0;e<B.length;e+=1)V[e]=Q(J(t,B,e));k=new K({});let W=t[2],D=[];for(let e=0;e<W.length;e+=1)D[e]=X(U(t,W,e));const G=t[4].default,Y=function(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}(G,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<V.length;t+=1)V[t].c();s=d("meta"),a=p(),m=d("a"),A=g("Skip to content"),x=p(),P(k.$$.fragment),N=p(),T=d("main"),I=d("h1"),L=g(t[1]),_=g(" - "),q=g(t[0]),S=p();for(let t=0;t<D.length;t+=1)D[t].c();j=p(),M=d("article"),Y&&Y.c(),this.h()},l(e){const c=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-jez2i1"]',document.head);n=E(c,"LINK",{href:!0,rel:!0}),o=E(c,"META",{name:!0,content:!0}),r=E(c,"META",{name:!0,content:!0});for(let t=0;t<V.length;t+=1)V[t].l(c);s=E(c,"META",{itemprop:!0,content:!0}),c.forEach(u),a=y(e),m=E(e,"A",{href:!0,class:!0});var l=$(m);A=w(l,"Skip to content"),l.forEach(u),x=y(e),z(k.$$.fragment,e),N=y(e),T=E(e,"MAIN",{id:!0,class:!0});var f=$(T);I=E(f,"H1",{});var i=$(I);L=w(i,t[1]),_=w(i," - "),q=w(i,t[0]),i.forEach(u),S=y(f);for(let t=0;t<D.length;t+=1)D[t].l(f);j=y(f),M=E(f,"ARTICLE",{});var h=$(M);Y&&Y.l(h),h.forEach(u),f.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-09-02 - regex 'g'/assets/blog-base-8d11877d.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(s,"itemprop","url"),v(s,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-09-02%20-%20regex%20'g'"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(T,"id","content"),v(T,"class","blog svelte-10cnqwo")},m(t,e){f(document.head,n),f(document.head,o),f(document.head,r);for(let t=0;t<V.length;t+=1)V[t].m(document.head,null);f(document.head,s),i(t,a,e),i(t,m,e),f(m,A),i(t,x,e),O(k,t,e),i(t,N,e),i(t,T,e),f(T,I),f(I,L),f(I,_),f(I,q),f(T,S);for(let t=0;t<D.length;t+=1)D[t].m(T,null);f(T,j),f(T,M),Y&&Y.m(M,null),H=!0},p(t,[n]){if((!H||3&n)&&e!==(e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau")&&(document.title=e),(!H||1&n)&&v(o,"content",t[0]),4&n){let e;for(B=t[2],e=0;e<B.length;e+=1){const o=J(t,B,e);V[e]?V[e].p(o,n):(V[e]=Q(o),V[e].c(),V[e].m(s.parentNode,s))}for(;e<V.length;e+=1)V[e].d(1);V.length=B.length}if((!H||2&n)&&b(L,t[1]),(!H||1&n)&&b(q,t[0]),4&n){let e;for(W=t[2],e=0;e<W.length;e+=1){const o=U(t,W,e);D[e]?D[e].p(o,n):(D[e]=X(o),D[e].c(),D[e].m(T,j))}for(;e<D.length;e+=1)D[e].d(1);D.length=W.length}Y&&Y.p&&8&n&&l(Y,G,t,t[3],n,null,null)},i(t){H||(C(k.$$.fragment,t),C(Y,t),H=!0)},o(t){F(k.$$.fragment,t),F(Y,t),H=!1},d(t){u(n),u(o),u(r),h(V,t),u(s),t&&u(a),t&&u(m),t&&u(x),R(k,t),t&&u(N),t&&u(T),h(D,t),Y&&Y.d(t)}}}function Z(t,e,n){let{name:o}=e,{date:r}=e,{tags:s=[]}=e,{$$slots:a={},$$scope:c}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"date"in t&&n(1,r=t.date),"tags"in t&&n(2,s=t.tags),"$$scope"in t&&n(3,c=t.$$scope)},[o,r,s,c,a]}class tt extends D{constructor(t){super(),W(this,t,Z,Y,a,{name:0,date:1,tags:2})}}function et(t){let e,n,o,r;return{c(){e=d("p"),n=g("I should have know, but,\nI was tripped by "),o=d("a"),r=g("https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex"),this.h()},l(t){e=E(t,"P",{});var s=$(e);n=w(s,"I should have know, but,\nI was tripped by "),o=E(s,"A",{href:!0,rel:!0});var a=$(o);r=w(a,"https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex"),a.forEach(u),s.forEach(u),this.h()},h(){v(o,"href","https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex"),v(o,"rel","nofollow")},m(t,s){i(t,e,s),f(e,n),f(e,o),f(o,r)},d(t){t&&u(e)}}}function nt(t){let n,o;const r=[ot];let s={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new tt({props:s}),{c(){P(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){O(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in a)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(s=ot,"object"==typeof s&&null!==s?s:{})]):{};var s;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(C(n.$$.fragment,t),o=!0)},o(t){F(n.$$.fragment,t),o=!1},d(t){R(n,t)}}}const ot={slug:"notes/2019-09-02 - regex 'g'",type:"notes",date:"2019-09-02",name:"regex 'g'",layout:"note"};class rt extends D{constructor(t){super(),W(this,t,null,nt,a,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}},3e3);
