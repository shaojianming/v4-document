(window.webpackJsonp=window.webpackJsonp||[]).push([[1,89,92,95,96,97,101,102,115],{334:function(t,e,s){"use strict";s.r(e);var a=s(17),i={props:{item:{required:!0}},computed:{link(){return Object(a.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:a.g,isMailto:a.h,isTel:a.i,focusoutAction(){this.$emit("focusout")}}},r=s(12),n=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=n.exports},338:function(t,e,s){},339:function(t,e,s){},340:function(t,e,s){},347:function(t,e,s){},348:function(t,e,s){},349:function(t,e,s){},355:function(t,e,s){"use strict";s.r(e);s(36);var a={props:{category:{type:String,default:""},tag:{type:String,default:""},currentPage:{type:Number,default:1},perPage:{type:Number,default:10}},data:()=>({sortPosts:[],postListOffsetTop:0}),created(){this.setPosts()},mounted(){},watch:{currentPage(){this.$route.query.p!=this.currentPage&&this.$router.push({query:{...this.$route.query,p:this.currentPage}}),this.setPosts()},category(){this.setPosts()},tag(){this.setPosts()}},methods:{setPosts(){const t=this.currentPage,e=this.perPage;let s=[];s=this.category?this.$groupPosts.categories[this.category]:this.tag?this.$groupPosts.tags[this.tag]:this.$sortPosts,this.sortPosts=s.slice((t-1)*e,t*e)}}},i=(s(360),s(12)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{ref:"postList",staticClass:"post-list"},[e("transition-group",{attrs:{tag:"div",name:"post"}},t._l(t.sortPosts,(function(s){return e("div",{key:s.key,staticClass:"post card-box",class:s.frontmatter.sticky&&"iconfont icon-zhiding"},[e("div",{staticClass:"title-wrapper"},[e("h2",[e("router-link",{attrs:{to:s.path}},[t._v(t._s(s.title))])],1),t._v(" "),e("div",{staticClass:"article-info"},[s.author&&s.author.href?e("a",{staticClass:"iconfont icon-touxiang",attrs:{title:"作者",target:"_blank",href:s.author.href}},[t._v(t._s(s.author.name?s.author.name:s.author))]):s.author?e("span",{staticClass:"iconfont icon-touxiang",attrs:{title:"作者"}},[t._v(t._s(s.author.name?s.author.name:s.author))]):t._e(),t._v(" "),s.frontmatter.date?e("span",{staticClass:"iconfont icon-riqi",attrs:{title:"创建时间"}},[t._v(t._s(s.frontmatter.date.split(" ")[0]))]):t._e(),t._v(" "),!1!==t.$themeConfig.category&&s.frontmatter.categories?e("span",{staticClass:"iconfont icon-wenjian",attrs:{title:"分类"}},t._l(s.frontmatter.categories,(function(s,a){return e("router-link",{key:a,attrs:{to:"/categories/?category="+encodeURIComponent(s)}},[t._v(t._s(s))])})),1):t._e(),t._v(" "),!1!==t.$themeConfig.tag&&s.frontmatter.tags&&s.frontmatter.tags[0]?e("span",{staticClass:"iconfont icon-biaoqian tags",attrs:{title:"标签"}},t._l(s.frontmatter.tags,(function(s,a){return e("router-link",{key:a,attrs:{to:"/tags/?tag="+encodeURIComponent(s)}},[t._v(t._s(s))])})),1):t._e()])]),t._v(" "),s.excerpt?e("div",{staticClass:"excerpt-wrapper"},[e("div",{staticClass:"excerpt",domProps:{innerHTML:t._s(s.excerpt)}}),t._v(" "),e("router-link",{staticClass:"readmore iconfont icon-jiantou-you",attrs:{to:s.path}},[t._v("阅读全文")])],1):t._e()])})),0)],1)}),[],!1,null,null,null);e.default=r.exports},356:function(t,e,s){"use strict";s.r(e);var a={props:{total:{type:Number,default:10},perPage:{type:Number,default:10},currentPage:{type:Number,default:1}},computed:{pages(){return Math.ceil(this.total/this.perPage)}},methods:{threeNum(){let t=3;const e=this.currentPage,s=this.pages;return t=e<3?3:e>s-3?s-2:e,t},goPrex(){let t=this.currentPage;t>1&&this.handleEmit(--t)},goNext(){let t=this.currentPage;t<this.pages&&this.handleEmit(++t)},goIndex(t){t!==this.currentPage&&this.handleEmit(t)},handleEmit(t){this.$emit("getCurrentPage",t)}}},i=(s(361),s(12)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("span",{staticClass:"card-box prev iconfont icon-jiantou-zuo",class:{disabled:1===t.currentPage},on:{click:function(e){return t.goPrex()}}},[e("p",[t._v("上一页")])]),t._v(" "),t.pages<=5?e("div",{staticClass:"pagination-list"},t._l(t.pages,(function(s){return e("span",{key:s,staticClass:"card-box",class:{active:t.currentPage===s},on:{click:function(e){return t.goIndex(s)}}},[t._v(t._s(s))])})),0):e("div",{staticClass:"pagination-list"},[e("span",{staticClass:"card-box",class:{active:1===t.currentPage},on:{click:function(e){return t.goIndex(1)}}},[t._v("1")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.currentPage>3,expression:"currentPage > 3"}],staticClass:"ellipsis ell-two",attrs:{title:"上两页"},on:{click:function(e){return t.goIndex(t.currentPage-2)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.currentPage<=3,expression:"currentPage <= 3"}],staticClass:"card-box",class:{active:2===t.currentPage},on:{click:function(e){return t.goIndex(2)}}},[t._v("2")]),t._v(" "),e("span",{staticClass:"card-box",class:{active:t.currentPage>=3&&t.currentPage<=t.pages-2},on:{click:function(e){t.goIndex(t.threeNum())}}},[t._v(t._s(t.threeNum()))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.currentPage<t.pages-2,expression:"currentPage < (pages - 2)"}],staticClass:"ellipsis ell-four",attrs:{title:"下两页"},on:{click:function(e){return t.goIndex(t.currentPage+2)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.currentPage>=t.pages-2,expression:"currentPage >= (pages - 2)"}],staticClass:"card-box",class:{active:t.currentPage===t.pages-1},on:{click:function(e){return t.goIndex(t.pages-1)}}},[t._v(t._s(t.pages-1))]),t._v(" "),e("span",{staticClass:"card-box",class:{active:t.currentPage===t.pages},on:{click:function(e){return t.goIndex(t.pages)}}},[t._v(t._s(t.pages))])]),t._v(" "),e("span",{staticClass:"card-box next iconfont icon-jiantou-you",class:{disabled:t.currentPage===t.pages},on:{click:function(e){return t.goNext()}}},[e("p",[t._v("下一页")])])])}),[],!1,null,null,null);e.default=r.exports},358:function(t,e,s){"use strict";s.r(e);s(359);var a=s(12),i=Object(a.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"main-wrapper"},[t("div",{staticClass:"main-left"},[this._t("mainLeft")],2),this._v(" "),t("div",{staticClass:"main-right"},[this._t("mainRight")],2)])}),[],!1,null,null,null);e.default=i.exports},359:function(t,e,s){"use strict";s(338)},360:function(t,e,s){"use strict";s(339)},361:function(t,e,s){"use strict";s(340)},375:function(t,e,s){},379:function(t,e,s){"use strict";s(347)},382:function(t,e,s){"use strict";s(348)},383:function(t,e,s){"use strict";s(349)},398:function(t,e,s){"use strict";s.r(e);var a={props:{category:{type:String,default:""},categoriesData:{type:Array,default:[]},length:{type:[String,Number],default:"all"}},computed:{categories(){return"all"===this.length?this.categoriesData:this.categoriesData.slice(0,this.length)}}},i=(s(379),s(12)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categories-wrapper card-box"},[e("router-link",{staticClass:"title iconfont icon-wenjianjia",attrs:{to:"/categories/",title:"全部分类"}},[t._v(t._s("all"===t.length?"全部分类":"文章分类"))]),t._v(" "),e("div",{staticClass:"categories"},[t._l(t.categories,(function(s,a){return e("router-link",{key:a,class:{active:s.key===t.category},attrs:{to:"/categories/?category="+encodeURIComponent(s.key)}},[t._v("\n      "+t._s(s.key)+"\n      "),e("span",[t._v(t._s(s.length))])])})),t._v(" "),"all"!==t.length&&t.length<t.categoriesData.length?e("router-link",{staticClass:"more",attrs:{to:"/categories/"}},[t._v("更多 ...")]):t._e()],2)],1)}),[],!1,null,null,null);e.default=r.exports},399:function(t,e,s){"use strict";s.r(e);var a={name:"UpdateArticle",props:{length:{type:[String,Number],default:3},moreArticle:String},data:()=>({posts:[],currentPath:""}),created(){this.posts=this.$site.pages,this.currentPath=this.$page.path},computed:{topPublishPosts(){return this.$sortPostsByDate?this.$sortPostsByDate.filter(t=>{const{path:e}=t;return e!==this.currentPath}).slice(0,this.length):[]},isShowArticle(){const{frontmatter:t}=this.$page;return!(!1!==t.article)}},methods:{getNum:t=>t<9?"0"+(t+1):t+1,getDate:t=>t.frontmatter.date?t.frontmatter.date.split(" ")[0].slice(5,10):""},watch:{$route(){this.currentPath=this.$page.path}}},i=(s(382),s(12)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{class:["article-list",{"no-article-list":t.isShowArticle}]},[e("div",{staticClass:"article-title"},[e("router-link",{staticClass:"iconfont icon-bi",attrs:{to:t.moreArticle||"/archives/"}},[t._v("最近更新")])],1),t._v(" "),e("div",{staticClass:"article-wrapper"},[t._l(t.topPublishPosts,(function(s,a){return e("dl",{key:a},[e("dd",[t._v(t._s(t.getNum(a)))]),t._v(" "),e("dt",[e("router-link",{attrs:{to:s.path}},[e("div",[t._v(t._s(s.title))])]),t._v(" "),e("span",[t._v(t._s(t.getDate(s)))])],1)])})),t._v(" "),e("dl",[e("dd"),t._v(" "),e("dt",[e("router-link",{staticClass:"more",attrs:{to:t.moreArticle||"/archives/"}},[t._v("更多文章>")])],1)])],2)])}),[],!1,null,null,null);e.default=r.exports},400:function(t,e,s){"use strict";s.r(e);s(36);var a={props:{tag:{type:String,default:""},tagsData:{type:Array,default:[]},length:{type:[String,Number],default:"all"}},data:()=>({tagBgColor:["#11a8cd","#F8B26A","#67CC86","#E15B64","#F47E60","#849B87"],tagStyleList:[]}),created(){for(let t=0,e=this.tags.length;t<e;t++)this.tagStyleList.push(this.getTagStyle())},computed:{tags(){return"all"===this.length?this.tagsData:this.tagsData.slice(0,this.length)}},methods:{getTagStyle(){const t=this.tagBgColor,e=t[Math.floor(Math.random()*t.length)];return`background: ${e};--randomColor:${e};`}}},i=(s(383),s(12)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags-wrapper card-box"},[e("router-link",{staticClass:"title iconfont icon-biaoqian1",attrs:{to:"/tags/",title:"全部标签"}},[t._v(t._s("all"===t.length?"全部标签":"热门标签"))]),t._v(" "),e("div",{staticClass:"tags"},[t._l(t.tags,(function(s,a){return[e("router-link",{key:a,class:{active:s.key===t.tag},style:t.tagStyleList[a],attrs:{to:"/tags/?tag="+encodeURIComponent(s.key)}},[t._v(t._s(s.key))]),t._v(" "),e("span",{key:a+t.tags.length})]})),t._v(" "),"all"!==t.length&&t.tagsData.length>t.length?e("router-link",{attrs:{to:"/tags/"}},[t._v("更多...")]):t._e()],2)],1)}),[],!1,null,null,null);e.default=r.exports},413:function(t,e,s){"use strict";s(375)},434:function(t,e,s){},507:function(t,e,s){"use strict";s.r(e);var a={computed:{blogger(){return this.$themeConfig.blogger},social(){return this.$themeConfig.social}}},i=(s(413),s(12)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"blogger-wrapper card-box"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.blogger.avatar,alt:"头像",title:"我好看吗"}})]),t._v(" "),t.social&&t.social.icons&&t.social.icons.length?e("div",{staticClass:"icons"},t._l(t.social.icons,(function(s,a){return e("a",{key:a,class:["iconfont",s.iconClass],style:{width:100/t.social.icons.length+"%"},attrs:{href:s.link,title:s.title,target:"_blank"}})})),0):t._e(),t._v(" "),e("div",{staticClass:"blogger"},[e("span",{staticClass:"name"},[t._v(t._s(t.blogger.name))]),t._v(" "),e("span",{staticClass:"slogan"},[t._v(t._s(t.blogger.slogan))])])])}),[],!1,null,null,null);e.default=r.exports},518:function(t,e,s){"use strict";s(434)},605:function(t,e,s){"use strict";s.r(e);var a=s(334),i=s(516),r=s(517),n=s(358),o=s(355),l=s(399),c=s(356),u=s(507),h=s(398),g=s(400);i.a.use(r.a);var d={data:()=>({isMQMobile:!1,slide:null,currentPageIndex:0,playTimer:0,mark:0,total:0,perPage:10,currentPage:1}),computed:{homeData(){return{...this.$page.frontmatter}},hasFeatures(){return!(!this.homeData.features||!this.homeData.features.length)},homeSidebarB(){const{htmlModules:t}=this.$themeConfig;return t?t.homeSidebarB:""},showBanner(){return!(this.$route.query.p&&1!=this.$route.query.p&&(!this.homeData.postList||"detailed"===this.homeData.postList))},bannerBgStyle(){let t=this.homeData.bannerBg;return t&&"auto"!==t?"none"===t?this.$themeConfig.bodyBgImg?"":"background: var(--mainBg);color: var(--textColor)":t.indexOf("background")>-1?t:t.indexOf(".")>-1?`background: url(${this.$withBase(t)}) center center / cover no-repeat`:void 0:this.$themeConfig.bodyBgImg?"":"background: rgb(40,40,45) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVFhH7c6xCQAgDAVRR9A6E4hLu4uLiWJ7tSnuQcIvr2TRYsw3/zOGGEOMIcYQY4gxxBhiDDGGGEOMIcYQY4gxxBhiDLkx52W4Gn1tuslCtHJvL54AAAAASUVORK5CYII=)"},actionLink(){return{link:this.homeData.actionLink,text:this.homeData.actionText}}},components:{NavLink:a.default,MainLayout:n.default,PostList:o.default,UpdateArticle:l.default,BloggerBar:u.default,CategoriesBar:h.default,TagsBar:g.default,Pagination:c.default},created(){this.total=this.$sortPosts.length},beforeMount(){this.isMQMobile=window.innerWidth<720},mounted(){this.$route.query.p&&(this.currentPage=Number(this.$route.query.p)),!this.hasFeatures||!this.isMQMobile||this.$route.query.p&&1!=this.$route.query.p||this.init(),this.hasFeatures&&window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720,!this.isMQMobile||this.slide||this.mark||(this.mark++,setTimeout(()=>{this.init()},60))})},beforeDestroy(){clearTimeout(this.playTimer),this.slide&&this.slide.destroy()},watch:{"$route.query.p"(){this.$route.query.p?this.currentPage=Number(this.$route.query.p):this.currentPage=1,this.hasFeatures&&1===this.currentPage&&this.isMQMobile&&setTimeout(()=>{this.slide&&this.slide.destroy(),this.init()},0)}},methods:{init(){clearTimeout(this.playTimer),this.slide=new i.a(this.$refs.slide,{scrollX:!0,scrollY:!1,slide:{loop:!0,threshold:100},useTransition:!0,momentum:!1,bounce:!1,stopPropagation:!1,probeType:2,preventDefault:!1}),this.slide.on("beforeScrollStart",()=>{clearTimeout(this.playTimer)}),this.slide.on("scrollEnd",()=>{this.autoGoNext()}),this.slide.on("slideWillChange",t=>{this.currentPageIndex=t.pageX}),this.autoGoNext()},autoGoNext(){clearTimeout(this.playTimer),this.playTimer=setTimeout(()=>{this.slide.next()},4e3)},handlePagination(t){this.currentPage=t},getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}},p=(s(518),s(12)),m=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-wrapper"},[e("div",{staticClass:"banner",class:{"hide-banner":!t.showBanner},style:t.bannerBgStyle},[e("div",{staticClass:"banner-conent",style:!t.homeData.features&&!t.homeData.heroImage&&"padding-top: 7rem"},[e("header",{staticClass:"hero"},[t.homeData.heroImage?e("img",{attrs:{src:t.$withBase(t.homeData.heroImage),alt:t.homeData.heroAlt}}):t._e(),t._v(" "),t.homeData.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n          "+t._s(t.homeData.heroText)+"\n        ")]):t._e(),t._v(" "),t.homeData.tagline?e("p",{staticClass:"description"},[t._v("\n          "+t._s(t.homeData.tagline)+"\n        ")]):t._e(),t._v(" "),t.homeData.actionText&&t.homeData.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.hasFeatures&&!t.isMQMobile?e("div",{staticClass:"features"},t._l(t.homeData.features,(function(s,a){return e("div",{key:a,staticClass:"feature"},[s.link?e("router-link",{attrs:{to:s.link}},[s.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(s.imgUrl),alt:s.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])]):e("a",{attrs:{href:"javascript:;"}},[s.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(s.imgUrl),alt:s.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])],1)})),0):t._e()]),t._v(" "),t.hasFeatures?e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMQMobile,expression:"isMQMobile"}],staticClass:"slide-banner"},[e("div",{staticClass:"banner-wrapper"},[e("div",{ref:"slide",staticClass:"slide-banner-scroll"},[e("div",{staticClass:"slide-banner-wrapper"},t._l(t.homeData.features,(function(s,a){return e("div",{key:a,staticClass:"slide-item"},[s.link?e("router-link",{attrs:{to:s.link}},[s.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(s.imgUrl),alt:s.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])]):e("a",{attrs:{href:"javascript:;"}},[s.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(s.imgUrl),alt:s.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])],1)})),0)]),t._v(" "),e("div",{staticClass:"docs-wrapper"},t._l(t.homeData.features.length,(function(s,a){return e("span",{key:a,staticClass:"doc",class:{active:t.currentPageIndex===a}})})),0)])]):t._e()]),t._v(" "),e("MainLayout",{scopedSlots:t._u([{key:"mainLeft",fn:function(){return["simple"===t.homeData.postList?e("UpdateArticle",{staticClass:"card-box",attrs:{length:t.homeData.simplePostListLength||10}}):t.homeData.postList&&"detailed"!==t.homeData.postList?t._e():[e("PostList",{attrs:{currentPage:t.currentPage,perPage:t.perPage}}),t._v(" "),e("Pagination",{directives:[{name:"show",rawName:"v-show",value:Math.ceil(t.total/t.perPage)>1,expression:"Math.ceil(total / perPage) > 1"}],attrs:{total:t.total,perPage:t.perPage,currentPage:t.currentPage},on:{getCurrentPage:t.handlePagination}})],t._v(" "),e("Content",{staticClass:"theme-vdoing-content custom card-box"})]},proxy:!0},{key:"mainRight",fn:function(){return[t.$themeConfig.blogger?e("BloggerBar"):t._e(),t._v(" "),!1!==t.$themeConfig.category&&t.$categoriesAndTags.categories.length?e("CategoriesBar",{attrs:{categoriesData:t.$categoriesAndTags.categories,length:10}}):t._e(),t._v(" "),!1!==t.$themeConfig.tag&&t.$categoriesAndTags.tags.length?e("TagsBar",{attrs:{tagsData:t.$categoriesAndTags.tags,length:30}}):t._e(),t._v(" "),t.homeSidebarB?e("div",{staticClass:"custom-html-box card-box",domProps:{innerHTML:t._s(t.homeSidebarB)}}):t._e()]},proxy:!0}])})],1)}),[],!1,null,"011948d0",null);e.default=m.exports}}]);