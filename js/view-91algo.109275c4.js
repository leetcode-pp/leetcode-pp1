(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-91algo"],{3991:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return s}));var r=e("97af");function n(){return Object(r["a"])({url:"/api/v1/lectures/basic"})}function s(t){return Object(r["a"])({url:"/api/v1/lectures/basic/".concat(t)})}},"4de0":function(t,a,e){},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,e){var r=e("1d80"),n=e("5899"),s="["+n+"]",i=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(a){var e=String(r(a));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,a,e){var r=e("861d"),n=e("d2bb");t.exports=function(t,a,e){var s,i;return n&&"function"==typeof(s=a.constructor)&&s!==e&&r(i=s.prototype)&&i!==e.prototype&&n(t,i),t}},"7a29":function(t,a,e){"use strict";var r=e("8104"),n=e.n(r);n.a},8104:function(t,a,e){},"8b29":function(t,a,e){},"8dc1":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.started?t._e():e("div",[t._m(0),e("counter",{attrs:{time:t.time}})],1),t.pay?e("div",{staticClass:"hello"},[e("a-avatar",{attrs:{size:64,src:t.avatar}}),e("div",[t._v(" 欢迎回来，"+t._s(t.name)+" ~ 今天有没有比昨天进步一点点呢？ "),e("a-button",{attrs:{type:"link"},on:{click:t.handlLogoutClick}},[t._v("退出登录")])],1)],1):e("div",[e("a-alert",{attrs:{message:t.errorMessage,type:"error"}}),t.name?t._e():e("a-button",{attrs:{type:"link",href:t.loginUrl}},[t._v("Github 登录")]),e("a-button",{attrs:{type:"link",href:"/91-intro"}},[t._v("活动介绍及报名方式")])],1),e("div",[e("a-tabs",{model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("a-tab-pane",{key:"teachers",attrs:{tab:"讲师介绍"}},[e("a-list",{staticClass:"teachers",attrs:{"item-layout":"horizontal","data-source":t.teachers},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[e("a-list-item-meta",{attrs:{description:a.description||"这个人太懒了，什么也没有写"}},[e("a",{attrs:{slot:"title",href:a.homepage},slot:"title"},[t._v(t._s(a.title))]),e("a-avatar",{attrs:{slot:"avatar",src:a.avatar},slot:"avatar"})],1),a.homepage?e("a-button",{staticClass:"homepage",attrs:{type:"link",href:a.homepage,target:"_blank"}},[t._v("关注 ta")]):e("div",{staticClass:"homepage"},[t._v("连主页都没有呢~")])],1)}}])})],1),e("a-tab-pane",{key:"jy1",attrs:{tab:"讲义（基础篇）",disabled:!t.pay}},[e("card",{attrs:{cards:t.basicLecturs}})],1),e("a-tab-pane",{key:"jy2",attrs:{tab:"讲义（专题篇）",disabled:""}},[t._v(" 尚未开启 ")]),e("a-tab-pane",{key:"jy3",attrs:{tab:"讲义（进阶篇）",disabled:""}},[t._v(" 尚未开启 ")]),e("a-tab-pane",{key:"sign",attrs:{tab:"打卡",disabled:!t.pay}},[t._v(" 本期暂时不支持在此打卡，还请大家去 "),e("a-button",{attrs:{type:"link",href:"https://github.com/leetcode-pp/91alg-3/issues",target:"_blank"}},[t._v("仓库")]),t._v(" 找到当天的题目进行打卡~ ")],1)],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v("我们 "),e("span",{staticClass:"time"},[t._v("2021-06-01")]),t._v(" 见~")])}],s=(e("d81d"),e("b0c0"),e("5530")),i=(e("96cf"),e("1da1")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticStyle:{"line-height":"1.5rem"},domProps:{innerHTML:t._s(t.countTxt)}})},o=[];e("99af"),e("a9e3");function u(t){var a,e,r,n;a=parseInt(t/86400);var s=t-24*a*60*60;e=parseInt(s/3600);var i=t-24*a*60*60-60*e*60;r=parseInt(i/60),n=parseInt(t-24*a*60*60-60*e*60-60*r),a<10&&(a="0"+a),e<10&&(e="0"+e),r<10&&(r="0"+r),n<10&&(n="0"+n);var c={day:a,hour:e,min:r,seconds:n};return c}var l={props:{time:{type:[Number]}},data:function(){return{times:{},countTxt:""}},methods:{mistiming:function(){var t=this,a=(this.time-(new Date).getTime())/1e3;this.times=u(a);var e='活动将于 <span class="d">'.concat(this.times.day,'</span>天<span class="h">').concat(this.times.hour,'</span>时<span class="m">').concat(this.times.min,'</span>分<span class="s">').concat(this.times.seconds,"</span>秒后开启");this.countTxt=e;var r=setInterval((function(){if(a>0){a--;var e=u(a),n='活动将于 <span class="d">'.concat(e.day,'</span>天<span class="h">').concat(e.hour,'</span>时<span class="m">').concat(e.min,'</span>分<span class="s">').concat(e.seconds,"</span>秒后开启");t.countTxt=n}else t.countTxt="活动已开始",clearInterval(r)}),1e3)}},mounted:function(){var t=this;this.$nextTick((function(){t.mistiming()}))}},p=l,d=(e("e141"),e("2877")),f=Object(d["a"])(p,c,o,!1,null,null,null),v=f.exports,h=e("97af"),m=e("ae8d"),g=e("3991");function b(){return Object(h["a"])({url:"/api/v1/user/logout"})}var y="c16b80e7b58a5a007157",_=new Date;_.setMonth(5),_.setDate(1),_.setHours(0),_.setMinutes(0),_.setSeconds(0);var k={components:{counter:v,card:m["a"]},data:function(){return{name:"",avatar:"",basicLecturs:[],teachers:[{title:"西法",homepage:"https://github.com/azl397985856",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gpy3e38277j30cs0csjso.jpg",description:"Github 40K star 的架构师，同时也是刷题插件 leetcode-cheatsheet 作者"},{title:"宝石叔叔",description:"我也不知道，代码都是百度抄来的，复制过来怎么会有错误",homepage:"https://github.com/unclegem",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gpy65g2jf2j316g0u0dz2.jpg"},{title:"表哥",homepage:"https://feiker.xyz",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gpy68il2fmj30rw0ru0t8.jpg"},{title:"漾哥",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gpy7a1u5rtj30cs0csglt.jpg",homepage:"https://github.com/suukii"},{title:"三天",description:"这只窑鸡太懒了，什么也没写",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gpy7afqfzmj30qn0qnt98.jpg",homepage:"https://github.com/threedayAAAAA"}],activeTab:"teachers",started:(new Date).getTime()>=_.getTime(),time:_.getTime(),errorMessage:"很抱歉，当前页面部分内容需要付费且登录后才能访问~",pay:!1,loginUrl:"\n            https://github.com/login/oauth/authorize?client_id=".concat(y,"&redirect_uri=https://leetcode-solution.cn/91")}},methods:{handlLogoutClick:function(){b().then((function(){window.location.reload()}))}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,r,n,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(h["a"])({url:"/api/v1/user?code=".concat(t.$route.query.code||"-"),withCredentials:!0});case 2:e=a.sent,r=e.pay,n=e.message,i=e.name,c=e.avatar_url,"Bad credentials"===n&&(t.errorMessage="登录已过期，请重新登录~"),t.avatar=c,t.pay=r,t.name=i,r&&(t.activeTab="jy1",Object(g["a"])().then((function(a){t.basicLecturs=a.map((function(t){return Object(s["a"])({},t,{viewUrl:"/solutionDetail?type=2&id=".concat(t.id),external:!1})}))})));case 12:case"end":return a.stop()}}),a)})))()}},j=k,w=(e("c70f"),Object(d["a"])(j,r,n,!1,null,"73b0d3ec",null));a["default"]=w.exports},"97af":function(t,a,e){"use strict";e("99af"),e("3b18");var r=e("f64c"),n=e("5530"),s=e("bc3a"),i=e.n(s),c="https://a91algo.herokuapp.com";a["a"]=function(t){return i()(Object(n["a"])({},t,{url:"".concat(c).concat(t.url)})).then((function(t){return t.data})).then((function(t){if(t.success)return t.data;throw t})).catch((function(t){r["a"].error(t.message||"系统开小差~")}))}},a9e3:function(t,a,e){"use strict";var r=e("83ab"),n=e("da84"),s=e("94ca"),i=e("6eeb"),c=e("5135"),o=e("c6b6"),u=e("7156"),l=e("c04e"),p=e("d039"),d=e("7c73"),f=e("241c").f,v=e("06cf").f,h=e("9bf2").f,m=e("58a8").trim,g="Number",b=n[g],y=b.prototype,_=o(d(y))==g,k=function(t){var a,e,r,n,s,i,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),a=u.charCodeAt(0),43===a||45===a){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(u.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(s=u.slice(2),i=s.length,c=0;c<i;c++)if(o=s.charCodeAt(c),o<48||o>n)return NaN;return parseInt(s,r)}return+u};if(s(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var j,w=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof w&&(_?p((function(){y.valueOf.call(e)})):o(e)!=g)?u(new b(k(a)),e,w):k(a)},I=r?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)c(b,j=I[N])&&!c(w,j)&&h(w,j,v(b,j));w.prototype=y,y.constructor=w,i(n,g,w)}},ae8d:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-container"},t._l(t.cards,(function(a){return e("a-card",{key:a.id,staticClass:"card",attrs:{hoverable:""}},[e("img",{staticClass:"card-img",attrs:{slot:"cover",alt:a.image.alt,src:a.image.url},slot:"cover"}),e("a-card-meta",{attrs:{title:a.title}},[e("template",{slot:"description"},[e("div",{staticClass:"card-desc"},[t._v(t._s(a.desc))]),a.downloadUrl?e("a",{staticClass:"card-action",attrs:{href:a.downloadUrl}},[t._v("下载")]):t._e(),a.viewUrl?e("a",{staticClass:"card-action card-action-view",attrs:{href:a.viewUrl,target:a.external?t._blank:""}},[t._v("查看")]):t._e()])],2)],1)})),1)},n=[],s={props:{cards:{type:Array}}},i=s,c=(e("7a29"),e("2877")),o=Object(c["a"])(i,r,n,!1,null,"044d0f9e",null);a["a"]=o.exports},b0c0:function(t,a,e){var r=e("83ab"),n=e("9bf2").f,s=Function.prototype,i=s.toString,c=/^\s*function ([^ (]*)/,o="name";!r||o in s||n(s,o,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},c70f:function(t,a,e){"use strict";var r=e("8b29"),n=e.n(r);n.a},d81d:function(t,a,e){"use strict";var r=e("23e7"),n=e("b727").map,s=e("1dde"),i=e("ae40"),c=s("map"),o=i("map");r({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e141:function(t,a,e){"use strict";var r=e("4de0"),n=e.n(r);n.a}}]);
//# sourceMappingURL=view-91algo.109275c4.js.map