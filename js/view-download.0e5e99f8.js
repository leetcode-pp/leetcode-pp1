(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-download"],{3971:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"download-container"},[e("div",{staticClass:"download-nav"},[e("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.current,callback:function(a){t.current=a},expression:"current"}},[e("a-radio-button",{attrs:{value:"book"}},[t._v(" 电子书 ")]),e("a-radio-button",{attrs:{value:"leetcode-cheat"}},[t._v(" 刷题插件 ")]),e("a-radio-button",{attrs:{value:"anki"}},[t._v(" anki ")])],1)],1),e("card",{attrs:{cards:t.cards}})],1)},c=[],r=e("ae8d"),l=e("9a6c"),s={components:{card:r["a"]},data:function(){return{current:"book",book:l["book"],leetcodeCheat:l["leetcodeCheat"],anki:l["anki"]}},computed:{cards:function(){return"book"===this.current?this.book:"leetcode-cheat"===this.current?this.leetcodeCheat:this.anki}}},n=s,d=e("2877"),o=Object(d["a"])(n,i,c,!1,null,"a3e77de8",null);a["default"]=o.exports},"7a29":function(t,a,e){"use strict";var i=e("8104"),c=e.n(i);c.a},8104:function(t,a,e){},"9a6c":function(t,a){t.exports={leetcodeCheat:[{id:"uuid-001",title:"力扣刷题插件",image:{url:"https://tva1.sinaimg.cn/large/008eGmZEly1gmrz98cxflj31bp0u07k9.jpg",alt:"插件中的数据结构可视化功能"},viewUrl:"https://lucifer.ren/blog/2020/08/16/leetcode-cheat/",desc:"目前提供离线版和在线版（具体获取方式及功能在链接中哦~）"}],book:[{id:"uuid-001",title:"西法的刷题秘籍电子版",image:{url:"https://camo.githubusercontent.com/8c652c0d40a47991f39eb908f28911ab3fc8c7863f434f28b36c5872a561ca50/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038314b636b776c7931676d33723779346474386a33307a783075306864742e6a7067",alt:"西法的刷题秘籍电子版下载"},downloadUrl:"https://pan.baidu.com/s/1GyVairIGV-aQISO4tbGkVw",desc:"提取码 9crm"}],anki:[{id:"uuid-0001",desc:"一共7张卡片",title:"全部",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcwzy8nuk7j30m80ci0th.jpg",alt:"two-pointer"},viewUrl:"https://ankiweb.net/shared/info/1077931604",downloadUrl:"https://github.com/azl397985856/leetcode/raw/master/assets/anki/leetcode.apkg"},{id:"uuid-0002",desc:"双指针是一种很重要的算法技巧",title:"双指针",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcwyvtv1fnj30bm0gc75d.jpg",alt:"two-pointer"}},{id:"uuid-0003",title:"滑动窗口",desc:"滑动窗口分为固定窗口和可变窗口两类。",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcwzluowzzj308z0d5gm4.jpg",alt:"slide-window"}},{id:"uuid-0004",title:"二分法",desc:"二分的题目有很多，其中有的很直观，有的比较隐蔽，并且考察方式也千变万化。",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcwzn02aa1j30q00lvad6.jpg",alt:"binary-search"}},{id:"uuid-0005",title:"栈",desc:"如何用栈的特点来简化操作， 涉及到的题目有哪些？",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcx1g3yja0j30lh0f0400.jpg",alt:"stack"}},{id:"uuid-0006",title:"回溯法",desc:"回溯法解题的思路以及相关题目有哪些？",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcx1jdzmsnj30n20npadk.jpg",alt:"backtrack"}},{id:"uuid-0007",title:"数论",desc:"数论解决问题的关键点是什么，相关问题有哪些？",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcx1hu2fc6j30vq0hc76o.jpg",alt:"math"}},{id:"uuid-0008",title:"位运算",desc:"位运算解决问题的关键点是什么，相关问题有哪些？",image:{url:"https://tva1.sinaimg.cn/large/00831rSTly1gcx1iurc0ij308007wt91.jpg",alt:"bit"}}]}},ae8d:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-container"},t._l(t.cards,(function(a){return e("a-card",{key:a.id,staticClass:"card",attrs:{hoverable:""}},[e("img",{staticClass:"card-img",attrs:{slot:"cover",alt:a.image.alt,src:a.image.url},slot:"cover"}),e("a-card-meta",{attrs:{title:a.title}},[e("template",{slot:"description"},[e("div",{staticClass:"card-desc"},[t._v(t._s(a.desc))]),a.downloadUrl?e("a",{staticClass:"card-action",attrs:{href:a.downloadUrl}},[t._v("下载")]):t._e(),a.viewUrl?e("a",{staticClass:"card-action card-action-view",attrs:{href:a.viewUrl,target:a.external?t._blank:""}},[t._v("查看")]):t._e()])],2)],1)})),1)},c=[],r={props:{cards:{type:Array}}},l=r,s=(e("7a29"),e("2877")),n=Object(s["a"])(l,i,c,!1,null,"044d0f9e",null);a["a"]=n.exports}}]);
//# sourceMappingURL=view-download.0e5e99f8.js.map