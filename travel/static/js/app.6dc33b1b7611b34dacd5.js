webpackJsonp([1],{"2/st":function(t,e){},"2B6m":function(t,e){},"43qc":function(t,e){},"6/i3":function(t,e){},"9n10":function(t,e){},A6Rn:function(t,e){},HRHZ:function(t,e){},"L+ax":function(t,e){},L2gL:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},a=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=a.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("aQD+")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var h=i("VU/8")(d,u,!1,function(t){i("nwiB")},"data-v-0460c520",null).exports,v={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=i("VU/8")(v,p,!1,function(t){i("43qc")},"data-v-30cf53cc",null).exports,m={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1},i:4,tran:!1}},methods:{backClick:function(){console.log(0);var t=this;t.i=4,t.tran=!0;var e=window.setInterval(function(){t.i--,console.log(t.i)},1e3),i=window.setTimeout(function(){window.clearInterval(e),window.clearTimeout(i),t.tran=!1},3800)}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img",on:{click:t.backClick}},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))})),t._v(" "),i("transition",{attrs:{name:"fa"}},[t.tran?i("div",{staticClass:"box1"}):t._e()]),t._v(" "),i("transition",{attrs:{name:"de"}},[t.tran?i("div",{staticClass:"box2"},[i("p",[t._v("该功能尚未开发,您可以：")]),t._v(" "),i("p",[t._v("1 左滑试试")]),t._v(" "),i("p",[t._v("2 查看“城市”页")]),t._v(" "),i("p",[t._v("3 查看“热销推荐”栏目")]),t._v(" "),i("p",{staticClass:"fontC"},[t._v(t._s(t.i))])]):t._e()])],1)},staticRenderFns:[]};var y=i("VU/8")(m,_,!1,function(t){i("6/i3")},"data-v-23c2b27f",null).exports,C={name:"HomeRecommend",props:{list:Array}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var w=i("VU/8")(C,b,!1,function(t){i("S6lr")},"data-v-6d8c9b82",null).exports,g={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var O=i("VU/8")(g,k,!1,function(t){i("zPBG")},"data-v-f89ae8b4",null).exports,j=i("mtWM"),x=i.n(j),$={name:"Home",components:{HomeHeader:h,HomeSwiper:f,HomeIcons:y,HomeRecommend:w,HomeWeekend:O},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){x.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var E=i("VU/8")($,S,!1,function(t){i("L2gL")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var I=i("VU/8")({name:"CityHeader"},L,!1,function(t){i("A6Rn")},"data-v-6e44e5fa",null).exports,H=i("GQaK"),F={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new H.a(this.$refs.search)}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var U=i("VU/8")(F,R,!1,function(t){i("dAuh")},"data-v-26ef63ed",null).exports,A={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new H.a(this.$refs.wrapper)}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var N=i("VU/8")(A,D,!1,function(t){i("rurt")},"data-v-b8b182de",null).exports,T={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var P={name:"City",components:{CityHeader:I,CitySearch:U,CityList:N,CityAlphabet:i("VU/8")(T,V,!1,function(t){i("pUt2")},"data-v-e845088a",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){x.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(P,G,!1,function(t){i("pkMt")},"data-v-2ecf0afc",null).exports,M={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(M,W,!1,function(t){i("b9Sp")},"data-v-c58ffbd6",null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var q=i("VU/8")({name:"FadeAnimation"},z,!1,function(t){i("NoWW")},"data-v-346ca73c",null).exports,Q={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:Y,FadeAnimation:q}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-tittle"},[t._v("\n        "+t._s(this.sightName)+"\n      ")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var J=i("VU/8")(Q,Z,!1,function(t){i("HRHZ")},"data-v-582ea206",null).exports,K={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(K,X,!1,function(t){i("nr0t")},"data-v-ae290668",null).exports,et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"payback",on:{click:t.handlePayClick}}),t._v(" "),i("div",{staticClass:"pay-a"}),t._v(" "),i("div",{staticClass:"pay-b"},[i("span",{staticClass:"payspan-a"},[t._v("【上午场】故宫成人票凭身份证快速入园（淡季）")]),t._v(" "),t._m(0),t._v(" "),i("span",[t._v("/张")]),t._v(" "),i("span",{staticClass:"day-ri"},[t._v("日期选择")]),t._v(" "),i("span",{staticClass:"day-jt",style:t.styleObj1,on:{click:t.headDivClick1}},[t._v("今天")]),t._v(" "),i("span",{staticClass:"day-mt",style:t.styleObj2,on:{click:t.headDivClick2}},[t._v("明天")]),t._v(" "),i("span",{staticClass:"day-ht",style:t.styleObj3,on:{click:t.headDivClick3}},[t._v("后天")]),t._v(" "),i("router-link",{attrs:{to:"/pay"}},[i("span",{staticClass:"one"},[i("a",[t._v("立即预订")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"payspan-b"},[this._v("￥"),e("em",{staticClass:"payspanem"},[this._v("100")])])}]};var it={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var st={name:"DetailList",components:{CommonPayone:i("VU/8")({name:"CommonPayone",data:function(){return{styleObj1:{background:"",color:""},styleObj2:{background:"",color:""},styleObj3:{background:"",color:""}}},methods:{handlePayClick:function(){this.$emit("close"),this.styleObj1.background="",this.styleObj2.background="",this.styleObj3.background="",this.styleObj1.color="",this.styleObj2.color="",this.styleObj3.color=""},headDivClick1:function(){this.styleObj1.background=""===this.styleObj1.background?"#00bcd4":"",this.styleObj1.color=""===this.styleObj1.color?"#fff":"",this.styleObj3.background="#00bcd4",(this.styleObj2.background="#00bcd4")&&(this.styleObj3.background="",this.styleObj3.color="",this.styleObj2.background="",this.styleObj2.color="")},headDivClick2:function(){this.styleObj2.background=""===this.styleObj2.background?"#00bcd4":"",this.styleObj2.color=""===this.styleObj2.color?"#fff":"",this.styleObj3.background="#00bcd4",(this.styleObj1.background="#00bcd4")&&(this.styleObj3.background="",this.styleObj3.color="",this.styleObj1.background="",this.styleObj1.color="")},headDivClick3:function(){this.styleObj3.background=""===this.styleObj3.background?"#00bcd4":"",this.styleObj3.color=""===this.styleObj3.color?"#fff":"",this.styleObj1.background="#00bcd4",(this.styleObj2.background="#00bcd4")&&(this.styleObj1.background="",this.styleObj1.color="",this.styleObj2.background="",this.styleObj2.color="")}}},et,!1,function(t){i("2B6m")},"data-v-2cfb0ff8",null).exports,Fadeone:i("VU/8")({name:"FadeAnimation"},it,!1,function(t){i("atB3")},"data-v-734dd0e4",null).exports},props:{list:Array},data:function(){return{showPayone:!1}},methods:{handleBannerClick:function(){this.showPayone=!0,this.$emit("cssone")},handlePayClose:function(){this.showPayone=!1}}},at={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("div",{staticClass:"onen"},[t._v(t._s(e.children))]),t._v(" "),i("div",{staticClass:"onen-a"},[i("a",{staticClass:"font-a"},[t._v("￥100")]),t._v(" "),i("span",{staticStyle:{"font-weight":"bold"}},[i("a",{staticClass:"font-b",on:{click:t.handleBannerClick}},[t._v(" | 预订")])])])]):t._e()])}),t._v(" "),i("fadeone",[i("common-payone",{directives:[{name:"show",rawName:"v-show",value:t.showPayone,expression:"showPayone"}],on:{close:t.handlePayClose}})],1)],2)},staticRenderFns:[]};var nt={name:"Detail",components:{DetailBanner:J,DetailHeader:tt,DetailList:i("VU/8")(st,at,!1,function(t){i("2/st")},"data-v-1fc4b065",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){x.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var ot=i("VU/8")(nt,rt,!1,function(t){i("L+ax")},"data-v-4653fbca",null).exports,ct={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},lt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header"},[i("div",{staticClass:"header-left"},[i("router-link",{attrs:{to:"/detail/0001"}},[i("div",{staticClass:"iconfont back-icon color-font"},[t._v("")])])],1),t._v(" "),i("div",{staticClass:"header-input"},[t._v("\n      订单填写\n    ")])]),t._v(" "),i("div",{staticClass:"gela"}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"gela"}),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"gela-a"}),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btia"},[e("div",{staticClass:"btia-a"},[this._v("【上午场】故宫成人票凭身份证快速入园（淡季）")]),this._v(" "),e("div",{staticClass:"btia-b"},[e("em",[this._v("￥150")]),e("br"),this._v(" /张")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bgie"},[i("div",{staticClass:"bgie-a"},[i("label",{staticClass:"mpw-row-field"},[t._v("游客1")]),t._v(" "),i("div",{},[i("input",{staticClass:"mpw-input",attrs:{value:"",type:"text",placeholder:"游客姓名"}})])]),t._v(" "),i("div",{staticClass:"bgie-a"},[i("label",{staticClass:"mpw-row-field"},[t._v("手机号")]),t._v(" "),i("div",{},[i("input",{staticClass:"mpw-input",attrs:{value:"",type:"text",placeholder:"请输入手机号"}})])]),t._v(" "),i("div",{staticClass:"bgie-a"},[i("label",{staticClass:"mpw-row-field"},[t._v("身份证")]),t._v(" "),i("div",{},[i("input",{staticClass:"mpw-input",attrs:{value:"",type:"text",placeholder:"请填写正确的身份证号"}})])]),t._v(" "),i("div",{staticClass:"bgie-a"},[i("label",{staticClass:"mpw-row-field"},[t._v("票数")]),t._v(" "),i("div",{},[i("input",{staticClass:"mpw-input",attrs:{value:"",type:"text",placeholder:"默认 1 张"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-bottom"},[e("span",{staticClass:"one"},[e("a",[this._v("立即预订")])])])}]};var dt=i("VU/8")(ct,lt,!1,function(t){i("rm2Y")},"data-v-6b7e9186",null).exports;s.a.use(r.a);var ut=new r.a({routes:[{path:"/",name:"Home",component:E},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:ot},{path:"/pay",name:"Pay",component:dt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ht=i("v5o6"),vt=i.n(ht),pt=i("F3EI"),ft=i.n(pt),mt=(i("j1ja"),"上海");try{localStorage.city&&(mt=localStorage.city)}catch(t){}var _t={city:mt},yt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var Ct=new l.a.Store({state:_t,mutations:yt});i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,vt.a.attach(document.body),s.a.use(ft.a),new s.a({el:"#app",router:ut,store:Ct,components:{App:n},template:"<App/>"})},NoWW:function(t,e){},S6lr:function(t,e){},TzC8:function(t,e){},"aQD+":function(t,e){},atB3:function(t,e){},b9Sp:function(t,e){},dAuh:function(t,e){},nr0t:function(t,e){},nwiB:function(t,e){},pUt2:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(a,n,!1,null,null,null);e.default=r.exports},pkMt:function(t,e){},rm2Y:function(t,e){},rurt:function(t,e){},v2ns:function(t,e){},zPBG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6dc33b1b7611b34dacd5.js.map