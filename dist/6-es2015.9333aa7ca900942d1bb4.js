(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9kKi":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),r=u("iInd"),s=u("SVse");class o{constructor(l){this.elementRef=l,this.maxLength=100,this.hideToggle=!0,this.isCollapsed=!0}toggleView(){this.isCollapsed=!this.isCollapsed,this.determineView()}determineView(){if(!this.text||this.text.length<=this.maxLength)return this.currentText=this.text,this.isCollapsed=!1,void(this.hideToggle=!0);this.hideToggle=!1,1==this.isCollapsed?this.currentText=this.text.substring(0,this.maxLength)+"...":0==this.isCollapsed&&(this.currentText=this.text)}ngOnChanges(){this.determineView()}}var a=t.ob({encapsulation:2,styles:[],data:{}});function c(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"a",[["class","btn btn-transparent btn-orange btn-radius"]],[[2,"hidden",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleView()&&t),t}),null,null)),(l()(),t.Jb(2,null,["Read ",""]))],null,(function(l,n){var u=n.component;l(n,0,0,u.currentText),l(n,1,0,u.hideToggle),l(n,2,0,u.isCollapsed?"more":"less")}))}var b=u("/JoM"),g=u("NnmH"),d=u("7YMw"),h=u("ycdH"),p=u("EwUl");let f=(()=>{class l{constructor(l){this.commonHttp=l}getBlog(l){return this.commonHttp.post(p.a.blog.getBlog,l)}getUrl(l){return this.commonHttp.post(p.a.blog.getUrl,l)}getBlogById(l){return this.commonHttp.post(p.a.blog.getBlogById,l)}}return l.ngInjectableDef=t.Pb({factory:function(){return new l(t.Qb(h.a))},token:l,providedIn:"root"}),l})();class v{constructor(l,n,u,t){this.authService=l,this.blogService=n,this.loginService=u,this.loader=t}ngOnInit(){this.getUrl()}getUrl(){const l=this.loginService.getSponserUserId();this.blogService.getUrl({id:l}).subscribe(l=>{"success"==l.status&&(this.mmeUrl=l.record.mmeUrl,this.freeUrl=l.record.freeUrl,this.getBlog())})}getBlog(){this.loader.startLoading();const l=this.loginService.getPlan();this.blogService.getBlog({plan:l}).subscribe(l=>{this.loader.stopLoading(),"success"==l.status&&(this.blogData=l.record,this.blogData=this.blogData.map(l=>(l.description=l.description.replace("{{MME_URL}}",this.mmeUrl),l.description=l.description.replace("{{FREE_URL}}",this.freeUrl),l)))})}}var m=t.ob({encapsulation:0,styles:[[""]],data:{}});function q(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,13,"div",[["class","single-blog-post"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,4,"div",[["class","post-title"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,2,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(4,671744,null,0,r.o,[r.l,r.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Jb(5,null,["",""])),(l()(),t.qb(6,0,null,null,3,"div",[["class","post-image my-4"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,2,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(8,671744,null,0,r.o,[r.l,r.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(9,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(10,0,null,null,3,"div",[["class","post-excerpt"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,1,"read-more",[],null,null,null,c,a)),t.pb(13,573440,null,0,o,[t.k],{text:[0,"text"],maxLength:[1,"maxLength"]},null)],(function(l,n){l(n,4,0,t.ub(1,"/blog/blog-detail/",n.context.$implicit.id,"")),l(n,8,0,t.ub(1,"/blog/blog-detail/",n.context.$implicit.id,"")),l(n,13,0,n.context.$implicit.description,200)}),(function(l,n){l(n,3,0,t.Cb(n,4).target,t.Cb(n,4).href),l(n,5,0,n.context.$implicit.title),l(n,7,0,t.Cb(n,8).target,t.Cb(n,8).href),l(n,9,0,t.ub(1,"",n.context.$implicit.image,""))}))}function k(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,9,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,8,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,7,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,4,"div",[["class","blog-header"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Down Line Club Blog"])),(l()(),t.qb(7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["News, Updates & Customer Sportlights"])),(l()(),t.fb(16777216,null,null,1,null,q)),t.pb(10,278528,null,0,s.k,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.component.blogData)}),null)}function L(l){return t.Lb(0,[(l()(),t.fb(16777216,null,null,1,null,k)),t.pb(1,16384,null,0,s.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(2,0,null,null,9,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,8,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Easy Start. More Earning. Better Business."])),(l()(),t.qb(6,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(7,671744,null,0,r.o,[r.l,r.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Get Started Now!"])),(l()(),t.qb(10,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["No Credit Card Required"]))],(function(l,n){l(n,1,0,n.component.blogData.length>0),l(n,7,0,"auth/signup")}),(function(l,n){l(n,6,0,t.Cb(n,7).target,t.Cb(n,7).href)}))}function C(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-blog",[],null,null,null,L,m)),t.pb(1,114688,null,0,v,[b.a,f,g.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.mb("app-blog",v,C,{},{},[]);class U{constructor(l,n,u,t,e){this.authService=l,this.blogService=n,this.loginService=u,this.loader=t,this.route=e}ngOnInit(){this.getUrl()}getUrl(){const l=this.loginService.getSponserUserId();this.blogService.getUrl({id:l}).subscribe(l=>{"success"==l.status&&(this.mmeUrl=l.record.mmeUrl,this.freeUrl=l.record.freeUrl,this.route.paramMap.subscribe(l=>{const n=l.get("id");this.getBlogById(n)}))})}getBlogById(l){this.loader.startLoading();const n=this.loginService.getPlan();this.blogService.getBlogById({plan:n,id:l}).subscribe(l=>{this.loader.stopLoading(),"success"==l.status&&(this.blogData=l.record,this.blogData=this.blogData.map(l=>(l.description=l.description.replace("{{MME_URL}}",this.mmeUrl),l.description=l.description.replace("{{FREE_URL}}",this.freeUrl),l)),this.blogData=this.blogData[0],console.log(this.blogData))})}}var w=t.ob({encapsulation:0,styles:[[""]],data:{}});function x(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,12,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,11,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,10,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,5,"div",[["class","blog-header position-relative mb-4"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,2,"a",[["class","back-arrow"],["href","javascript:void(0)"],["routerLink","/blog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(6,671744,null,0,r.o,[r.l,r.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(7,0,null,null,0,"img",[["alt","Go to blog"],["src","/assets/images/left-arrow.svg"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Jb(9,null,["",""])),(l()(),t.qb(10,0,null,null,2,"div",[["class","post-image position-relative my-4"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,0,"div",[["class","social-share"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(13,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,6,0,"/blog")}),(function(l,n){var u=n.component;l(n,5,0,t.Cb(n,6).target,t.Cb(n,6).href),l(n,9,0,u.blogData.title),l(n,12,0,t.ub(1,"",u.blogData.image,"")),l(n,13,0,u.blogData.description)}))}function B(l){return t.Lb(0,[(l()(),t.fb(16777216,null,null,1,null,x)),t.pb(1,16384,null,0,s.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(2,0,null,null,9,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,8,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Easy Start. More Earning. Better Business."])),(l()(),t.qb(6,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(7,671744,null,0,r.o,[r.l,r.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Get Started Now!"])),(l()(),t.qb(10,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["No Credit Card Required"]))],(function(l,n){l(n,1,0,n.component.blogData),l(n,7,0,"auth/signup")}),(function(l,n){l(n,6,0,t.Cb(n,7).target,t.Cb(n,7).href)}))}function S(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-blog-detail",[],null,null,null,B,w)),t.pb(1,114688,null,0,U,[b.a,f,g.a,d.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var D=t.mb("app-blog-detail",U,S,{},{},[]),K=u("x4NB");const I={title:"Blog"},M={title:"Downline Club's Epic Guide to Affiliate Marketing"};let J=(()=>{class l{}return l.providers=[K.a],l})();var A=u("FpXt");u.d(n,"BlogModuleNgFactory",(function(){return E}));var E=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,y,D]],[3,t.j],t.w]),t.Ab(4608,s.n,s.m,[t.t,[2,s.D]]),t.Ab(4608,K.a,K.a,[h.a]),t.Ab(1073742336,s.b,s.b,[]),t.Ab(1073742336,r.p,r.p,[[2,r.u],[2,r.l]]),t.Ab(1073742336,J,J,[]),t.Ab(1073742336,A.a,A.a,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,r.j,(function(){return[[{path:"",component:v,data:I},{path:"blog-detail/:id",component:U,data:M}]]}),[])])}))}}]);