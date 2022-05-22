"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[690],{6369:function(t,e,n){n.d(e,{Z:function(){return d}});n(2791);var r=n(1207),o=n(3504),a=n(6871),c="MoviesGallery_MovieGrid__j7Vkq",i="MoviesGallery_Item__M1y35",s="MoviesGallery_Link__-IlD5",u="MoviesGallery_Img__k6Gw6",l="MoviesGallery_title__uAO6V",f=n(3641),A=n(184);function d(t){var e=t.moviesList,n=(0,a.TH)();return console.log(n),(0,A.jsx)("ul",{id:"MoviesGallery",className:c,children:e.map((function(t){var e=t.id,a=t.title,c=t.name,d=t.poster_path;return(0,A.jsx)("li",{className:i,children:(0,A.jsxs)(o.rU,{to:"/movies/".concat(e),state:{from:n},className:s,children:[(0,A.jsx)("img",{className:u,src:d?r.UB+d:f,alt:a||c}),(0,A.jsx)("p",{className:l,children:a||c})]})},e)}))})}},7606:function(t,e,n){n.d(e,{Z:function(){return a}});var r="Scrollup_Scrollup__f4kL-",o=n(184);function a(){var t=document.getElementById("myBtn");window.onscroll=function(){document.body.scrollTop>40||document.documentElement.scrollTop>40?t.style.display="block":t.style.display="none"};return(0,o.jsx)("button",{id:"myBtn",type:"button",className:r,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})}},9690:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(8683),o=n(2982),a=n(7762),c=n(885),i=n(2791),s=n(1207),u=n(1421),l=n(3307),f=n(7606),A=n(6369),d="Searchbar_Searchbar__5WKzV",v="Searchbar_SearchForm__XuPyK",m="Searchbar_SearchFormInput__FT6Bx",h=n(6871),p=n(184);function y(t){var e=t.onSubmit,n=(0,h.TH)().state,r=(0,i.useState)(""),o=(0,c.Z)(r,2),a=o[0],s=o[1];(0,i.useEffect)((function(){s(n||"")}),[n]);return(0,p.jsx)("div",{className:d,children:(0,p.jsx)("form",{className:v,onSubmit:function(t){t.preventDefault(),e(a)},children:(0,p.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,value:a,onChange:function(t){return s(t.target.value)},placeholder:"Search movies"})})})}var b=n(5667),x=n(5562),g=n.n(x);function _(){var t,e=(0,h.s0)(),n=(0,h.TH)(),d=(0,i.useState)(null!==(t=n.state)&&void 0!==t?t:""),v=(0,c.Z)(d,2),m=v[0],x=v[1],_=(0,i.useState)(1),S=(0,c.Z)(_,2),j=S[0],k=S[1],N=(0,i.useState)([]),q=(0,c.Z)(N,2),L=q[0],B=q[1],w=(0,i.useState)(!1),E=(0,c.Z)(w,2),U=E[0],Z=E[1],M=(0,i.useState)(!1),V=(0,c.Z)(M,2),H=V[0],O=V[1];(0,i.useEffect)((function(){n.state||Z(!1),x(n.state),k(1),B([])}),[n.state]),(0,i.useEffect)((function(){m&&(Z(!1),O(!0),(0,s.Ai)(m,j).then((function(t){B((function(e){var n=t.results.filter((function(t){var n,r=t.id,o=(0,a.Z)(e);try{for(o.s();!(n=o.n()).done;){if(r===n.value.id)return!1}}catch(c){o.e(c)}finally{o.f()}return!0}));return[].concat((0,o.Z)(e),(0,o.Z)(n))})),O(!1),t.total_results!==t.results.length&&Z(!0),1===j&&g().Notify.success("Hooray! We found ".concat(t.total_results," movies.")),t.total_results<=20*j&&(Z(!1),g().Notify.info("We're sorry, but you've reached the end of search results."))})).catch(X))}),[j,m]);var X=function(){g().Notify.failure("Sorry, there are no movies matching your search query. Please try again."),Z(!1),O(!1)},C=function(){var t=document.querySelector("#MoviesGallery").firstElementChild.getBoundingClientRect().height;b.NY.scrollMore(2*t)};return(0,p.jsxs)("div",{children:[(0,p.jsx)(y,{onSubmit:function(t){t||(g().Notify.failure("Please. Enter the name of the movie."),Z(!1)),m===t&&1===j||(e((0,r.Z)((0,r.Z)({},n),{},{search:"query=".concat(t)}),{state:t}),x(t),k(1),B([]))}}),(0,p.jsx)(A.Z,{moviesList:L}),H&&(0,p.jsx)(u.Z,{}),U&&(0,p.jsx)(l.Z,{onClick:function(){k((function(t){return t+1})),C()},title:"Load more"}),(0,p.jsx)(f.Z,{})]})}g().Notify.init({position:"left-top"})},1207:function(t,e,n){n.d(e,{Ai:function(){return A},Sg:function(){return d},Tg:function(){return f},UB:function(){return s},hC:function(){return v},oJ:function(){return m}});var r=n(5861),o=n(7757),a=n.n(o),c="https://api.themoviedb.org/3",i="2638d702e8992f774e165b094b88cb75",s="https://image.tmdb.org/t/p/w500";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function t(){var e,n,r,o=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return u("".concat(c,"/trending/movie/day?api_key=").concat(i,"&page=").concat(t))}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return u("".concat(c,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&include_adult=false&page=").concat(e))}function d(t){return u("".concat(c,"/movie/").concat(t,"?api_key=").concat(i))}function v(t){return u("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"))}function m(t){return u("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"))}},3641:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAM1BMVEX///+xsbGurq6rq6vLy8vd3d3S0tK3t7e+vr74+Pjx8fHo6Oj7+/vk5OTX19fu7u6lpaU4yvYiAAADZ0lEQVR4nO3bi26jMBCF4XrMxUCAff+nXQMBTIENYZEv0v+pq64cRTpyx/aYpj8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgrvoVOsE9Jg+d4B5tQie4pRCpQ2e4zClppaQLF+Qbr9asSXOtVBkwzGVNJlrW+S5FKd0HzHNJ1RktbmE0drqVRL4yWyN2dm3Oahky44AOGOqzUo8hlWTLUK3HEV39422hNVNGm3Ld97Jp/iVgrI+mkthUczsMiVYxr8te5ulupoEqH/YSEdOEDXbEOV+yebqn3XpYoyLa5BGWdp+tJVHN0y2tXY6F0ja0yiIskLootV5LoJhzq6Yth6kW0wZMd6Ydz5d1ul/zZjJU9BC6i7I+pq1a1hntxMkdZX3YktBzyHWsXFLbpRjnBWddgb/akCF0WURYH5N8KeUlYmWmAolyKc6WipjbELtGx1Mxxq16tbQh0/Wrzt5bdeyXMeNMdzWdirY+4lyKjn6Z7rzPxtCqi32qB5m7UdsbWZxb9U61xo54q95b2hCRskihPt7mHjvKrvpcN11gyri36r1SpbBV7+Q6ha16r0xiq36rTWnS2KQ3ansiSvxP+HbGA9J5BJWKKff7JtnmedvaL/sv35R6v77Qbnf24YVB7nlpbOa70Stxa+dlnFc2z+mLP/Ow30vFyx6Oerna9MqxKXqzdi7b4N3cQXp+fF/lmfNQoXcbq82P/nPwoDt/7Qb/asYlbHNQf18q76t04JP2do2H7hDqmzUeOvfdGg/f/Lo1fj148Pn+tTgvlopEkHt7Qd4GV2fB/dXJqzjlTrhyxjsnt+1rnFc89ma1ljOb3Nde8FcntVYP8pe7ejS3v/p+Njd14jd3qnWSau5U6yTR3B7vO0d1Mn7OwX7p+dvwP9Hr4DQS23xLll9hDoIHzX3xs1L9wU8q6Dn/H7mD1vfF3E1sdaLMJeX+jaH3wdOW/LQL956b85Lc/nPTD35CnQwC94Nab5o/+fVtbAd12H7wILdkzRUmaO5U+8Fnc4ftB6/9/jS+flCVVxy8L3Tu21LNzTn/CXUyoE4+SbVOHp1vn58/ObyXJ5A7ey649vlnxtXxk5AbPP/Ra23Of/X6DW18/3a+yR5QpPfBSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP+QuQkyZhHUlqdwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=690.9fa9cbfc.chunk.js.map