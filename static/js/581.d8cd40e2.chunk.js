"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[581],{7581:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(2982),a=e(885),c=e(2791),o=e(1207),i=e(6871),u=e(3328),s="Cast_authorGrid__fdwd1",f="Cast_Item__dG1eb",l="Cast_Img__OuRlf",d="Cast_title__y0C3I",p=e(184);function m(){var t=(0,i.UO)().movieId,n=(0,c.useState)(null),e=(0,a.Z)(n,2),m=e[0],h=e[1];return(0,c.useEffect)((function(){(0,o.hC)(t).then((function(t){h((0,r.Z)(t.cast))}))}),[t]),(0,p.jsx)("ul",{className:s,children:m&&m.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.cast_id;return(0,p.jsxs)("li",{className:f,children:[(0,p.jsx)("img",{className:l,src:e?o.UB+e:u,alt:r,width:"100"}),(0,p.jsx)("p",{className:d,children:r})]},n+a)}))})}},1207:function(t,n,e){e.d(n,{Ai:function(){return d},Sg:function(){return p},Tg:function(){return l},UB:function(){return u},hC:function(){return m},oJ:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),o="https://api.themoviedb.org/3",i="2638d702e8992f774e165b094b88cb75",u="https://image.tmdb.org/t/p/w500";function s(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function t(){var n,e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(n,e);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function l(t){return s("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=").concat(t))}function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&include_adult=false&page=").concat(n))}function p(t){return s("".concat(o,"/movie/").concat(t,"?api_key=").concat(i))}function m(t){return s("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"))}function h(t){return s("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"))}},3328:function(t,n,e){t.exports=e.p+"static/media/avatar.4440c226316335729b24.png"},2982:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(907);var a=e(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=581.d8cd40e2.chunk.js.map