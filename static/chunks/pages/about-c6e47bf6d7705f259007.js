(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8795:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(6156),i=n(5893),a=n(2465),s=n(7294),o=n(9163),c=n(7375),l=n(6202),d=n(8765);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(){var e=(0,a.Z)(["\n    width: max-content;\n    padding: 8px 16px;\n    position: relative;\n    font-size: 0;\n    z-index: 70000;\n"]);return p=function(){return e},e}var m,g,_,j=o.ZP.div(p()),b=(m=function(e){return(0,i.jsx)(j,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},g="block",function(e){var t,n=e.passThroughRef,r=(0,c.Z)(e,["passThroughRef"]),a=(0,s.useContext)(l.Z),o=a.selectedElement,u=a.pos,h=(0,s.useState)(!1),p=h[0],j=h[1];if(p&&o.el&&"block"==o.type){var b=o.config.hoverOffset?o.config.hoverOffset:2,x=(0,d.getRelativePosition)(u,o.el),y=o.el.offsetWidth/2,v=o.el.offsetHeight/2,O=(x.x-y)/o.el.offsetHeight*b,w=(x.y-v)/o.el.offsetHeight*b;t={transform:"translate(".concat(O,"px, ").concat(w,"px)")}}return(0,i.jsx)(m,f({onMouseEnter:function(e){if(a.selectedElementSet){var t={el:e.currentTarget,type:g,config:f({},_)};if("text"==g){var n=window.getComputedStyle(e.currentTarget).fontSize;t.config.textSize=parseFloat(n.replace("px"))}a.selectedElementSet(t),j(!0)}},onMouseLeave:function(e){e.pageX,e.pageY,(0,c.Z)(e,["pageX","pageY"]),a.removeSelectedElement&&(a.removeSelectedElement(),j(!1))},style:t,ref:n},r))})},3445:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),i=n(9008),a=(n(5675),n(8441)),s=n.n(a),o=n(3345),c=n.n(o),l=n(1664),d=n(7294),u=n(8795);function f(e){var t=e.children;return(0,d.useEffect)((function(){var e=document.getElementById("js-header"),t=document.getElementById("js-menu");document.getElementById("js-burger").addEventListener("click",(function(){t.classList.toggle(s().active),e.classList.toggle(s().height)}));var n=document.getElementById("js-cursor");window.onscroll=function(){window.pageYOffset>=r?e.classList.add("sticky"):e.classList.remove("sticky"),n.style.marginTop=window.pageYOffset};var r=e.offsetTop}),[]),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})}),(0,r.jsxs)("header",{className:s().header,id:"js-header",children:[(0,r.jsx)("div",{className:s().logo,children:(0,r.jsx)(u.Z,{style:{padding:8},id:"js-cursor",children:(0,r.jsx)(l.default,{href:"/",passHref:!0,children:(0,r.jsx)("img",{src:"/dp-logo.svg",width:"30",height:"20",alt:""})})})}),(0,r.jsx)("div",{className:s().spacer}),(0,r.jsx)(u.Z,{style:{padding:8},children:(0,r.jsx)("div",{className:s().burger,id:"js-burger",children:(0,r.jsx)("img",{src:"/burger-menu.svg",width:"30",height:"20",alt:""})})}),(0,r.jsxs)("div",{className:s().links,id:"js-menu",children:[(0,r.jsx)(u.Z,{className:s().link,children:(0,r.jsx)(l.default,{href:"/photography",passHref:!0,children:(0,r.jsx)("a",{children:"Fotograf\xeda"})})}),(0,r.jsx)(u.Z,{className:s().link,children:(0,r.jsx)(l.default,{href:"/design",passHref:!0,children:(0,r.jsx)("a",{children:"Dise\xf1o"})})}),(0,r.jsx)(u.Z,{className:s().link,children:(0,r.jsx)(l.default,{href:"/coding",passHref:!0,children:(0,r.jsx)("a",{children:"Programaci\xf3n"})})}),(0,r.jsx)(u.Z,{className:s().link,children:(0,r.jsx)(l.default,{href:"/about",passHref:!0,children:(0,r.jsx)("a",{children:"Sobre m\xed"})})})]})]}),(0,r.jsx)("main",{children:t}),(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:c().socialIcon+" "+s().copy,children:"\xa9 Dami\xe1n Ponce 2021 "}),(0,r.jsxs)("div",{className:c().socialLinks,children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)("a",{href:"mailto:dami.ponce8@gmail.com",target:"_blank",rel:"noreferrer",className:c().socialIcon,children:"Email"})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("a",{href:"https://github.com/damiponce",target:"_blank",rel:"noreferrer",className:c().socialIcon,children:"GitHub"})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("a",{href:"https://www.linkedin.com/in/damianponce/",target:"_blank",rel:"noreferrer",className:c().socialIcon,children:"LinkedIn"})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("a",{href:"https://www.instagram.com/damiponce28/",target:"_blank",rel:"noreferrer",className:c().socialIcon,children:"Instagram"})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("a",{href:"https://twitter.com/damiponce28",target:"_blank",rel:"noreferrer",className:c().socialIcon,children:"Twitter"})})]})]})]})}},7034:function(e,t,n){"use strict";n.d(t,{lC:function(){return r}});n(9666),n(6470),n(4155),n(7935);var r=function(e){return"https://cdn.statically.io/img/damiponce.github.io/".concat(e.src,"?w=",1e3,"&q=").concat(e.quality||75)}},2305:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=n(9008),a=n(3445),s=n(5675),o=n(7034),c=n(3111),l=n.n(c);function d(){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Sobre m\xed - Dami\xe1n Ponce"})}),(0,r.jsxs)("div",{className:l().section+" section",children:[(0,r.jsx)("div",{className:l().picture+" section-title",style:{marginBottom:"30px",marginInline:"2rem"},children:(0,r.jsx)(s.default,{loader:o.lC,src:"/dam-headshot-1.png",width:400,height:400,quality:100,alt:""})}),(0,r.jsxs)("div",{className:l().intro+" section-intro",children:[(0,r.jsxs)("div",{className:l().name,children:["Hola, soy ",(0,r.jsx)("br",{}),"Dami\xe1n Ponce"]}),(0,r.jsx)("div",{className:l().subname,children:"Soy un t\xe9cnico en avi\xf3nica con intereses en la programaci\xf3n, el dise\xf1o y la fotograf\xeda. Actualmente estoy estudiando ingenier\xeda aeron\xe1utica. Soy una persona autodidacta, y muy atenta a los detalles finos al momento de trabajar en cualquier proyecto."})]})]}),(0,r.jsxs)("div",{className:l().all_groups,children:[(0,r.jsxs)("div",{className:l().group,children:[(0,r.jsx)("div",{className:l().abilities_title,children:"Capacidades"}),(0,r.jsxs)("div",{className:l().abilities_text,children:["Puedo manejar varias herramientas de imagen, audio y video como"," ",(0,r.jsx)("b",{children:"Adobe Photoshop, Illustrator, Lightroom y After Effects."})," ","Tambi\xe9n tengo experiencia con software de dise\xf1o 3D/CAD como ",(0,r.jsx)("b",{children:"Autodesk AutoCAD, Fusion 360 y Cinema4D."})]})]}),(0,r.jsxs)("div",{className:l().group,children:[(0,r.jsx)("div",{className:l().abilities_title,children:"Experiencias"}),(0,r.jsxs)("div",{className:l().abilities_text,children:["Particip\xe9 de la competencia internacional"," ",(0,r.jsx)("a",{href:"https://2019.spaceappschallenge.org/challenges/living-our-world/bloom-or-not-bloom/teams/quid-pro-algae/project",target:"_blank",rel:"noreferrer",children:"NASA Space Apps Challenge 2019"}),"; en la cual ayud\xe9 al dise\xf1o parcial de los gr\xe1ficos para el proyecto y tambi\xe9n a la realizaci\xf3n del proyecto en s\xed."]})]})]})]})}},4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2305)}])},3111:function(e){e.exports={picture:"about_picture__DjY6n",section:"about_section__1etVj",intro:"about_intro__gzWzs",name:"about_name__F0lqa",subname:"about_subname__3iL_6",social:"about_social__2XEm5",all_groups:"about_all_groups__3A2pO",abilities_title:"about_abilities_title__DiL9x",abilities_text:"about_abilities_text__2jXD0",group:"about_group__3HnJ0"}},3345:function(e){e.exports={main:"styles_main__2Z1qn",pageLinksGroup:"styles_pageLinksGroup__3McWl",pageLink:"styles_pageLink__1q4h-",socialLinks:"styles_socialLinks__2e9bi",socialIcon:"styles_socialIcon__1VGDZ"}},8441:function(e){e.exports={container:"layout_container__3sC0E",header:"layout_header__3KufH",copy:"layout_copy__2qsHr",logo:"layout_logo__23MG9",burger:"layout_burger__1aZ55",links:"layout_links__1p18F",link:"layout_link__1Xz6R",height:"layout_height__3QpvT",active:"layout_active__1bOK4",spacer:"layout_spacer__rvO52"}},9666:function(){},7990:function(){},8497:function(){}},function(e){e.O(0,[710,675,935,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);