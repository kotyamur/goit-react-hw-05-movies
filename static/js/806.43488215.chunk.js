"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1806:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,u,i,c=e(885),s=e(7689),o=e(168),p=e(6444),f=p.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding: 20px 20px;\n"])),(function(n){return n.theme.space[3]})),l=p.ZP.ul(a||(a=(0,o.Z)(["\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  list-style: disc;\n"])),(function(n){return n.theme.space[3]})),d=p.ZP.li(u||(u=(0,o.Z)(["\n  padding: 5px 5px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),v=p.ZP.p(i||(i=(0,o.Z)(["\n  font-weight: 500;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),h=e(2868),m=e(4390),x=e(184),g=function(){var n=(0,s.UO)().movieId,t=(0,h.Q)(m.tb,n),e=(0,c.Z)(t,2),r=e[0],a=e[1];return(0,x.jsxs)(f,{children:[a&&(0,x.jsx)("p",{children:a}),0===(null===r||void 0===r?void 0:r.length)&&(0,x.jsx)("p",{children:"We don't have any reviews for this movie."}),(null===r||void 0===r?void 0:r.length)>0&&(0,x.jsx)(l,{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,x.jsxs)(d,{children:[(0,x.jsxs)(v,{children:["Author: ",e]}),(0,x.jsx)("p",{children:r})]},t)}))})]})}},2868:function(n,t,e){e.d(t,{Q:function(){return s}});var r=e(5861),a=e(885),u=e(7757),i=e.n(u),c=e(2791),s=function(n,t){var e=(0,c.useState)(null),u=(0,a.Z)(e,2),s=u[0],o=u[1],p=(0,c.useState)(null),f=(0,a.Z)(p,2),l=f[0],d=f[1],v=(0,c.useState)(!1),h=(0,a.Z)(v,2),m=h[0],x=h[1];return(0,c.useEffect)((function(){var e=new AbortController,a=function(){var a=(0,r.Z)(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==t){r.next=2;break}return r.abrupt("return");case 2:return x(!0),r.prev=3,r.t0=o,r.next=7,n(t,e.signal);case 7:r.t1=r.sent,(0,r.t0)(r.t1),r.next=16;break;case 11:if(r.prev=11,r.t2=r.catch(3),"ERR_CANCELED"!==r.t2.code){r.next=15;break}return r.abrupt("return");case 15:d("Sorry, something went wrong. Please try again later.");case 16:return r.prev=16,x(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[3,11,16,19]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){e.abort()}}),[n,t]),[s,l,m]}},4390:function(n,t,e){e.d(t,{Dw:function(){return p},aQ:function(){return o},qj:function(){return f},tb:function(){return d},yj:function(){return l}});var r=e(8683),a=e(5861),u=e(7757),i=e.n(u),c=e(1044),s="a97f5a48286213b4292b81d1cb5cf0d2";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,a.Z)(i().mark((function n(){var t,e,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e=u.length>1?u[1]:void 0,console.log(e),n.next=5,c.ZP.get("trending/movie/day",{params:(0,r.Z)({page:1,api_key:s},t),signal:e});case 5:return a=n.sent,n.abrupt("return",a.data.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie",{params:{query:t,api_key:s},signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t),{params:{api_key:s},signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"/credits"),{params:{api_key:s},signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"/reviews"),{params:{api_key:s},signal:e});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=806.43488215.chunk.js.map