webpackJsonp([1],[,,,,,function(t,e,s){"use strict";function i(t,e,i){return s.i(c.a)(l[t],{start:e,count:i})}function a(t){return s.i(c.a)("subject/"+t)}function n(t,e,i){return s.i(c.a)("subject/"+t+"/comments",{start:e,count:i})}function r(t,e,i){return s.i(c.a)("subject/"+t+"/reviews",{start:e,count:i})}function o(t){return s.i(c.a)("review/"+t)}e.a=i,e.e=a,e.d=n,e.c=r,e.b=o;var c=s(85),l={inTheaters:"in_theaters",comingSoon:"coming_soon"}},,,,,,,,function(t,e,s){function i(t){s(149)}var a=s(0)(s(89),s(178),i,null,null);t.exports=a.exports},,,,,function(t,e,s){function i(t){s(159)}var a=s(0)(s(94),s(188),i,null,null);t.exports=a.exports},,function(t,e,s){"use strict";s.d(e,"a",function(){return i});var i="GET_SUBJECTS"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){function i(t){s(156)}var a=s(0)(s(90),s(185),i,"data-v-73059735",null);t.exports=a.exports},function(t,e,s){function i(t){s(158)}var a=s(0)(s(92),s(187),i,"data-v-d2515f1c",null);t.exports=a.exports},function(t,e,s){function i(t){s(155)}var a=s(0)(s(93),s(184),i,null,null);t.exports=a.exports},function(t,e,s){"use strict";var i=s(14),a=s(190),n=s(169),r=s.n(n),o=s(172),c=s.n(o),l=s(173),u=s.n(l),d=s(167),m=s.n(d),h=s(166),f=s.n(h),p=s(171),v=s.n(p),_=s(170),g=s.n(_),b=s(168),j=s.n(b);i.default.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"home",component:r.a},{path:"/movie/in-theaters",name:"inTheaters",component:c.a},{path:"/movie/coming-soon",name:"comingSoon",component:c.a},{path:"/movie/:id",name:"subject",component:u.a},{path:"/movie/:id",component:m.a,children:[{path:"comment",name:"comments",component:f.a},{path:"review",name:"reviews",component:v.a}]},{path:"/review/:id",name:"review",component:g.a},{path:"/error",name:"error",component:j.a},{path:"/*",redirect:"/error"}]})},function(t,e,s){"use strict";var i=s(14),a=s(33),n=s(87);i.default.use(a.a),e.a=new a.a.Store({modules:{lists:n.a}})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){function i(t){s(145)}var a=s(0)(s(88),s(174),i,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";var i=s(107),a=s.n(i),n=s(67),r=s.n(n);r.a.defaults.params={apikey:"0df993c66c0c636e29ecbb5344252a4a"},e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new a.a(function(s,i){r.a.get("/api/movie/"+t,{params:e}).then(function(t){s(t.data)}).catch(function(t){i(t)})})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(14),a=s(66),n=s.n(a),r=s(60),o=s(61),c=s(65),l=s.n(c),u=s(63),d=(s.n(u),s(64)),m=(s.n(d),s(62));s.n(m);i.default.use(l.a),i.default.filter("rating",function(t){return t>0?t.toFixed(1):"暂无评分"}),i.default.filter("a2s",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" / ";return Array.isArray(t)?t.join(e):""}),i.default.filter("mili",function(t){return t&&t.toString().replace(/(?=(?!^)(\d{3})+$)/g,",")}),i.default.filter("name",function(t){var e=[];return t.forEach(function(t){return e.push(t.name+" "+t.name_en)}),e}),i.default.config.productionTip=!1,new i.default({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:n.a}})},function(t,e,s){"use strict";var i=s(108),a=s.n(i),n=s(5),r=s(20),o={inTheaters:{count:0,total:0,subjects:[]},comingSoon:{count:0,total:0,subjects:[]}},c=a()({},r.a,function(t,e){t[e.name].subjects=t[e.name].subjects.concat(e.subjects),t[e.name].count=t[e.name].subjects.length,t[e.name].total=e.total}),l=a()({},r.a,function(t,e){n.a(e.name,e.start,e.count).then(function(s){return t.commit(r.a,{name:e.name,subjects:s.subjects,total:s.total})})});e.a={state:o,mutations:c,actions:l}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{transition:"back",routes:{home:0,inTheaters:1,comingSoon:1,subject:2,comments:3,reviews:3,review:4}}},computed:{},watch:{$route:function(t,e){this.routes[t.name]<this.routes[e.name]?this.transition="back":this.transition="forward"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AppBar",props:{icon:{type:String,default:"arrow_back"},title:{type:String,default:""},progress:{default:0}},computed:{isHome:function(){return!("home"!==this.$route.name)},isSubject:function(){return!("subject"!==this.$route.name)},subjectStyle:function(){return this.progress<1&&this.isSubject?{boxShadow:"0 0 0 transparent",backgroundColor:"rgba(34, 34, 34, "+this.progress+")"}:{}}},methods:{iconClick:function(){this.isHome?this.$emit("toggle"):this.$router.go(-1)},search:function(){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(18),a=s.n(i);e.default={name:"comment",props:["comment"],components:{Stars:a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(21),a=s.n(i),n=s(18),r=s.n(n);e.default={name:"rating",props:{rating:{type:Object,required:!0},count:{type:Number,required:!0}},computed:{details:function(){for(var t=[],e=5;e>0;e--)t.push(this.rating.details[e]);return t},maxDetail:function(){return Math.max.apply(Math,a()(this.details))}},components:{Stars:r.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(18),a=s.n(i);e.default={name:"review",props:["review"],components:{Stars:a.a},methods:{routeToReview:function(){this.$router.push({name:"review",params:{id:this.review.id}})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"small-card",props:{subject:{type:Object,default:{id:0,title:"",rating:{average:0},images:{large:""},mainland_pubdate:""},required:!0},showDate:{type:Boolean,default:!1}},methods:{toSubject:function(){0!==this.subject.id&&this.$router.push({name:"subject",params:{id:this.subject.id,subject:this.subject}})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"stars",props:{stars:{type:String,default:"00",required:!0},size:{type:Number,default:16,required:!1}},computed:{computedStars:function(){for(var t=[],e="5"===this.stars[1]?6:5;t.length<this.stars[0];)t.unshift("yellow");for("5"===this.stars[1]&&(t.push("yellow half"),t.push("grey half"));t.length<e;)t.push("grey");return t}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(59),a=s.n(i);e.default={name:"x-scroll",data:function(){return{loadingSubject:{id:0,title:"Loading...",rating:{average:0},images:{large:""},mainland_pubdate:"0000-00-00"}}},props:{title:String,listName:String,subjects:{type:Array}},computed:{showDate:function(){return"comingSoon"===this.listName}},components:{SmallCard:a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(21),a=s.n(i),n=s(57),r=s.n(n),o=s(5);e.default={data:function(){return{comments:[],scroller:null,loading:!1,isLoaded:!1,total:0,count:0}},components:{Comment:r.a},methods:{loadMore:function(){var t=this;this.loading=!0,o.d(this.$route.params.id,this.count,20).then(function(e){var s;(s=t.comments).push.apply(s,a()(e.comments)),t.total=e.total,(e.total=0)&&(t.loading=!1,t.isLoaded=!0)})},checkLoaded:function(){0!==this.total&&this.count===this.total&&(this.isLoaded=!0)}},watch:{comments:function(t,e){this.count=t.length,this.checkLoaded(),this.loading=!1}},created:function(){0===this.count&&this.loadMore(),this.checkLoaded()},mounted:function(){this.scroller=this.$el}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),a=s.n(i),n=s(5);e.default={data:function(){return{title:"",transition:"left"}},components:{AppBar:a.a},computed:{activeTab:function(){return this.$route.name}},methods:{handleTabChange:function(t){this.$router.replace({name:t,params:{id:this.$route.params.id,title:this.title}})},getTitle:function(){var t=this;n.e(this.$route.params.id).then(function(e){t.title=e.title})}},watch:{$route:function(t,e){"comments"===e.name?this.transition="left":this.transition="right"}},created:function(){this.$route.params.title?this.title=this.$route.params.title:this.getTitle()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{returnBack:function(){this.$router.go(-2)},returnHome:function(){this.$router.push({path:"/"})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(s(33),s(20)),a=s(13),n=s.n(a),r=s(165),o=s.n(r);e.default={name:"home",data:function(){return{drawerOpen:!1}},computed:{inTheaters:function(){return{name:"inTheaters",subjects:this.$store.state.lists.inTheaters.subjects.slice(0,12),count:this.$store.state.lists.inTheaters.count}},comingSoon:function(){return{name:"comingSoon",subjects:this.$store.state.lists.comingSoon.subjects.slice(0,12),count:this.$store.state.lists.comingSoon.count}}},methods:{updateList:function(t){0===t.count&&this.$store.dispatch(i.a,{name:t.name,start:t.count,count:18})},toggleDrawer:function(){this.drawerOpen?this.drawerOpen=!1:this.drawerOpen=!0}},components:{AppBar:n.a,XScroll:o.a},created:function(){this.updateList(this.inTheaters),this.updateList(this.comingSoon)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),a=s.n(i),n=s(18),r=s.n(n),o=s(5),c=s(55);s.n(c);e.default={data:function(){return{review:null}},components:{AppBar:a.a,Stars:r.a},methods:{init:function(){this.review=new Object({title:"Loading...",content:"",rating:{value:0},author:{name:""},useful_count:0,useless_count:0,created_at:"",updated_at:"",id:0})},getReview:function(){var t=this;o.b(this.$route.params.id).then(function(e){c.merge(t.review,e)})}},activated:function(){this.$route.params.id!==this.review.id&&(this.init(),this.getReview())},created:function(){this.init(),this.getReview()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(21),a=s.n(i),n=s(58),r=s.n(n),o=s(5);e.default={data:function(){return{reviews:[],scroller:null,loading:!1,isLoaded:!1,total:0,count:0}},components:{Review:r.a},methods:{loadMore:function(){var t=this;this.loading=!0,o.c(this.$route.params.id,this.count,20).then(function(e){var s;(s=t.reviews).push.apply(s,a()(e.reviews)),t.total=e.total,(e.total=0)&&(t.loading=!1,t.isLoaded=!0)})},checkLoaded:function(){0!==this.total&&this.count===this.total&&(this.isLoaded=!0)}},watch:{reviews:function(t,e){this.count=t.length,this.checkLoaded(),this.loading=!1}},created:function(){0===this.count&&this.loadMore(),this.checkLoaded()},mounted:function(){this.scroller=this.$el}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(109),a=s.n(i),n=s(13),r=s.n(n),o=s(59),c=s.n(o),l=s(33),u=s(20);e.default={name:"small-list",data:function(){return{scroller:null,loading:!1,isLoaded:!1,listName:this.$route.name}},computed:a()({showDate:function(){return"comingSoon"===this.listName},title:function(){return"comingSoon"===this.listName?"即将上映":"inTheaters"===this.listName?"正在热映":void 0}},s.i(l.b)({subjects:function(t){return t.lists[this.listName].subjects},count:function(t){return t.lists[this.listName].count},total:function(t){return t.lists[this.listName].total}})),methods:{loadMore:function(){this.loading=!0,this.$store.dispatch(u.a,{name:this.listName,start:this.count,count:18})},checkLoaded:function(){0!==this.total&&this.count===this.total&&(this.isLoaded=!0)}},watch:{subjects:function(){this.checkLoaded(),this.loading=!1}},components:{AppBar:r.a,SmallCard:c.a},created:function(){0===this.count&&this.loadMore(),this.checkLoaded()},mounted:function(){this.scroller=this.$el}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),a=s.n(i),n=s(164),r=s.n(n),o=s(57),c=s.n(o),l=s(58),u=s.n(l),d=s(5),m=s(55);s.n(m);e.default={name:"subject",data:function(){return{subject:null,isOpen:!1,scrollTop:0,scrollHeight:0,scroller:null}},components:{AppBar:a.a,Rating:r.a,Comment:c.a,Review:u.a},computed:{photo:function(){var t=this.scrollProgress<1?this.scrollTop/2:this.scrollHeight/2;return{backgroundImage:"url("+this.subject.photos[0].image+")",transform:"translate3d(0, "+t+"px, 0)"}},image:function(){return{backgroundImage:"url("+this.subject.images.large+")"}},showOriginalTitle:function(){return this.subject.title!==this.subject.original_title&&!!this.subject.original_title},scrollProgress:function(){var t=Math.floor(this.scrollTop/this.scrollHeight*100)/100;return t<1?t:1},routeParams:function(){return{id:this.subject.id,title:this.subject.title}},searchUrl:function(){return{imdb:"http://m.imdb.com/find?q="+this.subject.original_title,rottenTomatoes:"https://www.rottentomatoes.com/search/?search="+this.subject.original_title,metacritic:"http://www.metacritic.com/search/all/"+this.subject.original_title+"/results"}}},methods:{init:function(){this.subject=new Object({id:0,title:"",original_title:"",durations:[],directors:[],writers:[],languages:[],casts:[],popular_comments:[],popular_reviews:[],rating:{average:0,details:{1:0,2:0,3:0,4:0,5:0},stars:"00"},ratings_count:0,comments_count:0,reviews_count:0,images:{large:""},summary:"",photos:[{image:""}]})},initScroller:function(){this.scroller=this.$el,this.scrollTop=0,this.scrollHeight=parseInt(.52*this.scroller.clientWidth),this.scroller.addEventListener("scroll",this.handleScroll)},preLoad:function(){this.$route.params.subject&&m.merge(this.subject,this.$route.params.subject)},loadMore:function(){var t=this;d.e(this.$route.params.id).then(function(e){m.merge(t.subject,e)})},handleScroll:function(){this.scrollTop=this.scroller.scrollTop}},activated:function(){this.initScroller(),this.$route.params.id!==this.subject.id&&(this.init(),this.preLoad(),this.loadMore())},created:function(){this.init(),this.preLoad(),this.loadMore()},mounted:function(){this.initScroller()}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){t.exports=s.p+"static/img/error.a072326.png"},function(t,e,s){function i(t){s(160)}var a=s(0)(s(91),s(189),i,"data-v-f7053f92",null);t.exports=a.exports},function(t,e,s){function i(t){s(150)}var a=s(0)(s(95),s(179),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(147)}var a=s(0)(s(96),s(176),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(153)}var a=s(0)(s(97),s(182),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(157)}var a=s(0)(s(98),s(186),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(152)}var a=s(0)(s(99),s(181),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(146)}var a=s(0)(s(100),s(175),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(154)}var a=s(0)(s(101),s(183),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(151)}var a=s(0)(s(102),s(180),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(148)}var a=s(0)(s(103),s(177),i,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:t.transition}},[s("keep-alive",[s("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page review-page"},[s("AppBar",{staticClass:"review-bar",attrs:{title:t.review.title}}),s("div",{staticClass:"review-wrapper"},["Loading..."!==t.review.title?s("h1",{staticClass:"review-title"},[t._v(t._s(t.review.title))]):t._e(),s("div",{staticClass:"review-author"},[s("Stars",{staticClass:"review-stars",attrs:{stars:t.review.rating.value+"0",size:14}}),s("div",{staticClass:"author-name"},[t._v(t._s(t.review.author.name))]),s("div",{staticClass:"useful"},[t._v("有用 "+t._s(t.review.useful_count)+" / 无用 "+t._s(t.review.useless_count))])],1),s("div",{staticClass:"dates"},[s("div",{staticClass:"date"},[t._v("创建于 "+t._s(t.review.created_at))]),s("div",{staticClass:"date"},[t._v("更新于 "+t._s(t.review.updated_at))])]),s("p",{staticClass:"review-content"},[t._v(t._s(t.review.content))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discussion-wrapper"},[s("div",{staticClass:"comment-list"},t._l(t.comments,function(t,e){return s("Comment",{key:e,attrs:{comment:t}})})),s("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading,isLoaded:t.isLoaded,loadingText:"正在加载"},on:{load:t.loadMore}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page subject-page"},[s("AppBar",{attrs:{progress:t.scrollProgress,title:t.subject.title}}),s("div",{attrs:{id:"subject"}},[s("img",{staticClass:"hidden",attrs:{src:t.subject.photos[0].image}}),s("div",{staticClass:"subject-photo",class:{"animated fadeIn":t.subject.photos[0].image},style:t.photo}),s("div",{staticClass:"subject-card"},[s("div",{staticClass:"subject-basic"},[s("div",{staticClass:"subject-image",style:t.image}),s("div",{staticClass:"subject-title"},[s("h1",[t._v(t._s(t.subject.title))]),t.showOriginalTitle?s("p",{staticClass:"original-title"},[t._v(t._s(t.subject.original_title))]):t._e(),s("p",[t._v(t._s(t.subject.year)+"  "+t._s(t._f("a2s")(t.subject.countries)))]),s("p",[t._v(t._s(t.subject.durations[0])+"  "+t._s(t._f("a2s")(t.subject.genres)))])]),s("mu-icon-menu",{staticClass:"menu",attrs:{icon:"more_vert"}},[s("mu-menu-item",{attrs:{title:"豆瓣页面",leftIcon:"launch",href:t.subject.alt}}),s("mu-divider"),s("mu-menu-item",{attrs:{title:"IMDb",leftIcon:"search",href:t.searchUrl.imdb}}),s("mu-menu-item",{attrs:{title:"Rotten Tomatoes",leftIcon:"search",href:t.searchUrl.rottenTomatoes}}),s("mu-menu-item",{attrs:{title:"Metacritic",leftIcon:"search",href:t.searchUrl.metacritic}})],1)],1),s("div",{staticClass:"subject-rating",class:{"no-rating":!t.subject.rating.average}},[t.subject.rating.average?s("rating",{attrs:{rating:t.subject.rating,count:t.subject.ratings_count}}):s("span",[t._v("暂无评分")])],1),t.subject.summary?s("div",{staticClass:"subject-detail",class:{"closed-detail":!t.isOpen}},[s("p",{staticClass:"summary"},[t._v(t._s(t.subject.summary))]),[t.subject.directors.length>0?s("div",{staticClass:"directors"},[s("div",{staticClass:"detail-title"},[t._v("导演")]),s("p",[t._v(t._s(t._f("a2s")(t._f("name")(t.subject.directors),", ")))])]):t._e(),t.subject.casts.length>0?s("div",{staticClass:"casts"},[s("div",{staticClass:"detail-title"},[t._v("主演")]),s("p",[t._v(t._s(t._f("a2s")(t._f("name")(t.subject.casts),", ")))])]):t._e(),t.subject.writers.length>0?s("div",{staticClass:"writers"},[s("div",{staticClass:"detail-title"},[t._v("编剧")]),s("p",[t._v(t._s(t._f("a2s")(t._f("name")(t.subject.writers),", ")))])]):t._e(),t.subject.languages.length>0?s("div",{staticClass:"languages"},[s("div",{staticClass:"detail-title"},[t._v("语言")]),s("p",[t._v(t._s(t._f("a2s")(t.subject.languages,", ")))])]):t._e()]],2):t._e(),s("div",{staticClass:"more-button"},[s("a",{class:{"closed-button":!t.isOpen},on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v(t._s(t.isOpen?"收起":"更多详情"))])]),s("div",{staticClass:"subject-comments"},[s("div",{staticClass:"comments-title"},[t._v("短评 ("+t._s(t.subject.comments_count)+")")]),t._l(t.subject.popular_comments,function(t,e){return s("comment",{key:e,attrs:{comment:t}})})],2),s("div",{staticClass:"more-button"},[s("router-link",{attrs:{to:{name:"comments",params:t.routeParams}}},[t._v("查看全部短评")])],1),s("div",{staticClass:"subject-comments"},[s("div",{staticClass:"comments-title"},[t._v("影评 ("+t._s(t.subject.reviews_count)+")")]),t._l(t.subject.popular_reviews.slice(0,4),function(t,e){return s("review",{key:e,attrs:{review:t}})})],2),s("div",{staticClass:"more-button"},[s("router-link",{attrs:{to:{name:"reviews",params:t.routeParams}}},[t._v("查看全部影评")])],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-appbar",{staticClass:"bar",class:{"home-bar":t.isHome},style:t.subjectStyle,attrs:{title:t.title,titleClass:{opacity:1!==t.progress&&t.isSubject}}},[s("mu-icon-button",{attrs:{slot:"left",icon:t.icon},on:{click:t.iconClick},slot:"left"}),s("mu-icon-button",{attrs:{slot:"right",icon:"search"},on:{click:t.search},slot:"right"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-paper",[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v(t._s(t.title))]),s("router-link",{attrs:{to:{name:t.listName}}},[t._v("更多")])],1),s("div",{staticClass:"scroll-wrapper"},[s("div",{staticClass:"scroll-small-cards"},[0===t.subjects.length?[s("small-card",{staticClass:"scroll-small-card",attrs:{subject:t.loadingSubject,showDate:t.showDate}}),s("small-card",{staticClass:"scroll-small-card",attrs:{subject:t.loadingSubject,showDate:t.showDate}}),s("small-card",{staticClass:"scroll-small-card",attrs:{subject:t.loadingSubject,showDate:t.showDate}}),s("small-card",{staticClass:"scroll-small-card",attrs:{subject:t.loadingSubject,showDate:t.showDate}}),s("small-card",{staticClass:"scroll-small-card",attrs:{subject:t.loadingSubject,showDate:t.showDate}})]:t._e(),t._l(t.subjects,function(e,i){return s("small-card",{key:i,staticClass:"scroll-small-card",attrs:{subject:e,showDate:t.showDate}})})],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page list-page"},[s("AppBar",{attrs:{title:t.title}}),s("div",{staticClass:"small-list"},t._l(t.subjects,function(e,i){return s("small-card",{key:i,attrs:{subject:e,showDate:t.showDate}})})),s("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading,isLoaded:t.isLoaded,loadingText:"正在加载"},on:{load:t.loadMore}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page home-page"},[s("mu-drawer",{attrs:{open:t.drawerOpen,docked:!1},on:{close:t.toggleDrawer}}),s("AppBar",{attrs:{title:"Material Douban",icon:"menu"},on:{toggle:t.toggleDrawer}}),s("div",{staticClass:"chips-wrapper"},[s("div",{staticClass:"chips"},[s("mu-chip",{staticClass:"chip"},[t._v("豆瓣新片榜")]),s("mu-chip",{staticClass:"chip"},[t._v("本周口碑榜")]),s("mu-chip",{staticClass:"chip"},[t._v("北美票房榜")]),s("mu-chip",{staticClass:"chip"},[t._v("豆瓣电影 TOP250")])],1)]),s("x-scroll",{staticClass:"scroll",attrs:{title:"正在热映",listName:"inTheaters",subjects:t.inTheaters.subjects}}),s("x-scroll",{staticClass:"scroll",attrs:{title:"即将上映",listName:"comingSoon",subjects:t.comingSoon.subjects}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page discussion-page"},[s("header",[s("AppBar",{staticClass:"discussion-bar",attrs:{title:t.title}}),s("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[s("mu-tab",{attrs:{value:"comments",title:"短评"}}),s("mu-tab",{attrs:{value:"reviews",title:"影评"}})],1)],1),s("transition",{attrs:{name:t.transition}},[s("keep-alive",[s("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discussion-wrapper"},[s("div",{staticClass:"review-list"},t._l(t.reviews,function(t,e){return s("Review",{key:e,attrs:{review:t}})})),s("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading,isLoaded:t.isLoaded,loadingText:"正在加载"},on:{load:t.loadMore}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"small-card",on:{click:function(e){t.toSubject()}}},[s("div",{staticClass:"card-image",style:{backgroundImage:"url("+t.subject.images.large+")"}}),s("div",{staticClass:"card-title"},[s("p",{staticClass:"title"},[t._v(t._s(t.subject.title))]),t.showDate?s("p",{staticClass:"subtitle"},[t._v(t._s(t.subject.mainland_pubdate))]):s("p",{staticClass:"subtitle"},[0!==t.subject.rating.average?s("mu-icon",{attrs:{value:"star"}}):t._e(),t._v(" "+t._s(t._f("rating")(t.subject.rating.average)))],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("div",{staticClass:"left"},[s("div",{staticClass:"avatar",style:{backgroundImage:"url("+t.comment.author.avatar+")"}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"head"},[s("div",[s("div",{staticClass:"name"},[t._v(t._s(t.comment.author.name))]),s("div",{staticClass:"comment-details"},[s("Stars",{staticClass:"comment-stars",attrs:{stars:t.comment.rating.value+"0",size:12}}),s("div",{staticClass:"date"},[t._v("  "+t._s(t.comment.created_at))])],1)]),s("div",{staticClass:"useful"},[t._v(t._s(t.comment.useful_count)+"  "),s("mu-icon",{attrs:{value:"thumb_up"}})],1)]),s("p",{staticClass:"content"},[t._v(t._s(t.comment.content))])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"error"}},[i("img",{staticClass:"error-img",attrs:{src:s(163)}}),i("div",{staticClass:"error-info"},[i("p",{staticClass:"error-code"},[t._v(t._s(t.$route.params.errorCode))]),i("p",[t._v("一股来自东方的神秘力量阻止了你的访问")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"review-card",on:{click:t.routeToReview}},[s("div",{staticClass:"review-title"},[t._v(t._s(t.review.title))]),s("div",{staticClass:"review-author"},[s("Stars",{staticClass:"review-stars",attrs:{stars:t.review.rating.value+"0",size:12}}),s("div",{staticClass:"author-name"},[t._v(t._s(t.review.author.name))])],1),s("div",{staticClass:"review-summary"},[t._v(t._s(t.review.summary))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stars",style:{width:5*t.size+"px"}},t._l(t.computedStars,function(e,i){return s("mu-icon",{key:i,class:e,style:{fontSize:t.size+"px"},attrs:{value:"star"}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rating"},[s("div",{staticClass:"rating-score"},[s("div",{staticClass:"inline-block"},[t._v(t._s(t._f("rating")(this.rating.average)))])]),s("div",{staticClass:"rating-middle"},[s("div",{staticClass:"inline-block"},[s("stars",{staticClass:"rating-stars",attrs:{stars:t.rating.stars}}),s("div",{staticClass:"rating-count"},[t._v(t._s(t._f("mili")(t.count))+" "),s("mu-icon",{attrs:{value:"people"}})],1)],1)]),s("div",{staticClass:"rating-details"},t._l(t.details,function(e,i){return s("div",{staticClass:"detail",style:{width:parseInt(e/t.maxDetail*100)+"%"}})}))])},staticRenderFns:[]}}],[86]);
//# sourceMappingURL=app.a380ea82cff47d0e2758.js.map