function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,a,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(l){const r=s(e,n,o,c);t.p(r,l)}}function f(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function E(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function w(t){return y(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function _(t){A=t}const x=[],N=[],T=[],L=[],S=Promise.resolve();let I=!1;function k(t){T.push(t)}let M=!1;const q=new Set;function C(){if(!M){M=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];_(e),F(e.$$)}for(x.length=0;N.length;)N.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];q.has(e)||(q.add(e),e())}T.length=0}while(x.length);for(;L.length;)L.pop()();I=!1,M=!1,q.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const j=new Set;function H(t,e){t&&t.i&&(j.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),(void 0).c.push(()=>{j.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t){t&&t.c()}function P(t,e){t&&t.l(e)}function R(t,e,o){const{fragment:c,on_mount:s,on_destroy:l,after_update:f}=t.$$;c&&c.m(e,o),k(()=>{const e=s.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(k)}function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(x.push(t),I||(I=!0,S.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,n,a,c,s,l,f=[-1]){const u=A;_(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:f};let m=!1;if(d.ctx=a?a(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&O(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),R(e,n.target,n.anchor),C()}_(u)}class D{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function J(e){let n,o,r,a,c,s,l,h,b,A,_,x,N,T,L,S,I,k,M,q,C,F,j,H,z,B,P,R,W,O,U,D,J,V,Y;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),s=p("Tan Li Hau"),l=g(),h=d("li"),b=d("a"),A=p("About"),_=g(),x=d("li"),N=d("a"),T=p("Writings"),L=g(),S=d("li"),I=d("a"),k=p("Talks"),M=g(),q=d("li"),C=d("a"),F=p("Notes"),j=g(),H=d("li"),z=d("a"),B=p("Newsletter"),P=g(),R=d("li"),W=d("a"),O=m("svg"),U=m("path"),D=g(),J=d("a"),V=m("svg"),Y=m("path"),this.h()},l(t){n=E(t,"HEADER",{class:!0});var e=$(n);o=E(e,"NAV",{});var f=$(o);r=E(f,"UL",{class:!0});var u=$(r);a=E(u,"LI",{class:!0});var d=$(a);c=E(d,"A",{href:!0,class:!0});var m=$(c);s=y(m,"Tan Li Hau"),m.forEach(i),d.forEach(i),l=w(u),h=E(u,"LI",{class:!0});var p=$(h);b=E(p,"A",{href:!0,class:!0});var g=$(b);A=y(g,"About"),g.forEach(i),p.forEach(i),_=w(u),x=E(u,"LI",{class:!0});var v=$(x);N=E(v,"A",{href:!0,class:!0});var G=$(N);T=y(G,"Writings"),G.forEach(i),v.forEach(i),L=w(u),S=E(u,"LI",{class:!0});var K=$(S);I=E(K,"A",{href:!0,class:!0});var Q=$(I);k=y(Q,"Talks"),Q.forEach(i),K.forEach(i),M=w(u),q=E(u,"LI",{class:!0});var X=$(q);C=E(X,"A",{href:!0,class:!0});var Z=$(C);F=y(Z,"Notes"),Z.forEach(i),X.forEach(i),j=w(u),H=E(u,"LI",{class:!0});var tt=$(H);z=E(tt,"A",{href:!0,class:!0});var et=$(z);B=y(et,"Newsletter"),et.forEach(i),tt.forEach(i),P=w(u),R=E(u,"LI",{class:!0});var nt=$(R);W=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(W);O=E(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(O);U=E(rt,"path",{d:!0},1),$(U).forEach(i),rt.forEach(i),ot.forEach(i),D=w(nt),J=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=$(J);V=E(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ct=$(V);Y=E(ct,"path",{d:!0},1),$(Y).forEach(i),ct.forEach(i),at.forEach(i),nt.forEach(i),u.forEach(i),f.forEach(i),e.forEach(i),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(N,"href","/blogs"),v(N,"class","svelte-f3e4uo"),v(x,"class","svelte-f3e4uo"),v(I,"href","/talks"),v(I,"class","svelte-f3e4uo"),v(S,"class","svelte-f3e4uo"),v(C,"href","/notes"),v(C,"class","svelte-f3e4uo"),v(q,"class","svelte-f3e4uo"),v(z,"href","/newsletter"),v(z,"class","svelte-f3e4uo"),v(H,"class","svelte-f3e4uo"),v(U,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(O,"viewBox","0 0 24 24"),v(O,"width","1em"),v(O,"height","1em"),v(O,"class","svelte-f3e4uo"),v(W,"aria-label","Twitter account"),v(W,"href","https://twitter.com/lihautan"),v(W,"class","svelte-f3e4uo"),v(Y,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(V,"viewBox","0 0 24 24"),v(V,"width","1em"),v(V,"height","1em"),v(V,"class","svelte-f3e4uo"),v(J,"aria-label","Github account"),v(J,"href","https://github.com/tanhauhau"),v(J,"class","svelte-f3e4uo"),v(R,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){u(t,n,e),f(n,o),f(o,r),f(r,a),f(a,c),f(c,s),f(r,l),f(r,h),f(h,b),f(b,A),f(r,_),f(r,x),f(x,N),f(N,T),f(r,L),f(r,S),f(S,I),f(I,k),f(r,M),f(r,q),f(q,C),f(C,F),f(r,j),f(r,H),f(H,z),f(z,B),f(r,P),f(r,R),f(R,W),f(W,O),f(O,U),f(R,D),f(R,J),f(J,V),f(V,Y)},p:t,i:t,o:t,d(t){t&&i(n)}}}class V extends D{constructor(t){super(),U(this,t,null,J,c,{})}}function Y(t,e,n){const o=t.slice();return o[6]=e[n],o}function G(t,e,n){const o=t.slice();return o[6]=e[n],o}function K(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=E(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){u(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&i(e)}}}function Q(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=E(t,"SPAN",{class:!0});var r=$(e);n=y(r,o),r.forEach(i),this.h()},h(){v(e,"class","svelte-10cnqwo")},m(t,o){u(t,e,o),f(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&i(e)}}}function X(t){let e,n,o,r,a,c,m,A,_,x,N,T,L,S,I,k,M,q,C,F;document.title=e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau";let j=t[2],O=[];for(let e=0;e<j.length;e+=1)O[e]=K(G(t,j,e));x=new V({});let U=t[2],D=[];for(let e=0;e<U.length;e+=1)D[e]=Q(Y(t,U,e));const J=t[4].default,X=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(J,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<O.length;t+=1)O[t].c();a=d("meta"),c=g(),m=d("a"),A=p("Skip to content"),_=g(),B(x.$$.fragment),N=g(),T=d("main"),L=d("h1"),S=p(t[1]),I=p(" - "),k=p(t[0]),M=g();for(let t=0;t<D.length;t+=1)D[t].c();q=g(),C=d("article"),X&&X.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-jez2i1"]',document.head);n=E(s,"LINK",{href:!0,rel:!0}),o=E(s,"META",{name:!0,content:!0}),r=E(s,"META",{name:!0,content:!0});for(let t=0;t<O.length;t+=1)O[t].l(s);a=E(s,"META",{itemprop:!0,content:!0}),s.forEach(i),c=w(e),m=E(e,"A",{href:!0,class:!0});var l=$(m);A=y(l,"Skip to content"),l.forEach(i),_=w(e),P(x.$$.fragment,e),N=w(e),T=E(e,"MAIN",{id:!0,class:!0});var f=$(T);L=E(f,"H1",{});var u=$(L);S=y(u,t[1]),I=y(u," - "),k=y(u,t[0]),u.forEach(i),M=w(f);for(let t=0;t<D.length;t+=1)D[t].l(f);q=w(f),C=E(f,"ARTICLE",{});var h=$(C);X&&X.l(h),h.forEach(i),f.forEach(i),this.h()},h(){v(n,"href","https://lihautan.com/notes/2019-09-26 - annonymous function/assets/blog-base-8d11877d.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2F2019-09-26%20-%20annonymous%20function"),v(m,"href","#content"),v(m,"class","skip svelte-10cnqwo"),v(T,"id","content"),v(T,"class","blog svelte-10cnqwo")},m(t,e){f(document.head,n),f(document.head,o),f(document.head,r);for(let t=0;t<O.length;t+=1)O[t].m(document.head,null);f(document.head,a),u(t,c,e),u(t,m,e),f(m,A),u(t,_,e),R(x,t,e),u(t,N,e),u(t,T,e),f(T,L),f(L,S),f(L,I),f(L,k),f(T,M);for(let t=0;t<D.length;t+=1)D[t].m(T,null);f(T,q),f(T,C),X&&X.m(C,null),F=!0},p(t,[n]){if((!F||3&n)&&e!==(e="Note: "+t[1]+" "+t[0]+" | Tan Li Hau")&&(document.title=e),(!F||1&n)&&v(o,"content",t[0]),4&n){let e;for(j=t[2],e=0;e<j.length;e+=1){const o=G(t,j,e);O[e]?O[e].p(o,n):(O[e]=K(o),O[e].c(),O[e].m(a.parentNode,a))}for(;e<O.length;e+=1)O[e].d(1);O.length=j.length}if((!F||2&n)&&b(S,t[1]),(!F||1&n)&&b(k,t[0]),4&n){let e;for(U=t[2],e=0;e<U.length;e+=1){const o=Y(t,U,e);D[e]?D[e].p(o,n):(D[e]=Q(o),D[e].c(),D[e].m(T,q))}for(;e<D.length;e+=1)D[e].d(1);D.length=U.length}X&&X.p&&8&n&&l(X,J,t,t[3],n,null,null)},i(t){F||(H(x.$$.fragment,t),H(X,t),F=!0)},o(t){z(x.$$.fragment,t),z(X,t),F=!1},d(t){i(n),i(o),i(r),h(O,t),i(a),t&&i(c),t&&i(m),t&&i(_),W(x,t),t&&i(N),t&&i(T),h(D,t),X&&X.d(t)}}}function Z(t,e,n){let{name:o}=e,{date:r}=e,{tags:a=[]}=e,{$$slots:c={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"date"in t&&n(1,r=t.date),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,a,s,c]}class tt extends D{constructor(t){super(),U(this,t,Z,X,c,{name:0,date:1,tags:2})}}function et(t){let e,n,o,r,a,c,s,l,h,m,b,A,_,x,N;return{c(){e=d("p"),n=p("TIL - arrow function has no "),o=d("code"),r=p("arguments"),a=p(","),c=g(),s=d("p"),l=d("a"),h=p("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments"),m=g(),b=d("p"),A=p("You can only use "),_=d("code"),x=p("...args"),N=p(" spread if you want."),this.h()},l(t){e=E(t,"P",{});var f=$(e);n=y(f,"TIL - arrow function has no "),o=E(f,"CODE",{});var u=$(o);r=y(u,"arguments"),u.forEach(i),a=y(f,","),f.forEach(i),c=w(t),s=E(t,"P",{});var d=$(s);l=E(d,"A",{href:!0,rel:!0});var p=$(l);h=y(p,"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments"),p.forEach(i),d.forEach(i),m=w(t),b=E(t,"P",{});var g=$(b);A=y(g,"You can only use "),_=E(g,"CODE",{});var v=$(_);x=y(v,"...args"),v.forEach(i),N=y(g," spread if you want."),g.forEach(i),this.h()},h(){v(l,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments"),v(l,"rel","nofollow")},m(t,i){u(t,e,i),f(e,n),f(e,o),f(o,r),f(e,a),u(t,c,i),u(t,s,i),f(s,l),f(l,h),u(t,m,i),u(t,b,i),f(b,A),f(b,_),f(_,x),f(b,N)},d(t){t&&i(e),t&&i(c),t&&i(s),t&&i(m),t&&i(b)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){B(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,e){R(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const c=t[a],s=e[a];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[a]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(H(n.$$.fragment,t),o=!0)},o(t){z(n.$$.fragment,t),o=!1},d(t){W(n,t)}}}const ot={slug:"notes/2019-09-26 - annonymous function",type:"notes",date:"2019-09-26",name:"annonymous function",layout:"note"};class rt extends D{constructor(t){super(),U(this,t,null,nt,c,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}},3e3);
