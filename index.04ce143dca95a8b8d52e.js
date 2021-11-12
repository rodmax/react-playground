(()=>{var e,t,s,r,n,a={6759:(e,t,s)=>{"use strict";var r=s(5893),n=s(3935),a=s(7294);const o=e=>e.settings.i18n.isTranslationsLoaded&&e.settings.isConfigLoaded,i=e=>e.settings.i18n.language;var l=s(6372),u=s(429),c=s(7779),d=s(7469),g=s(2915),h=s(8500);const p=(e,t)=>({withReducer:s=>({[e]:(e,r)=>s(e||t,r)})}),b=p("githubProfile",{username:"",userDto:null,isLoading:!1,error:null}).withReducer(((e,t)=>{switch(t.type){case"@githubProfile.loadStart":return Object.assign(Object.assign({},e),{username:t.payload.username,isLoading:!0});case"@githubProfile.loadSuccess":return Object.assign(Object.assign({},e),{isLoading:!1,userDto:t.payload});case"@githubProfile.loadError":return Object.assign(Object.assign({},e),{isLoading:!1,error:t.payload})}return e}));var j=s(9304),f=s(4978),v=s(9127),m=s(655);const y=["status","statusText","type","ok"];var O=s(6536);function x(e,t,s){const r=function(e,t){if(null==e||""===e)return null;switch(typeof e){case"boolean":return t.serializeBoolean(e);case"number":return t.serializeNumber(e);case"string":return e;case"object":return t.serializeJson(e);default:return e.toString()}}(t,s);return r?`${encodeURIComponent(e)}=${encodeURIComponent(r)}`:null}const w={serializeBoolean:e=>e.toString(),serializeNumber:e=>e.toString(),serializeJson:e=>JSON.stringify(e)};class P extends Error{constructor(e,t){super("http client error"),this.config=e,this.response=t}}function L(e,t){return t.reduce(((t,s)=>(t[s]=e[s],t)),{})}const S=new class{constructor(e={}){this.config_=Object.assign(Object.assign({},this.defaultConfig()),e)}request(e){let t=e.url;const s=e.queryParams&&function(e,t=w){const s=[],r=e=>e&&s.push(e);return Object.keys(e).forEach((s=>{const n=e[s];Array.isArray(n)?n.forEach((e=>{r(x(s,e,t))})):r(x(s,n,t))})),s.join("&")}(e.queryParams,this.config_.querySerializer);return s&&(t=`${t}?${s}`),(0,O.U)(t,{method:e.method}).pipe((0,f.w)((t=>this.handleFetchResponse(t,e))))}handleFetchResponse(e,t){return(0,m.mG)(this,void 0,void 0,(function*(){const s=L(e,y);if(!e.ok)throw new P(t,Object.assign(Object.assign({},s),{body:null,fetchResponse:e}));const r=yield e.json(),n=Object.assign(Object.assign({},s),{body:r,fetchResponse:e});if(e.status>=400)throw new P(t,n);return n}))}defaultConfig(){return{querySerializer:w}}},k=function(e){return S.request({method:"GET",url:`https://api.github.com/users/${e}`}).pipe((0,v.U)((({body:e})=>e)))},_=e=>({withNoPayload:()=>()=>({type:e,payload:null}),withPayload:()=>t=>({type:e,payload:t})}),T={loadStart:_("@githubProfile.loadStart").withPayload(),loadSuccess:_("@githubProfile.loadSuccess").withPayload(),loadError:_("@githubProfile.loadError").withPayload()},N=p("auth",{apiToken:""}).withReducer(((e,t)=>{switch(t.type){case"@auth.login":return Object.assign({},t.payload);case"@auth.logout":return{apiToken:""}}return e})),C=/([^:])\/\//g,E=new class{constructor(e){this.options_=e,this.token_=""}updateToken(e){this.token_=e}request(e){return this.options_.httpBackend.request({method:e.method,url:this.url(e.urlParts),queryParams:e.queryParams,body:e.body})}url(e){return function(e){return e.join("/").replaceAll(C,"$1/")}([this.endpoint(),...e])}endpoint(){return this.options_.endpointTemplate.replace("{token}",this.token_)}}({httpBackend:S,endpointTemplate:"https://{token}.mockapi.io/api/v1"});var U=s(9653),q=s(9973);const R=p("usersList",{users:null,isLoading:!1,error:null}).withReducer(((e,t)=>{switch(t.type){case"@usersList.loadStart":return Object.assign(Object.assign({},e),{isLoading:!0});case"@usersList.loadSuccess":return Object.assign(Object.assign({},e),{isLoading:!1,users:t.payload});case"@usersList.loadError":return Object.assign(Object.assign({},e),{isLoading:!1,error:t.payload})}return e})),I={loadStart:_("@usersList.loadStart").withNoPayload(),loadSuccess:_("@usersList.loadSuccess").withPayload(),loadError:_("@usersList.loadError").withPayload()};function A(e){return e.body}class M{constructor(e){this.options=e}create(e){return this.request({method:"POST",urlParts:[],body:e}).pipe((0,v.U)(A))}update(e,t){return this.request({method:"PUT",urlParts:[e],body:t}).pipe((0,v.U)(A))}search(e){return this.request({method:"GET",urlParts:[],queryParams:e}).pipe((0,v.U)(A))}request(e){return E.request(Object.assign(Object.assign({},e),{urlParts:[this.options.resourceUrl,...e.urlParts]}))}}const $=new class{constructor(){this.client_=new M({resourceUrl:"/users"})}search(e){return this.client_.search(e)}},D=p("settings",{isConfigLoaded:!1,i18n:{language:null,isTranslationsLoaded:!1}}).withReducer(((e,t)=>{switch(t.type){case"@settings.setLanguage":return Object.assign(Object.assign({},e),{i18n:Object.assign(Object.assign({},e.i18n),{language:t.payload.language,isTranslationsLoaded:!1})});case"@settings.changeLanguage":return Object.assign(Object.assign({},e),{i18n:Object.assign(Object.assign({},e.i18n),{language:t.payload.language})});case"@settings.loadTranslations":return Object.assign(Object.assign({},e),{i18n:Object.assign(Object.assign({},e.i18n),{isTranslationsLoaded:!0})});case"@settings.loadConfigSuccess":return Object.assign(Object.assign({},e),{isConfigLoaded:!0})}return e}));var F=s(6899),z=s(8536);const B={setLanguage:_("@settings.setLanguage").withPayload(),changeLanguage:_("@settings.changeLanguage").withPayload(),loadTranslations:_("@settings.loadTranslations").withNoPayload(),loadConfigSuccess:_("@settings.loadConfigSuccess").withNoPayload()};function J(e,t){return e.includes(t)}var Z=s(8826);const G=["ru","en"],H=["app","auth","user"],V=new class{constructor(e){this.options=e,Z.Z.init({lng:this.options.defaultLanguage,debug:this.options.debug,keySeparator:!1,interpolation:{escape:void 0},resources:{}})}translateFunction(){return Z.Z.t.bind(Z.Z)}setLanguageWithTranslations(e,t){t.forEach((([t,s])=>{Z.Z.addResourceBundle(e,t,s,!0,!0)})),Z.Z.changeLanguage(e)}browserLanguage(){const e=window.navigator.languages[0]||window.navigator.language;return J(this.options.languages,e)?e:this.options.defaultLanguage}enableTestingMode(){Z.Z.changeLanguage("cimode")}}({debug:!1,defaultLanguage:"en",languages:G}),W=V.translateFunction();var Y=s(2006);let K=null;function Q(){if(K)return K;throw new Error("Assertion error: attempt to config access before loading")}const X=new class{constructor(e){this.key_=`app.${e}`}set(e){localStorage.setItem(this.key_,JSON.stringify(e))}get(e=null){const t=localStorage.getItem(this.key_);let s=null;try{s=null!==t?JSON.parse(t):e}catch(t){s=e}return s}}("setting"),ee=[e=>e.pipe((0,j.l)("@settings.changeLanguage","@settings.setLanguage"),(0,F.z)((e=>{switch(e.type){case"@settings.setLanguage":return(t=e.payload.language,Promise.all(H.map((e=>s(2007)(`./${e}-${t}.json`).then((t=>[e,t.default])))))).then((t=>(V.setLanguageWithTranslations(e.payload.language,t),B.loadTranslations())));case"@settings.changeLanguage":return X.set(e.payload.language),window.location.reload(),U.C}var t;return U.C})),(0,z.O)(B.setLanguage({language:X.get(V.browserLanguage())}))),()=>(K?(console.warn("app config already loaded"),U.C):S.request({method:"GET",url:"config.json"}).pipe((0,Y.b)((e=>{K=e.body})))).pipe((0,v.U)((()=>B.loadConfigSuccess())))],te=(se={reducers:Object.assign(Object.assign(Object.assign(Object.assign({},b),N),R),D),epics:[e=>e.pipe((0,j.l)("@githubProfile.loadStart"),(0,f.w)((e=>k(e.payload.username).pipe((0,v.U)((e=>T.loadSuccess(e))))))),e=>{const t=e.pipe((0,j.l)("@auth.login","@auth.logout"),(0,f.w)((e=>{switch(e.type){case"@auth.login":E.updateToken(e.payload.apiToken);break;case"@auth.logout":E.updateToken("")}return U.C}))),s=U.C;return(0,q.T)(t,s)},e=>e.pipe((0,j.l)("@usersList.loadStart"),(0,f.w)((()=>$.search({limit:10,page:1,orderBy:"asc",sortBy:"name"}).pipe((0,v.U)((e=>I.loadSuccess(e))))))),...ee],enabledDevTools:!0},se=Object.assign({enabledDevTools:!1},se),()=>{const e=(0,c.UY)(se.reducers),t=(0,d.k)();let s=(0,c.md)(t);se.enabledDevTools&&(s=(0,h.Uo)(s));const r=(0,c.MT)(e,s);return t.run((0,g.l)(...se.epics)),r});var se,re=s(9778),ne=s(9626);const ae=[{name:"home",path:"/"},{name:"users",path:"/users"},{name:"github-profile",path:"/github-profile"}];var oe=s(4184),ie=s.n(oe);const le=e=>e.isVisible?(0,r.jsxs)("div",Object.assign({className:ie()("bars-spinner",{"mod-fit-container":e.fitContainer})},{children:[(0,r.jsx)("span",{},void 0),(0,r.jsx)("span",{},void 0),(0,r.jsx)("span",{},void 0),(0,r.jsx)("span",{},void 0),(0,r.jsx)("span",{},void 0)]}),void 0):null,ue=e=>(0,r.jsx)("div",Object.assign({className:"page-content"},{children:e.children}),void 0),ce=e=>{const t=e.user;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:t.login},void 0),(0,r.jsx)("img",{src:t.avatar_url},void 0),(0,r.jsx)("pre",{children:JSON.stringify(t,null,4)},void 0)]},void 0)},de=e=>e.githubProfile.userDto,ge=e=>e.githubProfile.isLoading,he=e=>e.auth.apiToken,pe=e=>!!e.auth.apiToken,be={login:_("@auth.login").withPayload(),logout:_("@auth.logout").withNoPayload()},je=()=>{const e=(0,l.v9)(he),[t,s]=(0,a.useState)(e),n=(0,l.I0)();return(0,r.jsxs)("form",Object.assign({onSubmit:e=>{e.preventDefault(),n(be.login({apiToken:t}))}},{children:[(0,r.jsx)("input",{value:t,placeholder:W("auth:authForm.apiTokenInputPlaceholder"),onChange:e=>s(e.target.value),required:!0,name:"apiToken"},void 0),(0,r.jsx)("div",{children:(0,r.jsx)("a",Object.assign({href:"https://mockapi.io",rel:"noreferrer",target:"_blank"},{children:W("auth:authForm.apiLink")}),void 0)},void 0)]}),void 0)},fe={ADMIN:"user:role.ADMIN",CASHIER:"user:role.CASHIER",COURIER:"user:role.COURIER",CLIENT:"user:role.CLIENT"},ve=({user:e})=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:W(fe[e.role])},void 0),(0,r.jsx)("pre",{children:JSON.stringify(e,null,2)},void 0)]},void 0),me=e=>e.usersList,ye=["github-profile","users"],Oe=e=>(0,r.jsx)(u.rU,Object.assign({className:e.className,routeName:e.routeName},{children:e.children}),void 0),xe=()=>(0,r.jsx)("div",Object.assign({className:"main-sidebar u-pad-16"},{children:ye.map((e=>(0,r.jsx)(Oe,Object.assign({className:"main-sidebar__nav-link",routeName:e},{children:e}),e)))}),void 0);var we=s(35);const Pe=()=>{const e=(0,l.v9)(i),t=(0,l.I0)();return(0,r.jsx)("select",Object.assign({value:e||"",onChange:e=>{const s=e.target.value;J(G,s)&&t(B.changeLanguage({language:s}))}},{children:G.map((e=>(0,r.jsx)("option",Object.assign({value:e},{children:e}),e)))}),void 0)};var Le=s(9574);const Se=()=>(0,r.jsxs)("div",Object.assign({className:"main-header"},{children:[(0,r.jsx)(Oe,Object.assign({className:"main-header__logo-link",routeName:"home"},{children:(0,r.jsx)("img",{className:"main-header__logo-link-img",src:Le},void 0)}),void 0),(0,r.jsx)("h1",Object.assign({className:"main-header__title"},{children:W("app:header.mainHeader")}),void 0),(0,r.jsx)("a",Object.assign({className:"main-header__right-item",href:we,target:"_blank",rel:"noreferrer"},{children:W("app:header.bundleReportLink")}),void 0),(0,r.jsx)("div",Object.assign({className:"main-header__right-item"},{children:(0,r.jsx)(Pe,{},void 0)}),void 0)]}),void 0);var ke=s(2803);const _e={"github-profile":{PageComponent:()=>{const e=(0,l.v9)(de),t=(0,l.v9)(ge),s=(0,l.I0)();return(0,a.useEffect)((()=>{s(T.loadStart({username:"rodmax"}))}),[s]),(0,r.jsxs)(ue,{children:[(0,r.jsx)("h2",{children:"Github profile"},void 0),e?(0,r.jsx)(ce,{user:e},void 0):null,(0,r.jsx)(le,{isVisible:t,fitContainer:!0},void 0)]},void 0)}},users:{PageComponent:()=>{var e;const t=(0,l.v9)(pe),s=(0,l.v9)(me),n=(0,l.I0)();return(0,a.useEffect)((()=>{t&&n(I.loadStart())}),[n,t]),(0,r.jsxs)(ue,{children:[(0,r.jsx)(je,{},void 0),(0,r.jsx)("pre",{children:JSON.stringify(L(s,["isLoading","error"]),null,2)},void 0),(0,r.jsx)("p",{children:null===s.users?W("user:usersListPage.noUserLoaded"):W("app:total",{total:s.users.count})},void 0),null===(e=s.users)||void 0===e?void 0:e.items.map((e=>(0,r.jsx)(ve,{user:e},e.id))),(0,r.jsx)(le,{isVisible:s.isLoading,fitContainer:!0},void 0)]},void 0)}},home:{PageComponent:()=>(0,r.jsx)(ue,{children:(0,r.jsxs)("div",Object.assign({className:"home-page"},{children:[(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{children:W("app:homePageTitle")},void 0),(0,r.jsx)("pre",{children:JSON.stringify(Q(),null,2)},void 0)]},void 0),(0,r.jsx)("img",{src:ke},void 0)]}),void 0)},void 0)}},Te=()=>{const e=(0,u.yj)().route.name,t=_e[e];return(0,r.jsxs)("main",Object.assign({className:"main-layout g-layout"},{children:[(0,r.jsx)("header",Object.assign({className:"main-layout__header"},{children:(0,r.jsx)(Se,{},void 0)}),void 0),(0,r.jsx)("aside",Object.assign({className:"main-layout__sidebar"},{children:(0,r.jsx)(xe,{},void 0)}),void 0),(0,r.jsx)("section",Object.assign({className:"main-layout__content"},{children:(0,r.jsx)(t.PageComponent,{},void 0)}),void 0)]}),void 0)},Ne=function(){const e=(0,re.ZP)(ae);return e.usePlugin((0,ne.Z)({useHash:!0})),e}();Ne.start();const Ce=()=>(0,l.v9)(o)?(0,r.jsx)(Te,{},void 0):(0,r.jsx)(r.Fragment,{children:"..."},void 0);!function(){const e={get config(){return Q()}};window.dev=e}(),n.render((0,r.jsx)((()=>(0,r.jsx)(a.StrictMode,{children:(0,r.jsx)(u.pG,Object.assign({router:Ne},{children:(0,r.jsx)(l.zt,Object.assign({store:te()},{children:(0,r.jsx)(Ce,{},void 0)}),void 0)}),void 0)},void 0)),{},void 0),document.getElementById("root"))},2007:(e,t,s)=>{var r={"./app-en.json":[3254,707],"./app-ru.json":[6162,628],"./auth-en.json":[285,251],"./auth-ru.json":[5394,764],"./user-en.json":[9930,367],"./user-ru.json":[6300,929]};function n(e){if(!s.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return s.e(t[1]).then((()=>s.t(n,19)))}n.keys=()=>Object.keys(r),n.id=2007,e.exports=n},2803:(e,t,s)=>{"use strict";e.exports=s.p+"assets/big-logo.ffbbf8ab5baed4973290.svg"},35:(e,t,s)=>{"use strict";e.exports=s.p+"assets/bundles-report.html"},9574:(e,t,s)=>{"use strict";e.exports=s.p+"assets/logo.38e2905cf0fa4dc4c1d6.svg"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={id:e,loaded:!1,exports:{}};return a[e](s,s.exports,i),s.loaded=!0,s.exports}i.m=a,e=[],i.O=(t,s,r,n)=>{if(!s){var a=1/0;for(c=0;c<e.length;c++){for(var[s,r,n]=e[c],o=!0,l=0;l<s.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](s[l])))?s.splice(l--,1):(o=!1,n<a&&(a=n));if(o){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var a={};t=t||[null,s({}),s([]),s(s)];for(var o=2&r&&e;"object"==typeof o&&!~t.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,i.d(n,a),n},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,s)=>(i.f[s](e,t),t)),[])),i.u=e=>({251:"auth-en-json",367:"user-en-json",628:"app-ru-json",707:"app-en-json",764:"auth-ru-json",929:"user-ru-json"}[e]+"."+{251:"f0a77c7714a3be4f2ed4",367:"2ea65ed18336cfa6372f",628:"5e0c323216b0b4fe8c26",707:"f1eac85f77ed7a96e234",764:"8b68d05882c713f3120f",929:"73d034f68273160284de"}[e]+".js"),i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="react-playground:",i.l=(e,t,s,a)=>{if(r[e])r[e].push(t);else{var o,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+s){o=d;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",n+s),o.src=e),r[e]=[t];var g=(t,s)=>{o.onerror=o.onload=null,clearTimeout(h);var n=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(s))),t)return t(s)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),l&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={826:0};i.f.j=(t,s)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var n=new Promise(((s,n)=>r=e[t]=[s,n]));s.push(r[2]=n);var a=i.p+i.u(t),o=new Error;i.l(a,(s=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r[1](o)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,s)=>{var r,n,[a,o,l]=s,u=0;if(a.some((t=>0!==e[t]))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var c=l(i)}for(t&&t(s);u<a.length;u++)n=a[u],i.o(e,n)&&e[n]&&e[n][0](),e[a[u]]=0;return i.O(c)},s=self.webpackChunkreact_playground=self.webpackChunkreact_playground||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var l=i.O(void 0,[736],(()=>i(6759)));l=i.O(l)})();
//# sourceMappingURL=index.04ce143dca95a8b8d52e.js.map