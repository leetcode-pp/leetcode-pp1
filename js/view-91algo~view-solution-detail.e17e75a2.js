(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-91algo~view-solution-detail"],{"06c5":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));e("fb6a"),e("d3b7"),e("b0c0"),e("a630"),e("3ca3");var r=e("6b75");function i(n,t){if(n){if("string"===typeof n)return Object(r["a"])(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r["a"])(n,t):void 0}}},1276:function(n,t,e){"use strict";var r=e("d784"),i=e("44e7"),a=e("825a"),o=e("1d80"),c=e("4840"),u=e("8aa5"),s=e("50c4"),l=e("577e"),f=e("14c3"),d=e("9263"),g=e("9f7f"),p=e("d039"),h=g.UNSUPPORTED_Y,v=[].push,b=Math.min,m=4294967295,A=!p((function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));r("split",(function(n,t,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(n,e){var r=l(o(this)),a=void 0===e?m:e>>>0;if(0===a)return[];if(void 0===n)return[r];if(!i(n))return t.call(r,n,a);var c,u,s,f=[],g=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),p=0,h=new RegExp(n.source,g+"g");while(c=d.call(h,r)){if(u=h.lastIndex,u>p&&(f.push(r.slice(p,c.index)),c.length>1&&c.index<r.length&&v.apply(f,c.slice(1)),s=c[0].length,p=u,f.length>=a))break;h.lastIndex===c.index&&h.lastIndex++}return p===r.length?!s&&h.test("")||f.push(""):f.push(r.slice(p)),f.length>a?f.slice(0,a):f}:"0".split(void 0,0).length?function(n,e){return void 0===n&&0===e?[]:t.call(this,n,e)}:t,[function(t,e){var i=o(this),a=void 0==t?void 0:t[n];return void 0!==a?a.call(t,i,e):r.call(l(i),t,e)},function(n,i){var o=a(this),d=l(n),g=e(r,o,d,i,r!==t);if(g.done)return g.value;var p=c(o,RegExp),v=o.unicode,A=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(h?"g":"y"),y=new p(h?"^(?:"+o.source+")":o,A),w=void 0===i?m:i>>>0;if(0===w)return[];if(0===d.length)return null===f(y,d)?[d]:[];var Q=0,j=0,N=[];while(j<d.length){y.lastIndex=h?0:j;var x,O=f(y,h?d.slice(j):d);if(null===O||(x=b(s(y.lastIndex+(h?j:0)),d.length))===Q)j=u(d,j,v);else{if(N.push(d.slice(Q,j)),N.length===w)return N;for(var S=1;S<=O.length-1;S++)if(N.push(O[S]),N.length===w)return N;j=Q=x}}return N.push(d.slice(Q)),N}]}),!A,h)},"25f0":function(n,t,e){"use strict";var r=e("6eeb"),i=e("825a"),a=e("577e"),o=e("d039"),c=e("ad6d"),u="toString",s=RegExp.prototype,l=s[u],f=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=u;(f||d)&&r(RegExp.prototype,u,(function(){var n=i(this),t=a(n.source),e=n.flags,r=a(void 0===e&&n instanceof RegExp&&!("flags"in s)?c.call(n):e);return"/"+t+"/"+r}),{unsafe:!0})},3991:function(n,t,e){"use strict";e.d(t,"e",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"i",(function(){return u})),e.d(t,"a",(function(){return s})),e.d(t,"f",(function(){return l})),e.d(t,"g",(function(){return f})),e.d(t,"h",(function(){return d}));var r=e("97af");function i(){return Object(r["a"])({url:"/api/v1/lectures/intro"})}function a(n){return Object(r["a"])({url:"/api/v1/daily-problem?date=".concat(n||"")})}function o(n){return Object(r["a"])({url:"/api/v1/daily-problem/solution?day=".concat(n)})}function c(){return Object(r["a"])({url:"/api/v1/lectures/basic"})}function u(){return Object(r["a"])({url:"/api/v1/lectures/topic"})}function s(){return Object(r["a"])({url:"/api/v1/lectures/advance"})}function l(n){return Object(r["a"])({url:"/api/v1/lectures/".concat(n)})}function f(){return Object(r["a"])({url:"/api/v1/my/solutions"})}function d(){return Object(r["a"])({url:"/api/v1/daily-problem/ranking"})}},"44e7":function(n,t,e){var r=e("861d"),i=e("c6b6"),a=e("b622"),o=a("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[o])?!!t:"RegExp"==i(n))}},"4df4":function(n,t,e){"use strict";var r=e("0366"),i=e("7b0b"),a=e("9bdd"),o=e("e95a"),c=e("50c4"),u=e("8418"),s=e("9a1f"),l=e("35a1");n.exports=function(n){var t,e,f,d,g,p,h=i(n),v="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,A=void 0!==m,y=l(h),w=0;if(A&&(m=r(m,b>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(t=c(h.length),e=new v(t);t>w;w++)p=A?m(h[w],w):h[w],u(e,w,p);else for(d=s(h,y),g=d.next,e=new v;!(f=g.call(d)).done;w++)p=A?a(d,m,[f.value,w],!0):f.value,u(e,w,p);return e.length=w,e}},5899:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(n,t,e){var r=e("1d80"),i=e("577e"),a=e("5899"),o="["+a+"]",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),s=function(n){return function(t){var e=i(r(t));return 1&n&&(e=e.replace(c,"")),2&n&&(e=e.replace(u,"")),e}};n.exports={start:s(1),end:s(2),trim:s(3)}},"5a34":function(n,t,e){var r=e("44e7");n.exports=function(n){if(r(n))throw TypeError("The method doesn't accept regular expressions");return n}},"5d2d":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return a}));var r=e("ade3");e("d3b7"),e("a4d3"),e("e01a"),e("99af"),e("3ca3"),e("ddb0"),e("d81d"),Object({NODE_ENV:"production",BASE_URL:"https://cdn.jsdelivr.net/gh/leetcode-pp/leetcode-pp@gh-pages/"}).rapidKey;function i(n){return new Promise((function(t,e){try{window.chrome&&window.chrome.storage?window.chrome.storage.get([n],t):localStorage?t({result:{value:JSON.parse(localStorage.getItem(n))}}):e("未知错误")}catch(r){e(r)}}))}function a(n,t){return new Promise((function(e,i){try{window.chrome&&window.chrome.storage?window.chrome.storage.sync.set(Object(r["a"])({},n,t),e):localStorage?(localStorage.setItem(n,JSON.stringify(t)),e()):i("您可能禁用了存储功能~")}catch(a){i("当前没有存储权限，或者存储已达到上限~")}}))}},"6b75":function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},7156:function(n,t,e){var r=e("861d"),i=e("d2bb");n.exports=function(n,t,e){var a,o;return i&&"function"==typeof(a=t.constructor)&&a!==e&&r(o=a.prototype)&&o!==e.prototype&&i(n,o),n}},"97af":function(n,t,e){"use strict";e("3b18");var r=e("f64c"),i=e("5530"),a=(e("99af"),e("bc3a")),o=e.n(a),c=e("f121"),u="https://".concat(c["hostname"]),s={};t["a"]=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="".concat(u).concat(t.url),a=!t.method||"GET"===t.method.toUpperCase(),c="";if(a&&(c="".concat(e,"-").concat(JSON.stringify(t.params)),c in s))return s[c];var l=t.headers||{},f=null;try{f=JSON.parse(window.localStorage.getItem("token"))}catch(g){}f&&(new Date).getTime()>=f.expireAt&&window.localStorage.removeItem("token");var d=o()(Object(i["a"])(Object(i["a"])({},t),{},{headers:Object(i["a"])(Object(i["a"])({},l),{},{token:(null===(n=f)||void 0===n?void 0:n.value)||"empty"}),withCredentials:!0,url:e})).then((function(n){return n.data})).then((function(n){if(n.success)return n.data;throw n})).catch((function(n){throw r["a"].error(n.message||"系统开小差~"),n}));return a&&(s[c]=d),d}},"9bdd":function(n,t,e){var r=e("825a"),i=e("2a62");n.exports=function(n,t,e,a){try{return a?t(r(e)[0],e[1]):t(e)}catch(o){i(n,"throw",o)}}},a630:function(n,t,e){var r=e("23e7"),i=e("4df4"),a=e("1c7e"),o=!a((function(n){Array.from(n)}));r({target:"Array",stat:!0,forced:o},{from:i})},a9e3:function(n,t,e){"use strict";var r=e("83ab"),i=e("da84"),a=e("94ca"),o=e("6eeb"),c=e("5135"),u=e("c6b6"),s=e("7156"),l=e("d9b5"),f=e("c04e"),d=e("d039"),g=e("7c73"),p=e("241c").f,h=e("06cf").f,v=e("9bf2").f,b=e("58a8").trim,m="Number",A=i[m],y=A.prototype,w=u(g(y))==m,Q=function(n){if(l(n))throw TypeError("Cannot convert a Symbol value to a number");var t,e,r,i,a,o,c,u,s=f(n,"number");if("string"==typeof s&&s.length>2)if(s=b(s),t=s.charCodeAt(0),43===t||45===t){if(e=s.charCodeAt(2),88===e||120===e)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+s}for(a=s.slice(2),o=a.length,c=0;c<o;c++)if(u=a.charCodeAt(c),u<48||u>i)return NaN;return parseInt(a,r)}return+s};if(a(m,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var j,N=function(n){var t=arguments.length<1?0:n,e=this;return e instanceof N&&(w?d((function(){y.valueOf.call(e)})):u(e)!=m)?s(new A(Q(t)),e,N):Q(t)},x=r?p(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;x.length>O;O++)c(A,j=x[O])&&!c(N,j)&&v(N,j,h(A,j));N.prototype=y,y.constructor=N,o(i,m,N)}},ab13:function(n,t,e){var r=e("b622"),i=r("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(e){try{return t[i]=!1,"/./"[n](t)}catch(r){}}return!1}},b0c0:function(n,t,e){var r=e("83ab"),i=e("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in a)&&i(a,u,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(n){return""}}})},caad:function(n,t,e){"use strict";var r=e("23e7"),i=e("4d64").includes,a=e("44d2");r({target:"Array",proto:!0},{includes:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d1ef:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o}));var r=e("5530"),i=e("97af");function a(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])({url:"/api/v1/github/content",params:Object(r["a"])({url:n},t.params)})}function o(){return Object(i["a"])({url:"/api/v1/github/comment-app"})}},d28b:function(n,t,e){var r=e("746f");r("iterator")},d81d:function(n,t,e){"use strict";var r=e("23e7"),i=e("b727").map,a=e("1dde"),o=a("map");r({target:"Array",proto:!0,forced:!o},{map:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}})},e01a:function(n,t,e){"use strict";var r=e("23e7"),i=e("83ab"),a=e("da84"),o=e("5135"),c=e("861d"),u=e("9bf2").f,s=e("e893"),l=a.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var n=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new l(n):void 0===n?l():l(n);return""===n&&(f[t]=!0),t};s(d,l);var g=d.prototype=l.prototype;g.constructor=d;var p=g.toString,h="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;u(g,"description",{configurable:!0,get:function(){var n=c(this)?this.valueOf():this,t=p.call(n);if(o(f,n))return"";var e=h?t.slice(7,-1):t.replace(v,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:d})}},f121:function(n,t){var e=new Date("2021-09-10T00:00:00.000+08:00"),r=["algo91-4.herokuapp.com","algo91.herokuapp.com"],i=r[(new Date).getDate()%r.length];n.exports={startTime:e.getTime(),clientId:"c16b80e7b58a5a007157",originalHostname:"leetcode-solution.cn",hostname:i,hostnamePool:r}},f14a:function(n,t){n.exports=[{id:"6",title:"空识",tags:["谷歌","全栈"],description:"五天100+题，怒进谷歌！",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gur2g62fi6j60it0kawgl02.jpg",body:"\n## 背景\n\n空识拿到了**Google的 offer**，和狗头做起了同事。\n\n他一个礼拜刷了100多道题，然后面试 Google 终于通过了。这个经历还是蛮具有代表性的，分享给正在准备面试的你。\n\n以下 Q 为 lucifer，A 为 空识。\n\n![](https://tva1.sinaimg.cn/large/008i3skNly1gur2g62fi6j60it0kawgl02.jpg)\n\n## 采访\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n\nA: 大概是十年前读本科的时候……但是没有系统性的学习，只了解过一些特殊用途的算法（X算法，RSA算法,...）打算转码的时候才开始重头系统性的学习。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA: Github上的题解->西法的公众号，在公众号里了解到的。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA: 我变秃了，也变强了。从一开始看到two sum觉得精妙，周赛做不出easy到现在能 **稳定写2-3题**。一开始oa撞原题都写不好到现在不少oa直接做也能拿到面试机会了。\n\n尤其印象深刻的是 **一开始自己刷题，easy可能都要磨蹭个2-3小时研究相关的topic搞明白题解，最后一周刚好要准备狗厂面试，五天就刷了100+题……** 真的变秃了。\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 有呀，正如六祖慧能在《坛经》里说到的，“迷闻经累劫，悟则刹那间”，在各种重复思考卡壳之后再去看题解的点悟往往会有那种开了一扇门的感觉，然后就悟了哈哈。\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA: 其实是数学法，因为本身是学数学相关方向的，以前经常被同学分享这种很巧的题，所以练习得比较多。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 一定一定一定一定要坚持不要放弃，每天再难至少要刷1～3题（具体看是否脱产），每天发掘一个小技巧，91天就能学会很多很多东西。而且尤其是一开始，easy/medium的题都刷的很艰难需要很多时间，这个时候很容易会怀疑自己的能力/天赋，但是千万不要绝望不要放弃，因为绝望/放弃其实没有任何作用，咬紧牙关坚持下去是最重要的，超越了觉悟，就能看到希望。\n\n另外还有就是万事从简，我最早转码纠结于以后到底该做什么纠结了很久，其实这个回头看，其实都要学的，直接捡一个比较主流找得到不少题解的语言开始最重要。\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 其实我觉得挺好的……感觉可能硬性要求开始的时候多打点卡比较好……？因为感觉一开始人比较容易有惰性，不想走出舒适区，可能需要一点push。\n\nQ: 有没有什么面试和刷题技巧或建议给大家\n\nA: 我觉得很重要的几个点：\n\n1. 力扣官方有很好的 explore 卡片，那个可以很好的作为基础篇的补充，针对性的刷题可以帮你形成你自己的理解，有理解了刷题就快了。\n\n2. 力扣的公司tag是可以按照频率选题的，刷高频题通常能够给你更直观的一个关于“这个公司到底是在考什么”的体验。\n\n3. **打周赛，其实多少分不重要，能不能涨分也不重要，重要的是思路。** 所以你可以随便打开任何一期周赛，然后用力扣网站的模拟面试功能打。然后设立个目标，目标应该是差不多一个小时做二望三。\n\n4. Think out loud。**面试的时候沟通很重要，所以一定要学会自言自语，写完主动手动跑一遍，想一次edge case，然后算一遍复杂度，可以的话甚至可以想一想这个题可以怎么改编怎么followup。**\n\n> 注：北美的小伙伴我推荐用interviewing.io，我觉得练习很有效……\n\n5. 一定一定一定一定要自信，振作起来，生活不容易，你是最棒的。    \n\n## lucifer 总结\n\n空识最后给的五个建议都非常的实用，手动点赞。另外空识的建议已经收到了。我们后期会加大 **push** 力度，努力营造一个积极向上的刷题氛围，fighting！\n\n此外，空识提到了很多次打模拟面试或者周赛。其实我也建议大家过一遍 tag 后就先打 20 次周赛，做几道题都不重要，就是锻炼自己的做题能力以及给定压力下的思考反应等。\n"},{id:"5",title:"cabbage",tags:["微软","前端"],description:"自称是菜狗的微软大佬",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gsvbupuya4j30ej0ctaar.jpg",body:"\n\n## 背景\n\n最近得知 cabbage 拿到了**微软的 offer**，并在准备拿其他**更大**公司的 offer。就迫不及待地联系了他，希望他本人可以接受采访。于是这篇采访稿就和大家见面了。\n\ncabbage 是一个做事情非常认真细致的人，对待工作一丝不苟，基本上事情交给他你就可以放心那种，这样的人谁不喜欢？我本人非常看好他，一定可以进更好的公司。\n\n以下 Q 为 lucifer，A 为 cabbage。\n\n![](https://tva1.sinaimg.cn/large/008i3skNly1gsvbupuya4j30ej0ctaar.jpg)\n\n## 采访\n\n- Q: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n- A: 20 年准备跳大厂的时候才开始的，半路出家的前端开发，以前根本都用不到算法所以也就没去学过。\n- Q: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n- A: 通过 GitHub 上的 Lucifer 的算法 repo 关注的公众号，然后通过公众号了解到的。\n- Q: 91 天有给你带来了什么样的变化么？\n- A: 从基本啥都不会到对基本的数据结构有一点了解，以前只会做 easy 的题，现在有部分 medium 的题也能做出来了，主要是学会了套模板。\n- Q: 学习算法过程中有“顿悟”的时刻么？\n- A: 有吧，就突然有一天发现看到新题了会不自觉地去拿以前做题的套路去往上套，然后发现还真能用。\n- Q: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n- A: 说不上擅长，就是套模板的题我都还挺喜欢的，比如说找排列组合的上来就先写个 dfs，找满足条件的 substring 就先上一个 sliding window，大部分的时候套上模板就能解决了。\n- Q: 有没有什么想和刚入坑算法的同学分享的？\n- A: 模板特别有用，不管会不会先背下来，背的同时就是一个理解的过程，91 算法的题解就可以帮你加深记忆也可以帮你更好的理解。另外刷题可以一次性把一个类型的都刷完，比如可以跟着 91 的分类刷，会更有效率。\n- Q: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n- A: 同类型的题可以再多加几道加深记忆，容易到困难的过渡不知道还能不能再 smooth 一点，没有 CS 背景的对于有些类型的题理解起来不容易，可能需要更多的 background，比如 DP 和 back track 这样的。（因为一直在做前端开发的缘故，思维总是习惯性的线性思维，不容易绕过来）\n- Q: 在你学习算法的过程中，对你帮助最大的学习资料是什么？\n- A: LeetCode 的题解讨论区以及油管的一些视频。\n\n> lucifer 注：有的 leetcode 题解和油管视频真的做的不错，我们也在《91 天学算法》的讲义中给大家进行了推荐。\n\n- Q: 愿意把 91 天分享给你的朋友么？\n- A: 愿意。\n\n## lucifer 点评\n\n收到 cabbage 的建议。 下一期《91 天学算法》西法打算做几点改变。\n\n1. 目前正在和力扣官方合作，希望可以将《91 天学算法》整合力扣的**学习计划**和**LeetBook**。这样大家学习起来更加无缝，效率更高。届时也会有专门的交流群。\n2. 增加**图**， **模拟与枚举** 的题目，以前这部分是自习的\n3. 增加**排序** 章节\n4. 前面增加了几道题目，相应其他章节需要删除题目，我打算将高频面试题删掉。\n5. 部分题解不够完善，再次打磨。\n6. 部分难度梯度跨度较大，增加一点缓冲题目或者对跨度较大的进行**大篇幅**讲解，尽量让大家不掉队。\n    \n\n    "},{id:"4",title:"小漾",tags:["转码","女神","前端"],description:"只要参加过 91 天学算法的人都会知道的一个女神级人物，如今也是第四届 《91 天学算法》的讲师",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gpy7a1u5rtj30cs0csglt.jpg",body:'\n- 时间：2021-05-21\n- 被采访人：小漾\n    \n# 转行前端，成为无数刷题人的榜样。她是怎么做到的？ \n\n榜样的力量是无穷的，她就是无数 《91 天学算法》学员的榜样！\n    \n<img src="https://tva1.sinaimg.cn/large/008i3skNly1gqq1gh9f2yj30u0140tei.jpg" width="400">\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n\nA: 最初应该是刚开始学 JS 不久，那时候学了一点编程知识就喜欢在 **codewars** 上面玩一些入门题，也是这种解题的快感(菜鸟自嗨)让我继续学习编程，最终走上了前端不归路。后来丢下过一段时间，直到毕业工作大半年后才又开始断断续续在力扣上做一些题，不过那时并没有什么系统的学习计划。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA: 从第一期就开始白嫖的老学员了，常年混迹在 Lucifer 前端群的我当然是第一时间就收到风声啦。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA: 让我的算法知识面**横向扩展**了一点。以前做题都是凭兴趣瞎做，跟着 91 练习之后，常见的算法专题都有机会接触到，虽然由于时间和个人精力的原因没有学得很深入(惭愧)，但起码对算法学习涉及哪些内容有了个大概的认识，应该算拿到了算法学习的入门券吧。\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 以前看 Lucifer 题解的时候经常会有“顿悟”的时候啊，他的题解和图解是我看过的最通俗易懂的了，虽然有时候还是不够小白友好，写得有点跳跃，可能这就是大佬和小白的代沟吧。后来我自己写题解的时候喜欢画图，也是因为 Lucifer 的影响呀。\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA: 个人还不认为自己有擅长的算法，有些算法会比较熟悉，所以简单题容易有思路，但没有透彻到可以把这类题型身上厚厚的伪装衣服脱下来，这方面 Lucifer 应该是专家吧，多看他的专题就好了。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 一个是做题的时候，**没有思路就不要死纠结啦，去看题解，去看相关的前置知识。学习是做题的前提呀，不要一上来就觉得简单题都不会做我是不是废了。**年轻人，这种想法会影响你拔剑的速度的呀。另一个是要学习分析算法的复杂度，有时候看力扣上的题解，基本都没有提到复杂度的，只有力扣官方和 Lucifer 的题解里都会分析。复杂度是衡量算法好坏的一个标准，学会分析复杂度就不会纠结为什么同样的代码在力扣上的提交击败率不一样啦。\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 对于小白同学来说，91 的进度可能会稍稍有点快吧，考虑一期分成入门和进阶两个班不？另外还有一个想法，在官网上加一个 feature，让 **学员可以在官网上预约 Q&A meeting，加上共享白板提供一个更好的答疑体验。** 不过，这个得是另外的价钱吧，嘿嘿。\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA: 我也想分享，但是大家都知道了。\n\nQ: 目前的 offer 情况？\n\nA: 今年1月份的时候跳槽了，那时就面试了两家公司，一个是现在的公司，另一个是阿里。拿了现在公司的 offer 之后就放弃了阿里的后续面试，没有像其他 91 大佬一样斩获各种大厂 offer，剧情是不是有点崩坏了。不过现在的公司虽然是小公司，当时面试的时候还被一个常春藤大佬面了一个小时算法，如果没有经历过 91，我是万万不可能撑住的，所以，**LONG LIVE 91 ALGORITHEM**.    \n    \n## lucifer 总结\n\n这个经历太让人感动了。 虽然不是科班，但是理解能力和学习能力都非常优秀，并且还能将知识已通俗易懂的方式讲出来，这非常不容易。\n\n最后小漾提的这个功能很有意思，lucifer 也会认真考虑的 ^_^。\n\n**LONG LIVE 91 ALGORITHEM**.\n\n'},{id:"1",title:"kieda-tamashi",tags:["美团","携程","字节","硕士","后端"],description:"无ACM经验，今年2月底开始刷Leetcode准备面试。",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gq8r3su6wqj30og0o879n.jpg",body:'\n- 时间：2021-05-05\n- 被采访人：kieda-tamashi\n\n# 无ACM经验，今年2月底开始刷Leetcode准备面试。\n\n\n<img src="https://tva1.sinaimg.cn/large/008i3skNly1gq8q986d1pj30u0140773.jpg" width="400">\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n  \nA:现在水硕应届。课程的话，大二学数据结构，大三学算法。无ACM经验，今年2月底开始刷Leetcode准备面试。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA:今年2月底，好像是搜索啥搜到的，看了讲义感觉不错。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA:至少看到题有感觉了，虽然找工作很晚没进AT，但至少没失业\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 二分，边界弄得很清楚了。\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA:没什么擅长的，但比较喜欢做没有递归、stack相关的题目，往往不那么抽象，可以画图。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 早点开始，坚持每日一题，就算是抄的。\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 我觉得Github打卡有点太不好使了，也不怎么push和有可视激励，leetcode打卡还有积分显示，成长感明显，这边啥都没。\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA: 已经分享。 \n\n## lucifer 总结\n\n他的 B 站账号是： https://space.bilibili.com/1836395 ，感兴趣的小伙伴可以关注一波啦~\n      '},{id:"2",description:"一个很可爱，元气满满的转码少女~",tags:["谷歌","商科转码","全栈"],title:"易潇",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gq9qpzrs99j30u00u4q4o.jpg",body:'\n- 时间：2021-05-07\n- 被采访人：易潇\n    \n# 努力上岸的元气少女\n\n力扣加加，一个努力做西湖区最好的算法题解的团队。**91 天学算法**是力扣加加举办的一个算法训练活动，通过良好的学习计划 和 91 天的集中学习，帮助大家摆脱困境，征服算法。\n\n现在 《91 天学算法》已经举办了四期了，[第四期](https://mp.weixin.qq.com/s?__biz=MzI4MzUxNjI3OA==&mid=2247488668&idx=1&sn=001d53b788fb21280f9e45cadb7b4fae&chksm=eb88d885dcff5193f17725eb4b6b56cbbe406d8426bdc0dd5512253e2a0ef525358f94d4ab5a&token=2115509684&lang=zh_CN#rd "91 天学算法第四期")的活动时间是 **2021-05-10 到 2021-08-08**。\n\n每一期都有很多优秀学员，我想将这些人的学习经验分享给大家，帮助大家少走弯路。由于我开辟了这个 **91 天学算法优秀学员专访** 活动。\n\n这次，我们邀请到了远在美国的转码少女 - 易潇，一个元气满满的活力女孩。来看看她是如何学习的吧！\n\n<img src="https://tva1.sinaimg.cn/large/008i3skNly1gq9qojha3ij30u00u077t.jpg" width="400">\n\n## 采访\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n\nA: 从很久之前就听说过数据结果与算法，但正式接触是打算转码的时候开始的。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA: 我是从第二期就开始接触91的，大概是关注公众号的时候关注到的。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA: 91让我从觉得用哈希表O(N)写 two sum很惊奇到了现在可以迷迷糊糊的状态下手写完堆（狗头\n\n最近因为刷了91，在做几个公司笔试初试(online coding challenge)的时候**感觉很简单**，也对自己的即将到来的面试更加有自信了~\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 经常顿悟 -- **顿悟源自于重复和每次重复带来的更深层次的理解。**\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA: 比较擅长的算法是看小漾怎么写的，然后默默的取长补短（就是都抄一遍的意思）\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 我觉得刚入坑的同学们一定要学会处理自己的 “迷茫” 以及这种情绪带来的 “我不想做，这太难了”。我觉得在学习的过程中，只要能在自己感到迷茫的时候坚持再坚持，总会有那么一个 “顿悟”的时刻，然后就会觉得**自己的坚持是值得的**。\n我在正式学习编程之前的两三年里，也经常想过转码，但每次都会因为 “选什么语言” 或者 “初始化环境设定” 太难了等这种原因放弃。**现在其实回头看，这些问题其实都很简单。**\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA:我希望 91 有更多的个人答题跟踪和一起打卡的人的榜单，这样大家可以相互鼓（shi）励（ya）\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA:当然愿意啦！我觉得新手入门的时候最难的就是选择 “学什么” ， 而  91 恰好解决了这个问题。加入了 91 之后，只要根据  91 已经制定好的计划每天努力就可以了。而且问题是循序渐进的，对新手非常友好~ 再加上有这么多同学和超级棒的讲师们一起，我觉得 91 是最棒的刷题计划啦！\n \n\n\n## lucifer 总结\n\n学习东西是需要循序渐进的。在这个循序渐进的路上会一次次地“顿悟”。如果你有一个良好的学习习惯和学习计划，那么我相信你效率一定很高，那么答案你理想的高度也是时间的问题罢了。而如果你缺乏这样的学习习惯，不知道怎么去学习算法，可以试试 91 天学算法哦，活动介绍在文末的链接中，也可以直接在公众号力扣加加中回复 91 获取。\n'},{id:"3",description:"擅长图解的小哥哥",tags:["明星学员","图解算法"],title:"蘑菇沏茶",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gqcaej3g4bj30oi0okwjv.jpg",body:"\n- 时间：2021-05-09\n- 被采访人：蘑菇沏茶\n    \n# 擅长图解的小哥哥\n\n## lucifer 序\n\n蘑菇沏茶在群里很活跃，也经常在仓库中看到他的打卡，他的题解都很认真，质量很高，也入选了很多次的精选题解，这样慢慢就对他有了印象。 后来我邀请他给我投稿，内容非常不错，大家可以看下，感受一下作者的算法能力和文笔。\n\n[图解数据结构](https://mp.weixin.qq.com/s/IdzUT8QvaWNSBca944FR0g)\n\n他本人学习算法时间不算长，也经历了很多人经历过的开始阶段，因此他的经历对很多人来说，还是非常有参考价值的。\n\n## 正文\n\n![](https://tva1.sinaimg.cn/large/008i3skNly1gqcatezvadj30hs0hsq6m.jpg)\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n\nA: 最开始接触算法的话，是大二的时候。那时候只是把它当做一门课程，抱着及格万岁的心态，并没有觉得有多重要，实际上在日常开发中，也没有使用到算法相关，也就更别提意识到算法的一个重要性了。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA: 接触到91天，还要从找实习说起，因为研究生期间主要是做NLP的，当时是在 **女朋友** 的催促下，随便找了一份算法的实习，实习之后发现和我想象中的差距非常大，也不是自己喜欢的。在某乎上看到许多大佬的求职之路，都提到了算法的重要性，也都提到leetcode，于是开始效仿大佬开始刷leetcode，但是刚开始的时候效率非常低，力扣有接近2000道题目，不知道从何刷起，非常迷茫，说来也巧，在某一天阅读社区题解的时候，发现了西法老师的一篇题解，这一看，简直不要太清晰明了，代码简洁，思路清晰，立马就悟了，后面关注了西法老师的“力扣加加”公众号，从里面得知了91天这一活动，当时是第二期。加入的时候，群里已经有200人左右了，后面一直有人加入，慢慢到了500人。在西法老师的系统讲解和整体氛围下，也慢慢开始喜欢上了算法，在刷算法的过程中，也是意识到算法的重要性，在这里必须感谢西法老师，开发并不只是简单地crud，比如在搜索的时候，我们该选取什么样的数据结构，又要以一个什么样的方法去进行搜索，别看两个算法在同一个例子中时间相差不多，但是**一旦数据范围变大，一个好的算法和数据结构对时间的提升是非常巨大的。**\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA: 91天学算法给我带来的变化，首先就是对算法有了系统的认识，以前在课本上只学习了动态规划、贪心、递归、分治等，而且老师也只是简单讲解，没有深入，西法给我展示了算法的魅力。然后就是，我跟了91天两期，从第一期对算法有了系统认识，到第二期有了深一层次的认识，如果说刚开始的时候是照葫芦画瓢，那现在就是开始在照瓢画葫芦了，对一道题，除了把它解出来之外，会主动深入思考这里面包含的知识点，也会和其他的解法进行比较，去理解别人的做题时的思路，而不再是看懂。最后就是说一个最明显的提升，**跟完一期多的时候，参加了一些大厂的笔试，虽然题目没有原题，但考察的内容基本都有在91天中提到，所以学完91天，算是拿到了大厂的入场券**。以后只要91天还办下去，我就会一直跟下去，在这里，因为，现在已经不只是为了找到一份好的实习或者工作而去学算法，是真的已经喜欢上了算法，喜欢上解出一道题时获得的喜悦，在91天中，有许多和我这样爱好算法的同学，大家在刷题的路上一期成长，真的是一件非常快乐的事情。有一段时间无比期待每日一题的到来，**十二点准时侯在电脑前。**\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 要说顿悟的话，首先有一个就是比较搞笑的，刚开始刷算法，把提交后的运行时间当做评判标准，觉得时间快的就是好算法，后来西法的一句话让我印象非常深刻，就是衡量一个算法的好坏的标准是时间复杂度与空间复杂度，因为每次提交的时候，可能会由于网络波动、测试案例等因素导致每次时间不一样。再说其他的，比如做二分类题目的时候，除了对输入进行二分，还可以对结果进行二分，再比如再做树专题的时候，搜索无非就DFS和BFS，然后再决定是否带信息进行遍历，这些在西法的力扣加加公众号的总结中都可以看到；还有一个题没有思路的时候，可以根据题目给的关键字和数据范围去。其实顿悟这个词本来就很玄，我更愿意把顿悟理解为量变引起质变这一过程，题目做多了，很多方法自然而然就悟了，在做动态规划的时候，听到西法的一句 **“我做题的时候都是只考虑前一个状态和现在的状态”，原话记不太清了，差不多就是这个意思，看到这句话，就突然会悟了，这不就是满足动态规划的最优子结构性质嘛，这种时刻还有一些，基本上大多是已经有了一个差不多的理解，然后听到一句话或者看到一句话，然后就明白了。**\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA: 比较擅长的话，应该还没到擅长的地步吧，在西法老师面前不敢造次，但是**对常用的算法还算熟悉了**。比如二分算法，要么是对输入进行二分，要么是对结果进行二分，然后对二维数组进行二分的话，一般都是从斜对角线的两个顶点作为起始端点，还有一类题目就是使用二分保持数据的有序性；比如单调栈或者单调队列，存储的不仅仅可以是元素，也可以是元素对应的索引；对于回溯类题目，最重要的就是确定剪枝条件了，‘’毕竟只要剪枝剪得好，完美AC少不了‘’，主要用来解决一些排列组合问题，比如题目明确要求需要返回所有的可能；对于搜索类，常见的就是DFS和BFS，最重要的一点是不存在环路，或者有提前终止的条件，这类题目一般都是树或者图，当然有的时候，不一定会告诉你这是一棵树或者一张图，这种时候就需要自己体会题意了；对于存在环路的问题，一般会用到并查集，并查集要注意的只有两点，一个是按秩合并，一个是路径压缩；对于双串类问题，十有八九可以使用动态规划去求解；对于求解topK类问题，使用堆，或者在每个时刻，必须取最小或者最大，而这个最小最大在每个时刻会发生改变，那么也可以使用堆。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 无它，唯手熟尔。对于学习算法，没有太多的技巧，做得多了，见的多了，自然而然就会了。我刚开始做题的时候会画图帮助理解，但是现在很少画了，**因为熟了，图在心中。**\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 91天是一个很好地活动，物超所值，一杯喜茶就能得到大厂的入门卷，爱了爱了啊。就对于我个人而言，我希望看到一些**算法在实际场景的应用。**\n\n> 西法收到了 ^_^\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA: 当然愿意，在第三期的时候，拉动我的室友加入到91天学算法活动中。\n    \n    \n    "}]},fb6a:function(n,t,e){"use strict";var r=e("23e7"),i=e("861d"),a=e("e8b5"),o=e("23cb"),c=e("50c4"),u=e("fc6a"),s=e("8418"),l=e("b622"),f=e("1dde"),d=f("slice"),g=l("species"),p=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(n,t){var e,r,l,f=u(this),d=c(f.length),v=o(n,d),b=o(void 0===t?d:t,d);if(a(f)&&(e=f.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?i(e)&&(e=e[g],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return p.call(f,v,b);for(r=new(void 0===e?Array:e)(h(b-v,0)),l=0;v<b;v++,l++)v in f&&s(r,l,f[v]);return r.length=l,r}})}}]);
//# sourceMappingURL=view-91algo~view-solution-detail.e17e75a2.js.map