(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-91algo"],{"25f0":function(t,e,a){"use strict";var r=a("6eeb"),n=a("825a"),i=a("d039"),s=a("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&r(RegExp.prototype,o,(function(){var t=n(this),e=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?s.call(t):a);return"/"+e+"/"+r}),{unsafe:!0})},3991:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return d}));var r=a("97af");function n(){return Object(r["a"])({url:"/api/v1/lectures/intro"})}function i(t){return Object(r["a"])({url:"/api/v1/daily-problem?date=".concat(t||"")})}function s(t){return Object(r["a"])({url:"/api/v1/daily-problem/solution?day=".concat(t)})}function o(){return Object(r["a"])({url:"/api/v1/lectures/basic"})}function c(){return Object(r["a"])({url:"/api/v1/lectures/topic"})}function l(){return Object(r["a"])({url:"/api/v1/lectures/advance"})}function u(t){return Object(r["a"])({url:"/api/v1/lectures/".concat(t)})}function d(){return Object(r["a"])({url:"/api/v1/my/solutions"})}},"3ca3":function(t,e,a){"use strict";var r=a("6547").charAt,n=a("69f3"),i=a("7dd0"),s="String Iterator",o=n.set,c=n.getterFor(s);i(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),a=e.string,n=e.index;return n>=a.length?{value:void 0,done:!0}:(t=r(a,n),e.index+=t.length,{value:t,done:!1})}))},"4de0":function(t,e,a){},"4df4":function(t,e,a){"use strict";var r=a("0366"),n=a("7b0b"),i=a("9bdd"),s=a("e95a"),o=a("50c4"),c=a("8418"),l=a("35a1");t.exports=function(t){var e,a,u,d,g,p,m=n(t),v="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,b=void 0!==h,y=l(m),_=0;if(b&&(h=r(h,f>2?arguments[2]:void 0,2)),void 0==y||v==Array&&s(y))for(e=o(m.length),a=new v(e);e>_;_++)p=b?h(m[_],_):m[_],c(a,_,p);else for(d=y.call(m),g=d.next,a=new v;!(u=g.call(d)).done;_++)p=b?i(d,h,[u.value,_],!0):u.value,c(a,_,p);return a.length=_,a}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("5899"),i="["+n+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"628d":function(t,e,a){},7156:function(t,e,a){var r=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var i,s;return n&&"function"==typeof(i=e.constructor)&&i!==a&&r(s=i.prototype)&&s!==a.prototype&&n(t,s),t}},"744f":function(t,e,a){},"7fc0":function(t,e,a){"use strict";var r=a("744f"),n=a.n(r);n.a},"97af":function(t,e,a){"use strict";a("99af"),a("3b18");var r=a("f64c"),n=a("5530"),i=a("bc3a"),s=a.n(i),o="";e["a"]=function(t){return s()(Object(n["a"])({},t,{withCredentials:!0,url:"".concat(o).concat(t.url)})).then((function(t){return t.data})).then((function(t){if(t.success)return t.data;throw t})).catch((function(t){throw r["a"].error(t.message||"系统开小差~"),t}))}},"98bb":function(t,e,a){"use strict";var r=a("cf8b"),n=a.n(r);n.a},a630:function(t,e,a){var r=a("23e7"),n=a("4df4"),i=a("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:n})},a9e3:function(t,e,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("94ca"),s=a("6eeb"),o=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),g=a("7c73"),p=a("241c").f,m=a("06cf").f,v=a("9bf2").f,f=a("58a8").trim,h="Number",b=n[h],y=b.prototype,_=c(g(y))==h,j=function(t){var e,a,r,n,i,s,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=f(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>n)return NaN;return parseInt(i,r)}return+l};if(i(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var k,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(_?d((function(){y.valueOf.call(a)})):c(a)!=h)?l(new b(j(e)),a,w):j(e)},A=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;A.length>x;x++)o(b,k=A[x])&&!o(w,k)&&v(w,k,m(b,k));w.prototype=y,y.constructor=w,s(n,h,w)}},ae8d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},t._l(t.cards,(function(e){return a("a-card",{key:e.id,staticClass:"card",attrs:{hoverable:""}},[e.viewUrl?a("a",{attrs:{slot:"extra",href:e.viewUrl,target:e.external?"_blank":""},slot:"extra"},[t._v(" 查看 ")]):t._e(),a("img",{staticClass:"card-img",attrs:{slot:"cover",alt:e.image.alt||e.title,src:e.image.url},slot:"cover"}),a("a-card-meta",{attrs:{title:e.title}},[a("template",{slot:"description"},[a("div",{staticClass:"card-desc"},[t._v(t._s(e.desc))]),e.downloadUrl?a("a",{staticClass:"card-action",attrs:{href:e.downloadUrl}},[t._v("下载")]):t._e()])],2)],1)})),1)},n=[],i={props:{cards:{type:Array}}},s=i,o=(a("7fc0"),a("2877")),c=Object(o["a"])(s,r,n,!1,null,"19cbbe61",null);e["a"]=c.exports},b0c0:function(t,e,a){var r=a("83ab"),n=a("9bf2").f,i=Function.prototype,s=i.toString,o=/^\s*function ([^ (]*)/,c="name";!r||c in i||n(i,c,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},b3bf:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.started?t._e():a("div",[t._m(0),a("counter",{attrs:{time:t.time}})],1),t.pay?a("div",{staticClass:"hello"},[a("a-avatar",{attrs:{size:64,src:t.avatar}}),a("div",[t._v(" 欢迎回来，"+t._s(t.name)+" ~ 今天有没有比昨天进步一点点呢？ "),a("a-button",{attrs:{type:"link"},on:{click:t.handlLogoutClick}},[t._v("退出登录")])],1)],1):a("div",[a("a-alert",{attrs:{message:t.errorMessage,type:"error"}}),t.name?t._e():a("a-button",{attrs:{type:"link",href:t.loginUrl}},[t._v("Github 登录")]),a("a-button",{attrs:{type:"link",href:"https://lucifer.ren/blog/2021/05/02/91algo-4/"}},[t._v("活动介绍及报名方式")])],1),a("div",[a("a-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("a-tab-pane",{key:"teachers",attrs:{tab:"讲师介绍"}},[a("a-list",{staticClass:"teachers",attrs:{"item-layout":"horizontal","data-source":t.teachers},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.description||"这个人太懒了，什么也没有写"}},[a("a",{attrs:{slot:"title",href:e.homepage},slot:"title"},[t._v(t._s(e.title))]),a("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),a("div",{staticClass:"more"},[t._l(e.modules,(function(e){return a("a-tag",{key:e.name,attrs:{color:e.color}},[t._v(" "+t._s(e.name)+" ")])})),e.homepage?a("a-button",{attrs:{type:"link",href:e.homepage,target:"_blank"}},[t._v("关注 ta")]):t._e()],2)],1)}}])})],1),a("a-tab-pane",{key:"agenda",attrs:{tab:"目录"}},[a("div",{staticClass:"timeline"},[a("a-timeline",{attrs:{mode:"alternate"}},[a("a-timeline-item",{attrs:{color:"green"}},[a("h3",[t._v("先导篇（2021-05-10 前）")]),t._l(t.introLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])})),a("p")],2),a("a-timeline-item",{attrs:{color:"gray"}},[a("h3",[t._v("基础篇 （2021-05-10 - 2021-06-07）")]),t._l(t.basicLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2),a("a-timeline-item",{attrs:{color:"gray"}},[a("h3",[t._v("专题篇 （2021-06-08 - 待定）")]),t._l(t.topicLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2),a("a-timeline-item",{attrs:{color:"gray"}},[a("h3",[t._v("进阶篇 （待定）")]),t._l(t.advanceLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2)],1)],1)]),a("a-tab-pane",{key:"sign",attrs:{tab:"打卡",disabled:!t.pay}},[t._v(" 本期暂时不支持在此打卡，还请大家去 "),a("a-button",{attrs:{type:"link",href:"https://github.com/leetcode-pp/91alg-4/issues",target:"_blank"}},[t._v("仓库")]),t._v(" 找到当天的题目进行打卡~ "),a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.showHistory=!0}}},[t._v(" 历史每日一题 ")]),a("a-drawer",{attrs:{width:"400",title:"历史每日一题",placement:"right",closable:!0,visible:t.showHistory},on:{close:function(e){t.showHistory=!1}}},[a("a-calendar",{attrs:{disabledDate:t.disabledDate,fullscreen:!1},on:{change:t.onDateChanged}})],1),a("div",{staticClass:"daily-problem"},[a("div",{staticClass:"daily-problem-title"},[t._v(t._s(t.dailyProblem.title))]),a("a-button",{staticClass:"daily-problem-link",attrs:{type:"link",href:t.dailyProblem.link}},[t._v(t._s(t.dailyProblem.link))]),t.dailyProblem.description?a("pre",{staticClass:"daily-problem-desc"},[t._v(t._s(t.dailyProblem.description))]):t._e(),t.dailyProblem.pres&&t.dailyProblem.pres.length>0?a("div",{staticClass:"daily-problem-pres"},[t._v(" 前置知识："),t._l(t.dailyProblem.pres,(function(e){return a("a-tag",{key:e,attrs:{color:t.hashColor(e)}},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),t.dailyProblem.tags&&t.dailyProblem.tags.length>0?a("div",{staticClass:"daily-problem-tags"},[t._v(" 标签："),t._l(t.dailyProblem.tags,(function(e){return a("a-tag",{key:e,attrs:{color:t.hashColor(e)}},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),t.dailyProblem.whys&&t.dailyProblem.whys.length>0?a("div",{staticClass:"daily-problem-whys"},[t._v(" 入选理由： "),t._l(t.dailyProblem.whys,(function(e){return a("div",{key:e,staticClass:"daily-problem-whys-item"},[t._v(" "+t._s(e)+" ")])}))],2):t._e()],1),t.dailyProblem.day?a("a-button",{attrs:{type:"link",href:"/solutionDetail?type=3&id="+t.dailyProblem.day+"&max_id=2"||!1}},[t._v("查看官方题解")]):t._e()],1),a("a-tab-pane",{key:"jy0",attrs:{tab:"讲义（先导篇）"}},[a("card",{attrs:{cards:t.introLectures}})],1),a("a-tab-pane",{key:"jy1",attrs:{tab:"讲义（基础篇）"}},[a("card",{attrs:{cards:t.basicLectures}})],1),a("a-tab-pane",{key:"jy2",attrs:{tab:"讲义（专题篇）",disabled:""}},[t._v(" 尚未开启 ")]),a("a-tab-pane",{key:"jy3",attrs:{tab:"讲义（进阶篇）",disabled:""}},[t._v(" 尚未开启 ")]),a("a-tab-pane",{key:"top-students",attrs:{tab:"上榜墙"}},[a("a-list",{staticClass:"students",attrs:{"item-layout":"horizontal","data-source":t.students},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.description||"这个人太懒了，什么也没有写"}},[a("a",{attrs:{slot:"title",href:e.homepage},slot:"title"},[t._v(t._s(e.title))]),a("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),a("div",{staticClass:"more"},[t._l(e.tags,(function(e){return a("a-tag",{key:e,attrs:{color:t.hashColor(e)}},[t._v(" "+t._s(e)+" ")])})),a("a-button",{attrs:{type:"link",href:"/solutionDetail?type=4&id="+e.id+"&max_id="+Math.max.apply(Math,t.students.map((function(t){return t.id}))),target:"_blank"}},[t._v("听听 ta 的故事")])],2)],1)}}])})],1),a("a-tab-pane",{key:"my",attrs:{tab:"我的",disabled:!t.pay}},[0===t.mySolutions.length?a("div",[t._v("活动尚未开始")]):t._e(),t._l(t.mySolutions,(function(e,r){return a("div",{key:r,staticClass:"my-solution"},[e?a("div",[e.url?a("a-button",{attrs:{type:"link",href:e.url}},[t._v(" "+t._s(e.title)+" ")]):a("span",[t._v(t._s(e.title))]),e.body?a("a-icon",{staticStyle:{color:"green"},attrs:{type:"check"}}):a("a-icon",{staticStyle:{color:"red"},attrs:{type:"close"}})],1):t._e()])}))],2),a("a-tab-pane",{key:"faq",attrs:{tab:"FAQ"}},[a("faq")],1)],1)],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("我们 "),a("span",{staticClass:"time"},[t._v("2021-05-10")]),t._v(" 见~")])}];a("99af"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("159b");function i(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0");function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return i(t)||s(t)||o()}var l=a("5530"),u=(a("96cf"),a("1da1")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"line-height":"1.5rem"},domProps:{innerHTML:t._s(t.countTxt)}})},g=[];a("a9e3");function p(t){var e,a,r,n;e=parseInt(t/86400);var i=t-24*e*60*60;a=parseInt(i/3600);var s=t-24*e*60*60-60*a*60;r=parseInt(s/60),n=parseInt(t-24*e*60*60-60*a*60-60*r),e<10&&(e="0"+e),a<10&&(a="0"+a),r<10&&(r="0"+r),n<10&&(n="0"+n);var o={day:e,hour:a,min:r,seconds:n};return o}var m={props:{time:{type:[Number]}},data:function(){return{times:{},countTxt:""}},methods:{mistiming:function(){var t=this,e=(this.time-(new Date).getTime())/1e3;this.times=p(e);var a='活动将于 <span class="d">'.concat(this.times.day,'</span>天<span class="h">').concat(this.times.hour,'</span>时<span class="m">').concat(this.times.min,'</span>分<span class="s">').concat(this.times.seconds,"</span>秒后开启");this.countTxt=a;var r=setInterval((function(){if(e>0){e--;var a=p(e),n='活动将于 <span class="d">'.concat(a.day,'</span>天<span class="h">').concat(a.hour,'</span>时<span class="m">').concat(a.min,'</span>分<span class="s">').concat(a.seconds,"</span>秒后开启");t.countTxt=n}else t.countTxt="活动已开始",clearInterval(r)}),1e3)}},mounted:function(){var t=this;this.$nextTick((function(){t.mistiming()}))}},v=m,f=(a("e141"),a("2877")),h=Object(f["a"])(v,d,g,!1,null,null,null),b=h.exports,y=a("97af"),_=a("ae8d"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"faq"},[t._v(" Q：提示没有登录或者付费是怎么回事？"),a("br"),t._v(" A：顾名思义，它的意思是你没有登录或者没有付费。如果你确认已经付费，请检查群公告中的表格是否已经添加了你且"),a("b",[t._v("名字拼接正确")]),t._v("。如果全部检查没有问题， 可以尝试清除 cookie 后再试。"),a("br"),a("br"),t._v(" Q：零基础人群可以学习吗？"),a("br"),t._v(" A：只要掌握一门编程语言就可以学习。"),a("br"),a("br"),t._v(" Q：课程是用什么语言教学的？"),a("br"),t._v(" A：Java， Python，JS 都可能，不过算法涉及到的语言都比较基础，即使不了解，也完全可以学习。另外算法重要的是思想， 语言不重要，思路理解了比什么都重要。 "),a("br"),a("br"),t._v(" Q：讲义和题解能够观看多久？"),a("br"),t._v(" A:为了有效督促学习，如果大家被违反规则被清退（"),a("b",[t._v("规则包括长时间群里闲聊和连续七天不打卡")]),t._v("），则不可以继续观看，否则可以长期观看。"),a("br"),a("br"),t._v(" Q：我该怎么学习？"),a("br"),t._v(" A：每一个小节开始之前都会提前把讲义公布到这里，大家可以关注一下，提前预习。每天都会有一道题，第二天会公布前一天的题解，所有"),a("b",[t._v("打卡和题解")]),t._v("都在仓库中查看。另外我还介绍了一些学习方法， 具体先导篇的视频。"),a("br"),a("br"),t._v(" Q：我该怎么打卡？"),a("br"),t._v(" A：打卡只需要在对应讲义新建的 issue 下留言即可，注意格式要求。格式模板在先导篇哦~ "),a("br"),a("br"),t._v(" Q: 只能当天打卡吗？ 如果一周补打卡算吗？"),a("br"),t._v(" A: 是的。必须当天才能打卡，比如第七天的题， 那么只有那一天打卡才算打卡成功。如果你连续打卡七天可以获取一张补签卡，补签卡是虚拟计算用的（不会实际发放），每月结束我们会统计当月满勤的同学，如果你不满勤，但是使用补签卡后满勤也是可以的。也就是说必须当天打卡，需要补卡的必须有补签卡，补签卡的获得方式是连续打卡七天。"),a("br"),a("br"),t._v(" Q：微信群的作用是什么？"),a("br"),t._v(" A：重要信息都在群公告和仓库，大家注意这两个信息渠道即可。微信群用来交流一下简单的，容易回答的问题。一些复杂的问题大家可以提 issue。 "),a("br"),a("br"),t._v(" Q：虽然你这么说，但是我还是不想错过微信群的重要信息怎么办？"),a("br"),t._v(" A：重要信息在仓库和群公告。如果大家还是怕错过重要群信息，可以按如下操作，仅看群主即可。 首先点击微信群右上角的按钮进入群设置，并翻到最下方。 点击“查找聊天内容”，然后进入“按群成员查找”。 找到需要查找聊天记录的人，比如 lucifer。"),a("br"),a("br"),t._v(" Q：Github 收到很多邮件，怎么取消？"),a("br"),t._v(" A：参考 https://www.bpteach.com/knowledge-base/1047564/ "),a("br"),a("br"),t._v(" Q：仓库在哪里？怎么进？"),a("br"),t._v(" A：仓库在 91 天学算法官网中的打卡模块中可以看到，官网地址：https://leetcode-solution.cn/91。如果你提示 404， 请检查你的邮箱是否有一个邀请邮件。如果有，请接收之。 ")])}],w=(a("be83"),{}),A=Object(f["a"])(w,j,k,!1,null,"958a6f8e",null),x=A.exports,S=a("3991");function C(){return Object(y["a"])({url:"/api/v1/user/logout"})}var I=a("dfaf"),E=a("f14a"),N=a.n(E),T=a("f121"),O=864e5;function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime();return(t-T["startTime"]+O-1)/O>>0}var z={components:{counter:b,faq:x,card:_["a"]},data:function(){return{mySolutions:[],showHistory:!1,colors:["#f50","#2db7f5","#87d068","#108ee9"],name:"",avatar:"",dailyProblem:{title:"",description:"",link:"",pres:[],tags:[],whys:[]},basicLectures:I["b"],introLectures:I["c"],advanceLectures:I["a"],topicLectures:I["e"],teachers:I["d"],students:N.a,activeTab:"teachers",started:(new Date).getTime()>=T["startTime"],time:T["startTime"],errorMessage:"很抱歉，当前页面部分内容需要付费且登录后才能访问~",pay:!1,loginUrl:"\n            https://github.com/login/oauth/authorize?client_id=".concat(T["clientId"],"&redirect_uri=https://").concat(T["hostname"],"/91")}},methods:{getDay:P,getDailyProblem:function(t){var e=this;Object(S["c"])(t).then((function(t){e.dailyProblem=t}))},getMySolutions:function(){var t=this;Object(S["g"])().then((function(e){t.mySolutions=e.filter((function(t,e){return P()>=e+1}))}))},disabledDate:function(t){var e=P(t.valueOf());return e<1||e>91},hashColor:function(t){if(!t)return"";var e=0;for(var a in t)e=(e+t.charCodeAt(a))%this.colors.length;return this.colors[e]},onDateChanged:function(t){this.getDailyProblem(t.valueOf())},handlLogoutClick:function(){C().then((function(){window.location.href="https://".concat(T["hostname"],"/91")}))}},mounted:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.location.hostname!==T["originalHostname"]){e.next=3;break}return window.location.href="https://".concat(T["hostname"],"/91"),e.abrupt("return");case 3:return e.next=5,Object(y["a"])({url:"/api/v1/user?code=".concat(t.$route.query.code||"")});case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0={};case 8:a=e.t0,r=a.pay,n=a.message,i=a.name,s=a.avatar_url,"Bad credentials"===n&&(t.errorMessage="登录已过期，请重新登录~"),t.avatar=s,t.pay=r,t.name=i,r&&(t.activeTab="sign",t.getDailyProblem(),t.getMySolutions(),[Object(S["e"])(),Object(S["b"])(),Object(S["h"])(),Object(S["a"])()].forEach((function(e,a){e.then((function(e){t[["introLectures","basicLectures","topicLectures","advanceLectures"][a]]=e.map((function(t){return Object(l["a"])({},t,{viewUrl:t.external?t.externalLink:"/solutionDetail?type=2&id=".concat(t.id,"&max_id=").concat(Math.max.apply(Math,c(e.map((function(t){return t.id}))))),external:!!t.external})}))}))})));case 18:case"end":return e.stop()}}),e)})))()}},q=z,L=(a("98bb"),Object(f["a"])(q,r,n,!1,null,"4a4557ba",null));e["default"]=L.exports},be83:function(t,e,a){"use strict";var r=a("628d"),n=a.n(r);n.a},cf8b:function(t,e,a){},d28b:function(t,e,a){var r=a("746f");r("iterator")},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,i=a("1dde"),s=a("ae40"),o=i("map"),c=s("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("e260"),s=a("9112"),o=a("b622"),c=o("iterator"),l=o("toStringTag"),u=i.values;for(var d in n){var g=r[d],p=g&&g.prototype;if(p){if(p[c]!==u)try{s(p,c,u)}catch(v){p[c]=u}if(p[l]||s(p,l,d),n[d])for(var m in i)if(p[m]!==i[m])try{s(p,m,i[m])}catch(v){p[m]=i[m]}}}},dfaf:function(t){t.exports=JSON.parse('{"b":[{"title":"01. 数组，栈，队列","desc":"主要介绍了数组，栈，队列基本原理，基础 API 以及其对应的复杂度","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gfbikq9ipmj30cd0a73yp.jpg"},"id":1},{"title":"02. 链表","desc":"主要介绍了链表基本原理，基础 API 以及其对应的复杂度，另外还列举了链表的常见考点和题型","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gfigbvzje1j30ky0bhq3x.jpg"},"id":2},{"title":"03. 树","desc":"主要介绍了树的基本原理，遍历方式以及题型。递归的使用，递归与树的结合等。","image":{"url":"https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/preorder-traversal.gif"},"id":3},{"title":"04. 哈希表","desc":"主要介绍了哈希表基本原理，基础 API ，处理冲突的方式以及其对应的复杂度，最后介绍了哈希表的常见题型和套路","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gjurye2oxyj30zk0cymz7.jpg"},"id":4},{"title":"05. 双指针","desc":"主要介绍了双指针的基本概念，题型以及实际操作技巧。","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gf5w79tciyj30aa0hl77b.jpg"},"id":5},{"title":"06. 图（加餐）","desc":"主要介绍了图基本原理，表示方式，常见算法。","image":{"url":"https://tva1.sinaimg.cn/large/0081Kckwly1gk3qh59semj30ec05ptab.jpg"},"id":6}],"c":[{"title":"01. 数据结构与算法概述","desc":"主要介绍了数据结构与算法是在研究什么","image":{"url":"https://cdn.jsdelivr.net/gh/azl397985856/cdn/2020-10-22/1603338453129-image.png"},"id":-4},{"title":"02. 如何衡量算法的性能","desc":"介绍复杂度","image":{"url":"https://cdn.jsdelivr.net/gh/azl397985856/cdn/2020-10-22/1603339778900-image.png"},"id":-3},{"title":"03. 如何使用好仓库","desc":"仓库使用指南","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0rscf4j31c00u0adk.jpg","alt":"仓库使用指南"},"id":-2,"external":true,"externalLink":"https://www.bilibili.com/video/av627510315"},{"title":"04. 如何高效刷题","desc":"方法和技巧介绍","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0r0f1ej30zk0k0tac.jpg","alt":"方法和技巧介绍"},"id":-1,"external":true,"externalLink":"https://www.bilibili.com/video/av670114626"}],"e":[{"title":"01. 二分","desc":"主要介绍了二分的本质，类型以及常见的套路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":7},{"title":"02. 滑动窗口","desc":"主要介绍了滑动的本质，类型以及常见的套路","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1ghlugl94y8j30d90d50t5.jpg"},"id":8},{"title":"03. 搜索（BFS，DFS，回溯）专题","desc":"主要介绍了搜索的本质，类型以及常见的套路和解题模板","image":{"url":"https://tva1.sinaimg.cn/large/0081Kckwly1gkaub4scgij30uu0io40h.jpg"},"id":9},{"title":"04. 背包","desc":"主要介绍了常见的背包问题及其对应套路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":10},{"title":"05. 动态规划","desc":"主要介绍了动态规划的本质，常见类型以及常见的套路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":11},{"title":"06. 分治","desc":"主要介绍了分治的基本解题思路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":12},{"title":"07. 贪心","desc":"主要介绍了贪心的常见问题","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":13},{"title":"08. 位运算","desc":"主要介绍了位运算是什么，种类有哪些，这是状态压缩的基础。","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":14}],"a":[{"title":"01. Trie","desc":"主要介绍了 Trie 解决的问题，适用场景，以及如何自己动手实现一个 Trie","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1ghlug87vyfj30mz0gq406.jpg"},"id":15},{"title":"02. 并查集","desc":"主要介绍了并查集解决的问题，适用场景，以及如何自己动手实现一个并查集","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcws8miqj30dh053glo.jpg"},"id":16},{"title":"03. 剪枝","desc":"主要介绍了什么是剪枝，以及如何运用剪枝技巧使得暴力法可以 AC","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcxvawtdj30qb0bjq41.jpg"},"id":17},{"title":"04. 字符串匹配（BF&RK&KMP）","desc":"主要介绍了字符串匹配的三种经典算法","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzd084vk4j314o0hutaz.jpg"},"id":18},{"title":"05. 堆","desc":"主要介绍了堆的特点，解决的问题以及常见题型","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcyng27aj30dt0f33yy.jpg"},"id":19},{"title":"06. 跳表","desc":"主要介绍了跳表是什么，解决的问题","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcyzany9j31u90u0n14.jpg"},"id":20},{"title":"07. 高频面试题","desc":"最后给大家带来常见的面试题系列，为大家的面试保驾护航~","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzd0qzll5j30zk0k10tz.jpg"},"id":21}],"d":[{"title":"西法","homepage":"https://github.com/azl397985856","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy3e38277j30cs0csjso.jpg","description":"Github 40K star 的架构师，同时也是刷题插件 leetcode-cheatsheet 作者","modules":[{"name":"Python","color":"#87d068"},{"name":"双指针","color":"#87d"}]},{"title":"宝石叔叔","description":"我也不知道，代码都是百度抄来的，复制过来怎么会有错误","homepage":"https://github.com/unclegem","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy65g2jf2j316g0u0dz2.jpg","modules":[{"name":"哈希表","color":"#f50"},{"name":"Java","color":"cyan"}]},{"title":"表哥","homepage":"https://feiker.xyz","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy68il2fmj30rw0ru0t8.jpg","modules":[{"name":"JS","color":"orange"},{"name":"树","color":"green"}]},{"title":"漾哥","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy7a1u5rtj30cs0csglt.jpg","homepage":"https://github.com/suukii","modules":[{"name":"链表","color":"#108ee9"},{"name":"JS","color":"orange"},{"name":"Python","color":"#87d068"}]},{"title":"三天","description":"这只窑鸡太懒了，什么也没写","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy7afqfzmj30qn0qnt98.jpg","homepage":"https://github.com/threedayAAAAA","modules":[{"name":"JS","color":"orange"},{"name":"数组","color":"#333"}]}]}')},e01a:function(t,e,a){"use strict";var r=a("23e7"),n=a("83ab"),i=a("da84"),s=a("5135"),o=a("861d"),c=a("9bf2").f,l=a("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof g?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(g,u);var p=g.prototype=u.prototype;p.constructor=g;var m=p.toString,v="Symbol(test)"==String(u("test")),f=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=m.call(t);if(s(d,t))return"";var a=v?e.slice(7,-1):e.replace(f,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:g})}},e141:function(t,e,a){"use strict";var r=a("4de0"),n=a.n(r);n.a},f121:function(t,e){var a=new Date;a.setMonth(4),a.setDate(10),a.setHours(0),a.setMinutes(0),a.setSeconds(0),t.exports={startTime:a.getTime(),clientId:"c16b80e7b58a5a007157",originalHostname:"leetcode-solution.cn",hostname:"algo91.herokuapp.com"}},f14a:function(t,e){t.exports=[{id:"1",title:"kieda-tamashi",tags:["美团","携程","字节","硕士","后端"],description:"无ACM经验，今年2月底开始刷Leetcode准备面试。",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gq8q986d1pj30u0140773.jpg",body:'\n- 时间：2021-05-05\n- 被采访人：kieda-tamashi\n\n# 无ACM经验，今年2月底开始刷Leetcode准备面试。\n\n\n<img src="https://tva1.sinaimg.cn/large/008i3skNly1gq8q986d1pj30u0140773.jpg" width="400">\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n  \nA:现在水硕应届。课程的话，大二学数据结构，大三学算法。无ACM经验，今年2月底开始刷Leetcode准备面试。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA:今年2月底，好像是搜索啥搜到的，看了讲义感觉不错。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA:至少看到题有感觉了，虽然找工作很晚没进AT，但至少没失业\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 二分，边界弄得很清楚了。\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA:没什么擅长的，但比较喜欢做没有递归、stack相关的题目，往往不那么抽象，可以画图。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 早点开始，坚持每日一题，就算是抄的。\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 我觉得Github打卡有点太不好使了，也不怎么push和有可视激励，leetcode打卡还有积分显示，成长感明显，这边啥都没。\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA: 已经分享。 \n\n\n\n他的 B 站账号是： https://space.bilibili.com/1836395 ，感兴趣的小伙伴可以关注一波啦~\n      '}]}}]);
//# sourceMappingURL=view-91algo.5e8eb9a9.js.map