(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-91algo"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4b59":function(t,e,r){"use strict";var n=r("e355"),o=r.n(n);o.a},"4de0":function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"8dc1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.pay?r("div",[t._m(0),r("counter",{attrs:{time:t.time}})],1):r("div",[r("a-alert",{attrs:{message:t.errorMessage,type:"error"}}),r("a-button",{attrs:{type:"link",href:t.loginUrl}},[t._v("Github 登录")]),r("a-button",{attrs:{type:"link",href:"/91-intro"}},[t._v("活动介绍及报名方式")])],1)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("我们 "),r("span",{staticClass:"time"},[t._v("2021-06-01")]),t._v(" 见~")])}],i=(r("d3b7"),r("96cf"),r("1da1")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{"line-height":"1.5rem"},domProps:{innerHTML:t._s(t.countTxt)}})},c=[];r("99af"),r("a9e3");function s(t){var e,r,n,o;e=parseInt(t/86400);var i=t-24*e*60*60;r=parseInt(i/3600);var a=t-24*e*60*60-60*r*60;n=parseInt(a/60),o=parseInt(t-24*e*60*60-60*r*60-60*n),e<10&&(e="0"+e),r<10&&(r="0"+r),n<10&&(n="0"+n),o<10&&(o="0"+o);var c={day:e,hour:r,min:n,seconds:o};return c}var u={props:{time:{type:[Number]}},data:function(){return{times:{},countTxt:""}},methods:{mistiming:function(){var t=this,e=(this.time-(new Date).getTime())/1e3;this.times=s(e);var r='<span class="d">'.concat(this.times.day,'</span>天<span class="h">').concat(this.times.hour,'</span>时<span class="m">').concat(this.times.min,'</span>分<span class="s">').concat(this.times.seconds,"</span>秒");this.countTxt=r;var n=setInterval((function(){if(e>0){e--;var r=s(e),o='<span class="d">'.concat(r.day,'</span>天<span class="h">').concat(r.hour,'</span>时<span class="m">').concat(r.min,'</span>分<span class="s">').concat(r.seconds,"</span>秒");t.countTxt=o}else t.countTxt="活动已开始",clearInterval(n)}),1e3)}},mounted:function(){var t=this;this.$nextTick((function(){t.mistiming()}))}},f=u,h=(r("e141"),r("2877")),l=Object(h["a"])(f,a,c,!1,null,null,null),p=l.exports,d="c16b80e7b58a5a007157",v="https://a91algo.herokuapp.com",y=new Date;y.setMonth(5),y.setDate(1),y.setHours(0),y.setMinutes(0),y.setSeconds(0);var m={components:{counter:p},data:function(){return{time:y.getTime(),errorMessage:"很抱歉，当前页面需要付费且登录后才能访问~",logined:!1,pay:!1,loginUrl:"\n            https://github.com/login/oauth/authorize?client_id=".concat(d,"&redirect_uri=https://leetcode-solution.cn/91")}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$route.query.code){e.next=8;break}return e.next=3,fetch("".concat(v,"/api/v1/user?code=").concat(t.$route.query.code),{credentials:"include"}).then((function(t){return t.json()}));case 3:r=e.sent,n=r.pay,o=r.message,"Bad credentials"===o&&(t.errorMessage="登录已过期，请重新登录~"),t.pay=n;case 8:case"end":return e.stop()}}),e)})))()}},g=m,w=(r("4b59"),Object(h["a"])(g,n,o,!1,null,"2107ef89",null));e["default"]=w.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=L(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==r&&n.call(b,i)&&(g=b);var x=m.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(r,o,i,a){var c=u(t[r],t,o);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function o(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function L(t,e,r){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return O()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o){var i=new _(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),h=r("1dde"),l=r("b622"),p=r("2d00"),d=l("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",m=p>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=h("concat"),w=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)},b=!m||!g;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,o,i,a=c(this),h=f(a,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],w(i)){if(o=s(i.length),l+o>v)throw TypeError(y);for(r=0;r<o;r++,l++)r in i&&u(h,l,i[r])}else{if(l>=v)throw TypeError(y);u(h,l++,i)}return h.length=l,h}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("6eeb"),c=r("5135"),s=r("c6b6"),u=r("7156"),f=r("c04e"),h=r("d039"),l=r("7c73"),p=r("241c").f,d=r("06cf").f,v=r("9bf2").f,y=r("58a8").trim,m="Number",g=o[m],w=g.prototype,b=s(l(w))==m,x=function(t){var e,r,n,o,i,a,c,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=y(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+u}for(i=u.slice(2),a=i.length,c=0;c<a;c++)if(s=i.charCodeAt(c),s<48||s>o)return NaN;return parseInt(i,n)}return+u};if(i(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(b?h((function(){w.valueOf.call(r)})):s(r)!=m)?u(new g(x(e)),r,_):x(e)},L=n?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;L.length>I;I++)c(g,E=L[I])&&!c(_,E)&&v(_,E,d(g,E));_.prototype=w,w.constructor=_,a(o,m,_)}},e141:function(t,e,r){"use strict";var n=r("4de0"),o=r.n(n);o.a},e355:function(t,e,r){},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=view-91algo.4ce09a07.js.map