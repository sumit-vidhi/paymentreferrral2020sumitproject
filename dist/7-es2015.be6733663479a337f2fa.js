(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9kKi":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),r=t("iInd"),o=t("SVse");class a{constructor(l,n){this.elementRef=l,this.router=n,this.maxLength=100,this.hideToggle=!0,this.isCollapsed=!0}toggleView(){this.isCollapsed=!this.isCollapsed,this.determineView()}detailPage(){this.router.navigate(["/blog/blog-detail/"+this.id])}determineView(){if(!this.text||this.text.length<=this.maxLength)return this.currentText=this.text,this.isCollapsed=!1,void(this.hideToggle=!0);this.hideToggle=!1,1==this.isCollapsed?this.currentText=this.text.substring(0,this.maxLength)+"...":0==this.isCollapsed&&(this.currentText=this.text)}ngOnChanges(){this.determineView()}}var s=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["class","btn btn-transparent btn-orange btn-radius"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.detailPage()&&e),e}),null,null)),(l()(),e["\u0275ted"](-1,null,["Read more"]))],null,(function(l,n){l(n,0,0,n.component.currentText)}))}var d=t("/JoM"),g=t("NnmH"),h=t("7YMw"),p=t("ycdH"),v=t("EwUl");let f=(()=>{class l{constructor(l){this.commonHttp=l}getBlog(l){return this.commonHttp.post(v.a.blog.getBlog,l)}getUrl(l){return this.commonHttp.post(v.a.blog.getUrl,l)}getBlogById(l){return this.commonHttp.post(v.a.blog.getBlogById,l)}}return l.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new l(e["\u0275\u0275inject"](p.a))},token:l,providedIn:"root"}),l})();class b{constructor(l,n,t,e){this.authService=l,this.blogService=n,this.loginService=t,this.loader=e}ngOnInit(){this.getUrl()}getUrl(){this.loader.startLoading();const l=this.loginService.getSponserUserId();this.blogService.getUrl({id:l}).subscribe(l=>{"success"==l.status&&(this.mmeUrl=l.record.mmeUrl,this.freeUrl=l.record.freeUrl,this.getBlog())})}getBlog(){const l=this.loginService.getPlan();this.blogService.getBlog({plan:l}).subscribe(l=>{this.loader.stopLoading(),"success"==l.status&&(this.blogData=l.record,this.blogData=this.blogData.map(l=>(l.description=l.description.replace("{{MME_URL}}",this.mmeUrl),l.description=l.description.replace("{{FREE_URL}}",this.freeUrl),l)))})}}var m=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","single-blog-post"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","post-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](4,671744,null,0,r.o,[r.l,r.a,o.j],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,3,"div",[["class","post-image my-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,2,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](8,671744,null,0,r.o,[r.l,r.a,o.j],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](9,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,3,"div",[["class","post-excerpt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"read-more",[],null,null,null,c,s)),e["\u0275did"](13,573440,null,0,a,[e.ElementRef,r.l],{text:[0,"text"],id:[1,"id"],maxLength:[2,"maxLength"]},null)],(function(l,n){l(n,4,0,e["\u0275inlineInterpolate"](1,"/blog/blog-detail/",n.context.$implicit.blogslug,"")),l(n,8,0,e["\u0275inlineInterpolate"](1,"/blog/blog-detail/",n.context.$implicit.blogslug,"")),l(n,13,0,n.context.$implicit.description,n.context.$implicit.blogslug,200)}),(function(l,n){l(n,3,0,e["\u0275nov"](n,4).target,e["\u0275nov"](n,4).href),l(n,5,0,n.context.$implicit.title),l(n,7,0,e["\u0275nov"](n,8).target,e["\u0275nov"](n,8).href),l(n,9,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.image,""))}))}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,9,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,7,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,4,"div",[["class","blog-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Down Line Club Blog"])),(l()(),e["\u0275eld"](7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["News, Updates & Customer Sportlights"])),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](10,278528,null,0,o.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.component.blogData)}),null)}function U(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","/auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](1,671744,null,0,r.o,[r.l,r.a,o.j],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Get Started Now!"])),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Credit Card Required"]))],(function(l,n){l(n,1,0,"/auth/signup")}),(function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href)}))}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](1,16384,null,0,o.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](2,0,null,null,5,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,4,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Easy Start. More Earning. Better Business."])),(l()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](7,16384,null,0,o.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.blogData&&t.blogData.length>0),l(n,7,0,!t.loginService.IsAuthUser())}),null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-blog",[],null,null,null,L,m)),e["\u0275did"](1,114688,null,0,b,[d.a,f,g.a,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=e["\u0275ccf"]("app-blog",b,I,{},{},[]);class w{constructor(l,n,t,e,u){this.authService=l,this.blogService=n,this.loginService=t,this.loader=e,this.route=u}ngOnInit(){this.getUrl()}getUrl(){const l=this.loginService.getSponserUserId();this.blogService.getUrl({id:l}).subscribe(l=>{"success"==l.status&&(this.mmeUrl=l.record.mmeUrl,this.freeUrl=l.record.freeUrl,this.route.paramMap.subscribe(l=>{const n=l.get("id");this.getBlogById(n)}))})}getBlogById(l){this.loader.startLoading();const n=this.loginService.getPlan();this.blogService.getBlogById({plan:n,id:l}).subscribe(l=>{this.loader.stopLoading(),"success"==l.status&&(this.blogData=l.record,this.blogData=this.blogData.map(l=>(l.description=l.description.replace("{{MME_URL}}",this.mmeUrl),l.description=l.description.replace("{{FREE_URL}}",this.freeUrl),l)),this.blogData=this.blogData[0],console.log(this.blogData))})}}var C=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,11,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,10,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,5,"div",[["class","blog-header position-relative mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,2,"a",[["class","back-arrow"],["href","javascript:void(0)"],["routerLink","/blog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](6,671744,null,0,r.o,[r.l,r.a,o.j],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](7,0,null,null,0,"img",[["alt","Go to blog"],["src","/assets/images/left-arrow.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275eld"](10,0,null,null,2,"div",[["class","post-image position-relative my-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"div",[["class","social-share"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,6,0,"/blog")}),(function(l,n){var t=n.component;l(n,5,0,e["\u0275nov"](n,6).target,e["\u0275nov"](n,6).href),l(n,9,0,t.blogData.title),l(n,12,0,e["\u0275inlineInterpolate"](1,"",t.blogData.image,"")),l(n,13,0,t.blogData.description)}))}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](1,16384,null,0,o.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](2,0,null,null,9,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,8,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Easy Start. More Earning. Better Business."])),(l()(),e["\u0275eld"](6,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](7,671744,null,0,r.o,[r.l,r.a,o.j],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Get Started Now!"])),(l()(),e["\u0275eld"](10,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Credit Card Required"]))],(function(l,n){l(n,1,0,n.component.blogData),l(n,7,0,"auth/signup")}),(function(l,n){l(n,6,0,e["\u0275nov"](n,7).target,e["\u0275nov"](n,7).href)}))}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-blog-detail",[],null,null,null,B,C)),e["\u0275did"](1,114688,null,0,w,[d.a,f,g.a,h.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e["\u0275ccf"]("app-blog-detail",w,R,{},{},[]);class M{constructor(l,n,t,e,u){this.authService=l,this.blogService=n,this.loginService=t,this.loader=e,this.route=u}ngOnInit(){this.getUrl()}getUrl(){const l=this.loginService.getSponserUserId();this.blogService.getUrl({id:l}).subscribe(l=>{"success"==l.status&&(this.mmeUrl=l.record.mmeUrl,this.freeUrl=l.record.freeUrl,this.route.paramMap.subscribe(l=>{const n=l.get("id");this.getBlogById(n)}))})}getBlogById(l){this.loader.startLoading();const n=this.loginService.getPlan();this.blogService.getBlogById({plan:n,id:l}).subscribe(l=>{this.loader.stopLoading(),"success"==l.status&&(this.blogData=l.record,this.blogData=this.blogData.map(l=>(l.description=l.description.replace("{{MME_URL}}",this.mmeUrl),l.description=l.description.replace("{{FREE_URL}}",this.freeUrl),l)),this.blogData=this.blogData[0],console.log(this.blogData))})}}var E=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function j(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,9,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,7,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","blog-header position-relative mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","post-image position-relative my-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"div",[["class","social-share"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){var t=n.component;l(n,6,0,t.blogData.title),l(n,9,0,e["\u0275inlineInterpolate"](1,"",t.blogData.image,"")),l(n,10,0,t.blogData.description)}))}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,j)),e["\u0275did"](1,16384,null,0,o.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](2,0,null,null,9,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,8,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Easy Start. More Earning. Better Business."])),(l()(),e["\u0275eld"](6,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](7,671744,null,0,r.o,[r.l,r.a,o.j],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Get Started Now!"])),(l()(),e["\u0275eld"](10,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Credit Card Required"]))],(function(l,n){l(n,1,0,n.component.blogData),l(n,7,0,"auth/signup")}),(function(l,n){l(n,6,0,e["\u0275nov"](n,7).target,e["\u0275nov"](n,7).href)}))}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-blog-page",[],null,null,null,K,E)),e["\u0275did"](1,114688,null,0,M,[d.a,f,g.a,h.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var F=e["\u0275ccf"]("app-blog-page",M,T,{},{},[]),N=t("x4NB");const V={title:"Blog"},H={title:"Downline Club's Epic Guide to Affiliate Marketing"},A={title:"Downline Club's Epic Guide to Affiliate Marketing"};let O=(()=>{class l{}return l.providers=[N.a],l})();var _=t("FpXt");t.d(n,"BlogModuleNgFactory",(function(){return G}));var G=e["\u0275cmf"](u,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,S,x,F]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.o,o.n,[e.LOCALE_ID,[2,o.F]]),e["\u0275mpd"](4608,N.a,N.a,[p.a]),e["\u0275mpd"](1073742336,o.b,o.b,[]),e["\u0275mpd"](1073742336,r.p,r.p,[[2,r.u],[2,r.l]]),e["\u0275mpd"](1073742336,O,O,[]),e["\u0275mpd"](1073742336,_.a,_.a,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,r.j,(function(){return[[{path:"blog",component:b,data:V},{path:"blog/blog-detail/:id",component:w,data:H},{path:"blog/:id",component:M,data:A}]]}),[])])}))}}]);