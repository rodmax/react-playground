!function(){"use strict";var e={2970:function(e,t,r){var n=r(7294),a=r(3935),s=r(9778),o=r(9626),i=r(429);const l=[{name:"home",path:"/"},{name:"users",path:"/users"},{name:"github-profile",path:"/github-profile"}],u=e=>n.createElement("div",{className:"page-content"},e.children),c=e=>{const t=e.user;return n.createElement(n.Fragment,null,n.createElement("h3",null,t.login),n.createElement("img",{src:t.avatar_url}),n.createElement("pre",null,JSON.stringify(t,null,4)))};var p=r(5155);const d=e=>({withNoPayload:()=>()=>({type:e,payload:null}),withPayload:()=>t=>({type:e,payload:t})}),h={loadStart:d("@githubProfile.loadStart").withPayload(),loadSuccess:d("@githubProfile.loadSuccess").withPayload(),loadError:d("@githubProfile.loadError").withPayload()},m=(e,t)=>({withReducer:r=>({[e]:(e,n)=>r(e||t,n)})}),g=m("githubProfile",{username:"",userDto:null,isLoading:!1,error:null}).withReducer(((e,t)=>{switch(t.type){case"@githubProfile.loadStart":return Object.assign(Object.assign({},e),{username:t.payload.username,isLoading:!0});case"@githubProfile.loadSuccess":return Object.assign(Object.assign({},e),{isLoading:!1,userDto:t.payload});case"@githubProfile.loadError":return Object.assign(Object.assign({},e),{isLoading:!1,error:t.payload})}return e})),f=e=>e.githubProfile.userDto,b=e=>e.auth.apiToken,y=e=>!!e.auth.apiToken,E={login:d("@auth.login").withPayload(),logout:d("@auth.logout").withNoPayload()},w=()=>{const e=(0,p.v9)(b),[t,r]=(0,n.useState)(e),a=(0,p.I0)();return n.createElement("form",{onSubmit:e=>{e.preventDefault(),a(E.login({apiToken:t}))}},n.createElement("input",{value:t,placeholder:"api token",onChange:e=>r(e.target.value),required:!0,name:"apiToken"}),n.createElement("div",null,n.createElement("a",{href:"https://mockapi.io",rel:"noreferrer",target:"_blank"},"Api token from mockapi.io")))},P={loadStart:d("@usersList.loadStart").withNoPayload(),loadSuccess:d("@usersList.loadSuccess").withPayload(),loadError:d("@usersList.loadError").withPayload()},v=e=>e.usersList,j=["github-profile","users"],S=()=>n.createElement("div",{className:"main-sidebar u-pad-16"},j.map((e=>n.createElement(i.rU,{key:e,className:"main-sidebar__nav-link",routeName:e},e))));var k=r.p+"bundles-report.html";const O=()=>n.createElement("div",{className:"main-header"},n.createElement("h1",null,"React Playground"),n.createElement("section",{className:"main-header__right"},n.createElement("a",{href:k,target:"_blank",rel:"noreferrer"},"Bundles report"))),T={"github-profile":{PageComponent:()=>{const e=(0,p.v9)(f),t=(0,p.I0)();return(0,n.useEffect)((()=>{t(h.loadStart({username:"rodmax"}))}),[t]),e?n.createElement(u,null,n.createElement("h2",null,"Github profile"),n.createElement(c,{user:e})):n.createElement("h4",null,"Loading...")}},users:{PageComponent:()=>{const e=(0,p.v9)(y),t=(0,p.v9)(v),r=(0,p.I0)();return(0,n.useEffect)((()=>{e&&r(P.loadStart())}),[r,e]),n.createElement(u,null,n.createElement(w,null),n.createElement("section",null,"isLoggedIn: ",e.toString()),n.createElement("pre",null,JSON.stringify(t,null,2)))}},home:{PageComponent:()=>n.createElement(u,null,"Default page")}},L=()=>{const e=(0,i.yj)().route.name,t=T[e];return n.createElement("main",{className:"main-layout g-layout"},n.createElement("header",{className:"main-layout__header"},n.createElement(O,null)),n.createElement("aside",{className:"main-layout__sidebar"},n.createElement(S,null)),n.createElement("section",{className:"main-layout__content"},n.createElement(t.PageComponent,null)))};var N=r(4890),q=r(1766),x=r(4454),U=r(8500),_=r(7935),C=r(6381),R=r(5709),z=r(655);const B=["status","statusText","type","ok"];var $=r(2948);function D(e,t,r){const n=function(e,t){if(null==e||""===e)return null;switch(typeof e){case"boolean":return t.serializeBoolean(e);case"number":return t.serializeNumber(e);case"string":return e;case"object":return t.serializeJson(e);default:return e.toString()}}(t,r);return n?`${encodeURIComponent(e)}=${encodeURIComponent(n)}`:null}const I={serializeBoolean:e=>e.toString(),serializeNumber:e=>e.toString(),serializeJson:e=>JSON.stringify(e)};class A extends Error{constructor(e,t){super("http client error"),this.config=e,this.response=t}}const G=new class{constructor(e={}){this.config=Object.assign(Object.assign({},this.defaultConfig()),e)}request(e){let t=e.url;const r=e.queryParams&&function(e,t=I){const r=[],n=e=>e&&r.push(e);return Object.keys(e).forEach((r=>{const a=e[r];Array.isArray(a)?a.forEach((e=>{n(D(r,e,t))})):n(D(r,a,t))})),r.join("&")}(e.queryParams,this.config.querySerializer);return r&&(t=`${t}?${r}`),(0,$.U)(t,{method:e.method}).pipe((0,C.w)((t=>this.handleFetchResponse(t,e))))}handleFetchResponse(e,t){return(0,z.mG)(this,void 0,void 0,(function*(){const r=(n=e,B.reduce(((e,t)=>(e[t]=n[t],e)),{}));var n;if(!e.ok)throw new A(t,Object.assign(Object.assign({},r),{body:null,fetchResponse:e}));const a=yield e.json(),s=Object.assign(Object.assign({},r),{body:a,fetchResponse:e});if(e.status>=400)throw new A(t,s);return s}))}defaultConfig(){return{querySerializer:I}}},J=function(e){return G.request({method:"GET",url:`https://api.github.com/users/${e}`}).pipe((0,R.U)((({body:e})=>e)))},F=m("auth",{apiToken:""}).withReducer(((e,t)=>{switch(t.type){case"@auth.login":return Object.assign({},t.payload);case"@auth.logout":return{apiToken:""}}return e})),M=/([^:])\/\//g,Z=new class{constructor(e){this.options=e,this.token=""}updateToken(e){this.token=e}request(e){return this.options.httpBackend.request({method:e.method,url:this.url(e.urlParts),queryParams:e.queryParams,body:e.body})}url(e){return function(e){return e.join("/").replaceAll(M,"$1/")}([this.endpoint(),...e])}endpoint(){return this.options.endpointTemplate.replace("{token}",this.token)}}({httpBackend:G,endpointTemplate:"https://{token}.mockapi.io/api/v1"});var H=r(2976),Y=r(6493);const K=m("usersList",{users:null,isLoading:!1,error:null}).withReducer(((e,t)=>{switch(t.type){case"@usersList.loadStart":return Object.assign(Object.assign({},e),{isLoading:!0});case"@usersList.loadSuccess":return Object.assign(Object.assign({},e),{isLoading:!1,users:t.payload});case"@usersList.loadError":return Object.assign(Object.assign({},e),{isLoading:!1,error:t.payload})}return e}));function Q(e){return e.body}class V{constructor(e){this.options=e}create(e){return this.request({method:"POST",urlParts:[],body:e}).pipe((0,R.U)(Q))}update(e,t){return this.request({method:"PUT",urlParts:[e],body:t}).pipe((0,R.U)(Q))}search(e){return this.request({method:"GET",urlParts:[],queryParams:e}).pipe((0,R.U)(Q))}request(e){return Z.request(Object.assign(Object.assign({},e),{urlParts:[this.options.resourceUrl,...e.urlParts]}))}}const W=new class{constructor(){this.client=new V({resourceUrl:"/users"})}search(e){return this.client.search(e)}},X=(ee={reducers:Object.assign(Object.assign(Object.assign({},g),F),K),epics:[e=>e.pipe((0,_.l)("@githubProfile.loadStart"),(0,C.w)((e=>J(e.payload.username).pipe((0,R.U)((e=>h.loadSuccess(e))))))),e=>{const t=e.pipe((0,_.l)("@auth.login","@auth.logout"),(0,C.w)((e=>{switch(e.type){case"@auth.login":Z.updateToken(e.payload.apiToken);break;case"@auth.logout":Z.updateToken("")}return H.C}))),r=H.C;return(0,Y.T)(t,r)},e=>e.pipe((0,_.l)("@usersList.loadStart"),(0,C.w)((()=>W.search({limit:10,page:1,orderBy:"asc",sortBy:"name"}).pipe((0,R.U)((e=>P.loadSuccess(e)))))))],enabledDevTools:!0},ee=Object.assign({enabledDevTools:!1},ee),()=>{const e=(0,N.UY)(ee.reducers),t=(0,q.k)();let r=(0,N.md)(t);ee.enabledDevTools&&(r=(0,U.Uo)(r));const n=(0,N.MT)(e,r);return t.run((0,x.l)(...ee.epics)),n});var ee;const te=function(){const e=(0,s.ZP)(l);return e.usePlugin((0,o.Z)({useHash:!0})),e}();te.start(),a.render(n.createElement(n.StrictMode,null,n.createElement(i.pG,{router:te},n.createElement(p.zt,{store:X()},n.createElement((()=>n.createElement(L,null)),null)))),document.getElementById("root"))}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n](a,a.exports,r),a.loaded=!0,a.exports}r.m=e,r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={826:0},t=[[2970,736]],n=function(){};function a(){for(var n,a=0;a<t.length;a++){for(var s=t[a],o=!0,i=1;i<s.length;i++){var l=s[i];0!==e[l]&&(o=!1)}o&&(t.splice(a--,1),n=r(r.s=s[0]))}return 0===t.length&&(r.x(),r.x=function(){}),n}r.x=function(){r.x=function(){},o=o.slice();for(var e=0;e<o.length;e++)s(o[e]);return(n=a)()};var s=function(a){for(var s,o,l=a[0],u=a[1],c=a[2],p=a[3],d=0,h=[];d<l.length;d++)o=l[d],r.o(e,o)&&e[o]&&h.push(e[o][0]),e[o]=0;for(s in u)r.o(u,s)&&(r.m[s]=u[s]);for(c&&c(r),i(a);h.length;)h.shift()();return p&&t.push.apply(t,p),n()},o=self.webpackChunkreact_playground=self.webpackChunkreact_playground||[],i=o.push.bind(o);o.push=s}(),r.x()}();
//# sourceMappingURL=index.19f17f7eac6b8d106fdb.js.map