(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>m});var t=r(81),o=r.n(t),a=r(645),c=r.n(a),i=r(667),s=r.n(i),d=new URL(r(695),r.b),p=new URL(r(33),r.b),u=c()(o()),l=s()(d),f=s()(p);u.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    background-image: url("+l+");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n/* ----- SIDEBAR ----- */\n\n.sidebar {\n    grid-column: 1 / 2;\n    background-color: rgba(255, 255, 255, 0.466);\n    display: grid;\n    grid-template-rows: 1fr 1fr 3fr;\n}\n\n@font-face {\n    font-family: 'todo';\n    src: url("+f+");\n}\n\n.icon {\n    grid-row: 1 / 2;\n    font-family: 'todo';\n    align-self: center;\n    justify-self: center;\n    font-size: 4rem;\n    color: aqua;\n    cursor: alias;\n}\n\n.firstform {\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 60%;\n    justify-self: center;\n}\n\n.firstform > input {\n    border: 1px solid aqua;\n    border-radius: 6px;\n    padding: 7px;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\n.secondform {\n    grid-row: 3 / 4;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 60%;\n    justify-self: center;\n}\n\n.secondform > input {\n    border: 1px solid aqua;\n    border-radius: 6px;\n    padding: 7px;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\n.secondform > input:hover {\n    background-color: aqua;\n    transform: scale(1.07, 1.07);\n}\n\n\nbutton {\n    background-color: rgba(0, 0, 255, 0);\n    color: black;\n    border: 2px solid black;\n    padding: 6px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n    font-weight: bolder;\n}\n\nselect {\n    border: 1px solid aqua;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n    border-radius: 8px;\n    padding: 4px;\n}\n\nselect:hover {\n    background-color: aqua;\n}\n\nbutton:hover {\n    background-color: aqua;\n}\n\n/* ----- MAIN ----- */\n\n.maincontent {\n    grid-column: 2 / 3;\n    background-color: rgba(0, 255, 255, 0.336);\n    display: grid;\n    grid-template-rows: repeat(auto-fit, minmax(1fr, 300px));\n    overflow: auto;\n}\n\nspan {\n    min-width: 80%;\n    max-width: 80%;\n    height: 150px;\n    border: 3px dotted white;\n    background-color: aqua;\n    border-radius: 10px;\n    justify-self: center;\n    margin: 10px;\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;\n    display: flex;\n    overflow: auto;\n}\n\nspan:hover {\n    transform: scale(1.04, 1.04);\n}\n\n.todo {\n    height: 80%;\n    min-width: 110px;\n    max-width: 110px;\n    border: 1px solid black;\n    border-radius: 5px;\n    align-self: center;\n    margin: 10px;\n    cursor: pointer;\n    background-color: white;\n}\n\n.todo:hover {\n    transform: scale(1.03, 1.03);\n}\n",""]);const m=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=t.base?s[0]+t.base:s[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,t);t.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=r(a[c]);e[i].references--}for(var s=t(n,o),d=0;d<a.length;d++){var p=r(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},33:(n,e,r)=>{n.exports=r.p+"4bab562cce9f6349b87a.ttf"},695:(n,e,r)=>{n.exports=r.p+"4d5f5fbea447ccb6e202.jpg"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),c=r.n(a),i=r(565),s=r.n(i),d=r(216),p=r.n(d),u=r(589),l=r.n(u),f=r(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const x=[],g=[],b=[],h=document.querySelector("#projectinput"),v=document.querySelector(".maincontent"),y=document.querySelector("#todotitle"),w=document.querySelector("#description"),S=document.querySelector("#date"),j=document.querySelector("#priority"),k=document.querySelector("#selectProject"),q=document.querySelector("#projectbtn");q.addEventListener("click",(()=>{const n=function(n){return{projectname:n}}(h.value);x.push(n);const e=document.createElement("span");e.textContent=x[x.length-1].projectname,e.setAttribute("id",x[x.length-1].projectname),v.appendChild(e),b.push(e)})),q.addEventListener("click",(()=>{const n=document.createElement("option");n.textContent=h.value,n.value=h.value,k.appendChild(n)})),document.querySelector("#addbtn").addEventListener("click",(()=>{const n=function(n,e,r,t,o){return{title:n,description:e,date:r,priority:t,projectselector:o}}(y.value,w.value,S.value,j.value,k.value);g.push(n);const e=document.createElement("div");e.classList.add("todo"),document.querySelectorAll("span").forEach((r=>{r.id==n.projectselector&&r.appendChild(e)}))}))})()})();