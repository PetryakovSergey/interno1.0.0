"use strict";(self["webpackChunkhome_task8"]=self["webpackChunkhome_task8"]||[]).push([[229],{6229:function(t,n,r){r.r(n),r.d(n,{default:function(){return g}});var e=r(6252);const o=t=>((0,e.dD)("data-v-579a68c4"),t=t(),(0,e.Cn)(),t),i={class:"content nf_center"},u={class:"not-found"},c=o((()=>(0,e._)("h2",{class:"not-found__heading"},"404",-1))),a=o((()=>(0,e._)("p",{class:"not-found__text"},"We are sorry, but the page you requested was not found",-1))),f=o((()=>(0,e._)("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e._)("path",{d:"M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887",stroke:"#CDA274","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"round"})],-1))),s=["src"];function p(t,n,r,o,p,l){const v=(0,e.up)("HeaderComp");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(v),(0,e._)("section",i,[(0,e._)("div",u,[c,a,(0,e._)("button",{class:"not-found__button",onClick:n[0]||(n[0]=(...t)=>l.goToHomePage&&l.goToHomePage(...t))},[(0,e.Uk)(" Back To Home "),f])]),(0,e._)("div",null,[(0,e._)("img",{src:p.mainPic,alt:"not found img",class:"not-found__img"},null,8,s)])])],64)}r(560);var l=r(4021),v={name:"NotFoundView",components:{HeaderComp:l.Z},data(){return{mainPic:r(1186)}},methods:{goToHomePage(){this.$router.push("/")}}},y=r(3744);const h=(0,y.Z)(v,[["render",p],["__scopeId","data-v-579a68c4"]]);var g=h},1186:function(t,n,r){t.exports=r.p+"img/notFound.01ff5bd8.webp"},509:function(t,n,r){var e=r(9985),o=r(3691),i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not a function")}},5027:function(t,n,r){var e=r(8999),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not an object")}},4328:function(t,n,r){var e=r(5290),o=r(7578),i=r(6310),u=function(t){return function(n,r,u){var c,a=e(n),f=i(a),s=o(u,f);if(t&&r!==r){while(f>s)if(c=a[s++],c!==c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},5649:function(t,n,r){var e=r(7697),o=r(2297),i=TypeError,u=Object.getOwnPropertyDescriptor,c=e&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=c?function(t,n){if(o(t)&&!u(t,"length").writable)throw new i("Cannot set read only .length");return t.length=n}:function(t,n){return t.length=n}},6648:function(t,n,r){var e=r(8844),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},8758:function(t,n,r){var e=r(6812),o=r(9152),i=r(2474),u=r(2560);t.exports=function(t,n,r){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||a(t,p,f(n,p))}}},5773:function(t,n,r){var e=r(7697),o=r(2560),i=r(5684);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},5684:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},1880:function(t,n,r){var e=r(9985),o=r(2560),i=r(8702),u=r(5014);t.exports=function(t,n,r,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:n;if(e(r)&&i(r,f,c),c.global)a?t[n]=r:u(n,r);else{try{c.unsafe?t[n]&&(a=!0):delete t[n]}catch(s){}a?t[n]=r:o.f(t,n,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},5014:function(t,n,r){var e=r(9037),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},7697:function(t,n,r){var e=r(3689);t.exports=!e((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(t){var n="object"==typeof document&&document.all,r="undefined"==typeof n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},6420:function(t,n,r){var e=r(9037),o=r(8999),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},5565:function(t){var n=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw n("Maximum allowed index exceeded");return t}},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,n,r){var e,o,i=r(9037),u=r(71),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(e=s.split("."),o=e[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(e=u.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/),e&&(o=+e[1]))),t.exports=o},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,n,r){var e=r(9037),o=r(2474).f,i=r(5773),u=r(1880),c=r(5014),a=r(8758),f=r(5266);t.exports=function(t,n){var r,s,p,l,v,y,h=t.target,g=t.global,b=t.stat;if(s=g?e:b?e[h]||c(h,{}):(e[h]||{}).prototype,s)for(p in n){if(v=n[p],t.dontCallGetSet?(y=o(s,p),l=y&&y.value):l=s[p],r=f(g?p:h+(b?".":"#")+p,t.forced),!r&&void 0!==l){if(typeof v==typeof l)continue;a(v,l)}(t.sham||l&&l.sham)&&i(v,"sham",!0),u(s,p,v,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},7215:function(t,n,r){var e=r(3689);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,n,r){var e=r(7215),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},1236:function(t,n,r){var e=r(7697),o=r(6812),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},8844:function(t,n,r){var e=r(7215),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},6058:function(t,n,r){var e=r(9037),o=r(9985),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},4849:function(t,n,r){var e=r(509),o=r(981);t.exports=function(t,n){var r=t[n];return o(r)?void 0:e(r)}},9037:function(t,n,r){var e=function(t){return t&&t.Math===Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},6812:function(t,n,r){var e=r(8844),o=r(690),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},7248:function(t){t.exports={}},8506:function(t,n,r){var e=r(7697),o=r(3689),i=r(6420);t.exports=!e&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,n,r){var e=r(8844),o=r(3689),i=r(6648),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?c(t,""):u(t)}:u},6738:function(t,n,r){var e=r(8844),o=r(9985),i=r(4091),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},618:function(t,n,r){var e,o,i,u=r(9834),c=r(9037),a=r(8999),f=r(5773),s=r(6812),p=r(4091),l=r(2713),v=r(7248),y="Object already initialized",h=c.TypeError,g=c.WeakMap,b=function(t){return i(t)?o(t):e(t,{})},d=function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw new h("Incompatible receiver, "+t+" required");return r}};if(u||p.state){var m=p.state||(p.state=new g);m.get=m.get,m.has=m.has,m.set=m.set,e=function(t,n){if(m.has(t))throw new h(y);return n.facade=t,m.set(t,n),n},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var x=l("state");v[x]=!0,e=function(t,n){if(s(t,x))throw new h(y);return n.facade=t,f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:b,getterFor:d}},2297:function(t,n,r){var e=r(6648);t.exports=Array.isArray||function(t){return"Array"===e(t)}},9985:function(t,n,r){var e=r(2659),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},5266:function(t,n,r){var e=r(3689),o=r(9985),i=/#|\.prototype\./,u=function(t,n){var r=a[c(t)];return r===s||r!==f&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},981:function(t){t.exports=function(t){return null===t||void 0===t}},8999:function(t,n,r){var e=r(9985),o=r(2659),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},3931:function(t){t.exports=!1},734:function(t,n,r){var e=r(6058),o=r(9985),i=r(3622),u=r(9525),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},6310:function(t,n,r){var e=r(3126);t.exports=function(t){return e(t.length)}},8702:function(t,n,r){var e=r(8844),o=r(3689),i=r(9985),u=r(6812),c=r(7697),a=r(1236).CONFIGURABLE,f=r(6738),s=r(618),p=s.enforce,l=s.get,v=String,y=Object.defineProperty,h=e("".slice),g=e("".replace),b=e([].join),d=c&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),m=String(String).split("String"),x=t.exports=function(t,n,r){"Symbol("===h(v(n),0,7)&&(n="["+g(v(n),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!u(t,"name")||a&&t.name!==n)&&(c?y(t,"name",{value:n,configurable:!0}):t.name=n),d&&r&&u(r,"arity")&&t.length!==r.arity&&y(t,"length",{value:r.arity});try{r&&u(r,"constructor")&&r.constructor?c&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var e=p(t);return u(e,"source")||(e.source=b(m,"string"==typeof n?n:"")),t};Function.prototype.toString=x((function(){return i(this)&&l(this).source||f(this)}),"toString")},8828:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},2560:function(t,n,r){var e=r(7697),o=r(8506),i=r(5648),u=r(5027),c=r(8360),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"===typeof t&&"prototype"===n&&"value"in r&&v in r&&!r[v]){var e=s(t,n);e&&e[v]&&(t[n]=r.value,r={configurable:l in r?r[l]:e[l],enumerable:p in r?r[p]:e[p],writable:!1})}return f(t,n,r)}:f:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return f(t,n,r)}catch(e){}if("get"in r||"set"in r)throw new a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},2474:function(t,n,r){var e=r(7697),o=r(2615),i=r(9556),u=r(5684),c=r(5290),a=r(8360),f=r(6812),s=r(8506),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=a(n),s)try{return p(t,n)}catch(r){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},2741:function(t,n,r){var e=r(4948),o=r(2739),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},7518:function(t,n){n.f=Object.getOwnPropertySymbols},3622:function(t,n,r){var e=r(8844);t.exports=e({}.isPrototypeOf)},4948:function(t,n,r){var e=r(8844),o=r(6812),i=r(5290),u=r(4328).indexOf,c=r(7248),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&a(s,r);while(n.length>f)o(e,r=n[f++])&&(~u(s,r)||a(s,r));return s}},9556:function(t,n){var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},5899:function(t,n,r){var e=r(2615),o=r(9985),i=r(8999),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw new u("Can't convert object to primitive value")}},9152:function(t,n,r){var e=r(6058),o=r(8844),i=r(2741),u=r(7518),c=r(5027),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?a(n,r(t)):n}},4684:function(t,n,r){var e=r(981),o=TypeError;t.exports=function(t){if(e(t))throw new o("Can't call method on "+t);return t}},2713:function(t,n,r){var e=r(3430),o=r(4630),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:function(t,n,r){var e=r(9037),o=r(5014),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},3430:function(t,n,r){var e=r(3931),o=r(4091);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.33.2",mode:e?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(t,n,r){var e=r(3615),o=r(3689),i=r(9037),u=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!u(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},7578:function(t,n,r){var e=r(8700),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5290:function(t,n,r){var e=r(4413),o=r(4684);t.exports=function(t){return e(o(t))}},8700:function(t,n,r){var e=r(8828);t.exports=function(t){var n=+t;return n!==n||0===n?0:e(n)}},3126:function(t,n,r){var e=r(8700),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},690:function(t,n,r){var e=r(4684),o=Object;t.exports=function(t){return o(e(t))}},8732:function(t,n,r){var e=r(2615),o=r(8999),i=r(734),u=r(4849),c=r(5899),a=r(4201),f=TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,a=u(t,s);if(a){if(void 0===n&&(n="default"),r=e(a,t,n),!o(r)||i(r))return r;throw new f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},8360:function(t,n,r){var e=r(8732),o=r(734);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},3691:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(r){return"Object"}}},4630:function(t,n,r){var e=r(8844),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},9525:function(t,n,r){var e=r(146);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,n,r){var e=r(7697),o=r(3689);t.exports=e&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(t,n,r){var e=r(9037),o=r(9985),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:function(t,n,r){var e=r(9037),o=r(3430),i=r(6812),u=r(4630),c=r(146),a=r(9525),f=e.Symbol,s=o("wks"),p=a?f["for"]||f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)||(s[t]=c&&i(f,t)?f[t]:p("Symbol."+t)),s[t]}},560:function(t,n,r){var e=r(9989),o=r(690),i=r(6310),u=r(5649),c=r(5565),a=r(3689),f=a((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},p=f||!s();e({target:"Array",proto:!0,arity:1,forced:p},{push:function(t){var n=o(this),r=i(n),e=arguments.length;c(r+e);for(var a=0;a<e;a++)n[r]=arguments[a],r++;return u(n,r),r}})}}]);
//# sourceMappingURL=229.e41a5bda.js.map