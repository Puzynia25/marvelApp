"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[988],{9613:function(e,r,n){n.d(r,{Z:function(){return c}});var a=n.p+"static/media/error.a9865eb8e610c5f083c2.gif",t=n(184),c=function(){return(0,t.jsx)("img",{src:a,alt:"Error",style:{display:"block",width:"150px",height:"150px",margin:"0 auto"}})}},1910:function(e,r,n){n.r(r),n.d(r,{default:function(){return F}});var a=n(885),t=n(2791),c=n(7222),s=n(9613),i=n(4304),l=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=n(184),u=function(e){var r=e.charContent,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"contain"}),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:t,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:n}),(0,o.jsx)("p",{className:"randomchar__descr",children:a}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:s,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"wiki"})})]})]})]})},h=function(){var e=(0,t.useState)({}),r=(0,a.Z)(e,2),n=r[0],h=r[1],d=(0,i.Z)(),m=d.loading,p=d.error,v=d.getCharacter,f=d.clearError;(0,t.useEffect)((function(){j();var e=setInterval(j,6e4);return function(){clearInterval(e)}}),[]);var x=function(e){h(e)},j=function(){f();var e=Math.floor(400*Math.random()+1011e3);v(e).then(x)},_=p?(0,o.jsx)(s.Z,{}):null,b=m?(0,o.jsx)(c.Z,{}):null,g=m||p||!n?null:(0,o.jsx)(u,{charContent:n});return(0,o.jsxs)("div",{className:"randomchar",children:[_,b,g,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("div",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("div",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{onClick:j,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=n(2982),m=n(6983),p=n(5660),v=function(e){var r=(0,t.useState)([]),n=(0,a.Z)(r,2),l=n[0],u=n[1],h=(0,t.useState)(309),v=(0,a.Z)(h,2),f=v[0],x=v[1],j=(0,t.useState)(!1),_=(0,a.Z)(j,2),b=_[0],g=_[1],N=(0,t.useState)(!1),Z=(0,a.Z)(N,2),k=Z[0],y=Z[1],w=(0,i.Z)(),C=w.loading,S=w.error,E=w.getAllCharacters;(0,t.useEffect)((function(){F(f,!0)}),[]);var F=function(e,r){g(!r),E(e).then(I)},I=function(e){var r=!1;e.length<9&&(r=!0),u((function(r){return[].concat((0,d.Z)(r),(0,d.Z)(e))})),g(!1),x((function(e){return e+9})),y(r)};var T=function(r){var n=r.map((function(r,n){var a={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail&&(a={objectFit:"unset"});var t="char__item";return r.id===e.charId&&(t="char__item char__item_selected"),(0,o.jsx)(m.Z,{timeout:300,classNames:"char",children:(0,o.jsxs)("li",{className:t,tabIndex:0,onClick:function(){e.onCharSelected(r.id)},onKeyDown:function(n){" "!==n.key&&"Enter"!==n.key||e.onCharSelected(r.id)},children:[(0,o.jsx)("img",{src:r.thumbnail,alt:r.name,style:a}),(0,o.jsx)("div",{className:"char__name",children:r.name})]})},n)}));return(0,o.jsx)(p.Z,{className:"char__grid",children:n})}(l),A=C&&!b?(0,o.jsx)(c.Z,{}):null,q=S?(0,o.jsx)(s.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[A,q,T,(0,o.jsx)("button",{className:"button button__main button__long",disabled:b,style:{display:k?"none":"block"},onClick:function(){return F(f)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},f=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},x=n(1087),j=function(e){var r=e.charContent,n=r.name,a=r.description,t=r.thumbnail,c=r.comics,s=r.homepage,i=r.wiki,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(l={objectFit:"contain"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:t,alt:n,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:n}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:a}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[c.length>0?null:"There is no comics with this character",c.map((function(e,r){for(;r<10;)return(0,o.jsx)("li",{className:"char__comics-item",children:(0,o.jsx)(x.rU,{to:e.resourceURI.replace("http://gateway.marvel.com/v1/public/",""),children:e.name})},r)}))]})]})},_=function(e){var r=(0,t.useState)(null),n=(0,a.Z)(r,2),l=n[0],u=n[1],h=(0,i.Z)(),d=h.loading,m=h.error,p=h.getCharacter,v=h.clearError;(0,t.useEffect)((function(){_()}),[e.charId]);var x=function(e){u(e)},_=function(){var r=e.charId;r&&(v(),p(r).then(x))},b=l||d||m?null:(0,o.jsx)(f,{}),g=m?(0,o.jsx)(s.Z,{}):null,N=d?(0,o.jsx)(c.Z,{}):null,Z=d||m||!l?null:(0,o.jsx)(j,{charContent:l});return(0,o.jsxs)("div",{className:"char__info",children:[g,N,Z,b]})},b=n(5705),g=n(7103),N=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],l=(0,i.Z)(),u=l.loading,h=l.error,d=l.getCharacterByName,m=l.clearError,p=function(e){c(e),console.log(e)},v=h?(0,o.jsx)(s.Z,{}):null,f=n?n.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,o.jsx)(x.rU,{to:"/marvelApp/characters/".concat(n[0].id),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(b.J9,{initialValues:{charName:""},validationSchema:g.Ry({charName:g.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;return r=n,m(),void d(r).then(p)},children:(0,o.jsxs)(b.l0,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(b.gN,{id:"charName",name:"charName",placeholder:"Enter name",type:"text"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:u,children:(0,o.jsx)("div",{className:"inner",children:"Find"})})]}),(0,o.jsx)(b.Bc,{className:"error",name:"text",component:"div"})]})}),f,v]})},Z=n(5671),k=n(3144),y=n(136),w=n(7277),C=function(e){(0,y.Z)(n,e);var r=(0,w.Z)(n);function n(){var e;(0,Z.Z)(this,n);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=r.call.apply(r,[this].concat(t))).state={error:!1},e}return(0,k.Z)(n,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(s.Z,{}):this.props.children}}]),n}(t.Component),S=C,E=n.p+"static/media/vision.067d4ae1936d64a577ce.png",F=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(S,{children:(0,o.jsx)(h,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(S,{children:(0,o.jsx)(v,{onCharSelected:function(e){c(e)},charId:n})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(S,{children:(0,o.jsx)(_,{charId:n})}),(0,o.jsx)(S,{children:(0,o.jsx)(N,{})})]})]}),(0,o.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})}},4304:function(e,r,n){n.d(r,{Z:function(){return i}});var a=n(4165),t=n(5861),c=n(885),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)(!1),r=(0,c.Z)(e,2),n=r[0],i=r[1],l=(0,s.useState)(null),o=(0,c.Z)(l,2),u=o[0],h=o[1],d=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n,t,c,s,l,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",t=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(r,{method:n,body:t,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status ").concat(s.status));case 10:return e.next=12,s.json();case 12:return l=e.sent,i(!1),e.abrupt("return",l);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),h(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:n,error:u,request:d,clearError:(0,s.useCallback)((function(){return h(null)}),[])}}(),r=e.loading,n=e.error,i=e.request,l=e.clearError,o="https://gateway.marvel.com:443/v1/public/",u="apikey=aefde2755ed6660a8cc238637d7d41b1",h=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,n,t=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:210,e.next=3,i("".concat(o,"characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("".concat(o,"characters/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,n,t=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.next=3,i("".concat(o,"comics?limit=8&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("".concat(o,"comics/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",x(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("".concat(o,"characters?name=").concat(r,"&").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description about this character...",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,comics:e.comics.items,homepage:e.urls[0].url,wiki:e.urls[1].url}},x=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",pageCount:e.pageCount||"not available",language:e.textObjects.language||"en-us"}};return{loading:r,error:n,clearError:l,getAllCharacters:h,getCharacterByName:v,getCharacter:d,getAllComics:m,getComic:p}}}}]);
//# sourceMappingURL=988.d4a84f41.chunk.js.map