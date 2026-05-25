function Sp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pc={exports:{}},os={},hc={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Np=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Lp=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),Nl=Symbol.iterator;function zp(e){return e===null||typeof e!="object"?null:(e=Nl&&e[Nl]||e["@@iterator"],typeof e=="function"?e:null)}var mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,xc={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=xc,this.updater=n||mc}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yc(){}yc.prototype=Fn.prototype;function va(e,t,n){this.props=e,this.context=t,this.refs=xc,this.updater=n||mc}var wa=va.prototype=new yc;wa.constructor=va;gc(wa,Fn.prototype);wa.isPureReactComponent=!0;var jl=Array.isArray,vc=Object.prototype.hasOwnProperty,ba={current:null},wc={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)vc.call(t,r)&&!wc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ur,type:e,key:s,ref:o,props:i,_owner:ba.current}}function Ip(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function Up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _l=/\/+/g;function Ts(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Up(""+e.key):t.toString(36)}function mi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ur:case Np:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ts(o,0):r,jl(i)?(n="",e!=null&&(n=e.replace(_l,"$&/")+"/"),mi(i,t,n,"",function(c){return c})):i!=null&&(ka(i)&&(i=Ip(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_l,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",jl(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+Ts(s,l);o+=mi(s,t,n,u,i)}else if(u=zp(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+Ts(s,l++),o+=mi(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Kr(e,t,n){if(e==null)return e;var r=[],i=0;return mi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},gi={transition:null},Bp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:gi,ReactCurrentOwner:ba};function kc(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Fn;z.Fragment=jp;z.Profiler=Cp;z.PureComponent=va;z.StrictMode=_p;z.Suspense=Op;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;z.act=kc;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gc({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)vc.call(t,u)&&!wc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ur,type:e.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:Pp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rp,_context:e},e.Consumer=e};z.createElement=bc;z.createFactory=function(e){var t=bc.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Tp,render:e}};z.isValidElement=ka;z.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Dp}};z.memo=function(e,t){return{$$typeof:Lp,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=gi.transition;gi.transition={};try{e()}finally{gi.transition=t}};z.unstable_act=kc;z.useCallback=function(e,t){return ve.current.useCallback(e,t)};z.useContext=function(e){return ve.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};z.useEffect=function(e,t){return ve.current.useEffect(e,t)};z.useId=function(){return ve.current.useId()};z.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ve.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};z.useRef=function(e){return ve.current.useRef(e)};z.useState=function(e){return ve.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ve.current.useTransition()};z.version="18.3.1";hc.exports=z;var S=hc.exports;const Sc=Ep(S),Fp=Sp({__proto__:null,default:Sc},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=S,$p=Symbol.for("react.element"),Vp=Symbol.for("react.fragment"),Hp=Object.prototype.hasOwnProperty,Wp=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qp={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Hp.call(t,r)&&!qp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$p,type:e,key:s,ref:o,props:i,_owner:Wp.current}}os.Fragment=Vp;os.jsx=Ec;os.jsxs=Ec;pc.exports=os;var a=pc.exports,po={},Nc={exports:{}},ze={},jc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var A=j.length;j.push(T);e:for(;0<A;){var B=A-1>>>1,q=j[B];if(0<i(q,T))j[B]=T,j[A]=q,A=B;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],A=j.pop();if(A!==T){j[0]=A;e:for(var B=0,q=j.length,bt=q>>>1;B<bt;){var Ue=2*(B+1)-1,fn=j[Ue],qt=Ue+1,Yr=j[qt];if(0>i(fn,A))qt<q&&0>i(Yr,fn)?(j[B]=Yr,j[qt]=A,B=qt):(j[B]=fn,j[Ue]=A,B=Ue);else if(qt<q&&0>i(Yr,A))j[B]=Yr,j[qt]=A,B=qt;else break e}}return T}function i(j,T){var A=j.sortIndex-T.sortIndex;return A!==0?A:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,d=null,g=3,b=!1,x=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=j)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function k(j){if(v=!1,m(j),!x)if(n(u)!==null)x=!0,$(E);else{var T=n(c);T!==null&&V(k,T.startTime-j)}}function E(j,T){x=!1,v&&(v=!1,h(P),P=-1),b=!0;var A=g;try{for(m(T),d=n(u);d!==null&&(!(d.expirationTime>T)||j&&!le());){var B=d.callback;if(typeof B=="function"){d.callback=null,g=d.priorityLevel;var q=B(d.expirationTime<=T);T=e.unstable_now(),typeof q=="function"?d.callback=q:d===n(u)&&r(u),m(T)}else r(u);d=n(u)}if(d!==null)var bt=!0;else{var Ue=n(c);Ue!==null&&V(k,Ue.startTime-T),bt=!1}return bt}finally{d=null,g=A,b=!1}}var C=!1,_=null,P=-1,M=5,L=-1;function le(){return!(e.unstable_now()-L<M)}function Re(){if(_!==null){var j=e.unstable_now();L=j;var T=!0;try{T=_(!0,j)}finally{T?be():(C=!1,_=null)}}else C=!1}var be;if(typeof p=="function")be=function(){p(Re)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,W=Pe.port2;Pe.port1.onmessage=Re,be=function(){W.postMessage(null)}}else be=function(){y(Re,0)};function $(j){_=j,C||(C=!0,be())}function V(j,T){P=y(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,$(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var A=g;g=T;try{return j()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var A=g;g=j;try{return T()}finally{g=A}},e.unstable_scheduleCallback=function(j,T,A){var B=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?B+A:B):A=B,j){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=A+q,j={id:f++,callback:T,priorityLevel:j,startTime:A,expirationTime:q,sortIndex:-1},A>B?(j.sortIndex=A,t(c,j),n(u)===null&&j===n(c)&&(v?(h(P),P=-1):v=!0,V(k,A-B))):(j.sortIndex=q,t(u,j),x||b||(x=!0,$(E))),j},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(j){var T=g;return function(){var A=g;g=T;try{return j.apply(this,arguments)}finally{g=A}}}})(_c);jc.exports=_c;var Yp=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=S,Ae=Yp;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cc=new Set,yr={};function un(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(yr[e]=t,e=0;e<t.length;e++)Cc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=Object.prototype.hasOwnProperty,Qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cl={},Rl={};function Xp(e){return ho.call(Rl,e)?!0:ho.call(Cl,e)?!1:Qp.test(e)?Rl[e]=!0:(Cl[e]=!0,!1)}function Jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gp(e,t,n,r){if(t===null||typeof t>"u"||Jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sa,Ea);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sa,Ea);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sa,Ea);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Na(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gp(t,n,i,r)&&(n=null),r||i===null?Xp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),hn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),_a=Symbol.for("react.forward_ref"),go=Symbol.for("react.suspense"),xo=Symbol.for("react.suspense_list"),Ca=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Pl=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Os;function ir(e){if(Os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Os=t&&t[1]||""}return`
`+Os+e}var Ls=!1;function As(e,t){if(!e||Ls)return"";Ls=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ls=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function Zp(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=As(e.type,!1),e;case 11:return e=As(e.type.render,!1),e;case 1:return e=As(e.type,!0),e;default:return""}}function yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case hn:return"Portal";case mo:return"Profiler";case ja:return"StrictMode";case go:return"Suspense";case xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case _a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ca:return t=e.displayName||null,t!==null?t:yo(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return yo(e(t))}catch{}}return null}function eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yo(t);case 8:return t===ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function th(e){var t=Oc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=th(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Oc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ac(e,t){t=t.checked,t!=null&&Na(e,"checked",t,!1)}function wo(e,t){Ac(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bo(e,t.type,n):t.hasOwnProperty("defaultValue")&&bo(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ol(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bo(e,t,n){(t!=="number"||Ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var sr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ll(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(sr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function zc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Al(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ic(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function So(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ic(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,Uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nh=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){nh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var rh=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eo(e,t){if(t){if(rh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function No(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,_n=null,Cn=null;function zl(e){if(e=Fr(e)){if(typeof _o!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ds(t),_o(e.stateNode,e.type,t))}}function Fc(e){_n?Cn?Cn.push(e):Cn=[e]:_n=e}function Mc(){if(_n){var e=_n,t=Cn;if(Cn=_n=null,zl(e),t)for(e=0;e<t.length;e++)zl(t[e])}}function $c(e,t){return e(t)}function Vc(){}var zs=!1;function Hc(e,t,n){if(zs)return e(t,n);zs=!0;try{return $c(e,t,n)}finally{zs=!1,(_n!==null||Cn!==null)&&(Vc(),Mc())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Co=!1;if(mt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Co=!1}function ih(e,t,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var cr=!1,zi=null,Ii=!1,Ro=null,sh={onError:function(e){cr=!0,zi=e}};function oh(e,t,n,r,i,s,o,l,u){cr=!1,zi=null,ih.apply(sh,arguments)}function ah(e,t,n,r,i,s,o,l,u){if(oh.apply(this,arguments),cr){if(cr){var c=zi;cr=!1,zi=null}else throw Error(N(198));Ii||(Ii=!0,Ro=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(cn(e)!==e)throw Error(N(188))}function lh(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Il(i),e;if(s===r)return Il(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function qc(e){return e=lh(e),e!==null?Yc(e):null}function Yc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yc(e);if(t!==null)return t;e=e.sibling}return null}var Kc=Ae.unstable_scheduleCallback,Ul=Ae.unstable_cancelCallback,uh=Ae.unstable_shouldYield,ch=Ae.unstable_requestPaint,ee=Ae.unstable_now,dh=Ae.unstable_getCurrentPriorityLevel,Pa=Ae.unstable_ImmediatePriority,Qc=Ae.unstable_UserBlockingPriority,Ui=Ae.unstable_NormalPriority,fh=Ae.unstable_LowPriority,Xc=Ae.unstable_IdlePriority,as=null,st=null;function ph(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:gh,hh=Math.log,mh=Math.LN2;function gh(e){return e>>>=0,e===0?32:31-(hh(e)/mh|0)|0}var Gr=64,Zr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=or(l):(s&=o,s!==0&&(r=or(s)))}else o=n&~i,o!==0?r=or(o):s!==0&&(r=or(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function xh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Je(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=xh(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=Gr;return Gr<<=1,!(Gr&4194240)&&(Gr=64),e}function Is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function vh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zc,Oa,ed,td,nd,To=!1,ei=[],Pt=null,Tt=null,Ot=null,br=new Map,kr=new Map,Nt=[],wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dl(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Qn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Fr(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bh(e,t,n,r,i){switch(t){case"focusin":return Pt=Qn(Pt,e,t,n,r,i),!0;case"dragenter":return Tt=Qn(Tt,e,t,n,r,i),!0;case"mouseover":return Ot=Qn(Ot,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return br.set(s,Qn(br.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kr.set(s,Qn(kr.get(s)||null,e,t,n,r,i)),!0}return!1}function rd(e){var t=Qt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wc(n),t!==null){e.blockedOn=t,nd(e.priority,function(){ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=Fr(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Bl(e,t,n){xi(e)&&n.delete(t)}function kh(){To=!1,Pt!==null&&xi(Pt)&&(Pt=null),Tt!==null&&xi(Tt)&&(Tt=null),Ot!==null&&xi(Ot)&&(Ot=null),br.forEach(Bl),kr.forEach(Bl)}function Xn(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,kh)))}function Sr(e){function t(i){return Xn(i,e)}if(0<ei.length){Xn(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Xn(Pt,e),Tt!==null&&Xn(Tt,e),Ot!==null&&Xn(Ot,e),br.forEach(t),kr.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)rd(n),n.blockedOn===null&&Nt.shift()}var Rn=vt.ReactCurrentBatchConfig,Bi=!0;function Sh(e,t,n,r){var i=F,s=Rn.transition;Rn.transition=null;try{F=1,La(e,t,n,r)}finally{F=i,Rn.transition=s}}function Eh(e,t,n,r){var i=F,s=Rn.transition;Rn.transition=null;try{F=4,La(e,t,n,r)}finally{F=i,Rn.transition=s}}function La(e,t,n,r){if(Bi){var i=Oo(e,t,n,r);if(i===null)qs(e,t,r,Fi,n),Dl(e,r);else if(bh(i,e,t,n,r))r.stopPropagation();else if(Dl(e,r),t&4&&-1<wh.indexOf(e)){for(;i!==null;){var s=Fr(i);if(s!==null&&Zc(s),s=Oo(e,t,n,r),s===null&&qs(e,t,r,Fi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qs(e,t,r,null,n)}}var Fi=null;function Oo(e,t,n,r){if(Fi=null,e=Ra(r),e=Qt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dh()){case Pa:return 1;case Qc:return 4;case Ui:case fh:return 16;case Xc:return 536870912;default:return 16}default:return 16}}var _t=null,Aa=null,yi=null;function sd(){if(yi)return yi;var e,t=Aa,n=t.length,r,i="value"in _t?_t.value:_t.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return yi=i.slice(e,1<r?1-r:void 0)}function vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Fl(){return!1}function Ie(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ti:Fl,this.isPropagationStopped=Fl,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Ie(Mn),Br=G({},Mn,{view:0,detail:0}),Nh=Ie(Br),Us,Ds,Jn,ls=G({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Us=e.screenX-Jn.screenX,Ds=e.screenY-Jn.screenY):Ds=Us=0,Jn=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),Ml=Ie(ls),jh=G({},ls,{dataTransfer:0}),_h=Ie(jh),Ch=G({},Br,{relatedTarget:0}),Bs=Ie(Ch),Rh=G({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=Ie(Rh),Th=G({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oh=Ie(Th),Lh=G({},Mn,{data:0}),$l=Ie(Lh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ih[e])?!!t[e]:!1}function Ia(){return Uh}var Dh=G({},Br,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=Ie(Dh),Fh=G({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=Ie(Fh),Mh=G({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),$h=Ie(Mh),Vh=G({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=Ie(Vh),Wh=G({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qh=Ie(Wh),Yh=[9,13,27,32],Ua=mt&&"CompositionEvent"in window,dr=null;mt&&"documentMode"in document&&(dr=document.documentMode);var Kh=mt&&"TextEvent"in window&&!dr,od=mt&&(!Ua||dr&&8<dr&&11>=dr),Hl=" ",Wl=!1;function ad(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Qh(e,t){switch(e){case"compositionend":return ld(t);case"keypress":return t.which!==32?null:(Wl=!0,Hl);case"textInput":return e=t.data,e===Hl&&Wl?null:e;default:return null}}function Xh(e,t){if(gn)return e==="compositionend"||!Ua&&ad(e,t)?(e=sd(),yi=Aa=_t=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jh[e.type]:t==="textarea"}function ud(e,t,n,r){Fc(r),t=Mi(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Er=null;function Gh(e){wd(e,0)}function us(e){var t=vn(e);if(Lc(t))return e}function Zh(e,t){if(e==="change")return t}var cd=!1;if(mt){var Fs;if(mt){var Ms="oninput"in document;if(!Ms){var Yl=document.createElement("div");Yl.setAttribute("oninput","return;"),Ms=typeof Yl.oninput=="function"}Fs=Ms}else Fs=!1;cd=Fs&&(!document.documentMode||9<document.documentMode)}function Kl(){fr&&(fr.detachEvent("onpropertychange",dd),Er=fr=null)}function dd(e){if(e.propertyName==="value"&&us(Er)){var t=[];ud(t,Er,e,Ra(e)),Hc(Gh,t)}}function em(e,t,n){e==="focusin"?(Kl(),fr=t,Er=n,fr.attachEvent("onpropertychange",dd)):e==="focusout"&&Kl()}function tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(Er)}function nm(e,t){if(e==="click")return us(t)}function rm(e,t){if(e==="input"||e==="change")return us(t)}function im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:im;function Nr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ho.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Ql(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xl(e,t){var n=Ql(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ql(n)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var e=window,t=Ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ai(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sm(e){var t=pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fd(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Xl(n,s);var o=Xl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var om=mt&&"documentMode"in document&&11>=document.documentMode,xn=null,Lo=null,pr=null,Ao=!1;function Jl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ao||xn==null||xn!==Ai(r)||(r=xn,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Nr(pr,r)||(pr=r,r=Mi(Lo,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},$s={},hd={};mt&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function cs(e){if($s[e])return $s[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hd)return $s[e]=t[n];return e}var md=cs("animationend"),gd=cs("animationiteration"),xd=cs("animationstart"),yd=cs("transitionend"),vd=new Map,Gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){vd.set(e,t),un(t,[e])}for(var Vs=0;Vs<Gl.length;Vs++){var Hs=Gl[Vs],am=Hs.toLowerCase(),lm=Hs[0].toUpperCase()+Hs.slice(1);$t(am,"on"+lm)}$t(md,"onAnimationEnd");$t(gd,"onAnimationIteration");$t(xd,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(yd,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),um=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Zl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ah(r,t,void 0,e),e.currentTarget=null}function wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zl(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zl(i,l,c),s=u}}}if(Ii)throw e=Ro,Ii=!1,Ro=null,e}function Y(e,t){var n=t[Bo];n===void 0&&(n=t[Bo]=new Set);var r=e+"__bubble";n.has(r)||(bd(t,e,2,!1),n.add(r))}function Ws(e,t,n){var r=0;t&&(r|=4),bd(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[ri]){e[ri]=!0,Cc.forEach(function(n){n!=="selectionchange"&&(um.has(n)||Ws(n,!1,e),Ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,Ws("selectionchange",!1,t))}}function bd(e,t,n,r){switch(id(t)){case 1:var i=Sh;break;case 4:i=Eh;break;default:i=La}n=i.bind(null,t,n,e),i=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qs(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qt(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Hc(function(){var c=s,f=Ra(n),d=[];e:{var g=vd.get(e);if(g!==void 0){var b=za,x=e;switch(e){case"keypress":if(vi(n)===0)break e;case"keydown":case"keyup":b=Bh;break;case"focusin":x="focus",b=Bs;break;case"focusout":x="blur",b=Bs;break;case"beforeblur":case"afterblur":b=Bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=_h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=$h;break;case md:case gd:case xd:b=Ph;break;case yd:b=Hh;break;case"scroll":b=Nh;break;case"wheel":b=qh;break;case"copy":case"cut":case"paste":b=Oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Vl}var v=(t&4)!==0,y=!v&&e==="scroll",h=v?g!==null?g+"Capture":null:g;v=[];for(var p=c,m;p!==null;){m=p;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,h!==null&&(k=wr(p,h),k!=null&&v.push(_r(p,k,m)))),y)break;p=p.return}0<v.length&&(g=new b(g,x,null,n,f),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==jo&&(x=n.relatedTarget||n.fromElement)&&(Qt(x)||x[gt]))break e;if((b||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=c,x=x?Qt(x):null,x!==null&&(y=cn(x),x!==y||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=c),b!==x)){if(v=Ml,k="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Vl,k="onPointerLeave",h="onPointerEnter",p="pointer"),y=b==null?g:vn(b),m=x==null?g:vn(x),g=new v(k,p+"leave",b,n,f),g.target=y,g.relatedTarget=m,k=null,Qt(f)===c&&(v=new v(h,p+"enter",x,n,f),v.target=m,v.relatedTarget=y,k=v),y=k,b&&x)t:{for(v=b,h=x,p=0,m=v;m;m=pn(m))p++;for(m=0,k=h;k;k=pn(k))m++;for(;0<p-m;)v=pn(v),p--;for(;0<m-p;)h=pn(h),m--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=pn(v),h=pn(h)}v=null}else v=null;b!==null&&eu(d,g,b,v,!1),x!==null&&y!==null&&eu(d,y,x,v,!0)}}e:{if(g=c?vn(c):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var E=Zh;else if(ql(g))if(cd)E=rm;else{E=tm;var C=em}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=nm);if(E&&(E=E(e,c))){ud(d,E,n,f);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&bo(g,"number",g.value)}switch(C=c?vn(c):window,e){case"focusin":(ql(C)||C.contentEditable==="true")&&(xn=C,Lo=c,pr=null);break;case"focusout":pr=Lo=xn=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Jl(d,n,f);break;case"selectionchange":if(om)break;case"keydown":case"keyup":Jl(d,n,f)}var _;if(Ua)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else gn?ad(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(od&&n.locale!=="ko"&&(gn||P!=="onCompositionStart"?P==="onCompositionEnd"&&gn&&(_=sd()):(_t=f,Aa="value"in _t?_t.value:_t.textContent,gn=!0)),C=Mi(c,P),0<C.length&&(P=new $l(P,e,null,n,f),d.push({event:P,listeners:C}),_?P.data=_:(_=ld(n),_!==null&&(P.data=_)))),(_=Kh?Qh(e,n):Xh(e,n))&&(c=Mi(c,"onBeforeInput"),0<c.length&&(f=new $l("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=_))}wd(d,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wr(e,n),s!=null&&r.unshift(_r(e,s,i)),s=wr(e,t),s!=null&&r.push(_r(e,s,i))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=wr(n,s),u!=null&&o.unshift(_r(n,u,l))):i||(u=wr(n,s),u!=null&&o.push(_r(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cm=/\r\n?/g,dm=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(cm,`
`).replace(dm,"")}function ii(e,t,n){if(t=tu(t),tu(e)!==t&&n)throw Error(N(425))}function $i(){}var zo=null,Io=null;function Uo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Do=typeof setTimeout=="function"?setTimeout:void 0,fm=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,pm=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(hm)}:Do;function hm(e){setTimeout(function(){throw e})}function Ys(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $n=Math.random().toString(36).slice(2),it="__reactFiber$"+$n,Cr="__reactProps$"+$n,gt="__reactContainer$"+$n,Bo="__reactEvents$"+$n,mm="__reactListeners$"+$n,gm="__reactHandles$"+$n;function Qt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ru(e);e!==null;){if(n=e[it])return n;e=ru(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[it]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ds(e){return e[Cr]||null}var Fo=[],wn=-1;function Vt(e){return{current:e}}function K(e){0>wn||(e.current=Fo[wn],Fo[wn]=null,wn--)}function H(e,t){wn++,Fo[wn]=e.current,e.current=t}var Mt={},ge=Vt(Mt),Ee=Vt(!1),nn=Mt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Vi(){K(Ee),K(ge)}function iu(e,t,n){if(ge.current!==Mt)throw Error(N(168));H(ge,t),H(Ee,n)}function kd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,eh(e)||"Unknown",i));return G({},n,r)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,nn=ge.current,H(ge,e),H(Ee,Ee.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=kd(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,K(Ee),K(ge),H(ge,e)):K(Ee),H(Ee,n)}var dt=null,fs=!1,Ks=!1;function Sd(e){dt===null?dt=[e]:dt.push(e)}function xm(e){fs=!0,Sd(e)}function Ht(){if(!Ks&&dt!==null){Ks=!0;var e=0,t=F;try{var n=dt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,fs=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Kc(Pa,Ht),i}finally{F=t,Ks=!1}}return null}var bn=[],kn=0,Wi=null,qi=0,De=[],Be=0,rn=null,ft=1,pt="";function Yt(e,t){bn[kn++]=qi,bn[kn++]=Wi,Wi=e,qi=t}function Ed(e,t,n){De[Be++]=ft,De[Be++]=pt,De[Be++]=rn,rn=e;var r=ft;e=pt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var s=32-Je(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Je(t)+i|n<<i|r,pt=s+e}else ft=1<<s|n<<i|r,pt=e}function Ba(e){e.return!==null&&(Yt(e,1),Ed(e,1,0))}function Fa(e){for(;e===Wi;)Wi=bn[--kn],bn[kn]=null,qi=bn[--kn],bn[kn]=null;for(;e===rn;)rn=De[--Be],De[Be]=null,pt=De[--Be],De[Be]=null,ft=De[--Be],De[Be]=null}var Le=null,Oe=null,Q=!1,Qe=null;function Nd(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Oe=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Oe=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $o(e){if(Q){var t=Oe;if(t){var n=t;if(!ou(e,t)){if(Mo(e))throw Error(N(418));t=Lt(n.nextSibling);var r=Le;t&&ou(e,t)?Nd(r,n):(e.flags=e.flags&-4097|2,Q=!1,Le=e)}}else{if(Mo(e))throw Error(N(418));e.flags=e.flags&-4097|2,Q=!1,Le=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function si(e){if(e!==Le)return!1;if(!Q)return au(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Uo(e.type,e.memoizedProps)),t&&(t=Oe)){if(Mo(e))throw jd(),Error(N(418));for(;t;)Nd(e,t),t=Lt(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Le?Lt(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=Oe;e;)e=Lt(e.nextSibling)}function An(){Oe=Le=null,Q=!1}function Ma(e){Qe===null?Qe=[e]:Qe.push(e)}var ym=vt.ReactCurrentBatchConfig;function Gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function oi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function _d(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Ut(h,p),h.index=0,h.sibling=null,h}function s(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,m,k){return p===null||p.tag!==6?(p=to(m,h.mode,k),p.return=h,p):(p=i(p,m),p.return=h,p)}function u(h,p,m,k){var E=m.type;return E===mn?f(h,p,m.props.children,k,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===St&&lu(E)===p.type)?(k=i(p,m.props),k.ref=Gn(h,p,m),k.return=h,k):(k=ji(m.type,m.key,m.props,null,h.mode,k),k.ref=Gn(h,p,m),k.return=h,k)}function c(h,p,m,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=no(m,h.mode,k),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function f(h,p,m,k,E){return p===null||p.tag!==7?(p=en(m,h.mode,k,E),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=to(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return m=ji(p.type,p.key,p.props,null,h.mode,m),m.ref=Gn(h,null,p),m.return=h,m;case hn:return p=no(p,h.mode,m),p.return=h,p;case St:var k=p._init;return d(h,k(p._payload),m)}if(sr(p)||Yn(p))return p=en(p,h.mode,m,null),p.return=h,p;oi(h,p)}return null}function g(h,p,m,k){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:l(h,p,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:return m.key===E?u(h,p,m,k):null;case hn:return m.key===E?c(h,p,m,k):null;case St:return E=m._init,g(h,p,E(m._payload),k)}if(sr(m)||Yn(m))return E!==null?null:f(h,p,m,k,null);oi(h,m)}return null}function b(h,p,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(m)||null,l(p,h,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Qr:return h=h.get(k.key===null?m:k.key)||null,u(p,h,k,E);case hn:return h=h.get(k.key===null?m:k.key)||null,c(p,h,k,E);case St:var C=k._init;return b(h,p,m,C(k._payload),E)}if(sr(k)||Yn(k))return h=h.get(m)||null,f(p,h,k,E,null);oi(p,k)}return null}function x(h,p,m,k){for(var E=null,C=null,_=p,P=p=0,M=null;_!==null&&P<m.length;P++){_.index>P?(M=_,_=null):M=_.sibling;var L=g(h,_,m[P],k);if(L===null){_===null&&(_=M);break}e&&_&&L.alternate===null&&t(h,_),p=s(L,p,P),C===null?E=L:C.sibling=L,C=L,_=M}if(P===m.length)return n(h,_),Q&&Yt(h,P),E;if(_===null){for(;P<m.length;P++)_=d(h,m[P],k),_!==null&&(p=s(_,p,P),C===null?E=_:C.sibling=_,C=_);return Q&&Yt(h,P),E}for(_=r(h,_);P<m.length;P++)M=b(_,h,P,m[P],k),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?P:M.key),p=s(M,p,P),C===null?E=M:C.sibling=M,C=M);return e&&_.forEach(function(le){return t(h,le)}),Q&&Yt(h,P),E}function v(h,p,m,k){var E=Yn(m);if(typeof E!="function")throw Error(N(150));if(m=E.call(m),m==null)throw Error(N(151));for(var C=E=null,_=p,P=p=0,M=null,L=m.next();_!==null&&!L.done;P++,L=m.next()){_.index>P?(M=_,_=null):M=_.sibling;var le=g(h,_,L.value,k);if(le===null){_===null&&(_=M);break}e&&_&&le.alternate===null&&t(h,_),p=s(le,p,P),C===null?E=le:C.sibling=le,C=le,_=M}if(L.done)return n(h,_),Q&&Yt(h,P),E;if(_===null){for(;!L.done;P++,L=m.next())L=d(h,L.value,k),L!==null&&(p=s(L,p,P),C===null?E=L:C.sibling=L,C=L);return Q&&Yt(h,P),E}for(_=r(h,_);!L.done;P++,L=m.next())L=b(_,h,P,L.value,k),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?P:L.key),p=s(L,p,P),C===null?E=L:C.sibling=L,C=L);return e&&_.forEach(function(Re){return t(h,Re)}),Q&&Yt(h,P),E}function y(h,p,m,k){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:e:{for(var E=m.key,C=p;C!==null;){if(C.key===E){if(E=m.type,E===mn){if(C.tag===7){n(h,C.sibling),p=i(C,m.props.children),p.return=h,h=p;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===St&&lu(E)===C.type){n(h,C.sibling),p=i(C,m.props),p.ref=Gn(h,C,m),p.return=h,h=p;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===mn?(p=en(m.props.children,h.mode,k,m.key),p.return=h,h=p):(k=ji(m.type,m.key,m.props,null,h.mode,k),k.ref=Gn(h,p,m),k.return=h,h=k)}return o(h);case hn:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=no(m,h.mode,k),p.return=h,h=p}return o(h);case St:return C=m._init,y(h,p,C(m._payload),k)}if(sr(m))return x(h,p,m,k);if(Yn(m))return v(h,p,m,k);oi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=to(m,h.mode,k),p.return=h,h=p),o(h)):n(h,p)}return y}var zn=_d(!0),Cd=_d(!1),Yi=Vt(null),Ki=null,Sn=null,$a=null;function Va(){$a=Sn=Ki=null}function Ha(e){var t=Yi.current;K(Yi),e._currentValue=t}function Vo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Ki=e,$a=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(Ki===null)throw Error(N(308));Sn=e,Ki.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Xt=null;function Wa(e){Xt===null?Xt=[e]:Xt.push(e)}function Rd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wa(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Wa(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}function uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var i=e.updateQueue;Et=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,b=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(g=t,b=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(b,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(b,d,g):x,g==null)break e;d=G({},d,g);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else b={eventTime:b,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=b,u=d):f=f.next=b,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);on|=o,e.lanes=o,e.memoizedState=d}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Mr={},ot=Vt(Mr),Rr=Vt(Mr),Pr=Vt(Mr);function Jt(e){if(e===Mr)throw Error(N(174));return e}function Ya(e,t){switch(H(Pr,t),H(Rr,e),H(ot,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:So(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=So(t,e)}K(ot),H(ot,t)}function In(){K(ot),K(Rr),K(Pr)}function Td(e){Jt(Pr.current);var t=Jt(ot.current),n=So(t,e.type);t!==n&&(H(Rr,e),H(ot,n))}function Ka(e){Rr.current===e&&(K(ot),K(Rr))}var X=Vt(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qs=[];function Qa(){for(var e=0;e<Qs.length;e++)Qs[e]._workInProgressVersionPrimary=null;Qs.length=0}var bi=vt.ReactCurrentDispatcher,Xs=vt.ReactCurrentBatchConfig,sn=0,J=null,ie=null,oe=null,Ji=!1,hr=!1,Tr=0,vm=0;function fe(){throw Error(N(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Ja(e,t,n,r,i,s){if(sn=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?Sm:Em,e=n(r,i),hr){s=0;do{if(hr=!1,Tr=0,25<=s)throw Error(N(301));s+=1,oe=ie=null,t.updateQueue=null,bi.current=Nm,e=n(r,i)}while(hr)}if(bi.current=Gi,t=ie!==null&&ie.next!==null,sn=0,oe=ie=J=null,Ji=!1,t)throw Error(N(300));return e}function Ga(){var e=Tr!==0;return Tr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?J.memoizedState=oe=e:oe=oe.next=e,oe}function He(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=oe===null?J.memoizedState:oe.next;if(t!==null)oe=t,ie=e;else{if(e===null)throw Error(N(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},oe===null?J.memoizedState=oe=e:oe=oe.next=e}return oe}function Or(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=He(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((sn&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=d,o=r):u=u.next=d,J.lanes|=f,on|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,on|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gs(e){var t=He(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ze(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Od(){}function Ld(e,t){var n=J,r=He(),i=t(),s=!Ze(r.memoizedState,i);if(s&&(r.memoizedState=i,Se=!0),r=r.queue,Za(Id.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Lr(9,zd.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(N(349));sn&30||Ad(n,t,i)}return i}function Ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,r){t.value=n,t.getSnapshot=r,Ud(t)&&Dd(e)}function Id(e,t,n){return n(function(){Ud(t)&&Dd(e)})}function Ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Dd(e){var t=xt(e,1);t!==null&&Ge(t,e,1,-1)}function du(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=km.bind(null,J,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bd(){return He().memoizedState}function ki(e,t,n,r){var i=rt();J.flags|=e,i.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function ps(e,t,n,r){var i=He();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&Xa(r,o.deps)){i.memoizedState=Lr(t,n,s,r);return}}J.flags|=e,i.memoizedState=Lr(1|t,n,s,r)}function fu(e,t){return ki(8390656,8,e,t)}function Za(e,t){return ps(2048,8,e,t)}function Fd(e,t){return ps(4,2,e,t)}function Md(e,t){return ps(4,4,e,t)}function $d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vd(e,t,n){return n=n!=null?n.concat([e]):null,ps(4,4,$d.bind(null,t,e),n)}function el(){}function Hd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qd(e,t,n){return sn&21?(Ze(n,t)||(n=Jc(),J.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function wm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Xs.transition;Xs.transition={};try{e(!1),t()}finally{F=n,Xs.transition=r}}function Yd(){return He().memoizedState}function bm(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kd(e))Qd(t,n);else if(n=Rd(e,t,n,r),n!==null){var i=ye();Ge(n,e,r,i),Xd(n,t,r)}}function km(e,t,n){var r=It(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kd(e))Qd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,o)){var u=t.interleaved;u===null?(i.next=i,Wa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Rd(e,t,i,r),n!==null&&(i=ye(),Ge(n,e,r,i),Xd(n,t,r))}}function Kd(e){var t=e.alternate;return e===J||t!==null&&t===J}function Qd(e,t){hr=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}var Gi={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Sm={readContext:Ve,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bm.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:du,useDebugValue:el,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=du(!1),t=e[0];return e=wm.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=rt();if(Q){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ae===null)throw Error(N(349));sn&30||Ad(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,fu(Id.bind(null,r,s,e),[e]),r.flags|=2048,Lr(9,zd.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(Q){var n=pt,r=ft;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Em={readContext:Ve,useCallback:Hd,useContext:Ve,useEffect:Za,useImperativeHandle:Vd,useInsertionEffect:Fd,useLayoutEffect:Md,useMemo:Wd,useReducer:Js,useRef:Bd,useState:function(){return Js(Or)},useDebugValue:el,useDeferredValue:function(e){var t=He();return qd(t,ie.memoizedState,e)},useTransition:function(){var e=Js(Or)[0],t=He().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Ld,useId:Yd,unstable_isNewReconciler:!1},Nm={readContext:Ve,useCallback:Hd,useContext:Ve,useEffect:Za,useImperativeHandle:Vd,useInsertionEffect:Fd,useLayoutEffect:Md,useMemo:Wd,useReducer:Gs,useRef:Bd,useState:function(){return Gs(Or)},useDebugValue:el,useDeferredValue:function(e){var t=He();return ie===null?t.memoizedState=e:qd(t,ie.memoizedState,e)},useTransition:function(){var e=Gs(Or)[0],t=He().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Ld,useId:Yd,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ho(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=It(e),s=ht(r,i);s.payload=t,n!=null&&(s.callback=n),t=At(e,s,i),t!==null&&(Ge(t,e,i,r),wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=It(e),s=ht(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=At(e,s,i),t!==null&&(Ge(t,e,i,r),wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=It(e),i=ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(Ge(t,e,r,n),wi(t,e,r))}};function pu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,s):!0}function Jd(e,t,n){var r=!1,i=Mt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ve(s):(i=Ne(t)?nn:ge.current,r=t.contextTypes,s=(r=r!=null)?Ln(e,i):Mt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Wo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},qa(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ve(s):(s=Ne(t)?nn:ge.current,i.context=Ln(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ho(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hs.enqueueReplaceState(i,i.state,null),Qi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=Zp(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Zs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){es||(es=!0,na=r),qo(e,t)},n}function Zd(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){qo(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qo(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fm.bind(null,e,t,n),t.then(e,e))}function gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var _m=vt.ReactCurrentOwner,Se=!1;function xe(e,t,n,r){t.child=e===null?Cd(t,null,n,r):zn(t,e.child,n,r)}function yu(e,t,n,r,i){n=n.render;var s=t.ref;return Pn(t,i),r=Ja(e,t,n,r,s,i),n=Ga(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Q&&n&&Ba(t),t.flags|=1,xe(e,t,r,i),t.child)}function vu(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ll(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ef(e,t,s,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Ut(s,r),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Nr(s,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,yt(e,t,i)}return Yo(e,t,n,r,i)}function tf(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Nn,Te),Te|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Nn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(Nn,Te),Te|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(Nn,Te),Te|=r;return xe(e,t,i,n),t.child}function nf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,i){var s=Ne(n)?nn:ge.current;return s=Ln(t,s),Pn(t,i),n=Ja(e,t,n,r,s,i),r=Ga(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Q&&r&&Ba(t),t.flags|=1,xe(e,t,n,i),t.child)}function wu(e,t,n,r,i){if(Ne(n)){var s=!0;Hi(t)}else s=!1;if(Pn(t,i),t.stateNode===null)Si(e,t),Jd(t,n,r),Wo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Ne(n)?nn:ge.current,c=Ln(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&hu(t,o,r,c),Et=!1;var g=t.memoizedState;o.state=g,Qi(t,r,o,i),u=t.memoizedState,l!==r||g!==u||Ee.current||Et?(typeof f=="function"&&(Ho(t,n,f,r),u=t.memoizedState),(l=Et||pu(t,n,l,r,g,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Pd(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:qe(t.type,l),o.props=c,d=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ve(u):(u=Ne(n)?nn:ge.current,u=Ln(t,u));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||g!==u)&&hu(t,o,r,u),Et=!1,g=t.memoizedState,o.state=g,Qi(t,r,o,i);var x=t.memoizedState;l!==d||g!==x||Ee.current||Et?(typeof b=="function"&&(Ho(t,n,b,r),x=t.memoizedState),(c=Et||pu(t,n,c,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ko(e,t,n,r,s,i)}function Ko(e,t,n,r,i,s){nf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&su(t,n,!1),yt(e,t,s);r=t.stateNode,_m.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zn(t,e.child,null,s),t.child=zn(t,null,l,s)):xe(e,t,l,s),t.memoizedState=r.state,i&&su(t,n,!0),t.child}function rf(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Ya(e,t.containerInfo)}function bu(e,t,n,r,i){return An(),Ma(i),t.flags|=256,xe(e,t,n,r),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,i=X.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(X,i&1),e===null)return $o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xs(o,r,0,null),e=en(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xo(n),t.memoizedState=Qo,e):tl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Cm(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ut(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ut(l,s):(s=en(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Xo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Qo,r}return s=e.child,e=s.sibling,r=Ut(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tl(e,t){return t=xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&Ma(r),zn(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cm(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Zs(Error(N(422))),ai(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xs({mode:"visible",children:r.children},i,0,null),s=en(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&zn(t,e.child,null,o),t.child.memoizedState=Xo(o),t.memoizedState=Qo,s);if(!(t.mode&1))return ai(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(N(419)),r=Zs(s,r,void 0),ai(e,t,o,r)}if(l=(o&e.childLanes)!==0,Se||l){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(e,i),Ge(r,e,i,-1))}return al(),r=Zs(Error(N(421))),ai(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Oe=Lt(i.nextSibling),Le=t,Q=!0,Qe=null,e!==null&&(De[Be++]=ft,De[Be++]=pt,De[Be++]=rn,ft=e.id,pt=e.overflow,rn=t),t=tl(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vo(e.return,t,n)}function eo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function of(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(xe(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),eo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}eo(t,!0,n,null,s);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rm(e,t,n){switch(t.tag){case 3:rf(t),An();break;case 5:Td(t);break;case 1:Ne(t.type)&&Hi(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Yi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(H(X,X.current&1),e=yt(e,t,n),e!==null?e.sibling:null);H(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return of(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,tf(e,t,n)}return yt(e,t,n)}var af,Jo,lf,uf;af=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jo=function(){};lf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(ot.current);var s=null;switch(n){case"input":i=vo(e,i),r=vo(e,r),s=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":i=ko(e,i),r=ko(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}Eo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Y("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pm(e,t,n){var r=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ne(t.type)&&Vi(),pe(t),null;case 3:return r=t.stateNode,In(),K(Ee),K(ge),Qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(sa(Qe),Qe=null))),Jo(e,t),pe(t),null;case 5:Ka(t);var i=Jt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)lf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return pe(t),null}if(e=Jt(ot.current),si(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[it]=t,r[Cr]=s,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<ar.length;i++)Y(ar[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Tl(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Ll(r,s),Y("invalid",r)}Eo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ii(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ii(r.textContent,l,e),i=["children",""+l]):yr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Xr(r),Ol(r,s,!0);break;case"textarea":Xr(r),Al(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ic(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[it]=t,e[Cr]=r,af(e,t,!1,!1),t.stateNode=e;e:{switch(o=No(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<ar.length;i++)Y(ar[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":Tl(e,r),i=vo(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Ll(e,r),i=ko(e,r),Y("invalid",e);break;default:i=r}Eo(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Bc(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uc(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vr(e,u):typeof u=="number"&&vr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yr.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Y("scroll",e):u!=null&&Na(e,s,u,o))}switch(n){case"input":Xr(e),Ol(e,r,!1);break;case"textarea":Xr(e),Al(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?jn(e,!!r.multiple,s,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Jt(Pr.current),Jt(ot.current),si(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(s=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return pe(t),null;case 13:if(K(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Oe!==null&&t.mode&1&&!(t.flags&128))jd(),An(),t.flags|=98560,s=!1;else if(s=si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[it]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else Qe!==null&&(sa(Qe),Qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?se===0&&(se=3):al())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return In(),Jo(e,t),e===null&&jr(t.stateNode.containerInfo),pe(t),null;case 10:return Ha(t.type._context),pe(t),null;case 17:return Ne(t.type)&&Vi(),pe(t),null;case 19:if(K(X),s=t.memoizedState,s===null)return pe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Zn(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xi(e),o!==null){for(t.flags|=128,Zn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(X,X.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>Dn&&(t.flags|=128,r=!0,Zn(s,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Q)return pe(t),null}else 2*ee()-s.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Zn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=X.current,H(X,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Tm(e,t){switch(Fa(t),t.tag){case 1:return Ne(t.type)&&Vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),K(Ee),K(ge),Qa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ka(t),null;case 13:if(K(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(X),null;case 4:return In(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var li=!1,he=!1,Om=typeof WeakSet=="function"?WeakSet:Set,R=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Go(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Su=!1;function Lm(e,t){if(zo=Bi,e=pd(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,d=e,g=null;t:for(;;){for(var b;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(b=d.firstChild)!==null;)g=d,d=b;for(;;){if(d===e)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(b=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Io={focusedElem:e,selectionRange:n},Bi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,y=x.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:qe(t.type,v),y);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){Z(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=Su,Su=!1,x}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Go(t,n,s)}i=i.next}while(i!==r)}}function ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cf(e){var t=e.alternate;t!==null&&(e.alternate=null,cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Cr],delete t[Bo],delete t[mm],delete t[gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function df(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var ue=null,Ye=!1;function kt(e,t,n){for(n=n.child;n!==null;)ff(e,t,n),n=n.sibling}function ff(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 5:he||En(n,t);case 6:var r=ue,i=Ye;ue=null,kt(e,t,n),ue=r,Ye=i,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?Ys(e.parentNode,n):e.nodeType===1&&Ys(e,n),Sr(e)):Ys(ue,n.stateNode));break;case 4:r=ue,i=Ye,ue=n.stateNode.containerInfo,Ye=!0,kt(e,t,n),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Go(n,t,o),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!he&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,kt(e,t,n),he=r):kt(e,t,n);break;default:kt(e,t,n)}}function Nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Om),t.forEach(function(r){var i=$m.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ye=!1;break e;case 3:ue=l.stateNode.containerInfo,Ye=!0;break e;case 4:ue=l.stateNode.containerInfo,Ye=!0;break e}l=l.return}if(ue===null)throw Error(N(160));ff(s,o,i),ue=null,Ye=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pf(t,e),t=t.sibling}function pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),tt(e),r&4){try{mr(3,e,e.return),ms(3,e)}catch(v){Z(e,e.return,v)}try{mr(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:We(t,e),tt(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(We(t,e),tt(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var i=e.stateNode;try{vr(i,"")}catch(v){Z(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ac(i,s),No(l,o);var c=No(l,s);for(o=0;o<u.length;o+=2){var f=u[o],d=u[o+1];f==="style"?Bc(i,d):f==="dangerouslySetInnerHTML"?Uc(i,d):f==="children"?vr(i,d):Na(i,f,d,c)}switch(l){case"input":wo(i,s);break;case"textarea":zc(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?jn(i,!!s.multiple,b,!1):g!==!!s.multiple&&(s.defaultValue!=null?jn(i,!!s.multiple,s.defaultValue,!0):jn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cr]=s}catch(v){Z(e,e.return,v)}}break;case 6:if(We(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Z(e,e.return,v)}}break;case 3:if(We(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:We(t,e),tt(e);break;case 13:We(t,e),tt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(il=ee())),r&4&&Nu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||f,We(t,e),he=c):We(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(d=R=f;R!==null;){switch(g=R,b=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:En(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:En(g,g.return);break;case 22:if(g.memoizedState!==null){_u(d);continue}}b!==null?(b.return=g,R=b):_u(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Dc("display",o))}catch(v){Z(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Z(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),tt(e),r&4&&Nu(e);break;case 21:break;default:We(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(df(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vr(i,""),r.flags&=-33);var s=Eu(e);ta(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Eu(e);ea(e,l,o);break;default:throw Error(N(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,n){R=e,hf(e)}function hf(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||li;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||he;l=li;var c=he;if(li=o,(he=u)&&!c)for(R=i;R!==null;)o=R,u=o.child,o.tag===22&&o.memoizedState!==null?Cu(i):u!==null?(u.return=o,R=u):Cu(i);for(;s!==null;)R=s,hf(s),s=s.sibling;R=i,li=l,he=c}ju(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):ju(e)}}function ju(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||ms(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&cu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Sr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}he||t.flags&512&&Zo(t)}catch(g){Z(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function _u(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Cu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ms(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Z(t,i,u)}}var s=t.return;try{Zo(t)}catch(u){Z(t,s,u)}break;case 5:var o=t.return;try{Zo(t)}catch(u){Z(t,o,u)}}}catch(u){Z(t,t.return,u)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var zm=Math.ceil,Zi=vt.ReactCurrentDispatcher,nl=vt.ReactCurrentOwner,$e=vt.ReactCurrentBatchConfig,U=0,ae=null,te=null,ce=0,Te=0,Nn=Vt(0),se=0,Ar=null,on=0,gs=0,rl=0,gr=null,ke=null,il=0,Dn=1/0,ct=null,es=!1,na=null,zt=null,ui=!1,Ct=null,ts=0,xr=0,ra=null,Ei=-1,Ni=0;function ye(){return U&6?ee():Ei!==-1?Ei:Ei=ee()}function It(e){return e.mode&1?U&2&&ce!==0?ce&-ce:ym.transition!==null?(Ni===0&&(Ni=Jc()),Ni):(e=F,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function Ge(e,t,n,r){if(50<xr)throw xr=0,ra=null,Error(N(185));Dr(e,n,r),(!(U&2)||e!==ae)&&(e===ae&&(!(U&2)&&(gs|=n),se===4&&jt(e,ce)),je(e,r),n===1&&U===0&&!(t.mode&1)&&(Dn=ee()+500,fs&&Ht()))}function je(e,t){var n=e.callbackNode;yh(e,t);var r=Di(e,e===ae?ce:0);if(r===0)n!==null&&Ul(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ul(n),t===1)e.tag===0?xm(Ru.bind(null,e)):Sd(Ru.bind(null,e)),pm(function(){!(U&6)&&Ht()}),n=null;else{switch(Gc(r)){case 1:n=Pa;break;case 4:n=Qc;break;case 16:n=Ui;break;case 536870912:n=Xc;break;default:n=Ui}n=kf(n,mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mf(e,t){if(Ei=-1,Ni=0,U&6)throw Error(N(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Di(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ns(e,r);else{t=r;var i=U;U|=2;var s=xf();(ae!==e||ce!==t)&&(ct=null,Dn=ee()+500,Zt(e,t));do try{Dm();break}catch(l){gf(e,l)}while(!0);Va(),Zi.current=s,U=i,te!==null?t=0:(ae=null,ce=0,t=se)}if(t!==0){if(t===2&&(i=Po(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=Ar,Zt(e,0),jt(e,r),je(e,ee()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Im(i)&&(t=ns(e,r),t===2&&(s=Po(e),s!==0&&(r=s,t=ia(e,s))),t===1))throw n=Ar,Zt(e,0),jt(e,r),je(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Kt(e,ke,ct);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=il+500-ee(),10<t)){if(Di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Do(Kt.bind(null,e,ke,ct),t);break}Kt(e,ke,ct);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Je(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zm(r/1960))-r,10<r){e.timeoutHandle=Do(Kt.bind(null,e,ke,ct),r);break}Kt(e,ke,ct);break;case 5:Kt(e,ke,ct);break;default:throw Error(N(329))}}}return je(e,ee()),e.callbackNode===n?mf.bind(null,e):null}function ia(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=ns(e,t),e!==2&&(t=ke,ke=n,t!==null&&sa(t)),e}function sa(e){ke===null?ke=e:ke.push.apply(ke,e)}function Im(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~rl,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Ru(e){if(U&6)throw Error(N(327));Tn();var t=Di(e,0);if(!(t&1))return je(e,ee()),null;var n=ns(e,t);if(e.tag!==0&&n===2){var r=Po(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=Ar,Zt(e,0),jt(e,t),je(e,ee()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,ke,ct),je(e,ee()),null}function sl(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Dn=ee()+500,fs&&Ht())}}function an(e){Ct!==null&&Ct.tag===0&&!(U&6)&&Tn();var t=U;U|=1;var n=$e.transition,r=F;try{if($e.transition=null,F=1,e)return e()}finally{F=r,$e.transition=n,U=t,!(U&6)&&Ht()}}function ol(){Te=Nn.current,K(Nn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vi();break;case 3:In(),K(Ee),K(ge),Qa();break;case 5:Ka(r);break;case 4:In();break;case 13:K(X);break;case 19:K(X);break;case 10:Ha(r.type._context);break;case 22:case 23:ol()}n=n.return}if(ae=e,te=e=Ut(e.current,null),ce=Te=t,se=0,Ar=null,rl=gs=on=0,ke=gr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xt=null}return e}function gf(e,t){do{var n=te;try{if(Va(),bi.current=Gi,Ji){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ji=!1}if(sn=0,oe=ie=J=null,hr=!1,Tr=0,nl.current=null,n===null||n.return===null){se=1,Ar=t,te=null;break}e:{var s=e,o=n.return,l=n,u=t;if(t=ce,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=gu(o);if(b!==null){b.flags&=-257,xu(b,o,l,s,t),b.mode&1&&mu(s,c,t),t=b,u=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(u),t.updateQueue=v}else x.add(u);break e}else{if(!(t&1)){mu(s,c,t),al();break e}u=Error(N(426))}}else if(Q&&l.mode&1){var y=gu(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),xu(y,o,l,s,t),Ma(Un(u,l));break e}}s=u=Un(u,l),se!==4&&(se=2),gr===null?gr=[s]:gr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Gd(s,u,t);uu(s,h);break e;case 1:l=u;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=Zd(s,l,t);uu(s,k);break e}}s=s.return}while(s!==null)}vf(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function xf(){var e=Zi.current;return Zi.current=Gi,e===null?Gi:e}function al(){(se===0||se===3||se===2)&&(se=4),ae===null||!(on&268435455)&&!(gs&268435455)||jt(ae,ce)}function ns(e,t){var n=U;U|=2;var r=xf();(ae!==e||ce!==t)&&(ct=null,Zt(e,t));do try{Um();break}catch(i){gf(e,i)}while(!0);if(Va(),U=n,Zi.current=r,te!==null)throw Error(N(261));return ae=null,ce=0,se}function Um(){for(;te!==null;)yf(te)}function Dm(){for(;te!==null&&!uh();)yf(te)}function yf(e){var t=bf(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?vf(e):te=t,nl.current=null}function vf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tm(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,te=null;return}}else if(n=Pm(n,t,Te),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);se===0&&(se=5)}function Kt(e,t,n){var r=F,i=$e.transition;try{$e.transition=null,F=1,Bm(e,t,n,r)}finally{$e.transition=i,F=r}return null}function Bm(e,t,n,r){do Tn();while(Ct!==null);if(U&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(vh(e,s),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ui||(ui=!0,kf(Ui,function(){return Tn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$e.transition,$e.transition=null;var o=F;F=1;var l=U;U|=4,nl.current=null,Lm(e,n),pf(n,e),sm(Io),Bi=!!zo,Io=zo=null,e.current=n,Am(n),ch(),U=l,F=o,$e.transition=s}else e.current=n;if(ui&&(ui=!1,Ct=e,ts=i),s=e.pendingLanes,s===0&&(zt=null),ph(n.stateNode),je(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(es)throw es=!1,e=na,na=null,e;return ts&1&&e.tag!==0&&Tn(),s=e.pendingLanes,s&1?e===ra?xr++:(xr=0,ra=e):xr=0,Ht(),null}function Tn(){if(Ct!==null){var e=Gc(ts),t=$e.transition,n=F;try{if($e.transition=null,F=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,ts=0,U&6)throw Error(N(331));var i=U;for(U|=4,R=e.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(R=c;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:mr(8,f,s)}var d=f.child;if(d!==null)d.return=f,R=d;else for(;R!==null;){f=R;var g=f.sibling,b=f.return;if(cf(f),f===c){R=null;break}if(g!==null){g.return=b,R=g;break}R=b}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,R=h;break e}R=s.return}}var p=e.current;for(R=p;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=p;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ms(9,l)}}catch(E){Z(l,l.return,E)}if(l===o){R=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,R=k;break e}R=l.return}}if(U=i,Ht(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(as,e)}catch{}r=!0}return r}finally{F=n,$e.transition=t}}return!1}function Pu(e,t,n){t=Un(n,t),t=Gd(e,t,1),e=At(e,t,1),t=ye(),e!==null&&(Dr(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Un(n,e),e=Zd(t,e,1),t=At(t,e,1),e=ye(),t!==null&&(Dr(t,1,e),je(t,e));break}}t=t.return}}function Fm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(se===4||se===3&&(ce&130023424)===ce&&500>ee()-il?Zt(e,0):rl|=n),je(e,t)}function wf(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=ye();e=xt(e,t),e!==null&&(Dr(e,t,n),je(e,n))}function Mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wf(e,n)}function $m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),wf(e,n)}var bf;bf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Rm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Q&&t.flags&1048576&&Ed(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Si(e,t),e=t.pendingProps;var i=Ln(t,ge.current);Pn(t,n),i=Ja(null,t,r,e,i,n);var s=Ga();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,Hi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qa(t),i.updater=hs,t.stateNode=i,i._reactInternals=t,Wo(t,r,e,n),t=Ko(null,t,r,!0,s,n)):(t.tag=0,Q&&s&&Ba(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hm(r),e=qe(r,e),i){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=vu(null,t,r,qe(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Yo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),wu(e,t,r,i,n);case 3:e:{if(rf(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Pd(e,t),Qi(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Un(Error(N(423)),t),t=bu(e,t,r,n,i);break e}else if(r!==i){i=Un(Error(N(424)),t),t=bu(e,t,r,n,i);break e}else for(Oe=Lt(t.stateNode.containerInfo.firstChild),Le=t,Q=!0,Qe=null,n=Cd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===i){t=yt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Td(t),e===null&&$o(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Uo(r,i)?o=null:s!==null&&Uo(r,s)&&(t.flags|=32),nf(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&$o(t),null;case 13:return sf(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),yu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Yi,r._currentValue),r._currentValue=o,s!==null)if(Ze(s.value,o)){if(s.children===i.children&&!Ee.current){t=yt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ht(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Vo(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vo(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=Ve(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),vu(e,t,r,i,n);case 15:return ef(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Si(e,t),t.tag=1,Ne(r)?(e=!0,Hi(t)):e=!1,Pn(t,n),Jd(t,r,i),Wo(t,r,i,n),Ko(null,t,r,!0,e,n);case 19:return of(e,t,n);case 22:return tf(e,t,n)}throw Error(N(156,t.tag))};function kf(e,t){return Kc(e,t)}function Vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Vm(e,t,n,r)}function ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_a)return 11;if(e===Ca)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ll(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mn:return en(n.children,i,s,t);case ja:o=8,i|=8;break;case mo:return e=Me(12,n,t,i|2),e.elementType=mo,e.lanes=s,e;case go:return e=Me(13,n,t,i),e.elementType=go,e.lanes=s,e;case xo:return e=Me(19,n,t,i),e.elementType=xo,e.lanes=s,e;case Tc:return xs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:o=10;break e;case Pc:o=9;break e;case _a:o=11;break e;case Ca:o=14;break e;case St:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Me(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function en(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function xs(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function to(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function no(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Is(0),this.expirationTimes=Is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Is(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ul(e,t,n,r,i,s,o,l,u){return e=new Wm(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Me(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(s),e}function qm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sf(e){if(!e)return Mt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ne(n))return kd(e,n,t)}return t}function Ef(e,t,n,r,i,s,o,l,u){return e=ul(n,r,!0,e,i,s,o,l,u),e.context=Sf(null),n=e.current,r=ye(),i=It(n),s=ht(r,i),s.callback=t??null,At(n,s,i),e.current.lanes=i,Dr(e,i,r),je(e,r),e}function ys(e,t,n,r){var i=t.current,s=ye(),o=It(i);return n=Sf(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,o),e!==null&&(Ge(e,i,o,s),wi(e,i,o)),o}function rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cl(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}function Ym(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}vs.prototype.render=dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ys(e,t,null,null)};vs.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){ys(null,e,null,null)}),t[gt]=null}};function vs(e){this._internalRoot=e}vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&rd(e)}};function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function Km(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=rs(o);s.call(c)}}var o=Ef(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=o,e[gt]=o.current,jr(e.nodeType===8?e.parentNode:e),an(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=rs(u);l.call(c)}}var u=ul(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=u,e[gt]=u.current,jr(e.nodeType===8?e.parentNode:e),an(function(){ys(t,u,n,r)}),u}function bs(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=rs(o);l.call(u)}}ys(t,o,e,i)}else o=Km(n,t,e,i,r);return rs(o)}Zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(Ta(t,n|1),je(t,ee()),!(U&6)&&(Dn=ee()+500,Ht()))}break;case 13:an(function(){var r=xt(e,1);if(r!==null){var i=ye();Ge(r,e,1,i)}}),cl(e,1)}};Oa=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}cl(e,134217728)}};ed=function(e){if(e.tag===13){var t=It(e),n=xt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}cl(e,t)}};td=function(){return F};nd=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};_o=function(e,t,n){switch(t){case"input":if(wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ds(r);if(!i)throw Error(N(90));Lc(r),wo(r,i)}}}break;case"textarea":zc(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};$c=sl;Vc=an;var Qm={usingClientEntryPoint:!1,Events:[Fr,vn,ds,Fc,Mc,sl]},er={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xm={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{as=ci.inject(Xm),st=ci}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fl(t))throw Error(N(200));return qm(e,t,null,n)};ze.createRoot=function(e,t){if(!fl(e))throw Error(N(299));var n=!1,r="",i=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ul(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,jr(e.nodeType===8?e.parentNode:e),new dl(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return an(e)};ze.hydrate=function(e,t,n){if(!ws(t))throw Error(N(200));return bs(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!fl(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Nf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ef(t,null,e,1,n??null,i,!1,s,o),e[gt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vs(t)};ze.render=function(e,t,n){if(!ws(t))throw Error(N(200));return bs(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!ws(e))throw Error(N(40));return e._reactRootContainer?(an(function(){bs(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};ze.unstable_batchedUpdates=sl;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ws(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return bs(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)}catch(e){console.error(e)}}jf(),Nc.exports=ze;var Jm=Nc.exports,Lu=Jm;po.createRoot=Lu.createRoot,po.hydrateRoot=Lu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const Au="popstate";function Gm(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return oa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return eg(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zm(){return Math.random().toString(36).substr(2,8)}function zu(e,t){return{usr:e.state,key:e.key,idx:t}}function oa(e,t,n,r){return n===void 0&&(n=null),zr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vn(t):t,{state:n,key:t&&t.key||r||Zm()})}function is(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function eg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Rt.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(zr({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=Rt.Pop;let y=f(),h=y==null?null:y-c;c=y,u&&u({action:l,location:v.location,delta:h})}function g(y,h){l=Rt.Push;let p=oa(v.location,y,h);c=f()+1;let m=zu(p,c),k=v.createHref(p);try{o.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}s&&u&&u({action:l,location:v.location,delta:1})}function b(y,h){l=Rt.Replace;let p=oa(v.location,y,h);c=f();let m=zu(p,c),k=v.createHref(p);o.replaceState(m,"",k),s&&u&&u({action:l,location:v.location,delta:0})}function x(y){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof y=="string"?y:is(y);return p=p.replace(/ $/,"%20"),re(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return l},get location(){return e(i,o)},listen(y){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Au,d),u=y,()=>{i.removeEventListener(Au,d),u=null}},createHref(y){return t(i,y)},createURL:x,encodeLocation(y){let h=x(y);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:b,go(y){return o.go(y)}};return v}var Iu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Iu||(Iu={}));function tg(e,t,n){return n===void 0&&(n="/"),ng(e,t,n)}function ng(e,t,n,r){let i=typeof t=="string"?Vn(t):t,s=hl(i.pathname||"/",n);if(s==null)return null;let o=_f(e);rg(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=mg(s);l=fg(o[u],c)}return l}function _f(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Dt([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_f(s.children,t,f,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:cg(c,s.index),routesMeta:f})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Cf(s.path))i(s,o,u)}),t}function Cf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Cf(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function rg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ig=/^:[\w-]+$/,sg=3,og=2,ag=1,lg=10,ug=-2,Uu=e=>e==="*";function cg(e,t){let n=e.split("/"),r=n.length;return n.some(Uu)&&(r+=ug),t&&(r+=og),n.filter(i=>!Uu(i)).reduce((i,s)=>i+(ig.test(s)?sg:s===""?ag:lg),r)}function dg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function fg(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",d=pg({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Dt([s,d.pathname]),pathnameBase:wg(Dt([s,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(s=Dt([s,d.pathnameBase]))}return o}function pg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:g,isOptional:b}=f;if(g==="*"){let v=l[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[d];return b&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function hg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),pl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function mg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xg=e=>gg.test(e);function yg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vn(e):e,s;if(n)if(xg(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),pl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Du(n.substring(1),"/"):s=Du(n,t)}else s=t;return{pathname:s,search:bg(r),hash:kg(i)}}function Du(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ro(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rf(e,t){let n=vg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vn(e):(i=zr({},e),re(!i.pathname||!i.pathname.includes("?"),ro("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),ro("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),ro("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let u=yg(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),wg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tf=["post","put","patch","delete"];new Set(Tf);const Eg=["get",...Tf];new Set(Eg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ir.apply(this,arguments)}const ml=S.createContext(null),Ng=S.createContext(null),dn=S.createContext(null),ks=S.createContext(null),Wt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Of=S.createContext(null);function jg(e,t){let{relative:n}=t===void 0?{}:t;$r()||re(!1);let{basename:r,navigator:i}=S.useContext(dn),{hash:s,pathname:o,search:l}=zf(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Dt([r,o])),i.createHref({pathname:u,search:l,hash:s})}function $r(){return S.useContext(ks)!=null}function Ss(){return $r()||re(!1),S.useContext(ks).location}function Lf(e){S.useContext(dn).static||S.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=S.useContext(Wt);return e?Bg():_g()}function _g(){$r()||re(!1);let e=S.useContext(ml),{basename:t,future:n,navigator:r}=S.useContext(dn),{matches:i}=S.useContext(Wt),{pathname:s}=Ss(),o=JSON.stringify(Rf(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return Lf(()=>{l.current=!0}),S.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=Pf(c,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Dt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,s,e])}function Af(){let{matches:e}=S.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function zf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(dn),{matches:i}=S.useContext(Wt),{pathname:s}=Ss(),o=JSON.stringify(Rf(i,r.v7_relativeSplatPath));return S.useMemo(()=>Pf(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Cg(e,t){return Rg(e,t)}function Rg(e,t,n,r){$r()||re(!1);let{navigator:i}=S.useContext(dn),{matches:s}=S.useContext(Wt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ss(),f;if(t){var d;let y=typeof t=="string"?Vn(t):t;u==="/"||(d=y.pathname)!=null&&d.startsWith(u)||re(!1),f=y}else f=c;let g=f.pathname||"/",b=g;if(u!=="/"){let y=u.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let x=tg(e,{pathname:b}),v=Ag(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Dt([u,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:Dt([u,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return t&&v?S.createElement(ks.Provider,{value:{location:Ir({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Rt.Pop}},v):v}function Pg(){let e=Dg(),t=Sg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const Tg=S.createElement(Pg,null);class Og extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Wt.Provider,{value:this.props.routeContext},S.createElement(Of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lg(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ml);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Wt.Provider,{value:t},r)}function Ag(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||re(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:g,errors:b}=n,x=d.route.loader&&g[d.route.id]===void 0&&(!b||b[d.route.id]===void 0);if(d.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,g)=>{let b,x=!1,v=null,y=null;n&&(b=l&&d.route.id?l[d.route.id]:void 0,v=d.route.errorElement||Tg,u&&(c<0&&g===0?(Fg("route-fallback"),x=!0,y=null):c===g&&(x=!0,y=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,g+1)),p=()=>{let m;return b?m=v:x?m=y:d.route.Component?m=S.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,S.createElement(Lg,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?S.createElement(Og,{location:n.location,revalidation:n.revalidation,component:v,error:b,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var If=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(If||{}),Uf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uf||{});function zg(e){let t=S.useContext(ml);return t||re(!1),t}function Ig(e){let t=S.useContext(Ng);return t||re(!1),t}function Ug(e){let t=S.useContext(Wt);return t||re(!1),t}function Df(e){let t=Ug(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function Dg(){var e;let t=S.useContext(Of),n=Ig(),r=Df();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Bg(){let{router:e}=zg(If.UseNavigateStable),t=Df(Uf.UseNavigateStable),n=S.useRef(!1);return Lf(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ir({fromRouteId:t},s)))},[e,t])}const Bu={};function Fg(e,t,n){Bu[e]||(Bu[e]=!0)}function Mg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ut(e){re(!1)}function $g(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rt.Pop,navigator:s,static:o=!1,future:l}=e;$r()&&re(!1);let u=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:s,static:o,future:Ir({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Vn(r));let{pathname:f="/",search:d="",hash:g="",state:b=null,key:x="default"}=r,v=S.useMemo(()=>{let y=hl(f,u);return y==null?null:{location:{pathname:y,search:d,hash:g,state:b,key:x},navigationType:i}},[u,f,d,g,b,x,i]);return v==null?null:S.createElement(dn.Provider,{value:c},S.createElement(ks.Provider,{children:n,value:v}))}function Vg(e){let{children:t,location:n}=e;return Cg(aa(t),n)}new Promise(()=>{});function aa(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,aa(r.props.children,s));return}r.type!==ut&&re(!1),!r.props.index||!r.props.children||re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=aa(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},la.apply(this,arguments)}function Hg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Wg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qg(e,t){return e.button===0&&(!t||t==="_self")&&!Wg(e)}const Yg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kg="6";try{window.__reactRouterVersion=Kg}catch{}const Qg="startTransition",Fu=Fp[Qg];function Xg(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=Gm({window:i,v5Compat:!0}));let o=s.current,[l,u]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=S.useCallback(d=>{c&&Fu?Fu(()=>u(d)):u(d)},[u,c]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.useEffect(()=>Mg(r),[r]),S.createElement($g,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bf=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:d}=t,g=Hg(t,Yg),{basename:b}=S.useContext(dn),x,v=!1;if(typeof c=="string"&&Gg.test(c)&&(x=c,Jg))try{let m=new URL(window.location.href),k=c.startsWith("//")?new URL(m.protocol+c):new URL(c),E=hl(k.pathname,b);k.origin===m.origin&&E!=null?c=E+k.search+k.hash:v=!0}catch{}let y=jg(c,{relative:i}),h=Zg(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:d});function p(m){r&&r(m),m.defaultPrevented||h(m)}return S.createElement("a",la({},g,{href:x||y,onClick:v||s?r:p,ref:n,target:u}))});var Mu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mu||(Mu={}));var $u;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($u||($u={}));function Zg(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,u=wt(),c=Ss(),f=zf(e,{relative:o});return S.useCallback(d=>{if(qg(d,n)){d.preventDefault();let g=r!==void 0?r:is(c)===is(f);u(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,e,s,o,l])}const e0=[{title:"Voice Practice",desc:"Answer aloud and build confidence with realistic interview conversation."},{title:"AI Questions",desc:"Get role-focused prompts for your chosen position, level, and difficulty."},{title:"Performance Reports",desc:"Review scores, strengths, improvement areas, and next practice steps."},{title:"Progress History",desc:"Keep your sessions in one place and revisit reports whenever you need them."}],t0=[{num:"01",title:"Create Profile",desc:"Sign up and keep your practice sessions saved."},{num:"02",title:"Choose Role",desc:"Set position, experience level, and difficulty."},{num:"03",title:"Practice Live",desc:"Speak your answers and continue the conversation."},{num:"04",title:"Review Report",desc:"Study your analysis after the interview is complete."}];function n0(){const e=wt(),[t,n]=S.useState(!1);return S.useEffect(()=>{const r=()=>n(window.scrollY>24);return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),a.jsxs("main",{className:"home-page",children:[a.jsx("style",{children:r0}),a.jsx("nav",{className:`home-nav ${t?"scrolled":""}`,children:a.jsxs("div",{className:"nav-inner",children:[a.jsxs("button",{className:"brand-button",type:"button",onClick:()=>e("/home"),children:[a.jsx("span",{children:"AI"}),"Interviewer"]}),a.jsxs("div",{className:"nav-actions",children:[a.jsx("button",{className:"button secondary",onClick:()=>e("/"),children:"Login"}),a.jsx("button",{className:"button primary",onClick:()=>e("/signup"),children:"Sign Up"})]})]})}),a.jsxs("section",{className:"hero-section",children:[a.jsxs("div",{className:"hero-scene","aria-hidden":"true",children:[a.jsxs("div",{className:"interview-window",children:[a.jsxs("div",{className:"window-header",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("div",{className:"window-line wide"}),a.jsx("div",{className:"window-line"}),a.jsx("div",{className:"window-line short"}),a.jsxs("div",{className:"score-mini",children:[a.jsx("strong",{children:"86"}),a.jsx("span",{children:"readiness"})]})]}),a.jsxs("div",{className:"character-stage","aria-label":"Smiling AI interviewer character",role:"img",children:[a.jsxs("div",{className:"character-body",children:[a.jsx("div",{className:"character-neck"}),a.jsx("div",{className:"character-tie"})]}),a.jsxs("div",{className:"character-head",children:[a.jsx("div",{className:"character-hair"}),a.jsxs("div",{className:"character-ears",children:[a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("div",{className:"character-eyes",children:[a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("div",{className:"character-nose"}),a.jsx("div",{className:"character-mouth"}),a.jsxs("div",{className:"character-cheeks",children:[a.jsx("span",{}),a.jsx("span",{})]})]}),a.jsx("div",{className:"character-badge",children:"AI"})]})]}),a.jsxs("div",{className:"hero-content",children:[a.jsx("span",{className:"eyebrow",children:"AI Interview Practice"}),a.jsx("h1",{children:"Practice interviews with an AI coach."}),a.jsx("p",{children:"Configure a role, speak your answers, and get a clear performance report after each interview so your next attempt gets sharper."}),a.jsxs("div",{className:"hero-actions",children:[a.jsx("button",{className:"button primary large",onClick:()=>e("/signup"),children:"Get Started"}),a.jsx("button",{className:"button ghost large",onClick:()=>e("/"),children:"Sign In"})]})]})]}),a.jsxs("section",{className:"feature-section",children:[a.jsxs("div",{className:"section-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Core Features"}),a.jsx("h2",{children:"Everything you need to practice with structure."})]}),a.jsx("div",{className:"feature-grid",children:e0.map((r,i)=>a.jsxs("article",{className:"feature-card",style:{animationDelay:`${i*90}ms`},children:[a.jsx("div",{className:"feature-number",children:i+1}),a.jsx("h3",{children:r.title}),a.jsx("p",{children:r.desc})]},r.title))})]}),a.jsxs("section",{className:"workflow-section",children:[a.jsxs("div",{className:"section-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Workflow"}),a.jsx("h2",{children:"From setup to analysis in four steps."})]}),a.jsx("div",{className:"step-grid",children:t0.map((r,i)=>a.jsxs("article",{className:"step-card",style:{animationDelay:`${i*110}ms`},children:[a.jsx("span",{children:r.num}),a.jsx("h3",{children:r.title}),a.jsx("p",{children:r.desc})]},r.num))})]}),a.jsxs("section",{className:"cta-band",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow",children:"Ready to Practice"}),a.jsx("h2",{children:"Start a focused interview session today."})]}),a.jsx("button",{className:"button primary large",onClick:()=>e("/signup"),children:"Create Account"})]}),a.jsxs("footer",{className:"home-footer",children:[a.jsx("p",{children:"AI Interviewer"}),a.jsx("span",{children:"Practice, review, improve."})]})]})}const r0=`
  .home-page {
    min-height: 100vh;
    color: #172033;
    background: linear-gradient(180deg, #eef5ff 0%, #f8fafc 50%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 16px 24px;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(148, 163, 184, 0.22);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);
    backdrop-filter: blur(14px);
    transition: background 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .home-nav.scrolled {
    background: #ffffff;
    border-bottom-color: rgba(148, 163, 184, 0.3);
    box-shadow: 0 16px 38px rgba(15, 23, 42, 0.13);
  }

  .nav-inner {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .brand-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 0;
    background: transparent;
    color: #0f172a;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
    text-shadow: none;
  }

  .brand-button span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: #2563eb;
    color: #ffffff;
    font-size: 15px;
    box-shadow: 0 12px 26px rgba(37, 99, 235, 0.24);
  }

  .nav-actions,
  .hero-actions {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    border: 1px solid rgba(37, 99, 235, 0.18);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .home-nav .button.primary {
    background: #1d4ed8;
    color: #ffffff;
    box-shadow: 0 12px 28px rgba(37, 99, 235, 0.32);
  }

  .home-nav .button.secondary {
    background: #ffffff;
    color: #1d4ed8;
    border: 1px solid rgba(37, 99, 235, 0.22);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
  }

  .button.ghost {
    background: rgba(255, 255, 255, 0.14);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.32);
  }

  .button.large {
    min-height: 54px;
    padding: 15px 24px;
    font-size: 16px;
  }

  .hero-section {
    position: relative;
    min-height: 88vh;
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    padding: 128px 28px 54px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 58%, #14b8a6 100%);
    overflow: hidden;
  }

  .hero-section::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent, rgba(238, 245, 255, 0.95));
  }

  .hero-content {
    position: relative;
    z-index: 2;
    width: min(1180px, 100%);
    margin: 0 auto;
    animation: fadeUp 760ms ease both;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .hero-content h1 {
    max-width: 700px;
    margin: 18px 0 0;
    font-size: clamp(44px, 8vw, 86px);
    line-height: 0.96;
    letter-spacing: 0;
  }

  .hero-content p {
    max-width: 610px;
    margin: 22px 0 28px;
    color: rgba(255, 255, 255, 0.84);
    font-size: 17px;
    line-height: 1.8;
  }

  .hero-scene {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  .interview-window {
    position: absolute;
    right: max(28px, calc((100vw - 1180px) / 2));
    top: 130px;
    width: min(430px, 36vw);
    min-width: 320px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.13);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(14px);
    animation: slideIn 780ms 160ms ease both;
  }

  .window-header {
    display: flex;
    gap: 8px;
    margin-bottom: 22px;
  }

  .window-header span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.72);
  }

  .window-line {
    height: 13px;
    width: 72%;
    margin-bottom: 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.22);
    animation: shimmer 1.8s ease-in-out infinite;
  }

  .window-line.wide {
    width: 92%;
  }

  .window-line.short {
    width: 48%;
  }

  .score-mini {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 26px;
    padding: 14px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.16);
  }

  .score-mini strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 18px;
    background: #ffffff;
    color: #2563eb;
    font-size: 24px;
  }

  .score-mini span {
    color: rgba(255, 255, 255, 0.82);
    font-weight: 900;
    text-transform: uppercase;
  }

  .character-stage {
    position: absolute;
    right: max(62px, calc((100vw - 1160px) / 2 + 40px));
    bottom: 42px;
    width: 330px;
    height: 360px;
    --stage-scale: 1;
    animation: floatStage 3.5s ease-in-out infinite;
  }

  .character-head {
    position: absolute;
    top: 10px;
    left: 54px;
    z-index: 3;
    width: 190px;
    height: 205px;
    border: 6px solid rgba(255, 255, 255, 0.8);
    border-radius: 48% 48% 44% 44%;
    background: #ffd6b0;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
  }

  .character-hair {
    position: absolute;
    top: -18px;
    left: 20px;
    width: 150px;
    height: 64px;
    border-radius: 70px 70px 32px 32px;
    background: #27324a;
  }

  .character-ears {
    position: absolute;
    top: 76px;
    left: -26px;
    right: -26px;
    z-index: -1;
    display: flex;
    justify-content: space-between;
  }

  .character-ears span {
    width: 38px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    background: #ffc89e;
  }

  .character-eyes {
    position: absolute;
    top: 82px;
    left: 48px;
    right: 48px;
    display: flex;
    justify-content: space-between;
  }

  .character-eyes span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #1f2a44;
    box-shadow: inset 5px 5px 0 rgba(255, 255, 255, 0.45);
  }

  .character-nose {
    position: absolute;
    top: 110px;
    left: 50%;
    width: 16px;
    height: 30px;
    border-right: 4px solid #d18a67;
    border-bottom: 4px solid #d18a67;
    border-radius: 12px;
    transform: translateX(-50%) rotate(10deg);
  }

  .character-mouth {
    position: absolute;
    top: 148px;
    left: 50%;
    width: 68px;
    height: 30px;
    border-bottom: 7px solid #8f3d4b;
    border-radius: 0 0 80px 80px;
    transform: translateX(-50%);
  }

  .character-cheeks {
    position: absolute;
    top: 134px;
    left: 38px;
    right: 38px;
    display: flex;
    justify-content: space-between;
  }

  .character-cheeks span {
    width: 25px;
    height: 13px;
    border-radius: 50%;
    background: rgba(243, 112, 121, 0.28);
  }

  .character-body {
    position: absolute;
    left: 24px;
    bottom: 0;
    width: 270px;
    height: 190px;
    border: 6px solid rgba(255, 255, 255, 0.16);
    border-radius: 80px 80px 38px 38px;
    background: #253858;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.22);
    overflow: hidden;
  }

  .character-neck {
    position: absolute;
    top: 0;
    left: 50%;
    width: 68px;
    height: 58px;
    border-radius: 0 0 30px 30px;
    background: #ffc89e;
    transform: translateX(-50%);
  }

  .character-tie {
    position: absolute;
    top: 58px;
    left: 50%;
    width: 40px;
    height: 108px;
    background: linear-gradient(180deg, #43d9ad 0%, #2da7d7 100%);
    clip-path: polygon(50% 0, 100% 28%, 72% 100%, 28% 100%, 0 28%);
    transform: translateX(-50%);
  }

  .character-badge {
    position: absolute;
    right: 12px;
    bottom: 92px;
    z-index: 4;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ffffff;
    color: #2563eb;
    font-weight: 900;
    box-shadow: 0 12px 26px rgba(31, 42, 68, 0.25);
  }

  .feature-section,
  .workflow-section,
  .cta-band {
    max-width: 1180px;
    margin: 0 auto;
    padding: 40px 28px;
  }

  .section-heading {
    max-width: 720px;
    margin-bottom: 24px;
    animation: fadeUp 720ms ease both;
  }

  .section-heading h2 {
    margin: 14px 0 0;
    color: #172033;
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1.05;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .feature-card,
  .step-card {
    padding: 24px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .feature-card:hover,
  .step-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .feature-number {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
    border-radius: 14px;
    background: #e7f0ff;
    color: #2563eb;
    font-weight: 900;
  }

  .feature-card h3,
  .step-card h3 {
    margin: 0 0 10px;
    color: #172033;
    font-size: 21px;
  }

  .feature-card p,
  .step-card p {
    margin: 0;
    color: #64748b;
    line-height: 1.7;
  }

  .workflow-section {
    padding-top: 28px;
  }

  .step-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .step-card span {
    display: inline-flex;
    margin-bottom: 26px;
    color: #2563eb;
    font-size: 14px;
    font-weight: 900;
  }

  .cta-band {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 22px;
    margin-top: 38px;
    margin-bottom: 44px;
    border-radius: 26px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 60%, #14b8a6 100%);
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.18);
    animation: fadeUp 720ms ease both;
  }

  .cta-band h2 {
    max-width: 680px;
    margin: 14px 0 0;
    font-size: clamp(28px, 5vw, 46px);
    line-height: 1.05;
  }

  .home-footer {
    max-width: 1180px;
    margin: 0 auto;
    padding: 28px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    color: #64748b;
  }

  .home-footer p {
    margin: 0;
    color: #172033;
    font-weight: 900;
  }

  .home-footer span {
    font-weight: 700;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(28px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  @keyframes floatStage {
    0%,
    100% {
      transform: translateY(0) scale(var(--stage-scale));
    }
    50% {
      transform: translateY(-12px) scale(var(--stage-scale));
    }
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0.68;
    }
    50% {
      opacity: 1;
    }
  }

  @media (max-width: 980px) {
    .hero-section {
      min-height: auto;
      padding-top: 120px;
    }

    .hero-content {
      padding-bottom: 320px;
    }

    .interview-window {
      left: 28px;
      right: auto;
      top: auto;
      bottom: 64px;
      width: min(420px, calc(100vw - 56px));
      min-width: 0;
    }

    .character-stage {
      right: 18px;
      bottom: 38px;
      --stage-scale: 0.82;
      transform-origin: right bottom;
    }

    .feature-grid,
    .step-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .home-nav {
      padding: 12px;
    }

    .cta-band,
    .home-footer {
      align-items: stretch;
      flex-direction: column;
    }

    .nav-inner {
      gap: 10px;
    }

    .brand-button {
      gap: 7px;
      font-size: 16px;
    }

    .brand-button span {
      width: 34px;
      height: 34px;
      border-radius: 11px;
      font-size: 13px;
    }

    .home-nav .button {
      min-height: 40px;
      padding: 9px 11px;
      font-size: 13px;
    }

    .nav-actions {
      gap: 8px;
    }

    .hero-actions .button,
    .cta-band .button {
      width: 100%;
    }

    .hero-section {
      padding: 112px 16px 42px;
    }

    .hero-content {
      padding-bottom: 300px;
    }

    .hero-actions {
      width: 100%;
    }

    .character-stage {
      right: -42px;
      bottom: 38px;
      --stage-scale: 0.7;
    }

    .interview-window {
      left: 16px;
      bottom: 54px;
      width: calc(100vw - 32px);
      padding: 16px;
    }

    .feature-section,
    .workflow-section,
    .cta-band {
      padding: 30px 16px;
    }

    .feature-grid,
    .step-grid {
      grid-template-columns: 1fr;
    }
  }
`;function Ff(e,t){return function(){return e.apply(t,arguments)}}const{toString:i0}=Object.prototype,{getPrototypeOf:gl}=Object,{iterator:Es,toStringTag:Mf}=Symbol,Ns=(e=>t=>{const n=i0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),et=e=>(e=e.toLowerCase(),t=>Ns(t)===e),js=e=>t=>typeof t===e,{isArray:Hn}=Array,Bn=js("undefined");function Vr(e){return e!==null&&!Bn(e)&&e.constructor!==null&&!Bn(e.constructor)&&_e(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const $f=et("ArrayBuffer");function s0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&$f(e.buffer),t}const o0=js("string"),_e=js("function"),Vf=js("number"),Hr=e=>e!==null&&typeof e=="object",a0=e=>e===!0||e===!1,_i=e=>{if(Ns(e)!=="object")return!1;const t=gl(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Mf in e)&&!(Es in e)},l0=e=>{if(!Hr(e)||Vr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},u0=et("Date"),c0=et("File"),d0=et("Blob"),f0=et("FileList"),p0=e=>Hr(e)&&_e(e.pipe),h0=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_e(e.append)&&((t=Ns(e))==="formdata"||t==="object"&&_e(e.toString)&&e.toString()==="[object FormData]"))},m0=et("URLSearchParams"),[g0,x0,y0,v0]=["ReadableStream","Request","Response","Headers"].map(et),w0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Hn(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Vr(e))return;const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(r=0;r<o;r++)l=s[r],t.call(null,e[l],l,e)}}function Hf(e,t){if(Vr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Gt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wf=e=>!Bn(e)&&e!==Gt;function ua(){const{caseless:e,skipUndefined:t}=Wf(this)&&this||{},n={},r=(i,s)=>{const o=e&&Hf(n,s)||s;_i(n[o])&&_i(i)?n[o]=ua(n[o],i):_i(i)?n[o]=ua({},i):Hn(i)?n[o]=i.slice():(!t||!Bn(i))&&(n[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Wr(arguments[i],r);return n}const b0=(e,t,n,{allOwnKeys:r}={})=>(Wr(t,(i,s)=>{n&&_e(i)?e[s]=Ff(i,n):e[s]=i},{allOwnKeys:r}),e),k0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),S0=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},E0=(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&gl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},N0=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},j0=e=>{if(!e)return null;if(Hn(e))return e;let t=e.length;if(!Vf(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&gl(Uint8Array)),C0=(e,t)=>{const r=(e&&e[Es]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},R0=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},P0=et("HTMLFormElement"),T0=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Vu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),O0=et("RegExp"),qf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wr(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},L0=e=>{qf(e,(t,n)=>{if(_e(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_e(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},A0=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Hn(e)?r(e):r(String(e).split(t)),n},z0=()=>{},I0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function U0(e){return!!(e&&_e(e.append)&&e[Mf]==="FormData"&&e[Es])}const D0=e=>{const t=new Array(10),n=(r,i)=>{if(Hr(r)){if(t.indexOf(r)>=0)return;if(Vr(r))return r;if(!("toJSON"in r)){t[i]=r;const s=Hn(r)?[]:{};return Wr(r,(o,l)=>{const u=n(o,i+1);!Bn(u)&&(s[l]=u)}),t[i]=void 0,s}}return r};return n(e,0)},B0=et("AsyncFunction"),F0=e=>e&&(Hr(e)||_e(e))&&_e(e.then)&&_e(e.catch),Yf=((e,t)=>e?setImmediate:t?((n,r)=>(Gt.addEventListener("message",({source:i,data:s})=>{i===Gt&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Gt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_e(Gt.postMessage)),M0=typeof queueMicrotask<"u"?queueMicrotask.bind(Gt):typeof process<"u"&&process.nextTick||Yf,$0=e=>e!=null&&_e(e[Es]),w={isArray:Hn,isArrayBuffer:$f,isBuffer:Vr,isFormData:h0,isArrayBufferView:s0,isString:o0,isNumber:Vf,isBoolean:a0,isObject:Hr,isPlainObject:_i,isEmptyObject:l0,isReadableStream:g0,isRequest:x0,isResponse:y0,isHeaders:v0,isUndefined:Bn,isDate:u0,isFile:c0,isBlob:d0,isRegExp:O0,isFunction:_e,isStream:p0,isURLSearchParams:m0,isTypedArray:_0,isFileList:f0,forEach:Wr,merge:ua,extend:b0,trim:w0,stripBOM:k0,inherits:S0,toFlatObject:E0,kindOf:Ns,kindOfTest:et,endsWith:N0,toArray:j0,forEachEntry:C0,matchAll:R0,isHTMLForm:P0,hasOwnProperty:Vu,hasOwnProp:Vu,reduceDescriptors:qf,freezeMethods:L0,toObjectSet:A0,toCamelCase:T0,noop:z0,toFiniteNumber:I0,findKey:Hf,global:Gt,isContextDefined:Wf,isSpecCompliantForm:U0,toJSONObject:D0,isAsyncFn:B0,isThenable:F0,setImmediate:Yf,asap:M0,isIterable:$0};function O(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}w.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.status}}});const Kf=O.prototype,Qf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qf[e]={value:e}});Object.defineProperties(O,Qf);Object.defineProperty(Kf,"isAxiosError",{value:!0});O.from=(e,t,n,r,i,s)=>{const o=Object.create(Kf);w.toFlatObject(e,o,function(f){return f!==Error.prototype},c=>c!=="isAxiosError");const l=e&&e.message?e.message:"Error",u=t==null&&e?e.code:t;return O.call(o,l,u,n,r,i),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};const V0=null;function ca(e){return w.isPlainObject(e)||w.isArray(e)}function Xf(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function Hu(e,t,n){return e?e.concat(t).map(function(i,s){return i=Xf(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function H0(e){return w.isArray(e)&&!e.some(ca)}const W0=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function _s(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!w.isUndefined(y[v])});const r=n.metaTokens,i=n.visitor||f,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if(w.isDate(x))return x.toISOString();if(w.isBoolean(x))return x.toString();if(!u&&w.isBlob(x))throw new O("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(x)||w.isTypedArray(x)?u&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function f(x,v,y){let h=x;if(x&&!y&&typeof x=="object"){if(w.endsWith(v,"{}"))v=r?v:v.slice(0,-2),x=JSON.stringify(x);else if(w.isArray(x)&&H0(x)||(w.isFileList(x)||w.endsWith(v,"[]"))&&(h=w.toArray(x)))return v=Xf(v),h.forEach(function(m,k){!(w.isUndefined(m)||m===null)&&t.append(o===!0?Hu([v],k,s):o===null?v:v+"[]",c(m))}),!1}return ca(x)?!0:(t.append(Hu(y,v,s),c(x)),!1)}const d=[],g=Object.assign(W0,{defaultVisitor:f,convertValue:c,isVisitable:ca});function b(x,v){if(!w.isUndefined(x)){if(d.indexOf(x)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(x),w.forEach(x,function(h,p){(!(w.isUndefined(h)||h===null)&&i.call(t,h,w.isString(p)?p.trim():p,v,g))===!0&&b(h,v?v.concat(p):[p])}),d.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Wu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function xl(e,t){this._pairs=[],e&&_s(e,this,t)}const Jf=xl.prototype;Jf.append=function(t,n){this._pairs.push([t,n])};Jf.toString=function(t){const n=t?function(r){return t.call(this,r,Wu)}:Wu;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function q0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Gf(e,t,n){if(!t)return e;const r=n&&n.encode||q0;w.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(t,n):s=w.isURLSearchParams(t)?t.toString():new xl(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class qu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Zf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y0=typeof URLSearchParams<"u"?URLSearchParams:xl,K0=typeof FormData<"u"?FormData:null,Q0=typeof Blob<"u"?Blob:null,X0={isBrowser:!0,classes:{URLSearchParams:Y0,FormData:K0,Blob:Q0},protocols:["http","https","file","blob","url","data"]},yl=typeof window<"u"&&typeof document<"u",da=typeof navigator=="object"&&navigator||void 0,J0=yl&&(!da||["ReactNative","NativeScript","NS"].indexOf(da.product)<0),G0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Z0=yl&&window.location.href||"http://localhost",ex=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yl,hasStandardBrowserEnv:J0,hasStandardBrowserWebWorkerEnv:G0,navigator:da,origin:Z0},Symbol.toStringTag,{value:"Module"})),me={...ex,...X0};function tx(e,t){return _s(e,new me.classes.URLSearchParams,{visitor:function(n,r,i,s){return me.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function nx(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rx(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function ep(e){function t(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&w.isArray(i)?i.length:o,u?(w.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!w.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&w.isArray(i[o])&&(i[o]=rx(i[o])),!l)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,i)=>{t(nx(r),i,n,0)}),n}return null}function ix(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const qr={transitional:Zf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=w.isObject(t);if(s&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return i?JSON.stringify(ep(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tx(t,this.formSerializer).toString();if((l=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return _s(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),ix(t)):t}],transformResponse:[function(t){const n=this.transitional||qr.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?O.from(l,O.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{qr.headers[e]={}});const sx=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ox=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&sx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Yu=Symbol("internals");function tr(e){return e&&String(e).trim().toLowerCase()}function Ci(e){return e===!1||e==null?e:w.isArray(e)?e.map(Ci):String(e)}function ax(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const lx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function io(e,t,n,r,i){if(w.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function ux(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cx(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}let Ce=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(l,u,c){const f=tr(u);if(!f)throw new Error("header name must be a non-empty string");const d=w.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||u]=Ci(l))}const o=(l,u)=>w.forEach(l,(c,f)=>s(c,f,u));if(w.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(w.isString(t)&&(t=t.trim())&&!lx(t))o(ox(t),n);else if(w.isObject(t)&&w.isIterable(t)){let l={},u,c;for(const f of t){if(!w.isArray(f))throw TypeError("Object iterator must return a key-value pair");l[c=f[0]]=(u=l[c])?w.isArray(u)?[...u,f[1]]:[u,f[1]]:f[1]}o(l,n)}else t!=null&&s(n,t,r);return this}get(t,n){if(t=tr(t),t){const r=w.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ax(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=tr(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||io(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=tr(o),o){const l=w.findKey(r,o);l&&(!n||io(r,r[l],l,n))&&(delete r[l],i=!0)}}return w.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||io(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return w.forEach(this,(i,s)=>{const o=w.findKey(r,s);if(o){n[o]=Ci(i),delete n[s];return}const l=t?ux(s):String(s).trim();l!==s&&delete n[s],n[l]=Ci(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Yu]=this[Yu]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=tr(o);r[l]||(cx(i,o),r[l]=!0)}return w.isArray(t)?t.forEach(s):s(t),this}};Ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Ce.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});w.freezeMethods(Ce);function so(e,t){const n=this||qr,r=t||n,i=Ce.from(r.headers);let s=r.data;return w.forEach(e,function(l){s=l.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function tp(e){return!!(e&&e.__CANCEL__)}function Wn(e,t,n){O.call(this,e??"canceled",O.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits(Wn,O,{__CANCEL__:!0});function np(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new O("Request failed with status code "+n.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),f=r[s];o||(o=c),n[i]=u,r[i]=c;let d=s,g=0;for(;d!==i;)g+=n[d++],d=d%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const b=f&&c-f;return b?Math.round(g*1e3/b):void 0}}function px(e,t){let n=0,r=1e3/t,i,s;const o=(c,f=Date.now())=>{n=f,i=null,s&&(clearTimeout(s),s=null),e(...c)};return[(...c)=>{const f=Date.now(),d=f-n;d>=r?o(c,f):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-d)))},()=>i&&o(i)]}const ss=(e,t,n=3)=>{let r=0;const i=fx(50,250);return px(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),f=o<=l;r=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&f?(l-o)/c:void 0,event:s,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},Ku=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Qu=e=>(...t)=>w.asap(()=>e(...t)),hx=me.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,me.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(me.origin),me.navigator&&/(msie|trident)/i.test(me.navigator.userAgent)):()=>!0,mx=me.hasStandardBrowserEnv?{write(e,t,n,r,i,s,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];w.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),w.isString(r)&&l.push(`path=${r}`),w.isString(i)&&l.push(`domain=${i}`),s===!0&&l.push("secure"),w.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function gx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function rp(e,t,n){let r=!gx(t);return e&&(r||n==!1)?xx(e,t):t}const Xu=e=>e instanceof Ce?{...e}:e;function ln(e,t){t=t||{};const n={};function r(c,f,d,g){return w.isPlainObject(c)&&w.isPlainObject(f)?w.merge.call({caseless:g},c,f):w.isPlainObject(f)?w.merge({},f):w.isArray(f)?f.slice():f}function i(c,f,d,g){if(w.isUndefined(f)){if(!w.isUndefined(c))return r(void 0,c,d,g)}else return r(c,f,d,g)}function s(c,f){if(!w.isUndefined(f))return r(void 0,f)}function o(c,f){if(w.isUndefined(f)){if(!w.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function l(c,f,d){if(d in t)return r(c,f);if(d in e)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,f,d)=>i(Xu(c),Xu(f),d,!0)};return w.forEach(Object.keys({...e,...t}),function(f){const d=u[f]||i,g=d(e[f],t[f],f);w.isUndefined(g)&&d!==l||(n[f]=g)}),n}const ip=e=>{const t=ln({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=t;if(t.headers=o=Ce.from(o),t.url=Gf(rp(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),w.isFormData(n)){if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(w.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([f,d])=>{c.includes(f.toLowerCase())&&o.set(f,d)})}}if(me.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&hx(t.url))){const u=i&&s&&mx.read(s);u&&o.set(i,u)}return t},yx=typeof XMLHttpRequest<"u",vx=yx&&function(e){return new Promise(function(n,r){const i=ip(e);let s=i.data;const o=Ce.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=i,f,d,g,b,x;function v(){b&&b(),x&&x(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function h(){if(!y)return;const m=Ce.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),E={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:m,config:e,request:y};np(function(_){n(_),v()},function(_){r(_),v()},E),y=null}"onloadend"in y?y.onloadend=h:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(h)},y.onabort=function(){y&&(r(new O("Request aborted",O.ECONNABORTED,e,y)),y=null)},y.onerror=function(k){const E=k&&k.message?k.message:"Network Error",C=new O(E,O.ERR_NETWORK,e,y);C.event=k||null,r(C),y=null},y.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||Zf;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),r(new O(k,E.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,y)),y=null},s===void 0&&o.setContentType(null),"setRequestHeader"in y&&w.forEach(o.toJSON(),function(k,E){y.setRequestHeader(E,k)}),w.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),l&&l!=="json"&&(y.responseType=i.responseType),c&&([g,x]=ss(c,!0),y.addEventListener("progress",g)),u&&y.upload&&([d,b]=ss(u),y.upload.addEventListener("progress",d),y.upload.addEventListener("loadend",b)),(i.cancelToken||i.signal)&&(f=m=>{y&&(r(!m||m.type?new Wn(null,e,y):m),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const p=dx(i.url);if(p&&me.protocols.indexOf(p)===-1){r(new O("Unsupported protocol "+p+":",O.ERR_BAD_REQUEST,e));return}y.send(s||null)})},wx=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,l();const f=c instanceof Error?c:this.reason;r.abort(f instanceof O?f:new Wn(f instanceof Error?f.message:f))}};let o=t&&setTimeout(()=>{o=null,s(new O(`timeout ${t} of ms exceeded`,O.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>w.asap(l),u}},bx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},kx=async function*(e,t){for await(const n of Sx(e))yield*bx(n,t)},Sx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ju=(e,t,n,r)=>{const i=kx(e,t);let s=0,o,l=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:f}=await i.next();if(c){l(),u.close();return}let d=f.byteLength;if(n){let g=s+=d;n(g)}u.enqueue(new Uint8Array(f))}catch(c){throw l(c),c}},cancel(u){return l(u),i.return()}},{highWaterMark:2})},Gu=64*1024,{isFunction:di}=w,Ex=(({Request:e,Response:t})=>({Request:e,Response:t}))(w.global),{ReadableStream:Zu,TextEncoder:ec}=w.global,tc=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Nx=e=>{e=w.merge.call({skipUndefined:!0},Ex,e);const{fetch:t,Request:n,Response:r}=e,i=t?di(t):typeof fetch=="function",s=di(n),o=di(r);if(!i)return!1;const l=i&&di(Zu),u=i&&(typeof ec=="function"?(x=>v=>x.encode(v))(new ec):async x=>new Uint8Array(await new n(x).arrayBuffer())),c=s&&l&&tc(()=>{let x=!1;const v=new n(me.origin,{body:new Zu,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!v}),f=o&&l&&tc(()=>w.isReadableStream(new r("").body)),d={stream:f&&(x=>x.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!d[x]&&(d[x]=(v,y)=>{let h=v&&v[x];if(h)return h.call(v);throw new O(`Response type '${x}' is not supported`,O.ERR_NOT_SUPPORT,y)})});const g=async x=>{if(x==null)return 0;if(w.isBlob(x))return x.size;if(w.isSpecCompliantForm(x))return(await new n(me.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(w.isArrayBufferView(x)||w.isArrayBuffer(x))return x.byteLength;if(w.isURLSearchParams(x)&&(x=x+""),w.isString(x))return(await u(x)).byteLength},b=async(x,v)=>{const y=w.toFiniteNumber(x.getContentLength());return y??g(v)};return async x=>{let{url:v,method:y,data:h,signal:p,cancelToken:m,timeout:k,onDownloadProgress:E,onUploadProgress:C,responseType:_,headers:P,withCredentials:M="same-origin",fetchOptions:L}=ip(x),le=t||fetch;_=_?(_+"").toLowerCase():"text";let Re=wx([p,m&&m.toAbortSignal()],k),be=null;const Pe=Re&&Re.unsubscribe&&(()=>{Re.unsubscribe()});let W;try{if(C&&c&&y!=="get"&&y!=="head"&&(W=await b(P,h))!==0){let B=new n(v,{method:"POST",body:h,duplex:"half"}),q;if(w.isFormData(h)&&(q=B.headers.get("content-type"))&&P.setContentType(q),B.body){const[bt,Ue]=Ku(W,ss(Qu(C)));h=Ju(B.body,Gu,bt,Ue)}}w.isString(M)||(M=M?"include":"omit");const $=s&&"credentials"in n.prototype,V={...L,signal:Re,method:y.toUpperCase(),headers:P.normalize().toJSON(),body:h,duplex:"half",credentials:$?M:void 0};be=s&&new n(v,V);let j=await(s?le(be,L):le(v,V));const T=f&&(_==="stream"||_==="response");if(f&&(E||T&&Pe)){const B={};["status","statusText","headers"].forEach(fn=>{B[fn]=j[fn]});const q=w.toFiniteNumber(j.headers.get("content-length")),[bt,Ue]=E&&Ku(q,ss(Qu(E),!0))||[];j=new r(Ju(j.body,Gu,bt,()=>{Ue&&Ue(),Pe&&Pe()}),B)}_=_||"text";let A=await d[w.findKey(d,_)||"text"](j,x);return!T&&Pe&&Pe(),await new Promise((B,q)=>{np(B,q,{data:A,headers:Ce.from(j.headers),status:j.status,statusText:j.statusText,config:x,request:be})})}catch($){throw Pe&&Pe(),$&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,x,be),{cause:$.cause||$}):O.from($,$&&$.code,x,be)}}},jx=new Map,sp=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:i}=t,s=[r,i,n];let o=s.length,l=o,u,c,f=jx;for(;l--;)u=s[l],c=f.get(u),c===void 0&&f.set(u,c=l?new Map:Nx(t)),f=c;return c};sp();const vl={http:V0,xhr:vx,fetch:{get:sp}};w.forEach(vl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nc=e=>`- ${e}`,_x=e=>w.isFunction(e)||e===null||e===!1;function Cx(e,t){e=w.isArray(e)?e:[e];const{length:n}=e;let r,i;const s={};for(let o=0;o<n;o++){r=e[o];let l;if(i=r,!_x(r)&&(i=vl[(l=String(r)).toLowerCase()],i===void 0))throw new O(`Unknown adapter '${l}'`);if(i&&(w.isFunction(i)||(i=i.get(t))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(nc).join(`
`):" "+nc(o[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i}const op={getAdapter:Cx,adapters:vl};function oo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Wn(null,e)}function rc(e){return oo(e),e.headers=Ce.from(e.headers),e.data=so.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),op.getAdapter(e.adapter||qr.adapter,e)(e).then(function(r){return oo(e),r.data=so.call(e,e.transformResponse,r),r.headers=Ce.from(r.headers),r},function(r){return tp(r)||(oo(e),r&&r.response&&(r.response.data=so.call(e,e.transformResponse,r.response),r.response.headers=Ce.from(r.response.headers))),Promise.reject(r)})}const ap="1.13.2",Cs={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cs[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ic={};Cs.transitional=function(t,n,r){function i(s,o){return"[Axios v"+ap+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(t===!1)throw new O(i(o," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!ic[o]&&(ic[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,l):!0}};Cs.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Rx(e,t,n){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const l=e[s],u=l===void 0||o(l,s,e);if(u!==!0)throw new O("option "+s+" must be "+u,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}const Ri={assertOptions:Rx,validators:Cs},nt=Ri.validators;let tn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new qu,response:new qu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ln(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ri.assertOptions(r,{silentJSONParsing:nt.transitional(nt.boolean),forcedJSONParsing:nt.transitional(nt.boolean),clarifyTimeoutError:nt.transitional(nt.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:Ri.assertOptions(i,{encode:nt.function,serialize:nt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ri.assertOptions(n,{baseUrl:nt.spelling("baseURL"),withXsrfToken:nt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&w.merge(s.common,s[n.method]);s&&w.forEach(["delete","get","head","post","put","patch","common"],x=>{delete s[x]}),n.headers=Ce.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(u=u&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let f,d=0,g;if(!u){const x=[rc.bind(this),void 0];for(x.unshift(...l),x.push(...c),g=x.length,f=Promise.resolve(n);d<g;)f=f.then(x[d++],x[d++]);return f}g=l.length;let b=n;for(;d<g;){const x=l[d++],v=l[d++];try{b=x(b)}catch(y){v.call(this,y);break}}try{f=rc.call(this,b)}catch(x){return Promise.reject(x)}for(d=0,g=c.length;d<g;)f=f.then(c[d++],c[d++]);return f}getUri(t){t=ln(this.defaults,t);const n=rp(t.baseURL,t.url,t.allowAbsoluteUrls);return Gf(n,t.params,t.paramsSerializer)}};w.forEach(["delete","get","head","options"],function(t){tn.prototype[t]=function(n,r){return this.request(ln(r||{},{method:t,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,l){return this.request(ln(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}tn.prototype[t]=n(),tn.prototype[t+"Form"]=n(!0)});let Px=class lp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,l){r.reason||(r.reason=new Wn(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new lp(function(i){t=i}),cancel:t}}};function Tx(e){return function(n){return e.apply(null,n)}}function Ox(e){return w.isObject(e)&&e.isAxiosError===!0}const fa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(fa).forEach(([e,t])=>{fa[t]=e});function up(e){const t=new tn(e),n=Ff(tn.prototype.request,t);return w.extend(n,tn.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return up(ln(e,i))},n}const D=up(qr);D.Axios=tn;D.CanceledError=Wn;D.CancelToken=Px;D.isCancel=tp;D.VERSION=ap;D.toFormData=_s;D.AxiosError=O;D.Cancel=D.CanceledError;D.all=function(t){return Promise.all(t)};D.spread=Tx;D.isAxiosError=Ox;D.mergeConfig=ln;D.AxiosHeaders=Ce;D.formToJSON=e=>ep(w.isHTMLForm(e)?new FormData(e):e);D.getAdapter=op.getAdapter;D.HttpStatusCode=fa;D.default=D;const{Axios:$y,AxiosError:Vy,CanceledError:Hy,isCancel:Wy,CancelToken:qy,VERSION:Yy,all:Ky,Cancel:Qy,isAxiosError:Xy,spread:Jy,toFormData:Gy,AxiosHeaders:Zy,HttpStatusCode:e1,formToJSON:t1,getAdapter:n1,mergeConfig:r1}=D,Xe="http://localhost:5000",Lx="http://localhost:5000";function Ax(){const e=wt(),[t,n]=S.useState({email:"",password:""}),[r,i]=S.useState(!1),[s,o]=S.useState(""),l=c=>{n({...t,[c.target.name]:c.target.value}),o("")},u=async c=>{var f,d;c.preventDefault(),i(!0);try{const g=await D.post(`${Xe}/api/login`,t);localStorage.setItem("user",JSON.stringify(g.data.user)),e("/dashboard")}catch(g){o(((d=(f=g.response)==null?void 0:f.data)==null?void 0:d.message)||"Error logging in"),i(!1)}};return a.jsxs("main",{className:"auth-page",children:[a.jsx("style",{children:zx}),a.jsxs("section",{className:"auth-shell",children:[a.jsxs("div",{className:"auth-visual",children:[a.jsx("button",{className:"ghost-link",type:"button",onClick:()=>e("/home"),children:"Back to Home"}),a.jsx("div",{className:"brand-mark",children:"AI"}),a.jsx("span",{className:"eyebrow",children:"Interview Practice"}),a.jsx("h1",{children:"Welcome back."}),a.jsx("p",{children:"Continue your practice sessions, review reports, and keep sharpening your interview answers."}),a.jsxs("div",{className:"signal-card",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Readiness"}),a.jsx("strong",{children:"Practice Mode"})]}),a.jsx("div",{className:"pulse-dot"})]})]}),a.jsxs("div",{className:"auth-card",children:[a.jsxs("div",{className:"form-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Sign In"}),a.jsx("h2",{children:"Access your workspace"}),a.jsx("p",{children:"Use the email and password from your account."})]}),s&&a.jsx("div",{className:"message error",children:s}),a.jsxs("form",{onSubmit:u,children:[a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Email Address"}),a.jsx("input",{type:"email",name:"email",placeholder:"your@email.com",value:t.email,onChange:l,required:!0})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Password"}),a.jsx("input",{type:"password",name:"password",placeholder:"Enter your password",value:t.password,onChange:l,required:!0})]}),a.jsx("button",{className:"primary-button",type:"submit",disabled:r,children:r?"Signing In...":"Sign In"})]}),a.jsxs("p",{className:"switch-copy",children:["New here? ",a.jsx(Bf,{to:"/signup",children:"Create an account"})]})]})]})]})}const zx=`
  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 15% 10%, rgba(20, 184, 166, 0.2), transparent 28%),
      radial-gradient(circle at 85% 18%, rgba(37, 99, 235, 0.18), transparent 30%),
      linear-gradient(180deg, #eef5ff 0%, #f7fafc 55%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .auth-shell {
    width: min(980px, 100%);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 430px;
    border-radius: 26px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 26px 70px rgba(15, 23, 42, 0.16);
    animation: fadeUp 680ms ease both;
  }

  .auth-visual {
    position: relative;
    min-height: 560px;
    padding: 36px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.92) 58%, rgba(20, 184, 166, 0.92));
    overflow: hidden;
  }

  .auth-visual::after {
    content: "";
    position: absolute;
    width: 330px;
    height: 330px;
    right: -140px;
    bottom: -130px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .ghost-link {
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.34);
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    border-radius: 999px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: 800;
    transition: transform 180ms ease, background 180ms ease;
  }

  .ghost-link:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.18);
  }

  .brand-mark {
    position: relative;
    z-index: 1;
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 76px;
    border-radius: 28px;
    background: #ffffff;
    color: #2563eb;
    font-size: 32px;
    font-weight: 900;
    box-shadow: 0 22px 42px rgba(0, 0, 0, 0.24);
    animation: float 3s ease-in-out infinite;
  }

  .eyebrow {
    position: relative;
    z-index: 1;
    display: inline-flex;
    width: fit-content;
    margin-top: 34px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    margin-top: 0;
    background: #e7f0ff;
    color: #2563eb;
  }

  .auth-visual h1 {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin: 18px 0 0;
    font-size: clamp(38px, 6vw, 64px);
    line-height: 1;
    letter-spacing: 0;
  }

  .auth-visual p {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .signal-card {
    position: absolute;
    z-index: 1;
    left: 36px;
    right: 36px;
    bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .signal-card span {
    display: block;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .signal-card strong {
    font-size: 18px;
  }

  .pulse-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #14b8a6;
    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.54);
    animation: pulse 1.8s ease-in-out infinite;
  }

  .auth-card {
    padding: 46px;
    background: rgba(255, 255, 255, 0.96);
  }

  .form-heading {
    margin-bottom: 26px;
    animation: fadeUp 720ms 120ms ease both;
  }

  .form-heading h2 {
    margin: 16px 0 8px;
    color: #172033;
    font-size: 34px;
    line-height: 1.1;
  }

  .form-heading p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 800;
    animation: fadeUp 720ms 180ms ease both;
  }

  .field input {
    width: 100%;
    min-height: 50px;
    border: 1px solid #dbe3ef;
    border-radius: 14px;
    padding: 0 15px;
    color: #172033;
    background: #f8fafc;
    font-size: 15px;
    outline: none;
    transition: border 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .field input:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .primary-button {
    width: 100%;
    min-height: 52px;
    margin-top: 8px;
    border: 0;
    border-radius: 14px;
    background: #2563eb;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
    animation: fadeUp 720ms 260ms ease both;
  }

  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(37, 99, 235, 0.34);
  }

  .primary-button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
    animation: shakeIn 360ms ease both;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
  }

  .message.success {
    background: #dcfce7;
    color: #166534;
  }

  .switch-copy {
    margin: 22px 0 0;
    color: #64748b;
    text-align: center;
  }

  .switch-copy a {
    color: #2563eb;
    font-weight: 900;
    text-decoration: none;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.84;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.54);
    }
    70% {
      box-shadow: 0 0 0 16px rgba(20, 184, 166, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
    }
  }

  @keyframes shakeIn {
    0% {
      opacity: 0;
      transform: translateX(-8px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 860px) {
    .auth-shell {
      grid-template-columns: 1fr;
    }

    .auth-visual {
      min-height: 360px;
    }

    .brand-mark {
      margin-top: 44px;
    }
  }

  @media (max-width: 540px) {
    .auth-page {
      padding: 12px;
    }

    .auth-card,
    .auth-visual {
      padding: 24px;
    }

    .signal-card {
      left: 24px;
      right: 24px;
      bottom: 24px;
    }
  }
`;function Ix(){const e=wt(),[t,n]=S.useState({firstName:"",lastName:"",email:"",password:""}),[r,i]=S.useState(!1),[s,o]=S.useState(""),[l,u]=S.useState(""),c=d=>{n({...t,[d.target.name]:d.target.value}),o(""),u("")},f=async d=>{var g,b;d.preventDefault(),i(!0);try{await D.post(`${Xe}/api/signup`,t),u("Account created. Redirecting to login..."),setTimeout(()=>e("/"),1400)}catch(x){o(((b=(g=x.response)==null?void 0:g.data)==null?void 0:b.message)||"Error signing up"),i(!1)}};return a.jsxs("main",{className:"auth-page",children:[a.jsx("style",{children:Ux}),a.jsxs("section",{className:"auth-shell signup-shell",children:[a.jsxs("div",{className:"auth-visual",children:[a.jsx("button",{className:"ghost-link",type:"button",onClick:()=>e("/home"),children:"Back to Home"}),a.jsx("div",{className:"brand-mark",children:"AI"}),a.jsx("span",{className:"eyebrow",children:"New Account"}),a.jsx("h1",{children:"Build your practice profile."}),a.jsx("p",{children:"Create an account and start saving interview sessions, transcripts, and performance reports."}),a.jsxs("div",{className:"signal-card",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Workspace"}),a.jsx("strong",{children:"Ready to Create"})]}),a.jsx("div",{className:"pulse-dot"})]})]}),a.jsxs("div",{className:"auth-card",children:[a.jsxs("div",{className:"form-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Register"}),a.jsx("h2",{children:"Create account"}),a.jsx("p",{children:"Enter your details to set up your interview workspace."})]}),s&&a.jsx("div",{className:"message error",children:s}),l&&a.jsx("div",{className:"message success",children:l}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"name-grid",children:[a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"First Name"}),a.jsx("input",{type:"text",name:"firstName",placeholder:"John",value:t.firstName,onChange:c,required:!0})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Last Name"}),a.jsx("input",{type:"text",name:"lastName",placeholder:"Doe",value:t.lastName,onChange:c,required:!0})]})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Email Address"}),a.jsx("input",{type:"email",name:"email",placeholder:"your@email.com",value:t.email,onChange:c,required:!0})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Password"}),a.jsx("input",{type:"password",name:"password",placeholder:"Create a password",value:t.password,onChange:c,required:!0})]}),a.jsx("button",{className:"primary-button",type:"submit",disabled:r,children:r?"Creating Account...":"Create Account"})]}),a.jsxs("p",{className:"switch-copy",children:["Already registered? ",a.jsx(Bf,{to:"/",children:"Sign in"})]})]})]})]})}const Ux=`
  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 15% 10%, rgba(20, 184, 166, 0.2), transparent 28%),
      radial-gradient(circle at 85% 18%, rgba(37, 99, 235, 0.18), transparent 30%),
      linear-gradient(180deg, #eef5ff 0%, #f7fafc 55%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .auth-shell {
    width: min(1040px, 100%);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 500px;
    border-radius: 26px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 26px 70px rgba(15, 23, 42, 0.16);
    animation: fadeUp 680ms ease both;
  }

  .auth-visual {
    position: relative;
    min-height: 610px;
    padding: 36px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.92) 58%, rgba(20, 184, 166, 0.92));
    overflow: hidden;
  }

  .auth-visual::after {
    content: "";
    position: absolute;
    width: 330px;
    height: 330px;
    right: -140px;
    bottom: -130px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .ghost-link {
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.34);
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    border-radius: 999px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: 800;
    transition: transform 180ms ease, background 180ms ease;
  }

  .ghost-link:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.18);
  }

  .brand-mark {
    position: relative;
    z-index: 1;
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 76px;
    border-radius: 28px;
    background: #ffffff;
    color: #2563eb;
    font-size: 32px;
    font-weight: 900;
    box-shadow: 0 22px 42px rgba(0, 0, 0, 0.24);
    animation: float 3s ease-in-out infinite;
  }

  .eyebrow {
    position: relative;
    z-index: 1;
    display: inline-flex;
    width: fit-content;
    margin-top: 34px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    margin-top: 0;
    background: #e7f0ff;
    color: #2563eb;
  }

  .auth-visual h1 {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin: 18px 0 0;
    font-size: clamp(38px, 6vw, 64px);
    line-height: 1;
    letter-spacing: 0;
  }

  .auth-visual p {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .signal-card {
    position: absolute;
    z-index: 1;
    left: 36px;
    right: 36px;
    bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .signal-card span {
    display: block;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .signal-card strong {
    font-size: 18px;
  }

  .pulse-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #14b8a6;
    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.54);
    animation: pulse 1.8s ease-in-out infinite;
  }

  .auth-card {
    padding: 42px;
    background: rgba(255, 255, 255, 0.96);
  }

  .form-heading {
    margin-bottom: 24px;
    animation: fadeUp 720ms 120ms ease both;
  }

  .form-heading h2 {
    margin: 16px 0 8px;
    color: #172033;
    font-size: 34px;
    line-height: 1.1;
  }

  .form-heading p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
  }

  .name-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 800;
    animation: fadeUp 720ms 180ms ease both;
  }

  .field input {
    width: 100%;
    min-height: 50px;
    border: 1px solid #dbe3ef;
    border-radius: 14px;
    padding: 0 15px;
    color: #172033;
    background: #f8fafc;
    font-size: 15px;
    outline: none;
    transition: border 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .field input:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .primary-button {
    width: 100%;
    min-height: 52px;
    margin-top: 8px;
    border: 0;
    border-radius: 14px;
    background: #2563eb;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
    animation: fadeUp 720ms 260ms ease both;
  }

  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(37, 99, 235, 0.34);
  }

  .primary-button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
    animation: shakeIn 360ms ease both;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
  }

  .message.success {
    background: #dcfce7;
    color: #166534;
  }

  .switch-copy {
    margin: 22px 0 0;
    color: #64748b;
    text-align: center;
  }

  .switch-copy a {
    color: #2563eb;
    font-weight: 900;
    text-decoration: none;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.84;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.54);
    }
    70% {
      box-shadow: 0 0 0 16px rgba(20, 184, 166, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
    }
  }

  @keyframes shakeIn {
    0% {
      opacity: 0;
      transform: translateX(-8px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    .auth-shell {
      grid-template-columns: 1fr;
    }

    .auth-visual {
      min-height: 360px;
    }

    .brand-mark {
      margin-top: 44px;
    }
  }

  @media (max-width: 560px) {
    .auth-page {
      padding: 12px;
    }

    .auth-card,
    .auth-visual {
      padding: 24px;
    }

    .name-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .signal-card {
      left: 24px;
      right: 24px;
      bottom: 24px;
    }
  }
`;function Dx(){var m,k;const e=wt(),[t,n]=S.useState(null),[r,i]=S.useState([]),[s,o]=S.useState(""),[l,u]=S.useState(!1),[c,f]=S.useState(!1),[d,g]=S.useState({position:"",experience:"",difficulty:""});S.useEffect(()=>{const E=JSON.parse(localStorage.getItem("user"));if(!E){e("/");return}n(E),(async()=>{try{const _=await D.get(`${Xe}/api/interviews/user/${E.id}`);i(_.data.interviews||[])}catch(_){console.error("Error fetching dashboard interviews:",_)}})()},[e]);const b=S.useMemo(()=>{const E=r.filter(_=>!_.isStart).length,C=r.filter(_=>_.isStart).length;return[{label:"Total Sessions",value:r.length},{label:"Completed",value:E},{label:"In Progress",value:C}]},[r]),x=r[0],v=E=>{const{name:C,value:_}=E.target;g({...d,[C]:_}),o("")},y=async E=>{if(E.preventDefault(),!d.position||!d.experience||!d.difficulty){o("Please complete all fields before starting the interview.");return}try{u(!0);const C=await D.post(`${Xe}/api/interview/start`,{userId:t.id,...d});e(`/interview/${C.data.interviewId}`)}catch(C){console.error("Error starting interview:",C),u(!1),o("Error starting interview. Please try again.")}},h=()=>{f(!0)},p=()=>{localStorage.removeItem("user"),e("/")};return t?a.jsxs("main",{className:"dashboard-page",children:[a.jsx("style",{children:sc}),a.jsxs("nav",{className:"dash-nav",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow dark",children:"AI Interviewer"}),a.jsx("h1",{children:"Practice Dashboard"})]}),a.jsxs("div",{className:"nav-actions",children:[a.jsx("button",{className:"button secondary",onClick:()=>e("/profile"),children:"Profile"}),a.jsx("button",{className:"button secondary",onClick:()=>e("/history"),children:"View History"}),a.jsx("button",{className:"button muted",onClick:h,children:"Logout"})]})]}),a.jsxs("section",{className:"dashboard-hero",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("span",{className:"eyebrow",children:"Welcome Back"}),a.jsxs("h2",{children:[t.firstName,", set up your next interview."]}),a.jsx("p",{children:"Choose the role, experience level, and difficulty. The session will be saved so your report can be generated after completion."})]}),a.jsxs("div",{className:"profile-panel",children:[a.jsx("div",{className:"avatar",children:((k=(m=t.firstName)==null?void 0:m.charAt(0))==null?void 0:k.toUpperCase())||"U"}),a.jsxs("div",{children:[a.jsx("span",{children:"Candidate"}),a.jsxs("strong",{children:[t.firstName," ",t.lastName]}),a.jsx("p",{children:t.email}),a.jsx("button",{className:"profile-link",onClick:()=>e("/profile"),children:"Manage Profile"})]})]})]}),a.jsx("section",{className:"stats-grid","aria-label":"Practice statistics",children:b.map((E,C)=>a.jsxs("div",{className:"stat-card",style:{animationDelay:`${C*90}ms`},children:[a.jsx("span",{children:E.label}),a.jsx("strong",{children:E.value})]},E.label))}),a.jsxs("section",{className:"dashboard-grid",children:[a.jsxs("article",{className:"panel setup-panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Interview Setup"}),a.jsx("h2",{children:"Session Details"})]}),s&&a.jsx("div",{className:"message error",children:s}),a.jsxs("form",{onSubmit:y,children:[a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Position"}),a.jsx("input",{type:"text",name:"position",placeholder:"Software Intern, Data Analyst, Product Manager",value:d.position,onChange:v,required:!0})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Experience Level"}),a.jsxs("select",{name:"experience",value:d.experience,onChange:v,required:!0,children:[a.jsx("option",{value:"",children:"Select experience"}),a.jsx("option",{value:"Fresher",children:"Fresher"}),a.jsx("option",{value:"1-2 years",children:"1-2 years"}),a.jsx("option",{value:"3-5 years",children:"3-5 years"}),a.jsx("option",{value:"5+ years",children:"5+ years"})]})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Difficulty Level"}),a.jsxs("select",{name:"difficulty",value:d.difficulty,onChange:v,required:!0,children:[a.jsx("option",{value:"",children:"Select difficulty"}),a.jsx("option",{value:"Easy",children:"Easy"}),a.jsx("option",{value:"Medium",children:"Medium"}),a.jsx("option",{value:"Hard",children:"Hard"})]})]})]}),a.jsx("button",{className:"button primary wide",type:"submit",disabled:l,children:l?"Starting Interview...":"Start Interview"})]})]}),a.jsxs("aside",{className:"panel snapshot-panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Session Snapshot"}),a.jsx("h2",{children:"Current Focus"})]}),a.jsxs("div",{className:"focus-stack",children:[a.jsxs("div",{className:"focus-card",children:[a.jsx("span",{children:"Role"}),a.jsx("strong",{children:d.position||"Not selected"})]}),a.jsxs("div",{className:"focus-card",children:[a.jsx("span",{children:"Experience"}),a.jsx("strong",{children:d.experience||"Not selected"})]}),a.jsxs("div",{className:"focus-card",children:[a.jsx("span",{children:"Difficulty"}),a.jsx("strong",{children:d.difficulty||"Not selected"})]})]}),a.jsxs("div",{className:"latest-card",children:[a.jsx("span",{children:"Latest Session"}),x?a.jsxs(a.Fragment,{children:[a.jsx("strong",{children:x.position}),a.jsx("p",{children:x.isStart?"In progress":"Completed"})]}):a.jsxs(a.Fragment,{children:[a.jsx("strong",{children:"No sessions yet"}),a.jsx("p",{children:"Your first session will appear here."})]})]})]})]}),c&&a.jsx("div",{className:"logout-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"logout-title",children:a.jsxs("div",{className:"logout-dialog",children:[a.jsx("span",{className:"eyebrow dark",children:"Confirm Logout"}),a.jsx("h2",{id:"logout-title",children:"Are you sure you want to logout?"}),a.jsx("p",{children:"Your current session will end and you will need to sign in again."}),a.jsxs("div",{className:"logout-actions",children:[a.jsx("button",{className:"button secondary",onClick:()=>f(!1),children:"Cancel"}),a.jsx("button",{className:"button danger-button",onClick:p,children:"Yes, Logout"})]})]})})]}):a.jsxs("main",{className:"dashboard-page dashboard-loading",children:[a.jsx("style",{children:sc}),a.jsxs("div",{className:"loading-card",children:[a.jsx("div",{className:"loading-orbit"}),a.jsx("h1",{children:"Loading dashboard"})]})]})}const sc=`
  .dashboard-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 12% 12%, rgba(20, 184, 166, 0.18), transparent 30%),
      radial-gradient(circle at 88% 8%, rgba(37, 99, 235, 0.17), transparent 28%),
      linear-gradient(180deg, #eef5ff 0%, #f8fafc 56%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .dashboard-loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-card {
    padding: 34px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    text-align: center;
    animation: fadeUp 680ms ease both;
  }

  .loading-card h1 {
    margin: 18px 0 0;
    font-size: 28px;
  }

  .loading-orbit {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50%;
    border: 7px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 900ms linear infinite;
  }

  .dash-nav,
  .dashboard-hero,
  .stats-grid,
  .dashboard-grid {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .dash-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 22px;
    padding: 18px 20px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .dash-nav h1 {
    margin: 8px 0 0;
    font-size: clamp(24px, 4vw, 34px);
  }

  .nav-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .dashboard-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 22px;
    margin-bottom: 22px;
    padding: 34px;
    border-radius: 26px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.9) 58%, rgba(20, 184, 166, 0.92));
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.2);
    position: relative;
    overflow: hidden;
    animation: fadeUp 720ms 80ms ease both;
  }

  .dashboard-hero::after {
    content: "";
    position: absolute;
    width: 340px;
    height: 340px;
    right: -160px;
    top: -160px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .hero-copy,
  .profile-panel {
    position: relative;
    z-index: 1;
  }

  .hero-copy h2 {
    max-width: 760px;
    margin: 16px 0 0;
    font-size: clamp(34px, 6vw, 58px);
    line-height: 1;
    letter-spacing: 0;
  }

  .hero-copy p {
    max-width: 660px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .profile-panel {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 16px;
    align-self: center;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .avatar {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #ffffff;
    color: #2563eb;
    font-size: 30px;
    font-weight: 900;
    animation: float 3s ease-in-out infinite;
  }

  .profile-panel span,
  .stat-card span,
  .focus-card span,
  .latest-card span {
    display: block;
    margin-bottom: 7px;
    color: #64748b;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .profile-panel span {
    color: rgba(255, 255, 255, 0.72);
  }

  .profile-panel strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 18px;
  }

  .profile-panel p {
    margin: 6px 0 0;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.72);
  }

  .profile-link {
    margin-top: 12px;
    border: 0;
    border-radius: 999px;
    padding: 9px 12px;
    background: rgba(255, 255, 255, 0.18);
    color: #ffffff;
    cursor: pointer;
    font-weight: 900;
    transition: transform 180ms ease, background 180ms ease;
  }

  .profile-link:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.24);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 22px;
  }

  .stat-card {
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .stat-card:hover,
  .panel:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .stat-card strong {
    display: block;
    font-size: 36px;
    line-height: 1;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.8fr);
    gap: 20px;
  }

  .panel {
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms 120ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .panel-heading {
    margin-bottom: 22px;
  }

  .panel-heading h2 {
    margin: 14px 0 0;
    font-size: 28px;
    line-height: 1.1;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 900;
  }

  .field input,
  .field select {
    width: 100%;
    min-height: 52px;
    border: 1px solid #dbe3ef;
    border-radius: 14px;
    padding: 0 15px;
    color: #172033;
    background: #f8fafc;
    font-size: 15px;
    outline: none;
    transition: border 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .field select {
    cursor: pointer;
  }

  .field input:focus,
  .field select:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .focus-stack {
    display: grid;
    gap: 12px;
  }

  .focus-card,
  .latest-card {
    padding: 16px;
    border-radius: 16px;
    background: #f8fafc;
    animation: slideIn 520ms ease both;
  }

  .focus-card strong,
  .latest-card strong {
    display: block;
    overflow-wrap: anywhere;
    color: #172033;
    font-size: 17px;
  }

  .latest-card {
    margin-top: 18px;
    border: 1px solid #dbeafe;
    background: #eff6ff;
  }

  .latest-card p {
    margin: 8px 0 0;
    color: #64748b;
  }

  .button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .button.muted {
    background: #172033;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(23, 32, 51, 0.2);
  }

  .button.danger-button {
    background: #dc2626;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(220, 38, 38, 0.24);
  }

  .button.wide {
    width: 100%;
    min-height: 54px;
    margin-top: 8px;
    font-size: 16px;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
    animation: shakeIn 360ms ease both;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
  }

  .logout-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(15, 23, 42, 0.56);
    backdrop-filter: blur(10px);
    animation: fadeIn 180ms ease both;
  }

  .logout-dialog {
    width: min(460px, 100%);
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.28);
    animation: modalPop 240ms ease both;
  }

  .logout-dialog h2 {
    margin: 16px 0 8px;
    color: #172033;
    font-size: 28px;
    line-height: 1.12;
  }

  .logout-dialog p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
  }

  .logout-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 24px;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes modalPop {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-12px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes shakeIn {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.84;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 900px) {
    .dash-nav,
    .dashboard-hero,
    .dashboard-grid {
      grid-template-columns: 1fr;
    }

    .dash-nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-actions {
      width: 100%;
      justify-content: flex-start;
    }

    .stats-grid,
    .form-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .dashboard-page {
      padding: 12px;
    }

    .dashboard-hero,
    .panel,
    .dash-nav {
      padding: 20px;
      border-radius: 18px;
    }

    .profile-panel {
      grid-template-columns: 1fr;
    }

    .nav-actions,
    .logout-actions,
    .button {
      width: 100%;
    }

    .logout-actions {
      flex-direction: column-reverse;
    }
  }
`,lt=Object.create(null);lt.open="0";lt.close="1";lt.ping="2";lt.pong="3";lt.message="4";lt.upgrade="5";lt.noop="6";const Pi=Object.create(null);Object.keys(lt).forEach(e=>{Pi[lt[e]]=e});const pa={type:"error",data:"parser error"},cp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",dp=typeof ArrayBuffer=="function",fp=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,wl=({type:e,data:t},n,r)=>cp&&t instanceof Blob?n?r(t):oc(t,r):dp&&(t instanceof ArrayBuffer||fp(t))?n?r(t):oc(new Blob([t]),r):r(lt[e]+(t||"")),oc=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function ac(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let ao;function Bx(e,t){if(cp&&e.data instanceof Blob)return e.data.arrayBuffer().then(ac).then(t);if(dp&&(e.data instanceof ArrayBuffer||fp(e.data)))return t(ac(e.data));wl(e,!1,n=>{ao||(ao=new TextEncoder),t(ao.encode(n))})}const lc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<lc.length;e++)lr[lc.charCodeAt(e)]=e;const Fx=e=>{let t=e.length*.75,n=e.length,r,i=0,s,o,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const c=new ArrayBuffer(t),f=new Uint8Array(c);for(r=0;r<n;r+=4)s=lr[e.charCodeAt(r)],o=lr[e.charCodeAt(r+1)],l=lr[e.charCodeAt(r+2)],u=lr[e.charCodeAt(r+3)],f[i++]=s<<2|o>>4,f[i++]=(o&15)<<4|l>>2,f[i++]=(l&3)<<6|u&63;return c},Mx=typeof ArrayBuffer=="function",bl=(e,t)=>{if(typeof e!="string")return{type:"message",data:pp(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:$x(e.substring(1),t)}:Pi[n]?e.length>1?{type:Pi[n],data:e.substring(1)}:{type:Pi[n]}:pa},$x=(e,t)=>{if(Mx){const n=Fx(e);return pp(n,t)}else return{base64:!0,data:e}},pp=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},hp="",Vx=(e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((s,o)=>{wl(s,!1,l=>{r[o]=l,++i===n&&t(r.join(hp))})})},Hx=(e,t)=>{const n=e.split(hp),r=[];for(let i=0;i<n.length;i++){const s=bl(n[i],t);if(r.push(s),s.type==="error")break}return r};function Wx(){return new TransformStream({transform(e,t){Bx(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let lo;function fi(e){return e.reduce((t,n)=>t+n.length,0)}function pi(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function qx(e,t){lo||(lo=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,l){for(n.push(o);;){if(r===0){if(fi(n)<1)break;const u=pi(n,1);s=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(fi(n)<2)break;const u=pi(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(fi(n)<8)break;const u=pi(n,8),c=new DataView(u.buffer,u.byteOffset,u.length),f=c.getUint32(0);if(f>Math.pow(2,21)-1){l.enqueue(pa);break}i=f*Math.pow(2,32)+c.getUint32(4),r=3}else{if(fi(n)<i)break;const u=pi(n,i);l.enqueue(bl(s?u:lo.decode(u),t)),r=0}if(i===0||i>e){l.enqueue(pa);break}}}})}const mp=4;function ne(e){if(e)return Yx(e)}function Yx(e){for(var t in ne.prototype)e[t]=ne.prototype[t];return e}ne.prototype.on=ne.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ne.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};ne.prototype.off=ne.prototype.removeListener=ne.prototype.removeAllListeners=ne.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+e],this};ne.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this};ne.prototype.emitReserved=ne.prototype.emit;ne.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ne.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Rs=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),Fe=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Kx="arraybuffer";function gp(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const Qx=Fe.setTimeout,Xx=Fe.clearTimeout;function Ps(e,t){t.useNativeTimers?(e.setTimeoutFn=Qx.bind(Fe),e.clearTimeoutFn=Xx.bind(Fe)):(e.setTimeoutFn=Fe.setTimeout.bind(Fe),e.clearTimeoutFn=Fe.clearTimeout.bind(Fe))}const Jx=1.33;function Gx(e){return typeof e=="string"?Zx(e):Math.ceil((e.byteLength||e.size)*Jx)}function Zx(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function xp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ey(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function ty(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class ny extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class kl extends ne{constructor(t){super(),this.writable=!1,Ps(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,n,r){return super.emitReserved("error",new ny(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=bl(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=ey(t);return n.length?"?"+n:""}}class ry extends kl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Hx(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Vx(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=xp()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}}let yp=!1;try{yp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const iy=yp;function sy(){}class oy extends ry{constructor(t){if(super(t),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||r!==t.port}}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}class at extends ne{constructor(t,n,r){super(),this.createRequest=t,Ps(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var t;const n=gp(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=at.requestsCount++,at.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=sy,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete at.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}at.requestsCount=0;at.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",uc);else if(typeof addEventListener=="function"){const e="onpagehide"in Fe?"pagehide":"unload";addEventListener(e,uc,!1)}}function uc(){for(let e in at.requests)at.requests.hasOwnProperty(e)&&at.requests[e].abort()}const ay=function(){const e=vp({xdomain:!1});return e&&e.responseType!==null}();class ly extends oy{constructor(t){super(t);const n=t&&t.forceBase64;this.supportsBinary=ay&&!n}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new at(vp,this.uri(),t)}}function vp(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||iy))return new XMLHttpRequest}catch{}if(!t)try{return new Fe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const wp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class uy extends kl{get name(){return"websocket"}doOpen(){const t=this.uri(),n=this.opts.protocols,r=wp?{}:gp(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;wl(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&Rs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=xp()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}}const uo=Fe.WebSocket||Fe.MozWebSocket;class cy extends uy{createSocket(t,n,r){return wp?new uo(t,n,r):n?new uo(t,n):new uo(t)}doWrite(t,n){this.ws.send(n)}}class dy extends kl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const n=qx(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),i=Wx();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:l,value:u})=>{l||(this.onPacket(u),s())}).catch(l=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;this._writer.write(r).then(()=>{i&&Rs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const fy={websocket:cy,webtransport:dy,polling:ly},py=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,hy=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ha(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=py.exec(e||""),s={},o=14;for(;o--;)s[hy[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=my(s,s.path),s.queryKey=gy(s,s.query),s}function my(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function gy(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const ma=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ti=[];ma&&addEventListener("offline",()=>{Ti.forEach(e=>e())},!1);class Bt extends ne{constructor(t,n){if(super(),this.binaryType=Kx,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(n=t,t=null),t){const r=ha(t);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=ha(n.host).host);Ps(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ty(this.opts.query)),ma&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ti.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=mp,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Bt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Bt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=t.data,this._onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Gx(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Rs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,n,r){return this._sendPacket("message",t,n,r),this}send(t,n,r){return this._sendPacket("message",t,n,r),this}_sendPacket(t,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:t,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}_onError(t){if(Bt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ma&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Ti.indexOf(this._offlineEventListener);r!==-1&&Ti.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this._prevBufferLen=0}}}Bt.protocol=mp;class xy extends Bt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let n=this.createTransport(t),r=!1;Bt.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!r)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Bt.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(f(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=n.name,this.emitReserved("upgradeError",g)}}))};function s(){r||(r=!0,f(),n.close(),n=null)}const o=d=>{const g=new Error("probe error: "+d);g.transport=n.name,s(),this.emitReserved("upgradeError",g)};function l(){o("transport closed")}function u(){o("socket closed")}function c(d){n&&d.name!==n.name&&s()}const f=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",l),this.off("close",u),this.off("upgrading",c)};n.once("open",i),n.once("error",o),n.once("close",l),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const n=[];for(let r=0;r<t.length;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}}let yy=class extends xy{constructor(t,n={}){const r=typeof t=="object"?t:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>fy[i]).filter(i=>!!i)),super(t,r)}};function vy(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=ha(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+t,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const wy=typeof ArrayBuffer=="function",by=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,bp=Object.prototype.toString,ky=typeof Blob=="function"||typeof Blob<"u"&&bp.call(Blob)==="[object BlobConstructor]",Sy=typeof File=="function"||typeof File<"u"&&bp.call(File)==="[object FileConstructor]";function Sl(e){return wy&&(e instanceof ArrayBuffer||by(e))||ky&&e instanceof Blob||Sy&&e instanceof File}function Oi(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(Oi(e[n]))return!0;return!1}if(Sl(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Oi(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Oi(e[n]))return!0;return!1}function Ey(e){const t=[],n=e.data,r=e;return r.data=ga(n,t),r.attachments=t.length,{packet:r,buffers:t}}function ga(e,t){if(!e)return e;if(Sl(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=ga(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=ga(e[r],t));return n}return e}function Ny(e,t){return e.data=xa(e.data,t),delete e.attachments,e}function xa(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=xa(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=xa(e[n],t));return e}const jy=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],_y=5;var I;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(I||(I={}));class Cy{constructor(t){this.replacer=t}encode(t){return(t.type===I.EVENT||t.type===I.ACK)&&Oi(t)?this.encodeAsBinary({type:t.type===I.EVENT?I.BINARY_EVENT:I.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===I.BINARY_EVENT||t.type===I.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=Ey(t),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}function cc(e){return Object.prototype.toString.call(e)==="[object Object]"}class El extends ne{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===I.BINARY_EVENT;r||n.type===I.BINARY_ACK?(n.type=r?I.EVENT:I.ACK,this.reconstructor=new Ry(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Sl(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(I[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===I.BINARY_EVENT||r.type===I.BINARY_ACK){const s=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const o=t.substring(s,n);if(o!=Number(o)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(t.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(s,n)}else r.nsp="/";const i=t.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=t.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===t.length)break}r.id=Number(t.substring(s,n+1))}if(t.charAt(++n)){const s=this.tryParse(t.substr(n));if(El.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case I.CONNECT:return cc(n);case I.DISCONNECT:return n===void 0;case I.CONNECT_ERROR:return typeof n=="string"||cc(n);case I.EVENT:case I.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&jy.indexOf(n[0])===-1);case I.ACK:case I.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ry{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=Ny(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Py=Object.freeze(Object.defineProperty({__proto__:null,Decoder:El,Encoder:Cy,get PacketType(){return I},protocol:_y},Symbol.toStringTag,{value:"Module"}));function Ke(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const Ty=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class kp extends ne{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ke(t,"open",this.onopen.bind(this)),Ke(t,"packet",this.onpacket.bind(this)),Ke(t,"error",this.onerror.bind(this)),Ke(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){var r,i,s;if(Ty.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:I.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const f=this.ids++,d=n.pop();this._registerAckCallback(f,d),o.id=f}const l=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[t]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);n.call(this,new Error("operation has timed out"))},i),o=(...l)=>{this.io.clearTimeoutFn(s),n.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...n){return new Promise((r,i)=>{const s=(o,l)=>o?i(o):r(l);s.withError=!0,n.push(s),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:I.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(r=>String(r.id)===t)){const r=this.acks[t];delete this.acks[t],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case I.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case I.EVENT:case I.BINARY_EVENT:this.onevent(t);break;case I.ACK:case I.BINARY_ACK:this.onack(t);break;case I.DISCONNECT:this.ondisconnect();break;case I.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:I.ACK,id:t,data:i}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:I.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function qn(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}qn.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};qn.prototype.reset=function(){this.attempts=0};qn.prototype.setMin=function(e){this.ms=e};qn.prototype.setMax=function(e){this.max=e};qn.prototype.setJitter=function(e){this.jitter=e};class ya extends ne{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Ps(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new qn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||Py;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new yy(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Ke(n,"open",function(){r.onopen(),t&&t()}),s=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=Ke(n,"error",s);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ke(t,"ping",this.onping.bind(this)),Ke(t,"data",this.ondata.bind(this)),Ke(t,"error",this.onerror.bind(this)),Ke(t,"close",this.onclose.bind(this)),Ke(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){Rs(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new kp(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const nr={};function Li(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=vy(e,t.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=nr[i]&&s in nr[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let u;return l?u=new ya(r,t):(nr[i]||(nr[i]=new ya(r,t)),u=nr[i]),n.query&&!t.query&&(t.query=n.queryKey),u.socket(n.path,t)}Object.assign(Li,{Manager:ya,Socket:kp,io:Li,connect:Li});function Oy(){const{interviewId:e}=Af(),t=wt(),[n,r]=S.useState([]),[i,s]=S.useState(!1),[o,l]=S.useState(!1),[u,c]=S.useState(""),f=S.useRef(null),d=S.useRef(null),g=S.useRef(null),b=()=>{var h;(h=g.current)==null||h.scrollIntoView({behavior:"smooth"})};S.useEffect(()=>{b()},[n]),S.useEffect(()=>{f.current=Li(Lx),f.current.emit("join-interview",{interviewId:e}),f.current.on("ai-response",p=>{r(m=>[...m,{role:"ai",text:p.message}]),x(p.message)});const h=window.SpeechRecognition||window.webkitSpeechRecognition;return h?(d.current=new h,d.current.continuous=!1,d.current.interimResults=!1,d.current.lang="en-US",d.current.maxAlternatives=1,d.current.onstart=()=>{c(""),s(!0)},d.current.onresult=p=>{const m=p.results[0][0].transcript;r(k=>[...k,{role:"user",text:m}]),f.current.emit("user-message",{interviewId:e,message:m}),s(!1)},d.current.onerror=p=>{s(!1);let m="Speech recognition error. Please try again.";p.error==="no-speech"?m="No speech detected. Please speak clearly into your microphone.":p.error==="not-allowed"||p.error==="service-not-allowed"?m="Microphone access denied. Please allow microphone permissions and reload the page.":p.error==="audio-capture"&&(m="No microphone found. Please connect a microphone and try again."),c(m)},d.current.onend=()=>{s(!1)}):c("Speech recognition is not supported in this browser. Use Chrome or Edge with microphone access."),()=>{var p,m;(p=f.current)==null||p.disconnect(),(m=window.speechSynthesis)==null||m.cancel()}},[e]);const x=h=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const p=new SpeechSynthesisUtterance(h);p.rate=.9,window.speechSynthesis.speak(p)}},v=()=>{if(!d.current){c("Speech recognition is not available in this browser.");return}c("");try{d.current.start()}catch(h){s(!1),c("Could not start speech recognition. Please try again."),console.error("Speech recognition start failed:",h)}},y=async()=>{var h,p,m,k;if(!o)try{l(!0);try{(p=(h=d.current)==null?void 0:h.stop)==null||p.call(h)}catch{}s(!1),await D.post(`${Xe}/api/interview/stop/${e}`),(m=window.speechSynthesis)==null||m.cancel(),(k=f.current)==null||k.disconnect(),t(`/report/${e}`,{replace:!0})}catch{l(!1),alert("Error stopping interview")}};return a.jsxs("main",{className:"interview-page",children:[a.jsx("style",{children:Ly}),a.jsxs("section",{className:"interviewer-banner",children:[a.jsx("div",{className:"interviewer-avatar","aria-hidden":"true",children:"AI"}),a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow dark",children:"Live Interview"}),a.jsx("h1",{children:"Your AI Interviewer"}),a.jsx("p",{children:"I will ask questions and guide your interview. Speak clearly and answer naturally."})]})]}),a.jsxs("section",{className:"interview-shell",children:[a.jsxs("header",{className:"interview-header",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow",children:"In Progress"}),a.jsx("h2",{children:"Interview Session"})]}),a.jsx("button",{className:"complete-button",onClick:y,disabled:o,children:o?"Completing Interview...":"Complete Interview & Get Report"})]}),a.jsxs("div",{className:"chat-container",children:[n.length===0&&a.jsx("div",{className:"welcome-message",children:"Waiting for the AI interviewer to begin..."}),n.map((h,p)=>a.jsxs("article",{className:`message ${h.role==="user"?"user":"ai"}`,children:[a.jsx("strong",{children:h.role==="user"?"You":"AI Interviewer"}),a.jsx("p",{children:h.text})]},`${h.role}-${p}`)),a.jsx("div",{ref:g})]}),a.jsxs("footer",{className:"interview-controls",children:[a.jsx("p",{children:i?"Listening... speak now.":"Answer the question, then complete the interview to get your analysis report."}),u&&a.jsx("p",{className:"voice-error",children:u}),a.jsx("button",{className:`record-button ${i?"recording":""}`,onClick:v,disabled:i||o||!d.current,children:i?"Recording...":"Start Speaking"})]})]})]})}const Ly=`
  .interview-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 18px;
    color: #172033;
    background:
      radial-gradient(circle at 12% 8%, rgba(20, 184, 166, 0.14), transparent 28%),
      linear-gradient(180deg, #eef5ff 0%, #f8fafc 56%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
  }

  .interviewer-banner,
  .interview-shell {
    width: min(1100px, 100%);
    margin: 0 auto;
  }

  .interviewer-banner {
    display: grid;
    grid-template-columns: 74px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    padding: 18px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .interviewer-avatar {
    width: 74px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background: #2563eb;
    color: #ffffff;
    font-size: 24px;
    font-weight: 900;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.24);
    animation: float 3s ease-in-out infinite;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 7px 11px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .interviewer-banner h1 {
    margin: 9px 0 4px;
    font-size: 26px;
    line-height: 1.1;
  }

  .interviewer-banner p {
    margin: 0;
    color: #64748b;
    line-height: 1.55;
  }

  .interview-shell {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 20px 52px rgba(15, 23, 42, 0.1);
    animation: fadeUp 680ms 80ms ease both;
  }

  .voice-error {
    margin: 0 0 12px;
    color: #dc2626;
    font-size: 0.95rem;
  }

  .interview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 64%, #14b8a6 100%);
  }

  .interview-header h2 {
    margin: 9px 0 0;
    font-size: 26px;
    line-height: 1.1;
  }

  .complete-button,
  .record-button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    color: #ffffff;
    cursor: pointer;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
  }

  .complete-button {
    flex: 0 0 auto;
    background: #dc2626;
    box-shadow: 0 16px 34px rgba(220, 38, 38, 0.26);
  }

  .record-button {
    min-width: 190px;
    background: #16a34a;
    box-shadow: 0 16px 34px rgba(22, 163, 74, 0.24);
  }

  .record-button.recording {
    background: #dc2626;
  }

  .complete-button:hover,
  .record-button:hover {
    transform: translateY(-2px);
  }

  .complete-button:disabled,
  .record-button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
    transform: none;
  }

  .chat-container {
    flex: 1;
    min-height: 280px;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background:
      linear-gradient(180deg, rgba(248, 250, 252, 0.9), rgba(239, 246, 255, 0.82));
  }

  .welcome-message {
    align-self: center;
    max-width: 520px;
    margin-top: 40px;
    padding: 18px;
    border-radius: 16px;
    color: #64748b;
    background: #ffffff;
    text-align: center;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
  }

  .message {
    max-width: min(78%, 760px);
    padding: 14px 16px;
    border-radius: 16px;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
    animation: fadeUp 260ms ease both;
    overflow-wrap: anywhere;
  }

  .message.user {
    align-self: flex-end;
    color: #ffffff;
    background: #2563eb;
    border-bottom-right-radius: 6px;
  }

  .message.ai {
    align-self: flex-start;
    color: #172033;
    background: #ffffff;
    border-bottom-left-radius: 6px;
  }

  .message strong {
    display: block;
    margin-bottom: 7px;
    font-size: 14px;
  }

  .message p {
    margin: 0;
    line-height: 1.55;
  }

  .interview-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 20px;
    border-top: 1px solid #dbe3ef;
    background: #ffffff;
  }

  .interview-controls p {
    margin: 0;
    color: #475569;
    line-height: 1.55;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 760px) {
    .interview-page {
      padding: 12px;
      gap: 12px;
    }

    .interviewer-banner {
      grid-template-columns: 58px minmax(0, 1fr);
      padding: 14px;
      border-radius: 18px;
    }

    .interviewer-avatar {
      width: 58px;
      height: 58px;
      border-radius: 18px;
      font-size: 20px;
    }

    .interviewer-banner h1,
    .interview-header h2 {
      font-size: 22px;
    }

    .interview-header,
    .interview-controls {
      align-items: stretch;
      flex-direction: column;
    }

    .complete-button,
    .record-button {
      width: 100%;
      min-width: 0;
    }

    .chat-container {
      padding: 14px;
      min-height: 340px;
    }

    .message {
      max-width: 92%;
    }
  }

  @media (max-width: 420px) {
    .interviewer-banner {
      grid-template-columns: 1fr;
    }

    .interviewer-avatar {
      width: 52px;
      height: 52px;
    }

    .message {
      max-width: 100%;
    }
  }
