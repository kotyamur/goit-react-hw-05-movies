"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{219:function(n,e,r){r.r(e),r.d(e,{default:function(){return g}});var t,a,u,i,c=r(885),s=r(689),o=r(168),p=r(444),f=p.ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 20px 20px;\n"]))),d=p.ZP.ul(a||(a=(0,o.Z)(["\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  list-style: disc;\n"]))),l=p.ZP.li(u||(u=(0,o.Z)(["\n  padding: 5px 5px;\n\n  & > img {\n    width: 150px;\n    margin-bottom: 12px;\n  }\n"]))),v=p.ZP.p(i||(i=(0,o.Z)(["\n  margin-bottom: 12px;\n  font-weight: 500;\n"]))),h=r(867),m=r(457),x=r(184),g=function(){var n=(0,s.UO)().movieId,e=(0,h.Q)("searchMovieCast",n),r=(0,c.Z)(e,2),t=r[0],a=r[1];return(0,x.jsxs)(f,{children:[a&&(0,x.jsx)("p",{children:a}),0===(null===t||void 0===t?void 0:t.length)&&(0,x.jsx)("p",{children:"We didn't find any actors for this movie."}),(null===t||void 0===t?void 0:t.length)>0&&(0,x.jsx)(d,{children:t.map((function(n){var e=n.id,r=n.profile_path,t=n.original_name,a=n.name,u=n.character;return(0,x.jsxs)(l,{children:[(0,x.jsx)("img",{src:(0,m.n)(r),alt:t}),(0,x.jsx)(v,{children:a}),(0,x.jsxs)("p",{children:["Character: ",u]})]},e)}))})]})}},867:function(n,e,r){r.d(e,{Q:function(){return m}});var t={};r.r(t),r.d(t,{searchMovieCast:function(){return l},searchMovieReviews:function(){return v},searchMoviesByQuery:function(){return f},searchMoviesDetails:function(){return d},searchPopularMovies:function(){return p}});var a=r(861),u=r(885),i=r(757),c=r.n(i),s=r(44),o="a97f5a48286213b4292b81d1cb5cf0d2";s.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var n=(0,a.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("trending/movie/day",{params:{page:1,api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(c().mark((function n(e){var r,t,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,s.ZP.get("search/movie",{params:{page:r,query:e,api_key:o}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("movie/".concat(e),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("movie/".concat(e,"/credits"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("movie/".concat(e,"/reviews"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=r(791),m=function(n,e){var r=(0,h.useState)(null),i=(0,u.Z)(r,2),s=i[0],o=i[1],p=(0,h.useState)(null),f=(0,u.Z)(p,2),d=f[0],l=f[1],v=(0,h.useState)(!1),m=(0,u.Z)(v,2),x=m[0],g=m[1];return(0,h.useEffect)((function(){var r=function(){var r=(0,a.Z)(c().mark((function r(){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==e){r.next=2;break}return r.abrupt("return");case 2:return g(!0),r.prev=3,r.t0=o,r.next=7,t[n](e);case 7:r.t1=r.sent,(0,r.t0)(r.t1),r.next=14;break;case 11:r.prev=11,r.t2=r.catch(3),l("Sorry, something went wrong. Please try again later.");case 14:return r.prev=14,g(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[3,11,14,17]])})));return function(){return r.apply(this,arguments)}}();r()}),[n,e]),[s,d,x]}},457:function(n,e,r){r.d(e,{n:function(){return t}});var t=function(n){return n?"https://image.tmdb.org/t/p/w500/"+n:"https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg"}}}]);
//# sourceMappingURL=219.216852d1.chunk.js.map