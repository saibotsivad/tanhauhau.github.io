function e(){}function t(e,t){for(const o in t)e[o]=t[o];return e}function o(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(o)}function a(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,o,n,r){return e[1]&&r?t(n.ctx.slice(),e[1](r(o))):n.ctx}function s(e,t,o,n,r,a,c){const s=function(e,t,o,n){if(e[2]&&n){const r=e[2](n(o));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],o=Math.max(t.dirty.length,r.length);for(let n=0;n<o;n+=1)e[n]=t.dirty[n]|r[n];return e}return t.dirty|r}return t.dirty}(t,n,r,a);if(s){const r=i(t,o,n,c);e.p(r,s)}}function l(e,t){e.appendChild(t)}function h(e,t,o){e.insertBefore(t,o||null)}function d(e){e.parentNode.removeChild(e)}function f(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function u(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function v(){return p("")}function y(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function E(e){return Array.from(e.childNodes)}function b(e,t,o,n){for(let n=0;n<e.length;n+=1){const r=e[n];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];o[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(n,1)[0]}}return n?m(t):u(t)}function $(e,t){for(let o=0;o<e.length;o+=1){const n=e[o];if(3===n.nodeType)return n.data=""+t,e.splice(o,1)[0]}return p(t)}function w(e){return $(e," ")}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t){e.value=null==t?"":t}class x{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,o=null){this.e||(this.e=u(t.nodeName),this.t=t,this.h(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}let T;function C(e){T=e}function L(e){(function(){if(!T)throw new Error("Function called outside component initialization");return T})().$$.on_mount.push(e)}const O=[],I=[],D=[],N=[],M=Promise.resolve();let S=!1;function _(e){D.push(e)}let H=!1;const j=new Set;function B(){if(!H){H=!0;do{for(let e=0;e<O.length;e+=1){const t=O[e];C(t),P(t.$$)}for(O.length=0;I.length;)I.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];j.has(t)||(j.add(t),t())}D.length=0}while(O.length);for(;N.length;)N.pop()();S=!1,H=!1,j.clear()}}function P(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const F=new Set;function z(e,t){e&&e.i&&(F.delete(e),e.i(t))}function q(e,t,o,n){if(e&&e.o){if(F.has(e))return;F.add(e),(void 0).c.push(()=>{F.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}}function R(e){e&&e.c()}function G(e,t){e&&e.l(t)}function U(e,t,n){const{fragment:c,on_mount:i,on_destroy:s,after_update:l}=e.$$;c&&c.m(t,n),_(()=>{const t=i.map(o).filter(a);s?s.push(...t):r(t),e.$$.on_mount=[]}),l.forEach(_)}function J(e,t){const o=e.$$;null!==o.fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function V(e,t){-1===e.$$.dirty[0]&&(O.push(e),S||(S=!0,M.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(t,o,a,c,i,s,l=[-1]){const h=T;C(t);const f=o.props||{},u=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:l};let m=!1;if(u.ctx=a?a(t,f,(e,o,...n)=>{const r=n.length?n[0]:o;return u.ctx&&i(u.ctx[e],u.ctx[e]=r)&&(u.bound[e]&&u.bound[e](r),m&&V(t,e)),o}):[],u.update(),m=!0,r(u.before_update),u.fragment=!!c&&c(u.ctx),o.target){if(o.hydrate){const e=E(o.target);u.fragment&&u.fragment.l(e),e.forEach(d)}else u.fragment&&u.fragment.c();o.intro&&z(t.$$.fragment),U(t,o.target,o.anchor),B()}C(h)}class W{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(){}}function K(t){let o,n,r,a,c,i,s,f,v,k,A,x,T,C,L,O,I,D,N,M,S,_,H,j,B,P,F,z,q,R,G,U,J,V,Y;return{c(){o=u("header"),n=u("nav"),r=u("ul"),a=u("li"),c=u("a"),i=p("Tan Li Hau"),s=g(),f=u("li"),v=u("a"),k=p("About"),A=g(),x=u("li"),T=u("a"),C=p("Writings"),L=g(),O=u("li"),I=u("a"),D=p("Talks"),N=g(),M=u("li"),S=u("a"),_=p("Notes"),H=g(),j=u("li"),B=u("a"),P=p("Newsletter"),F=g(),z=u("li"),q=u("a"),R=m("svg"),G=m("path"),U=g(),J=u("a"),V=m("svg"),Y=m("path"),this.h()},l(e){o=b(e,"HEADER",{class:!0});var t=E(o);n=b(t,"NAV",{});var l=E(n);r=b(l,"UL",{class:!0});var h=E(r);a=b(h,"LI",{class:!0});var u=E(a);c=b(u,"A",{href:!0,class:!0});var m=E(c);i=$(m,"Tan Li Hau"),m.forEach(d),u.forEach(d),s=w(h),f=b(h,"LI",{class:!0});var p=E(f);v=b(p,"A",{href:!0,class:!0});var g=E(v);k=$(g,"About"),g.forEach(d),p.forEach(d),A=w(h),x=b(h,"LI",{class:!0});var y=E(x);T=b(y,"A",{href:!0,class:!0});var W=E(T);C=$(W,"Writings"),W.forEach(d),y.forEach(d),L=w(h),O=b(h,"LI",{class:!0});var K=E(O);I=b(K,"A",{href:!0,class:!0});var Q=E(I);D=$(Q,"Talks"),Q.forEach(d),K.forEach(d),N=w(h),M=b(h,"LI",{class:!0});var Z=E(M);S=b(Z,"A",{href:!0,class:!0});var X=E(S);_=$(X,"Notes"),X.forEach(d),Z.forEach(d),H=w(h),j=b(h,"LI",{class:!0});var ee=E(j);B=b(ee,"A",{href:!0,class:!0});var te=E(B);P=$(te,"Newsletter"),te.forEach(d),ee.forEach(d),F=w(h),z=b(h,"LI",{class:!0});var oe=E(z);q=b(oe,"A",{"aria-label":!0,href:!0,class:!0});var ne=E(q);R=b(ne,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=E(R);G=b(re,"path",{d:!0},1),E(G).forEach(d),re.forEach(d),ne.forEach(d),U=w(oe),J=b(oe,"A",{"aria-label":!0,href:!0,class:!0});var ae=E(J);V=b(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ce=E(V);Y=b(ce,"path",{d:!0},1),E(Y).forEach(d),ce.forEach(d),ae.forEach(d),oe.forEach(d),h.forEach(d),l.forEach(d),t.forEach(d),this.h()},h(){y(c,"href","/"),y(c,"class","svelte-f3e4uo"),y(a,"class","svelte-f3e4uo"),y(v,"href","/about"),y(v,"class","svelte-f3e4uo"),y(f,"class","svelte-f3e4uo"),y(T,"href","/blogs"),y(T,"class","svelte-f3e4uo"),y(x,"class","svelte-f3e4uo"),y(I,"href","/talks"),y(I,"class","svelte-f3e4uo"),y(O,"class","svelte-f3e4uo"),y(S,"href","/notes"),y(S,"class","svelte-f3e4uo"),y(M,"class","svelte-f3e4uo"),y(B,"href","/newsletter"),y(B,"class","svelte-f3e4uo"),y(j,"class","svelte-f3e4uo"),y(G,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),y(R,"viewBox","0 0 24 24"),y(R,"width","1em"),y(R,"height","1em"),y(R,"class","svelte-f3e4uo"),y(q,"aria-label","Twitter account"),y(q,"href","https://twitter.com/lihautan"),y(q,"class","svelte-f3e4uo"),y(Y,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),y(V,"viewBox","0 0 24 24"),y(V,"width","1em"),y(V,"height","1em"),y(V,"class","svelte-f3e4uo"),y(J,"aria-label","Github account"),y(J,"href","https://github.com/tanhauhau"),y(J,"class","svelte-f3e4uo"),y(z,"class","social svelte-f3e4uo"),y(r,"class","svelte-f3e4uo"),y(o,"class","svelte-f3e4uo")},m(e,t){h(e,o,t),l(o,n),l(n,r),l(r,a),l(a,c),l(c,i),l(r,s),l(r,f),l(f,v),l(v,k),l(r,A),l(r,x),l(x,T),l(T,C),l(r,L),l(r,O),l(O,I),l(I,D),l(r,N),l(r,M),l(M,S),l(S,_),l(r,H),l(r,j),l(j,B),l(B,P),l(r,F),l(r,z),l(z,q),l(q,R),l(R,G),l(z,U),l(z,J),l(J,V),l(V,Y)},p:e,i:e,o:e,d(e){e&&d(o)}}}class Q extends W{constructor(e){super(),Y(this,e,null,K,c,{})}}function Z(t){let o,n,r,a,c,i,s,f,m,v,k,x,T,C,L,O,I,D,N,M;return{c(){o=u("div"),n=u("h1"),r=p("Subscribe to my newsletter"),a=g(),c=u("h2"),i=p("Get the latest blog posts and project updates delivered right to your inbox"),s=g(),f=u("form"),m=u("div"),v=u("input"),k=g(),x=u("input"),C=g(),L=u("input"),O=g(),I=u("p"),D=p("Powered by Buttondown."),this.h()},l(e){o=b(e,"DIV",{class:!0});var t=E(o);n=b(t,"H1",{});var l=E(n);r=$(l,"Subscribe to my newsletter"),l.forEach(d),a=w(t),c=b(t,"H2",{class:!0});var h=E(c);i=$(h,"Get the latest blog posts and project updates delivered right to your inbox"),h.forEach(d),s=w(t),f=b(t,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var u=E(f);m=b(u,"DIV",{class:!0});var p=E(m);v=b(p,"INPUT",{type:!0,name:!0,id:!0,"aria-label":!0,placeholder:!0,class:!0}),k=w(p),x=b(p,"INPUT",{type:!0,value:!0,disabled:!0,class:!0}),p.forEach(d),C=w(u),L=b(u,"INPUT",{type:!0,value:!0,name:!0,class:!0}),O=w(u),I=b(u,"P",{class:!0});var g=E(I);D=$(g,"Powered by Buttondown."),g.forEach(d),u.forEach(d),t.forEach(d),this.h()},h(){y(c,"class","svelte-1k1s1co"),y(v,"type","email"),y(v,"name","email"),y(v,"id","bd-email"),y(v,"aria-label","email address"),y(v,"placeholder","youremail@example.com"),y(v,"class","svelte-1k1s1co"),y(x,"type","submit"),x.value="Subscribe",x.disabled=T=!t[0],y(x,"class","svelte-1k1s1co"),y(m,"class","form-item svelte-1k1s1co"),y(L,"type","hidden"),L.value="1",y(L,"name","embed"),y(L,"class","svelte-1k1s1co"),y(I,"class","svelte-1k1s1co"),y(f,"action","https://buttondown.email/api/emails/embed-subscribe/lihautan"),y(f,"method","post"),y(f,"target","popupwindow"),y(f,"onsubmit","window.open('https://buttondown.email/lihautan', 'popupwindow')"),y(f,"class","embeddable-buttondown-form"),y(o,"class","form svelte-1k1s1co")},m(e,d){var u,p,g,y;h(e,o,d),l(o,n),l(n,r),l(o,a),l(o,c),l(c,i),l(o,s),l(o,f),l(f,m),l(m,v),A(v,t[0]),l(m,k),l(m,x),l(f,C),l(f,L),l(f,O),l(f,I),l(I,D),N||(u=v,p="input",g=t[1],u.addEventListener(p,g,y),M=()=>u.removeEventListener(p,g,y),N=!0)},p(e,[t]){1&t&&v.value!==e[0]&&A(v,e[0]),1&t&&T!==(T=!e[0])&&(x.disabled=T)},i:e,o:e,d(e){e&&d(o),N=!1,M()}}}function X(e,t,o){let n;return[n,function(){n=this.value,o(0,n)}]}class ee extends W{constructor(e){super(),Y(this,e,X,Z,c,{})}}function te(e){return L(()=>(setTimeout(()=>{if(window.innerWidth>1080){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//cdn.carbonads.com/carbon.js?serve=CE7ITK3E&placement=lihautancom",e.id="_carbonads_js",document.body.appendChild(e)}},5e3),()=>{try{const e=document.getElementById("carbonads");e.parentNode.removeChild(e)}catch(e){}})),[]}class oe extends W{constructor(e){super(),Y(this,e,te,null,c,{})}}function ne(e,t,o){const n=e.slice();return n[6]=t[o],n}function re(e,t,o){const n=e.slice();return n[6]=t[o],n}function ae(e){let t,o;return{c(){t=u("meta"),this.h()},l(e){t=b(e,"META",{name:!0,content:!0}),this.h()},h(){y(t,"name","keywords"),y(t,"content",o=e[6])},m(e,o){h(e,t,o)},p(e,n){4&n&&o!==(o=e[6])&&y(t,"content",o)},d(e){e&&d(t)}}}function ce(e){let t,o,n=e[6]+"";return{c(){t=u("span"),o=p(n),this.h()},l(e){t=b(e,"SPAN",{class:!0});var r=E(t);o=$(r,n),r.forEach(d),this.h()},h(){y(t,"class","svelte-9tqnza")},m(e,n){h(e,t,n),l(t,o)},p(e,t){4&t&&n!==(n=e[6]+"")&&k(o,n)},d(e){e&&d(t)}}}function ie(e){let t,o,n,r,a,c,m,A,T,C,L,O,I,D,N,M,S,_,H,j,B,P,F,V,Y,W,K,Z,X,te,ie,se,le,he,de,fe,ue=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`,me=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fwhy-docker-ignores-my-file",name:e[0]},name:e[0],position:2}]})}<\/script>`;document.title=t=e[0]+" | Tan Li Hau";let pe=e[2],ge=[];for(let t=0;t<pe.length;t+=1)ge[t]=ae(re(e,pe,t));F=new Q({});let ve=e[2],ye=[];for(let t=0;t<ve.length;t+=1)ye[t]=ce(ne(e,ve,t));const Ee=e[5].default,be=function(e,t,o,n){if(e){const r=i(e,t,o,n);return e[0](r)}}(Ee,e,e[4],null);return le=new ee({}),de=new oe({}),{c(){o=u("meta"),n=u("meta"),r=u("meta"),a=u("meta"),c=u("meta"),m=u("meta"),A=u("meta"),T=u("meta"),C=u("meta"),L=u("meta"),O=u("meta");for(let e=0;e<ge.length;e+=1)ge[e].c();I=u("meta"),D=u("meta"),M=v(),_=v(),H=g(),j=u("a"),B=p("Skip to content"),P=g(),R(F.$$.fragment),V=g(),Y=u("main"),W=u("h1"),K=p(e[0]),Z=g();for(let e=0;e<ye.length;e+=1)ye[e].c();X=g(),te=u("article"),be&&be.c(),ie=g(),se=u("footer"),R(le.$$.fragment),he=g(),R(de.$$.fragment),this.h()},l(t){const i=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-15e3uyc"]',document.head);o=b(i,"META",{name:!0,content:!0}),n=b(i,"META",{name:!0,content:!0}),r=b(i,"META",{name:!0,content:!0}),a=b(i,"META",{name:!0,content:!0}),c=b(i,"META",{name:!0,content:!0}),m=b(i,"META",{name:!0,content:!0}),A=b(i,"META",{name:!0,content:!0}),T=b(i,"META",{name:!0,content:!0}),C=b(i,"META",{name:!0,content:!0}),L=b(i,"META",{name:!0,content:!0}),O=b(i,"META",{name:!0,content:!0});for(let e=0;e<ge.length;e+=1)ge[e].l(i);I=b(i,"META",{itemprop:!0,content:!0}),D=b(i,"META",{itemprop:!0,content:!0}),M=v(),_=v(),i.forEach(d),H=w(t),j=b(t,"A",{href:!0,class:!0});var s=E(j);B=$(s,"Skip to content"),s.forEach(d),P=w(t),G(F.$$.fragment,t),V=w(t),Y=b(t,"MAIN",{id:!0,class:!0});var l=E(Y);W=b(l,"H1",{});var h=E(W);K=$(h,e[0]),h.forEach(d),Z=w(l);for(let e=0;e<ye.length;e+=1)ye[e].l(l);X=w(l),te=b(l,"ARTICLE",{});var f=E(te);be&&be.l(f),f.forEach(d),l.forEach(d),ie=w(t),se=b(t,"FOOTER",{class:!0});var u=E(se);G(le.$$.fragment,u),he=w(u),G(de.$$.fragment,u),u.forEach(d),this.h()},h(){y(o,"name","description"),y(o,"content",e[1]),y(n,"name","image"),y(n,"content",null),y(r,"name","og:image"),y(r,"content",null),y(a,"name","og:title"),y(a,"content",e[0]),y(c,"name","og:description"),y(c,"content",e[1]),y(m,"name","og:type"),y(m,"content","website"),y(A,"name","twitter:card"),y(A,"content","summary_large_image"),y(T,"name","twitter:creator"),y(T,"content","@lihautan"),y(C,"name","twitter:title"),y(C,"content",e[0]),y(L,"name","twitter:description"),y(L,"content",e[1]),y(O,"name","twitter:image"),y(O,"content",null),y(I,"itemprop","url"),y(I,"content","https%3A%2F%2Flihautan.com%2Fwhy-docker-ignores-my-file"),y(D,"itemprop","image"),y(D,"content",null),N=new x(M),S=new x(_),y(j,"href","#content"),y(j,"class","skip svelte-9tqnza"),y(Y,"id","content"),y(Y,"class","blog svelte-9tqnza"),y(se,"class","svelte-9tqnza")},m(e,t){l(document.head,o),l(document.head,n),l(document.head,r),l(document.head,a),l(document.head,c),l(document.head,m),l(document.head,A),l(document.head,T),l(document.head,C),l(document.head,L),l(document.head,O);for(let e=0;e<ge.length;e+=1)ge[e].m(document.head,null);l(document.head,I),l(document.head,D),N.m(ue,document.head),l(document.head,M),S.m(me,document.head),l(document.head,_),h(e,H,t),h(e,j,t),l(j,B),h(e,P,t),U(F,e,t),h(e,V,t),h(e,Y,t),l(Y,W),l(W,K),l(Y,Z);for(let e=0;e<ye.length;e+=1)ye[e].m(Y,null);l(Y,X),l(Y,te),be&&be.m(te,null),h(e,ie,t),h(e,se,t),U(le,se,null),l(se,he),U(de,se,null),fe=!0},p(e,[n]){if((!fe||1&n)&&t!==(t=e[0]+" | Tan Li Hau")&&(document.title=t),(!fe||2&n)&&y(o,"content",e[1]),(!fe||1&n)&&y(a,"content",e[0]),(!fe||2&n)&&y(c,"content",e[1]),(!fe||1&n)&&y(C,"content",e[0]),(!fe||2&n)&&y(L,"content",e[1]),4&n){let t;for(pe=e[2],t=0;t<pe.length;t+=1){const o=re(e,pe,t);ge[t]?ge[t].p(o,n):(ge[t]=ae(o),ge[t].c(),ge[t].m(I.parentNode,I))}for(;t<ge.length;t+=1)ge[t].d(1);ge.length=pe.length}if((!fe||3&n)&&ue!==(ue=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Article",author:e[3],copyrightHolder:e[3],copyrightYear:"2020",creator:e[3],publisher:e[3],description:e[1],headline:e[0],name:e[0],inLanguage:"en"})}<\/script>`)&&N.p(ue),(!fe||1&n)&&me!==(me=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":"https://lihautan.com",name:"Homepage"},name:"Homepage",position:1},{"@type":"ListItem",item:{"@id":"https%3A%2F%2Flihautan.com%2Fwhy-docker-ignores-my-file",name:e[0]},name:e[0],position:2}]})}<\/script>`)&&S.p(me),(!fe||1&n)&&k(K,e[0]),4&n){let t;for(ve=e[2],t=0;t<ve.length;t+=1){const o=ne(e,ve,t);ye[t]?ye[t].p(o,n):(ye[t]=ce(o),ye[t].c(),ye[t].m(Y,X))}for(;t<ye.length;t+=1)ye[t].d(1);ye.length=ve.length}be&&be.p&&16&n&&s(be,Ee,e,e[4],n,null,null)},i(e){fe||(z(F.$$.fragment,e),z(be,e),z(le.$$.fragment,e),z(de.$$.fragment,e),fe=!0)},o(e){q(F.$$.fragment,e),q(be,e),q(le.$$.fragment,e),q(de.$$.fragment,e),fe=!1},d(e){d(o),d(n),d(r),d(a),d(c),d(m),d(A),d(T),d(C),d(L),d(O),f(ge,e),d(I),d(D),d(M),e&&N.d(),d(_),e&&S.d(),e&&d(H),e&&d(j),e&&d(P),J(F,e),e&&d(V),e&&d(Y),f(ye,e),be&&be.d(e),e&&d(ie),e&&d(se),J(le),J(de)}}}function se(e,t,o){let{title:n=""}=t,{description:r=""}=t,{tags:a=[]}=t;const c={"@type":"Person",name:"Tan Li Hau"};let{$$slots:i={},$$scope:s}=t;return e.$set=e=>{"title"in e&&o(0,n=e.title),"description"in e&&o(1,r=e.description),"tags"in e&&o(2,a=e.tags),"$$scope"in e&&o(4,s=e.$$scope)},[n,r,a,c,s,i]}class le extends W{constructor(e){super(),Y(this,e,se,ie,c,{title:0,description:1,tags:2})}}function he(e){let t,o,n,r,a,c,i,s,f,m,v,k,A,x,T,C,L,O,I,D,N,M,S,_,H,j,B,P,F,z,q,R,G,U,J,V,Y,W,K,Q,Z,X,ee,te,oe,ne,re,ae,ce,ie,se,le,he,de,fe,ue,me,pe,ge,ve,ye,Ee,be,$e,we,ke,Ae,xe,Te,Ce,Le,Oe,Ie,De,Ne,Me,Se,_e,He,je,Be,Pe,Fe,ze,qe,Re;return{c(){t=u("p"),o=p("From the "),n=u("a"),r=p("official docs"),a=p(" of docker for .dockerignore:"),c=g(),i=u("blockquote"),s=u("p"),f=p("Before the docker CLI sends the context to the docker daemon, it looks for a file named "),m=u("code"),v=p(".dockerignore"),k=p(" in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using "),A=u("code"),x=p("ADD"),T=p(" or "),C=u("code"),L=p("COPY"),O=p("."),I=g(),D=u("p"),N=p("Docker CLI will only look for "),M=u("code"),S=p(".dockerignore"),_=p(" file in the "),H=u("strong"),j=p("root directory of the context"),B=p(", if you have a monorepo of multiple packages, make sure "),P=u("code"),F=p(".dockerignore"),z=p(" file is on the root directory of your context, it will ignore it if it is somewhere in the subfolder."),q=g(),R=u("p"),G=p("About pattern matching of the ignored file, "),U=u("code"),J=p("*/temp"),V=p(" will match "),Y=u("code"),W=p("a/temp"),K=p(" and "),Q=u("code"),Z=p("b/temp"),X=p(" but not "),ee=u("code"),te=p("temp"),oe=p(" or "),ne=u("code"),re=p("a/b/temp"),ae=p(" from the root directory. To match 2 levels deep only, you need to write "),ce=u("code"),ie=p("*/*/temp"),se=p(" and for arbitrary levels, use "),le=u("code"),he=p("**"),de=p(" it will match any number of directory including zero, eg: "),fe=u("code"),ue=p("**/temp"),me=p(" matches "),pe=u("code"),ge=p("temp"),ve=p(", "),ye=u("code"),Ee=p("a/temp"),be=p(" and "),$e=u("code"),we=p("a/b/temp"),ke=p(" !"),Ae=g(),xe=u("hr"),Te=g(),Ce=u("p"),Le=p("Further reading:"),Oe=g(),Ie=u("p"),De=p("To understand more why you "),Ne=u("strong"),Me=p("should not ignore"),Se=g(),_e=u("code"),He=p(".dockerignore"),je=p(", read "),Be=u("a"),Pe=p("this article"),Fe=p(". It gives a lot of insight why "),ze=u("code"),qe=p(".dockerignore"),Re=p(" file is important."),this.h()},l(e){t=b(e,"P",{});var l=E(t);o=$(l,"From the "),n=b(l,"A",{href:!0,rel:!0});var h=E(n);r=$(h,"official docs"),h.forEach(d),a=$(l," of docker for .dockerignore:"),l.forEach(d),c=w(e),i=b(e,"BLOCKQUOTE",{});var u=E(i);s=b(u,"P",{});var p=E(s);f=$(p,"Before the docker CLI sends the context to the docker daemon, it looks for a file named "),m=b(p,"CODE",{});var g=E(m);v=$(g,".dockerignore"),g.forEach(d),k=$(p," in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using "),A=b(p,"CODE",{});var y=E(A);x=$(y,"ADD"),y.forEach(d),T=$(p," or "),C=b(p,"CODE",{});var Ge=E(C);L=$(Ge,"COPY"),Ge.forEach(d),O=$(p,"."),p.forEach(d),u.forEach(d),I=w(e),D=b(e,"P",{});var Ue=E(D);N=$(Ue,"Docker CLI will only look for "),M=b(Ue,"CODE",{});var Je=E(M);S=$(Je,".dockerignore"),Je.forEach(d),_=$(Ue," file in the "),H=b(Ue,"STRONG",{});var Ve=E(H);j=$(Ve,"root directory of the context"),Ve.forEach(d),B=$(Ue,", if you have a monorepo of multiple packages, make sure "),P=b(Ue,"CODE",{});var Ye=E(P);F=$(Ye,".dockerignore"),Ye.forEach(d),z=$(Ue," file is on the root directory of your context, it will ignore it if it is somewhere in the subfolder."),Ue.forEach(d),q=w(e),R=b(e,"P",{});var We=E(R);G=$(We,"About pattern matching of the ignored file, "),U=b(We,"CODE",{});var Ke=E(U);J=$(Ke,"*/temp"),Ke.forEach(d),V=$(We," will match "),Y=b(We,"CODE",{});var Qe=E(Y);W=$(Qe,"a/temp"),Qe.forEach(d),K=$(We," and "),Q=b(We,"CODE",{});var Ze=E(Q);Z=$(Ze,"b/temp"),Ze.forEach(d),X=$(We," but not "),ee=b(We,"CODE",{});var Xe=E(ee);te=$(Xe,"temp"),Xe.forEach(d),oe=$(We," or "),ne=b(We,"CODE",{});var et=E(ne);re=$(et,"a/b/temp"),et.forEach(d),ae=$(We," from the root directory. To match 2 levels deep only, you need to write "),ce=b(We,"CODE",{});var tt=E(ce);ie=$(tt,"*/*/temp"),tt.forEach(d),se=$(We," and for arbitrary levels, use "),le=b(We,"CODE",{});var ot=E(le);he=$(ot,"**"),ot.forEach(d),de=$(We," it will match any number of directory including zero, eg: "),fe=b(We,"CODE",{});var nt=E(fe);ue=$(nt,"**/temp"),nt.forEach(d),me=$(We," matches "),pe=b(We,"CODE",{});var rt=E(pe);ge=$(rt,"temp"),rt.forEach(d),ve=$(We,", "),ye=b(We,"CODE",{});var at=E(ye);Ee=$(at,"a/temp"),at.forEach(d),be=$(We," and "),$e=b(We,"CODE",{});var ct=E($e);we=$(ct,"a/b/temp"),ct.forEach(d),ke=$(We," !"),We.forEach(d),Ae=w(e),xe=b(e,"HR",{}),Te=w(e),Ce=b(e,"P",{});var it=E(Ce);Le=$(it,"Further reading:"),it.forEach(d),Oe=w(e),Ie=b(e,"P",{});var st=E(Ie);De=$(st,"To understand more why you "),Ne=b(st,"STRONG",{});var lt=E(Ne);Me=$(lt,"should not ignore"),lt.forEach(d),Se=w(st),_e=b(st,"CODE",{});var ht=E(_e);He=$(ht,".dockerignore"),ht.forEach(d),je=$(st,", read "),Be=b(st,"A",{href:!0,rel:!0});var dt=E(Be);Pe=$(dt,"this article"),dt.forEach(d),Fe=$(st,". It gives a lot of insight why "),ze=b(st,"CODE",{});var ft=E(ze);qe=$(ft,".dockerignore"),ft.forEach(d),Re=$(st," file is important."),st.forEach(d),this.h()},h(){y(n,"href","https://docs.docker.com/engine/reference/builder/#dockerignore-file"),y(n,"rel","nofollow"),y(Be,"href","https://codefresh.io/docker-tutorial/not-ignore-dockerignore/"),y(Be,"rel","nofollow")},m(e,d){h(e,t,d),l(t,o),l(t,n),l(n,r),l(t,a),h(e,c,d),h(e,i,d),l(i,s),l(s,f),l(s,m),l(m,v),l(s,k),l(s,A),l(A,x),l(s,T),l(s,C),l(C,L),l(s,O),h(e,I,d),h(e,D,d),l(D,N),l(D,M),l(M,S),l(D,_),l(D,H),l(H,j),l(D,B),l(D,P),l(P,F),l(D,z),h(e,q,d),h(e,R,d),l(R,G),l(R,U),l(U,J),l(R,V),l(R,Y),l(Y,W),l(R,K),l(R,Q),l(Q,Z),l(R,X),l(R,ee),l(ee,te),l(R,oe),l(R,ne),l(ne,re),l(R,ae),l(R,ce),l(ce,ie),l(R,se),l(R,le),l(le,he),l(R,de),l(R,fe),l(fe,ue),l(R,me),l(R,pe),l(pe,ge),l(R,ve),l(R,ye),l(ye,Ee),l(R,be),l(R,$e),l($e,we),l(R,ke),h(e,Ae,d),h(e,xe,d),h(e,Te,d),h(e,Ce,d),l(Ce,Le),h(e,Oe,d),h(e,Ie,d),l(Ie,De),l(Ie,Ne),l(Ne,Me),l(Ie,Se),l(Ie,_e),l(_e,He),l(Ie,je),l(Ie,Be),l(Be,Pe),l(Ie,Fe),l(Ie,ze),l(ze,qe),l(Ie,Re)},d(e){e&&d(t),e&&d(c),e&&d(i),e&&d(I),e&&d(D),e&&d(q),e&&d(R),e&&d(Ae),e&&d(xe),e&&d(Te),e&&d(Ce),e&&d(Oe),e&&d(Ie)}}}function de(e){let o,n;const r=[fe];let a={$$slots:{default:[he]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return o=new le({props:a}),{c(){R(o.$$.fragment)},l(e){G(o.$$.fragment,e)},m(e,t){U(o,e,t),n=!0},p(e,[t]){const n=0&t?function(e,t){const o={},n={},r={$$scope:1};let a=e.length;for(;a--;){const c=e[a],i=t[a];if(i){for(const e in c)e in i||(n[e]=1);for(const e in i)r[e]||(o[e]=i[e],r[e]=1);e[a]=i}else for(const e in c)r[e]=1}for(const e in n)e in o||(o[e]=void 0);return o}(r,[(a=fe,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n)},i(e){n||(z(o.$$.fragment,e),n=!0)},o(e){q(o.$$.fragment,e),n=!1},d(e){J(o,e)}}}const fe={title:"Took me hours to realise why docker build ignores my .dockerignore",date:"2017-11-26T08:00:00Z",description:"...and this is what I've learned",slug:"why-docker-ignores-my-file",type:"blog"};class ue extends W{constructor(e){super(),Y(this,e,null,de,c,{})}}setTimeout(()=>{new ue({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);
