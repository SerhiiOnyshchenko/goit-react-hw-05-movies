"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[690],{6369:function(t,e,n){n.d(e,{Z:function(){return A}});n(2791);var r=n(1207),o=n(3504),a="MoviesGallery_MovieGrid__j7Vkq",c="MoviesGallery_Item__M1y35",i="MoviesGallery_Link__-IlD5",u="MoviesGallery_Img__k6Gw6",s="MoviesGallery_title__uAO6V",l=n(3641),f=n(184);function A(t){var e=t.moviesList;return(0,f.jsx)("ul",{id:"MoviesGallery",className:a,children:e.map((function(t){var e=t.id,n=t.title,a=t.name,A=t.poster_path;return(0,f.jsx)("li",{className:c,children:(0,f.jsxs)(o.rU,{to:"/movies/".concat(e),className:i,children:[(0,f.jsx)("img",{className:u,src:A?r.UB+A:l,alt:n||a}),(0,f.jsx)("p",{className:s,children:n||a})]})},e)}))})}},7606:function(t,e,n){n.d(e,{Z:function(){return a}});var r="Scrollup_Scrollup__f4kL-",o=n(184);function a(){var t=document.getElementById("myBtn");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?t.style.display="block":t.style.display="none"};return(0,o.jsx)("button",{id:"myBtn",type:"button",className:r,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})}},9690:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(8683),o=n(2982),a=n(7762),c=n(885),i=n(2791),u=n(1207),s=n(1421),l=n(3307),f=n(7606),A=n(6369),d="Searchbar_Searchbar__5WKzV",v="Searchbar_SearchForm__XuPyK",h="Searchbar_SearchFormInput__FT6Bx",m=n(184);function p(t){var e=t.onSubmit,n=(0,i.useState)(""),r=(0,c.Z)(n,2),o=r[0],a=r[1];return(0,m.jsx)("div",{className:d,children:(0,m.jsx)("form",{className:v,onSubmit:function(t){t.preventDefault(),e(o),a("")},children:(0,m.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,value:o,onChange:function(t){return a(t.target.value)},placeholder:"Search movies"})})})}var y=n(5667),b=n(5562),g=n.n(b),x=n(6871);function _(){var t,e=(0,x.s0)(),n=(0,x.TH)(),d=(0,i.useState)(null!==(t=n.state)&&void 0!==t?t:""),v=(0,c.Z)(d,2),h=v[0],b=v[1],_=(0,i.useState)(1),S=(0,c.Z)(_,2),j=S[0],k=S[1],N=(0,i.useState)([]),q=(0,c.Z)(N,2),L=q[0],B=q[1],w=(0,i.useState)(!1),U=(0,c.Z)(w,2),Z=U[0],E=U[1],M=(0,i.useState)(!1),V=(0,c.Z)(M,2),O=V[0],X=V[1];(0,i.useEffect)((function(){n.state||E(!1),b(n.state),k(1),B([])}),[n.state]),(0,i.useEffect)((function(){h&&(E(!1),X(!0),(0,u.Ai)(h,j).then((function(t){B((function(e){var n=t.results.filter((function(t){var n,r=t.id,o=(0,a.Z)(e);try{for(o.s();!(n=o.n()).done;){if(r===n.value.id)return!1}}catch(c){o.e(c)}finally{o.f()}return!0}));return[].concat((0,o.Z)(e),(0,o.Z)(n))})),X(!1),t.total_results!==t.results.length&&E(!0),1===j&&g().Notify.success("Hooray! We found ".concat(t.total_results," movies.")),t.total_results<=20*j&&(E(!1),g().Notify.info("We're sorry, but you've reached the end of search results."))})).catch(C))}),[j,h]);var C=function(){g().Notify.failure("Sorry, there are no movies matching your search query. Please try again."),E(!1),X(!1)},H=function(){var t=document.querySelector("#MoviesGallery").firstElementChild.getBoundingClientRect().height;y.NY.scrollMore(2*t)};return(0,m.jsxs)("div",{children:[(0,m.jsx)(p,{onSubmit:function(t){t||(g().Notify.failure("Please. Enter the name of the movie."),E(!1)),h===t&&1===j||(e((0,r.Z)((0,r.Z)({},n),{},{search:"query=".concat(t)}),{state:t}),b(t),k(1),B([]))}}),(0,m.jsx)(A.Z,{moviesList:L}),O&&(0,m.jsx)(s.Z,{}),Z&&(0,m.jsx)(l.Z,{onClick:function(){k((function(t){return t+1})),H()},title:"Load more"}),(0,m.jsx)(f.Z,{})]})}g().Notify.init({position:"left-top"})},1207:function(t,e,n){n.d(e,{Ai:function(){return A},Sg:function(){return d},Tg:function(){return f},UB:function(){return u},hC:function(){return v},oJ:function(){return h}});var r=n(5861),o=n(7757),a=n.n(o),c="https://api.themoviedb.org/3",i="2638d702e8992f774e165b094b88cb75",u="https://image.tmdb.org/t/p/w500";function s(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function t(){var e,n,r,o=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return s("".concat(c,"/trending/all/day?api_key=").concat(i,"&page=").concat(t))}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(c,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&page=").concat(e))}function d(t){return s("".concat(c,"/movie/").concat(t,"?api_key=").concat(i))}function v(t){return s("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"))}function h(t){return s("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"))}},3641:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAM1BMVEX///+xsbGurq6rq6vLy8vd3d3S0tK3t7e+vr74+Pjx8fHo6Oj7+/vk5OTX19fu7u6lpaU4yvYiAAADZ0lEQVR4nO3bi26jMBCF4XrMxUCAff+nXQMBTIENYZEv0v+pq64cRTpyx/aYpj8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgrvoVOsE9Jg+d4B5tQie4pRCpQ2e4zClppaQLF+Qbr9asSXOtVBkwzGVNJlrW+S5FKd0HzHNJ1RktbmE0drqVRL4yWyN2dm3Oahky44AOGOqzUo8hlWTLUK3HEV39422hNVNGm3Ld97Jp/iVgrI+mkthUczsMiVYxr8te5ulupoEqH/YSEdOEDXbEOV+yebqn3XpYoyLa5BGWdp+tJVHN0y2tXY6F0ja0yiIskLootV5LoJhzq6Yth6kW0wZMd6Ydz5d1ul/zZjJU9BC6i7I+pq1a1hntxMkdZX3YktBzyHWsXFLbpRjnBWddgb/akCF0WURYH5N8KeUlYmWmAolyKc6WipjbELtGx1Mxxq16tbQh0/Wrzt5bdeyXMeNMdzWdirY+4lyKjn6Z7rzPxtCqi32qB5m7UdsbWZxb9U61xo54q95b2hCRskihPt7mHjvKrvpcN11gyri36r1SpbBV7+Q6ha16r0xiq36rTWnS2KQ3ansiSvxP+HbGA9J5BJWKKff7JtnmedvaL/sv35R6v77Qbnf24YVB7nlpbOa70Stxa+dlnFc2z+mLP/Ow30vFyx6Oerna9MqxKXqzdi7b4N3cQXp+fF/lmfNQoXcbq82P/nPwoDt/7Qb/asYlbHNQf18q76t04JP2do2H7hDqmzUeOvfdGg/f/Lo1fj148Pn+tTgvlopEkHt7Qd4GV2fB/dXJqzjlTrhyxjsnt+1rnFc89ma1ljOb3Nde8FcntVYP8pe7ejS3v/p+Njd14jd3qnWSau5U6yTR3B7vO0d1Mn7OwX7p+dvwP9Hr4DQS23xLll9hDoIHzX3xs1L9wU8q6Dn/H7mD1vfF3E1sdaLMJeX+jaH3wdOW/LQL956b85Lc/nPTD35CnQwC94Nab5o/+fVtbAd12H7wILdkzRUmaO5U+8Fnc4ftB6/9/jS+flCVVxy8L3Tu21LNzTn/CXUyoE4+SbVOHp1vn58/ObyXJ5A7ey649vlnxtXxk5AbPP/Ra23Of/X6DW18/3a+yR5QpPfBSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP+QuQkyZhHUlqdwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=690.296cd435.chunk.js.map