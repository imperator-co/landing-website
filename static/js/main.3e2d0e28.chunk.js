(this["webpackJsonpcosmos-contracts-landing-page"]=this["webpackJsonpcosmos-contracts-landing-page"]||[]).push([[0],{23:function(e,t,a){e.exports=a(45)},33:function(e,t,a){e.exports=a.p+"static/media/logo.6aa93306.svg"},34:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.4317f0ee.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.0299a334.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.5e1dda1a.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.04995b80.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(21),o=a.n(n),s=a(5),l=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(s.a,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),h=a(17),b=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),n=Object(d.a)(a,2),o=n[0],s=n[1],l=Object(r.useState)([]),c=Object(d.a)(l,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var p=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(h.throttle)((function(){p(),b()}),30),E=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(r.useEffect)((function(){p(),b()}),[o]),i.a.createElement(i.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var p=b,f=a(13),E=a(1),g=a.n(E),N=a(12),w=function(e){var t=e.className,a=e.src,n=e.width,o=e.height,s=e.alt,l=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],b=Object(r.useRef)(null);Object(r.useEffect)((function(){p(b.current)}),[]);var p=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},l,{ref:b,className:t,src:a,width:n,height:o,alt:s,onLoad:function(){h(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,y=function(e){var t=e.className,r=Object(c.a)(e,["className"]),n=g()("brand",t);return i.a.createElement("div",Object.assign({},r,{className:n}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(N.a,{to:"/"},i.a.createElement(O,{src:a(33),width:64,height:64}))))},j=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,o=e.hideSignin,s=e.bottomOuterDivider,l=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(r.useState)(!1),v=Object(d.a)(u,2),h=v[0],b=v[1],p=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)((function(){return h&&E(),document.addEventListener("keydown",w),document.addEventListener("click",O),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",O),N()}}));var E=function(){document.body.classList.add("off-nav-is-active"),p.current.style.maxHeight=p.current.scrollHeight+"px",b(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),p.current&&(p.current.style.maxHeight=null),b(!1)},w=function(e){h&&27===e.keyCode&&N()},O=function(e){p.current&&h&&!p.current.contains(e.target)&&e.target!==f.current&&N()},j=g()("site-header",s&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:j}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:g()("site-header-inner",l&&"has-bottom-divider")},i.a.createElement(y,null),!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?N:E},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:p,className:g()("header-nav",h&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement("a",{className:"button  button-wide-mobile button-sm",href:"https://discord.gg/wHdzjS5vXx",target:"_blank",rel:"noopener noreferrer"},"Developers"))),!o&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement("a",{className:"button button-primary button-wide-mobile button-sm",href:"https://discord.gg/9ZZhkg4Ftd",target:"_blank",rel:"noopener noreferrer"},"Validators")))))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=j,x=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=g()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/CosmosContracts/Juno/wiki",target:"_blank",rel:"noopener noreferrer"},"Documentation")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://discord.gg/wHdzjS5vXx",target:"_blank",rel:"noopener noreferrer"},"Support"))))},C=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=g()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{className:"button button button-wide-mobile button-sm",href:"https://twitter.com/JunoNetwork",target:"_blank",rel:"noopener noreferrer"},"Twitter")),i.a.createElement("li",null,i.a.createElement("a",{className:"button button-primary button-wide-mobile button-sm",href:"https://t.me/JunoNetwork",target:"_blank",rel:"noopener noreferrer"},"Telegram"))))},k=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),o=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},n,{className:o}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:g()("site-footer-inner",r&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(y,null),i.a.createElement(C,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(x,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"https://junochain.com"},"Juno"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var S=k,L=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(S,null))},A=a(4),B={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},T={types:Object(A.a)({},B.types),defaults:Object(A.a)({},B.defaults)},F={types:Object(A.a)(Object(A.a)({},B.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(A.a)(Object(A.a)({},B.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},P={types:Object(A.a)(Object(A.a)({},B.types),{},{pushLeft:v.a.bool}),defaults:Object(A.a)(Object(A.a)({},B.defaults),{},{pushLeft:!1})},J=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=g()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:r}))},H=function(e){var t=e.className,a=e.tag,r=e.color,n=e.size,o=e.loading,s=e.wide,l=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",r&&"button-".concat(r),n&&"button-".concat(n),o&&"is-loading",s&&"button-block",l&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};H.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var _=H,M=function(e){var t=e.className,a=e.children,n=e.handleClose,o=e.show,s=e.closeHidden,l=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(r.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(r.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},h=function(e){e.stopPropagation()},b=g()("modal",o&&"is-active",l&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,o&&i.a.createElement("div",Object.assign({},d,{className:b,onClick:n}),i.a.createElement("div",{className:"modal-inner",onClick:h},l?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:l,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:l})):i.a.createElement(i.a.Fragment,null,!s&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),i.a.createElement("div",{className:"modal-content"},a)))))};M.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var R=M,W=Object(A.a)({},T.defaults),z=function(e){var t=e.className,n=e.topOuterDivider,o=e.bottomOuterDivider,s=e.topDivider,l=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(r.useState)(!1),b=Object(d.a)(h,2),p=b[0],f=b[1],E=g()("hero section center-content",n&&"has-top-divider",o&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=g()("hero-inner section-inner",s&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},v,{className:E}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:N},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Juno, Smart Contracts ",i.a.createElement("span",{className:"text-color-primary"},"Evolved.")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Tired of slow and expensive smart contracts?",i.a.createElement("br",null),"Juno has got you covered!"),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},i.a.createElement(J,null,i.a.createElement(_,{tag:"a",color:"primary",wideMobile:!0,href:"https://github.com/CosmosContracts/Juno/wiki",target:"_blank",rel:"noopener noreferrer"},"Get started"),i.a.createElement(_,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/CosmosContracts/",target:"_blank",rel:"noopener noreferrer"},"View on Github"))))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement("a",{"data-video":"https://player.vimeo.com/video/458554938",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},i.a.createElement(O,{className:"has-shadow",src:a(34),alt:"Hero",width:896,height:504}))),i.a.createElement(R,{id:"video-modal",show:p,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/458554938",videoTag:"iframe"}))))};z.defaultProps=W;var I=z,V=function(e){var t=e.className,a=e.data,r=e.children,n=e.tag,o=Object(c.a)(e,["className","data","children","tag"]),s=g()("section-header",t),l=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},o,{className:s}),i.a.createElement("div",{className:"container-xs"},r,a.title&&i.a.createElement(l,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};V.defaultProps={children:null,tag:"h2"};var U=V,q=Object(A.a)({},P.defaults),G=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",r&&"has-top-divider",n&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t),h=g()("features-tiles-inner section-inner pt-0",o&&"has-top-divider",s&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(U,{data:{title:"So what's the deal?",paragraph:"Smart contracts were born with the inception of Ethereum. But they were limited by high costs and slow speeds. Here is why Juno is the solution."},className:"center-content"}),i.a.createElement("div",{className:b},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Speed"),i.a.createElement("p",{className:"m-0 text-sm"},"By utilizing cosmos networks scalibility features, Juno can ensure fast contract execution, unlike current-gen blockchains.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"WASM"),i.a.createElement("p",{className:"m-0 text-sm"},"Web Assembly technology lets you create smart contracts via the Rust programming language.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Cost"),i.a.createElement("p",{className:"m-0 text-sm"},"High fees are a hot topic in the blockchain world. Smart contract usage on Ethereum can cost $100s. Juno won't have this issue.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(38),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Middleware"),i.a.createElement("p",{className:"m-0 text-sm"},"With the advent of IBC blockchains can now connect to each other. They could build smart contracts on Juno to create trusted computation middleware.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(39),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"EVM"),i.a.createElement("p",{className:"m-0 text-sm"},"All the benefits of Ethereum, without all the issues. Port over your smart contracts or code new ones with solidity.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(40),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"IBC"),i.a.createElement("p",{className:"m-0 text-sm"},"Inter-Blockchain Communication is the glue that lets blockchains connect to each other without the need for a centralized point of failure."))))))))};G.defaultProps=q;var K=G,Q=Object(A.a)({},F.defaults),X=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=g()("features-split section",r&&"has-top-divider",n&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},b,{className:p}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement(U,{data:{title:"Contracts that just work",paragraph:"Useability is the core to any product, that's why Juno keeps it simple \u2014 deploy your contract in a few easy steps."},className:"center-content"}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Roadmap: Q2 2021"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Network Launch"),i.a.createElement("p",{className:"m-0"},"The Juno network is expected to launch in April. We are currently building integrations to ensure that functionality will exist on launch for the best user experience. Should you wish to help out, you can reach us on our Discord server.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(41),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Roadmap: Q3 2021"),i.a.createElement("h3",{className:"mt-0 mb-12"},"IBC Contracts"),i.a.createElement("p",{className:"m-0"},"Smart contracts are great, what could be better right? How about smart contracts that can connect to other blockchains! With IBC the possibilities will be endless.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(42),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Roadmap: Q4 2021"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Contract Browser"),i.a.createElement("p",{className:"m-0"},"The best way to increase smart contract usage is by putting them in front of the user. A smart contract browser would enable creators to submit their contracts, and for users to browse and interact with them.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(43),alt:"Features split 03",width:528,height:396})))))))};X.defaultProps=Q;var Z=X,$=Object(A.a)({},P.defaults),Y=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),v=g()("testimonial-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider"),h=g()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(U,{data:{title:"Community Voices",paragraph:"Without the help of the community Juno wouldn't have existed. Here is what they have to say."},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Smart contracts will make cosmos explode in usage. The community saw the need, and so they stepped up to the challenge. Juno is a true reflection of what people can accomplish when they work together.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"BlockCreators"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Juno"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 CosmosContracts is a sovereign smart contract hub to be launched by ATOM holders. Development is spearheaded by various developers, validators and community enthusiasts from the cosmos ecosystem.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Immasssi"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Juno"))))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 .")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Vacant"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Vacant")))))))))};Y.defaultProps=$;var ee=Y,te=Object(A.a)(Object(A.a)({},T.defaults),{},{split:!1}),ae=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),v=g()("cta-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"Want to contribute to the Juno network?")),i.a.createElement("div",{className:"cta-action"},i.a.createElement(_,{tag:"a",color:"success",wideMobile:!0,href:"https://discord.gg/wHdzjS5vXx"},"Dev Discord")))))};ae.defaultProps=te;var re=ae,ie=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{className:"illustration-section-01"}),i.a.createElement(K,null),i.a.createElement(Z,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(ee,{topDivider:!0}),i.a.createElement(re,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ne=function(){var e=Object(r.useRef)(),t=Object(s.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),i.a.createElement(p,{ref:e,children:function(){return i.a.createElement(s.c,null,i.a.createElement(m,{exact:!0,path:"/",component:ie,layout:L}))}})},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(44);var le=Object(l.a)();o.a.render(i.a.createElement(s.b,{history:le},i.a.createElement(ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");oe?(!function(e,t){fetch(e).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.3e2d0e28.chunk.js.map