(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ud7":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Tan Li Hau","description":"Tan Li Hau is a frontend engineer who is currently working in Shopee","author":"Tan Li Hau","siteUrl":"https://lihautan.com"}},"file":{"publicURL":"/static/profile-pic-65797d16af424cddbffebd0e19ab2f56.png"}}}')},"0WFU":function(t,e,a){"use strict";a("KKXr");var n=a("+Ud7"),r=a("q1tI"),i=a.n(r),l=a("TJpk"),o=a.n(l);e.a=function(t){var e=t.siteLanguage,a=void 0===e?"en":e,r=t.meta,l=void 0===r?[]:r,c=t.title,s=t.description,m=t.image,p=t.twitterImage,u=t.url,d=t.post,f=n.data,g=f.site,y=f.file.publicURL,h=s||g.siteMetadata.description,b=""+g.siteMetadata.siteUrl+(p||m||y),w=d.tags?d.tags.split(","):[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+g.siteMetadata.title,meta:[{name:"description",content:h},{name:"image",content:b},{property:"og:image",content:b},{property:"og:title",content:c},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:site",content:"@lihautan"},{name:"twitter:card",content:p?"summary_large_image":"summary"},{name:"twitter:creator",content:g.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:h},{name:"twitter:image",content:b}].concat(w.length>0?{name:"keywords",content:w.join(", ")}:[]).concat(l)}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:g.siteMetadata.author},copyrightHolder:{"@type":"Person",name:g.siteMetadata.author},copyrightYear:"2019",creator:{"@type":"Person",name:g.siteMetadata.author},publisher:{"@type":"Organization",name:g.siteMetadata.author,logo:{"@type":"ImageObject",url:y}},datePublished:d.date,dateModified:d.lastUpdated||d.date,description:h,headline:c,inLanguage:a,url:g.siteMetadata.siteUrl+"/"+u,name:c,image:{"@type":"ImageObject",url:b},mainEntityOfPage:g.siteMetadata.siteUrl+"/"+u})),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":g.siteMetadata.siteUrl,name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":g.siteMetadata.siteUrl+"/"+u,name:c},position:2}]})))}},D7qs:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=a("p3AD");function l(t){var e=t.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{style:{marginBottom:Object(i.a)(1)}}),r.a.createElement("p",null,"Thank you for your time reading through this article.",r.a.createElement("br",null),"It means a lot to me."),r.a.createElement("p",null," I would appreciate if you ",r.a.createElement("a",{href:o(e)},"tweet about it")," or buy me a coffee.",r.a.createElement("a",{href:"https://www.buymeacoffee.com/lihautan",target:"_blank"},r.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/arial-black.png",alt:"Buy Me A Coffee",style:{height:51,width:217,display:"block",margin:"16px auto"}}))))}function o(t){return"https://twitter.com/intent/tweet?text="+encodeURIComponent("Insightful article from @lihautan")+"&url="+t}},yZlL:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return m}));a("91GP");var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("Bl7J"),o=a("0WFU"),c=a("D7qs"),s=a("p3AD");e.default=function(t){var e=r.a.useRef();r.a.useEffect((function(){e.current.querySelectorAll("script").forEach((function(t){if(t.innerHTML)window.eval(t.innerHTML);else if(t.src){var e=document.createElement("script");e.async=t.async,e.src=t.src,document.head.appendChild(e)}}))}),[]);var a=t.data.markdownRemark,n=t.data.site.siteMetadata.title,m=t.pageContext,p=m.previous,u=m.next,d=m.heroImageUrl,f=m.heroTwitterImageUrl,g=a.fields.wip;return r.a.createElement(l.a,{location:t.location,title:n},r.a.createElement(o.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.excerpt,image:d,twitterImage:f,url:a.fields.slug,post:a.frontmatter}),r.a.createElement("h1",null,g?"WIP: ":null,a.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(s.b)(-.2),{display:"block",marginBottom:Object(s.a)(1),marginTop:Object(s.a)(-.5)})},a.frontmatter.date,a.frontmatter.lastUpdated&&r.a.createElement("span",{style:{fontStyle:"italic",marginLeft:Object(s.a)(.2)}},"(Last updated: ",a.frontmatter.lastUpdated,")")),r.a.createElement("div",{ref:e,dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement(c.a,{url:t.location.href}),r.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,p&&r.a.createElement(i.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),r.a.createElement("li",null,u&&r.a.createElement(i.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))};var m="1450996661"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-151b333d01c12e1777d0.js.map