(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-91algo"],{"37c6":function(t,e,a){"use strict";var r=a("765b"),i=a.n(r);i.a},"4df4":function(t,e,a){"use strict";var r=a("0366"),i=a("7b0b"),s=a("9bdd"),n=a("e95a"),l=a("50c4"),o=a("8418"),c=a("35a1");t.exports=function(t){var e,a,d,u,g,m,v=i(t),p="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,y=void 0!==h,f=c(v),_=0;if(y&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==f||p==Array&&n(f))for(e=l(v.length),a=new p(e);e>_;_++)m=y?h(v[_],_):v[_],o(a,_,m);else for(u=f.call(v),g=u.next,a=new p;!(d=g.call(u)).done;_++)m=y?s(u,h,[d.value,_],!0):d.value,o(a,_,m);return a.length=_,a}},"628d":function(t,e,a){},"744f":function(t,e,a){},"765b":function(t,e,a){},"7fc0":function(t,e,a){"use strict";var r=a("744f"),i=a.n(r);i.a},a630:function(t,e,a){var r=a("23e7"),i=a("4df4"),s=a("1c7e"),n=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:n},{from:i})},ae8d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},t._l(t.cards,(function(e){return a("a-card",{key:e.id,staticClass:"card",attrs:{hoverable:""}},[e.viewUrl?a("a",{attrs:{slot:"extra",href:e.viewUrl,target:e.external?"_blank":""},slot:"extra"},[t._v(" 查看 ")]):t._e(),a("img",{staticClass:"card-img",attrs:{slot:"cover",alt:e.image.alt||e.title,src:e.image.url},slot:"cover"}),a("a-card-meta",{attrs:{title:e.title}},[a("template",{slot:"description"},[a("div",{staticClass:"card-desc"},[t._v(t._s(e.desc))]),e.downloadUrl?a("a",{staticClass:"card-action",attrs:{href:e.downloadUrl}},[t._v("下载")]):t._e()])],2)],1)})),1)},i=[],s={props:{cards:{type:Array}}},n=s,l=(a("7fc0"),a("2877")),o=Object(l["a"])(n,r,i,!1,null,"19cbbe61",null);e["a"]=o.exports},b0c0:function(t,e,a){var r=a("83ab"),i=a("9bf2").f,s=Function.prototype,n=s.toString,l=/^\s*function ([^ (]*)/,o="name";!r||o in s||i(s,o,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(t){return""}}})},b3bf:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pay?a("div",{staticClass:"hello"},[a("a-avatar",{attrs:{size:64,src:t.avatar}}),a("div",[t._v(" 欢迎回来，"+t._s(t.name)+" ~ 今天有没有比昨天进步一点点呢？ "),a("a-button",{attrs:{type:"link"},on:{click:t.handlLogoutClick}},[t._v("退出登录")])],1)],1):a("div",[a("a-alert",{attrs:{message:t.errorMessage,type:"error"}}),t.name?t._e():a("a-button",{attrs:{type:"link",href:t.loginUrl}},[t._v("Github 登录")]),a("a-button",{attrs:{type:"link",href:"https://lucifer.ren/blog/2021/05/02/91algo-4/"}},[t._v("活动介绍及报名方式")])],1),a("div",[a("a-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("a-tab-pane",{key:"teachers",attrs:{tab:"讲师介绍"}},[a("a-list",{staticClass:"teachers",attrs:{"item-layout":"horizontal","data-source":t.teachers},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.description||"这个人太懒了，什么也没有写"}},[a("a",{attrs:{slot:"title",href:e.homepage},slot:"title"},[t._v(t._s(e.title))]),a("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),a("div",{staticClass:"more"},[t._l(e.modules,(function(e){return a("a-tag",{key:e.name,attrs:{color:e.color}},[t._v(" "+t._s(e.name)+" ")])})),e.homepage?a("a-button",{attrs:{type:"link",href:e.homepage,target:"_blank"}},[t._v("关注 ta")]):t._e()],2)],1)}}])})],1),a("a-tab-pane",{key:"agenda",attrs:{tab:"目录"}},[a("div",{staticClass:"timeline"},[a("a-timeline",{attrs:{mode:"alternate"}},[a("a-timeline-item",{attrs:{color:"green"}},[a("h3",[t._v("先导篇（2021-05-10 前）")]),t._l(t.introLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])})),a("p")],2),a("a-timeline-item",{attrs:{color:t.basicActive()?"green":"gray"}},[a("h3",[t._v("基础篇 （2021-05-10 - 2021-06-07）")]),t._l(t.basicLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2),a("a-timeline-item",{attrs:{color:t.topicActive()?"green":"gray"}},[a("h3",[t._v("专题篇 （2021-06-08 - 待定）")]),t._l(t.topicLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2),a("a-timeline-item",{attrs:{color:t.advanceActive()?"green":"gray"}},[a("h3",[t._v("进阶篇 （待定）")]),t._l(t.advanceLectures,(function(e){return a("p",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2)],1)],1)]),a("a-tab-pane",{key:"sign",attrs:{tab:"打卡",disabled:!t.pay}},[t._v(" 本期暂时不支持在此打卡，还请大家去 "),a("a-button",{attrs:{type:"link",href:"https://github.com/leetcode-pp/91alg-4/issues",target:"_blank"}},[t._v("仓库")]),t._v(" 找到当天的题目进行打卡~ "),a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.showHistory=!0}}},[t._v(" 历史每日一题 ")]),a("a-drawer",{attrs:{width:"400",title:"历史每日一题",placement:"right",closable:!0,visible:t.showHistory},on:{close:function(e){t.showHistory=!1}}},[a("a-calendar",{attrs:{disabledDate:t.disabledDate,fullscreen:!1},on:{change:t.onDateChanged}})],1),a("div",{staticClass:"daily-problem"},[a("div",{staticClass:"daily-problem-title"},[t._v(t._s(t.dailyProblem.title))]),a("a-button",{staticClass:"daily-problem-link",attrs:{type:"link",href:t.dailyProblem.link}},[t._v(t._s(t.dailyProblem.link))]),t.dailyProblem.description?a("pre",{staticClass:"daily-problem-desc"},[t._v(t._s(t.dailyProblem.description))]):t._e(),t.dailyProblem.pres&&t.dailyProblem.pres.length>0?a("div",{staticClass:"daily-problem-pres"},[t._v(" 前置知识："),t._l(t.dailyProblem.pres,(function(e){return a("a-tag",{key:e,attrs:{color:t.hashColor(e)}},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),t.dailyProblem.tags&&t.dailyProblem.tags.length>0?a("div",{staticClass:"daily-problem-tags"},[t._v(" 标签："),t._l(t.dailyProblem.tags,(function(e){return a("a-tag",{key:e,attrs:{color:t.hashColor(e)}},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),t.dailyProblem.whys&&t.dailyProblem.whys.length>0?a("div",{staticClass:"daily-problem-whys"},[t._v(" 入选理由： "),t._l(t.dailyProblem.whys,(function(e){return a("div",{key:e,staticClass:"daily-problem-whys-item"},[t._v(" "+t._s(e)+" ")])}))],2):t._e()],1),t.dailyProblem.day?a("a-button",{attrs:{type:"link",href:"/solutionDetail?type=3&id="+t.dailyProblem.day+"&max_id=2"||!1}},[t._v("查看官方题解")]):t._e()],1),a("a-tab-pane",{key:"jy0",attrs:{tab:"讲义（先导篇）"}},[a("card",{attrs:{cards:t.introLectures}})],1),a("a-tab-pane",{key:"jy1",attrs:{tab:"讲义（基础篇）"}},[a("card",{attrs:{cards:t.basicLectures}})],1),a("a-tab-pane",{key:"jy2",attrs:{tab:"讲义（专题篇）",disabled:""}},[t._v(" 尚未开启 ")]),a("a-tab-pane",{key:"jy3",attrs:{tab:"讲义（进阶篇）",disabled:""}},[t._v(" 尚未开启 ")]),a("a-tab-pane",{key:"top-students",attrs:{tab:"上榜墙"}},[a("a-list",{staticClass:"students",attrs:{"item-layout":"horizontal","data-source":t.students},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.description||"这个人太懒了，什么也没有写"}},[a("a",{attrs:{slot:"title",href:e.homepage},slot:"title"},[t._v(t._s(e.title))]),a("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),a("div",{staticClass:"more"},[t._l(e.tags,(function(e){return a("a-tag",{key:e,attrs:{color:t.hashColor(e)}},[t._v(" "+t._s(e)+" ")])})),a("a-button",{attrs:{type:"link",href:"/solutionDetail?type=4&id="+e.id+"&max_id="+Math.max.apply(Math,t.students.map((function(t){return t.id}))),target:"_blank"}},[t._v("听听 ta 的故事")])],2)],1)}}])})],1),a("a-tab-pane",{key:"my",attrs:{tab:"我的",disabled:!t.pay}},[a("div",[t._v(" 这里的打卡记录 "),a("b",[t._v("不是实时的")]),t._v("，而是第二天收集前一天的打卡情况，也就是说当天的打卡会在第二天才能看到。如果你刚打完卡，这里没有看到是正常的。 ")]),0===t.mySolutions.length?a("div",[t._v("暂无打卡记录~")]):t._e(),t._l(t.mySolutions,(function(e,r){return a("div",{key:r,staticClass:"my-solution"},[e?a("div",[e.url?a("a-button",{attrs:{type:"link",href:e.url}},[t._v(" "+t._s(e.title)+" ")]):a("span",[t._v(t._s(e.title))]),e.body?a("a-icon",{staticStyle:{color:"green"},attrs:{type:"check"}}):a("a-icon",{staticStyle:{color:"red"},attrs:{type:"close"}})],1):t._e()])}))],2),a("a-tab-pane",{key:"faq",attrs:{tab:"FAQ"}},[a("faq")],1)],1)],1)])},i=[];a("99af"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("159b");function s(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0");function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return s(t)||n(t)||l()}var c=a("5530"),d=(a("96cf"),a("1da1")),u=a("97af"),g=a("ae8d"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"faq"},[t._v(" Q：提示没有登录或者付费是怎么回事？"),a("br"),t._v(" A：顾名思义，它的意思是你没有登录或者没有付费。如果你确认已经付费，请检查群公告中的表格是否已经添加了你且"),a("b",[t._v("名字拼接正确")]),t._v("。如果全部检查没有问题， 可以尝试清除 cookie 后再试。"),a("br"),a("br"),t._v(" Q：零基础人群可以学习吗？"),a("br"),t._v(" A：只要掌握一门编程语言就可以学习。"),a("br"),a("br"),t._v(" Q：课程是用什么语言教学的？"),a("br"),t._v(" A：Java， Python，JS 都可能，不过算法涉及到的语言都比较基础，即使不了解，也完全可以学习。另外算法重要的是思想， 语言不重要，思路理解了比什么都重要。 "),a("br"),a("br"),t._v(" Q：讲义和题解能够观看多久？"),a("br"),t._v(" A:为了有效督促学习，如果大家被违反规则被清退（"),a("b",[t._v("规则包括长时间群里闲聊和连续七天不打卡")]),t._v("），则不可以继续观看，否则可以长期观看。"),a("br"),a("br"),t._v(" Q：我该怎么学习？"),a("br"),t._v(" A：每一个小节开始之前都会提前把讲义公布到这里，大家可以关注一下，提前预习。每天都会有一道题，第二天会公布前一天的题解，所有"),a("b",[t._v("打卡和题解")]),t._v("都在仓库中查看。另外我还介绍了一些学习方法， 具体先导篇的视频。"),a("br"),a("br"),t._v(" Q：我该怎么打卡？"),a("br"),t._v(" A：打卡只需要在对应讲义新建的 issue 下留言即可，注意格式要求。格式模板在先导篇哦~ "),a("br"),a("br"),t._v(" Q: 只能当天打卡吗？ 如果一周补打卡算吗？"),a("br"),t._v(" A: 是的。必须当天才能打卡，比如第七天的题， 那么只有那一天打卡才算打卡成功。如果你连续打卡七天可以获取一张补签卡，补签卡是虚拟计算用的（不会实际发放），每月结束我们会统计当月满勤的同学，如果你不满勤，但是使用补签卡后满勤也是可以的。也就是说必须当天打卡，需要补卡的必须有补签卡，补签卡的获得方式是连续打卡七天。"),a("br"),a("br"),t._v(" Q：微信群的作用是什么？"),a("br"),t._v(" A：重要信息都在群公告和仓库，大家注意这两个信息渠道即可。微信群用来交流一下简单的，容易回答的问题。一些复杂的问题大家可以提 issue。 "),a("br"),a("br"),t._v(" Q：虽然你这么说，但是我还是不想错过微信群的重要信息怎么办？"),a("br"),t._v(" A：重要信息在仓库和群公告。如果大家还是怕错过重要群信息，可以按如下操作，仅看群主即可。 首先点击微信群右上角的按钮进入群设置，并翻到最下方。 点击“查找聊天内容”，然后进入“按群成员查找”。 找到需要查找聊天记录的人，比如 lucifer。"),a("br"),a("br"),t._v(" Q：Github 收到很多邮件，怎么取消？"),a("br"),t._v(" A：参考 https://www.bpteach.com/knowledge-base/1047564/ "),a("br"),a("br"),t._v(" Q：仓库在哪里？怎么进？"),a("br"),t._v(" A：仓库在 91 天学算法官网中的打卡模块中可以看到，官网地址：https://leetcode-solution.cn/91。如果你提示 404， 请检查你的邮箱是否有一个邀请邮件。如果有，请接收之。 ")])}],p=(a("be83"),a("2877")),b={},h=Object(p["a"])(b,m,v,!1,null,"958a6f8e",null),y=h.exports,f=a("3991");function _(){return Object(u["a"])({url:"/api/v1/user/logout"})}var k=a("dfaf"),j=a("f14a"),w=a.n(j),A=a("f121"),x=864e5;function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime();return(t-A["startTime"]+x-1)/x>>0}var P={components:{faq:y,card:g["a"]},data:function(){return{mySolutions:[],showHistory:!1,colors:["#f50","#2db7f5","#87d068","#108ee9"],name:"",avatar:"",startTime:A["startTime"],dailyProblem:{title:"",description:"",link:"",pres:[],tags:[],whys:[]},basicLectures:k["b"],introLectures:k["c"],advanceLectures:k["a"],topicLectures:k["e"],teachers:k["d"],students:w.a,activeTab:"teachers",started:(new Date).getTime()>=A["startTime"],time:A["startTime"],errorMessage:"很抱歉，当前页面部分内容需要付费且登录后才能访问~",pay:!1,loginUrl:"\n            https://github.com/login/oauth/authorize?client_id=".concat(A["clientId"],"&redirect_uri=https://").concat(A["hostname"],"/91")}},methods:{getDay:C,basicActive:function(){return(new Date).getTime()>=A["startTime"]},topicActive:function(){return(new Date).getTime()>=new Date("2021-06-07 16:00:00 GMT")},advanceActive:function(){return!1},getDailyProblem:function(t){var e=this;Object(f["c"])(t).then((function(t){e.dailyProblem=t}))},getMySolutions:function(){var t=this;Object(f["g"])().then((function(e){t.mySolutions=e.filter((function(t,e){return C()>=e+1}))}))},disabledDate:function(t){var e=C(t.valueOf());return t.valueOf()>(new Date).getTime()||(e<1||e>91)},hashColor:function(t){if(!t)return"";var e=0;for(var a in t)e=(e+t.charCodeAt(a))%this.colors.length;return this.colors[e]},onDateChanged:function(t){this.getDailyProblem(t.valueOf())},handlLogoutClick:function(){_().then((function(){window.location.href="https://".concat(A["hostname"],"/91")}))}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r,i,s,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.location.hostname!==A["originalHostname"]){e.next=3;break}return window.location.href="https://".concat(A["hostname"],"/91"),e.abrupt("return");case 3:return e.next=5,Object(u["a"])({url:"/api/v1/user?code=".concat(t.$route.query.code||"")});case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0={};case 8:a=e.t0,r=a.pay,i=a.message,s=a.name,n=a.login,l=a.avatar_url,"Bad credentials"===i&&(t.errorMessage="登录已过期，请重新登录~"),t.avatar=l,t.pay=r,t.name=s||n,r&&(t.activeTab="sign",t.getDailyProblem(),t.getMySolutions(),[Object(f["e"])(),Object(f["b"])(),Object(f["h"])(),Object(f["a"])()].forEach((function(e,a){e.then((function(e){t[["introLectures","basicLectures","topicLectures","advanceLectures"][a]]=e.map((function(t){return Object(c["a"])({},t,{viewUrl:t.external?t.externalLink:"/solutionDetail?type=2&id=".concat(t.id,"&max_id=").concat(Math.max.apply(Math,o(e.map((function(t){return t.id}))))),external:!!t.external})}))}))})));case 19:case"end":return e.stop()}}),e)})))()}},z=P,S=(a("37c6"),Object(p["a"])(z,r,i,!1,null,"2ae8594e",null));e["default"]=S.exports},be83:function(t,e,a){"use strict";var r=a("628d"),i=a.n(r);i.a},dfaf:function(t){t.exports=JSON.parse('{"b":[{"title":"01. 数组，栈，队列","desc":"主要介绍了数组，栈，队列基本原理，基础 API 以及其对应的复杂度","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gfbikq9ipmj30cd0a73yp.jpg"},"id":1},{"title":"02. 链表","desc":"主要介绍了链表基本原理，基础 API 以及其对应的复杂度，另外还列举了链表的常见考点和题型","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gfigbvzje1j30ky0bhq3x.jpg"},"id":2},{"title":"03. 树","desc":"主要介绍了树的基本原理，遍历方式以及题型。递归的使用，递归与树的结合等。","image":{"url":"https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/preorder-traversal.gif"},"id":3},{"title":"04. 哈希表","desc":"主要介绍了哈希表基本原理，基础 API ，处理冲突的方式以及其对应的复杂度，最后介绍了哈希表的常见题型和套路","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gjurye2oxyj30zk0cymz7.jpg"},"id":4},{"title":"05. 双指针","desc":"主要介绍了双指针的基本概念，题型以及实际操作技巧。","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1gf5w79tciyj30aa0hl77b.jpg"},"id":5},{"title":"06. 图（加餐）","desc":"主要介绍了图基本原理，表示方式，常见算法。","image":{"url":"https://tva1.sinaimg.cn/large/0081Kckwly1gk3qh59semj30ec05ptab.jpg"},"id":6}],"c":[{"title":"01. 数据结构与算法概述","desc":"主要介绍了数据结构与算法是在研究什么","image":{"url":"https://cdn.jsdelivr.net/gh/azl397985856/cdn/2020-10-22/1603338453129-image.png"},"id":-4},{"title":"02. 如何衡量算法的性能","desc":"介绍复杂度","image":{"url":"https://cdn.jsdelivr.net/gh/azl397985856/cdn/2020-10-22/1603339778900-image.png"},"id":-3},{"title":"03. 如何使用好仓库","desc":"仓库使用指南","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0rscf4j31c00u0adk.jpg","alt":"仓库使用指南"},"id":-2,"external":true,"externalLink":"https://www.bilibili.com/video/av627510315"},{"title":"04. 如何高效刷题","desc":"方法和技巧介绍","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0r0f1ej30zk0k0tac.jpg","alt":"方法和技巧介绍"},"id":-1,"external":true,"externalLink":"https://www.bilibili.com/video/av670114626"}],"e":[{"title":"01. 二分","desc":"主要介绍了二分的本质，类型以及常见的套路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":7},{"title":"02. 滑动窗口","desc":"主要介绍了滑动的本质，类型以及常见的套路","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1ghlugl94y8j30d90d50t5.jpg"},"id":8},{"title":"03. 搜索（BFS，DFS，回溯）专题","desc":"主要介绍了搜索的本质，类型以及常见的套路和解题模板","image":{"url":"https://tva1.sinaimg.cn/large/0081Kckwly1gkaub4scgij30uu0io40h.jpg"},"id":9},{"title":"04. 背包","desc":"主要介绍了常见的背包问题及其对应套路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":10},{"title":"05. 动态规划","desc":"主要介绍了动态规划的本质，常见类型以及常见的套路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":11},{"title":"06. 分治","desc":"主要介绍了分治的基本解题思路","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":12},{"title":"07. 贪心","desc":"主要介绍了贪心的常见问题","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":13},{"title":"08. 位运算","desc":"主要介绍了位运算是什么，种类有哪些，这是状态压缩的基础。","image":{"url":"https://tva1.sinaimg.cn/large/008eGmZEly1goss2vq59dj30c407rgm0.jpg"},"id":14}],"a":[{"title":"01. Trie","desc":"主要介绍了 Trie 解决的问题，适用场景，以及如何自己动手实现一个 Trie","image":{"url":"https://tva1.sinaimg.cn/large/007S8ZIlly1ghlug87vyfj30mz0gq406.jpg"},"id":15},{"title":"02. 并查集","desc":"主要介绍了并查集解决的问题，适用场景，以及如何自己动手实现一个并查集","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcws8miqj30dh053glo.jpg"},"id":16},{"title":"03. 剪枝","desc":"主要介绍了什么是剪枝，以及如何运用剪枝技巧使得暴力法可以 AC","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcxvawtdj30qb0bjq41.jpg"},"id":17},{"title":"04. 字符串匹配（BF&RK&KMP）","desc":"主要介绍了字符串匹配的三种经典算法","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzd084vk4j314o0hutaz.jpg"},"id":18},{"title":"05. 堆","desc":"主要介绍了堆的特点，解决的问题以及常见题型","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcyng27aj30dt0f33yy.jpg"},"id":19},{"title":"06. 跳表","desc":"主要介绍了跳表是什么，解决的问题","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzcyzany9j31u90u0n14.jpg"},"id":20},{"title":"07. 高频面试题","desc":"最后给大家带来常见的面试题系列，为大家的面试保驾护航~","image":{"url":"https://tva1.sinaimg.cn/large/008i3skNly1gpzd0qzll5j30zk0k10tz.jpg"},"id":21}],"d":[{"title":"西法","homepage":"https://github.com/azl397985856","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy3e38277j30cs0csjso.jpg","description":"Github 40K star 的架构师，同时也是刷题插件 leetcode-cheatsheet 作者","modules":[{"name":"Python","color":"#87d068"},{"name":"双指针","color":"#87d"}]},{"title":"宝石叔叔","description":"我也不知道，代码都是百度抄来的，复制过来怎么会有错误","homepage":"https://github.com/unclegem","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy65g2jf2j316g0u0dz2.jpg","modules":[{"name":"哈希表","color":"#f50"},{"name":"Java","color":"cyan"}]},{"title":"表哥","homepage":"https://feiker.xyz","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy68il2fmj30rw0ru0t8.jpg","modules":[{"name":"JS","color":"orange"},{"name":"树","color":"green"}]},{"title":"漾哥","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy7a1u5rtj30cs0csglt.jpg","homepage":"https://github.com/suukii","modules":[{"name":"链表","color":"#108ee9"},{"name":"JS","color":"orange"},{"name":"Python","color":"#87d068"}]},{"title":"三天","description":"这只窑鸡太懒了，什么也没写","avatar":"https://tva1.sinaimg.cn/large/008i3skNly1gpy7afqfzmj30qn0qnt98.jpg","homepage":"https://github.com/threedayAAAAA","modules":[{"name":"JS","color":"orange"},{"name":"数组","color":"#333"}]}]}')},f121:function(t,e){var a=new Date("2021-05-10T00:00:00.000+08:00");t.exports={startTime:a.getTime(),clientId:"c16b80e7b58a5a007157",originalHostname:"leetcode-solution.cn",hostname:"algo91.herokuapp.com"}}}]);
//# sourceMappingURL=view-91algo.0b7a1932.js.map