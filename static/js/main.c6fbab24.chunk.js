(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,n,t){e.exports=t.p+"static/media/logo.ba7f1fee.svg"},58:function(e,n,t){e.exports=t(96)},67:function(e,n,t){},96:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(23),i=t.n(o),l=t(16),c=t(50),s=(t(67),t(53)),u=t(9),d=t(8),p="#282C30",m="#414950",f="#F1F1E9",h="#F7E4E3",w="#FFA7C4",b="#FF0033",E="\n    transition: 0.35s ease all; \n    -moz-transition: 0.35s ease all; \n    -webkit-transition: 0.35s ease all;\n  ",v="\n    transition: 0.25s ease all; \n    -moz-transition: 0.25s ease all; \n    -webkit-transition: 0.25s ease all;\n  ",g="5px",x="4px 6px 8px rgba(0,0,0,0.25)";function y(){var e=Object(u.a)(["\n  body {\n    background-color: ",";\n    font-family: 'Roboto', sans-serif;\n  }\n"]);return y=function(){return e},e}var _=Object(d.createGlobalStyle)(y(),p),O=t(98),j=t(99),S=t(19),C=t(24),k=t(25),T=t(30),N=t(26),R=t(31),F=t(21),A={title:"18px",regular:"14px",bigLabel:"18px",mediumLabel:"12px",smallLabel:"10px",logo:{big:"96px",small:"48px"}};function W(){var e=Object(u.a)(["\n  position:relative; \n  margin-top: 35px;\n  width: 280px;\n\n  input{\n    font-size: ",";\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 90%;\n    border: none;\n    border-bottom: 2px solid ",";\n    background-color: ",";\n    color: ",";\n    ",";\n  }\n\n  input:focus {\n    outline:none;\n  }\n\n  label{\n    color: ","; \n    font-size: ","\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    ",";\n  }\n\n  input:focus ~ label, input:valid ~ label {\n    top: -12px;\n    font-size: ","\n    font-weight: bold;\n    color: ","\n  }\n\n  input:required {\n    box-shadow: none;\n  }\n\n  input:invalid {\n    box-shadow: none;\n  }\n\n"]);return W=function(){return e},e}var U=d.default.div(W(),A.title,w,p,f,E,h,A.bigLabel,E,A.mediumLabel,w),H=r.a.forwardRef(function(e,n){var t=e.inputType,o=e.labelText,i=e.required,l=void 0!==i&&i,c=e.onFocus,s=e.onBlur,u=e.onChange,d=e.onKeyDown,p=e.value,m=Object(a.useState)(!0),f=Object(F.a)(m,2),h=f[0],w=f[1];return r.a.createElement(U,{onBlur:function(e){return 0===e.target.value.length?w(!1):w(!0)},isValid:h},r.a.createElement("input",{type:t,required:l,onFocus:c,onBlur:s,onChange:u,onKeyDown:d,ref:n,value:p}),r.a.createElement("label",null,o))});function L(){var e=Object(u.a)(["\n  color: ",";\n  display: block;\n  margin-top: 6px;\n  font-size: ",";\n"]);return L=function(){return e},e}function V(){var e=Object(u.a)(["\n  margin: 0px 20px;;\n  list-style: none;\n  padding: 10px;\n  background-color: ",";\n  transition: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  min-width: 100px;\n  max-width: 410px;\n  max-height: 200px;\n  position: absolute;\n  top: 90px;\n  z-index: 9;\n  ","\n  overflow-y: scroll;\n\n  li {\n    font-size: ",";\n    color: ",";\n    margin 4px 0px;\n    transition: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return z=function(){return e},e}var B=d.default.div(z()),P=d.default.ul(V(),m,E,g,x,function(e){return e.isVisible?null:"visibility: hidden;"},A.bigLabel,f,v,w),D=d.default.span(L(),b,A.white),q=["Addendum","An Analysis","An Appraisal","Article","Banner","Biography","Birth Notice","Blog","Brief","Caption","Chronology","Column","Correction","Economic Analysis","Editorial","Editorial Cartoon","First Chapter","Front Page","Glossary","Interactive Feature","Interactive Graphic","Interview","Letter","List","Marriage Announcement","Military Analysis","News","News Analysis","Newsletter","Obituary","Obituary (Obit)","Op-Ed","Paid Death Notice","Postscript","Premium","Question","Quote","Recipe","Review","Schedule","SectionFront","Series","Slideshow","Special Report","Statistics","Summary","Text","Video","Web Log"],M=function(e){var n=e.inputType,t=e.labelText,o=(e.required,e.update_news_form_value),i=q,l=Object(a.useState)(!1),c=Object(F.a)(l,2),s=c[0],u=c[1],d=Object(a.useState)(i),p=Object(F.a)(d,2),m=p[0],f=p[1],h=r.a.createRef(),w=function(e,n){u(e)};return r.a.createElement(B,null,r.a.createElement(H,{inputType:n,labelText:t,required:!0,onFocus:w.bind(void 0,!0),onBlur:w.bind(void 0,!1),ref:h,onChange:function(e){var n=e.target.value,t=new RegExp(n,"i"),a=m.filter(function(e){return t.test(e)});f(a)},onKeyDown:function(e){"Backspace"===(e.key||e.code)&&f(i)}}),r.a.createElement(G,{listElements:m,isVisible:s,inputRef:h,setVisible:u,update_news_form_value:o}))},G=function(e){var n=e.listElements,t=e.isVisible,a=e.inputRef,o=e.update_news_form_value,i=function(e){a.current.value=e.target.dataset.value,o("material",e.target.dataset.value),a.current.blur()};return 0===n.length?r.a.createElement(D,{className:"not-found"},"Not matches found"):r.a.createElement(P,{isVisible:t},n.map(function(e,n){return r.a.createElement("li",{"data-value":e,onClick:i,key:"".concat(n).concat(e)},e)}))};function I(){var e=Object(u.a)(["\n  color: ",";\n  background: none;\n  border: none;\n  margin-top: 50px;\n  transition: ",";\n  font-size: 24px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return I=function(){return e},e}function J(){var e=Object(u.a)(["\n  color: ",";\n  background: none;\n  border: none;\n  margin-top: 50px;\n  transition: ",";\n"]);return J=function(){return e},e}d.default.button(J(),w,E);var K=d.default.button(I(),w,E),X=function(e){var n=e.onClick||function(){return console.error("not onClick provided, for the button")};return r.a.createElement(K,{onClick:n},r.a.createElement("i",{className:"fas fa-search"}))};function Y(){var e=Object(u.a)(["\n\n  .form {\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    transition: ",";\n    height: 100px;\n\n    @media only screen and (max-width: 840px) {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n  .form * {\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n\n  .logo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: ",";\n    margin-top: 25vh;\n    margin-bottom: 45px;\n\n    h1, span {\n      margin: 0px;\n    }\n\n    h1 {\n      font-size: ",";\n      line-height: 60px;\n    }\n\n    span{\n      font-size: ",";\n    }\n  }\n\n"]);return Y=function(){return e},e}var Q=d.default.div(Y(),E,w,A.logo.big,A.logo.small),Z={FETCH_NEWS:"FETCH_NEWS",fetch_news:function(e){return{type:Z.FETCH_NEWS,url:e}},FETCH_NEWS_SUCCES:"FETCH_NEWS_SUCCES",FETCH_NEWS_ERROR:"FETCH_NEWS_ERROR",FETCHING_NEWS:"FETCHING_NEWS",UPDATE_FORM_VALUE:"NEWS/UPDATE_FORM_VALUE",UPDATE_VALUE:"UPDATE_VALUE",update_news_form_value:function(e,n){return{type:Z.UPDATE_VALUE,propety:e,value:n}},FETCH_MORE_NEWS:"FETCH_MORE_NEWS;",fetch_more_news:function(e){return{type:Z.FETCH_MORE_NEWS,url:e}}},$=Z,ee=function(e,n,t){var a="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(e,'&fq=type_of_material:"').concat(n,'"&page=').concat(t,"&api-key=").concat("Gwd7EgJbQSXjeEd4ulWcXMjtFihr0GvC");return encodeURI(a)},ne=function(e){function n(){var e,t;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(T.a)(this,(e=Object(N.a)(n)).call.apply(e,[this].concat(r)))).handleSearchButton=function(){var e=t.props,n=e.keywords,a=e.material;null!=n&&null!=a&&t.props.fetch_news(ee(n,a,0))},t.updateValueOnStore=function(e,n){t.props.update_news_form_value(e,n.target.value)},t}return Object(R.a)(n,e),Object(k.a)(n,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,"NY"),r.a.createElement("span",null,"times")),r.a.createElement("div",{className:"form"},r.a.createElement(H,{inputType:"text",labelText:"Search Keywords",required:!0,onBlur:this.updateValueOnStore.bind(this,"keywords")}),r.a.createElement(M,{inputType:"text",labelText:"Type of material",required:!0,update_news_form_value:this.props.update_news_form_value}),r.a.createElement(X,{onClick:this.handleSearchButton})))}}]),n}(a.Component),te=Object(l.c)(function(e){return{material:e.newsReducer.material,keywords:e.newsReducer.keywords}},{fetch_news:$.fetch_news,update_news_form_value:$.update_news_form_value})(ne),ae=t(100);function re(){var e=Object(u.a)(["\n  .head {\n    display: flex;\n    align-items: center;\n    @media only screen and (max-width: 1150px) {\n      flex-direction: column;\n      align-items: baseline;\n    }\n\n    .form {\n      margin: 0 auto;\n      display: flex;\n      justify-content: center;\n      height: 100px;\n\n      @media only screen and (max-width: 950px) {\n        flex-direction: column;\n        align-items: center;\n        margin-top: 25px;\n      }\n    }\n\n    .form * {\n      margin-left: 5px;\n      margin-right: 5px;\n    }\n\n    .ny-logo {\n      width: 20%;\n      max-width: 250px;\n      min-width: 150px;\n      z-index: 9;\n      @media only screen and (max-width: 950px) {\n        width: 30%;\n      }\n    }\n  }\n\n  .news-feed {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .news-content {\n    a {\n      text-decoration: none;\n      color: ",";\n      font-size: ",";\n      font-weight: bold;\n    }\n\n    p {\n      font-size: ",";\n      color: ",";\n      margin: 0 2px;\n    }\n\n    h4 {\n      font-size: ",";\n      color: ",";\n      margin: 0 2px;\n      font-weight: normal;\n    }\n  }\n\n  .news-feed-row {\n    padding: 15px;\n    background-color: ",";\n    margin-top: 25px;\n    width: 80vw;\n    max-width: 900px;\n    border-radius: ",";\n    box-shadow: ",";\n    display: flex;\n\n    img {\n      width: 143px;\n      margin-right: 15px;\n      @media only screen and (max-width: 650px) {\n        display: none;\n      }\n    }\n  }\n"]);return re=function(){return e},e}var oe=d.default.div(re(),w,A.title,A.regular,w,A.mediumLabel,h,m,g,x),ie=t(54),le=t.n(ie),ce=function(e){function n(){var e,t;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(T.a)(this,(e=Object(N.a)(n)).call.apply(e,[this].concat(r)))).handleSearchButton=function(){var e=t.props,n=e.keywords,a=e.material;null!=n&&null!=a&&t.props.fetch_news(ee(n,a,0))},t.updateValueOnStore=function(e,n){t.props.update_news_form_value(e,n.target.value)},t}return Object(R.a)(n,e),Object(k.a)(n,[{key:"render",value:function(){return null===this.props.news?r.a.createElement(ae.a,{to:"/"}):r.a.createElement(oe,null,r.a.createElement("div",{className:"head"},r.a.createElement("img",{className:"ny-logo",src:le.a,alt:"NY times logo"}),r.a.createElement("div",{className:"form"},r.a.createElement(H,{inputType:"text",labelText:"Search Keywords",required:!0,onBlur:this.updateValueOnStore.bind(this,"keywords")}),r.a.createElement(M,{inputType:"text",labelText:"Type of material",required:!0,update_news_form_value:this.props.update_news_form_value}),r.a.createElement(X,{onClick:this.handleSearchButton}))),r.a.createElement(se,{news:this.props.news}))}}]),n}(a.Component),se=function(e){var n=e.news;return r.a.createElement("div",{className:"news-feed"},n.map(function(e,n){return r.a.createElement("div",{className:"news-feed-row"},e.multimedia[0]&&r.a.createElement("img",{src:"http://static01.nyt.com/".concat(e.multimedia[0].url),alt:""}),r.a.createElement("div",{className:"news-content",key:"".concat(n).concat(e.headline.main)},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.web_url,className:"headline"},e.headline.main),r.a.createElement("p",{className:"snippet"},e.snippet),r.a.createElement("h4",null,"Source: ".concat(e.source)),r.a.createElement("h4",null,"Published: ".concat(e.pub_date))))}))},ue=Object(l.c)(function(e){return{material:e.newsReducer.material,keywords:e.newsReducer.keywords,news:e.newsReducer.news}},{fetch_news:$.fetch_news,update_news_form_value:$.update_news_form_value})(ce),de=function(e){var n=e.history;return r.a.createElement(S.a,{history:n},r.a.createElement(O.a,null,r.a.createElement(j.a,{exact:!0,path:"/",component:te}),r.a.createElement(j.a,{exact:!0,path:"/feed",component:ue}),r.a.createElement(j.a,{render:function(){return r.a.createElement("p",null,"not found")}})))},pe=function(e){var n=e.history;return r.a.createElement(a.Fragment,null,r.a.createElement(s.Helmet,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,500,700",rel:"stylesheet"}),r.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.7.2/js/solid.js",integrity:"sha384-6FXzJ8R8IC4v/SKPI8oOcRrUkJU8uvFK6YJ4eDY11bJQz4lRw5/wGthflEOX8hjL",crossorigin:"anonymous"}),r.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.7.2/js/fontawesome.js",integrity:"sha384-xl26xwG2NVtJDw2/96Lmg09++ZjrXPc89j0j7JHjLOdSwHDHPHiucUjfllW0Ywrq",crossorigin:"anonymous"}),r.a.createElement("title",null,"times")),r.a.createElement(_,null),r.a.createElement(de,{history:n}))},me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var he=t(20),we=t(15),be=t(43),Ee=t(56),ve=t(29),ge=t(32),xe={news:null,newsState:null,material:null,keywords:null};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $.FETCH_NEWS_SUCCES:return Object(ge.a)({},e,{newsState:n.newsState,news:n.news});case $.FETCH_NEWS_ERROR:return Object(ge.a)({},e,{newsState:$.FETCH_NEWS_ERROR});case $.UPDATE_VALUE:return Object(ge.a)({},e,Object(ve.a)({},n.propety,n.value));default:return e}}var _e=Object(he.a)({basename:"/nytimes"}),Oe=t(10),je=t.n(Oe),Se=t(11),Ce=t(55),ke=t.n(Ce),Te=function(e){return ke.a.get(e).then(function(e){return e.data}).catch(function(e){return e})},Ne=t(7),Re=je.a.mark(Ae),Fe=je.a.mark(We);function Ae(){return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.e)($.FETCH_NEWS,je.a.mark(function e(n){var t;return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Se.b)(Te,n.url);case 3:return t=e.sent,e.next=6,Object(Se.d)({type:$.FETCH_NEWS_SUCCES,newsState:$.FETCH_NEWS_SUCCES,news:t.response.docs});case 6:return e.next=8,Object(Se.d)(Object(Ne.d)("/feed"));case 8:return e.next=10,Object(Se.d)({type:$.UPDATE_VALUE,propety:"material",value:null});case 10:e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.next=17,Object(Se.d)({type:$.FETCH_NEWS_ERROR});case 17:case"end":return e.stop()}},e,null,[[0,12]])}));case 2:case"end":return e.stop()}},Re)}function We(){return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.a)([Object(Se.c)(Ae)]);case 2:case"end":return e.stop()}},Fe)}var Ue=je.a.mark(He);function He(e){return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.a)([Object(Se.c)(We)]);case 2:case"end":return e.stop()}},Ue)}var Le=function(e){var n,t=Object(Ee.a)();return{store:Object(we.e)((n=_e,Object(we.c)({router:Object(S.b)(n),newsReducer:ye})),e,Object(we.d)(Object(we.a)(Object(be.a)(_e),t),window.devToolsExtension?window.devToolsExtension():function(e){return e})),sagaMiddleware:t}}(),Ve=Le.store;Le.sagaMiddleware.run(He);i.a.render(r.a.createElement(function(){return r.a.createElement(a.Fragment,null,r.a.createElement(c.Normalize,null),r.a.createElement(l.a,{store:Ve},r.a.createElement(pe,{history:_e})))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nytimes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/nytimes","/service-worker.js");me?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):fe(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):fe(n,e)})}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.c6fbab24.chunk.js.map