"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[743],{1743:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(885),r=t(2791),c=t(1207),s=t(3504),i=t(6871),o="MovieDetailsPage_movie__ge9gn",A="MovieDetailsPage_Info__a8scB",l="MovieDetailsPage_title__63V3V",d="MovieDetailsPage_text__vp0Sm",u="MovieDetailsPage_nav__PAw0i",v=t(1421),h=t(3862),p=t(3641),f=t(184);function x(){var e=(0,i.UO)().movieId,n=(0,r.useState)(null),t=(0,a.Z)(n,2),x=t[0],m=t[1],j=(0,r.useState)(null),b=(0,a.Z)(j,2),g=b[0],y=b[1];return(0,r.useEffect)((function(){(0,c.Sg)(e).then(m).catch((function(e){return y(e)}))}),[e]),(0,f.jsxs)("div",{children:[x&&(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("img",{src:x.poster_path?c.UB+x.poster_path:p,alt:x.title||x.name,width:"300"}),(0,f.jsxs)("div",{className:A,children:[(0,f.jsx)("h2",{className:l,children:x.title||x.name}),(0,f.jsxs)("p",{className:d,children:[(0,f.jsx)("b",{children:"Release date:"})," ",x.release_date]}),(0,f.jsxs)("p",{className:d,children:[(0,f.jsx)("b",{children:"User Score:"})," ",x.vote_average]}),(0,f.jsxs)("p",{className:d,children:[(0,f.jsx)("b",{children:"Genres:"})," ",x.genres.map((function(e){return e.name})).join(" / ")]}),(0,f.jsxs)("p",{className:d,children:[(0,f.jsx)("b",{children:"Runtime:"})," ",x.runtime," min."]}),(0,f.jsx)("p",{className:d,children:(0,f.jsx)("b",{children:"Overview:"})}),(0,f.jsx)("p",{className:d,children:x.overview})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("nav",{className:u,children:[(0,f.jsx)(s.OL,{to:"cast",children:"Cast"}),(0,f.jsx)(s.OL,{to:"reviews",children:"Reviews"})]}),(0,f.jsx)("hr",{})]}),g&&(0,f.jsx)(h.Z,{}),(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)(v.Z,{}),children:(0,f.jsx)(i.j3,{})})]})}},1207:function(e,n,t){t.d(n,{Ai:function(){return u},Sg:function(){return v},Tg:function(){return d},UB:function(){return o},hC:function(){return h},oJ:function(){return p}});var a=t(5861),r=t(7757),c=t.n(r),s="https://api.themoviedb.org/3",i="2638d702e8992f774e165b094b88cb75",o="https://image.tmdb.org/t/p/w500";function A(){return l.apply(this,arguments)}function l(){return l=(0,a.Z)(c().mark((function e(){var n,t,a,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(n,t);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return A("".concat(s,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e))}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return A("".concat(s,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&include_adult=false&page=").concat(n))}function v(e){return A("".concat(s,"/movie/").concat(e,"?api_key=").concat(i))}function h(e){return A("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))}function p(e){return A("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"))}},3641:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAM1BMVEX///+xsbGurq6rq6vLy8vd3d3S0tK3t7e+vr74+Pjx8fHo6Oj7+/vk5OTX19fu7u6lpaU4yvYiAAADZ0lEQVR4nO3bi26jMBCF4XrMxUCAff+nXQMBTIENYZEv0v+pq64cRTpyx/aYpj8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgrvoVOsE9Jg+d4B5tQie4pRCpQ2e4zClppaQLF+Qbr9asSXOtVBkwzGVNJlrW+S5FKd0HzHNJ1RktbmE0drqVRL4yWyN2dm3Oahky44AOGOqzUo8hlWTLUK3HEV39422hNVNGm3Ld97Jp/iVgrI+mkthUczsMiVYxr8te5ulupoEqH/YSEdOEDXbEOV+yebqn3XpYoyLa5BGWdp+tJVHN0y2tXY6F0ja0yiIskLootV5LoJhzq6Yth6kW0wZMd6Ydz5d1ul/zZjJU9BC6i7I+pq1a1hntxMkdZX3YktBzyHWsXFLbpRjnBWddgb/akCF0WURYH5N8KeUlYmWmAolyKc6WipjbELtGx1Mxxq16tbQh0/Wrzt5bdeyXMeNMdzWdirY+4lyKjn6Z7rzPxtCqi32qB5m7UdsbWZxb9U61xo54q95b2hCRskihPt7mHjvKrvpcN11gyri36r1SpbBV7+Q6ha16r0xiq36rTWnS2KQ3ansiSvxP+HbGA9J5BJWKKff7JtnmedvaL/sv35R6v77Qbnf24YVB7nlpbOa70Stxa+dlnFc2z+mLP/Ow30vFyx6Oerna9MqxKXqzdi7b4N3cQXp+fF/lmfNQoXcbq82P/nPwoDt/7Qb/asYlbHNQf18q76t04JP2do2H7hDqmzUeOvfdGg/f/Lo1fj148Pn+tTgvlopEkHt7Qd4GV2fB/dXJqzjlTrhyxjsnt+1rnFc89ma1ljOb3Nde8FcntVYP8pe7ejS3v/p+Njd14jd3qnWSau5U6yTR3B7vO0d1Mn7OwX7p+dvwP9Hr4DQS23xLll9hDoIHzX3xs1L9wU8q6Dn/H7mD1vfF3E1sdaLMJeX+jaH3wdOW/LQL956b85Lc/nPTD35CnQwC94Nab5o/+fVtbAd12H7wILdkzRUmaO5U+8Fnc4ftB6/9/jS+flCVVxy8L3Tu21LNzTn/CXUyoE4+SbVOHp1vn58/ObyXJ5A7ey649vlnxtXxk5AbPP/Ra23Of/X6DW18/3a+yR5QpPfBSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP+QuQkyZhHUlqdwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=743.33b4ad71.chunk.js.map