"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{806:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t,a,u,i,s=r(885),c=r(689),o=r(168),p=r(444),f=p.ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 20px 20px;\n"]))),v=p.ZP.ul(a||(a=(0,o.Z)(["\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: disc;\n"]))),l=p.ZP.li(u||(u=(0,o.Z)(["\n  padding: 5px 5px;\n  margin-bottom: 12px;\n"]))),d=p.ZP.p(i||(i=(0,o.Z)(["\n  font-weight: 500;\n  margin-bottom: 12px;\n"]))),h=r(867),x=r(184),m=function(){var e=(0,c.UO)().movieId,n=(0,h.Q)("searchMovieReviews",e),r=(0,s.Z)(n,2),t=r[0],a=r[1];return(0,x.jsxs)(f,{children:[a&&(0,x.jsx)("p",{children:a}),0===(null===t||void 0===t?void 0:t.length)&&(0,x.jsx)("p",{children:"We don't have any reviews for this movie."}),(null===t||void 0===t?void 0:t.length)>0&&(0,x.jsx)(v,{children:t.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,x.jsxs)(l,{children:[(0,x.jsxs)(d,{children:["Author: ",r]}),(0,x.jsx)("p",{children:t})]},n)}))})]})}},867:function(e,n,r){r.d(n,{Q:function(){return x}});var t={};r.r(t),r.d(t,{searchMovieCast:function(){return l},searchMovieReviews:function(){return d},searchMoviesByQuery:function(){return f},searchMoviesDetails:function(){return v},searchPopularMovies:function(){return p}});var a=r(861),u=r(885),i=r(757),s=r.n(i),c=r(44),o="a97f5a48286213b4292b81d1cb5cf0d2";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("trending/movie/day",{params:{page:1,api_key:o}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(n){var r,t,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,c.ZP.get("search/movie",{params:{page:r,query:n,api_key:o}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("movie/".concat(n),{params:{api_key:o}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("movie/".concat(n,"/credits"),{params:{api_key:o}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("movie/".concat(n,"/reviews"),{params:{api_key:o}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=r(791),x=function(e,n){var r=(0,h.useState)(null),i=(0,u.Z)(r,2),c=i[0],o=i[1],p=(0,h.useState)(null),f=(0,u.Z)(p,2),v=f[0],l=f[1],d=(0,h.useState)(!1),x=(0,u.Z)(d,2),m=x[0],Z=x[1];return(0,h.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==n){r.next=2;break}return r.abrupt("return");case 2:return Z(!0),r.prev=3,r.t0=o,r.next=7,t[e](n);case 7:r.t1=r.sent,(0,r.t0)(r.t1),r.next=14;break;case 11:r.prev=11,r.t2=r.catch(3),l("Sorry, something went wrong. Please try again later.");case 14:return r.prev=14,Z(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[3,11,14,17]])})));return function(){return r.apply(this,arguments)}}();r()}),[e,n]),[c,v,m]}}}]);
//# sourceMappingURL=806.6d590a34.chunk.js.map