`,rr=e=>{const t=Number(e);return Number.isNaN(t)?0:Math.min(100,Math.max(0,t))},co=e=>e>=80?"#10b981":e>=60?"#f59e0b":"#ef4444",Ay=(e="")=>e.toLowerCase().replace(/\s+/g,"-"),zy=e=>e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Not available",fo={strengths:["Completed the interview","Responded to the interviewer","Built useful practice momentum"],weaknesses:["Add more examples to future answers","Use clearer structure in responses","Practice concise technical explanations"],recommendations:["Practice role-specific questions","Use the STAR format for behavioral answers","Review technical fundamentals before the next session"]};function Iy(){const{interviewId:e}=Af(),t=wt(),[n,r]=S.useState(null),[i,s]=S.useState(!0),[o,l]=S.useState(null);S.useEffect(()=>{(async()=>{try{s(!0),l(null);const h=await D.post(`${Xe}/api/interview/report/${e}`);r(h.data.report)}catch(h){console.error("Error generating report:",h),l("Failed to generate report. Please try again.")}finally{s(!1)}})()},[e]);const u=S.useMemo(()=>{if(!n)return null;const y=rr(n.overallScore),h=n.performanceLevel||"Completed";return{...n,overallScore:y,performanceLevel:h,strengths:Array.isArray(n.strengths)&&n.strengths.length?n.strengths:fo.strengths,weaknesses:Array.isArray(n.weaknesses)&&n.weaknesses.length?n.weaknesses:fo.weaknesses,recommendations:Array.isArray(n.recommendations)&&n.recommendations.length?n.recommendations:fo.recommendations,technicalScore:rr(n.technicalScore),communicationScore:rr(n.communicationScore),confidenceScore:rr(n.confidenceScore),problemSolvingScore:rr(n.problemSolvingScore)}},[n]);if(i)return a.jsxs("main",{className:"report-page report-center",children:[a.jsx("style",{children:hi}),a.jsxs("div",{className:"loading-card",children:[a.jsx("div",{className:"loading-orbit",children:a.jsx("span",{})}),a.jsx("h1",{children:"Generating your analysis report"}),a.jsx("p",{children:"The AI is reviewing your interview transcript, scoring your answers, and preparing recommendations."}),a.jsxs("div",{className:"loading-bars",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]})]});if(o)return a.jsxs("main",{className:"report-page report-center",children:[a.jsx("style",{children:hi}),a.jsxs("div",{className:"state-card",children:[a.jsx("span",{className:"state-label",children:"Report issue"}),a.jsx("h1",{children:"Could not generate the report"}),a.jsx("p",{children:o}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button primary",onClick:()=>window.location.reload(),children:"Try Again"}),a.jsx("button",{className:"button secondary",onClick:()=>t("/history"),children:"Back to History"})]})]})]});if(!u)return a.jsxs("main",{className:"report-page report-center",children:[a.jsx("style",{children:hi}),a.jsxs("div",{className:"state-card",children:[a.jsx("span",{className:"state-label",children:"No report"}),a.jsx("h1",{children:"No report available"}),a.jsx("p",{children:"There is no analysis data for this interview yet."}),a.jsx("button",{className:"button primary",onClick:()=>t("/history"),children:"Back to History"})]})]});const c=[{label:"Technical Skills",value:u.technicalScore},{label:"Communication",value:u.communicationScore},{label:"Confidence",value:u.confidenceScore},{label:"Problem Solving",value:u.problemSolvingScore}],f=[{label:"Questions Asked",value:u.questionsAsked??0},{label:"Answers Given",value:u.answersGiven??0},{label:"Avg Response",value:u.averageResponseLength||"Medium"},{label:"Duration",value:u.interviewDuration||"15-20 min"}],d=82,g=2*Math.PI*d,b=g-u.overallScore/100*g,x=co(u.overallScore),v=Ay(u.performanceLevel);return a.jsxs("main",{className:"report-page",children:[a.jsx("style",{children:hi}),a.jsxs("section",{className:"report-hero",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("span",{className:"eyebrow",children:"Analysis Report"}),a.jsx("h1",{children:"Interview Performance"}),a.jsx("p",{children:"A focused review of your interview performance, with scores, strengths, improvement areas, and next-step recommendations."}),a.jsxs("div",{className:"meta-grid",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Position"}),a.jsx("strong",{children:u.position})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Experience"}),a.jsx("strong",{children:u.experience})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Difficulty"}),a.jsx("strong",{children:u.difficulty})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Date"}),a.jsx("strong",{children:zy(u.interviewDate)})]})]})]}),a.jsxs("div",{className:"score-panel",children:[a.jsxs("div",{className:"score-ring",children:[a.jsxs("svg",{viewBox:"0 0 220 220","aria-hidden":"true",children:[a.jsx("circle",{className:"score-track",cx:"110",cy:"110",r:d}),a.jsx("circle",{className:"score-progress",cx:"110",cy:"110",r:d,style:{stroke:x,strokeDasharray:g,"--score-offset":b}})]}),a.jsxs("div",{className:"score-center",children:[a.jsx("strong",{children:u.overallScore}),a.jsx("span",{children:"out of 100"})]})]}),a.jsx("span",{className:`performance-pill ${v}`,children:u.performanceLevel})]})]}),a.jsx("section",{className:"stats-strip","aria-label":"Interview statistics",children:f.map((y,h)=>a.jsxs("div",{className:"stat-tile",style:{animationDelay:`${h*90}ms`},children:[a.jsx("span",{children:y.label}),a.jsx("strong",{children:y.value})]},y.label))}),a.jsxs("section",{className:"content-grid",children:[a.jsxs("article",{className:"panel score-breakdown",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Score Breakdown"}),a.jsx("h2",{children:"Skill Signals"})]}),a.jsx("div",{className:"score-list",children:c.map((y,h)=>a.jsxs("div",{className:"score-row",children:[a.jsxs("div",{className:"score-row-top",children:[a.jsx("span",{children:y.label}),a.jsxs("strong",{style:{color:co(y.value)},children:[y.value,"%"]})]}),a.jsx("div",{className:"bar-track",children:a.jsx("div",{className:"bar-fill",style:{width:`${y.value}%`,background:co(y.value),animationDelay:`${250+h*140}ms`}})})]},y.label))})]}),a.jsxs("article",{className:"panel feedback-panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Detailed Feedback"}),a.jsx("h2",{children:"Evaluator Notes"})]}),a.jsx("p",{children:u.detailedFeedback})]}),a.jsxs("article",{className:"panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Strengths"}),a.jsx("h2",{children:"What Went Well"})]}),a.jsx("ul",{className:"insight-list positive",children:u.strengths.map((y,h)=>a.jsx("li",{style:{animationDelay:`${h*80}ms`},children:y},`${y}-${h}`))})]}),a.jsxs("article",{className:"panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Improvements"}),a.jsx("h2",{children:"Focus Areas"})]}),a.jsx("ul",{className:"insight-list warning",children:u.weaknesses.map((y,h)=>a.jsx("li",{style:{animationDelay:`${h*80}ms`},children:y},`${y}-${h}`))})]}),a.jsxs("article",{className:"panel recommendations",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Recommendations"}),a.jsx("h2",{children:"Next Practice Steps"})]}),a.jsx("div",{className:"recommendation-list",children:u.recommendations.map((y,h)=>a.jsxs("div",{className:"recommendation-item",style:{animationDelay:`${h*90}ms`},children:[a.jsx("span",{children:h+1}),a.jsx("p",{children:y})]},`${y}-${h}`))})]})]}),a.jsxs("div",{className:"action-bar",children:[a.jsx("button",{className:"button secondary",onClick:()=>t("/history"),children:"Back to History"}),a.jsx("button",{className:"button muted",onClick:()=>window.print(),children:"Print Report"}),a.jsx("button",{className:"button primary",onClick:()=>t("/dashboard"),children:"Start New Interview"})]})]})}const hi=`
  .report-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at top left, rgba(20, 184, 166, 0.18), transparent 30%),
      linear-gradient(180deg, #eef5ff 0%, #f7fafc 45%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .report-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .report-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 28px;
    max-width: 1180px;
    margin: 0 auto 24px;
    padding: 34px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.9) 58%, rgba(20, 184, 166, 0.92));
    border-radius: 24px;
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.22);
    overflow: hidden;
    position: relative;
    animation: fadeUp 680ms ease both;
  }

  .report-hero::after {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    right: -170px;
    top: -170px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .hero-copy,
  .score-panel {
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 14px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .hero-copy h1 {
    margin: 0;
    font-size: clamp(36px, 6vw, 64px);
    line-height: 1;
    letter-spacing: 0;
  }

  .hero-copy p {
    max-width: 680px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.86);
    font-size: 16px;
    line-height: 1.7;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    gap: 12px;
    margin-top: 30px;
  }

  .meta-grid div {
    min-width: 0;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .meta-grid span,
  .stat-tile span {
    display: block;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .meta-grid strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 15px;
  }

  .score-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-height: 300px;
  }

  .score-ring {
    position: relative;
    width: 230px;
    height: 230px;
    filter: drop-shadow(0 22px 34px rgba(0, 0, 0, 0.22));
  }

  .score-ring svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .score-track,
  .score-progress {
    fill: none;
    stroke-width: 20;
  }

  .score-track {
    stroke: rgba(255, 255, 255, 0.18);
  }

  .score-progress {
    stroke-linecap: round;
    stroke-dashoffset: var(--score-offset);
    animation: drawRing 1400ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .score-center {
    position: absolute;
    inset: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    color: #172033;
  }

  .score-center strong {
    font-size: 58px;
    line-height: 1;
  }

  .score-center span {
    margin-top: 6px;
    color: #64748b;
    font-weight: 700;
  }

  .performance-pill {
    display: inline-flex;
    justify-content: center;
    min-width: 160px;
    padding: 11px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
    color: #ffffff;
    font-weight: 800;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22);
    animation: badgePop 900ms 420ms ease both;
  }

  .performance-pill.excellent,
  .performance-pill.good {
    background: rgba(16, 185, 129, 0.25);
  }

  .performance-pill.average {
    background: rgba(245, 158, 11, 0.28);
  }

  .performance-pill.needs-improvement {
    background: rgba(239, 68, 68, 0.28);
  }

  .stats-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    max-width: 1180px;
    margin: 0 auto 24px;
  }

  .stat-tile {
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 220ms ease, box-shadow 220ms ease;
  }

  .stat-tile:hover,
  .panel:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 52px rgba(15, 23, 42, 0.12);
  }

  .stat-tile span {
    color: #64748b;
  }

  .stat-tile strong {
    display: block;
    color: #172033;
    font-size: clamp(22px, 3vw, 34px);
    line-height: 1.1;
    overflow-wrap: anywhere;
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    max-width: 1180px;
    margin: 0 auto;
  }

  .panel {
    padding: 26px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms ease both;
    transition: transform 220ms ease, box-shadow 220ms ease;
  }

  .score-breakdown,
  .feedback-panel,
  .recommendations {
    grid-column: span 2;
  }

  .panel-heading {
    margin-bottom: 20px;
  }

  .panel-heading h2 {
    margin: 0;
    color: #172033;
    font-size: 24px;
    letter-spacing: 0;
  }

  .score-list {
    display: grid;
    gap: 18px;
  }

  .score-row-top {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 10px;
    color: #334155;
    font-weight: 800;
  }

  .bar-track {
    height: 13px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
  }

  .bar-fill {
    height: 100%;
    border-radius: inherit;
    transform: scaleX(0);
    transform-origin: left;
    animation: growBar 920ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  .feedback-panel p {
    margin: 0;
    color: #475569;
    font-size: 16px;
    line-height: 1.8;
  }

  .insight-list {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .insight-list li {
    position: relative;
    padding: 14px 14px 14px 42px;
    border-radius: 14px;
    color: #334155;
    background: #f8fafc;
    line-height: 1.6;
    animation: slideIn 520ms ease both;
  }

  .insight-list li::before {
    content: "";
    position: absolute;
    left: 16px;
    top: 22px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .insight-list.positive li::before {
    background: #10b981;
    box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.14);
  }

  .insight-list.warning li::before {
    background: #f59e0b;
    box-shadow: 0 0 0 5px rgba(245, 158, 11, 0.16);
  }

  .recommendation-list {
    display: grid;
    gap: 14px;
  }

  .recommendation-item {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 14px;
    align-items: start;
    padding: 16px;
    border-radius: 16px;
    background: #f8fafc;
    animation: slideIn 520ms ease both;
  }

  .recommendation-item span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #2563eb;
    color: #ffffff;
    font-weight: 900;
  }

  .recommendation-item p {
    margin: 0;
    color: #334155;
    line-height: 1.6;
  }

  .action-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    max-width: 1180px;
    margin: 28px auto 0;
    animation: fadeUp 720ms 220ms ease both;
  }

  .button {
    min-height: 46px;
    padding: 12px 22px;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .button.muted {
    background: #172033;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(23, 32, 51, 0.2);
  }

  .loading-card,
  .state-card {
    width: min(560px, 100%);
    padding: 38px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    text-align: center;
    animation: fadeUp 680ms ease both;
  }

  .loading-card h1,
  .state-card h1 {
    margin: 18px 0 10px;
    color: #172033;
    font-size: clamp(28px, 5vw, 42px);
    line-height: 1.1;
  }

  .loading-card p,
  .state-card p {
    margin: 0;
    color: #64748b;
    line-height: 1.7;
  }

  .loading-orbit {
    position: relative;
    width: 84px;
    height: 84px;
    margin: 0 auto;
    border-radius: 50%;
    border: 8px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 1s linear infinite;
  }

  .loading-orbit span {
    position: absolute;
    inset: 22px;
    border-radius: 50%;
    background: #14b8a6;
    animation: slowPulse 1.3s ease-in-out infinite;
  }

  .loading-bars {
    display: grid;
    gap: 10px;
    margin-top: 28px;
  }

  .loading-bars span {
    display: block;
    height: 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, #e2e8f0, #bfdbfe, #e2e8f0);
    background-size: 220% 100%;
    animation: shimmer 1.2s ease-in-out infinite;
  }

  .loading-bars span:nth-child(2) {
    width: 76%;
    margin: 0 auto;
    animation-delay: 120ms;
  }

  .loading-bars span:nth-child(3) {
    width: 54%;
    margin: 0 auto;
    animation-delay: 240ms;
  }

  .state-label {
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 999px;
    background: #fee2e2;
    color: #b91c1c;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .button-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-14px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes growBar {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @keyframes drawRing {
    from {
      stroke-dashoffset: 515.22;
    }
    to {
      stroke-dashoffset: var(--score-offset);
    }
  }

  @keyframes badgePop {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes shimmer {
    from {
      background-position: 120% 0;
    }
    to {
      background-position: -120% 0;
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.85;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    .report-page {
      padding: 18px;
    }

    .report-hero {
      grid-template-columns: 1fr;
      padding: 26px;
    }

    .meta-grid,
    .stats-strip,
    .content-grid {
      grid-template-columns: 1fr 1fr;
    }

    .score-panel {
      min-height: auto;
    }

    .score-breakdown,
    .feedback-panel,
    .recommendations {
      grid-column: span 2;
    }
  }

  @media (max-width: 620px) {
    .report-page {
      padding: 12px;
    }

    .report-hero {
      padding: 22px;
      border-radius: 18px;
    }

    .meta-grid,
    .stats-strip,
    .content-grid {
      grid-template-columns: 1fr;
    }

    .score-breakdown,
    .feedback-panel,
    .recommendations {
      grid-column: span 1;
    }

    .score-ring {
      width: 200px;
      height: 200px;
    }

    .score-center strong {
      font-size: 48px;
    }

    .panel,
    .loading-card,
    .state-card {
      padding: 22px;
      border-radius: 16px;
    }

    .button {
      width: 100%;
    }
  }

  @media print {
    .report-page {
      padding: 0;
      background: #ffffff;
    }

    .report-hero,
    .panel,
    .stat-tile {
      box-shadow: none;
      break-inside: avoid;
    }

    .action-bar {
      display: none;
    }
  }
`;function Uy(){const e=wt(),[t,n]=S.useState(null),[r,i]=S.useState([]),[s,o]=S.useState(!0),[l,u]=S.useState("");S.useEffect(()=>{const d=JSON.parse(localStorage.getItem("user"));if(!d){e("/");return}n(d),(async()=>{try{o(!0);const b=await D.get(`${Xe}/api/interviews/user/${d.id}`);i(b.data.interviews||[])}catch(b){console.error("Error fetching interviews:",b),u("Could not load your interview history. Please try again.")}finally{o(!1)}})()},[e]);const c=S.useMemo(()=>{const d=r.filter(x=>!x.isStart).length,g=r.filter(x=>x.isStart).length,b=r.reduce((x,v)=>{var y;return x+(((y=v.chatTranscript)==null?void 0:y.length)||0)},0);return[{label:"Total Interviews",value:r.length},{label:"Completed",value:d},{label:"In Progress",value:g},{label:"Transcript Items",value:b}]},[r]),f=d=>d?new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"Not available";return s?a.jsxs("main",{className:"history-page history-center",children:[a.jsx("style",{children:dc}),a.jsxs("div",{className:"loading-card",children:[a.jsx("div",{className:"loading-orbit"}),a.jsx("h1",{children:"Loading history"}),a.jsx("p",{children:"Collecting your saved interviews and reports."})]})]}):a.jsxs("main",{className:"history-page",children:[a.jsx("style",{children:dc}),a.jsxs("nav",{className:"history-nav",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow dark",children:"Practice Archive"}),a.jsx("h1",{children:"Interview History"})]}),a.jsx("button",{className:"button secondary",onClick:()=>e("/dashboard"),children:"Back to Dashboard"})]}),a.jsxs("section",{className:"history-hero",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("span",{className:"eyebrow",children:"Progress Tracker"}),a.jsxs("h2",{children:[(t==null?void 0:t.firstName)||"Your"," practice timeline."]}),a.jsx("p",{children:"Review completed interviews, continue active sessions, and open analysis reports whenever you want to study your progress."})]}),a.jsxs("div",{className:"timeline-visual","aria-hidden":"true",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]}),l&&a.jsx("div",{className:"message error",children:l}),a.jsx("section",{className:"stats-grid","aria-label":"Interview history statistics",children:c.map((d,g)=>a.jsxs("div",{className:"stat-card",style:{animationDelay:`${g*90}ms`},children:[a.jsx("span",{children:d.label}),a.jsx("strong",{children:d.value})]},d.label))}),a.jsxs("section",{className:"history-content",children:[a.jsxs("div",{className:"section-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Saved Sessions"}),a.jsx("h2",{children:"Your Interviews"})]}),r.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"AI"}),a.jsx("h3",{children:"No interviews yet"}),a.jsx("p",{children:"Start your first practice interview from the dashboard. It will appear here after creation."}),a.jsx("button",{className:"button primary",onClick:()=>e("/dashboard"),children:"Go to Dashboard"})]}):a.jsx("div",{className:"interview-list",children:r.map((d,g)=>{var v;const b=((v=d.chatTranscript)==null?void 0:v.length)||0,x=!d.isStart&&b>0;return a.jsxs("article",{className:"interview-card",style:{animationDelay:`${g*80}ms`},children:[a.jsxs("div",{className:"card-main",children:[a.jsxs("div",{className:"status-line",children:[a.jsx("span",{className:`status-pill ${d.isStart?"active":"complete"}`,children:d.isStart?"In Progress":"Completed"}),a.jsx("span",{className:"date-text",children:f(d.createdAt)})]}),a.jsx("h3",{children:d.position}),a.jsxs("div",{className:"detail-grid",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Experience"}),a.jsx("strong",{children:d.experience})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Difficulty"}),a.jsx("strong",{children:d.difficulty})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Transcript"}),a.jsxs("strong",{children:[b," items"]})]})]})]}),a.jsxs("div",{className:"card-actions",children:[d.isStart&&a.jsx("button",{className:"button primary",onClick:()=>e(`/interview/${d._id}`),children:"Continue"}),x&&a.jsx("button",{className:"button primary",onClick:()=>e(`/report/${d._id}`),children:"View Report"}),!d.isStart&&!x&&a.jsx("button",{className:"button disabled",disabled:!0,children:"No Transcript"})]})]},d._id)})})]})]})}const dc=`
  .history-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background: linear-gradient(180deg, #eef5ff 0%, #f8fafc 54%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .history-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .history-nav,
  .history-hero,
  .stats-grid,
  .history-content,
  .message {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .history-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 22px;
    padding: 18px 20px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .history-nav h1 {
    margin: 8px 0 0;
    font-size: clamp(24px, 4vw, 34px);
  }

  .history-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 24px;
    margin-bottom: 22px;
    padding: 34px;
    border-radius: 26px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 58%, #14b8a6 100%);
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.2);
    overflow: hidden;
    animation: fadeUp 720ms 80ms ease both;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .hero-copy h2 {
    max-width: 700px;
    margin: 16px 0 0;
    font-size: clamp(34px, 6vw, 58px);
    line-height: 1;
    letter-spacing: 0;
  }

  .hero-copy p {
    max-width: 660px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .timeline-visual {
    display: grid;
    align-content: center;
    gap: 18px;
  }

  .timeline-visual span {
    display: block;
    height: 54px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.16);
    border: 1px solid rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(10px);
    animation: slideIn 680ms ease both;
  }

  .timeline-visual span:nth-child(2) {
    width: 82%;
    margin-left: auto;
    animation-delay: 120ms;
  }

  .timeline-visual span:nth-child(3) {
    width: 64%;
    animation-delay: 240ms;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-card {
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .stat-card:hover,
  .interview-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .stat-card span,
  .detail-grid span {
    display: block;
    margin-bottom: 8px;
    color: #64748b;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .stat-card strong {
    display: block;
    font-size: 34px;
    line-height: 1;
  }

  .history-content {
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms 120ms ease both;
  }

  .section-heading {
    margin-bottom: 22px;
  }

  .section-heading h2 {
    margin: 14px 0 0;
    font-size: 28px;
  }

  .interview-list {
    display: grid;
    gap: 16px;
  }

  .interview-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 18px;
    align-items: center;
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
    animation: fadeUp 620ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .status-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .status-pill {
    display: inline-flex;
    padding: 7px 10px;
    border-radius: 999px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 900;
  }

  .status-pill.complete {
    background: #10b981;
  }

  .status-pill.active {
    background: #f59e0b;
  }

  .date-text {
    color: #64748b;
    font-size: 13px;
    font-weight: 700;
  }

  .interview-card h3 {
    margin: 0 0 16px;
    color: #172033;
    font-size: 23px;
    overflow-wrap: anywhere;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .detail-grid div {
    padding: 14px;
    border-radius: 14px;
    background: #f8fafc;
  }

  .detail-grid strong {
    display: block;
    color: #172033;
    overflow-wrap: anywhere;
  }

  .card-actions {
    min-width: 150px;
  }

  .empty-state,
  .loading-card {
    text-align: center;
    padding: 38px;
    border-radius: 22px;
    background: #ffffff;
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 680ms ease both;
  }

  .empty-icon {
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 18px;
    border-radius: 24px;
    background: #e7f0ff;
    color: #2563eb;
    font-size: 26px;
    font-weight: 900;
    animation: float 3s ease-in-out infinite;
  }

  .empty-state h3,
  .loading-card h1 {
    margin: 0 0 10px;
    color: #172033;
    font-size: 30px;
  }

  .empty-state p,
  .loading-card p {
    max-width: 560px;
    margin: 0 auto 22px;
    color: #64748b;
    line-height: 1.7;
  }

  .loading-orbit {
    width: 70px;
    height: 70px;
    margin: 0 auto 18px;
    border-radius: 50%;
    border: 7px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 900ms linear infinite;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
  }

  .button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.primary {
    width: 100%;
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .button.disabled {
    width: 100%;
    cursor: not-allowed;
    background: #e2e8f0;
    color: #64748b;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(24px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-9px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 920px) {
    .history-nav,
    .history-hero,
    .interview-card {
      grid-template-columns: 1fr;
    }

    .history-nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .stats-grid,
    .detail-grid {
      grid-template-columns: 1fr 1fr;
    }

    .timeline-visual {
      display: none;
    }

    .card-actions {
      min-width: 0;
    }
  }

  @media (max-width: 560px) {
    .history-page {
      padding: 12px;
    }

    .history-nav,
    .history-hero,
    .history-content {
      padding: 20px;
      border-radius: 18px;
    }

    .stats-grid,
    .detail-grid {
      grid-template-columns: 1fr;
    }

    .button {
      width: 100%;
    }
  }
`;function Dy(){var le,Re,be,Pe;const e=wt(),[t,n]=S.useState(null),[r,i]=S.useState([]),[s,o]=S.useState({firstName:"",lastName:"",email:"",password:""}),[l,u]=S.useState(!0),[c,f]=S.useState(!1),[d,g]=S.useState(!1),[b,x]=S.useState(""),[v,y]=S.useState(!1),[h,p]=S.useState(""),[m,k]=S.useState("");S.useEffect(()=>{const W=JSON.parse(localStorage.getItem("user"));if(!W){e("/");return}(async()=>{try{u(!0);const[V,j]=await Promise.all([D.get(`${Xe}/api/user/${W.id}`),D.get(`${Xe}/api/interviews/user/${W.id}`)]),T={id:V.data._id||V.data.id,firstName:V.data.firstName,lastName:V.data.lastName,email:V.data.email};n(T),o({firstName:T.firstName||"",lastName:T.lastName||"",email:T.email||"",password:""}),i(j.data.interviews||[])}catch(V){console.error("Error loading profile:",V),n(W),o({firstName:W.firstName||"",lastName:W.lastName||"",email:W.email||"",password:""}),k("Could not refresh profile details. Showing saved local data.")}finally{u(!1)}})()},[e]);const E=S.useMemo(()=>{const W=r.filter(V=>!V.isStart).length,$=r.filter(V=>V.isStart).length;return[{label:"Total Sessions",value:r.length},{label:"Completed",value:W},{label:"In Progress",value:$}]},[r]),C=W=>{const{name:$,value:V}=W.target;o({...s,[$]:V}),p(""),k("")},_=async W=>{var $,V;if(W.preventDefault(),!s.firstName.trim()||!s.lastName.trim()||!s.email.trim()){k("First name, last name, and email are required.");return}try{f(!0),k(""),p("");const j={firstName:s.firstName,lastName:s.lastName,email:s.email};s.password.trim()&&(j.password=s.password);const T=await D.put(`${Xe}/api/user/${t.id}`,j);localStorage.setItem("user",JSON.stringify(T.data.user)),n(T.data.user),o({firstName:T.data.user.firstName||"",lastName:T.data.user.lastName||"",email:T.data.user.email||"",password:""}),p("Profile updated successfully.")}catch(j){console.error("Error updating profile:",j),k(((V=($=j.response)==null?void 0:$.data)==null?void 0:V.message)||"Could not update profile. Please try again.")}finally{f(!1)}},P=async()=>{var $,V;if(!(b!=="DELETE"||d||!window.confirm("This will permanently delete your account and interview history. Continue?")))try{g(!0),await D.delete(`${Xe}/api/user/${t.id}`),localStorage.removeItem("user"),e("/",{replace:!0})}catch(j){console.error("Error deleting account:",j),g(!1),k(((V=($=j.response)==null?void 0:$.data)==null?void 0:V.message)||"Could not delete account. Please try again.")}},M=()=>{y(!0)},L=()=>{localStorage.removeItem("user"),e("/")};return l||!t?a.jsxs("main",{className:"profile-page profile-center",children:[a.jsx("style",{children:fc}),a.jsxs("div",{className:"loading-card",children:[a.jsx("div",{className:"loading-orbit"}),a.jsx("h1",{children:"Loading profile"})]})]}):a.jsxs("main",{className:"profile-page",children:[a.jsx("style",{children:fc}),a.jsxs("nav",{className:"profile-nav",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow dark",children:"User Profile"}),a.jsx("h1",{children:"Account Settings"})]}),a.jsxs("div",{className:"nav-actions",children:[a.jsx("button",{className:"button secondary",onClick:()=>e("/dashboard"),children:"Dashboard"}),a.jsx("button",{className:"button secondary",onClick:()=>e("/history"),children:"History"}),a.jsx("button",{className:"button muted",onClick:M,children:"Logout"})]})]}),a.jsxs("section",{className:"profile-hero",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("span",{className:"eyebrow",children:"Profile Center"}),a.jsxs("h2",{children:["Manage your account, ",t.firstName,"."]}),a.jsx("p",{children:"View your profile details, update personal information, change your password, or permanently delete your account."})]}),a.jsxs("div",{className:"identity-card",children:[a.jsx("div",{className:"avatar",children:((Re=(le=t.firstName)==null?void 0:le.charAt(0))==null?void 0:Re.toUpperCase())||"U"}),a.jsxs("div",{children:[a.jsx("span",{children:"Signed In As"}),a.jsxs("strong",{children:[t.firstName," ",t.lastName]}),a.jsx("p",{children:t.email})]})]})]}),(h||m)&&a.jsx("div",{className:`message ${m?"error":"success"}`,children:m||h}),a.jsx("section",{className:"profile-stats","aria-label":"Profile statistics",children:E.map((W,$)=>a.jsxs("div",{className:"stat-card",style:{animationDelay:`${$*90}ms`},children:[a.jsx("span",{children:W.label}),a.jsx("strong",{children:W.value})]},W.label))}),a.jsxs("section",{className:"profile-grid",children:[a.jsxs("article",{className:"panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Edit Profile"}),a.jsx("h2",{children:"Personal Details"})]}),a.jsxs("form",{onSubmit:_,children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"First Name"}),a.jsx("input",{type:"text",name:"firstName",value:s.firstName,onChange:C,required:!0})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Last Name"}),a.jsx("input",{type:"text",name:"lastName",value:s.lastName,onChange:C,required:!0})]})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Email Address"}),a.jsx("input",{type:"email",name:"email",value:s.email,onChange:C,required:!0})]}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"New Password"}),a.jsx("input",{type:"password",name:"password",placeholder:"Leave blank to keep current password",value:s.password,onChange:C})]}),a.jsx("button",{className:"button primary wide",type:"submit",disabled:c,children:c?"Saving Changes...":"Save Changes"})]})]}),a.jsxs("aside",{className:"panel summary-panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsx("span",{className:"eyebrow dark",children:"Account Summary"}),a.jsx("h2",{children:"Profile Preview"})]}),a.jsxs("div",{className:"preview-card",children:[a.jsx("div",{className:"avatar large",children:((Pe=(be=s.firstName)==null?void 0:be.charAt(0))==null?void 0:Pe.toUpperCase())||"U"}),a.jsx("span",{children:"Candidate"}),a.jsxs("strong",{children:[s.firstName||"First"," ",s.lastName||"Last"]}),a.jsx("p",{children:s.email||"email@example.com"})]}),a.jsxs("div",{className:"danger-zone",children:[a.jsx("span",{className:"eyebrow danger",children:"Danger Zone"}),a.jsx("h3",{children:"Delete Account"}),a.jsx("p",{children:"This permanently deletes your account and interview history."}),a.jsxs("label",{className:"field",children:[a.jsx("span",{children:"Type DELETE to confirm"}),a.jsx("input",{type:"text",value:b,onChange:W=>x(W.target.value),placeholder:"DELETE"})]}),a.jsx("button",{className:"button danger-button wide",onClick:P,disabled:b!=="DELETE"||d,children:d?"Deleting Account...":"Delete Account"})]})]})]}),v&&a.jsx("div",{className:"logout-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"logout-title",children:a.jsxs("div",{className:"logout-dialog",children:[a.jsx("span",{className:"eyebrow dark",children:"Confirm Logout"}),a.jsx("h2",{id:"logout-title",children:"Are you sure you want to logout?"}),a.jsx("p",{children:"Your current session will end and you will need to sign in again."}),a.jsxs("div",{className:"logout-actions",children:[a.jsx("button",{className:"button secondary",onClick:()=>y(!1),children:"Cancel"}),a.jsx("button",{className:"button danger-button",onClick:L,children:"Yes, Logout"})]})]})})]})}const fc=`
  .profile-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 12% 12%, rgba(20, 184, 166, 0.18), transparent 30%),
      radial-gradient(circle at 88% 8%, rgba(37, 99, 235, 0.17), transparent 28%),
      linear-gradient(180deg, #eef5ff 0%, #f8fafc 56%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .profile-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-nav,
  .profile-hero,
  .profile-stats,
  .profile-grid,
  .message {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 22px;
    padding: 18px 20px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .profile-nav h1 {
    margin: 8px 0 0;
    font-size: clamp(24px, 4vw, 34px);
  }

  .nav-actions {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 10px;
  }

  .profile-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 340px;
    gap: 22px;
    margin-bottom: 22px;
    padding: 34px;
    border-radius: 26px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 58%, #14b8a6 100%);
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.2);
    position: relative;
    overflow: hidden;
    animation: fadeUp 720ms 80ms ease both;
  }

  .profile-hero::after {
    content: "";
    position: absolute;
    width: 340px;
    height: 340px;
    right: -160px;
    top: -160px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .hero-copy,
  .identity-card {
    position: relative;
    z-index: 1;
  }

  .hero-copy h2 {
    max-width: 760px;
    margin: 16px 0 0;
    font-size: clamp(34px, 6vw, 58px);
    line-height: 1;
    letter-spacing: 0;
  }

  .hero-copy p {
    max-width: 660px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .identity-card {
    display: grid;
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 16px;
    align-self: center;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .identity-card span,
  .preview-card span,
  .stat-card span {
    display: block;
    margin-bottom: 7px;
    color: #64748b;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .identity-card span {
    color: rgba(255, 255, 255, 0.72);
  }

  .identity-card strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 18px;
  }

  .identity-card p {
    margin: 6px 0 0;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.72);
  }

  .avatar {
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background: #ffffff;
    color: #2563eb;
    font-size: 32px;
    font-weight: 900;
    animation: float 3s ease-in-out infinite;
  }

  .avatar.large {
    width: 92px;
    height: 92px;
    margin: 0 auto 18px;
    background: #e7f0ff;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .eyebrow.danger {
    background: #fee2e2;
    color: #b91c1c;
  }

  .profile-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 22px;
  }

  .stat-card,
  .panel {
    border: 1px solid rgba(148, 163, 184, 0.18);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms 120ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .stat-card {
    padding: 22px;
    border-radius: 18px;
  }

  .stat-card:hover,
  .panel:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .stat-card strong {
    display: block;
    font-size: 36px;
    line-height: 1;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
    gap: 20px;
  }

  .panel {
    padding: 28px;
    border-radius: 20px;
  }

  .panel-heading {
    margin-bottom: 22px;
  }

  .panel-heading h2 {
    margin: 14px 0 0;
    font-size: 28px;
    line-height: 1.1;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 900;
  }

  .field input {
    width: 100%;
    min-height: 52px;
    border: 1px solid #dbe3ef;
    border-radius: 14px;
    padding: 0 15px;
    color: #172033;
    background: #f8fafc;
    font-size: 15px;
    outline: none;
    transition: border 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .field input:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .preview-card {
    padding: 24px;
    border-radius: 18px;
    background: #f8fafc;
    text-align: center;
    animation: slideIn 520ms ease both;
  }

  .preview-card strong {
    display: block;
    overflow-wrap: anywhere;
    color: #172033;
    font-size: 20px;
  }

  .preview-card p {
    margin: 8px 0 0;
    overflow-wrap: anywhere;
    color: #64748b;
  }

  .danger-zone {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #fecaca;
    border-radius: 18px;
    background: #fff7f7;
  }

  .danger-zone h3 {
    margin: 14px 0 8px;
    color: #991b1b;
    font-size: 22px;
  }

  .danger-zone p {
    margin: 0 0 18px;
    color: #7f1d1d;
    line-height: 1.6;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
    animation: shakeIn 360ms ease both;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
  }

  .message.success {
    background: #dcfce7;
    color: #166534;
  }

  .logout-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(15, 23, 42, 0.56);
    backdrop-filter: blur(10px);
    animation: fadeIn 180ms ease both;
  }

  .logout-dialog {
    width: min(460px, 100%);
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.28);
    animation: modalPop 240ms ease both;
  }

  .logout-dialog h2 {
    margin: 16px 0 8px;
    color: #172033;
    font-size: 28px;
    line-height: 1.12;
  }

  .logout-dialog p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
  }

  .logout-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 24px;
  }

  .button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.62;
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .button.muted {
    background: #172033;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(23, 32, 51, 0.2);
  }

  .button.danger-button {
    background: #dc2626;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(220, 38, 38, 0.24);
  }

  .button.wide {
    width: 100%;
    min-height: 54px;
    margin-top: 8px;
    font-size: 16px;
  }

  .loading-card {
    padding: 34px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    text-align: center;
    animation: fadeUp 680ms ease both;
  }

  .loading-card h1 {
    margin: 18px 0 0;
    font-size: 28px;
  }

  .loading-orbit {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50%;
    border: 7px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 900ms linear infinite;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes modalPop {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-12px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes shakeIn {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.84;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 940px) {
    .profile-nav,
    .profile-hero,
    .profile-grid {
      grid-template-columns: 1fr;
    }

    .profile-nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-actions {
      width: 100%;
      justify-content: flex-start;
    }

    .profile-stats,
    .form-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .profile-page {
      padding: 12px;
    }

    .profile-hero,
    .panel,
    .profile-nav {
      padding: 20px;
      border-radius: 18px;
    }

    .identity-card {
      grid-template-columns: 1fr;
    }

    .nav-actions,
    .logout-actions,
    .button {
      width: 100%;
    }

    .logout-actions {
      flex-direction: column-reverse;
    }
  }
`;function By(){return a.jsx(Xg,{children:a.jsxs(Vg,{children:[a.jsx(ut,{path:"/home",element:a.jsx(n0,{})}),a.jsx(ut,{path:"/",element:a.jsx(Ax,{})}),a.jsx(ut,{path:"/signup",element:a.jsx(Ix,{})}),a.jsx(ut,{path:"/dashboard",element:a.jsx(Dx,{})}),a.jsx(ut,{path:"/profile",element:a.jsx(Dy,{})}),a.jsx(ut,{path:"/interview/:interviewId",element:a.jsx(Oy,{})}),a.jsx(ut,{path:"/history",element:a.jsx(Uy,{})}),a.jsx(ut,{path:"/report/:interviewId",element:a.jsx(Iy,{})})]})})}po.createRoot(document.getElementById("root")).render(a.jsx(Sc.StrictMode,{children:a.jsx(By,{})}));
