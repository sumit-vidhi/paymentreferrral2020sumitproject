(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9kKi":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("ZYCi"),a=u("Ip0R"),r=function(){function l(l){this.elementRef=l,this.maxLength=100,this.hideToggle=!0,this.isCollapsed=!0}return l.prototype.toggleView=function(){this.isCollapsed=!this.isCollapsed,this.determineView()},l.prototype.determineView=function(){if(!this.text||this.text.length<=this.maxLength)return this.currentText=this.text,this.isCollapsed=!1,void(this.hideToggle=!0);this.hideToggle=!1,1==this.isCollapsed?this.currentText=this.text.substring(0,this.maxLength)+"...":0==this.isCollapsed&&(this.currentText=this.text)},l.prototype.ngOnChanges=function(){this.determineView()},l}(),s=t.nb({encapsulation:2,styles:[],data:{}});function c(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"a",[["class","btn btn-transparent btn-orange btn-radius"]],[[2,"hidden",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleView()&&t),t},null,null)),(l()(),t.Eb(2,null,["Read ",""]))],null,function(l,n){var u=n.component;l(n,0,0,u.currentText),l(n,1,0,u.hideToggle),l(n,2,0,u.isCollapsed?"more":"less")})}var b=u("/JoM"),p=u("NnmH"),h=u("7YMw"),g=u("ycdH"),d=u("EwUl"),f=function(){function l(l){this.commonHttp=l}return l.prototype.getBlog=function(l){return this.commonHttp.post(d.a.blog.getBlog,l)},l.ngInjectableDef=t.S({factory:function(){return new l(t.W(g.a))},token:l,providedIn:"root"}),l}(),m=function(){function l(l,n,u,t){this.authService=l,this.blogService=n,this.loginService=u,this.loader=t}return l.prototype.ngOnInit=function(){var l=this;this.loader.startLoading();var n=this.loginService.getPlan();console.log(n),this.blogService.getBlog({plan:n}).subscribe(function(n){l.loader.stopLoading(),"success"==n.status&&(l.blogData=n.record)})},l}(),v=t.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,13,"div",[["class","single-blog-post"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"div",[["class","post-title"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,2,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(4,671744,null,0,o.n,[o.l,o.a,a.g],{routerLink:[0,"routerLink"]},null),(l()(),t.Eb(5,null,["",""])),(l()(),t.pb(6,0,null,null,3,"div",[["class","post-image my-4"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,2,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(8,671744,null,0,o.n,[o.l,o.a,a.g],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(9,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(10,0,null,null,3,"div",[["class","post-excerpt"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"read-more",[],null,null,null,c,s)),t.ob(13,573440,null,0,r,[t.k],{text:[0,"text"],maxLength:[1,"maxLength"]},null)],function(l,n){l(n,4,0,t.rb(1,"/blog/blog-detail/",n.context.$implicit.id,"")),l(n,8,0,t.rb(1,"/blog/blog-detail/",n.context.$implicit.id,"")),l(n,13,0,n.context.$implicit.description,200)},function(l,n){l(n,3,0,t.zb(n,4).target,t.zb(n,4).href),l(n,5,0,n.context.$implicit.title),l(n,7,0,t.zb(n,8).target,t.zb(n,8).href),l(n,9,0,t.rb(1,"",n.context.$implicit.image,""))})}function k(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,8,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,7,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,4,"div",[["class","blog-header"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Down Line Club Blog"])),(l()(),t.pb(7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["News, Updates & Customer Sportlights"])),(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(10,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.component.blogData)},null)}function w(l){return t.Fb(0,[(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(1,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(2,0,null,null,9,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,8,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Easy Start. More Earning. Better Business."])),(l()(),t.pb(6,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(7,671744,null,0,o.n,[o.l,o.a,a.g],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Get Started Now!"])),(l()(),t.pb(10,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["No Credit Card Required"]))],function(l,n){l(n,1,0,n.component.blogData.length>0),l(n,7,0,"auth/signup")},function(l,n){l(n,6,0,t.zb(n,7).target,t.zb(n,7).href)})}function x(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-blog",[],null,null,null,w,v)),t.ob(1,114688,null,0,m,[b.a,f,p.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var E=t.lb("app-blog",m,x,{},{},[]),L=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),C=t.nb({encapsulation:0,styles:[[""]],data:{}});function z(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,63,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,62,"div",[["class","blog-container"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,61,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,60,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,5,"div",[["class","blog-header position-relative mb-4"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,2,"a",[["class","back-arrow"],["href","javascript:void(0)"],["routerLink","/blog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(6,671744,null,0,o.n,[o.l,o.a,a.g],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(7,0,null,null,0,"img",[["alt","Go to blog"],["src","/assets/images/left-arrow.svg"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Downline Club's Epic Guide to Affiliate Marketing"])),(l()(),t.pb(10,0,null,null,8,"div",[["class","author-name d-flex align-items-center"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"div",[["class","author-image"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,0,"img",[["alt","Dennis R. Watson"],["src","/assets/images/author_img.png"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,5,"div",[["class","author-info"]],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,2,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Dennis R. Watson"])),(l()(),t.pb(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["November 18th, 2019"])),(l()(),t.pb(19,0,null,null,16,"div",[["class","post-image position-relative my-4"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,12,"div",[["class","social-share"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Share"])),(l()(),t.pb(24,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,1,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,0,"img",[["alt","Facebook"],["src","/assets/images/facebook_icon.svg"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,1,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,0,"img",[["alt","Linkedin"],["src","/assets/images/linkedin_icon.svg"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,1,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,0,"img",[["alt","Twitter"],["src","/assets/images/twitter_icon.svg"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,2,"a",[["href","javascript:void(0)"],["routerLink","/blog/blog-detail"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,34).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(34,671744,null,0,o.n,[o.l,o.a,a.g],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(35,0,null,null,0,"img",[["alt","Affiliate Marketing"],["class","w-100"],["src","/assets/images/affiliate-marketing.jpg"]],null,null,null,null,null)),(l()(),t.pb(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Here's an affiliate marketing secret: if you can become the connector between the audience you're building and the products and services they need to succeed, you can supplement your income, and potentially even make a full-time income from your recommendations."])),(l()(),t.pb(38,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Here's the real reason why this works:"])),(l()(),t.pb(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["People want curation. When there is a choice, people need help organizing and understanding all of the options. They WANT someone with a voice and experience to filter the noise and find the best products for them, ultimately saving them time and getting them results, faster. That person, that curator can be you, and everyone can win."])),(l()(),t.pb(42,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["What Is Affiliate Marketing, Really?"])),(l()(),t.pb(44,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Affiliate marketing is the process of earning a commission by promoting another company's product (or service). You find a product, promote it to others, and earn a piece of the profit for each sale that you make."])),(l()(),t.pb(46,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["In other words, when you help another company generate sales, you get a cut!"])),(l()(),t.pb(48,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["The best part is that you don\u2019t have to spend the time and money to create your own products, because someone else has already done the hard work. You can begin making money as an affiliate as soon as you have a place to recommend products, whether that's a website you have, a podcast, or even on social media."])),(l()(),t.pb(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["So, all you have to do is send traffic through a link to that product, and everything after that is out of your hands . . . right?"])),(l()(),t.pb(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Wrong. There's so much more involved to make this work well, which is why most people who attempt affiliate marketing fail, or just see a few dollars coming in from their efforts. I want you to see amazing, life-changing results from affiliate marketing, which is why I'm thankful you're here."])),(l()(),t.pb(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Let me take a moment to share with you what's possible when you get this right."])),(l()(),t.pb(56,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["This Stuff Works. Here's What It Can Do For You."])),(l()(),t.pb(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Affiliate marketing is something I\u2019ve been involved in ever since 2009 on my very first website, GreenExamAcademy.com. On that site, an architecture-related website, I promoted an exam software product that has generated more than $200,000 in commissions over the years."])),(l()(),t.pb(60,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Since then, I\u2019ve branched out and diversified my affiliate income sources. But much more than that\u2014I\u2019ve made affiliate marketing a cornerstone of my business strategy and my biggest single source of revenue. Since 2009, I've generated over $3 million in commissions with affiliate marketing."])),(l()(),t.pb(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["In fact, my largest affiliate partnership, with a company called ConvertKit, has driven more than $400,000 in revenue alone."])),(l()(),t.pb(64,0,null,null,9,"div",[["class","get-started-section"]],null,null,null,null,null)),(l()(),t.pb(65,0,null,null,8,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Easy Start. More Earning. Better Business."])),(l()(),t.pb(68,0,null,null,5,"a",[["class","btn btn-lg btn-orange"],["href","javascript:void(0)"],["routerLink","auth/signup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,69).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(69,671744,null,0,o.n,[o.l,o.a,a.g],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(70,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Get Started Now!"])),(l()(),t.pb(72,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["No Credit Card Required"]))],function(l,n){l(n,6,0,"/blog"),l(n,34,0,"/blog/blog-detail"),l(n,69,0,"auth/signup")},function(l,n){l(n,5,0,t.zb(n,6).target,t.zb(n,6).href),l(n,33,0,t.zb(n,34).target,t.zb(n,34).href),l(n,68,0,t.zb(n,69).target,t.zb(n,69).href)})}function K(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-blog-detail",[],null,null,null,z,C)),t.ob(1,114688,null,0,L,[],null,null)],function(l,n){l(n,1,0)},null)}var j=t.lb("app-blog-detail",L,K,{},{},[]),I=u("x4NB"),S={title:"Blog"},T={title:"Downline Club's Epic Guide to Affiliate Marketing"},B=function(){function l(){}return l.providers=[I.a],l}();u.d(n,"BlogModuleNgFactory",function(){return F});var F=t.mb(e,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[i.a,E,j]],[3,t.j],t.x]),t.xb(4608,a.l,a.k,[t.u,[2,a.r]]),t.xb(4608,I.a,I.a,[g.a]),t.xb(1073742336,a.b,a.b,[]),t.xb(1073742336,o.o,o.o,[[2,o.u],[2,o.l]]),t.xb(1073742336,B,B,[]),t.xb(1073742336,e,e,[]),t.xb(1024,o.j,function(){return[[{path:"",component:m,data:S},{path:"blog-detail",component:L,data:T}]]},[])])})}}]);