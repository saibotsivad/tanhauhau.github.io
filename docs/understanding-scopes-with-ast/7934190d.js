function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function a(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,o,a){return t[1]&&a?e(o.ctx.slice(),t[1](a(n))):o.ctx}function i(t,e,n,o,a,s,r){const i=function(t,e,n,o){if(t[2]&&o){const a=t[2](o(n));if(void 0===e.dirty)return a;if("object"==typeof a){const t=[],n=Math.max(e.dirty.length,a.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|a[o];return t}return e.dirty|a}return e.dirty}(e,o,a,s);if(i){const a=c(e,n,o,r);t.p(a,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(){return p("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,o){for(let o=0;o<t.length;o+=1){const a=t[o];if(a.nodeName===e){let e=0;const s=[];for(;e<a.attributes.length;){const t=a.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)a.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?f(e):m(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function w(t){return E(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e){t.value=null==e?"":e}class x{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let L;function N(t){L=t}function M(t){(function(){if(!L)throw new Error("Function called outside component initialization");return L})().$$.on_mount.push(t)}const I=[],S=[],_=[],j=[],k=Promise.resolve();let H=!1;function B(t){_.push(t)}let F=!1;const z=new Set;function q(){if(!F){F=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];N(e),C(e.$$)}for(I.length=0;S.length;)S.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];z.has(e)||(z.add(e),e())}_.length=0}while(I.length);for(;j.length;)j.pop()();H=!1,F=!1,z.clear()}}function C(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const O=new Set;function P(t,e){t&&t.i&&(O.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),(void 0).c.push(()=>{O.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function U(t){t&&t.c()}function R(t,e){t&&t.l(e)}function V(t,e,o){const{fragment:r,on_mount:c,on_destroy:i,after_update:l}=t.$$;r&&r.m(e,o),B(()=>{const e=c.map(n).filter(s);i?i.push(...e):a(e),t.$$.on_mount=[]}),l.forEach(B)}function D(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(I.push(t),H||(H=!0,k.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,s,r,c,i,l=[-1]){const u=L;N(e);const d=n.props||{},m=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let f=!1;if(m.ctx=s?s(e,d,(t,n,...o)=>{const a=o.length?o[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=a)&&(m.bound[t]&&m.bound[t](a),f&&G(e,t)),n}):[],m.update(),f=!0,a(m.before_update),m.fragment=!!r&&r(m.ctx),n.target){if(n.hydrate){const t=$(n.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();n.intro&&P(e.$$.fragment),V(e,n.target,n.anchor),q()}N(u)}class Y{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function K(e){let n,o,a,s,r,c,i,d,v,A,T,x,L,N,M,I,S,_,j,k,H,B,F,z,q,C,O,P,J,U,R,V,D,G,W;return{c(){n=m("header"),o=m("nav"),a=m("ul"),s=m("li"),r=m("a"),c=p("Tan Li Hau"),i=g(),d=m("li"),v=m("a"),A=p("About"),T=g(),x=m("li"),L=m("a"),N=p("Writings"),M=g(),I=m("li"),S=m("a"),_=p("Talks"),j=g(),k=m("li"),H=m("a"),B=p("Notes"),F=g(),z=m("li"),q=m("a"),C=p("Newsletter"),O=g(),P=m("li"),J=m("a"),U=f("svg"),R=f("path"),V=g(),D=m("a"),G=f("svg"),W=f("path"),this.h()},l(t){n=b(t,"HEADER",{class:!0});var e=$(n);o=b(e,"NAV",{});var l=$(o);a=b(l,"UL",{class:!0});var u=$(a);s=b(u,"LI",{class:!0});var m=$(s);r=b(m,"A",{href:!0,class:!0});var f=$(r);c=E(f,"Tan Li Hau"),f.forEach(h),m.forEach(h),i=w(u),d=b(u,"LI",{class:!0});var p=$(d);v=b(p,"A",{href:!0,class:!0});var g=$(v);A=E(g,"About"),g.forEach(h),p.forEach(h),T=w(u),x=b(u,"LI",{class:!0});var y=$(x);L=b(y,"A",{href:!0,class:!0});var Y=$(L);N=E(Y,"Writings"),Y.forEach(h),y.forEach(h),M=w(u),I=b(u,"LI",{class:!0});var K=$(I);S=b(K,"A",{href:!0,class:!0});var Q=$(S);_=E(Q,"Talks"),Q.forEach(h),K.forEach(h),j=w(u),k=b(u,"LI",{class:!0});var X=$(k);H=b(X,"A",{href:!0,class:!0});var Z=$(H);B=E(Z,"Notes"),Z.forEach(h),X.forEach(h),F=w(u),z=b(u,"LI",{class:!0});var tt=$(z);q=b(tt,"A",{href:!0,class:!0});var et=$(q);C=E(et,"Newsletter"),et.forEach(h),tt.forEach(h),O=w(u),P=b(u,"LI",{class:!0});var nt=$(P);J=b(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(J);U=b(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var at=$(U);R=b(at,"path",{d:!0},1),$(R).forEach(h),at.forEach(h),ot.forEach(h),V=w(nt),D=b(nt,"A",{"aria-label":!0,href:!0,class:!0});var st=$(D);G=b(st,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(G);W=b(rt,"path",{d:!0},1),$(W).forEach(h),rt.forEach(h),st.forEach(h),nt.forEach(h),u.forEach(h),l.forEach(h),e.forEach(h),this.h()},h(){y(r,"href","/"),y(r,"class","svelte-f3e4uo"),y(s,"class","svelte-f3e4uo"),y(v,"href","/about"),y(v,"class","svelte-f3e4uo"),y(d,"class","svelte-f3e4uo"),y(L,"href","/blogs"),y(L,"class","svelte-f3e4uo"),y(x,"class","svelte-f3e4uo"),y(S,"href","/talks"),y(S,"class","svelte-f3e4uo"),y(I,"class","svelte-f3e4uo"),y(H,"href","/notes"),y(H,"class","svelte-f3e4uo"),y(k,"class","svelte-f3e4uo"),y(q,"href","/newsletter"),y(q,"class","svelte-f3e4uo"),y(z,"class","svelte-f3e4uo"),y(R,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),y(U,"viewBox","0 0 24 24"),y(U,"width","1em"),y(U,"height","1em"),y(U,"class","svelte-f3e4uo"),y(J,"aria-label","Twitter account"),y(J,"href","https://twitter.com/lihautan"),y(J,"class","svelte-f3e4uo"),y(W,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),y(G,"viewBox","0 0 24 24"),y(G,"width","1em"),y(G,"height","1em"),y(G,"class","svelte-f3e4uo"),y(D,"aria-label","Github account"),y(D,"href","https://github.com/tanhauhau"),y(D,"class","svelte-f3e4uo"),y(P,"class","social svelte-f3e4uo"),y(a,"class","svelte-f3e4uo"),y(n,"class","svelte-f3e4uo")},m(t,e){u(t,n,e),l(n,o),l(o,a),l(a,s),l(s,r),l(r,c),l(a,i),l(a,d),l(d,v),l(v,A),l(a,T),l(a,x),l(x,L),l(L,N),l(a,M),l(a,I),l(I,S),l(S,_),l(a,j),l(a,k),l(k,H),l(H,B),l(a,F),l(a,z),l(z,q),l(q,C),l(a,O),l(a,P),l(P,J),l(J,U),l(U,R),l(P,V),l(P,D),l(D,G),l(G,W)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Q extends Y{constructor(t){super(),W(this,t,null,K,r,{})}}function X(e){let n,o,a,s,r,c,i,d,f,v,A,x,L,N,M,I,S,_,j,k;return{c(){n=m("div"),o=m("h1"),a=p("Subscribe to my newsletter"),s=g(),r=m("h2"),c=p("Get the latest blog posts and project updates delivered right to your inbox"),i=g(),d=m("form"),f=m("div"),v=m("input"),A=g(),x=m("input"),N=g(),M=m("input"),I=g(),S=m("p"),_=p("Powered by Buttondown."),this.h()},l(t){n=b(t,"DIV",{class:!0});var e=$(n);o=b(e,"H1",{});var l=$(o);a=E(l,"Subscribe to my newsletter"),l.forEach(h),s=w(e),r=b(e,"H2",{class:!0});var u=$(r);c=E(u,"Get the latest blog posts and project updates delivered right to your inbox"),u.forEach(h),i=w(e),d=b(e,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var m=$(d);f=b(m,"DIV",{class:!0});var p=$(f);v=b(p,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),A=w(p),x=b(p,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),p.forEach(h),N=w(m),M=b(m,"INPUT",{type:!0,value:!0,name:!0,class:!0}),I=w(m),S=b(m,"P",{class:!0});var g=$(S);_=E(g,"Powered by Buttondown."),g.forEach(h),m.forEach(h),e.forEach(h),this.h()},h(){y(r,"class","svelte-1k1s1co"),y(v,"type","email"),y(v,"name","email"),y(v,"id","bd-email"),y(v,"aria-label","email address"),y(v,"placeholder","youremail@example.com"),y(v,"class","svelte-1k1s1co"),y(x,"type","submit"),x.value="Subscribe",x.disabled=L=!e[0],y(x,"class","svelte-1k1s1co"),y(f,"class","form-item svelte-1k1s1co"),y(M,"type","hidden"),M.value="1",y(M,"name","embed"),y(M,"class","svelte-1k1s1co"),y(S,"class","svelte-1k1s1co"),y(d,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),y(d,"method","post"),y(d,"target","popupwindow"),y(d,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),y(d,"class","embeddable-buttondown-form"),y(n,"class","form svelte-1k1s1co")},m(t,h){var m,p,g,y;u(t,n,h),l(n,o),l(o,a),l(n,s),l(n,r),l(r,c),l(n,i),l(n,d),l(d,f),l(f,v),T(v,e[0]),l(f,A),l(f,x),l(d,N),l(d,M),l(d,I),l(d,S),l(S,_),j||(m=v,p="input",g=e[1],m.addEventListener(p,g,y),k=()=>m.removeEventListener(p,g,y),j=!0)},p(t,[e]){1&e&&v.value!==t[0]&&T(v,t[0]),1&e&&L!==(L=!t[0])&&(x.disabled=L)},i:t,o:t,d(t){t&&h(n),j=!1,k()}}}function Z(t,e,n){let o;return[o,function(){o=this.value,n(0,o)}]}class tt extends Y{constructor(t){super(),W(this,t,Z,X,r,{})}}function et(t){return M(()=>(setTimeout(()=>{if(window.innerWidth>1080){const t=document.createElement("script");t.async=!0,t.type="text/javascript",t.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",t.id="_carbonads_js",document.body.appendChild(t)}},5e3),()=>{try{const t=document.getElementById("carbonads");t.parentNode.removeChild(t)}catch(t){}})),[]}class nt extends Y{constructor(t){super(),W(this,t,et,null,r,{})}}function ot(t,e,n){const o=t.slice();return o[6]=e[n],o}function at(t,e,n){const o=t.slice();return o[6]=e[n],o}function st(t){let e,n;return{c(){e=m("meta"),this.h()},l(t){e=b(t,"META",{name:!0,content:!0}),this.h()},h(){y(e,"name","keywords"),y(e,"content",n=t[6])},m(t,n){u(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&y(e,"content",n)},d(t){t&&h(e)}}}function rt(t){let e,n,o=t[6]+"";return{c(){e=m("span"),n=p(o),this.h()},l(t){e=b(t,"SPAN",{class:!0});var a=$(e);n=E(a,o),a.forEach(h),this.h()},h(){y(e,"class","svelte-9tqnza")},m(t,o){u(t,e,o),l(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&A(n,o)},d(t){t&&h(e)}}}function ct(t){let e,n,o,a,s,r,f,T,L,N,M,I,S,_,j,k,H,B,F,z,q,C,O,G,W,Y,K,X,Z,et,ct,it,lt,ut,ht,dt,mt=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:t[3],copyrightHolder:t[3],copyrightYear:"2020",creator:t[3],publisher:t[3],description:t[1],headline:t[0],name:t[0],inLanguage:"en"})}<\/script>`,ft=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Funderstanding-scopes-with-ast",name:t[0]},name:t[0],position:2}]})}<\/script>`;document.title=e=t[0]+" | Tan Li Hau";let pt=t[2],gt=[];for(let e=0;e<pt.length;e+=1)gt[e]=st(at(t,pt,e));O=new Q({});let vt=t[2],yt=[];for(let e=0;e<vt.length;e+=1)yt[e]=rt(ot(t,vt,e));const $t=t[5].default,bt=function(t,e,n,o){if(t){const a=c(t,e,n,o);return t[0](a)}}($t,t,t[4],null);return lt=new tt({}),ht=new nt({}),{c(){n=m("meta"),o=m("meta"),a=m("meta"),s=m("meta"),r=m("meta"),f=m("meta"),T=m("meta"),L=m("meta"),N=m("meta"),M=m("meta"),I=m("meta");for(let t=0;t<gt.length;t+=1)gt[t].c();S=m("meta"),_=m("meta"),k=v(),B=v(),F=g(),z=m("a"),q=p("Skip to content"),C=g(),U(O.$$.fragment),G=g(),W=m("main"),Y=m("h1"),K=p(t[0]),X=g();for(let t=0;t<yt.length;t+=1)yt[t].c();Z=g(),et=m("article"),bt&&bt.c(),ct=g(),it=m("footer"),U(lt.$$.fragment),ut=g(),U(ht.$$.fragment),this.h()},l(e){const c=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-15e3uyc"]',document.head);n=b(c,"META",{name:!0,content:!0}),o=b(c,"META",{name:!0,content:!0}),a=b(c,"META",{name:!0,content:!0}),s=b(c,"META",{name:!0,content:!0}),r=b(c,"META",{name:!0,content:!0}),f=b(c,"META",{name:!0,content:!0}),T=b(c,"META",{name:!0,content:!0}),L=b(c,"META",{name:!0,content:!0}),N=b(c,"META",{name:!0,content:!0}),M=b(c,"META",{name:!0,content:!0}),I=b(c,"META",{name:!0,content:!0});for(let t=0;t<gt.length;t+=1)gt[t].l(c);S=b(c,"META",{itemprop:!0,content:!0}),_=b(c,"META",{itemprop:!0,content:!0}),k=v(),B=v(),c.forEach(h),F=w(e),z=b(e,"A",{href:!0,class:!0});var i=$(z);q=E(i,"Skip to content"),i.forEach(h),C=w(e),R(O.$$.fragment,e),G=w(e),W=b(e,"MAIN",{id:!0,class:!0});var l=$(W);Y=b(l,"H1",{});var u=$(Y);K=E(u,t[0]),u.forEach(h),X=w(l);for(let t=0;t<yt.length;t+=1)yt[t].l(l);Z=w(l),et=b(l,"ARTICLE",{});var d=$(et);bt&&bt.l(d),d.forEach(h),l.forEach(h),ct=w(e),it=b(e,"FOOTER",{class:!0});var m=$(it);R(lt.$$.fragment,m),ut=w(m),R(ht.$$.fragment,m),m.forEach(h),this.h()},h(){y(n,"name","description"),y(n,"content",t[1]),y(o,"name","image"),y(o,"content",null),y(a,"name","og:image"),y(a,"content",null),y(s,"name","og:title"),y(s,"content",t[0]),y(r,"name","og:description"),y(r,"content",t[1]),y(f,"name","og:type"),y(f,"content","website"),y(T,"name","twitter:card"),y(T,"content","summary_large_image"),y(L,"name","twitter:creator"),y(L,"content","@lihautan"),y(N,"name","twitter:title"),y(N,"content",t[0]),y(M,"name","twitter:description"),y(M,"content",t[1]),y(I,"name","twitter:image"),y(I,"content",null),y(S,"itemprop","url"),y(S,"content","https%3A%2F%2Flihautan.com%2Funderstanding-scopes-with-ast"),y(_,"itemprop","image"),y(_,"content",null),j=new x(k),H=new x(B),y(z,"href","#content"),y(z,"class","skip svelte-9tqnza"),y(W,"id","content"),y(W,"class","blog svelte-9tqnza"),y(it,"class","svelte-9tqnza")},m(t,e){l(document.head,n),l(document.head,o),l(document.head,a),l(document.head,s),l(document.head,r),l(document.head,f),l(document.head,T),l(document.head,L),l(document.head,N),l(document.head,M),l(document.head,I);for(let t=0;t<gt.length;t+=1)gt[t].m(document.head,null);l(document.head,S),l(document.head,_),j.m(mt,document.head),l(document.head,k),H.m(ft,document.head),l(document.head,B),u(t,F,e),u(t,z,e),l(z,q),u(t,C,e),V(O,t,e),u(t,G,e),u(t,W,e),l(W,Y),l(Y,K),l(W,X);for(let t=0;t<yt.length;t+=1)yt[t].m(W,null);l(W,Z),l(W,et),bt&&bt.m(et,null),u(t,ct,e),u(t,it,e),V(lt,it,null),l(it,ut),V(ht,it,null),dt=!0},p(t,[o]){if((!dt||1&o)&&e!==(e=t[0]+" | Tan Li Hau")&&(document.title=e),(!dt||2&o)&&y(n,"content",t[1]),(!dt||1&o)&&y(s,"content",t[0]),(!dt||2&o)&&y(r,"content",t[1]),(!dt||1&o)&&y(N,"content",t[0]),(!dt||2&o)&&y(M,"content",t[1]),4&o){let e;for(pt=t[2],e=0;e<pt.length;e+=1){const n=at(t,pt,e);gt[e]?gt[e].p(n,o):(gt[e]=st(n),gt[e].c(),gt[e].m(S.parentNode,S))}for(;e<gt.length;e+=1)gt[e].d(1);gt.length=pt.length}if((!dt||3&o)&&mt!==(mt=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:t[3],copyrightHolder:t[3],copyrightYear:"2020",creator:t[3],publisher:t[3],description:t[1],headline:t[0],name:t[0],inLanguage:"en"})}<\/script>`)&&j.p(mt),(!dt||1&o)&&ft!==(ft=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Funderstanding-scopes-with-ast",name:t[0]},name:t[0],position:2}]})}<\/script>`)&&H.p(ft),(!dt||1&o)&&A(K,t[0]),4&o){let e;for(vt=t[2],e=0;e<vt.length;e+=1){const n=ot(t,vt,e);yt[e]?yt[e].p(n,o):(yt[e]=rt(n),yt[e].c(),yt[e].m(W,Z))}for(;e<yt.length;e+=1)yt[e].d(1);yt.length=vt.length}bt&&bt.p&&16&o&&i(bt,$t,t,t[4],o,null,null)},i(t){dt||(P(O.$$.fragment,t),P(bt,t),P(lt.$$.fragment,t),P(ht.$$.fragment,t),dt=!0)},o(t){J(O.$$.fragment,t),J(bt,t),J(lt.$$.fragment,t),J(ht.$$.fragment,t),dt=!1},d(t){h(n),h(o),h(a),h(s),h(r),h(f),h(T),h(L),h(N),h(M),h(I),d(gt,t),h(S),h(_),h(k),t&&j.d(),h(B),t&&H.d(),t&&h(F),t&&h(z),t&&h(C),D(O,t),t&&h(G),t&&h(W),d(yt,t),bt&&bt.d(t),t&&h(ct),t&&h(it),D(lt),D(ht)}}}function it(t,e,n){let{title:o=""}=e,{description:a=""}=e,{tags:s=[]}=e;const r={"@type":"Person",name:"Tan Li Hau"};let{$$slots:c={},$$scope:i}=e;return t.$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,a=t.description),"tags"in t&&n(2,s=t.tags),"$$scope"in t&&n(4,i=t.$$scope)},[o,a,s,r,i,c]}class lt extends Y{constructor(t){super(),W(this,t,it,ct,r,{title:0,description:1,tags:2})}}function ut(t){let n,o;const a=[ht];let s={};for(let t=0;t<a.length;t+=1)s=e(s,a[t]);return n=new lt({props:s}),{c(){U(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,e){V(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},a={$$scope:1};let s=t.length;for(;s--;){const r=t[s],c=e[s];if(c){for(const t in r)t in c||(o[t]=1);for(const t in c)a[t]||(n[t]=c[t],a[t]=1);t[s]=c}else for(const t in r)a[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(a,[(s=ht,"object"==typeof s&&null!==s?s:{})]):{};var s;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(P(n.$$.fragment,t),o=!0)},o(t){J(n.$$.fragment,t),o=!1},d(t){D(n,t)}}}const ht={title:"Understanding JavaScript Scopes with AST",wip:!0,slug:"understanding-scopes-with-ast",type:"blog"};class dt extends Y{constructor(t){super(),W(this,t,null,ut,r,{})}}setTimeout(()=>{new dt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
