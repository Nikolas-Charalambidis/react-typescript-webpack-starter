!function(e){function t(t){for(var r,o,u=t[0],c=t[1],i=t[2],m=0,p=[];m<u.length;m++)o=u[m],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&p.push(l[o][0]),l[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==l[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},l={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=c;a.push([22,1]),n()}([,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n(0),l=(n(14),n(10)),a=n(1),o=n(18),u=n(20),c=n(21);class i extends r.Component{render(){return r.createElement(r.Fragment,null,r.createElement(l.BrowserRouter,{basename:e.env.PUBLIC_URL},r.createElement(a.g,null,r.createElement(a.d,{exact:!0,path:"/"},r.createElement(c.a,{label:"home"})),r.createElement(a.d,{path:"/about"},r.createElement(o.a,{label:"about"})),r.createElement(a.d,{path:"/dashboard"},r.createElement(u.a,{label:"contacts"})))))}}}).call(this,n(27))},function(e,t,n){"use strict";var r=n(0),l=n(6);t.a=({label:e})=>r.createElement(r.Fragment,null,r.createElement("h1",null,"Page: ",e),r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(l.HashLink,{to:"/"},"Home")))))},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),l=n(6);class a extends r.Component{render(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"Page: ",this.props.label),r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(l.HashLink,{to:"/"},"Home")))))}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),l=n(6);class a extends r.Component{render(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"Welcome, this is a ",this.props.label," page"),r.createElement("div",null,r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(l.HashLink,{to:"/"},"Home")),r.createElement("li",null,r.createElement(l.HashLink,{to:"/about"},"About")),r.createElement("li",null,r.createElement(l.HashLink,{to:"/dashboard"},"Dashboard"))))))}}},function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(16),o=n.n(a),u=(n(14),n(17));o.a.render(l.a.createElement(u.a,{label:"home"}),document.getElementById("root"))}]);
//# sourceMappingURL=app.3ead5779e0435cc8ca11.js.map