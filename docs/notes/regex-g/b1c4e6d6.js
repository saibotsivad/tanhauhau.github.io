function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function a(){return Object.create(null)}function s(n){n.forEach(e)}function o(n){return"function"==typeof n}function c(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function r(n,e,a,s){return n[1]&&s?t(a.ctx.slice(),n[1](s(e))):a.ctx}function l(n,t,e,a,s,o,c){const l=function(n,t,e,a){if(n[2]&&a){const s=n[2](a(e));if(void 0===t.dirty)return s;if("object"==typeof s){const n=[],e=Math.max(t.dirty.length,s.length);for(let a=0;a<e;a+=1)n[a]=t.dirty[a]|s[a];return n}return t.dirty|s}return t.dirty}(t,a,s,o);if(l){const s=r(t,e,a,c);n.p(s,l)}}function p(n,t){n.appendChild(t)}function i(n,t,e){n.insertBefore(t,e||null)}function u(n){n.parentNode.removeChild(n)}function f(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function h(n){return document.createElement(n)}function d(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function m(){return g(" ")}function k(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function v(n){return Array.from(n.childNodes)}function x(n,t,e,a){for(let a=0;a<n.length;a+=1){const s=n[a];if(s.nodeName===t){let t=0;const o=[];for(;t<s.attributes.length;){const n=s.attributes[t++];e[n.name]||o.push(n.name)}for(let n=0;n<o.length;n++)s.removeAttribute(o[n]);return n.splice(a,1)[0]}}return a?d(t):h(t)}function E(n,t){for(let e=0;e<n.length;e+=1){const a=n[e];if(3===a.nodeType)return a.data=""+t,n.splice(e,1)[0]}return g(t)}function w(n){return E(n," ")}function $(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}let b;function y(n){b=n}const A=[],T=[],L=[],N=[],j=Promise.resolve();let I=!1;function S(n){L.push(n)}let C=!1;const _=new Set;function M(){if(!C){C=!0;do{for(let n=0;n<A.length;n+=1){const t=A[n];y(t),H(t.$$)}for(A.length=0;T.length;)T.pop()();for(let n=0;n<L.length;n+=1){const t=L[n];_.has(t)||(_.add(t),t())}L.length=0}while(A.length);for(;N.length;)N.pop()();I=!1,C=!1,_.clear()}}function H(n){if(null!==n.fragment){n.update(),s(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(S)}}const R=new Set;function z(n,t){n&&n.i&&(R.delete(n),n.i(t))}function O(n,t,e,a){if(n&&n.o){if(R.has(n))return;R.add(n),(void 0).c.push(()=>{R.delete(n),a&&(e&&n.d(1),a())}),n.o(t)}}function P(n){n&&n.c()}function q(n,t){n&&n.l(t)}function B(n,t,a){const{fragment:c,on_mount:r,on_destroy:l,after_update:p}=n.$$;c&&c.m(t,a),S(()=>{const t=r.map(e).filter(o);l?l.push(...t):s(t),n.$$.on_mount=[]}),p.forEach(S)}function D(n,t){const e=n.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function F(n,t){-1===n.$$.dirty[0]&&(A.push(n),I||(I=!0,j.then(M)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function W(t,e,o,c,r,l,p=[-1]){const i=b;y(t);const f=e.props||{},h=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:r,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:a(),dirty:p};let d=!1;if(h.ctx=o?o(t,f,(n,e,...a)=>{const s=a.length?a[0]:e;return h.ctx&&r(h.ctx[n],h.ctx[n]=s)&&(h.bound[n]&&h.bound[n](s),d&&F(t,n)),e}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){const n=v(e.target);h.fragment&&h.fragment.l(n),n.forEach(u)}else h.fragment&&h.fragment.c();e.intro&&z(t.$$.fragment),B(t,e.target,e.anchor),M()}y(i)}class U{$destroy(){D(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}function G(t){let e,a,s,o,c,r,l,f,$,b,y,A,T,L,N,j,I,S,C,_,M,H,R,z,O,P,q,B,D,F,W,U,G,V,K;return{c(){e=h("header"),a=h("nav"),s=h("ul"),o=h("li"),c=h("a"),r=g("Tan Li Hau"),l=m(),f=h("li"),$=h("a"),b=g("About"),y=m(),A=h("li"),T=h("a"),L=g("Writings"),N=m(),j=h("li"),I=h("a"),S=g("Talks"),C=m(),_=h("li"),M=h("a"),H=g("Notes"),R=m(),z=h("li"),O=h("a"),P=g("Newsletter"),q=m(),B=h("li"),D=h("a"),F=d("svg"),W=d("path"),U=m(),G=h("a"),V=d("svg"),K=d("path"),this.h()},l(n){e=x(n,"HEADER",{class:!0});var t=v(e);a=x(t,"NAV",{});var p=v(a);s=x(p,"UL",{class:!0});var i=v(s);o=x(i,"LI",{class:!0});var h=v(o);c=x(h,"A",{href:!0,class:!0});var d=v(c);r=E(d,"Tan Li Hau"),d.forEach(u),h.forEach(u),l=w(i),f=x(i,"LI",{class:!0});var g=v(f);$=x(g,"A",{href:!0,class:!0});var m=v($);b=E(m,"About"),m.forEach(u),g.forEach(u),y=w(i),A=x(i,"LI",{class:!0});var k=v(A);T=x(k,"A",{href:!0,class:!0});var J=v(T);L=E(J,"Writings"),J.forEach(u),k.forEach(u),N=w(i),j=x(i,"LI",{class:!0});var Q=v(j);I=x(Q,"A",{href:!0,class:!0});var X=v(I);S=E(X,"Talks"),X.forEach(u),Q.forEach(u),C=w(i),_=x(i,"LI",{class:!0});var Y=v(_);M=x(Y,"A",{href:!0,class:!0});var Z=v(M);H=E(Z,"Notes"),Z.forEach(u),Y.forEach(u),R=w(i),z=x(i,"LI",{class:!0});var nn=v(z);O=x(nn,"A",{href:!0,class:!0});var tn=v(O);P=E(tn,"Newsletter"),tn.forEach(u),nn.forEach(u),q=w(i),B=x(i,"LI",{class:!0});var en=v(B);D=x(en,"A",{"aria-label":!0,href:!0,class:!0});var an=v(D);F=x(an,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var sn=v(F);W=x(sn,"path",{d:!0},1),v(W).forEach(u),sn.forEach(u),an.forEach(u),U=w(en),G=x(en,"A",{"aria-label":!0,href:!0,class:!0});var on=v(G);V=x(on,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var cn=v(V);K=x(cn,"path",{d:!0},1),v(K).forEach(u),cn.forEach(u),on.forEach(u),en.forEach(u),i.forEach(u),p.forEach(u),t.forEach(u),this.h()},h(){k(c,"href","/"),k(c,"class","svelte-f3e4uo"),k(o,"class","svelte-f3e4uo"),k($,"href","/about"),k($,"class","svelte-f3e4uo"),k(f,"class","svelte-f3e4uo"),k(T,"href","/blogs"),k(T,"class","svelte-f3e4uo"),k(A,"class","svelte-f3e4uo"),k(I,"href","/talks"),k(I,"class","svelte-f3e4uo"),k(j,"class","svelte-f3e4uo"),k(M,"href","/notes"),k(M,"class","svelte-f3e4uo"),k(_,"class","svelte-f3e4uo"),k(O,"href","/newsletter"),k(O,"class","svelte-f3e4uo"),k(z,"class","svelte-f3e4uo"),k(W,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),k(F,"viewBox","0 0 24 24"),k(F,"width","1em"),k(F,"height","1em"),k(F,"class","svelte-f3e4uo"),k(D,"aria-label","Twitter account"),k(D,"href","https://twitter.com/lihautan"),k(D,"class","svelte-f3e4uo"),k(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),k(V,"viewBox","0 0 24 24"),k(V,"width","1em"),k(V,"height","1em"),k(V,"class","svelte-f3e4uo"),k(G,"aria-label","Github account"),k(G,"href","https://github.com/tanhauhau"),k(G,"class","svelte-f3e4uo"),k(B,"class","social svelte-f3e4uo"),k(s,"class","svelte-f3e4uo"),k(e,"class","svelte-f3e4uo")},m(n,t){i(n,e,t),p(e,a),p(a,s),p(s,o),p(o,c),p(c,r),p(s,l),p(s,f),p(f,$),p($,b),p(s,y),p(s,A),p(A,T),p(T,L),p(s,N),p(s,j),p(j,I),p(I,S),p(s,C),p(s,_),p(_,M),p(M,H),p(s,R),p(s,z),p(z,O),p(O,P),p(s,q),p(s,B),p(B,D),p(D,F),p(F,W),p(B,U),p(B,G),p(G,V),p(V,K)},p:n,i:n,o:n,d(n){n&&u(e)}}}class V extends U{constructor(n){super(),W(this,n,null,G,c,{})}}function K(n,t,e){const a=n.slice();return a[6]=t[e],a}function J(n,t,e){const a=n.slice();return a[6]=t[e],a}function Q(n){let t,e;return{c(){t=h("meta"),this.h()},l(n){t=x(n,"META",{name:!0,content:!0}),this.h()},h(){k(t,"name","keywords"),k(t,"content",e=n[6])},m(n,e){i(n,t,e)},p(n,a){4&a&&e!==(e=n[6])&&k(t,"content",e)},d(n){n&&u(t)}}}function X(n){let t,e,a=n[6]+"";return{c(){t=h("span"),e=g(a),this.h()},l(n){t=x(n,"SPAN",{class:!0});var s=v(t);e=E(s,a),s.forEach(u),this.h()},h(){k(t,"class","svelte-186dllz")},m(n,a){i(n,t,a),p(t,e)},p(n,t){4&t&&a!==(a=n[6]+"")&&$(e,a)},d(n){n&&u(t)}}}function Y(n){let t,e,a,s,o,c,d,b,y,A,T,L,N,j,I,S,C,_;document.title=t="Note: "+n[1]+" | Tan Li Hau";let M=n[2],H=[];for(let t=0;t<M.length;t+=1)H[t]=Q(J(n,M,t));A=new V({});let R=n[2],F=[];for(let t=0;t<R.length;t+=1)F[t]=X(K(n,R,t));const W=n[4].default,U=function(n,t,e,a){if(n){const s=r(n,t,e,a);return n[0](s)}}(W,n,n[3],null);return{c(){e=h("link"),a=h("meta"),s=h("meta");for(let n=0;n<H.length;n+=1)H[n].c();o=h("meta"),c=m(),d=h("a"),b=g("Skip to content"),y=m(),P(A.$$.fragment),T=m(),L=h("main"),N=h("h1"),j=g(n[1]),I=m();for(let n=0;n<F.length;n+=1)F[n].c();S=m(),C=h("article"),U&&U.c(),this.h()},l(t){const r=function(n,t=document.body){return Array.from(t.querySelectorAll(n))}('[data-svelte="svelte-ywf7m8"]',document.head);e=x(r,"LINK",{href:!0,rel:!0}),a=x(r,"META",{name:!0,content:!0}),s=x(r,"META",{name:!0,content:!0});for(let n=0;n<H.length;n+=1)H[n].l(r);o=x(r,"META",{itemprop:!0,content:!0}),r.forEach(u),c=w(t),d=x(t,"A",{href:!0,class:!0});var l=v(d);b=E(l,"Skip to content"),l.forEach(u),y=w(t),q(A.$$.fragment,t),T=w(t),L=x(t,"MAIN",{id:!0,class:!0});var p=v(L);N=x(p,"H1",{});var i=v(N);j=E(i,n[1]),i.forEach(u),I=w(p);for(let n=0;n<F.length;n+=1)F[n].l(p);S=w(p),C=x(p,"ARTICLE",{class:!0});var f=v(C);U&&U.l(f),f.forEach(u),p.forEach(u),this.h()},h(){k(e,"href","https://lihautan.com/notes/regex-g/assets/blog-base-3554d53c.css"),k(e,"rel","stylesheet"),k(a,"name","og:title"),k(a,"content",n[0]),k(s,"name","og:type"),k(s,"content","website"),k(o,"itemprop","url"),k(o,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fregex-g"),k(d,"href","#content"),k(d,"class","skip svelte-186dllz"),k(C,"class","svelte-186dllz"),k(L,"id","content"),k(L,"class","blog svelte-186dllz")},m(n,t){p(document.head,e),p(document.head,a),p(document.head,s);for(let n=0;n<H.length;n+=1)H[n].m(document.head,null);p(document.head,o),i(n,c,t),i(n,d,t),p(d,b),i(n,y,t),B(A,n,t),i(n,T,t),i(n,L,t),p(L,N),p(N,j),p(L,I);for(let n=0;n<F.length;n+=1)F[n].m(L,null);p(L,S),p(L,C),U&&U.m(C,null),_=!0},p(n,[e]){if((!_||2&e)&&t!==(t="Note: "+n[1]+" | Tan Li Hau")&&(document.title=t),(!_||1&e)&&k(a,"content",n[0]),4&e){let t;for(M=n[2],t=0;t<M.length;t+=1){const a=J(n,M,t);H[t]?H[t].p(a,e):(H[t]=Q(a),H[t].c(),H[t].m(o.parentNode,o))}for(;t<H.length;t+=1)H[t].d(1);H.length=M.length}if((!_||2&e)&&$(j,n[1]),4&e){let t;for(R=n[2],t=0;t<R.length;t+=1){const a=K(n,R,t);F[t]?F[t].p(a,e):(F[t]=X(a),F[t].c(),F[t].m(L,S))}for(;t<F.length;t+=1)F[t].d(1);F.length=R.length}U&&U.p&&8&e&&l(U,W,n,n[3],e,null,null)},i(n){_||(z(A.$$.fragment,n),z(U,n),_=!0)},o(n){O(A.$$.fragment,n),O(U,n),_=!1},d(n){u(e),u(a),u(s),f(H,n),u(o),n&&u(c),n&&u(d),n&&u(y),D(A,n),n&&u(T),n&&u(L),f(F,n),U&&U.d(n)}}}function Z(n,t,e){let{name:a}=t,{title:s}=t,{tags:o=[]}=t,{$$slots:c={},$$scope:r}=t;return n.$set=n=>{"name"in n&&e(0,a=n.name),"title"in n&&e(1,s=n.title),"tags"in n&&e(2,o=n.tags),"$$scope"in n&&e(3,r=n.$$scope)},[a,s,o,r,c]}class nn extends U{constructor(n){super(),W(this,n,Z,Y,c,{name:0,title:1,tags:2})}}function tn(t){let e,a,s,o,c,r,l,f,d,$,b,y,A,T,L,N,j,I,S,C,_,M,H,R,z,O,P,q,B,D,F,W,U,G,V,K,J,Q,X,Y,Z,nn,tn,en,an,sn,on,cn,rn,ln,pn,un,fn;return{c(){e=h("section"),a=h("ul"),s=h("li"),o=h("a"),c=g("test and exec with  g"),r=h("li"),l=h("a"),f=g("Related Links"),d=m(),$=h("section"),b=h("h2"),y=h("a"),A=g("test and exec with "),T=h("code"),L=g("g"),N=m(),j=h("p"),I=g("When having a Regex with "),S=h("code"),C=g("g"),_=g(" (global) flag, the regex instance will store some internal state about the last match."),M=m(),H=h("p"),R=g("This happens with "),z=h("code"),O=g("regex.test()"),P=g(" and "),q=h("code"),B=g("regex.exec()"),D=m(),F=h("pre"),W=m(),U=h("p"),G=g("This is useful for the following match + while loop pattern:"),V=m(),K=h("pre"),J=m(),Q=h("p"),X=h("strong"),Y=g("Note the state is stored in the regex instance"),Z=g(", using a different regex instance will not have this behavior:"),nn=m(),tn=h("pre"),en=m(),an=h("section"),sn=h("h2"),on=h("a"),cn=g("Related Links"),rn=m(),ln=h("ul"),pn=h("li"),un=h("a"),fn=g("https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex"),this.h()},l(n){e=x(n,"SECTION",{});var t=v(e);a=x(t,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var p=v(a);s=x(p,"LI",{});var i=v(s);o=x(i,"A",{href:!0});var h=v(o);c=E(h,"test and exec with  g"),h.forEach(u),i.forEach(u),r=x(p,"LI",{});var g=v(r);l=x(g,"A",{href:!0});var m=v(l);f=E(m,"Related Links"),m.forEach(u),g.forEach(u),p.forEach(u),t.forEach(u),d=w(n),$=x(n,"SECTION",{});var k=v($);b=x(k,"H2",{});var hn=v(b);y=x(hn,"A",{href:!0,id:!0});var dn=v(y);A=E(dn,"test and exec with "),T=x(dn,"CODE",{});var gn=v(T);L=E(gn,"g"),gn.forEach(u),dn.forEach(u),hn.forEach(u),N=w(k),j=x(k,"P",{});var mn=v(j);I=E(mn,"When having a Regex with "),S=x(mn,"CODE",{});var kn=v(S);C=E(kn,"g"),kn.forEach(u),_=E(mn," (global) flag, the regex instance will store some internal state about the last match."),mn.forEach(u),M=w(k),H=x(k,"P",{});var vn=v(H);R=E(vn,"This happens with "),z=x(vn,"CODE",{});var xn=v(z);O=E(xn,"regex.test()"),xn.forEach(u),P=E(vn," and "),q=x(vn,"CODE",{});var En=v(q);B=E(En,"regex.exec()"),En.forEach(u),vn.forEach(u),D=w(k),F=x(k,"PRE",{class:!0}),v(F).forEach(u),W=w(k),U=x(k,"P",{});var wn=v(U);G=E(wn,"This is useful for the following match + while loop pattern:"),wn.forEach(u),V=w(k),K=x(k,"PRE",{class:!0}),v(K).forEach(u),J=w(k),Q=x(k,"P",{});var $n=v(Q);X=x($n,"STRONG",{});var bn=v(X);Y=E(bn,"Note the state is stored in the regex instance"),bn.forEach(u),Z=E($n,", using a different regex instance will not have this behavior:"),$n.forEach(u),nn=w(k),tn=x(k,"PRE",{class:!0}),v(tn).forEach(u),k.forEach(u),en=w(n),an=x(n,"SECTION",{});var yn=v(an);sn=x(yn,"H2",{});var An=v(sn);on=x(An,"A",{href:!0,id:!0});var Tn=v(on);cn=E(Tn,"Related Links"),Tn.forEach(u),An.forEach(u),rn=w(yn),ln=x(yn,"UL",{});var Ln=v(ln);pn=x(Ln,"LI",{});var Nn=v(pn);un=x(Nn,"A",{href:!0,rel:!0});var jn=v(un);fn=E(jn,"https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex"),jn.forEach(u),Nn.forEach(u),Ln.forEach(u),yn.forEach(u),this.h()},h(){k(o,"href","#test-and-exec-with-g"),k(l,"href","#related-links"),k(a,"class","sitemap"),k(a,"id","sitemap"),k(a,"role","navigation"),k(a,"aria-label","Table of Contents"),k(y,"href","#test-and-exec-with-g"),k(y,"id","test-and-exec-with-g"),k(F,"class","language-js"),k(K,"class","language-js"),k(tn,"class","language-js"),k(on,"href","#related-links"),k(on,"id","related-links"),k(un,"href","https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex"),k(un,"rel","nofollow")},m(n,t){i(n,e,t),p(e,a),p(a,s),p(s,o),p(o,c),p(a,r),p(r,l),p(l,f),i(n,d,t),i(n,$,t),p($,b),p(b,y),p(y,A),p(y,T),p(T,L),p($,N),p($,j),p(j,I),p(j,S),p(S,C),p(j,_),p($,M),p($,H),p(H,R),p(H,z),p(z,O),p(H,P),p(H,q),p(q,B),p($,D),p($,F),F.innerHTML='<code class="language-js"><span class="token keyword">const</span> sentence <span class="token operator">=</span> <span class="token string">\'car boats car\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex">/car/g</span><span class="token punctuation">;</span>\n\nregex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nregex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nregex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\nregex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ \'car\', index: 0, input: \'car boats car\' ]</span>\nregex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ \'car\', index: 10, input: \'car boats car\' ]</span>\nregex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span></code>',p($,W),p($,U),p(U,G),p($,V),p($,K),K.innerHTML='<code class="language-js"><span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex">/car/g</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> match<span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>match <span class="token operator">=</span> regex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',p($,J),p($,Q),p(Q,X),p(X,Y),p(Q,Z),p($,nn),p($,tn),tn.innerHTML='<code class="language-js"><span class="token keyword">const</span> sentence <span class="token operator">=</span> <span class="token string">\'car boats car\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex">/car/g</span><span class="token punctuation">;</span>\n\n<span class="token regex">/car/g</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ \'car\', index: 0, input: \'car boats car\' ]</span>\n<span class="token operator">/</span>car<span class="token operator">/</span>g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ \'car\', index: 0, input: \'car boats car\' ]</span>\n<span class="token operator">/</span>car<span class="token operator">/</span>g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ \'car\', index: 0, input: \'car boats car\' ]</span>\n<span class="token operator">/</span>car<span class="token operator">/</span>g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ \'car\', index: 0, input: \'car boats car\' ]</span>\n<span class="token comment">// ...</span></code>',i(n,en,t),i(n,an,t),p(an,sn),p(sn,on),p(on,cn),p(an,rn),p(an,ln),p(ln,pn),p(pn,un),p(un,fn)},p:n,d(n){n&&u(e),n&&u(d),n&&u($),n&&u(en),n&&u(an)}}}function en(n){let e,a;const s=[an];let o={$$slots:{default:[tn]},$$scope:{ctx:n}};for(let n=0;n<s.length;n+=1)o=t(o,s[n]);return e=new nn({props:o}),{c(){P(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,t){B(e,n,t),a=!0},p(n,[t]){const a=0&t?function(n,t){const e={},a={},s={$$scope:1};let o=n.length;for(;o--;){const c=n[o],r=t[o];if(r){for(const n in c)n in r||(a[n]=1);for(const n in r)s[n]||(e[n]=r[n],s[n]=1);n[o]=r}else for(const n in c)s[n]=1}for(const n in a)n in e||(e[n]=void 0);return e}(s,[(o=an,"object"==typeof o&&null!==o?o:{})]):{};var o;1&t&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i(n){a||(z(e.$$.fragment,n),a=!0)},o(n){O(e.$$.fragment,n),a=!1},d(n){D(e,n)}}}const an={title:"'g' flag in regex",tags:["regex"],slug:"notes/regex-g",type:"notes",name:"regex-g",layout:"note"};class sn extends U{constructor(n){super(),W(this,n,null,en,c,{})}}setTimeout(()=>{new sn({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const n=document.createElement("script");n.async=!0,n.src="https://platform.twitter.com/widgets.js",n.charset="utf-8",document.body.appendChild(n)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(n=>{n.src=n.dataset.src})}else{const n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(n)}},3e3);
