(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{60:function(e,n,t){e.exports=t(73)},65:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),c=(t(65),t(17)),l=t(6),s=t(43),m=t(8),u=t(36),d=t(24),f=t.n(d);function p(){var e=Object(m.a)(["\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 1em;\n    \n"]);return p=function(){return e},e}var g=Object(l.d)((function(e){var n=e.className,t=e.children;return r.a.createElement("div",{className:n},t)}))(p()),h=function(e){return 844e5*e},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return n.setTime(n.getTime()+h(e)),n},v=function(e,n,t){var a="";for(var r in t)a+="; ".concat(r,"=").concat(t[r]);document.cookie="".concat(e,"=").concat(n," ").concat(a)},E=function(e){var n=function(){var n=window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop;window.requestAnimationFrame((function(){return e(n)}))};Object(a.useEffect)((function(){return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}))},x=function(e,n){var t=Object(a.useState)(e),r=Object(c.a)(t,2),o=r[0],i=r[1];return Object(a.useLayoutEffect)((function(){(function(){var e={};return document.cookie.split(";").forEach((function(n){var t=n.split("=");e[t[0]]=t[1]})),e})().modo===n.name&&i(n)}),[i]),[o,function(){var t=o===e?n:e;!function(e){var n={expires:b(10)};v("modo",e,n)}(t.name),i(t)}]};function y(){var e=Object(m.a)(["\n  box-sizing: border-box;\n  font-family: 'Raleway', sans-serif;\n  color: ",";\n  background-color: ",";\n  position: fixed;\n  width: 100vw;\n  z-index:4;\n  top: 0;\n  left: 0;\n  padding: 0.8rem 0;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 10px 2px rgba(0,0,0,0.2);\n\n  .flex {\n    display:flex;\n  }\n\n  nav {\n    display: flex;\n  }\n\n  p {\n    margin: 0;\n    font-size: 0.8em;\n    font-weight: 600;\n    color: grey;\n  }\n\n  .content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  ul.links {\n    list-style: none;\n    display:flex;\n\n    & > li {\n      margin-right: 0.9em;\n      font-weight: 500;\n      font-size: 0.9rem;\n      opacity: 0.8;\n      \n\n      &:last-child {\n        margin-right: 0em;\n      }\n    }\n  }\n\n  .nav-link {\n    color: ",";\n    text-transform: uppercase;\n    font-family: 'DM Serif Display', serif;\n    letter-spacing: 2px;\n    transition: color 0.3s ease-in-out;\n  }\n\n  .nav-link-active {\n    color: ",";\n  }\n\n  .modo{\n    display:flex;\n    align-items: center;\n    margin-left:1em;\n    font-family: 'Raleway', sans-serif;\n    font-size: 1rem;\n    background: none;\n    height: 1.5em;\n    border: none;\n    font-weight: 500;\n    align-self:center;\n    color: grey;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    .circle {\n      background-color: ",";\n      \n      width: 1em;\n      height: 1em;\n      border-radius: 50%;\n      margin-left: 0.4em;\n     }\n  }\n\n  @media screen and (max-width: ","){\n    nav {\n      display: none;\n    }\n\n    .modo {\n      margin-right: 1em;\n    }\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(m.a)(["\n    position: relative;\n    margin: 0;\n    font-size: 1.2em;\n    line-height: 1em;\n    color: ",";\n"]);return w=function(){return e},e}var j=l.d.h1(w(),(function(e){return e.theme.colors.primario})),N=Object(l.d)((function(e){var n=e.className,t=e.toggleTheme,o=e.links,i=e.activeSection;!function(e,n){var t=Object(a.useState)(n),r=Object(c.a)(t,2),o=r[0],i=r[1];E((function(n){n>e&&!o&&i(!0),n<e&&o&&i(!1)}))}(150,!0);return r.a.createElement(f.a,{top:!0},r.a.createElement("header",{className:n},r.a.createElement(g,{className:"content"},r.a.createElement("div",null,r.a.createElement(j,null,"Mathias Moreira"),r.a.createElement("p",null,"Desarrollador")),r.a.createElement("div",{className:"flex"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"links"},o.map((function(e){var n;return e&&(n=i===e.id),r.a.createElement("li",{style:e.display?{}:{display:"none"}},r.a.createElement(u.NavHashLink,{ref:e.ref,to:"#".concat(e.id),className:n?"nav-link nav-link-active":"nav-link"},e.text))})))),r.a.createElement("button",{type:"button",className:"modo",onClick:t},r.a.createElement("div",{className:"circle"}))))))}))(y(),(function(e){return e.theme.colors.navBarText}),(function(e){return e.theme.colors.navBarBackground}),(function(e){return e.theme.colors.textoPortada}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.navBarText}),(function(e){return e.theme.breakpoints.md})),k=t(25);function O(){var e=Object(m.a)(["\n  position: fixed;\n  bottom: 50px;\n  right: -50px;\n  width: 50px;\n  padding: 0.5em 0;\n  background-color: "," ;\n  z-index: 10;\n  transition: right 0.5s ease-in-out;\n  text-align: center;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return O=function(){return e},e}var S=Object(l.d)((function(e){var n=e.className,t=r.a.useRef();r.a.useEffect((function(){var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),n=0,a=function(){n=window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop,t.current.style=n>e?"right: 0px":"right: -50px"};return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}));return r.a.createElement("div",{ref:t,className:n,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement(k.a,{icon:"chevron-up",size:"2x"}))}))(O(),(function(e){return e.theme.colorResalte}),(function(e){return e.theme.colors.accent})),B=function(e){var n=e.sections,t=e.children,o=e.onChangeMode,i=r.a.useState(),l=Object(c.a)(i,2),s=l[0],m=l[1],u=function(e){var n=Object(a.useState)([]),t=Object(c.a)(n,2),r=t[0],o=t[1],i=Object(a.useState)(),l=Object(c.a)(i,2),s=l[0],m=l[1],u=Object(a.useRef)(new IntersectionObserver((function(e){m(e)}),e));return Object(a.useEffect)((function(){return r.forEach((function(e){return u.current.observe(e)})),function(){return u.current.disconnect()}}),[r]),[o,s]}({threshold:.35}),d=Object(c.a)(u,2),f=d[0],p=d[1];r.a.useEffect((function(){f(n.map((function(e){return e.ref.current})))}),[n,f]),r.a.useEffect((function(){p&&p.forEach((function(e){e.isIntersecting&&m(e.target)}))}),[p]);var g=s?s.id:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{links:n,activeSection:g,toggleTheme:o}),t,r.a.createElement(S,null))},D=t(37),T=t.n(D);function z(){var e=Object(m.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n\n  .nombre {\n    margin:0;\n  }\n\n  .imagen {\n    position: absolute;\n    overflow: hidden;\n    top:50%;\n    left: 50%;\n    \n    transform: translate(-50%, -50%);\n    width: 100%;\n    height: 100%;\n    background-image: url('","/fondo_portada1.jpg');\n    background-size: cover;\n    background-position: center;\n    opacity: 0.2;\n  }\n\n  .overlay {\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ",";\n  }\n\n  .caption {\n    position: relative;\n    text-align:center;\n    font-size: 2rem;\n    font-weight: 600;\n    z-index: 3;\n    font-family: 'DM Serif Display', serif;\n    color: ",";\n  \n    .descripcion {\n      margin: 0;\n      font-size: 0.5em;\n      font-weight: 500;\n    }\n\n    .contactame {\n      font-size: 0.4em;\n      margin-top: 2rem;\n      padding: 0.5em 1em;\n      background: none;\n      font-family: 'DM Serif Display', serif;\n      text-transform: uppercase;\n      color: ",";\n      letter-spacing: 2px;\n      border: 2px solid ",";\n      transition: border 0.3s ease-in-out;\n\n      &:hover {\n        border: 2px solid white;\n        cursor: pointer;\n      }\n    }\n  }\n"]);return z=function(){return e},e}var M=Object(l.d)((function(e){var n=e.referencia,t=e.className,a=r.a.useRef();return E((function(e){a.current.style.transform="translate( -50%, calc(-50% + ".concat(.5*e,"px))"),n.current.style.opacity=1-e/400})),r.a.createElement("section",{ref:n,id:"portada",className:t},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{ref:a,className:"imagen"}),r.a.createElement("div",{className:"caption"},r.a.createElement(T.a,{left:!0,opposite:!0,cascade:!0},r.a.createElement("h2",{className:"nombre"},"Hola, soy Mathias,")),r.a.createElement(f.a,null,r.a.createElement("p",{className:"descripcion"},"te invito a recorrer mi portfolio!")),r.a.createElement(u.NavHashLink,{to:"#contacto",className:"contactame"},"Contactame")))}))(z(),(function(e){return e.theme.colors.fondo}),"/Portfolio",(function(e){return e.theme.colors.overlay}),(function(e){return e.theme.colors.textoPortada}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accent}));function P(){var e=Object(m.a)(["\n  width: 100%;\n"]);return P=function(){return e},e}function F(){var e=Object(m.a)(["\nfont-family: 'DM Serif Display', serif;\n  color: ",";\n  text-align: center;\n  font-size: 2em;\n  padding-top: 3rem;\n"]);return F=function(){return e},e}function R(){var e=Object(m.a)(["\n    min-height: 100vh;\n    background-color: ",";\n"]);return R=function(){return e},e}var A=Object(l.d)(r.a.forwardRef((function(e,n){return r.a.createElement("section",{id:e.id,ref:n,className:e.className},e.children)})))(R(),(function(e){return e.backgroundColor}));A.Title=Object(l.d)((function(e){var n=e.className,t=e.text;return r.a.createElement("header",{className:n},r.a.createElement(T.a,null,r.a.createElement("h1",null,t)))}))(F(),(function(e){return e.theme.colors.textoPortada})),A.Body=Object(l.d)((function(e){var n=e.className,t=e.children;return r.a.createElement("div",{className:n},t)}))(P());var C=A;function L(){var e=Object(m.a)(["\ngrid-area: ",";\ndisplay: flex;\nposition: relative;\n\n.imagen {\n    width: 100%;\n    object-fit: cover;\n}\n\n.nombre {\n    position: absolute;\n    margin: 0;\n    top: 0;\n    left: 0;\n    color: white;\n    font-size: 1.3em;\n    font-weight: 600;\n    padding: 1rem;\n    opacity: 0.8;\n    font-family: 'DM Serif Display', serif;\n}\n\nfooter {\n  position: absolute;\n  width: 100%;\n  padding: 0 1rem;\n  box-sizing: border-box;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: White;\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .live {\n    font-weight: 700;\n    color: ",";\n    opacity: ",";\n  }\n\n  .github {\n    font-size: 0.8em;\n    display: flex;\n    align-items: center;\n      * {\n      margin: 0.2em;\n    }\n  }\n}\n"]);return L=function(){return e},e}var H=Object(l.d)((function(e){var n=e.className,t=e.nombre,a=e.imgSrc,o=e.githubLink,i=e.liveUrl,c=(e.area,r.a.useRef());return r.a.createElement("article",{className:n},r.a.createElement("img",{className:"imagen",src:"".concat("/Portfolio").concat(a),alt:"imagen de ejemplo"}),r.a.createElement("h3",{ref:c,name:t,className:"nombre"},t),r.a.createElement("footer",null,r.a.createElement("a",{href:o,className:"github"},r.a.createElement(k.a,{icon:["fab","github"],size:"2x"}),"Github"),i?r.a.createElement("a",{href:i,className:"live"},"Live"):r.a.createElement("span",{className:"live"},"Live")))}))(L(),(function(e){return e.area}),(function(e){return e.liveUrl?"white":"grey"}),(function(e){return!e.liveUrl&&.5}));function U(){var e=Object(m.a)(['\n  margin: 0 0rem;\n  margin-bottom: 4rem;\n  position: relative;\n  top: -6rem;\n  display: grid;\n  grid-template-areas:  "a a b"\n                        "a a c"\n                        "d e e"\n                        "d e e";\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(4, 200px);\n  gap: 1rem;\n  animation: appearBottom 1s ease-in;\n\n  @media (max-width: 600px) {\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:  "a b"\n                          "c c"\n                          "d e"\n                          ;\n    grid-template-rows: repeat(3, 200px);\n  }\n\n  @keyframes appearBottom {\n    from {\n      top: 0;\n    } to {\n      top: -6rem;\n    }\n  }\n']);return U=function(){return e},e}var q=Object(l.d)((function(e){var n=e.className;return r.a.createElement("div",{className:n},r.a.createElement(H,{key:"proyecto-1",nombre:"eMercado",imgSrc:"/obligatorio-jap-2020.jpg",githubLink:"https://github.com/viejocadillac/obligatorio-jap-2020",liveUrl:"https://viejocadillac.github.io/obligatorio-jap-2020/",area:"a"}),r.a.createElement(H,{key:"proyecto-2",nombre:"Medio Trato",imgSrc:"/Medio-Trato.jpg",githubLink:"https://github.com/viejocadillac/Medio-Trato",liveUrl:"https://viejocadillac.github.io/Medio-Trato/",area:"b"}),r.a.createElement(H,{key:"proyecto-3",nombre:"React Sort",imgSrc:"/React-Sort.jpg",githubLink:"https://github.com/viejocadillac/React-Sort",liveUrl:"https://viejocadillac.github.io/React-Sort/",area:"c"}),r.a.createElement(H,{key:"proyecto-4",nombre:"Portfolio",imgSrc:"/Portfolio.jpg",githubLink:"https://github.com/viejocadillac/Portfolio",liveUrl:"/",area:"d"}),r.a.createElement(H,{key:"proyecto-5",nombre:"Node File Server",imgSrc:"/Node-File-Server.jpg",githubLink:"https://github.com/viejocadillac/Node-File-Server",area:"e"}))}))(U());function J(){var e=Object(m.a)(["\nposition: relative;\n\n  margin-top: -500px; \n \n \n"]);return J=function(){return e},e}var W=Object(l.d)((function(e){var n=e.id,t=e.referencia,a=e.backgroundColor;return r.a.createElement(C,{ref:t,id:n,backgroundColor:a,style:{top:"-10rem"}},r.a.createElement(g,null,r.a.createElement(C.Body,null,r.a.createElement(q,null))))}))(J());function I(){var e=Object(m.a)(["\n\npadding-bottom: 8rem;\n\n.title {\n  color: ",";\n  font-family: 'DM Serif Display', serif;\n}\n\n.contenedor-flex {\n  display: flex;\n  flex-wrap: wrap;\n  opacity: 0.8;\n}\n\n.left {\n  flex-grow: 1;\n  width: 66%;\n  flex-shrink: 1;\n\n}\n\n.download-curriculum {\n  padding-top: 3rem;\n  text-align: center;\n}\n\n   \n  \n\n\n.sobre-mi {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2em;\n    min-height: calc(100vh - 6.5rem - 4em);\n    \n    \n    @media (max-width: 500px) {\n      flex-direction: column;\n    }\n    .perfil, .descripcion, .tecnologias {\n      display: flex;\n      align-items: center;\n      flex-grow: 1;\n      color: ",";\n      \n    }\n    b{\n      font-weight: 500;\n     \n    }\n\n    .download-curriculum {\n      margin-top: 4rem;\n    }\n\n    .imagen-perfil {\n        margin: 0 auto;\n        margin-top: 1rem;\n        background-color: white;\n        max-width: 100px;\n        min-width: 100px;\n        height: 100px;\n        background-image: url('","/perfil.jpg');\n        background-size: cover;\n        border: 4px solid white;\n      }\n\n\n    .perfil {\n        flex-grow: unset;\n        padding: 0 1em;\n      }\n\n      .descripcion {\n     \n        flex-direction: column;\n        align-items: center;\n        padding: 0 1em;\n        \n        margin: 0;\n        font-family: 'DM Serif Display', serif;\n        \n\n        .titulo {\n          font-size: 2em;\n          width: min(100%, 23ch);\n          margin-bottom: 8rem;\n          text-align: center;\n        }\n\n        p {\n          line-height: 2em;\n          margin: 0;\n          padding-right: 2rem;\n          margin-bottom: 1em;\n   \n        }\n\n        a {\n        \n          font-weight: 700;\n          color: ",";\n        }\n      }\n\n      .container-tecnologias {\n      \n        display: flex;\n        align-items:center;\n        flex-direction:column;\n        width: 30%;\n        min-width: 200px;\n        flex-grow: 1;\n      \n      \n\n\n        p {\n           margin: 0;\n           font-weight: 600;\n        }\n\n        div {\n       \n          display: flex;\n          flex-wrap: wrap;\n\n\n        }\n      }\n\n      .tecnologias {\n        margin-top: 1.5rem;\n        display: flex;\n        flex-wrap: wrap;\n        width: 100%;\n\n   \n        .tecnologia {\n       \n          border: 2px solid ",";\n          font-size: 0.9em;\n\n          font-weight: 600;\n          margin: 0.5em;\n          margin-left: 0;\n          margin-top: 0;\n          padding: 0.3em 1em;\n         \n          text-align:center;\n          color: ",";\n          \n\n        }\n      }\n  }\n\n"]);return I=function(){return e},e}var _=Object(l.d)((function(e){var n=e.id,t=e.className,a=e.referencia,o=e.show,i=r.a.useContext(l.a);return r.a.createElement(C,{ref:a,id:n,className:t,backgroundColor:i.colors.body,show:o},r.a.createElement(C.Title,{text:"Sobre mi.",className:"title"}),r.a.createElement(C.Body,{className:"sobre-mi"},r.a.createElement(g,null,r.a.createElement("div",{className:"perfil"},r.a.createElement("div",{className:"g-circle imagen-perfil"})),r.a.createElement("div",{className:"descripcion"},r.a.createElement("h3",{className:"titulo"},"No soy un programador autodidacta mas."),r.a.createElement("div",{className:"contenedor-flex"},r.a.createElement("div",{className:"left"},r.a.createElement(f.a,null,r.a.createElement("p",null,"Me recib\xed en 2019 de T\xe9cnico en Mantenimiento de Aeronaves. El \xfaltimo tiempo, he desempe\xf1ado funciones relacionadas a la aviaci\xf3n d\xf3nde empec\xe9 a poner en pr\xe1ctica mis conocimientos.")),r.a.createElement(f.a,null,r.a.createElement("p",null,"De igual forma, me encuentro",r.a.createElement("b",null," muy motivado a desarrollar otra de mis pasiones; la programaci\xf3n. "),"Para esto cuento con un gran desempe\xf1o",r.a.createElement("b",null,"autodidacta. "),"El \xfaltimo tiempo, decid\xed formalizar mis conocimientos siendo parte del programa de",r.a.createElement("a",{href:"https://jovenesaprogramar.edu.uy/"},"J\xf3venes a Programar"),"."))),r.a.createElement("div",{className:"container-tecnologias"},r.a.createElement("p",null,"Algunas de las tecnologias que manejo son:"),r.a.createElement("div",{className:"tecnologias"},r.a.createElement("span",{className:"tecnologia"},"Sass"),r.a.createElement("span",{className:"tecnologia"},"React"),r.a.createElement("span",{className:"tecnologia"},"Git"),r.a.createElement("span",{className:"tecnologia"},"JavaScript"),r.a.createElement("span",{className:"tecnologia"},"Node"),r.a.createElement("span",{className:"tecnologia"},"Html"),r.a.createElement("span",{className:"tecnologia"},"Css")))),r.a.createElement("p",{className:"download-curriculum"},"Podes descargar mi curriculum, haciendo click",r.a.createElement("a",{href:"".concat("/Portfolio","/CV_Mathias Moreira.pdf"),target:"_blank",rel:"noreferrer"}," ac\xe1"))))))}))(I(),(function(e){return e.theme.colors.textoPortada}),(function(e){return e.theme.colors.textoPortada}),"/Portfolio",(function(e){return e.theme.colors.textoPortada}),(function(e){return e.theme.colors.textoPortada}),(function(e){return e.theme.colors.textoPortada})),G=t(105),Y=t(106);function V(){var e=Object(m.a)(["\n  display:flex;\n  margin-bottom: 6rem;\n  flex-direction:column;\n\n  a {\n      color: inherit;\n  }\n\n  p {\n      text-align:center;\n      color: ",";\n      font-family: 'DM Serif Display', serif;\n  }\n\n  .input-root {\n    background-color: white;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  }\n\n  .icons-container{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 3rem;\n    color: ",";\n\n    * {\n        margin: 0.5rem;\n    }\n  }\n\n  form {\n      display: flex;\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      font-family: 'Raleway', sans-serif,Arial, Helvetica, sans-serif;\n      color: ",";\n  }\n\n  button {\n    align-self: flex-end;\n    border-radius: 0px;\n    color: ",";\n    background-color: ",";\n    box-shadow: none;\n  }\n  "]);return V=function(){return e},e}var $=Object(l.d)((function(e){var n=e.id,t=e.className,a=e.referencia,o=(e.show,r.a.useRef());return r.a.createElement(C,{ref:a,id:n,className:t},r.a.createElement(C.Title,{text:["Con","tacto."]}),r.a.createElement(g,null,r.a.createElement(C.Body,{className:"proyectos-container"},r.a.createElement("div",{className:"g-flex"},r.a.createElement("div",null,r.a.createElement("p",null,"Enviame un mensaje, o contactame por las redes!"),r.a.createElement("div",{className:"icons-container"},r.a.createElement("a",{href:"https://github.com/viejocadillac"},r.a.createElement(k.a,{icon:["fab","github"],size:"2x"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/mathias-moreira-b77290195/"},r.a.createElement(k.a,{icon:["fab","linkedin"],size:"2x"})))),r.a.createElement("form",{ref:o,onSubmit:function(e){e.preventDefault();var n=new FormData(o.current);fetch("https://usebasin.com/f/8cbe29ba9b2a",{method:"POST",body:n}).then((function(e){console.log(e)}))}},r.a.createElement(G.a,{id:"nombre",margin:"normal",name:"nombre",size:"small",variant:"filled",label:"Nombre",type:"text",classes:{root:"input-root"},required:!0}),r.a.createElement(G.a,{id:"email",margin:"normal",name:"email",size:"small",variant:"filled",label:"Email",type:"email",classes:{root:"input-root"},required:!0}),r.a.createElement(G.a,{id:"mensaje",margin:"normal",name:"mensaje",size:"small",variant:"filled",label:"Mensaje",multiline:!0,rows:"4",classes:{root:"input-root"},required:!0}),r.a.createElement(Y.a,{type:"submit",variant:"contained",color:"primary"},"Enviar"))))))}))(V(),(function(e){return e.theme.colors.navBarText}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.navBarText}),(function(e){return e.theme.colors.claro}),(function(e){return e.theme.colors.accent}));function K(){var e=Object(m.a)(["\n\n/* Layout */\n\n.g-grid {\n  display:grid;\n}\n\n\n\n/* Estilos */\n\nbody {\n  background-color: ",";\n}\n\na {\n    text-decoration: none;\n    color: rgba(0,0,0,0.7);\n}\n\n.g-circle {\n    border-radius: 50%;\n}\n\n\n\n"]);return K=function(){return e},e}var Q=Object(l.c)(K(),(function(e){return e.theme.colors.body})),X=t(15),Z={breakpoints:{md:"800px"}},ee={name:"light",colors:{primario:"#2DADF8",sectionTitle:"#AADEDC",navLinks:"#7EADBF",accent:"#2DADF8",fondo1:"White",claro:"white",oscuro:"#233B4A",textoPortada:"#233B4A",navBarBackground:"white",navBarText:"#233B4A",overlay:"white",body:"white"}},ne={name:"dark",colors:{primario:"#2DADF8",accent:"#2DADF8",fondo:"#233B4A",claro:"#FCFFE5",navBarBackground:"#233B4A",navBarText:"#FCFFE5",textoPortada:"white",oscuro:"#233B4A",overlay:"#233B4A",sectionTitle:"#FCFFE5",body:"#233B4A"}},te=Object(X.a)(Object(X.a)(Object(X.a)({},Z),ee),{},{colors:Object(X.a)(Object(X.a)({},ee.colors),{},{otherThemeBackground:ne.colors.fondo})}),ae=Object(X.a)(Object(X.a)(Object(X.a)({},Z),ne),{},{colors:Object(X.a)(Object(X.a)({},ne.colors),{},{otherThemeBackground:ee.colors.fondo})});var re=function(e){var n=e.className,t=x(ae,te),a=Object(c.a)(t,2),o=a[0],i=a[1],m=r.a.useRef(null),u=r.a.useRef(null),d=r.a.useRef(null),f=r.a.useRef(null),p=[{ref:m,id:"portada",text:"Portada",display:!1},{ref:u,id:"proyectos",text:"Proyectos",display:!0},{ref:d,id:"sobremi",text:"Sobre Mi",display:!0},{ref:f,id:"contacto",text:"Contacto",display:!0}];return r.a.createElement(s.BrowserRouter,null,r.a.createElement(l.b,{theme:o},r.a.createElement(Q,null),r.a.createElement(B,{className:n,sections:p,onChangeMode:i},r.a.createElement(M,{referencia:m,id:"portada",name:"Portada"}),r.a.createElement(W,{referencia:u,id:"proyectos",name:"Proyectos"}),r.a.createElement(_,{referencia:d,id:"sobremi",name:"Sobre Mi"}),r.a.createElement($,{referencia:f,id:"contacto",name:"Contacto"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(31),ie=t(34),ce=t(27);oe.b.add(ie.d,ie.b,ce.c,ce.d,ce.b,ie.a,ie.c,ce.f,ce.e,ce.a),i.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.1cb2ac0b.chunk.js.map