function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function a(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,a,o){return e[1]&&o?t(a.ctx.slice(),e[1](o(n))):a.ctx}function i(e,t,n,a,o,s,r){const i=function(e,t,n,a){if(e[2]&&a){const o=e[2](a(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let a=0;a<n;a+=1)e[a]=t.dirty[a]|o[a];return e}return t.dirty|o}return t.dirty}(t,a,o,s);if(i){const o=c(t,n,a,r);e.p(o,i)}}function l(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function v(){return m("")}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){return Array.from(e.childNodes)}function b(e,t,n,a){for(let a=0;a<e.length;a+=1){const o=e[a];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(a,1)[0]}}return a?f(t):d(t)}function E(e,t){for(let n=0;n<e.length;n+=1){const a=e[n];if(3===a.nodeType)return a.data=""+t,e.splice(n,1)[0]}return m(t)}function k(e){return E(e," ")}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $(e,t){e.value=null==t?"":t}class x{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=d(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}let A;function T(e){A=e}function S(e){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(e)}const P=[],j=[],C=[],L=[],O=Promise.resolve();let N=!1;function H(e){C.push(e)}let M=!1;const F=new Set;function R(){if(!M){M=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];T(t),z(t.$$)}for(P.length=0;j.length;)j.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];F.has(t)||(F.add(t),t())}C.length=0}while(P.length);for(;L.length;)L.pop()();N=!1,M=!1,F.clear()}}function z(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const B=new Set;function _(e,t){e&&e.i&&(B.delete(e),e.i(t))}function U(e,t,n,a){if(e&&e.o){if(B.has(e))return;B.add(e),(void 0).c.push(()=>{B.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function q(e){e&&e.c()}function G(e,t){e&&e.l(t)}function Y(e,t,a){const{fragment:r,on_mount:c,on_destroy:i,after_update:l}=e.$$;r&&r.m(t,a),H(()=>{const t=c.map(n).filter(s);i?i.push(...t):o(t),e.$$.on_mount=[]}),l.forEach(H)}function D(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(P.push(e),N||(N=!0,O.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,n,s,r,c,i,l=[-1]){const h=A;T(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:a(),dirty:l};let f=!1;if(d.ctx=s?s(t,u,(e,n,...a)=>{const o=a.length?a[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=o)&&(d.bound[e]&&d.bound[e](o),f&&W(t,e)),n}):[],d.update(),f=!0,o(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){const e=y(n.target);d.fragment&&d.fragment.l(e),e.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&_(t.$$.fragment),Y(t,n.target,n.anchor),R()}T(h)}class V{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function K(t){let n,a,o,s,r,c,i,u,v,I,$,x,A,T,S,P,j,C,L,O,N,H,M,F,R,z,B,_,U,q,G,Y,D,W,J;return{c(){n=d("header"),a=d("nav"),o=d("ul"),s=d("li"),r=d("a"),c=m("Tan Li Hau"),i=g(),u=d("li"),v=d("a"),I=m("About"),$=g(),x=d("li"),A=d("a"),T=m("Writings"),S=g(),P=d("li"),j=d("a"),C=m("Talks"),L=g(),O=d("li"),N=d("a"),H=m("Notes"),M=g(),F=d("li"),R=d("a"),z=m("Newsletter"),B=g(),_=d("li"),U=d("a"),q=f("svg"),G=f("path"),Y=g(),D=d("a"),W=f("svg"),J=f("path"),this.h()},l(e){n=b(e,"HEADER",{class:!0});var t=y(n);a=b(t,"NAV",{});var l=y(a);o=b(l,"UL",{class:!0});var h=y(o);s=b(h,"LI",{class:!0});var d=y(s);r=b(d,"A",{href:!0,class:!0});var f=y(r);c=E(f,"Tan Li Hau"),f.forEach(p),d.forEach(p),i=k(h),u=b(h,"LI",{class:!0});var m=y(u);v=b(m,"A",{href:!0,class:!0});var g=y(v);I=E(g,"About"),g.forEach(p),m.forEach(p),$=k(h),x=b(h,"LI",{class:!0});var w=y(x);A=b(w,"A",{href:!0,class:!0});var V=y(A);T=E(V,"Writings"),V.forEach(p),w.forEach(p),S=k(h),P=b(h,"LI",{class:!0});var K=y(P);j=b(K,"A",{href:!0,class:!0});var Z=y(j);C=E(Z,"Talks"),Z.forEach(p),K.forEach(p),L=k(h),O=b(h,"LI",{class:!0});var Q=y(O);N=b(Q,"A",{href:!0,class:!0});var X=y(N);H=E(X,"Notes"),X.forEach(p),Q.forEach(p),M=k(h),F=b(h,"LI",{class:!0});var ee=y(F);R=b(ee,"A",{href:!0,class:!0});var te=y(R);z=E(te,"Newsletter"),te.forEach(p),ee.forEach(p),B=k(h),_=b(h,"LI",{class:!0});var ne=y(_);U=b(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=y(U);q=b(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var oe=y(q);G=b(oe,"path",{d:!0},1),y(G).forEach(p),oe.forEach(p),ae.forEach(p),Y=k(ne),D=b(ne,"A",{"aria-label":!0,href:!0,class:!0});var se=y(D);W=b(se,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=y(W);J=b(re,"path",{d:!0},1),y(J).forEach(p),re.forEach(p),se.forEach(p),ne.forEach(p),h.forEach(p),l.forEach(p),t.forEach(p),this.h()},h(){w(r,"href","/"),w(r,"class","svelte-f3e4uo"),w(s,"class","svelte-f3e4uo"),w(v,"href","/about"),w(v,"class","svelte-f3e4uo"),w(u,"class","svelte-f3e4uo"),w(A,"href","/blogs"),w(A,"class","svelte-f3e4uo"),w(x,"class","svelte-f3e4uo"),w(j,"href","/talks"),w(j,"class","svelte-f3e4uo"),w(P,"class","svelte-f3e4uo"),w(N,"href","/notes"),w(N,"class","svelte-f3e4uo"),w(O,"class","svelte-f3e4uo"),w(R,"href","/newsletter"),w(R,"class","svelte-f3e4uo"),w(F,"class","svelte-f3e4uo"),w(G,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),w(q,"viewBox","0 0 24 24"),w(q,"width","1em"),w(q,"height","1em"),w(q,"class","svelte-f3e4uo"),w(U,"aria-label","Twitter account"),w(U,"href","https://twitter.com/lihautan"),w(U,"class","svelte-f3e4uo"),w(J,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),w(W,"viewBox","0 0 24 24"),w(W,"width","1em"),w(W,"height","1em"),w(W,"class","svelte-f3e4uo"),w(D,"aria-label","Github account"),w(D,"href","https://github.com/tanhauhau"),w(D,"class","svelte-f3e4uo"),w(_,"class","social svelte-f3e4uo"),w(o,"class","svelte-f3e4uo"),w(n,"class","svelte-f3e4uo")},m(e,t){h(e,n,t),l(n,a),l(a,o),l(o,s),l(s,r),l(r,c),l(o,i),l(o,u),l(u,v),l(v,I),l(o,$),l(o,x),l(x,A),l(A,T),l(o,S),l(o,P),l(P,j),l(j,C),l(o,L),l(o,O),l(O,N),l(N,H),l(o,M),l(o,F),l(F,R),l(R,z),l(o,B),l(o,_),l(_,U),l(U,q),l(q,G),l(_,Y),l(_,D),l(D,W),l(W,J)},p:e,i:e,o:e,d(e){e&&p(n)}}}class Z extends V{constructor(e){super(),J(this,e,null,K,r,{})}}function Q(t){let n,a,o,s,r,c,i,u,f,v,I,x,A,T,S,P,j,C,L,O;return{c(){n=d("div"),a=d("h1"),o=m("Subscribe to my newsletter"),s=g(),r=d("h2"),c=m("Get the latest blog posts and project updates delivered right to your inbox"),i=g(),u=d("form"),f=d("div"),v=d("input"),I=g(),x=d("input"),T=g(),S=d("input"),P=g(),j=d("p"),C=m("Powered by Buttondown."),this.h()},l(e){n=b(e,"DIV",{class:!0});var t=y(n);a=b(t,"H1",{});var l=y(a);o=E(l,"Subscribe to my newsletter"),l.forEach(p),s=k(t),r=b(t,"H2",{class:!0});var h=y(r);c=E(h,"Get the latest blog posts and project updates delivered right to your inbox"),h.forEach(p),i=k(t),u=b(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var d=y(u);f=b(d,"DIV",{class:!0});var m=y(f);v=b(m,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),I=k(m),x=b(m,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),m.forEach(p),T=k(d),S=b(d,"INPUT",{type:!0,value:!0,name:!0,class:!0}),P=k(d),j=b(d,"P",{class:!0});var g=y(j);C=E(g,"Powered by Buttondown."),g.forEach(p),d.forEach(p),t.forEach(p),this.h()},h(){w(r,"class","svelte-1k1s1co"),w(v,"type","email"),w(v,"name","email"),w(v,"id","bd-email"),w(v,"aria-label","email address"),w(v,"placeholder","youremail@example.com"),w(v,"class","svelte-1k1s1co"),w(x,"type","submit"),x.value="Subscribe",x.disabled=A=!t[0],w(x,"class","svelte-1k1s1co"),w(f,"class","form-item svelte-1k1s1co"),w(S,"type","hidden"),S.value="1",w(S,"name","embed"),w(S,"class","svelte-1k1s1co"),w(j,"class","svelte-1k1s1co"),w(u,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),w(u,"method","post"),w(u,"target","popupwindow"),w(u,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),w(u,"class","embeddable-buttondown-form"),w(n,"class","form svelte-1k1s1co")},m(e,p){var d,m,g,w;h(e,n,p),l(n,a),l(a,o),l(n,s),l(n,r),l(r,c),l(n,i),l(n,u),l(u,f),l(f,v),$(v,t[0]),l(f,I),l(f,x),l(u,T),l(u,S),l(u,P),l(u,j),l(j,C),L||(d=v,m="input",g=t[1],d.addEventListener(m,g,w),O=()=>d.removeEventListener(m,g,w),L=!0)},p(e,[t]){1&t&&v.value!==e[0]&&$(v,e[0]),1&t&&A!==(A=!e[0])&&(x.disabled=A)},i:e,o:e,d(e){e&&p(n),L=!1,O()}}}function X(e,t,n){let a;return[a,function(){a=this.value,n(0,a)}]}class ee extends V{constructor(e){super(),J(this,e,X,Q,r,{})}}function te(e){return S(()=>(setTimeout(()=>{if(window.innerWidth>1080){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",e.id="_carbonads_js",document.body.appendChild(e)}},5e3),()=>{try{const e=document.getElementById("carbonads");e.parentNode.removeChild(e)}catch(e){}})),[]}class ne extends V{constructor(e){super(),J(this,e,te,null,r,{})}}function ae(e,t,n){const a=e.slice();return a[6]=t[n],a}function oe(e,t,n){const a=e.slice();return a[6]=t[n],a}function se(e){let t,n;return{c(){t=d("meta"),this.h()},l(e){t=b(e,"META",{name:!0,content:!0}),this.h()},h(){w(t,"name","keywords"),w(t,"content",n=e[6])},m(e,n){h(e,t,n)},p(e,a){4&a&&n!==(n=e[6])&&w(t,"content",n)},d(e){e&&p(t)}}}function re(e){let t,n,a=e[6]+"";return{c(){t=d("span"),n=m(a),this.h()},l(e){t=b(e,"SPAN",{class:!0});var o=y(t);n=E(o,a),o.forEach(p),this.h()},h(){w(t,"class","svelte-9tqnza")},m(e,a){h(e,t,a),l(t,n)},p(e,t){4&t&&a!==(a=e[6]+"")&&I(n,a)},d(e){e&&p(t)}}}function ce(e){let t,n,a,o,s,r,f,$,A,T,S,P,j,C,L,O,N,H,M,F,R,z,B,W,J,V,K,Q,X,te,ce,ie,le,he,pe,ue,de=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`,fe=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Frandom-stuff-i-learned-from-browser-console",name:e[0]},name:e[0],position:2}]})}<\/script>`;document.title=t=e[0]+" | Tan Li Hau";let me=e[2],ge=[];for(let t=0;t<me.length;t+=1)ge[t]=se(oe(e,me,t));B=new Z({});let ve=e[2],we=[];for(let t=0;t<ve.length;t+=1)we[t]=re(ae(e,ve,t));const ye=e[5].default,be=function(e,t,n,a){if(e){const o=c(e,t,n,a);return e[0](o)}}(ye,e,e[4],null);return le=new ee({}),pe=new ne({}),{c(){n=d("meta"),a=d("meta"),o=d("meta"),s=d("meta"),r=d("meta"),f=d("meta"),$=d("meta"),A=d("meta"),T=d("meta"),S=d("meta"),P=d("meta");for(let e=0;e<ge.length;e+=1)ge[e].c();j=d("meta"),C=d("meta"),O=v(),H=v(),M=g(),F=d("a"),R=m("Skip to content"),z=g(),q(B.$$.fragment),W=g(),J=d("main"),V=d("h1"),K=m(e[0]),Q=g();for(let e=0;e<we.length;e+=1)we[e].c();X=g(),te=d("article"),be&&be.c(),ce=g(),ie=d("footer"),q(le.$$.fragment),he=g(),q(pe.$$.fragment),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-15e3uyc"]',document.head);n=b(c,"META",{name:!0,content:!0}),a=b(c,"META",{name:!0,content:!0}),o=b(c,"META",{name:!0,content:!0}),s=b(c,"META",{name:!0,content:!0}),r=b(c,"META",{name:!0,content:!0}),f=b(c,"META",{name:!0,content:!0}),$=b(c,"META",{name:!0,content:!0}),A=b(c,"META",{name:!0,content:!0}),T=b(c,"META",{name:!0,content:!0}),S=b(c,"META",{name:!0,content:!0}),P=b(c,"META",{name:!0,content:!0});for(let e=0;e<ge.length;e+=1)ge[e].l(c);j=b(c,"META",{itemprop:!0,content:!0}),C=b(c,"META",{itemprop:!0,content:!0}),O=v(),H=v(),c.forEach(p),M=k(t),F=b(t,"A",{href:!0,class:!0});var i=y(F);R=E(i,"Skip to content"),i.forEach(p),z=k(t),G(B.$$.fragment,t),W=k(t),J=b(t,"MAIN",{id:!0,class:!0});var l=y(J);V=b(l,"H1",{});var h=y(V);K=E(h,e[0]),h.forEach(p),Q=k(l);for(let e=0;e<we.length;e+=1)we[e].l(l);X=k(l),te=b(l,"ARTICLE",{});var u=y(te);be&&be.l(u),u.forEach(p),l.forEach(p),ce=k(t),ie=b(t,"FOOTER",{class:!0});var d=y(ie);G(le.$$.fragment,d),he=k(d),G(pe.$$.fragment,d),d.forEach(p),this.h()},h(){w(n,"name","description"),w(n,"content",e[1]),w(a,"name","image"),w(a,"content",null),w(o,"name","og:image"),w(o,"content",null),w(s,"name","og:title"),w(s,"content",e[0]),w(r,"name","og:description"),w(r,"content",e[1]),w(f,"name","og:type"),w(f,"content","website"),w($,"name","twitter:card"),w($,"content","summary_large_image"),w(A,"name","twitter:creator"),w(A,"content","@lihautan"),w(T,"name","twitter:title"),w(T,"content",e[0]),w(S,"name","twitter:description"),w(S,"content",e[1]),w(P,"name","twitter:image"),w(P,"content",null),w(j,"itemprop","url"),w(j,"content","https%3A%2F%2Flihautan.com%2Frandom-stuff-i-learned-from-browser-console"),w(C,"itemprop","image"),w(C,"content",null),L=new x(O),N=new x(H),w(F,"href","#content"),w(F,"class","skip svelte-9tqnza"),w(J,"id","content"),w(J,"class","blog svelte-9tqnza"),w(ie,"class","svelte-9tqnza")},m(e,t){l(document.head,n),l(document.head,a),l(document.head,o),l(document.head,s),l(document.head,r),l(document.head,f),l(document.head,$),l(document.head,A),l(document.head,T),l(document.head,S),l(document.head,P);for(let e=0;e<ge.length;e+=1)ge[e].m(document.head,null);l(document.head,j),l(document.head,C),L.m(de,document.head),l(document.head,O),N.m(fe,document.head),l(document.head,H),h(e,M,t),h(e,F,t),l(F,R),h(e,z,t),Y(B,e,t),h(e,W,t),h(e,J,t),l(J,V),l(V,K),l(J,Q);for(let e=0;e<we.length;e+=1)we[e].m(J,null);l(J,X),l(J,te),be&&be.m(te,null),h(e,ce,t),h(e,ie,t),Y(le,ie,null),l(ie,he),Y(pe,ie,null),ue=!0},p(e,[a]){if((!ue||1&a)&&t!==(t=e[0]+" | Tan Li Hau")&&(document.title=t),(!ue||2&a)&&w(n,"content",e[1]),(!ue||1&a)&&w(s,"content",e[0]),(!ue||2&a)&&w(r,"content",e[1]),(!ue||1&a)&&w(T,"content",e[0]),(!ue||2&a)&&w(S,"content",e[1]),4&a){let t;for(me=e[2],t=0;t<me.length;t+=1){const n=oe(e,me,t);ge[t]?ge[t].p(n,a):(ge[t]=se(n),ge[t].c(),ge[t].m(j.parentNode,j))}for(;t<ge.length;t+=1)ge[t].d(1);ge.length=me.length}if((!ue||3&a)&&de!==(de=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`)&&L.p(de),(!ue||1&a)&&fe!==(fe=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Frandom-stuff-i-learned-from-browser-console",name:e[0]},name:e[0],position:2}]})}<\/script>`)&&N.p(fe),(!ue||1&a)&&I(K,e[0]),4&a){let t;for(ve=e[2],t=0;t<ve.length;t+=1){const n=ae(e,ve,t);we[t]?we[t].p(n,a):(we[t]=re(n),we[t].c(),we[t].m(J,X))}for(;t<we.length;t+=1)we[t].d(1);we.length=ve.length}be&&be.p&&16&a&&i(be,ye,e,e[4],a,null,null)},i(e){ue||(_(B.$$.fragment,e),_(be,e),_(le.$$.fragment,e),_(pe.$$.fragment,e),ue=!0)},o(e){U(B.$$.fragment,e),U(be,e),U(le.$$.fragment,e),U(pe.$$.fragment,e),ue=!1},d(e){p(n),p(a),p(o),p(s),p(r),p(f),p($),p(A),p(T),p(S),p(P),u(ge,e),p(j),p(C),p(O),e&&L.d(),p(H),e&&N.d(),e&&p(M),e&&p(F),e&&p(z),D(B,e),e&&p(W),e&&p(J),u(we,e),be&&be.d(e),e&&p(ce),e&&p(ie),D(le),D(pe)}}}function ie(e,t,n){let{title:a=""}=t,{description:o=""}=t,{tags:s=[]}=t;const r={"@type":"Person",name:"Tan Li Hau"};let{$$slots:c={},$$scope:i}=t;return e.$set=e=>{"title"in e&&n(0,a=e.title),"description"in e&&n(1,o=e.description),"tags"in e&&n(2,s=e.tags),"$$scope"in e&&n(4,i=e.$$scope)},[a,o,s,r,i,c]}class le extends V{constructor(e){super(),J(this,e,ie,ce,r,{title:0,description:1,tags:2})}}function he(t){let n,a,o,s,r,c,i,u,f,v,I,$,x,A,T,S,P,j,C,L,O,N,H,M,F,R,z,B,_,U,q,G,Y,D,W,J,V,K,Z,Q,X,ee,te,ne,ae,oe,se,re,ce,ie,le,he,pe,ue,de,fe,me,ge,ve,we,ye,be,Ee,ke,Ie,$e,xe,Ae,Te,Se,Pe,je,Ce,Le,Oe,Ne,He,Me,Fe,Re,ze,Be,_e,Ue,qe,Ge,Ye,De,We,Je,Ve,Ke,Ze,Qe,Xe,et,tt,nt,at,ot,st,rt,ct,it,lt,ht,pt,ut,dt,ft,mt,gt,vt,wt,yt,bt,Et,kt,It,$t,xt,At,Tt,St,Pt,jt,Ct,Lt,Ot,Nt,Ht,Mt,Ft,Rt,zt,Bt,_t,Ut,qt,Gt,Yt,Dt,Wt,Jt;return{c(){n=d("section"),a=d("ul"),o=d("li"),s=d("a"),r=m("1. Is Facebook the only site that leaves message in the console?"),c=d("li"),i=d("a"),u=m("2. How did the Facebook printed out a styled text in the console?"),f=d("li"),v=d("a"),I=m("3. So can the console print out images?"),$=d("li"),x=d("a"),A=m("So, why not create an express middleware for this?"),T=d("li"),S=d("a"),P=m("Conclusion"),j=g(),C=d("p"),L=m("On one normal day, I opened up my browser’s developer console for no reason. The page I was on, at that moment, was Facebook. And I saw a big red “Stop” in the console, and followed by a big bolded text of “This is a browser feature intended for developers….”."),O=g(),N=d("p"),H=d("picture"),M=d("source"),F=d("source"),R=d("img"),z=g(),B=d("p"),_=m("I paused for a while, amazed by what I’ve discovered randomly. This is quite interesting and I have two questions come up to my mind."),U=g(),q=d("section"),G=d("h2"),Y=d("a"),D=m("1. Is Facebook the only site that leaves message in the console?"),W=g(),J=d("p"),V=m("It turns out to be "),K=d("strong"),Z=m("NO. It’s not just Facebook."),Q=g(),X=d("p"),ee=m("This is what I found out after some random searches: Oculus and Coursera are hiring people through the console!"),te=g(),ne=d("p"),ae=d("picture"),oe=d("source"),se=d("source"),re=d("img"),ce=m("\nOculus hiring people through the console"),ie=g(),le=d("p"),he=d("picture"),pe=d("source"),ue=d("source"),de=d("img"),fe=m("\nCoursera did the same thing too!"),me=g(),ge=d("p"),ve=m("It seems like this is a good place to hire web stack developer. Since the only person who is going to look into the console of your page is a web developer, or a full stack developer, hiring them through your console isn’t a bad idea after all."),we=g(),ye=d("section"),be=d("h2"),Ee=d("a"),ke=m("2. How did the Facebook printed out a styled text in the console?"),Ie=g(),$e=d("p"),xe=m("Actually it turns out it is very simple indeed. You can follow "),Ae=d("a"),Te=m("the StackOverflow thread"),Se=m(" to see how it is done."),Pe=g(),je=d("section"),Ce=d("h2"),Le=d("a"),Oe=m("3. So can the console print out images?"),Ne=g(),He=d("p"),Me=m("It’s a "),Fe=d("strong"),Re=m("YES"),ze=m(" again. But how?"),Be=g(),_e=d("p"),Ue=m("You can refer to this awesome "),qe=d("a"),Ge=m("console.image"),Ye=m(" library developed by adriancooney. He will explain how he did it to you."),De=g(),We=d("section"),Je=d("h2"),Ve=d("a"),Ke=m("So, why not create an express middleware for this?"),Ze=g(),Qe=d("p"),Xe=m("This was the random idea that came out from my mind after seeing websites leaving messages in the console. Why not have an express middleware that injects a script that prints to the console for each html pages served from the "),et=d("a"),tt=m("express server"),nt=m(". It should have an simple intuitive API, and should not pollute to the global namespace at all."),at=g(),ot=d("p"),st=m("So, "),rt=d("a"),ct=m("this is what I’ve come up"),it=m("."),lt=g(),ht=d("p"),pt=m("I know, the name is mouthful and awkward. This is because initially I intended the middleware to just print out a warning message. After a bit of consideration, turns out that hiring in the console should be a good use case too. But the name of the package just stuck there."),ut=g(),dt=d("p"),ft=m("So, how do you use it?"),mt=g(),gt=d("p"),vt=m("It’s simple. See the code snippet below:"),wt=g(),yt=d("pre"),bt=g(),Et=d("p"),kt=m("And there you go."),It=g(),$t=d("p"),xt=d("picture"),At=d("source"),Tt=d("source"),St=d("img"),Pt=g(),jt=d("p"),Ct=d("em"),Lt=m("Disclaimer: I did not own the meme. I got the link from Google search just to try out the API."),Ot=g(),Nt=d("section"),Ht=d("h2"),Mt=d("a"),Ft=m("Conclusion"),Rt=g(),zt=d("p"),Bt=m("So, these are what I’ve learned from a random action (open the developer console) and what I’ve created from it (express-console-warning)."),_t=g(),Ut=d("p"),qt=m("express-console-warning "),Gt=d("a"),Yt=m("github"),Dt=g(),Wt=d("a"),Jt=m("npm"),this.h()},l(e){n=b(e,"SECTION",{});var t=y(n);a=b(t,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var l=y(a);o=b(l,"LI",{});var h=y(o);s=b(h,"A",{href:!0});var d=y(s);r=E(d,"1. Is Facebook the only site that leaves message in the console?"),d.forEach(p),h.forEach(p),c=b(l,"LI",{});var m=y(c);i=b(m,"A",{href:!0});var g=y(i);u=E(g,"2. How did the Facebook printed out a styled text in the console?"),g.forEach(p),m.forEach(p),f=b(l,"LI",{});var w=y(f);v=b(w,"A",{href:!0});var Vt=y(v);I=E(Vt,"3. So can the console print out images?"),Vt.forEach(p),w.forEach(p),$=b(l,"LI",{});var Kt=y($);x=b(Kt,"A",{href:!0});var Zt=y(x);A=E(Zt,"So, why not create an express middleware for this?"),Zt.forEach(p),Kt.forEach(p),T=b(l,"LI",{});var Qt=y(T);S=b(Qt,"A",{href:!0});var Xt=y(S);P=E(Xt,"Conclusion"),Xt.forEach(p),Qt.forEach(p),l.forEach(p),t.forEach(p),j=k(e),C=b(e,"P",{});var en=y(C);L=E(en,"On one normal day, I opened up my browser’s developer console for no reason. The page I was on, at that moment, was Facebook. And I saw a big red “Stop” in the console, and followed by a big bolded text of “This is a browser feature intended for developers….”."),en.forEach(p),O=k(e),N=b(e,"P",{});var tn=y(N);H=b(tn,"PICTURE",{});var nn=y(H);M=b(nn,"SOURCE",{type:!0,srcset:!0}),F=b(nn,"SOURCE",{type:!0,srcset:!0}),R=b(nn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),nn.forEach(p),tn.forEach(p),z=k(e),B=b(e,"P",{});var an=y(B);_=E(an,"I paused for a while, amazed by what I’ve discovered randomly. This is quite interesting and I have two questions come up to my mind."),an.forEach(p),U=k(e),q=b(e,"SECTION",{});var on=y(q);G=b(on,"H2",{});var sn=y(G);Y=b(sn,"A",{href:!0,id:!0});var rn=y(Y);D=E(rn,"1. Is Facebook the only site that leaves message in the console?"),rn.forEach(p),sn.forEach(p),W=k(on),J=b(on,"P",{});var cn=y(J);V=E(cn,"It turns out to be "),K=b(cn,"STRONG",{});var ln=y(K);Z=E(ln,"NO. It’s not just Facebook."),ln.forEach(p),cn.forEach(p),Q=k(on),X=b(on,"P",{});var hn=y(X);ee=E(hn,"This is what I found out after some random searches: Oculus and Coursera are hiring people through the console!"),hn.forEach(p),te=k(on),ne=b(on,"P",{});var pn=y(ne);ae=b(pn,"PICTURE",{});var un=y(ae);oe=b(un,"SOURCE",{type:!0,srcset:!0}),se=b(un,"SOURCE",{type:!0,srcset:!0}),re=b(un,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),un.forEach(p),ce=E(pn,"\nOculus hiring people through the console"),pn.forEach(p),ie=k(on),le=b(on,"P",{});var dn=y(le);he=b(dn,"PICTURE",{});var fn=y(he);pe=b(fn,"SOURCE",{type:!0,srcset:!0}),ue=b(fn,"SOURCE",{type:!0,srcset:!0}),de=b(fn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),fn.forEach(p),fe=E(dn,"\nCoursera did the same thing too!"),dn.forEach(p),me=k(on),ge=b(on,"P",{});var mn=y(ge);ve=E(mn,"It seems like this is a good place to hire web stack developer. Since the only person who is going to look into the console of your page is a web developer, or a full stack developer, hiring them through your console isn’t a bad idea after all."),mn.forEach(p),on.forEach(p),we=k(e),ye=b(e,"SECTION",{});var gn=y(ye);be=b(gn,"H2",{});var vn=y(be);Ee=b(vn,"A",{href:!0,id:!0});var wn=y(Ee);ke=E(wn,"2. How did the Facebook printed out a styled text in the console?"),wn.forEach(p),vn.forEach(p),Ie=k(gn),$e=b(gn,"P",{});var yn=y($e);xe=E(yn,"Actually it turns out it is very simple indeed. You can follow "),Ae=b(yn,"A",{href:!0,rel:!0});var bn=y(Ae);Te=E(bn,"the StackOverflow thread"),bn.forEach(p),Se=E(yn," to see how it is done."),yn.forEach(p),gn.forEach(p),Pe=k(e),je=b(e,"SECTION",{});var En=y(je);Ce=b(En,"H2",{});var kn=y(Ce);Le=b(kn,"A",{href:!0,id:!0});var In=y(Le);Oe=E(In,"3. So can the console print out images?"),In.forEach(p),kn.forEach(p),Ne=k(En),He=b(En,"P",{});var $n=y(He);Me=E($n,"It’s a "),Fe=b($n,"STRONG",{});var xn=y(Fe);Re=E(xn,"YES"),xn.forEach(p),ze=E($n," again. But how?"),$n.forEach(p),Be=k(En),_e=b(En,"P",{});var An=y(_e);Ue=E(An,"You can refer to this awesome "),qe=b(An,"A",{href:!0,rel:!0});var Tn=y(qe);Ge=E(Tn,"console.image"),Tn.forEach(p),Ye=E(An," library developed by adriancooney. He will explain how he did it to you."),An.forEach(p),En.forEach(p),De=k(e),We=b(e,"SECTION",{});var Sn=y(We);Je=b(Sn,"H2",{});var Pn=y(Je);Ve=b(Pn,"A",{href:!0,id:!0});var jn=y(Ve);Ke=E(jn,"So, why not create an express middleware for this?"),jn.forEach(p),Pn.forEach(p),Ze=k(Sn),Qe=b(Sn,"P",{});var Cn=y(Qe);Xe=E(Cn,"This was the random idea that came out from my mind after seeing websites leaving messages in the console. Why not have an express middleware that injects a script that prints to the console for each html pages served from the "),et=b(Cn,"A",{href:!0,rel:!0});var Ln=y(et);tt=E(Ln,"express server"),Ln.forEach(p),nt=E(Cn,". It should have an simple intuitive API, and should not pollute to the global namespace at all."),Cn.forEach(p),at=k(Sn),ot=b(Sn,"P",{});var On=y(ot);st=E(On,"So, "),rt=b(On,"A",{href:!0,rel:!0});var Nn=y(rt);ct=E(Nn,"this is what I’ve come up"),Nn.forEach(p),it=E(On,"."),On.forEach(p),lt=k(Sn),ht=b(Sn,"P",{});var Hn=y(ht);pt=E(Hn,"I know, the name is mouthful and awkward. This is because initially I intended the middleware to just print out a warning message. After a bit of consideration, turns out that hiring in the console should be a good use case too. But the name of the package just stuck there."),Hn.forEach(p),ut=k(Sn),dt=b(Sn,"P",{});var Mn=y(dt);ft=E(Mn,"So, how do you use it?"),Mn.forEach(p),mt=k(Sn),gt=b(Sn,"P",{});var Fn=y(gt);vt=E(Fn,"It’s simple. See the code snippet below:"),Fn.forEach(p),wt=k(Sn),yt=b(Sn,"PRE",{class:!0}),y(yt).forEach(p),bt=k(Sn),Et=b(Sn,"P",{});var Rn=y(Et);kt=E(Rn,"And there you go."),Rn.forEach(p),It=k(Sn),$t=b(Sn,"P",{});var zn=y($t);xt=b(zn,"PICTURE",{});var Bn=y(xt);At=b(Bn,"SOURCE",{type:!0,srcset:!0}),Tt=b(Bn,"SOURCE",{type:!0,srcset:!0}),St=b(Bn,"IMG",{title:!0,alt:!0,"data-src":!0,loading:!0}),Bn.forEach(p),zn.forEach(p),Pt=k(Sn),jt=b(Sn,"P",{});var _n=y(jt);Ct=b(_n,"EM",{});var Un=y(Ct);Lt=E(Un,"Disclaimer: I did not own the meme. I got the link from Google search just to try out the API."),Un.forEach(p),_n.forEach(p),Sn.forEach(p),Ot=k(e),Nt=b(e,"SECTION",{});var qn=y(Nt);Ht=b(qn,"H2",{});var Gn=y(Ht);Mt=b(Gn,"A",{href:!0,id:!0});var Yn=y(Mt);Ft=E(Yn,"Conclusion"),Yn.forEach(p),Gn.forEach(p),Rt=k(qn),zt=b(qn,"P",{});var Dn=y(zt);Bt=E(Dn,"So, these are what I’ve learned from a random action (open the developer console) and what I’ve created from it (express-console-warning)."),Dn.forEach(p),_t=k(qn),Ut=b(qn,"P",{});var Wn=y(Ut);qt=E(Wn,"express-console-warning "),Gt=b(Wn,"A",{href:!0,rel:!0});var Jn=y(Gt);Yt=E(Jn,"github"),Jn.forEach(p),Dt=k(Wn),Wt=b(Wn,"A",{href:!0,rel:!0});var Vn=y(Wt);Jt=E(Vn,"npm"),Vn.forEach(p),Wn.forEach(p),qn.forEach(p),this.h()},h(){w(s,"href","#is-facebook-the-only-site-that-leaves-message-in-the-console"),w(i,"href","#how-did-the-facebook-printed-out-a-styled-text-in-the-console"),w(v,"href","#so-can-the-console-print-out-images"),w(x,"href","#so-why-not-create-an-express-middleware-for-this"),w(S,"href","#conclusion"),w(a,"class","sitemap"),w(a,"id","sitemap"),w(a,"role","navigation"),w(a,"aria-label","Table of Contents"),w(M,"type","image/webp"),w(M,"srcset","8ac1c8e1326d8b89.webp"),w(F,"type","image/jpeg"),w(F,"srcset","8ac1c8e1326d8b89.png"),w(R,"title","null"),w(R,"alt","fb"),w(R,"data-src","8ac1c8e1326d8b89.png"),w(R,"loading","lazy"),w(Y,"href","#is-facebook-the-only-site-that-leaves-message-in-the-console"),w(Y,"id","is-facebook-the-only-site-that-leaves-message-in-the-console"),w(oe,"type","image/webp"),w(oe,"srcset","0cf8eaf1f058ddd0.webp"),w(se,"type","image/jpeg"),w(se,"srcset","0cf8eaf1f058ddd0.png"),w(re,"title","null"),w(re,"alt","oc"),w(re,"data-src","0cf8eaf1f058ddd0.png"),w(re,"loading","lazy"),w(pe,"type","image/webp"),w(pe,"srcset","290837455fa987e5.webp"),w(ue,"type","image/jpeg"),w(ue,"srcset","290837455fa987e5.png"),w(de,"title","null"),w(de,"alt","coursera"),w(de,"data-src","290837455fa987e5.png"),w(de,"loading","lazy"),w(Ee,"href","#how-did-the-facebook-printed-out-a-styled-text-in-the-console"),w(Ee,"id","how-did-the-facebook-printed-out-a-styled-text-in-the-console"),w(Ae,"href","http://stackoverflow.com/a/22156044/1513547"),w(Ae,"rel","nofollow"),w(Le,"href","#so-can-the-console-print-out-images"),w(Le,"id","so-can-the-console-print-out-images"),w(qe,"href","https://github.com/adriancooney/console.image"),w(qe,"rel","nofollow"),w(Ve,"href","#so-why-not-create-an-express-middleware-for-this"),w(Ve,"id","so-why-not-create-an-express-middleware-for-this"),w(et,"href","http://expressjs.com/"),w(et,"rel","nofollow"),w(rt,"href","https://www.npmjs.com/package/express-console-warning"),w(rt,"rel","nofollow"),w(yt,"class","language-js"),w(At,"type","image/webp"),w(At,"srcset","de8e3ee6e82019d1.webp"),w(Tt,"type","image/jpeg"),w(Tt,"srcset","de8e3ee6e82019d1.png"),w(St,"title","null"),w(St,"alt","express-console-warning"),w(St,"data-src","de8e3ee6e82019d1.png"),w(St,"loading","lazy"),w(Mt,"href","#conclusion"),w(Mt,"id","conclusion"),w(Gt,"href","https://github.com/tanhauhau/express-console-warning"),w(Gt,"rel","nofollow"),w(Wt,"href","http://npmjs.com/package/express-console-warning"),w(Wt,"rel","nofollow")},m(e,t){h(e,n,t),l(n,a),l(a,o),l(o,s),l(s,r),l(a,c),l(c,i),l(i,u),l(a,f),l(f,v),l(v,I),l(a,$),l($,x),l(x,A),l(a,T),l(T,S),l(S,P),h(e,j,t),h(e,C,t),l(C,L),h(e,O,t),h(e,N,t),l(N,H),l(H,M),l(H,F),l(H,R),h(e,z,t),h(e,B,t),l(B,_),h(e,U,t),h(e,q,t),l(q,G),l(G,Y),l(Y,D),l(q,W),l(q,J),l(J,V),l(J,K),l(K,Z),l(q,Q),l(q,X),l(X,ee),l(q,te),l(q,ne),l(ne,ae),l(ae,oe),l(ae,se),l(ae,re),l(ne,ce),l(q,ie),l(q,le),l(le,he),l(he,pe),l(he,ue),l(he,de),l(le,fe),l(q,me),l(q,ge),l(ge,ve),h(e,we,t),h(e,ye,t),l(ye,be),l(be,Ee),l(Ee,ke),l(ye,Ie),l(ye,$e),l($e,xe),l($e,Ae),l(Ae,Te),l($e,Se),h(e,Pe,t),h(e,je,t),l(je,Ce),l(Ce,Le),l(Le,Oe),l(je,Ne),l(je,He),l(He,Me),l(He,Fe),l(Fe,Re),l(He,ze),l(je,Be),l(je,_e),l(_e,Ue),l(_e,qe),l(qe,Ge),l(_e,Ye),h(e,De,t),h(e,We,t),l(We,Je),l(Je,Ve),l(Ve,Ke),l(We,Ze),l(We,Qe),l(Qe,Xe),l(Qe,et),l(et,tt),l(Qe,nt),l(We,at),l(We,ot),l(ot,st),l(ot,rt),l(rt,ct),l(ot,it),l(We,lt),l(We,ht),l(ht,pt),l(We,ut),l(We,dt),l(dt,ft),l(We,mt),l(We,gt),l(gt,vt),l(We,wt),l(We,yt),yt.innerHTML='<code class="language-js"><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\thr <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express-console-warning\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>hr<span class="token punctuation">.</span><span class="token constant">LOG</span><span class="token punctuation">(</span><span class="token string">\'Hello world\'</span><span class="token punctuation">)</span>\n\t  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">\'This is a blue text\'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>color<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'x-large\'</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n\t  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">\'and this is red\'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>color<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'x-large\'</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n\t  <span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token string">\'http://memesvault.com/wp-content/uploads/Best-Meme-Faces-14.png\'</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span>\n\t  <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">\'client\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',l(We,bt),l(We,Et),l(Et,kt),l(We,It),l(We,$t),l($t,xt),l(xt,At),l(xt,Tt),l(xt,St),l(We,Pt),l(We,jt),l(jt,Ct),l(Ct,Lt),h(e,Ot,t),h(e,Nt,t),l(Nt,Ht),l(Ht,Mt),l(Mt,Ft),l(Nt,Rt),l(Nt,zt),l(zt,Bt),l(Nt,_t),l(Nt,Ut),l(Ut,qt),l(Ut,Gt),l(Gt,Yt),l(Ut,Dt),l(Ut,Wt),l(Wt,Jt)},p:e,d(e){e&&p(n),e&&p(j),e&&p(C),e&&p(O),e&&p(N),e&&p(z),e&&p(B),e&&p(U),e&&p(q),e&&p(we),e&&p(ye),e&&p(Pe),e&&p(je),e&&p(De),e&&p(We),e&&p(Ot),e&&p(Nt)}}}function pe(e){let n,a;const o=[ue];let s={$$slots:{default:[he]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new le({props:s}),{c(){q(n.$$.fragment)},l(e){G(n.$$.fragment,e)},m(e,t){Y(n,e,t),a=!0},p(e,[t]){const a=0&t?function(e,t){const n={},a={},o={$$scope:1};let s=e.length;for(;s--;){const r=e[s],c=t[s];if(c){for(const e in r)e in c||(a[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[s]=c}else for(const e in r)o[e]=1}for(const e in a)e in n||(n[e]=void 0);return n}(o,[(s=ue,"object"==typeof s&&null!==s?s:{})]):{};var s;1&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){a||(_(n.$$.fragment,e),a=!0)},o(e){U(n.$$.fragment,e),a=!1},d(e){D(n,e)}}}const ue={title:"Random stuff that I’ve learned from a browser’s developer console",date:"2016-04-20T08:00:00Z",description:"I opened up my browser’s developer console for no reason, and I found this",slug:"random-stuff-i-learned-from-browser-console",type:"blog"};class de extends V{constructor(e){super(),J(this,e,null,pe,r,{})}}setTimeout(()=>{new de({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);
