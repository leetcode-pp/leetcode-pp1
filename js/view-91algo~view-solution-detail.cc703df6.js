(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-91algo~view-solution-detail"],{"25f0":function(n,t,i){"use strict";var e=i("6eeb"),r=i("825a"),a=i("d039"),c=i("ad6d"),o="toString",u=RegExp.prototype,s=u[o],d=a((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=o;(d||f)&&e(RegExp.prototype,o,(function(){var n=r(this),t=String(n.source),i=n.flags,e=String(void 0===i&&n instanceof RegExp&&!("flags"in u)?c.call(n):i);return"/"+t+"/"+e}),{unsafe:!0})},3991:function(n,t,i){"use strict";i.d(t,"e",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return c})),i.d(t,"b",(function(){return o})),i.d(t,"h",(function(){return u})),i.d(t,"a",(function(){return s})),i.d(t,"f",(function(){return d})),i.d(t,"g",(function(){return f}));var e=i("97af");function r(){return Object(e["a"])({url:"/api/v1/lectures/intro"})}function a(n){return Object(e["a"])({url:"/api/v1/daily-problem?date=".concat(n||"")})}function c(n){return Object(e["a"])({url:"/api/v1/daily-problem/solution?day=".concat(n)})}function o(){return Object(e["a"])({url:"/api/v1/lectures/basic"})}function u(){return Object(e["a"])({url:"/api/v1/lectures/topic"})}function s(){return Object(e["a"])({url:"/api/v1/lectures/advance"})}function d(n){return Object(e["a"])({url:"/api/v1/lectures/".concat(n)})}function f(){return Object(e["a"])({url:"/api/v1/my/solutions"})}},"3ca3":function(n,t,i){"use strict";var e=i("6547").charAt,r=i("69f3"),a=i("7dd0"),c="String Iterator",o=r.set,u=r.getterFor(c);a(String,"String",(function(n){o(this,{type:c,string:String(n),index:0})}),(function(){var n,t=u(this),i=t.string,r=t.index;return r>=i.length?{value:void 0,done:!0}:(n=e(i,r),t.index+=n.length,{value:n,done:!1})}))},"97af":function(n,t,i){"use strict";i("99af"),i("3b18");var e=i("f64c"),r=i("5530"),a=i("bc3a"),c=i.n(a),o="";t["a"]=function(n){return c()(Object(r["a"])({},n,{withCredentials:!0,url:"".concat(o).concat(n.url)})).then((function(n){return n.data})).then((function(n){if(n.success)return n.data;throw n})).catch((function(n){throw e["a"].error(n.message||"系统开小差~"),n}))}},d28b:function(n,t,i){var e=i("746f");e("iterator")},ddb0:function(n,t,i){var e=i("da84"),r=i("fdbc"),a=i("e260"),c=i("9112"),o=i("b622"),u=o("iterator"),s=o("toStringTag"),d=a.values;for(var f in r){var l=e[f],g=l&&l.prototype;if(g){if(g[u]!==d)try{c(g,u,d)}catch(b){g[u]=d}if(g[s]||c(g,s,f),r[f])for(var p in a)if(g[p]!==a[p])try{c(g,p,a[p])}catch(b){g[p]=a[p]}}}},e01a:function(n,t,i){"use strict";var e=i("23e7"),r=i("83ab"),a=i("da84"),c=i("5135"),o=i("861d"),u=i("9bf2").f,s=i("e893"),d=a.Symbol;if(r&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var f={},l=function(){var n=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof l?new d(n):void 0===n?d():d(n);return""===n&&(f[t]=!0),t};s(l,d);var g=l.prototype=d.prototype;g.constructor=l;var p=g.toString,b="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;u(g,"description",{configurable:!0,get:function(){var n=o(this)?this.valueOf():this,t=p.call(n);if(c(f,n))return"";var i=b?t.slice(7,-1):t.replace(v,"$1");return""===i?void 0:i}}),e({global:!0,forced:!0},{Symbol:l})}},f14a:function(n,t){n.exports=[{id:"1",title:"kieda-tamashi",tags:["美团","携程","字节","硕士","后端"],description:"无ACM经验，今年2月底开始刷Leetcode准备面试。",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gq8r3su6wqj30og0o879n.jpg",body:'\n- 时间：2021-05-05\n- 被采访人：kieda-tamashi\n\n# 无ACM经验，今年2月底开始刷Leetcode准备面试。\n\n\n<img src="https://tva1.sinaimg.cn/large/008i3skNly1gq8q986d1pj30u0140773.jpg" width="400">\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n  \nA:现在水硕应届。课程的话，大二学数据结构，大三学算法。无ACM经验，今年2月底开始刷Leetcode准备面试。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA:今年2月底，好像是搜索啥搜到的，看了讲义感觉不错。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA:至少看到题有感觉了，虽然找工作很晚没进AT，但至少没失业\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 二分，边界弄得很清楚了。\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA:没什么擅长的，但比较喜欢做没有递归、stack相关的题目，往往不那么抽象，可以画图。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 早点开始，坚持每日一题，就算是抄的。\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 我觉得Github打卡有点太不好使了，也不怎么push和有可视激励，leetcode打卡还有积分显示，成长感明显，这边啥都没。\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA: 已经分享。 \n\n\n\n他的 B 站账号是： https://space.bilibili.com/1836395 ，感兴趣的小伙伴可以关注一波啦~\n      '},{id:"2",description:"一个很可爱，元气满满的转码少女~",tags:["上岸中","转码"],title:"易潇",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gq9qpzrs99j30u00u4q4o.jpg",body:'\n- 时间：2021-05-07\n- 被采访人：易潇\n    \n# 努力上岸的元气少女\n\n力扣加加，一个努力做西湖区最好的算法题解的团队。**91 天学算法**是力扣加加举办的一个算法训练活动，通过良好的学习计划 和 91 天的集中学习，帮助大家摆脱困境，征服算法。\n\n现在 《91 天学算法》已经举办了四期了，[第四期](https://mp.weixin.qq.com/s?__biz=MzI4MzUxNjI3OA==&mid=2247488668&idx=1&sn=001d53b788fb21280f9e45cadb7b4fae&chksm=eb88d885dcff5193f17725eb4b6b56cbbe406d8426bdc0dd5512253e2a0ef525358f94d4ab5a&token=2115509684&lang=zh_CN#rd "91 天学算法第四期")的活动时间是 **2021-05-10 到 2021-08-08**。\n\n每一期都有很多优秀学员，我想将这些人的学习经验分享给大家，帮助大家少走弯路。由于我开辟了这个 **91 天学算法优秀学员专访** 活动。\n\n这次，我们邀请到了远在美国的转码少女 - 易潇，一个元气满满的活力女孩。来看看她是如何学习的吧！\n\n<img src="https://tva1.sinaimg.cn/large/008i3skNly1gq9qojha3ij30u00u077t.jpg" width="400">\n\n## 采访\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n\nA: 从很久之前就听说过数据结果与算法，但正式接触是打算转码的时候开始的。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA: 我是从第二期就开始接触91的，大概是关注公众号的时候关注到的。\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA: 91让我从觉得用哈希表O(N)写 two sum很惊奇到了现在可以迷迷糊糊的状态下手写完堆（狗头\n\n最近因为刷了91，在做几个公司笔试初试(online coding challenge)的时候**感觉很简单**，也对自己的即将到来的面试更加有自信了~\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 经常顿悟 -- **顿悟源自于重复和每次重复带来的更深层次的理解。**\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA: 比较擅长的算法是看小漾怎么写的，然后默默的取长补短（就是都抄一遍的意思）\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 我觉得刚入坑的同学们一定要学会处理自己的 “迷茫” 以及这种情绪带来的 “我不想做，这太难了”。我觉得在学习的过程中，只要能在自己感到迷茫的时候坚持再坚持，总会有那么一个 “顿悟”的时刻，然后就会觉得**自己的坚持是值得的**。\n我在正式学习编程之前的两三年里，也经常想过转码，但每次都会因为 “选什么语言” 或者 “初始化环境设定” 太难了等这种原因放弃。**现在其实回头看，这些问题其实都很简单。**\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA:我希望 91 有更多的个人答题跟踪和一起打卡的人的榜单，这样大家可以相互鼓（shi）励（ya）\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA:当然愿意啦！我觉得新手入门的时候最难的就是选择 “学什么” ， 而  91 恰好解决了这个问题。加入了 91 之后，只要根据  91 已经制定好的计划每天努力就可以了。而且问题是循序渐进的，对新手非常友好~ 再加上有这么多同学和超级棒的讲师们一起，我觉得 91 是最棒的刷题计划啦！\n \n\n\n## lucifer 总结\n\n学习东西是需要循序渐进的。在这个循序渐进的路上会一次次地“顿悟”。如果你有一个良好的学习习惯和学习计划，那么我相信你效率一定很高，那么答案你理想的高度也是时间的问题罢了。而如果你缺乏这样的学习习惯，不知道怎么去学习算法，可以试试 91 天学算法哦，活动介绍在文末的链接中，也可以直接在公众号力扣加加中回复 91 获取。\n'},{id:"3",description:"擅长图解的小哥哥",tags:["明星学员","图解算法"],title:"蘑菇沏茶",avatar:"https://tva1.sinaimg.cn/large/008i3skNly1gqcaej3g4bj30oi0okwjv.jpg",body:"\n- 时间：2021-05-09\n- 被采访人：蘑菇沏茶\n    \n# 擅长图解的小哥哥\n\n## lucifer 序\n\n蘑菇沏茶在群里很活跃，也经常在仓库中看到他的打卡，他的题解都很认真，质量很高，也入选了很多次的精选题解，这样慢慢就对他有了印象。 后来我邀请他给我投稿，内容非常不错，大家可以看下，感受一下作者的算法能力和文笔。\n\n[图解数据结构](https://mp.weixin.qq.com/s/IdzUT8QvaWNSBca944FR0g)\n\n他本人学习算法时间不算长，也经历了很多人经历过的开始阶段，因此他的经历对很多人来说，还是非常有参考价值的。\n\n## 正文\n\n![](https://tva1.sinaimg.cn/large/008i3skNly1gqcatezvadj30hs0hsq6m.jpg)\n\nQ: 你是什么时候开始接触数据结构与算法（以下简称算法）的？\n\nA: 最开始接触算法的话，是大二的时候。那时候只是把它当做一门课程，抱着及格万岁的心态，并没有觉得有多重要，实际上在日常开发中，也没有使用到算法相关，也就更别提意识到算法的一个重要性了。\n\nQ: 你是什么时候接触 91 天学算法（以下简称 91 天）的？从什么途径得知的？\n\nA: 接触到91天，还要从找实习说起，因为研究生期间主要是做NLP的，当时是在 **女朋友** 的催促下，随便找了一份算法的实习，实习之后发现和我想象中的差距非常大，也不是自己喜欢的。在某乎上看到许多大佬的求职之路，都提到了算法的重要性，也都提到leetcode，于是开始效仿大佬开始刷leetcode，但是刚开始的时候效率非常低，力扣有接近2000道题目，不知道从何刷起，非常迷茫，说来也巧，在某一天阅读社区题解的时候，发现了西法老师的一篇题解，这一看，简直不要太清晰明了，代码简洁，思路清晰，立马就悟了，后面关注了西法老师的“力扣加加”公众号，从里面得知了91天这一活动，当时是第二期。加入的时候，群里已经有200人左右了，后面一直有人加入，慢慢到了500人。在西法老师的系统讲解和整体氛围下，也慢慢开始喜欢上了算法，在刷算法的过程中，也是意识到算法的重要性，在这里必须感谢西法老师，开发并不只是简单地crud，比如在搜索的时候，我们该选取什么样的数据结构，又要以一个什么样的方法去进行搜索，别看两个算法在同一个例子中时间相差不多，但是**一旦数据范围变大，一个好的算法和数据结构对时间的提升是非常巨大的。**\n\nQ: 91 天有给你带来了什么样的变化么？\n\nA: 91天学算法给我带来的变化，首先就是对算法有了系统的认识，以前在课本上只学习了动态规划、贪心、递归、分治等，而且老师也只是简单讲解，没有深入，西法给我展示了算法的魅力。然后就是，我跟了91天两期，从第一期对算法有了系统认识，到第二期有了深一层次的认识，如果说刚开始的时候是照葫芦画瓢，那现在就是开始在照瓢画葫芦了，对一道题，除了把它解出来之外，会主动深入思考这里面包含的知识点，也会和其他的解法进行比较，去理解别人的做题时的思路，而不再是看懂。最后就是说一个最明显的提升，**跟完一期多的时候，参加了一些大厂的笔试，虽然题目没有原题，但考察的内容基本都有在91天中提到，所以学完91天，算是拿到了大厂的入场券**。以后只要91天还办下去，我就会一直跟下去，在这里，因为，现在已经不只是为了找到一份好的实习或者工作而去学算法，是真的已经喜欢上了算法，喜欢上解出一道题时获得的喜悦，在91天中，有许多和我这样爱好算法的同学，大家在刷题的路上一期成长，真的是一件非常快乐的事情。有一段时间无比期待每日一题的到来，**十二点准时侯在电脑前。**\n\nQ: 学习算法过程中有“顿悟”的时刻么？\n\nA: 要说顿悟的话，首先有一个就是比较搞笑的，刚开始刷算法，把提交后的运行时间当做评判标准，觉得时间快的就是好算法，后来西法的一句话让我印象非常深刻，就是衡量一个算法的好坏的标准是时间复杂度与空间复杂度，因为每次提交的时候，可能会由于网络波动、测试案例等因素导致每次时间不一样。再说其他的，比如做二分类题目的时候，除了对输入进行二分，还可以对结果进行二分，再比如再做树专题的时候，搜索无非就DFS和BFS，然后再决定是否带信息进行遍历，这些在西法的力扣加加公众号的总结中都可以看到；还有一个题没有思路的时候，可以根据题目给的关键字和数据范围去。其实顿悟这个词本来就很玄，我更愿意把顿悟理解为量变引起质变这一过程，题目做多了，很多方法自然而然就悟了，在做动态规划的时候，听到西法的一句 **“我做题的时候都是只考虑前一个状态和现在的状态”，原话记不太清了，差不多就是这个意思，看到这句话，就突然会悟了，这不就是满足动态规划的最优子结构性质嘛，这种时刻还有一些，基本上大多是已经有了一个差不多的理解，然后听到一句话或者看到一句话，然后就明白了。**\n\nQ: 你比较擅长的算法是什么？可以给大家简单分享一下么？\n\nA: 比较擅长的话，应该还没到擅长的地步吧，在西法老师面前不敢造次，但是**对常用的算法还算熟悉了**。比如二分算法，要么是对输入进行二分，要么是对结果进行二分，然后对二维数组进行二分的话，一般都是从斜对角线的两个顶点作为起始端点，还有一类题目就是使用二分保持数据的有序性；比如单调栈或者单调队列，存储的不仅仅可以是元素，也可以是元素对应的索引；对于回溯类题目，最重要的就是确定剪枝条件了，‘’毕竟只要剪枝剪得好，完美AC少不了‘’，主要用来解决一些排列组合问题，比如题目明确要求需要返回所有的可能；对于搜索类，常见的就是DFS和BFS，最重要的一点是不存在环路，或者有提前终止的条件，这类题目一般都是树或者图，当然有的时候，不一定会告诉你这是一棵树或者一张图，这种时候就需要自己体会题意了；对于存在环路的问题，一般会用到并查集，并查集要注意的只有两点，一个是按秩合并，一个是路径压缩；对于双串类问题，十有八九可以使用动态规划去求解；对于求解topK类问题，使用堆，或者在每个时刻，必须取最小或者最大，而这个最小最大在每个时刻会发生改变，那么也可以使用堆。\n\nQ: 有没有什么想和刚入坑算法的同学分享的？\n\nA: 无它，唯手熟尔。对于学习算法，没有太多的技巧，做得多了，见的多了，自然而然就会了。我刚开始做题的时候会画图帮助理解，但是现在很少画了，**因为熟了，图在心中。**\n\nQ: 相对而言，你觉得 91 天哪里做的还不够好？应该如何改进？\n\nA: 91天是一个很好地活动，物超所值，一杯喜茶就能得到大厂的入门卷，爱了爱了啊。就对于我个人而言，我希望看到一些**算法在实际场景的应用。**\n\n> 西法收到了 ^_^\n\nQ: 愿意把 91 天分享给你的朋友么？\n\nA: 当然愿意，在第三期的时候，拉动我的室友加入到91天学算法活动中。\n    \n    \n    "}]}}]);
//# sourceMappingURL=view-91algo~view-solution-detail.cc703df6.js.map