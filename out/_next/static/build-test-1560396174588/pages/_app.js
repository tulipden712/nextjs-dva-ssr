(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),u=n("Tit0"),s=n("8Bbg"),c=n.n(s),f=n("q1tI"),l=n.n(f),p=n("/MKj"),d=n("UXZV"),h=n.n(d);function v(){return(v=h.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=n("ln6h"),m=n.n(y),g=n("zrwo"),b=n("O40h"),w=n("p0XB"),x=n.n(w),O=n("cFq4"),j=n.n(O),P=n("Xg/G"),E=n.n(P);var S=n("d04V"),T=n.n(S),A=n("yLu3"),k=n.n(A);function z(e){return function(e){if(x()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(k()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return T()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C=n("vDqi"),_=n.n(C),R=[{namespace:"home",state:{activity:{page:1,size:10,dataset:[],more:!0},training:{page:1,size:10,dataset:[],more:!0}},reducers:{fetchActivityList__:function(e,t){var n=t.activity;e.activity=n},fetchTrainingList__:function(e,t){var n=t.training;e.training=n}},effects:{fetchActivityList:m.a.mark(function e(t,n){var r,o,a,i,u,s,c,f;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,o=void 0===r?{}:r,a=n.put,i=n.select,e.next=4,i(function(e){return e.home.activity});case 4:if((u=e.sent).more){e.next=7;break}return e.abrupt("return");case 7:return s=o.page||u.page,e.next=10,_.a.get("http://api.zentrust.cn/mobile/activity?current=".concat(s,"&size=").concat(u.size)).then(function(e){return e.data});case 10:if(0==+(c=e.sent).code){e.next=13;break}return e.abrupt("return");case 13:return f=Object(g.a)({},u,{page:s,dataset:[].concat(z(u.dataset),z(c.dataset))}),c.dataset.length||(f.more=!1),e.next=17,a({type:"fetchActivityList__",activity:f});case 17:case"end":return e.stop()}},e)}),fetchTrainingList:m.a.mark(function e(t,n){var r,o,a,i,u,s,c,f;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,o=void 0===r?{}:r,a=n.put,i=n.select,e.next=4,i(function(e){return e.home.training});case 4:if((u=e.sent).more){e.next=7;break}return e.abrupt("return");case 7:return s=o.page||u.page,e.next=10,_.a.get("http://api.zentrust.cn/mobile/training?current=".concat(s,"&size=").concat(u.size)).then(function(e){return e.data});case 10:if(0==+(c=e.sent).code){e.next=13;break}return e.abrupt("return");case 13:return f=Object(g.a)({},u,{page:s,dataset:[].concat(z(u.dataset),z(c.dataset))}),c.dataset.length||(f.more=!1),e.next=17,a({type:"fetchTrainingList__",training:f});case 17:case"end":return e.stop()}},e)})}}],D="undefined"==typeof window,B="__NEXT_DVA_STORE__";function L(e){var t;return(t=e?E()({initialState:e}):E()({})).use(n("i5Zg").default()),t.use(j()()),x()(R)?R.forEach(function(e){t.model(e)}):t.model(R),t.router(function(){}),t.start(),t._store}function N(e){return D?L(e):(window[B]||(window[B]=L(e)),window[B])}var U,I=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.dvaStore;return l.a.createElement(s.Container,null,l.a.createElement(p.Provider,{store:r},l.a.createElement(t,n)))}}]),t}(c.a);t.default=(U=I,function(e){function t(e){var n;return Object(r.default)(this,t),(n=Object(a.default)(this,Object(i.default)(t).call(this,e))).dvaStore=N(e.initialDvaState),n}return Object(u.default)(t,e),Object(o.default)(t,null,[{key:"getInitialProps",value:(n=Object(b.default)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=N(),t.ctx.dvaStore=n,r={},"function"!=typeof U.getInitialProps){e.next=7;break}return e.next=6,U.getInitialProps(t);case 6:r=e.sent;case 7:return e.abrupt("return",Object(g.a)({},r,{initialDvaState:n.getState()}));case 8:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)})}]),Object(o.default)(t,[{key:"render",value:function(){return l.a.createElement(U,v({},this.props,{dvaStore:this.dvaStore}))}}]),t;var n}(l.a.Component))},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("eVuF")),a=r(n("UXZV")),i=r(n("/HRN")),u=r(n("WaGi")),s=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=l(n("q1tI")),h=p(n("lgD3")),v=n("Bu4q"),y=n("nOHt"),m=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{router:y.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=w(t);return d.default.createElement(g,null,d.default.createElement(n,(0,a.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return o.default.resolve(v.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return o.default.reject(r)}}}]),t}(d.Component);m.childContextTypes={router:h.default.object},t.default=m;var g=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=g;var b=v.execOnce(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:null,o=n||t;return e.replace(r,o)}}}t.createUrl=w},CgaS:function(e,t,n){"use strict";var r=n("JEQr"),o=n("xTJ+"),a=n("9rSQ"),i=n("UnBK");function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=u},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,s={adapter:("undefined"!=typeof XMLHttpRequest?u=n("tQ2B"):void 0!==t&&(u=n("tQ2B")),u),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(a)}),e.exports=s}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),i=n("JEQr"),u=n("2SVd"),s=n("5oMp");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!u(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"V/h/":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"produce",function(){return Q}),n.d(t,"setAutoFreeze",function(){return G}),n.d(t,"setUseProxies",function(){return Z}),n.d(t,"applyPatches",function(){return $}),n.d(t,"Immer",function(){return X}),n.d(t,"original",function(){return h}),n.d(t,"isDraft",function(){return p}),n.d(t,"isDraftable",function(){return d}),n.d(t,"nothing",function(){return c}),n.d(t,"immerable",function(){return f});var r,o,a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c="undefined"!=typeof Symbol?Symbol("immer-nothing"):(a=!0,(o="immer-nothing")in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r),f="undefined"!=typeof Symbol?Symbol("immer-draftable"):"__$immer_draftable",l="undefined"!=typeof Symbol?Symbol("immer-state"):"__$immer_state";function p(e){return!!e&&!!e[l]}function d(e){if(!e||"object"!==(void 0===e?"undefined":i(e)))return!1;if(Array.isArray(e))return!0;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype||(!!e[f]||!!e.constructor[f])}function h(e){if(e&&e[l])return e[l].base}var v=Object.assign||function(e,t){for(var n in t)w(t,n)&&(e[n]=t[n]);return e},y="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(e))return e.slice();var n=Object.create(Object.getPrototypeOf(e));return y(e).forEach(function(r){if(r!==l){var o=Object.getOwnPropertyDescriptor(e,r);if(o.get){if(!t)throw new Error("Immer drafts cannot have computed properties");o.value=o.get.call(e)}o.enumerable?n[r]=o.value:Object.defineProperty(n,r,{value:o.value,writable:!0,configurable:!0})}}),n}function g(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(n,e[n],e);else y(e).forEach(function(n){return t(n,e[n],e)})}function b(e,t){return Object.getOwnPropertyDescriptor(e,t).enumerable}function w(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}var O={},j=[],P=function(){return j[j.length-1]};function E(e,t){var n=Array.isArray(e),r=z(e);g(r,function(t){!function(e,t,n){var r=O[t];r?r.enumerable=n:O[t]=r={configurable:!0,enumerable:n,get:function(){return function(e,t){C(e);var n=T(e)[t];if(!e.finalizing&&n===e.base[t]&&d(n))return k(e),e.copy[t]=E(n,e);return n}(this[l],t)},set:function(e){!function(e,t,n){if(C(e),e.assigned[t]=!0,!e.modified){if(x(T(e)[t],n))return;A(e),k(e)}e.copy[t]=n}(this[l],t,e)}};Object.defineProperty(e,t,r)}(r,t,n||b(e,t))});var o,a,i,u={scope:t?t.scope:P(),modified:!1,finalizing:!1,finalized:!1,assigned:{},parent:t,base:e,draft:r,copy:null,revoke:S,revoked:!1};return o=r,a=l,i=u,Object.defineProperty(o,a,{value:i,enumerable:!1,writable:!0}),u.scope.push(u),r}function S(){this.revoked=!0}function T(e){return e.copy||e.base}function A(e){e.modified||(e.modified=!0,e.parent&&A(e.parent))}function k(e){e.copy||(e.copy=z(e.base))}function z(e){var t=e&&e[l];if(t){t.finalizing=!0;var n=m(t.draft,!0);return t.finalizing=!1,n}return m(e)}function C(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(T(e)))}function _(e){for(var t=e.base,n=e.draft,r=Object.keys(n),o=r.length-1;o>=0;o--)if(void 0===t[r[o]]&&!w(t,r[o]))return!0;return r.length!==Object.keys(t).length}function R(e){var t=e.draft;if(t.length!==e.base.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!n||n.get)}var D=Object.freeze({scopes:j,currentScope:P,willFinalize:function(e,t,n){var r=P();r.forEach(function(e){return e.finalizing=!0}),void 0!==e&&e!==t||(n&&function e(t){if(t&&"object"===(void 0===t?"undefined":i(t))){var n=t[l];if(n){var r=n.base,o=n.draft,a=n.assigned;if(Array.isArray(t)){if(R(n)){if(A(n),a.length=!0,o.length<r.length)for(var u=o.length;u<r.length;u++)a[u]=!1;else for(var s=r.length;s<o.length;s++)a[s]=!0;for(var c=0;c<o.length;c++)void 0===a[c]&&e(o[c])}}else Object.keys(o).forEach(function(t){void 0!==r[t]||w(r,t)?a[t]||e(o[t]):(a[t]=!0,A(n))}),Object.keys(r).forEach(function(e){void 0!==o[e]||w(o,e)||(a[e]=!1,A(n))})}}}(t),function(e){for(var t=e.length-1;t>=0;t--){var n=e[t];!1===n.modified&&(Array.isArray(n.base)?R(n)&&A(n):_(n)&&A(n))}}(r))},createDraft:E}),B=[],L=function(){return B[B.length-1]};function N(e,t){var n={scope:t?t.scope:L(),modified:!1,finalized:!1,assigned:{},parent:t,base:e,draft:null,drafts:{},copy:null,revoke:null},r=Array.isArray(e)?Proxy.revocable([n],I):Proxy.revocable(n,U),o=r.revoke,a=r.proxy;return n.draft=a,n.revoke=o,n.scope.push(n),a}var U={get:function(e,t){if(t===l)return e;var n=e.drafts;if(!e.modified&&w(n,t))return n[t];var r=q(e)[t];if(e.finalized||!d(r))return r;if(e.modified){if(r!==e.base[t])return r;n=e.copy}return n[t]=N(r,e)},has:function(e,t){return t in q(e)},ownKeys:function(e){return Reflect.ownKeys(q(e))},set:function(e,t,n){if(!e.modified){var r=n?x(e.base[t],n)||n===e.drafts[t]:x(e.base[t],n)&&t in e.base;if(r)return!0;F(e)}return e.assigned[t]=!0,e.copy[t]=n,!0},deleteProperty:function(e,t){(void 0!==e.base[t]||t in e.base)&&(e.assigned[t]=!1,F(e));e.copy&&delete e.copy[t];return!0},getOwnPropertyDescriptor:function(e,t){var n=q(e),r=Reflect.getOwnPropertyDescriptor(n,t);r&&(r.writable=!0,r.configurable=!Array.isArray(n)||"length"!==t);return r},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},I={};function q(e){return e.copy||e.base}function F(e){e.modified||(e.modified=!0,e.copy=v(m(e.base),e.drafts),e.drafts=null,e.parent&&F(e.parent))}g(U,function(e,t){I[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),I.deleteProperty=function(e,t){if(isNaN(parseInt(t)))throw new Error("Immer only supports deleting array indices");return U.deleteProperty.call(this,e[0],t)},I.set=function(e,t,n){if("length"!==t&&isNaN(parseInt(t)))throw new Error("Immer only supports setting array indices and the 'length' property");return U.set.call(this,e[0],t,n)};var V=Object.freeze({scopes:B,currentScope:L,willFinalize:function(){},createDraft:N});function J(e,t,n,r){Array.isArray(e.base)?function(e,t,n,r){for(var o=e.base,a=e.copy,i=e.assigned,u=Math.min(o.length,a.length),s=0;s<u;s++)if(i[s]&&o[s]!==a[s]){var c=t.concat(s);n.push({op:"replace",path:c,value:a[s]}),r.push({op:"replace",path:c,value:o[s]})}if(u<a.length){for(var f=u;f<a.length;f++)n.push({op:"add",path:t.concat(f),value:a[f]});r.push({op:"replace",path:t.concat("length"),value:o.length})}else if(u<o.length){n.push({op:"replace",path:t.concat("length"),value:a.length});for(var l=u;l<o.length;l++)r.push({op:"add",path:t.concat(l),value:o[l]})}}(e,t,n,r):function(e,t,n,r){var o=e.base,a=e.copy;g(e.assigned,function(e,i){var u=o[e],s=a[e],c=i?e in o?"replace":"add":"remove";if(u!==s||"replace"!==c){var f=t.concat(e);n.push("remove"===c?{op:c,path:f}:{op:c,path:f,value:s}),r.push("add"===c?{op:"remove",path:f}:"remove"===c?{op:"add",path:f,value:u}:{op:"replace",path:f,value:u})}})}(e,t,n,r)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n],o=r.path;if(0===o.length&&"replace"===r.op)e=r.value;else{for(var a=e,u=0;u<o.length-1;u++)if(!(a=a[o[u]])||"object"!==(void 0===a?"undefined":i(a)))throw new Error("Cannot apply patch, path doesn't resolve: "+o.join("/"));var s=o[o.length-1];switch(r.op){case"replace":case"add":a[s]=r.value;break;case"remove":if(Array.isArray(a)){if(s!==a.length-1)throw new Error("Only the last index of an array can be removed, index: "+s+", length: "+a.length);a.length-=1}else delete a[s];break;default:throw new Error("Unsupported patch operation: "+r.op)}}}return e}var M={useProxies:"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect,autoFreeze:void 0===e&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},X=function(){function e(t){u(this,e),v(this,M,t),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this)}return s(e,[{key:"produce",value:function(e,t,n){var r=this;if("function"==typeof e&&"function"!=typeof t){var o=t;return t=e,function(){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return r.produce(i,function(e){var r;return(r=t).call.apply(r,[e,e].concat(n))})}}if("function"!=typeof t)throw new Error("if first argument is not a function, the second argument to produce should be a function");if(void 0!==n&&"function"!=typeof n)throw new Error("the third argument of a producer should not be set or a function");var a=void 0;if(d(e)){this.scopes.push([]);var i=this.createDraft(e);try{a=t.call(i,i),this.willFinalize(a,i,!!n);var u=n&&[],s=n&&[];if(void 0===a||a===i)a=this.finalize(i,[],u,s);else{if(i[l].modified)throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");d(a)&&(a=this.finalize(a)),n&&(u.push({op:"replace",path:[],value:a}),s.push({op:"replace",path:[],value:e}))}}finally{this.currentScope().forEach(function(e){return e.revoke()}),this.scopes.pop()}n&&n(u,s)}else if(void 0===(a=t(e)))return e;return a===c?void 0:a}},{key:"setAutoFreeze",value:function(e){this.autoFreeze=e}},{key:"setUseProxies",value:function(e){this.useProxies=e,v(this,e?V:D)}},{key:"applyPatches",value:function(e,t){return p(e)?H(e,t):this.produce(e,function(e){return H(e,t)})}},{key:"finalize",value:function(e,t,n,r){var o=this,a=e[l];if(!a)return Object.isFrozen(e)?e:this.finalizeTree(e);if(a.scope!==this.currentScope())return e;if(!a.modified)return a.base;if(!a.finalized){if(a.finalized=!0,this.finalizeTree(a.draft,t,n,r),this.onDelete)if(this.useProxies){var i=a.assigned;for(var u in i)i[u]||this.onDelete(a,u)}else{var s=a.base,c=a.copy;g(s,function(e){w(c,e)||o.onDelete(a,e)})}this.onCopy&&this.onCopy(a),this.autoFreeze&&1===this.scopes.length&&Object.freeze(a.copy),n&&J(a,t,n,r)}return a.copy}},{key:"finalizeTree",value:function(e,t,n,r){var o=this,a=e[l];a&&(this.useProxies||(a.finalizing=!0,a.copy=m(a.draft,!0),a.finalizing=!1),e=a.copy);var i=this.onAssign;return g(e,function u(s,c,f){if(c===f)throw Error("Immer forbids circular references");var l=!!a&&f===e;if(p(c)){if(c=n&&l&&!a.assigned[s]?o.finalize(c,t.concat(s),n,r):o.finalize(c),Array.isArray(f)||b(f,s)?f[s]=c:Object.defineProperty(f,s,{value:c}),l&&c===a.base[s])return}else{if(l&&x(c,a.base[s]))return;d(c)&&!Object.isFrozen(c)&&g(c,u)}l&&i&&i(a,s,c)}),e}}]),e}(),K=new X,Q=K.produce,G=K.setAutoFreeze.bind(K),Z=K.setUseProxies.bind(K),$=K.applyPatches.bind(K);t.default=Q}.call(this,n("8oxB"))},cFq4:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("o0o1")),a=r(n("iVxW")),i=r(n("lSNA")),u=r(n("MVZn")),s="@@DVA_LOADING/SHOW",c="@@DVA_LOADING/HIDE",f="loading";var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.namespace||f,n=e.only,r=void 0===n?[]:n,l=e.except,p=void 0===l?[]:l;if(r.length>0&&p.length>0)throw Error("It is ambiguous to configurate `only` and `except` items at the same time.");var d={global:!1,models:{},effects:{}};return{extraReducers:(0,i.default)({},t,function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0,r=n.type,o=n.payload||{},f=o.namespace,l=o.actionType;switch(r){case s:e=(0,u.default)({},t,{global:!0,models:(0,u.default)({},t.models,(0,i.default)({},f,!0)),effects:(0,u.default)({},t.effects,(0,i.default)({},l,!0))});break;case c:var p=(0,u.default)({},t.effects,(0,i.default)({},l,!1)),h=(0,u.default)({},t.models,(0,i.default)({},f,(0,a.default)(p).some(function(e){return e.split("/")[0]===f&&p[e]}))),v=(0,a.default)(h).some(function(e){return h[e]});e=(0,u.default)({},t,{global:v,models:h,effects:p});break;default:e=t}return e}),onEffect:function(e,t,n,a){var i=t.put,u=n.namespace;return 0===r.length&&0===p.length||r.length>0&&-1!==r.indexOf(a)||p.length>0&&-1===p.indexOf(a)?o.default.mark(function t(){var n=arguments;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i({type:s,payload:{namespace:u,actionType:a}});case 2:return t.next=4,e.apply(void 0,n);case 4:return t.next=6,i({type:c,payload:{namespace:u,actionType:a}});case 6:case"end":return t.stop()}},t,this)}):e}}};t.default=l},d04V:function(e,t,n){e.exports=n("0tVQ")},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(a)&&u.push("domain="+a),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},i5Zg:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{_handleActions:function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0,a=r.type,i=(0,o.default)(n,function(t){var n=e[a];if(n){var o=n(t,r);if(void 0!==o)return o}});return void 0===i?{}:i}}}};var o=r(n("V/h/"))},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),i=n("w0Vi"),u=n("OTTw"),s=n("LYNF");e.exports=function(e){return new Promise(function(t,c){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,c,r),p=null}},p.onerror=function(){c(s("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n("eqyj"),y=(e.withCredentials||u(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(m){if("json"!==e.responseType)throw m}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=n("x86X"),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function u(e){return null!==e&&"object"==typeof e}function s(e){return"[object Function]"===a.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:s,isStream:function(e){return u(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},yLu3:function(e,t,n){e.exports=n("VKFn")},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),i=n("JEQr");function u(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=u(i);s.Axios=a,s.create=function(e){return u(r.merge(i,e))},s.Cancel=n("endd"),s.CancelToken=n("jfS+"),s.isCancel=n("Lmem"),s.all=function(e){return Promise.all(e)},s.spread=n("DfZB"),e.exports=s,e.exports.default=s}},[["GcxT","5d41","9da1"]]]);