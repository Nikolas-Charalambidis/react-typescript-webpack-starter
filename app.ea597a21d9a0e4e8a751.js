!function(e){function t(t){for(var l,c,o=t[0],u=t[1],i=t[2],p=0,s=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(m&&m(t);s.length;)s.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(l=!1)}l&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var l={},r={0:0},a=[];function c(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=l,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(n,l,function(t){return e[t]}.bind(null,l));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var m=u;a.push([7,1]),n()}({7:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(2),c=n.n(a);class o extends l.Component{render(){return l.createElement(l.Fragment,null,l.createElement("h1",null,"Welcome, this is a ",this.props.label," page"),l.createElement("div",null,l.createElement("div",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/react-typescript-webpack-starter"},"Home")),l.createElement("li",null,l.createElement("a",{href:"/react-typescript-webpack-starter/about"},"About")),l.createElement("li",null,l.createElement("a",{href:"/react-typescript-webpack-starter/contacts"},"Contacts"))))),l.createElement("hr",null),l.createElement("div",null,l.createElement("h3",null,"Environment variable"),l.createElement("p",null,"process.env.ENVIRONMENT=","production"),l.createElement("p",null,"process.env.BASEPATH=","/react-typescript-webpack-starter"),l.createElement("p",null,"process.env.GREETING=","Hello World from .env")))}}class u extends l.Component{render(){return l.createElement(l.Fragment,null,l.createElement("h1",null,"Page: ",this.props.label),l.createElement("div",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/"},"Home")))))}}var i=({label:e})=>l.createElement(l.Fragment,null,l.createElement("h1",null,"Page: ",e),l.createElement("div",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/"},"Home")))));var m=({label:e,location:t})=>l.createElement(l.Fragment,null,l.createElement("h1",null,"Error: ",e),l.createElement("h3",null,t," not found"),l.createElement("div",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/"},"Home")))));class p extends l.Component{render(){const e=window.location.href,t="/react-typescript-webpack-starter";console.log("url",e);const n=[{path:t+"/",action:()=>l.createElement(o,{label:"home"})},{path:t+"/about",action:()=>l.createElement(i,{label:"about"})},{path:t+"/contacts",action:()=>l.createElement(u,{label:"contacts"})}].find(t=>e.endsWith(t.path));return n&&n.action?l.createElement(l.Fragment,null,n.action()):l.createElement(l.Fragment,null,l.createElement(m,{location:e,label:"404"}))}}c.a.render(r.a.createElement(p,null),document.getElementById("root"))}});
//# sourceMappingURL=app.ea597a21d9a0e4e8a751.js.map