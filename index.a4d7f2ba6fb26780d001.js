(()=>{var e,t,s,n,a={6759:(e,t,s)=>{"use strict";var n=s(5893),a=s(3935),r=s(7294);const o=e=>e.settings.i18n.isTranslationsLoaded&&e.settings.isConfigLoaded,i=e=>e.settings.i18n.language;var u=s(5155),c=s(429),l=s(4890),d=s(6228),g=s(4454),h=s(8500);const p=(e,t)=>({withReducer:s=>({[e]:(e,n)=>s(e||t,n)})}),b=p("githubProfile",{username:"",userDto:null,isLoading:!1,error:null}).withReducer(((e,t)=>{switch(t.type){case"@githubProfile.loadStart":return Object.assign(Object.assign({},e),{username:t.payload.username,isLoading:!0});case"@githubProfile.loadSuccess":return Object.assign(Object.assign({},e),{isLoading:!1,userDto:t.payload});case"@githubProfile.loadError":return Object.assign(Object.assign({},e),{isLoading:!1,error:t.payload})}return e}));var j=s(7935),f=s(6381),v=s(5709),m=s(655);const y=["status","statusText","type","ok"];var O=s(2948);function x(e,t,s){const n=function(e,t){if(null==e||""===e)return null;switch(typeof e){case"boolean":return t.serializeBoolean(e);case"number":return t.serializeNumber(e);case"string":return e;case"object":return t.serializeJson(e);default:return e.toString()}}(t,s);return n?`${encodeURIComponent(e)}=${encodeURIComponent(n)}`:null}const w={serializeBoolean:e=>e.toString(),serializeNumber:e=>e.toString(),serializeJson:e=>JSON.stringify(e)};class P extends Error{constructor(e,t){super("http client error"),this.config=e,this.response=t}}function L(e,t){return t.reduce(((t,s)=>(t[s]=e[s],t)),{})}const S=new class{constructor(e={}){this.config=Object.assign(Object.assign({},this.defaultConfig()),e)}request(e){let t=e.url;const s=e.queryParams&&function(e,t=w){const s=[],n=e=>e&&s.push(e);return Object.keys(e).forEach((s=>{const a=e[s];Array.isArray(a)?a.forEach((e=>{n(x(s,e,t))})):n(x(s,a,t))})),s.join("&")}(e.queryParams,this.config.querySerializer);return s&&(t=`${t}?${s}`),(0,O.U)(t,{method:e.method}).pipe((0,f.w)((t=>this.handleFetchResponse(t,e))))}handleFetchResponse(e,t){return(0,m.mG)(this,void 0,void 0,(function*(){const s=L(e,y);if(!e.ok)throw new P(t,Object.assign(Object.assign({},s),{body:null,fetchResponse:e}));const n=yield e.json(),a=Object.assign(Object.assign({},s),{body:n,fetchResponse:e});if(e.status>=400)throw new P(t,a);return a}))}defaultConfig(){return{querySerializer:w}}},k=function(e){return S.request({method:"GET",url:`https://api.github.com/users/${e}`}).pipe((0,v.U)((({body:e})=>e)))},T=e=>({withNoPayload:()=>()=>({type:e,payload:null}),withPayload:()=>t=>({type:e,payload:t})}),N={loadStart:T("@githubProfile.loadStart").withPayload(),loadSuccess:T("@githubProfile.loadSuccess").withPayload(),loadError:T("@githubProfile.loadError").withPayload()},C=p("auth",{apiToken:""}).withReducer(((e,t)=>{switch(t.type){case"@auth.login":return Object.assign({},t.payload);case"@auth.logout":return{apiToken:""}}return e})),E=/([^:])\/\//g,_=new class{constructor(e){this.options=e,this.token=""}updateToken(e){this.token=e}request(e){return this.options.httpBackend.request({method:e.method,url:this.url(e.urlParts),queryParams:e.queryParams,body:e.body})}url(e){return function(e){return e.join("/").replaceAll(E,"$1/")}([this.endpoint(),...e])}endpoint(){return this.options.endpointTemplate.replace("{token}",this.token)}}({httpBackend:S,endpointTemplate:"https://{token}.mockapi.io/api/v1"});var U=s(3720),q=s(4370);const R=p("usersList",{users:null,isLoading:!1,error:null}).withReducer(((e,t)=>{switch(t.type){case"@usersList.loadStart":return Object.assign(Object.assign({},e),{isLoading:!0});case"@usersList.loadSuccess":return Object.assign(Object.assign({},e),{isLoading:!1,users:t.payload});case"@usersList.loadError":return Object.assign(Object.assign({},e),{isLoading:!1,error:t.payload})}return e})),I={loadStart:T("@usersList.loadStart").withNoPayload(),loadSuccess:T("@usersList.loadSuccess").withPayload(),loadError:T("@usersList.loadError").withPayload()};function A(e){return e.body}class M{constructor(e){this.options=e}create(e){return this.request({method:"POST",urlParts:[],body:e}).pipe((0,v.U)(A))}update(e,t){return this.request({method:"PUT",urlParts:[e],body:t}).pipe((0,v.U)(A))}search(e){return this.request({method:"GET",urlParts:[],queryParams:e}).pipe((0,v.U)(A))}request(e){return _.request(Object.assign(Object.assign({},e),{urlParts:[this.options.resourceUrl,...e.urlParts]}))}}const $=new class{constructor(){this.client=new M({resourceUrl:"/users"})}search(e){return this.client.search(e)}},D=p("settings",{isConfigLoaded:!1,i18n:{language:null,isTranslationsLoaded:!1}}).withReducer(((e,t)=>{switch(t.type){case"@settings.setLanguage":return Object.assign(Object.assign({},e),{i18n:Object.assign(Object.assign({},e.i18n),{language:t.payload.language,isTranslationsLoaded:!1})});case"@settings.changeLanguage":return Object.assign(Object.assign({},e),{i18n:Object.assign(Object.assign({},e.i18n),{language:t.payload.language})});case"@settings.loadTranslations":return Object.assign(Object.assign({},e),{i18n:Object.assign(Object.assign({},e.i18n),{isTranslationsLoaded:!0})});case"@settings.loadConfigSuccess":return Object.assign(Object.assign({},e),{isConfigLoaded:!0})}return e}));var F=s(4759),z=s(1993);const B={setLanguage:T("@settings.setLanguage").withPayload(),changeLanguage:T("@settings.changeLanguage").withPayload(),loadTranslations:T("@settings.loadTranslations").withNoPayload(),loadConfigSuccess:T("@settings.loadConfigSuccess").withNoPayload()};function J(e,t){return e.includes(t)}var Z=s(4613);const G=["ru","en"],H=["app","auth","user"],V=new class{constructor(e){this.options=e,Z.Z.init({lng:this.options.defaultLanguage,debug:this.options.debug,keySeparator:!1,interpolation:{escape:void 0},resources:{}})}translateFunction(){return Z.Z.t.bind(Z.Z)}setLanguageWithTranslations(e,t){t.forEach((([t,s])=>{Z.Z.addResourceBundle(e,t,s,!0,!0)})),Z.Z.changeLanguage(e)}browserLanguage(){const e=window.navigator.languages[0]||window.navigator.language;return J(this.options.languages,e)?e:this.options.defaultLanguage}enableTestingMode(){Z.Z.changeLanguage("cimode")}}({debug:!1,defaultLanguage:"en",languages:G}),W=V.translateFunction();var Y=s(3068);let K=null;function Q(){if(K)return K;throw new Error("Assertion error: attempt to config access before loading")}const X=new class{constructor(e){this.key=`app.${e}`}set(e){localStorage.setItem(this.key,JSON.stringify(e))}get(e=null){const t=localStorage.getItem(this.key);let s=null;try{s=null!==t?JSON.parse(t):e}catch(t){s=e}return s}}("setting"),ee=[e=>e.pipe((0,j.l)("@settings.changeLanguage","@settings.setLanguage"),(0,F.z)((e=>{switch(e.type){case"@settings.setLanguage":return(t=e.payload.language,Promise.all(H.map((e=>s(2007)(`./${e}-${t}.json`).then((t=>[e,t.default])))))).then((t=>(V.setLanguageWithTranslations(e.payload.language,t),B.loadTranslations())));case"@settings.changeLanguage":return X.set(e.payload.language),window.location.reload(),U.C}var t;return U.C})),(0,z.O)(B.setLanguage({language:X.get(V.browserLanguage())}))),()=>(K?(console.warn("app config already loaded"),U.C):S.request({method:"GET",url:"config.json"}).pipe((0,Y.b)((e=>{K=e.body})))).pipe((0,v.U)((()=>B.loadConfigSuccess())))],te=(se={reducers:Object.assign(Object.assign(Object.assign(Object.assign({},b),C),R),D),epics:[e=>e.pipe((0,j.l)("@githubProfile.loadStart"),(0,f.w)((e=>k(e.payload.username).pipe((0,v.U)((e=>N.loadSuccess(e))))))),e=>{const t=e.pipe((0,j.l)("@auth.login","@auth.logout"),(0,f.w)((e=>{switch(e.type){case"@auth.login":_.updateToken(e.payload.apiToken);break;case"@auth.logout":_.updateToken("")}return U.C}))),s=U.C;return(0,q.T)(t,s)},e=>e.pipe((0,j.l)("@usersList.loadStart"),(0,f.w)((()=>$.search({limit:10,page:1,orderBy:"asc",sortBy:"name"}).pipe((0,v.U)((e=>I.loadSuccess(e))))))),...ee],enabledDevTools:!0},se=Object.assign({enabledDevTools:!1},se),()=>{const e=(0,l.UY)(se.reducers),t=(0,d.k)();let s=(0,l.md)(t);se.enabledDevTools&&(s=(0,h.Uo)(s));const n=(0,l.MT)(e,s);return t.run((0,g.l)(...se.epics)),n});var se,ne=s(9778),ae=s(9626);const re=[{name:"home",path:"/"},{name:"users",path:"/users"},{name:"github-profile",path:"/github-profile"}];var oe=s(4184),ie=s.n(oe);const ue=e=>e.isVisible?(0,n.jsxs)("div",Object.assign({className:ie()("bars-spinner",{"mod-fit-container":e.fitContainer})},{children:[(0,n.jsx)("span",{},void 0),(0,n.jsx)("span",{},void 0),(0,n.jsx)("span",{},void 0),(0,n.jsx)("span",{},void 0),(0,n.jsx)("span",{},void 0)]}),void 0):null,ce=e=>(0,n.jsx)("div",Object.assign({className:"page-content"},{children:e.children}),void 0),le=e=>{const t=e.user;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:t.login},void 0),(0,n.jsx)("img",{src:t.avatar_url},void 0),(0,n.jsx)("pre",{children:JSON.stringify(t,null,4)},void 0)]},void 0)},de=e=>e.githubProfile.userDto,ge=e=>e.githubProfile.isLoading,he=e=>e.auth.apiToken,pe=e=>!!e.auth.apiToken,be={login:T("@auth.login").withPayload(),logout:T("@auth.logout").withNoPayload()},je=()=>{const e=(0,u.v9)(he),[t,s]=(0,r.useState)(e),a=(0,u.I0)();return(0,n.jsxs)("form",Object.assign({onSubmit:e=>{e.preventDefault(),a(be.login({apiToken:t}))}},{children:[(0,n.jsx)("input",{value:t,placeholder:W("auth:authForm.apiTokenInputPlaceholder"),onChange:e=>s(e.target.value),required:!0,name:"apiToken"},void 0),(0,n.jsx)("div",{children:(0,n.jsx)("a",Object.assign({href:"https://mockapi.io",rel:"noreferrer",target:"_blank"},{children:W("auth:authForm.apiLink")}),void 0)},void 0)]}),void 0)},fe={ADMIN:"user:role.ADMIN",CASHIER:"user:role.CASHIER",COURIER:"user:role.COURIER",CLIENT:"user:role.CLIENT"},ve=({user:e})=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:W(fe[e.role])},void 0),(0,n.jsx)("pre",{children:JSON.stringify(e,null,2)},void 0)]},void 0),me=e=>e.usersList,ye=["github-profile","users"],Oe=e=>(0,n.jsx)(c.rU,Object.assign({className:e.className,routeName:e.routeName},{children:e.children}),void 0),xe=()=>(0,n.jsx)("div",Object.assign({className:"main-sidebar u-pad-16"},{children:ye.map((e=>(0,n.jsx)(Oe,Object.assign({className:"main-sidebar__nav-link",routeName:e},{children:e}),e)))}),void 0);var we=s(1462);const Pe=()=>{const e=(0,u.v9)(i),t=(0,u.I0)();return(0,n.jsx)("select",Object.assign({value:e||"",onChange:e=>{const s=e.target.value;J(G,s)&&t(B.changeLanguage({language:s}))}},{children:G.map((e=>(0,n.jsx)("option",Object.assign({value:e},{children:e}),e)))}),void 0)};var Le=s(6547);const Se=()=>(0,n.jsxs)("div",Object.assign({className:"main-header"},{children:[(0,n.jsx)(Oe,Object.assign({className:"main-header__logo-link",routeName:"home"},{children:(0,n.jsx)("img",{className:"main-header__logo-link-img",src:Le},void 0)}),void 0),(0,n.jsx)("h1",Object.assign({className:"main-header__title"},{children:W("app:header.mainHeader")}),void 0),(0,n.jsx)("a",Object.assign({className:"main-header__right-item",href:we,target:"_blank",rel:"noreferrer"},{children:W("app:header.bundleReportLink")}),void 0),(0,n.jsx)("div",Object.assign({className:"main-header__right-item"},{children:(0,n.jsx)(Pe,{},void 0)}),void 0)]}),void 0);var ke=s(5633);const Te={"github-profile":{PageComponent:()=>{const e=(0,u.v9)(de),t=(0,u.v9)(ge),s=(0,u.I0)();return(0,r.useEffect)((()=>{s(N.loadStart({username:"rodmax"}))}),[s]),(0,n.jsxs)(ce,{children:[(0,n.jsx)("h2",{children:"Github profile"},void 0),e?(0,n.jsx)(le,{user:e},void 0):null,(0,n.jsx)(ue,{isVisible:t,fitContainer:!0},void 0)]},void 0)}},users:{PageComponent:()=>{var e;const t=(0,u.v9)(pe),s=(0,u.v9)(me),a=(0,u.I0)();return(0,r.useEffect)((()=>{t&&a(I.loadStart())}),[a,t]),(0,n.jsxs)(ce,{children:[(0,n.jsx)(je,{},void 0),(0,n.jsx)("pre",{children:JSON.stringify(L(s,["isLoading","error"]),null,2)},void 0),(0,n.jsx)("p",{children:null===s.users?W("user:usersListPage.noUserLoaded"):W("app:total",{total:s.users.count})},void 0),null===(e=s.users)||void 0===e?void 0:e.items.map((e=>(0,n.jsx)(ve,{user:e},e.id))),(0,n.jsx)(ue,{isVisible:s.isLoading,fitContainer:!0},void 0)]},void 0)}},home:{PageComponent:()=>(0,n.jsx)(ce,{children:(0,n.jsxs)("div",Object.assign({className:"home-page"},{children:[(0,n.jsxs)("section",{children:[(0,n.jsx)("h1",{children:W("app:homePageTitle")},void 0),(0,n.jsx)("pre",{children:JSON.stringify(Q(),null,2)},void 0)]},void 0),(0,n.jsx)("img",{src:ke},void 0)]}),void 0)},void 0)}},Ne=()=>{const e=(0,c.yj)().route.name,t=Te[e];return(0,n.jsxs)("main",Object.assign({className:"main-layout g-layout"},{children:[(0,n.jsx)("header",Object.assign({className:"main-layout__header"},{children:(0,n.jsx)(Se,{},void 0)}),void 0),(0,n.jsx)("aside",Object.assign({className:"main-layout__sidebar"},{children:(0,n.jsx)(xe,{},void 0)}),void 0),(0,n.jsx)("section",Object.assign({className:"main-layout__content"},{children:(0,n.jsx)(t.PageComponent,{},void 0)}),void 0)]}),void 0)},Ce=function(){const e=(0,ne.ZP)(re);return e.usePlugin((0,ae.Z)({useHash:!0})),e}();Ce.start();const Ee=()=>(0,u.v9)(o)?(0,n.jsx)(Ne,{},void 0):(0,n.jsx)(n.Fragment,{children:"..."},void 0);!function(){const e={get config(){return Q()}};window.dev=e}(),a.render((0,n.jsx)((()=>(0,n.jsx)(r.StrictMode,{children:(0,n.jsx)(c.pG,Object.assign({router:Ce},{children:(0,n.jsx)(u.zt,Object.assign({store:te()},{children:(0,n.jsx)(Ee,{},void 0)}),void 0)}),void 0)},void 0)),{},void 0),document.getElementById("root"))},5633:(e,t,s)=>{"use strict";e.exports=s.p+"assets/big-logo.ffbbf8ab5baed4973290.svg"},1462:(e,t,s)=>{"use strict";e.exports=s.p+"assets/bundles-report.html"},6547:(e,t,s)=>{"use strict";e.exports=s.p+"assets/logo.38e2905cf0fa4dc4c1d6.svg"},2007:(e,t,s)=>{var n={"./app-en.json":[3185,707],"./app-ru.json":[2836,628],"./auth-en.json":[232,251],"./auth-ru.json":[3405,764],"./user-en.json":[9535,367],"./user-ru.json":[7284,929]};function a(e){if(!s.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return s.e(t[1]).then((()=>s.t(a,3)))}a.keys=()=>Object.keys(n),a.id=2007,e.exports=a}},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={id:e,loaded:!1,exports:{}};return a[e](t,t.exports,o),t.loaded=!0,t.exports}o.m=a,o.x=e=>{},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(s,n){if(1&n&&(s=this(s)),8&n)return s;if("object"==typeof s&&s){if(4&n&&s.__esModule)return s;if(16&n&&"function"==typeof s.then)return s}var a=Object.create(null);o.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&s;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>r[e]=()=>s[e]));return r.default=()=>s,o.d(a,r),a},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,s)=>(o.f[s](e,t),t)),[])),o.u=e=>({251:"auth-en-json",367:"user-en-json",628:"app-ru-json",707:"app-en-json",764:"auth-ru-json",929:"user-ru-json"}[e]+"."+{251:"7ffce5ae7d9e858d881f",367:"a59d6a24827625f22d89",628:"a5611905aeb44924a3c4",707:"5eba90ef350ec70039d0",764:"1405ae53a0f3d4bd7c37",929:"98cc0a4cfc4b017fff67"}[e]+".js"),o.miniCssF=e=>({251:"auth-en-json",367:"user-en-json",628:"app-ru-json",707:"app-en-json",736:"vendor",764:"auth-ru-json",826:"index",929:"user-ru-json"}[e]+"."+{251:"31d6cfe0d16ae931b73c",367:"31d6cfe0d16ae931b73c",628:"31d6cfe0d16ae931b73c",707:"31d6cfe0d16ae931b73c",736:"31d6cfe0d16ae931b73c",764:"31d6cfe0d16ae931b73c",929:"31d6cfe0d16ae931b73c"}[e]+".css"),o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},n="react-playground:",o.l=(e,t,a)=>{if(s[e])s[e].push(t);else{var r,i;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+a){r=l;break}}r||(i=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",n+a),r.src=e),s[e]=[t];var d=(t,n)=>{r.onerror=r.onload=null,clearTimeout(g);var a=s[e];if(delete s[e],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((e=>e(n))),t)return t(n)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),i&&document.head.appendChild(r)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={826:0},t=[[6759,736]];o.f.j=(t,s)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var a=new Promise(((s,a)=>{n=e[t]=[s,a]}));s.push(n[2]=a);var r=o.p+o.u(t),i=new Error;o.l(r,(s=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}}),"chunk-"+t)}};var s=e=>{},n=(n,a)=>{for(var r,i,[u,c,l,d]=a,g=0,h=[];g<u.length;g++)i=u[g],o.o(e,i)&&e[i]&&h.push(e[i][0]),e[i]=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);for(l&&l(o),n&&n(a);h.length;)h.shift()();return d&&t.push.apply(t,d),s()},a=self.webpackChunkreact_playground=self.webpackChunkreact_playground||[];function r(){for(var s,n=0;n<t.length;n++){for(var a=t[n],r=!0,i=1;i<a.length;i++){var u=a[i];0!==e[u]&&(r=!1)}r&&(t.splice(n--,1),s=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),s}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var i=o.x;o.x=()=>(o.x=i||(e=>{}),(s=r)())})(),o.x()})();
//# sourceMappingURL=index.a4d7f2ba6fb26780d001.js.map