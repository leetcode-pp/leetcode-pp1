(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-video"],{1148:function(e,t,i){"use strict";var a=i("a691"),n=i("1d80");e.exports="".repeat||function(e){var t=String(n(this)),i="",r=a(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(i+=t);return i}},"1dde":function(e,t,i){var a=i("d039"),n=i("b622"),r=i("2d00"),o=n("species");e.exports=function(e){return r>=51||!a((function(){var t=[],i=t.constructor={};return i[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"408a":function(e,t,i){var a=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"4de4":function(e,t,i){"use strict";var a=i("23e7"),n=i("b727").filter,r=i("1dde"),o=i("ae40"),c=r("filter"),s=o("filter");a({target:"Array",proto:!0,forced:!c||!s},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"81a8":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("ul",{directives:[{name:"show",rawName:"v-show",value:!e.isShowVideo,expression:"!isShowVideo"}],staticClass:"tag-list"},[e._l(e.tagList,(function(t){return i("li",{key:t.tid,class:[{active:t.tid==e.currentTagId},"tag-item"],on:{click:function(i){return e.handleTag(t.tid)}}},[i("span",[e._v(e._s(t.name))]),i("span",{staticClass:"tag-num"},[e._v(e._s(t.count))])])})),i("li",{staticClass:"tag-item search"},[i("a-input-search",{attrs:{type:"text",placeholder:"搜索关键字"},on:{input:e.handleInputChange,search:e.onSearch}})],1)],2),i("ul",{directives:[{name:"show",rawName:"v-show",value:!e.isShowVideo,expression:"!isShowVideo"}],staticClass:"video-list"},[i("a-spin",{directives:[{name:"show",rawName:"v-show",value:e.searchLoading,expression:"searchLoading"}],staticClass:"loading",attrs:{size:"large"}}),e._l(e.getFilteredVideos,(function(t){return i("li",{key:t.aid,staticClass:"video-item",on:{click:function(i){return e.handleVideo(t.aid)}}},[i("img",{staticClass:"video-item-cover",attrs:{src:t.cover}}),i("article",{staticClass:"video-item-descript"},[i("p",{staticClass:"video-item-p video-item-title"},[e._v(e._s(t.title))]),i("p",{staticClass:"video-item-p video-item-detail"},[t.link?i("a-button",{staticClass:"video-item-detail-play",attrs:{type:"link",size:"small"},on:{click:function(i){return e.openLink(i,t.link)}}},[e._v(" 文字版 ")]):i("span",{staticClass:"video-item-detail-play"},[e._v(" lucifer")]),i("span",{staticClass:"video-item-detail-time"},[i("a-icon",{attrs:{type:"clock-circle"}}),e._v(" "+e._s(e._f("getTime")(t.created))+" ")],1)],1)])])})),i("li",{staticClass:"video-item empty-video-item"})],2),i("a-spin",{directives:[{name:"show",rawName:"v-show",value:e.videoLoading,expression:"videoLoading"}],staticClass:"loading",attrs:{size:"large"}}),i("a-pagination",{directives:[{name:"show",rawName:"v-show",value:!e.isShowVideo,expression:"!isShowVideo"}],staticClass:"pagination",attrs:{total:e.getFilteredVideos.length,pageSize:e.pageSize,size:"normal","show-total":function(e){return"当前共 "+e+" 项"}},on:{change:e.pageChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),i("a-icon",{directives:[{name:"show",rawName:"v-show",value:e.isShowVideo,expression:"isShowVideo"}],staticClass:"close",attrs:{type:"close"},on:{click:e.handleClose}}),i("iframe",{directives:[{name:"show",rawName:"v-show",value:e.isShowVideo,expression:"isShowVideo"}],staticClass:"ifram",attrs:{src:e.videoSrc,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},on:{load:e.videoOnLoad}})],1)},n=[],r=(i("99af"),i("4de4"),i("4160"),i("c975"),i("b680"),i("b64b"),i("d3b7"),i("159b"),i("bc3a")),o=i.n(r),c=519510412,s=30,d=200,l={data:function(){return{tagList:[],currentTagId:-1,searchWorld:null,searchLoading:!1,videoList:[],videoSrc:"",isShowVideo:!1,currentPage:1,pageSize:s,videoLoading:!0}},created:function(){this.getAllVideos(c,this.currentPage,this.pageSize)},methods:{initData:function(){this.videoList=[],this.tagList=[{name:"全部",tid:-1,count:0}]},getUserPageVideo:function(e,t,i){var a=this;return this.searchLoading=!0,o.a.get("https://5e86f5d3d29490bd12ac9aa5--leetcode-jing.netlify.app/api/getVideoList",{params:{mid:e,page:t,pagesize:i}}).then((function(e){var t=e.data.data,i=e.status;i===d&&a.calculatUserPageData(t)})).catch((function(){})).finally((function(){a.searchLoading=!1}))},calculatUserPageData:function(e){var t=e.tlist,i=e.vlist,a=e.count;this.initData();var n=[{name:"全部",tid:-1,count:a}];Object.keys(t).forEach((function(e){n.push(t[e])})),this.tagList=n,this.videoList=i},openLink:function(e,t){e.stopPropagation(),window.location.href=t},handleInputChange:function(e){this.searchWorld=e.target.value},handleTag:function(e){this.currentTagId=e,this.onSearch()},handleVideo:function(e){window.open("https://www.bilibili.com/video/av".concat(e))},videoOnLoad:function(){this.videoLoading=!1},handleClose:function(){this.isShowVideo=!1,this.videoSrc=""},getAllVideos:function(){var e=this;return Promise.resolve([{aid:971961728,bvid:"BV1bp4y1H7KT",tid:6,title:"搞定春招之虾皮篇（前端岗）",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0k4jo5j31c00u0akj.jpg",created:1614823665,link:"https://mp.weixin.qq.com/s?__biz=MzI4MzUxNjI3OA==&mid=2247487632&idx=1&sn=830fe267d835e5acbfc417787f85f1c1&chksm=eb88dc89dcff559f49913c0f2dec77b1d06c2ddbe2c6c299b32b3e49c2efaf8b11ac0aedce8f&token=1676518002&lang=zh_CN#rd"},{aid:799648825,tid:6,title:"搞定春招之腾讯&钉钉篇）",bvid:"BV1Qy4y187Em",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0lfjvuj31c00u0alc.jpg",created:1615889895,link:"https://mp.weixin.qq.com/s?__biz=MzI4MzUxNjI3OA==&mid=2247487829&idx=1&sn=f31b4741853c3f51317c1a980a15b05c&chksm=eb88dd4cdcff545a7a9740d9658883f0aa711df24772cb3cda3701bac3c0c4b67a83d1f005d9&token=1929867466&lang=zh_CN#rd"},{aid:79269711,tid:1,bvid:"BV1RJ411r7jj",title:"【大前端模拟面试】- 2019-12-14",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0m7nwej30sh0ht3zt.jpg",created:1576332558,link:"https://lucifer.ren/fe-interview/#/mock-interview/2019-12-14"},{aid:90738781,tid:1,title:"【大前端模拟面试】- 2020-02-20",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0nbe1rj30sg0g0mze.jpg",created:1582313002,link:"https://lucifer.ren/fe-interview/#/mock-interview/2020-02-20"},{aid:76756338,bvid:"BV1RJ411d7XT",title:"mac装机（前端工程师）",tid:5,cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0o7yzlj31bd0u0ncz.jpg",created:1574511732,link:"https://github.com/azl397985856/mac-setup"},{aid:64313957,bvid:"BV1V4411o7AP",tid:4,title:"大前端 每日一题 - 实现一个简单的移动端debug工具",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0p1eyuj313i0iw0wb.jpg",created:1566132353},{aid:840090130,bvid:"BV1M54y1d7h2",tid:2,title:"【贪心~双指针】 881. 求生艇 (\tBoats to Save People  ) LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0plh6vj31hc0u00wp.jpg",created:1585907937},{aid:95571324,bvid:"BV1rE411L7eH",tid:2,title:"【树】 404. 左叶子之和 (Sum of Left Leaves) LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0qj6kej31cw0u0gs9.jpg",created:1583942986},{aid:670114626,tid:3,bvid:"BV1pa4y1s7g2",title:"【力扣加加】91天学算法 - 基础篇",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0r0f1ej30zk0k0tac.jpg",created:1603901419},{aid:627510315,tid:3,bvid:"BV17t4y1i71G",title:"【力扣加加】91算法先导篇",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0rscf4j31c00u0adk.jpg",created:1603612539},{aid:886975432,tid:3,bvid:"BV1qK4y1J7DD",title:"91 天学算法第三期视频会议",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0sq1fdj30w00k0wgj.jpg",link:"https://mp.weixin.qq.com/s?__biz=MzI4MzUxNjI3OA==&mid=2247487620&idx=1&sn=5f2b73c5b57c6451ca1fe1bcbb036a80&chksm=eb88dc9ddcff558bf74c367b6c71055cb190cd72b60a08664e11c216183f716f689f176cf3b9&token=1676518002&lang=zh_CN#rd"},{tid:2,aid:797618520,bvid:"BV1fy4y1r7pX",title:"【力扣加加】 二分图",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0te7nsj31bz0u0jvr.jpg",created:1603612713},{tid:2,aid:285933298,bvid:"BV11f4y127Se",title:"【哈希表~双指针】 141. 环形链表 142. 环形链表 II  LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0u8vhkj31hc0u0glp.jpg",created:1591802077},{tid:5,aid:883465515,bvid:"BV1UK4y1x7zj",title:"帮助你高效刷题的插件了解一下？",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0v3ie1j31hc0u0q6s.jpg",created:1591438281,link:"https://lucifer.ren/blog/2020/08/16/leetcode-cheat/"},{tid:2,bvid:"BV1GT4y137W9",aid:925519225,title:"【递归，分治】 236.最近公共祖先 (Lowest Common Ancestor of a Binary Tree) LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0w051mj31hc0u0grh.jpg",created:1589107045},{tid:2,aid:667788596,bvid:"BV1Xa4y1x7st",title:"【记忆化递归，动态规划】 44.通配符匹配（wildcard-matching） LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0whgsxj31hc0u00vu.jpg",created:1587205244},{tid:2,aid:455316365,bvid:"BV1f5411t7cF",title:"【栈，中心扩展】 32.最长有效括号 LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0xehnij31cw0u0q4b.jpg",created:1586798500},{tid:2,aid:840186648,bvid:"BV1N54y197Xe",title:"【树】 1367.二叉树中的列表  LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0yguvdj31hc0u0jvf.jpg",created:1586442654},{tid:2,aid:752707742,bvid:"BV1Rk4y197AJ",title:"【二叉树的搜索】 1379. 找出克隆二叉树中的相同节点 LeetCode",cover:"https://tva1.sinaimg.cn/large/008eGmZEly1gomv0zhsjxj31hc0u0gq2.jpg",created:1586182368}]).then((function(t){return e.calculatUserPageData({tlist:{"mock-interview":{name:"模拟面试",tid:1,count:t.filter((function(e){return 1===e.tid})).length},solution:{name:"算法题解",tid:2,count:t.filter((function(e){return 2===e.tid})).length},"91algo":{name:"91算法",tid:3,count:t.filter((function(e){return 3===e.tid})).length},fe:{name:"前端",tid:4,count:t.filter((function(e){return 4===e.tid})).length},eff:{name:"效率",tid:5,count:t.filter((function(e){return 5===e.tid})).length},school:{name:"校招",tid:6,count:t.filter((function(e){return 6===e.tid})).length}},vlist:t,count:t.length})}))},onSearch:function(){var e=this;this.searchWorld?this.getAllVideos(c,this.currentPage,this.pageSize).then((function(){var t=e.searchWorld.toLowerCase();e.videoList=e.videoList.filter((function(e){return e.title.toLowerCase().indexOf(t)>=0}))})):this.getAllVideos(c,this.currentPage,this.pageSize)},pageChange:function(e){this.currentPage=e,this.initData(),this.getAllVideos(c,this.currentPage,this.pageSize)}},filters:{getTime:function(e){var t=new Date(1e3*e);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},getPlay:function(e){return e>=1e4?"".concat((e/1e4).toFixed(1),"万"):e}},computed:{getFilteredVideos:function(){var e=this;return-1===this.currentTagId?this.videoList:this.videoList.filter((function(t){return t.tid===e.currentTagId}))}}},u=l,g=(i("caa1"),i("2877")),v=Object(g["a"])(u,a,n,!1,null,"aac0026c",null);t["default"]=v.exports},8418:function(e,t,i){"use strict";var a=i("c04e"),n=i("9bf2"),r=i("5c6c");e.exports=function(e,t,i){var o=a(t);o in e?n.f(e,o,r(0,i)):e[o]=i}},"99af":function(e,t,i){"use strict";var a=i("23e7"),n=i("d039"),r=i("e8b5"),o=i("861d"),c=i("7b0b"),s=i("50c4"),d=i("8418"),l=i("65f0"),u=i("1dde"),g=i("b622"),v=i("2d00"),h=g("isConcatSpreadable"),f=9007199254740991,m="Maximum allowed index exceeded",p=v>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),b=u("concat"),w=function(e){if(!o(e))return!1;var t=e[h];return void 0!==t?!!t:r(e)},y=!p||!b;a({target:"Array",proto:!0,forced:y},{concat:function(e){var t,i,a,n,r,o=c(this),u=l(o,0),g=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?o:arguments[t],w(r)){if(n=s(r.length),g+n>f)throw TypeError(m);for(i=0;i<n;i++,g++)i in r&&d(u,g,r[i])}else{if(g>=f)throw TypeError(m);d(u,g++,r)}return u.length=g,u}})},b64b:function(e,t,i){var a=i("23e7"),n=i("7b0b"),r=i("df75"),o=i("d039"),c=o((function(){r(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(e){return r(n(e))}})},b680:function(e,t,i){"use strict";var a=i("23e7"),n=i("a691"),r=i("408a"),o=i("1148"),c=i("d039"),s=1..toFixed,d=Math.floor,l=function(e,t,i){return 0===t?i:t%2===1?l(e,t-1,i*e):l(e*e,t/2,i)},u=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},g=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));a({target:"Number",proto:!0,forced:g},{toFixed:function(e){var t,i,a,c,s=r(this),g=n(e),v=[0,0,0,0,0,0],h="",f="0",m=function(e,t){var i=-1,a=t;while(++i<6)a+=e*v[i],v[i]=a%1e7,a=d(a/1e7)},p=function(e){var t=6,i=0;while(--t>=0)i+=v[t],v[t]=d(i/e),i=i%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==v[e]){var i=String(v[e]);t=""===t?i:t+o.call("0",7-i.length)+i}return t};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(h="-",s=-s),s>1e-21)if(t=u(s*l(2,69,1))-69,i=t<0?s*l(2,-t,1):s/l(2,t,1),i*=4503599627370496,t=52-t,t>0){m(0,i),a=g;while(a>=7)m(1e7,0),a-=7;m(l(10,a,1),0),a=t-1;while(a>=23)p(1<<23),a-=23;p(1<<a),m(1,1),p(2),f=b()}else m(0,i),m(1<<-t,0),f=b()+o.call("0",g);return g>0?(c=f.length,f=h+(c<=g?"0."+o.call("0",g-c)+f:f.slice(0,c-g)+"."+f.slice(c-g))):f=h+f,f}})},c804:function(e,t,i){},c975:function(e,t,i){"use strict";var a=i("23e7"),n=i("4d64").indexOf,r=i("a640"),o=i("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,d=r("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!d||!l},{indexOf:function(e){return s?c.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},caa1:function(e,t,i){"use strict";var a=i("c804"),n=i.n(a);n.a}}]);
//# sourceMappingURL=view-video.358928b5.js.map