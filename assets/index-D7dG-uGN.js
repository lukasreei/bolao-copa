function V0(i,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in i)){const u=Object.getOwnPropertyDescriptor(s,a);u&&Object.defineProperty(i,a,u.get?u:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();function cy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $h={exports:{}},wa={},Hh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function L0(){if(Rm)return Se;Rm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function U(V,$,de){this.props=V,this.context=$,this.refs=G,this.updater=de||H}U.prototype.isReactComponent={},U.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ie(){}ie.prototype=U.prototype;function te(V,$,de){this.props=V,this.context=$,this.refs=G,this.updater=de||H}var se=te.prototype=new ie;se.constructor=te,B(se,U.prototype),se.isPureReactComponent=!0;var ce=Array.isArray,De=Object.prototype.hasOwnProperty,Te={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(V,$,de){var Ee,Ie={},Ae=null,Ve=null;if($!=null)for(Ee in $.ref!==void 0&&(Ve=$.ref),$.key!==void 0&&(Ae=""+$.key),$)De.call($,Ee)&&!O.hasOwnProperty(Ee)&&(Ie[Ee]=$[Ee]);var Le=arguments.length-2;if(Le===1)Ie.children=de;else if(1<Le){for(var Fe=Array(Le),ft=0;ft<Le;ft++)Fe[ft]=arguments[ft+2];Ie.children=Fe}if(V&&V.defaultProps)for(Ee in Le=V.defaultProps,Le)Ie[Ee]===void 0&&(Ie[Ee]=Le[Ee]);return{$$typeof:i,type:V,key:Ae,ref:Ve,props:Ie,_owner:Te.current}}function A(V,$){return{$$typeof:i,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function R(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(de){return $[de]})}var L=/\/+/g;function k(V,$){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):$.toString(36)}function et(V,$,de,Ee,Ie){var Ae=typeof V;(Ae==="undefined"||Ae==="boolean")&&(V=null);var Ve=!1;if(V===null)Ve=!0;else switch(Ae){case"string":case"number":Ve=!0;break;case"object":switch(V.$$typeof){case i:case e:Ve=!0}}if(Ve)return Ve=V,Ie=Ie(Ve),V=Ee===""?"."+k(Ve,0):Ee,ce(Ie)?(de="",V!=null&&(de=V.replace(L,"$&/")+"/"),et(Ie,$,de,"",function(ft){return ft})):Ie!=null&&(R(Ie)&&(Ie=A(Ie,de+(!Ie.key||Ve&&Ve.key===Ie.key?"":(""+Ie.key).replace(L,"$&/")+"/")+V)),$.push(Ie)),1;if(Ve=0,Ee=Ee===""?".":Ee+":",ce(V))for(var Le=0;Le<V.length;Le++){Ae=V[Le];var Fe=Ee+k(Ae,Le);Ve+=et(Ae,$,de,Fe,Ie)}else if(Fe=x(V),typeof Fe=="function")for(V=Fe.call(V),Le=0;!(Ae=V.next()).done;)Ae=Ae.value,Fe=Ee+k(Ae,Le++),Ve+=et(Ae,$,de,Fe,Ie);else if(Ae==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Ve}function Rt(V,$,de){if(V==null)return V;var Ee=[],Ie=0;return et(V,Ee,"","",function(Ae){return $.call(de,Ae,Ie++)}),Ee}function xt(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(de){(V._status===0||V._status===-1)&&(V._status=1,V._result=de)},function(de){(V._status===0||V._status===-1)&&(V._status=2,V._result=de)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var Me={current:null},ee={transition:null},fe={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Te};function re(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Rt,forEach:function(V,$,de){Rt(V,function(){$.apply(this,arguments)},de)},count:function(V){var $=0;return Rt(V,function(){$++}),$},toArray:function(V){return Rt(V,function($){return $})||[]},only:function(V){if(!R(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=U,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=te,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Se.act=re,Se.cloneElement=function(V,$,de){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=B({},V.props),Ie=V.key,Ae=V.ref,Ve=V._owner;if($!=null){if($.ref!==void 0&&(Ae=$.ref,Ve=Te.current),$.key!==void 0&&(Ie=""+$.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for(Fe in $)De.call($,Fe)&&!O.hasOwnProperty(Fe)&&(Ee[Fe]=$[Fe]===void 0&&Le!==void 0?Le[Fe]:$[Fe])}var Fe=arguments.length-2;if(Fe===1)Ee.children=de;else if(1<Fe){Le=Array(Fe);for(var ft=0;ft<Fe;ft++)Le[ft]=arguments[ft+2];Ee.children=Le}return{$$typeof:i,type:V.type,key:Ie,ref:Ae,props:Ee,_owner:Ve}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=S,Se.createFactory=function(V){var $=S.bind(null,V);return $.type=V,$},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=R,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:xt}},Se.memo=function(V,$){return{$$typeof:_,type:V,compare:$===void 0?null:$}},Se.startTransition=function(V){var $=ee.transition;ee.transition={};try{V()}finally{ee.transition=$}},Se.unstable_act=re,Se.useCallback=function(V,$){return Me.current.useCallback(V,$)},Se.useContext=function(V){return Me.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Me.current.useDeferredValue(V)},Se.useEffect=function(V,$){return Me.current.useEffect(V,$)},Se.useId=function(){return Me.current.useId()},Se.useImperativeHandle=function(V,$,de){return Me.current.useImperativeHandle(V,$,de)},Se.useInsertionEffect=function(V,$){return Me.current.useInsertionEffect(V,$)},Se.useLayoutEffect=function(V,$){return Me.current.useLayoutEffect(V,$)},Se.useMemo=function(V,$){return Me.current.useMemo(V,$)},Se.useReducer=function(V,$,de){return Me.current.useReducer(V,$,de)},Se.useRef=function(V){return Me.current.useRef(V)},Se.useState=function(V){return Me.current.useState(V)},Se.useSyncExternalStore=function(V,$,de){return Me.current.useSyncExternalStore(V,$,de)},Se.useTransition=function(){return Me.current.useTransition()},Se.version="18.3.1",Se}var xm;function Nd(){return xm||(xm=1,Hh.exports=L0()),Hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function b0(){if(Nm)return wa;Nm=1;var i=Nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},x=null,H=null;_!==void 0&&(x=""+_),g.key!==void 0&&(x=""+g.key),g.ref!==void 0&&(H=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:x,ref:H,props:T,_owner:a.current}}return wa.Fragment=t,wa.jsx=h,wa.jsxs=h,wa}var Om;function M0(){return Om||(Om=1,$h.exports=b0()),$h.exports}var C=M0(),X=Nd();const hy=cy(X),j0=V0({__proto__:null,default:hy},[X]);var vu={},Wh={exports:{}},Xt={},qh={exports:{}},Gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function F0(){return Dm||(Dm=1,(function(i){function e(ee,fe){var re=ee.length;ee.push(fe);e:for(;0<re;){var V=re-1>>>1,$=ee[V];if(0<a($,fe))ee[V]=fe,ee[re]=$,re=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var fe=ee[0],re=ee.pop();if(re!==fe){ee[0]=re;e:for(var V=0,$=ee.length,de=$>>>1;V<de;){var Ee=2*(V+1)-1,Ie=ee[Ee],Ae=Ee+1,Ve=ee[Ae];if(0>a(Ie,re))Ae<$&&0>a(Ve,Ie)?(ee[V]=Ve,ee[Ae]=re,V=Ae):(ee[V]=Ie,ee[Ee]=re,V=Ee);else if(Ae<$&&0>a(Ve,re))ee[V]=Ve,ee[Ae]=re,V=Ae;else break e}}return fe}function a(ee,fe){var re=ee.sortIndex-fe.sortIndex;return re!==0?re:ee.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,x=3,H=!1,B=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(ee){for(var fe=t(_);fe!==null;){if(fe.callback===null)s(_);else if(fe.startTime<=ee)s(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function ce(ee){if(G=!1,se(ee),!B)if(t(g)!==null)B=!0,xt(De);else{var fe=t(_);fe!==null&&Me(ce,fe.startTime-ee)}}function De(ee,fe){B=!1,G&&(G=!1,ie(S),S=-1),H=!0;var re=x;try{for(se(fe),T=t(g);T!==null&&(!(T.expirationTime>fe)||ee&&!D());){var V=T.callback;if(typeof V=="function"){T.callback=null,x=T.priorityLevel;var $=V(T.expirationTime<=fe);fe=i.unstable_now(),typeof $=="function"?T.callback=$:T===t(g)&&s(g),se(fe)}else s(g);T=t(g)}if(T!==null)var de=!0;else{var Ee=t(_);Ee!==null&&Me(ce,Ee.startTime-fe),de=!1}return de}finally{T=null,x=re,H=!1}}var Te=!1,O=null,S=-1,A=5,R=-1;function D(){return!(i.unstable_now()-R<A)}function L(){if(O!==null){var ee=i.unstable_now();R=ee;var fe=!0;try{fe=O(!0,ee)}finally{fe?k():(Te=!1,O=null)}}else Te=!1}var k;if(typeof te=="function")k=function(){te(L)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Rt=et.port2;et.port1.onmessage=L,k=function(){Rt.postMessage(null)}}else k=function(){U(L,0)};function xt(ee){O=ee,Te||(Te=!0,k())}function Me(ee,fe){S=U(function(){ee(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){B||H||(B=!0,xt(De))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(ee){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var re=x;x=fe;try{return ee()}finally{x=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,fe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var re=x;x=ee;try{return fe()}finally{x=re}},i.unstable_scheduleCallback=function(ee,fe,re){var V=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,ee){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=re+$,ee={id:w++,callback:fe,priorityLevel:ee,startTime:re,expirationTime:$,sortIndex:-1},re>V?(ee.sortIndex=re,e(_,ee),t(g)===null&&ee===t(_)&&(G?(ie(S),S=-1):G=!0,Me(ce,re-V))):(ee.sortIndex=$,e(g,ee),B||H||(B=!0,xt(De))),ee},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(ee){var fe=x;return function(){var re=x;x=fe;try{return ee.apply(this,arguments)}finally{x=re}}}})(Gh)),Gh}var Vm;function U0(){return Vm||(Vm=1,qh.exports=F0()),qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function z0(){if(Lm)return Xt;Lm=1;var i=Nd(),e=U0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function x(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function H(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,r,o,c){if(r===null||typeof r>"u"||H(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function G(n,r,o,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){U[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];U[r]=new G(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){U[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){U[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){U[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){U[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){U[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){U[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){U[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ie,te);U[r]=new G(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ie,te);U[r]=new G(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ie,te);U[r]=new G(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){U[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),U.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){U[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function se(n,r,o,c){var d=U.hasOwnProperty(r)?U[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(B(r,o,d,c)&&(o=null),c||d===null?x(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var ce=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,De=Symbol.for("react.element"),Te=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),ee=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var de=!1;function Ee(n,r){if(!n||de)return"";de=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{de=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function Ie(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case Te:return"Portal";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case L:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rt:return r=n.displayName||null,r!==null?r:Ae(n.type)||"Memo";case xt:r=n._payload,n=n._init;try{return Ae(n(r))}catch{}}return null}function Ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ft(n){var r=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function sr(n){n._valueTracker||(n._valueTracker=ft(n))}function us(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,r){var o=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function cs(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=Le(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ao(n,r){r=r.checked,r!=null&&se(n,"checked",r,!1)}function Po(n,r){Ao(n,r);var o=Le(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?hs(n,r.type,o):r.hasOwnProperty("defaultValue")&&hs(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function rl(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function hs(n,r,o){(r!=="number"||Vr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var or=Array.isArray;function ar(n,r,o,c){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Le(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ro(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ds(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(or(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Le(o)}}function fs(n,r){var o=Le(r.value),c=Le(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function xo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,No=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Lr(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ti=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(n){Ti.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),wi[r]=wi[n]})});function Oo(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||wi.hasOwnProperty(n)&&wi[n]?(""+r).trim():r+"px"}function Do(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Oo(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Vo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,r){if(r){if(Vo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function bo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function ps(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ms=null,ln=null,Bn=null;function gs(n){if(n=oa(n)){if(typeof ms!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Dl(r),ms(n.stateNode,n.type,r))}}function $n(n){ln?Bn?Bn.push(n):Bn=[n]:ln=n}function Mo(){if(ln){var n=ln,r=Bn;if(Bn=ln=null,gs(n),r)for(n=0;n<r.length;n++)gs(r[n])}}function Si(n,r){return n(r)}function jo(){}var ur=!1;function Fo(n,r,o){if(ur)return n(r,o);ur=!0;try{return Si(n,r,o)}finally{ur=!1,(ln!==null||Bn!==null)&&(jo(),Mo())}}function tt(n,r){var o=n.stateNode;if(o===null)return null;var c=Dl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ys=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){ys=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ys=!1}function Ci(n,r,o,c,d,p,v,I,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch(K){this.onError(K)}}var ki=!1,vs=null,wn=!1,Uo=null,yc={onError:function(n){ki=!0,vs=n}};function _s(n,r,o,c,d,p,v,I,P){ki=!1,vs=null,Ci.apply(yc,arguments)}function il(n,r,o,c,d,p,v,I,P){if(_s.apply(this,arguments),ki){if(ki){var F=vs;ki=!1,vs=null}else throw Error(t(198));wn||(wn=!0,Uo=F)}}function Tn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ai(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function sl(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return In(d),n;if(p===c)return In(d),r;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===o){v=!0,o=d,c=p;break}if(I===c){v=!0,c=d,o=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===o){v=!0,o=p,c=d;break}if(I===c){v=!0,c=p,o=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function zo(n){return n=sl(n),n!==null?Es(n):null}function Es(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Es(n);if(r!==null)return r;n=n.sibling}return null}var ws=e.unstable_scheduleCallback,Bo=e.unstable_cancelCallback,ol=e.unstable_shouldYield,vc=e.unstable_requestPaint,Ue=e.unstable_now,al=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,br=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,$o=e.unstable_LowPriority,ll=e.unstable_IdlePriority,Ri=null,en=null;function ul(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ri,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:hl,Ho=Math.log,cl=Math.LN2;function hl(n){return n>>>=0,n===0?32:31-(Ho(n)/cl|0)|0}var Ts=64,Is=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=o&268435455;if(v!==0){var I=v&~d;I!==0?c=Mr(I):(p&=v,p!==0&&(c=Mr(p)))}else v=o&~d,v!==0?c=Mr(v):p!==0&&(c=Mr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Ut(r),d=1<<o,c|=n[o],r&=~d;return c}function _c(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Ut(p),I=1<<v,P=d[v];P===-1?((I&o)===0||(I&c)!==0)&&(d[v]=_c(I,r)):P<=r&&(n.expiredLanes|=I),p&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ni(){var n=Ts;return Ts<<=1,(Ts&4194240)===0&&(Ts=64),n}function jr(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Fr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=o}function je(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Ut(o),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Ur(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Ut(o),d=1<<c;d&r|n[c]&r&&(n[c]|=r),o&=~d}}var ke=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var dl,Ss,fl,pl,ml,Wo=!1,Hn=[],Et=null,Sn=null,Cn=null,Br=new Map,cn=new Map,Wn=[],Ec="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(r.pointerId)}}function Ht(n,r,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=oa(r),r!==null&&Ss(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function wc(n,r,o,c,d){switch(r){case"focusin":return Et=Ht(Et,n,r,o,c,d),!0;case"dragenter":return Sn=Ht(Sn,n,r,o,c,d),!0;case"mouseover":return Cn=Ht(Cn,n,r,o,c,d),!0;case"pointerover":var p=d.pointerId;return Br.set(p,Ht(Br.get(p)||null,n,r,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,Ht(cn.get(p)||null,n,r,o,c,d)),!0}return!1}function yl(n){var r=bi(n.target);if(r!==null){var o=Tn(r);if(o!==null){if(r=o.tag,r===13){if(r=Ai(o),r!==null){n.blockedOn=r,ml(n.priority,function(){fl(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Cs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ii=c,o.target.dispatchEvent(c),Ii=null}else return r=oa(o),r!==null&&Ss(r),n.blockedOn=o,!1;r.shift()}return!0}function Oi(n,r,o){hr(n)&&o.delete(r)}function vl(){Wo=!1,Et!==null&&hr(Et)&&(Et=null),Sn!==null&&hr(Sn)&&(Sn=null),Cn!==null&&hr(Cn)&&(Cn=null),Br.forEach(Oi),cn.forEach(Oi)}function kn(n,r){n.blockedOn===r&&(n.blockedOn=null,Wo||(Wo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vl)))}function An(n){function r(d){return kn(d,n)}if(0<Hn.length){kn(Hn[0],n);for(var o=1;o<Hn.length;o++){var c=Hn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&kn(Et,n),Sn!==null&&kn(Sn,n),Cn!==null&&kn(Cn,n),Br.forEach(r),cn.forEach(r),o=0;o<Wn.length;o++)c=Wn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Wn.length&&(o=Wn[0],o.blockedOn===null);)yl(o),o.blockedOn===null&&Wn.shift()}var dr=ce.ReactCurrentBatchConfig,$r=!0;function We(n,r,o,c){var d=ke,p=dr.transition;dr.transition=null;try{ke=1,qo(n,r,o,c)}finally{ke=d,dr.transition=p}}function Tc(n,r,o,c){var d=ke,p=dr.transition;dr.transition=null;try{ke=4,qo(n,r,o,c)}finally{ke=d,dr.transition=p}}function qo(n,r,o,c){if($r){var d=Cs(n,r,o,c);if(d===null)Dc(n,r,c,Di,o),gl(n,c);else if(wc(d,n,r,o,c))c.stopPropagation();else if(gl(n,c),r&4&&-1<Ec.indexOf(n)){for(;d!==null;){var p=oa(d);if(p!==null&&dl(p),p=Cs(n,r,o,c),p===null&&Dc(n,r,c,Di,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else Dc(n,r,c,null,o)}}var Di=null;function Cs(n,r,o,c){if(Di=null,n=ps(c),n=bi(n),n!==null)if(r=Tn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ai(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Di=n,null}function Go(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(al()){case Pi:return 1;case br:return 4;case un:case $o:return 16;case ll:return 536870912;default:return 16}default:return 16}}var nn=null,ks=null,Wt=null;function Ko(){if(Wt)return Wt;var n,r=ks,o=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<o&&r[n]===d[n];n++);var v=o-n;for(c=1;c<=v&&r[o-c]===d[p-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function As(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function Qo(){return!1}function wt(n){function r(o,c,d,p,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?qn:Qo,this.isPropagationStopped=Qo,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=wt(Pn),Gn=re({},Pn,{view:0,detail:0}),Ic=wt(Gn),Rs,fr,Hr,Vi=re({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hr&&(Hr&&n.type==="mousemove"?(Rs=n.screenX-Hr.screenX,fr=n.screenY-Hr.screenY):fr=Rs=0,Hr=n),Rs)},movementY:function(n){return"movementY"in n?n.movementY:fr}}),xs=wt(Vi),Jo=re({},Vi,{dataTransfer:0}),_l=wt(Jo),Ns=re({},Gn,{relatedTarget:0}),Os=wt(Ns),El=re({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=wt(El),wl=re({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tl=wt(wl),Il=re({},Pn,{data:0}),Xo=wt(Il),Ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Sl[n])?!!r[n]:!1}function Kn(){return Cl}var l=re({},Gn,{key:function(n){if(n.key){var r=Ds[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=As(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?As(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?As(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=wt(l),y=re({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=wt(y),b=re({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),z=wt(b),Z=re({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=wt(Z),ct=re({},Vi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pe=wt(ct),pt=[9,13,27,32],it=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var rn=m&&"TextEvent"in window&&!hn,Li=m&&(!it||hn&&8<hn&&11>=hn),Vs=" ",If=!1;function Sf(n,r){switch(n){case"keyup":return pt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function N_(n,r){switch(n){case"compositionend":return Cf(r);case"keypress":return r.which!==32?null:(If=!0,Vs);case"textInput":return n=r.data,n===Vs&&If?null:n;default:return null}}function O_(n,r){if(Ls)return n==="compositionend"||!it&&Sf(n,r)?(n=Ko(),Wt=ks=nn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Li&&r.locale!=="ko"?null:r.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!D_[n.type]:r==="textarea"}function Af(n,r,o,c){$n(c),r=xl(r,"onChange"),0<r.length&&(o=new Ps("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Yo=null,Zo=null;function V_(n){Wf(n,0)}function kl(n){var r=Us(n);if(us(r))return n}function L_(n,r){if(n==="change")return r}var Pf=!1;if(m){var Sc;if(m){var Cc="oninput"in document;if(!Cc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Cc=typeof Rf.oninput=="function"}Sc=Cc}else Sc=!1;Pf=Sc&&(!document.documentMode||9<document.documentMode)}function xf(){Yo&&(Yo.detachEvent("onpropertychange",Nf),Zo=Yo=null)}function Nf(n){if(n.propertyName==="value"&&kl(Zo)){var r=[];Af(r,Zo,n,ps(n)),Fo(V_,r)}}function b_(n,r,o){n==="focusin"?(xf(),Yo=r,Zo=o,Yo.attachEvent("onpropertychange",Nf)):n==="focusout"&&xf()}function M_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(Zo)}function j_(n,r){if(n==="click")return kl(r)}function F_(n,r){if(n==="input"||n==="change")return kl(r)}function U_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Rn=typeof Object.is=="function"?Object.is:U_;function ea(n,r){if(Rn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!g.call(r,d)||!Rn(n[d],r[d]))return!1}return!0}function Of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,r){var o=Of(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Of(o)}}function Vf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Lf(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Vr(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function z_(n){var r=Lf(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Vf(o.ownerDocument.documentElement,o)){if(c!==null&&kc(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Df(o,p);var v=Df(o,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var B_=m&&"documentMode"in document&&11>=document.documentMode,bs=null,Ac=null,ta=null,Pc=!1;function bf(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pc||bs==null||bs!==Vr(c)||(c=bs,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ta&&ea(ta,c)||(ta=c,c=xl(Ac,"onSelect"),0<c.length&&(r=new Ps("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=bs)))}function Al(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},Rc={},Mf={};m&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Pl(n){if(Rc[n])return Rc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Mf)return Rc[n]=r[o];return n}var jf=Pl("animationend"),Ff=Pl("animationiteration"),Uf=Pl("animationstart"),zf=Pl("transitionend"),Bf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,r){Bf.set(n,r),u(r,[n])}for(var xc=0;xc<$f.length;xc++){var Nc=$f[xc],$_=Nc.toLowerCase(),H_=Nc[0].toUpperCase()+Nc.slice(1);Wr($_,"on"+H_)}Wr(jf,"onAnimationEnd"),Wr(Ff,"onAnimationIteration"),Wr(Uf,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(zf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Hf(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,il(c,r,void 0,n),n.currentTarget=null}function Wf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;Hf(d,I,F),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,F=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;Hf(d,I,F),p=P}}}if(wn)throw n=Uo,wn=!1,Uo=null,n}function $e(n,r){var o=r[Fc];o===void 0&&(o=r[Fc]=new Set);var c=n+"__bubble";o.has(c)||(qf(r,n,2,!1),o.add(c))}function Oc(n,r,o){var c=0;r&&(c|=4),qf(o,n,c,r)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[Rl]){n[Rl]=!0,s.forEach(function(o){o!=="selectionchange"&&(W_.has(o)||Oc(o,!1,n),Oc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Rl]||(r[Rl]=!0,Oc("selectionchange",!1,r))}}function qf(n,r,o,c){switch(Go(r)){case 1:var d=We;break;case 4:d=Tc;break;default:d=qo}o=d.bind(null,r,o,n),d=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function Dc(n,r,o,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=bi(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Fo(function(){var F=p,K=ps(o),Q=[];e:{var q=Bf.get(n);if(q!==void 0){var ne=Ps,ae=n;switch(n){case"keypress":if(As(o)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":ae="focus",ne=Os;break;case"focusout":ae="blur",ne=Os;break;case"beforeblur":case"afterblur":ne=Os;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=_l;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=z;break;case jf:case Ff:case Uf:ne=pr;break;case zf:ne=be;break;case"scroll":ne=Ic;break;case"wheel":ne=Pe;break;case"copy":case"cut":case"paste":ne=Tl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var le=(r&4)!==0,nt=!le&&n==="scroll",M=le?q!==null?q+"Capture":null:q;le=[];for(var N=F,j;N!==null;){j=N;var Y=j.stateNode;if(j.tag===5&&Y!==null&&(j=Y,M!==null&&(Y=tt(N,M),Y!=null&&le.push(ia(N,Y,j)))),nt)break;N=N.return}0<le.length&&(q=new ne(q,ae,null,o,K),Q.push({event:q,listeners:le}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",q&&o!==Ii&&(ae=o.relatedTarget||o.fromElement)&&(bi(ae)||ae[mr]))break e;if((ne||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,ne?(ae=o.relatedTarget||o.toElement,ne=F,ae=ae?bi(ae):null,ae!==null&&(nt=Tn(ae),ae!==nt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=F),ne!==ae)){if(le=xs,Y="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,Y="onPointerLeave",M="onPointerEnter",N="pointer"),nt=ne==null?q:Us(ne),j=ae==null?q:Us(ae),q=new le(Y,N+"leave",ne,o,K),q.target=nt,q.relatedTarget=j,Y=null,bi(K)===F&&(le=new le(M,N+"enter",ae,o,K),le.target=j,le.relatedTarget=nt,Y=le),nt=Y,ne&&ae)t:{for(le=ne,M=ae,N=0,j=le;j;j=js(j))N++;for(j=0,Y=M;Y;Y=js(Y))j++;for(;0<N-j;)le=js(le),N--;for(;0<j-N;)M=js(M),j--;for(;N--;){if(le===M||M!==null&&le===M.alternate)break t;le=js(le),M=js(M)}le=null}else le=null;ne!==null&&Gf(Q,q,ne,le,!1),ae!==null&&nt!==null&&Gf(Q,nt,ae,le,!0)}}e:{if(q=F?Us(F):window,ne=q.nodeName&&q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&q.type==="file")var he=L_;else if(kf(q))if(Pf)he=F_;else{he=M_;var pe=b_}else(ne=q.nodeName)&&ne.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(he=j_);if(he&&(he=he(n,F))){Af(Q,he,o,K);break e}pe&&pe(n,q,F),n==="focusout"&&(pe=q._wrapperState)&&pe.controlled&&q.type==="number"&&hs(q,"number",q.value)}switch(pe=F?Us(F):window,n){case"focusin":(kf(pe)||pe.contentEditable==="true")&&(bs=pe,Ac=F,ta=null);break;case"focusout":ta=Ac=bs=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,bf(Q,o,K);break;case"selectionchange":if(B_)break;case"keydown":case"keyup":bf(Q,o,K)}var me;if(it)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ls?Sf(n,o)&&(ve="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(Li&&o.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(me=Ko()):(nn=K,ks="value"in nn?nn.value:nn.textContent,Ls=!0)),pe=xl(F,ve),0<pe.length&&(ve=new Xo(ve,n,null,o,K),Q.push({event:ve,listeners:pe}),me?ve.data=me:(me=Cf(o),me!==null&&(ve.data=me)))),(me=rn?N_(n,o):O_(n,o))&&(F=xl(F,"onBeforeInput"),0<F.length&&(K=new Xo("onBeforeInput","beforeinput",null,o,K),Q.push({event:K,listeners:F}),K.data=me))}Wf(Q,r)})}function ia(n,r,o){return{instance:n,listener:r,currentTarget:o}}function xl(n,r){for(var o=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,o),p!=null&&c.unshift(ia(n,p,d)),p=tt(n,r),p!=null&&c.push(ia(n,p,d))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gf(n,r,o,c,d){for(var p=r._reactName,v=[];o!==null&&o!==c;){var I=o,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,d?(P=tt(o,p),P!=null&&v.unshift(ia(o,P,I))):d||(P=tt(o,p),P!=null&&v.push(ia(o,P,I)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var q_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function Kf(n){return(typeof n=="string"?n:""+n).replace(q_,`
`).replace(G_,"")}function Nl(n,r,o){if(r=Kf(r),Kf(n)!==r&&o)throw Error(t(425))}function Ol(){}var Vc=null,Lc=null;function bc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,K_=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(n){return Qf.resolve(null).then(n).catch(J_)}:Mc;function J_(n){setTimeout(function(){throw n})}function jc(n,r){var o=r,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),An(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);An(r)}function qr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Jf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Fs,sa="__reactProps$"+Fs,mr="__reactContainer$"+Fs,Fc="__reactEvents$"+Fs,X_="__reactListeners$"+Fs,Y_="__reactHandles$"+Fs;function bi(n){var r=n[Qn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[mr]||o[Qn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Jf(n);n!==null;){if(o=n[Qn])return o;n=Jf(n)}return r}n=o,o=n.parentNode}return null}function oa(n){return n=n[Qn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Dl(n){return n[sa]||null}var Uc=[],zs=-1;function Gr(n){return{current:n}}function He(n){0>zs||(n.current=Uc[zs],Uc[zs]=null,zs--)}function ze(n,r){zs++,Uc[zs]=n.current,n.current=r}var Kr={},Nt=Gr(Kr),qt=Gr(!1),Mi=Kr;function Bs(n,r){var o=n.type.contextTypes;if(!o)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Vl(){He(qt),He(Nt)}function Xf(n,r,o){if(Nt.current!==Kr)throw Error(t(168));ze(Nt,r),ze(qt,o)}function Yf(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Ve(n)||"Unknown",d));return re({},o,c)}function Ll(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Mi=Nt.current,ze(Nt,n),ze(qt,qt.current),!0}function Zf(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Yf(n,r,Mi),c.__reactInternalMemoizedMergedChildContext=n,He(qt),He(Nt),ze(Nt,n)):He(qt),ze(qt,o)}var gr=null,bl=!1,zc=!1;function ep(n){gr===null?gr=[n]:gr.push(n)}function Z_(n){bl=!0,ep(n)}function Qr(){if(!zc&&gr!==null){zc=!0;var n=0,r=ke;try{var o=gr;for(ke=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}gr=null,bl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),ws(Pi,Qr),d}finally{ke=r,zc=!1}}return null}var $s=[],Hs=0,Ml=null,jl=0,dn=[],fn=0,ji=null,yr=1,vr="";function Fi(n,r){$s[Hs++]=jl,$s[Hs++]=Ml,Ml=n,jl=r}function tp(n,r,o){dn[fn++]=yr,dn[fn++]=vr,dn[fn++]=ji,ji=n;var c=yr;n=vr;var d=32-Ut(c)-1;c&=~(1<<d),o+=1;var p=32-Ut(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-Ut(r)+d|o<<d|c,vr=p+n}else yr=1<<p|o<<d|c,vr=n}function Bc(n){n.return!==null&&(Fi(n,1),tp(n,1,0))}function $c(n){for(;n===Ml;)Ml=$s[--Hs],$s[Hs]=null,jl=$s[--Hs],$s[Hs]=null;for(;n===ji;)ji=dn[--fn],dn[fn]=null,vr=dn[--fn],dn[fn]=null,yr=dn[--fn],dn[fn]=null}var sn=null,on=null,qe=!1,xn=null;function np(n,r){var o=yn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function rp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=qr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ji!==null?{id:yr,overflow:vr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=yn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,sn=n,on=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(qe){var r=on;if(r){var o=r;if(!rp(n,r)){if(Hc(n))throw Error(t(418));r=qr(o.nextSibling);var c=sn;r&&rp(n,r)?np(c,o):(n.flags=n.flags&-4097|2,qe=!1,sn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qe=!1,sn=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Fl(n){if(n!==sn)return!1;if(!qe)return ip(n),qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!bc(n.type,n.memoizedProps)),r&&(r=on)){if(Hc(n))throw sp(),Error(t(418));for(;r;)np(n,r),r=qr(r.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){on=qr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?qr(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=on;n;)n=qr(n.nextSibling)}function Ws(){on=sn=null,qe=!1}function qc(n){xn===null?xn=[n]:xn.push(n)}var e0=ce.ReactCurrentBatchConfig;function aa(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function op(n){var r=n._init;return r(n._payload)}function ap(n){function r(M,N){if(n){var j=M.deletions;j===null?(M.deletions=[N],M.flags|=16):j.push(N)}}function o(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ri(M,N),M.index=0,M.sibling=null,M}function p(M,N,j){return M.index=j,n?(j=M.alternate,j!==null?(j=j.index,j<N?(M.flags|=2,N):j):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,N,j,Y){return N===null||N.tag!==6?(N=Mh(j,M.mode,Y),N.return=M,N):(N=d(N,j),N.return=M,N)}function P(M,N,j,Y){var he=j.type;return he===O?K(M,N,j.props.children,Y,j.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&op(he)===N.type)?(Y=d(N,j.props),Y.ref=aa(M,N,j),Y.return=M,Y):(Y=cu(j.type,j.key,j.props,null,M.mode,Y),Y.ref=aa(M,N,j),Y.return=M,Y)}function F(M,N,j,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=jh(j,M.mode,Y),N.return=M,N):(N=d(N,j.children||[]),N.return=M,N)}function K(M,N,j,Y,he){return N===null||N.tag!==7?(N=Gi(j,M.mode,Y,he),N.return=M,N):(N=d(N,j),N.return=M,N)}function Q(M,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Mh(""+N,M.mode,j),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case De:return j=cu(N.type,N.key,N.props,null,M.mode,j),j.ref=aa(M,null,N),j.return=M,j;case Te:return N=jh(N,M.mode,j),N.return=M,N;case xt:var Y=N._init;return Q(M,Y(N._payload),j)}if(or(N)||fe(N))return N=Gi(N,M.mode,j,null),N.return=M,N;Ul(M,N)}return null}function q(M,N,j,Y){var he=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:I(M,N,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case De:return j.key===he?P(M,N,j,Y):null;case Te:return j.key===he?F(M,N,j,Y):null;case xt:return he=j._init,q(M,N,he(j._payload),Y)}if(or(j)||fe(j))return he!==null?null:K(M,N,j,Y,null);Ul(M,j)}return null}function ne(M,N,j,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(j)||null,I(N,M,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case De:return M=M.get(Y.key===null?j:Y.key)||null,P(N,M,Y,he);case Te:return M=M.get(Y.key===null?j:Y.key)||null,F(N,M,Y,he);case xt:var pe=Y._init;return ne(M,N,j,pe(Y._payload),he)}if(or(Y)||fe(Y))return M=M.get(j)||null,K(N,M,Y,he,null);Ul(N,Y)}return null}function ae(M,N,j,Y){for(var he=null,pe=null,me=N,ve=N=0,yt=null;me!==null&&ve<j.length;ve++){me.index>ve?(yt=me,me=null):yt=me.sibling;var Oe=q(M,me,j[ve],Y);if(Oe===null){me===null&&(me=yt);break}n&&me&&Oe.alternate===null&&r(M,me),N=p(Oe,N,ve),pe===null?he=Oe:pe.sibling=Oe,pe=Oe,me=yt}if(ve===j.length)return o(M,me),qe&&Fi(M,ve),he;if(me===null){for(;ve<j.length;ve++)me=Q(M,j[ve],Y),me!==null&&(N=p(me,N,ve),pe===null?he=me:pe.sibling=me,pe=me);return qe&&Fi(M,ve),he}for(me=c(M,me);ve<j.length;ve++)yt=ne(me,M,ve,j[ve],Y),yt!==null&&(n&&yt.alternate!==null&&me.delete(yt.key===null?ve:yt.key),N=p(yt,N,ve),pe===null?he=yt:pe.sibling=yt,pe=yt);return n&&me.forEach(function(ii){return r(M,ii)}),qe&&Fi(M,ve),he}function le(M,N,j,Y){var he=fe(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var pe=he=null,me=N,ve=N=0,yt=null,Oe=j.next();me!==null&&!Oe.done;ve++,Oe=j.next()){me.index>ve?(yt=me,me=null):yt=me.sibling;var ii=q(M,me,Oe.value,Y);if(ii===null){me===null&&(me=yt);break}n&&me&&ii.alternate===null&&r(M,me),N=p(ii,N,ve),pe===null?he=ii:pe.sibling=ii,pe=ii,me=yt}if(Oe.done)return o(M,me),qe&&Fi(M,ve),he;if(me===null){for(;!Oe.done;ve++,Oe=j.next())Oe=Q(M,Oe.value,Y),Oe!==null&&(N=p(Oe,N,ve),pe===null?he=Oe:pe.sibling=Oe,pe=Oe);return qe&&Fi(M,ve),he}for(me=c(M,me);!Oe.done;ve++,Oe=j.next())Oe=ne(me,M,ve,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&me.delete(Oe.key===null?ve:Oe.key),N=p(Oe,N,ve),pe===null?he=Oe:pe.sibling=Oe,pe=Oe);return n&&me.forEach(function(D0){return r(M,D0)}),qe&&Fi(M,ve),he}function nt(M,N,j,Y){if(typeof j=="object"&&j!==null&&j.type===O&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case De:e:{for(var he=j.key,pe=N;pe!==null;){if(pe.key===he){if(he=j.type,he===O){if(pe.tag===7){o(M,pe.sibling),N=d(pe,j.props.children),N.return=M,M=N;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&op(he)===pe.type){o(M,pe.sibling),N=d(pe,j.props),N.ref=aa(M,pe,j),N.return=M,M=N;break e}o(M,pe);break}else r(M,pe);pe=pe.sibling}j.type===O?(N=Gi(j.props.children,M.mode,Y,j.key),N.return=M,M=N):(Y=cu(j.type,j.key,j.props,null,M.mode,Y),Y.ref=aa(M,N,j),Y.return=M,M=Y)}return v(M);case Te:e:{for(pe=j.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){o(M,N.sibling),N=d(N,j.children||[]),N.return=M,M=N;break e}else{o(M,N);break}else r(M,N);N=N.sibling}N=jh(j,M.mode,Y),N.return=M,M=N}return v(M);case xt:return pe=j._init,nt(M,N,pe(j._payload),Y)}if(or(j))return ae(M,N,j,Y);if(fe(j))return le(M,N,j,Y);Ul(M,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(o(M,N.sibling),N=d(N,j),N.return=M,M=N):(o(M,N),N=Mh(j,M.mode,Y),N.return=M,M=N),v(M)):o(M,N)}return nt}var qs=ap(!0),lp=ap(!1),zl=Gr(null),Bl=null,Gs=null,Gc=null;function Kc(){Gc=Gs=Bl=null}function Qc(n){var r=zl.current;He(zl),n._currentValue=r}function Jc(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Ks(n,r){Bl=n,Gc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(Bl===null)throw Error(t(308));Gs=n,Bl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var Ui=null;function Xc(n){Ui===null?Ui=[n]:Ui.push(n)}function up(n,r,o,c){var d=r.interleaved;return d===null?(o.next=o,Xc(r)):(o.next=d.next,d.next=o),r.interleaved=o,_r(n,c)}function _r(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Jr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Xr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,_r(n,o)}return d=c.interleaved,d===null?(r.next=r,Xc(c)):(r.next=d.next,d.next=r),c.interleaved=r,_r(n,o)}function $l(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Ur(n,o)}}function hp(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Hl(n,r,o,c){var d=n.updateQueue;Jr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=P))}if(p!==null){var Q=d.baseState;v=0,K=F=P=null,I=p;do{var q=I.lane,ne=I.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=n,le=I;switch(q=r,ne=o,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Q=ae.call(ne,Q,q);break e}Q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,q=typeof ae=="function"?ae.call(ne,Q,q):ae,q==null)break e;Q=re({},Q,q);break e;case 2:Jr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ne={eventTime:ne,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=ne,P=Q):K=K.next=ne,v|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);$i|=v,n.lanes=v,n.memoizedState=Q}}function dp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var la={},Jn=Gr(la),ua=Gr(la),ca=Gr(la);function zi(n){if(n===la)throw Error(t(174));return n}function Zc(n,r){switch(ze(ca,r),ze(ua,n),ze(Jn,la),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}He(Jn),ze(Jn,r)}function Qs(){He(Jn),He(ua),He(ca)}function fp(n){zi(ca.current);var r=zi(Jn.current),o=ut(r,n.type);r!==o&&(ze(ua,n),ze(Jn,o))}function eh(n){ua.current===n&&(He(Jn),He(ua))}var Qe=Gr(0);function Wl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var th=[];function nh(){for(var n=0;n<th.length;n++)th[n]._workInProgressVersionPrimary=null;th.length=0}var ql=ce.ReactCurrentDispatcher,rh=ce.ReactCurrentBatchConfig,Bi=0,Je=null,ht=null,mt=null,Gl=!1,ha=!1,da=0,t0=0;function Ot(){throw Error(t(321))}function ih(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Rn(n[o],r[o]))return!1;return!0}function sh(n,r,o,c,d,p){if(Bi=p,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ql.current=n===null||n.memoizedState===null?s0:o0,n=o(c,d),ha){p=0;do{if(ha=!1,da=0,25<=p)throw Error(t(301));p+=1,mt=ht=null,r.updateQueue=null,ql.current=a0,n=o(c,d)}while(ha)}if(ql.current=Jl,r=ht!==null&&ht.next!==null,Bi=0,mt=ht=Je=null,Gl=!1,r)throw Error(t(300));return n}function oh(){var n=da!==0;return da=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Je.memoizedState=mt=n:mt=mt.next=n,mt}function mn(){if(ht===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=mt===null?Je.memoizedState:mt.next;if(r!==null)mt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},mt===null?Je.memoizedState=mt=n:mt=mt.next=n}return mt}function fa(n,r){return typeof r=="function"?r(n):r}function ah(n){var r=mn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,F=p;do{var K=F.lane;if((Bi&K)===K)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=Q,v=c):P=P.next=Q,Je.lanes|=K,$i|=K}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=I,Rn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Je.lanes|=p,$i|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function lh(n){var r=mn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Rn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,c]}function pp(){}function mp(n,r){var o=Je,c=mn(),d=r(),p=!Rn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,uh(vp.bind(null,o,c,n),[n]),c.getSnapshot!==r||p||mt!==null&&mt.memoizedState.tag&1){if(o.flags|=2048,pa(9,yp.bind(null,o,c,d,r),void 0,null),gt===null)throw Error(t(349));(Bi&30)!==0||gp(o,r,d)}return d}function gp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function yp(n,r,o,c){r.value=o,r.getSnapshot=c,_p(r)&&Ep(n)}function vp(n,r,o){return o(function(){_p(r)&&Ep(n)})}function _p(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Rn(n,o)}catch{return!0}}function Ep(n){var r=_r(n,1);r!==null&&Vn(r,n,1,-1)}function wp(n){var r=Xn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},r.queue=n,n=n.dispatch=i0.bind(null,Je,n),[r.memoizedState,n]}function pa(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function Tp(){return mn().memoizedState}function Kl(n,r,o,c){var d=Xn();Je.flags|=n,d.memoizedState=pa(1|r,o,void 0,c===void 0?null:c)}function Ql(n,r,o,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var v=ht.memoizedState;if(p=v.destroy,c!==null&&ih(c,v.deps)){d.memoizedState=pa(r,o,p,c);return}}Je.flags|=n,d.memoizedState=pa(1|r,o,p,c)}function Ip(n,r){return Kl(8390656,8,n,r)}function uh(n,r){return Ql(2048,8,n,r)}function Sp(n,r){return Ql(4,2,n,r)}function Cp(n,r){return Ql(4,4,n,r)}function kp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ap(n,r,o){return o=o!=null?o.concat([n]):null,Ql(4,4,kp.bind(null,r,n),o)}function ch(){}function Pp(n,r){var o=mn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&ih(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function Rp(n,r){var o=mn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&ih(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function xp(n,r,o){return(Bi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=o):(Rn(o,r)||(o=Ni(),Je.lanes|=o,$i|=o,n.baseState=!0),r)}function n0(n,r){var o=ke;ke=o!==0&&4>o?o:4,n(!0);var c=rh.transition;rh.transition={};try{n(!1),r()}finally{ke=o,rh.transition=c}}function Np(){return mn().memoizedState}function r0(n,r,o){var c=ti(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Op(n))Dp(r,o);else if(o=up(n,r,o,c),o!==null){var d=$t();Vn(o,n,c,d),Vp(o,r,c)}}function i0(n,r,o){var c=ti(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Op(n))Dp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,o);if(d.hasEagerState=!0,d.eagerState=I,Rn(I,v)){var P=r.interleaved;P===null?(d.next=d,Xc(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}o=up(n,r,d,c),o!==null&&(d=$t(),Vn(o,n,c,d),Vp(o,r,c))}}function Op(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function Dp(n,r){ha=Gl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Vp(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Ur(n,o)}}var Jl={readContext:pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},s0={readContext:pn,useCallback:function(n,r){return Xn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:Ip,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Kl(4194308,4,kp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Kl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Kl(4,2,n,r)},useMemo:function(n,r){var o=Xn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=Xn();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=r0.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Xn();return n={current:n},r.memoizedState=n},useState:wp,useDebugValue:ch,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=wp(!1),r=n[0];return n=n0.bind(null,n[1]),Xn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Je,d=Xn();if(qe){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),gt===null)throw Error(t(349));(Bi&30)!==0||gp(c,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,Ip(vp.bind(null,c,p,n),[n]),c.flags|=2048,pa(9,yp.bind(null,c,p,o,r),void 0,null),o},useId:function(){var n=Xn(),r=gt.identifierPrefix;if(qe){var o=vr,c=yr;o=(c&~(1<<32-Ut(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=da++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=t0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},o0={readContext:pn,useCallback:Pp,useContext:pn,useEffect:uh,useImperativeHandle:Ap,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Rp,useReducer:ah,useRef:Tp,useState:function(){return ah(fa)},useDebugValue:ch,useDeferredValue:function(n){var r=mn();return xp(r,ht.memoizedState,n)},useTransition:function(){var n=ah(fa)[0],r=mn().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Np,unstable_isNewReconciler:!1},a0={readContext:pn,useCallback:Pp,useContext:pn,useEffect:uh,useImperativeHandle:Ap,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Rp,useReducer:lh,useRef:Tp,useState:function(){return lh(fa)},useDebugValue:ch,useDeferredValue:function(n){var r=mn();return ht===null?r.memoizedState=n:xp(r,ht.memoizedState,n)},useTransition:function(){var n=lh(fa)[0],r=mn().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Np,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function hh(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:re({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xl={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=$t(),d=ti(n),p=Er(c,d);p.payload=r,o!=null&&(p.callback=o),r=Xr(n,p,d),r!==null&&(Vn(r,n,d,c),$l(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=$t(),d=ti(n),p=Er(c,d);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Xr(n,p,d),r!==null&&(Vn(r,n,d,c),$l(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=$t(),c=ti(n),d=Er(o,c);d.tag=2,r!=null&&(d.callback=r),r=Xr(n,d,c),r!==null&&(Vn(r,n,c,o),$l(r,n,c))}};function Lp(n,r,o,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ea(o,c)||!ea(d,p):!0}function bp(n,r,o){var c=!1,d=Kr,p=r.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Gt(r)?Mi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Bs(n,d):Kr),r=new r(o,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Mp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function dh(n,r,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Yc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Gt(r)?Mi:Nt.current,d.context=Bs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(hh(n,r,p,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),Hl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,r){try{var o="",c=r;do o+=Ie(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function fh(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function ph(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var l0=typeof WeakMap=="function"?WeakMap:Map;function jp(n,r,o){o=Er(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){iu||(iu=!0,Rh=c),ph(n,r)},o}function Fp(n,r,o){o=Er(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;o.payload=function(){return c(d)},o.callback=function(){ph(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ph(n,r),typeof c!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function Up(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new l0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(d.add(o),n=T0.bind(null,n,r,o),r.then(n,n))}function zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Bp(n,r,o,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Er(-1,1),r.tag=2,Xr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var u0=ce.ReactCurrentOwner,Kt=!1;function Bt(n,r,o,c){r.child=n===null?lp(r,null,o,c):qs(r,n.child,o,c)}function $p(n,r,o,c,d){o=o.render;var p=r.ref;return Ks(r,d),c=sh(n,r,o,c,p,d),o=oh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(qe&&o&&Bc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Hp(n,r,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!bh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,Wp(n,r,p,c,d)):(n=cu(o.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:ea,o(v,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ri(p,c),n.ref=r.ref,n.return=r,r.child=n}function Wp(n,r,o,c,d){if(n!==null){var p=n.memoizedProps;if(ea(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return mh(n,r,o,c,d)}function qp(n,r,o){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(Ys,an),an|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,ze(Ys,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,ze(Ys,an),an|=c}else p!==null?(c=p.baseLanes|o,r.memoizedState=null):c=o,ze(Ys,an),an|=c;return Bt(n,r,d,o),r.child}function Gp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function mh(n,r,o,c,d){var p=Gt(o)?Mi:Nt.current;return p=Bs(r,p),Ks(r,d),o=sh(n,r,o,c,p,d),c=oh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(qe&&c&&Bc(r),r.flags|=1,Bt(n,r,o,d),r.child)}function Kp(n,r,o,c,d){if(Gt(o)){var p=!0;Ll(r)}else p=!1;if(Ks(r,d),r.stateNode===null)Zl(n,r),bp(r,o,c),dh(r,o,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var P=v.context,F=o.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Gt(o)?Mi:Nt.current,F=Bs(r,F));var K=o.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==F)&&Mp(r,v,c,F),Jr=!1;var q=r.memoizedState;v.state=q,Hl(r,c,v,d),P=r.memoizedState,I!==c||q!==P||qt.current||Jr?(typeof K=="function"&&(hh(r,o,K,c),P=r.memoizedState),(I=Jr||Lp(r,o,I,c,q,P,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,cp(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:Nn(r.type,I),v.props=F,Q=r.pendingProps,q=v.context,P=o.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Gt(o)?Mi:Nt.current,P=Bs(r,P));var ne=o.getDerivedStateFromProps;(K=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||q!==P)&&Mp(r,v,c,P),Jr=!1,q=r.memoizedState,v.state=q,Hl(r,c,v,d);var ae=r.memoizedState;I!==Q||q!==ae||qt.current||Jr?(typeof ne=="function"&&(hh(r,o,ne,c),ae=r.memoizedState),(F=Jr||Lp(r,o,F,c,q,ae,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return gh(n,r,o,c,p,d)}function gh(n,r,o,c,d,p){Gp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Zf(r,o,!1),wr(n,r,p);c=r.stateNode,u0.current=r;var I=v&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=qs(r,n.child,null,p),r.child=qs(r,null,I,p)):Bt(n,r,I,p),r.memoizedState=c.state,d&&Zf(r,o,!0),r.child}function Qp(n){var r=n.stateNode;r.pendingContext?Xf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xf(n,r.context,!1),Zc(n,r.containerInfo)}function Jp(n,r,o,c,d){return Ws(),qc(d),r.flags|=256,Bt(n,r,o,c),r.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,o){var c=r.pendingProps,d=Qe.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),ze(Qe,d&1),n===null)return Wc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=hu(v,c,0,null),n=Gi(n,c,o,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=vh(o),r.memoizedState=yh,n):_h(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return c0(n,r,v,c,I,d,o);if(p){p=c.fallback,v=r.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=ri(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ri(I,p):(p=Gi(p,v,o,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?vh(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~o,r.memoizedState=yh,c}return p=n.child,n=p.sibling,c=ri(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function _h(n,r){return r=hu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Yl(n,r,o,c){return c!==null&&qc(c),qs(r,n.child,null,o),n=_h(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function c0(n,r,o,c,d,p,v){if(o)return r.flags&256?(r.flags&=-257,c=fh(Error(t(422))),Yl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=hu({mode:"visible",children:c.children},d,0,null),p=Gi(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&qs(r,n.child,null,v),r.child.memoizedState=vh(v),r.memoizedState=yh,p);if((r.mode&1)===0)return Yl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=fh(p,c,void 0),Yl(n,r,v,c)}if(I=(v&n.childLanes)!==0,Kt||I){if(c=gt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,_r(n,d),Vn(c,n,d,-1))}return Lh(),c=fh(Error(t(421))),Yl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=I0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=qr(d.nextSibling),sn=r,qe=!0,xn=null,n!==null&&(dn[fn++]=yr,dn[fn++]=vr,dn[fn++]=ji,yr=n.id,vr=n.overflow,ji=r),r=_h(r,c.children),r.flags|=4096,r)}function Yp(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Jc(n.return,r,o)}function Eh(n,r,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Zp(n,r,o){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Bt(n,r,c.children,o),c=Qe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,o,r);else if(n.tag===19)Yp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(ze(Qe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&Wl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Eh(r,!1,d,o,p);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Eh(r,!0,o,null,p);break;case"together":Eh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Zl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),$i|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=ri(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ri(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function h0(n,r,o){switch(r.tag){case 3:Qp(r),Ws();break;case 5:fp(r);break;case 1:Gt(r.type)&&Ll(r);break;case 4:Zc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;ze(zl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(ze(Qe,Qe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Xp(n,r,o):(ze(Qe,Qe.current&1),n=wr(n,r,o),n!==null?n.sibling:null);ze(Qe,Qe.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Zp(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ze(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,qp(n,r,o)}return wr(n,r,o)}var em,wh,tm,nm;em=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wh=function(){},tm=function(n,r,o,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,zi(Jn.current);var p=null;switch(o){case"input":d=Ei(n,d),c=Ei(n,c),p=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":d=Ro(n,d),c=Ro(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ol)}Lo(o,c);var v;o=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(o||(o={}),o[v]=P[v])}else o||(p||(p=[]),p.push(F,o)),o=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&$e("scroll",n),p||I===P||(p=[])):(p=p||[]).push(F,P))}o&&(p=p||[]).push("style",o);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},nm=function(n,r,o,c){o!==c&&(r.flags|=4)};function ma(n,r){if(!qe)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function d0(n,r,o){var c=r.pendingProps;switch($c(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return Gt(r.type)&&Vl(),Dt(r),null;case 3:return c=r.stateNode,Qs(),He(qt),He(Nt),nh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,xn!==null&&(Oh(xn),xn=null))),wh(n,r),Dt(r),null;case 5:eh(r);var d=zi(ca.current);if(o=r.type,n!==null&&r.stateNode!=null)tm(n,r,o,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=zi(Jn.current),Fl(r)){c=r.stateNode,o=r.type;var p=r.memoizedProps;switch(c[Qn]=r,c[sa]=p,n=(r.mode&1)!==0,o){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(d=0;d<na.length;d++)$e(na[d],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":cs(c,p),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},$e("invalid",c);break;case"textarea":ds(c,p),$e("invalid",c)}Lo(o,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Nl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Nl(c.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&$e("scroll",c)}switch(o){case"input":sr(c),rl(c,p,!0);break;case"textarea":sr(c),xo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ol)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(o,{is:c.is}):(n=v.createElement(o),o==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,o),n[Qn]=r,n[sa]=c,em(n,r,!1,!1),r.stateNode=n;e:{switch(v=bo(o,c),o){case"dialog":$e("cancel",n),$e("close",n),d=c;break;case"iframe":case"object":case"embed":$e("load",n),d=c;break;case"video":case"audio":for(d=0;d<na.length;d++)$e(na[d],n);d=c;break;case"source":$e("error",n),d=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),d=c;break;case"details":$e("toggle",n),d=c;break;case"input":cs(n,c),d=Ei(n,c),$e("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),$e("invalid",n);break;case"textarea":ds(n,c),d=Ro(n,c),$e("invalid",n);break;default:d=c}Lo(o,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?Do(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&No(n,P)):p==="children"?typeof P=="string"?(o!=="textarea"||P!=="")&&Lr(n,P):typeof P=="number"&&Lr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?P!=null&&p==="onScroll"&&$e("scroll",n):P!=null&&se(n,p,P,v))}switch(o){case"input":sr(n),rl(n,c,!1);break;case"textarea":sr(n),xo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ar(n,!!c.multiple,p,!1):c.defaultValue!=null&&ar(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ol)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)nm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=zi(ca.current),zi(Jn.current),Fl(r)){if(c=r.stateNode,o=r.memoizedProps,c[Qn]=r,(p=c.nodeValue!==o)&&(n=sn,n!==null))switch(n.tag){case 3:Nl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Nl(c.nodeValue,o,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Qn]=r,r.stateNode=c}return Dt(r),null;case 13:if(He(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qe&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)sp(),Ws(),r.flags|=98560,p=!1;else if(p=Fl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Qn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),p=!1}else xn!==null&&(Oh(xn),xn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Qe.current&1)!==0?dt===0&&(dt=3):Lh())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return Qs(),wh(n,r),n===null&&ra(r.stateNode.containerInfo),Dt(r),null;case 10:return Qc(r.type._context),Dt(r),null;case 17:return Gt(r.type)&&Vl(),Dt(r),null;case 19:if(He(Qe),p=r.memoizedState,p===null)return Dt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)ma(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Wl(n),v!==null){for(r.flags|=128,ma(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)p=o,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return ze(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&Ue()>Zs&&(r.flags|=128,c=!0,ma(p,!1),r.lanes=4194304)}else{if(!c)if(n=Wl(v),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!qe)return Dt(r),null}else 2*Ue()-p.renderingStartTime>Zs&&o!==1073741824&&(r.flags|=128,c=!0,ma(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Ue(),r.sibling=null,o=Qe.current,ze(Qe,c?o&1|2:o&1),r):(Dt(r),null);case 22:case 23:return Vh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function f0(n,r){switch($c(r),r.tag){case 1:return Gt(r.type)&&Vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),He(qt),He(Nt),nh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return eh(r),null;case 13:if(He(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Qe),null;case 4:return Qs(),null;case 10:return Qc(r.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var eu=!1,Vt=!1,p0=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Xs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Ye(n,r,c)}else o.current=null}function Th(n,r,o){try{o()}catch(c){Ye(n,r,c)}}var rm=!1;function m0(n,r){if(Vc=$r,n=Lf(),kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,I=-1,P=-1,F=0,K=0,Q=n,q=null;t:for(;;){for(var ne;Q!==o||d!==0&&Q.nodeType!==3||(I=v+d),Q!==p||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)q=Q,Q=ne;for(;;){if(Q===n)break t;if(q===o&&++F===d&&(I=v),q===p&&++K===c&&(P=v),(ne=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=ne}o=I===-1||P===-1?null:{start:I,end:P}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lc={focusedElem:n,selectionRange:o},$r=!1,oe=r;oe!==null;)if(r=oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,oe=n;else for(;oe!==null;){r=oe;try{var ae=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,nt=ae.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?le:Nn(r.type,le),nt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){Ye(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,oe=n;break}oe=r.return}return ae=rm,rm=!1,ae}function ga(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Th(r,o,p)}d=d.next}while(d!==c)}}function tu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function Ih(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function im(n){var r=n.alternate;r!==null&&(n.alternate=null,im(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Qn],delete r[sa],delete r[Fc],delete r[X_],delete r[Y_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sh(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ol));else if(c!==4&&(n=n.child,n!==null))for(Sh(n,r,o),n=n.sibling;n!==null;)Sh(n,r,o),n=n.sibling}function Ch(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,o),n=n.sibling;n!==null;)Ch(n,r,o),n=n.sibling}var Tt=null,On=!1;function Yr(n,r,o){for(o=o.child;o!==null;)am(n,r,o),o=o.sibling}function am(n,r,o){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ri,o)}catch{}switch(o.tag){case 5:Vt||Xs(o,r);case 6:var c=Tt,d=On;Tt=null,Yr(n,r,o),Tt=c,On=d,Tt!==null&&(On?(n=Tt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(On?(n=Tt,o=o.stateNode,n.nodeType===8?jc(n.parentNode,o):n.nodeType===1&&jc(n,o),An(n)):jc(Tt,o.stateNode));break;case 4:c=Tt,d=On,Tt=o.stateNode.containerInfo,On=!0,Yr(n,r,o),Tt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Th(o,r,v),d=d.next}while(d!==c)}Yr(n,r,o);break;case 1:if(!Vt&&(Xs(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Ye(o,r,I)}Yr(n,r,o);break;case 21:Yr(n,r,o);break;case 22:o.mode&1?(Vt=(c=Vt)||o.memoizedState!==null,Yr(n,r,o),Vt=c):Yr(n,r,o);break;default:Yr(n,r,o)}}function lm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new p0),r.forEach(function(c){var d=S0.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Dn(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Tt=I.stateNode,On=!1;break e;case 3:Tt=I.stateNode.containerInfo,On=!0;break e;case 4:Tt=I.stateNode.containerInfo,On=!0;break e}I=I.return}if(Tt===null)throw Error(t(160));am(p,v,d),Tt=null,On=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){Ye(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)um(r,n),r=r.sibling}function um(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(r,n),Yn(n),c&4){try{ga(3,n,n.return),tu(3,n)}catch(le){Ye(n,n.return,le)}try{ga(5,n,n.return)}catch(le){Ye(n,n.return,le)}}break;case 1:Dn(r,n),Yn(n),c&512&&o!==null&&Xs(o,o.return);break;case 5:if(Dn(r,n),Yn(n),c&512&&o!==null&&Xs(o,o.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(le){Ye(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=o!==null?o.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ao(d,p),bo(I,v);var F=bo(I,p);for(v=0;v<P.length;v+=2){var K=P[v],Q=P[v+1];K==="style"?Do(d,Q):K==="dangerouslySetInnerHTML"?No(d,Q):K==="children"?Lr(d,Q):se(d,K,Q,F)}switch(I){case"input":Po(d,p);break;case"textarea":fs(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?ar(d,!!p.multiple,ne,!1):q!==!!p.multiple&&(p.defaultValue!=null?ar(d,!!p.multiple,p.defaultValue,!0):ar(d,!!p.multiple,p.multiple?[]:"",!1))}d[sa]=p}catch(le){Ye(n,n.return,le)}}break;case 6:if(Dn(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){Ye(n,n.return,le)}}break;case 3:if(Dn(r,n),Yn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(le){Ye(n,n.return,le)}break;case 4:Dn(r,n),Yn(n);break;case 13:Dn(r,n),Yn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ph=Ue())),c&4&&lm(n);break;case 22:if(K=o!==null&&o.memoizedState!==null,n.mode&1?(Vt=(F=Vt)||K,Dn(r,n),Vt=F):Dn(r,n),Yn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(oe=n,K=n.child;K!==null;){for(Q=oe=K;oe!==null;){switch(q=oe,ne=q.child,q.tag){case 0:case 11:case 14:case 15:ga(4,q,q.return);break;case 1:Xs(q,q.return);var ae=q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=q,o=q.return;try{r=c,ae.props=r.memoizedProps,ae.state=r.memoizedState,ae.componentWillUnmount()}catch(le){Ye(c,o,le)}}break;case 5:Xs(q,q.return);break;case 22:if(q.memoizedState!==null){dm(Q);continue}}ne!==null?(ne.return=q,oe=ne):dm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Oo("display",v))}catch(le){Ye(n,n.return,le)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(le){Ye(n,n.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Dn(r,n),Yn(n),c&4&&lm(n);break;case 21:break;default:Dn(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(sm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var p=om(n);Ch(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=om(n);Sh(n,I,v);break;default:throw Error(t(161))}}catch(P){Ye(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function g0(n,r,o){oe=n,cm(n)}function cm(n,r,o){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||eu;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Vt;I=eu;var F=Vt;if(eu=v,(Vt=P)&&!F)for(oe=d;oe!==null;)v=oe,P=v.child,v.tag===22&&v.memoizedState!==null?fm(d):P!==null?(P.return=v,oe=P):fm(d);for(;p!==null;)oe=p,cm(p),p=p.sibling;oe=d,eu=I,Vt=F}hm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,oe=p):hm(n)}}function hm(n){for(;oe!==null;){var r=oe;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vt||tu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vt)if(o===null)c.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:Nn(r.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&dp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}dp(r,v,o)}break;case 5:var I=r.stateNode;if(o===null&&r.flags&4){o=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&o.focus();break;case"img":P.src&&(o.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&An(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&Ih(r)}catch(q){Ye(r,r.return,q)}}if(r===n){oe=null;break}if(o=r.sibling,o!==null){o.return=r.return,oe=o;break}oe=r.return}}function dm(n){for(;oe!==null;){var r=oe;if(r===n){oe=null;break}var o=r.sibling;if(o!==null){o.return=r.return,oe=o;break}oe=r.return}}function fm(n){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{tu(4,r)}catch(P){Ye(r,o,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){Ye(r,d,P)}}var p=r.return;try{Ih(r)}catch(P){Ye(r,p,P)}break;case 5:var v=r.return;try{Ih(r)}catch(P){Ye(r,v,P)}}}catch(P){Ye(r,r.return,P)}if(r===n){oe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,oe=I;break}oe=r.return}}var y0=Math.ceil,nu=ce.ReactCurrentDispatcher,kh=ce.ReactCurrentOwner,gn=ce.ReactCurrentBatchConfig,xe=0,gt=null,st=null,It=0,an=0,Ys=Gr(0),dt=0,ya=null,$i=0,ru=0,Ah=0,va=null,Qt=null,Ph=0,Zs=1/0,Tr=null,iu=!1,Rh=null,Zr=null,su=!1,ei=null,ou=0,_a=0,xh=null,au=-1,lu=0;function $t(){return(xe&6)!==0?Ue():au!==-1?au:au=Ue()}function ti(n){return(n.mode&1)===0?1:(xe&2)!==0&&It!==0?It&-It:e0.transition!==null?(lu===0&&(lu=Ni()),lu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Go(n.type)),n)}function Vn(n,r,o,c){if(50<_a)throw _a=0,xh=null,Error(t(185));Fr(n,o,c),((xe&2)===0||n!==gt)&&(n===gt&&((xe&2)===0&&(ru|=o),dt===4&&ni(n,It)),Jt(n,c),o===1&&xe===0&&(r.mode&1)===0&&(Zs=Ue()+500,bl&&Qr()))}function Jt(n,r){var o=n.callbackNode;cr(n,r);var c=xi(n,n===gt?It:0);if(c===0)o!==null&&Bo(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&Bo(o),r===1)n.tag===0?Z_(mm.bind(null,n)):ep(mm.bind(null,n)),Q_(function(){(xe&6)===0&&Qr()}),o=null;else{switch(zr(c)){case 1:o=Pi;break;case 4:o=br;break;case 16:o=un;break;case 536870912:o=ll;break;default:o=un}o=Im(o,pm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function pm(n,r){if(au=-1,lu=0,(xe&6)!==0)throw Error(t(327));var o=n.callbackNode;if(eo()&&n.callbackNode!==o)return null;var c=xi(n,n===gt?It:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=uu(n,c);else{r=c;var d=xe;xe|=2;var p=ym();(gt!==n||It!==r)&&(Tr=null,Zs=Ue()+500,Wi(n,r));do try{E0();break}catch(I){gm(n,I)}while(!0);Kc(),nu.current=p,xe=d,st!==null?r=0:(gt=null,It=0,r=dt)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=Nh(n,d))),r===1)throw o=ya,Wi(n,0),ni(n,c),Jt(n,Ue()),o;if(r===6)ni(n,c);else{if(d=n.current.alternate,(c&30)===0&&!v0(d)&&(r=uu(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=Nh(n,p))),r===1))throw o=ya,Wi(n,0),ni(n,c),Jt(n,Ue()),o;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:qi(n,Qt,Tr);break;case 3:if(ni(n,c),(c&130023424)===c&&(r=Ph+500-Ue(),10<r)){if(xi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Mc(qi.bind(null,n,Qt,Tr),r);break}qi(n,Qt,Tr);break;case 4:if(ni(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Ut(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=Ue()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*y0(c/1960))-c,10<c){n.timeoutHandle=Mc(qi.bind(null,n,Qt,Tr),c);break}qi(n,Qt,Tr);break;case 5:qi(n,Qt,Tr);break;default:throw Error(t(329))}}}return Jt(n,Ue()),n.callbackNode===o?pm.bind(null,n):null}function Nh(n,r){var o=va;return n.current.memoizedState.isDehydrated&&(Wi(n,r).flags|=256),n=uu(n,r),n!==2&&(r=Qt,Qt=o,r!==null&&Oh(r)),n}function Oh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function v0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!Rn(p(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ni(n,r){for(r&=~Ah,r&=~ru,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Ut(r),c=1<<o;n[o]=-1,r&=~c}}function mm(n){if((xe&6)!==0)throw Error(t(327));eo();var r=xi(n,0);if((r&1)===0)return Jt(n,Ue()),null;var o=uu(n,r);if(n.tag!==0&&o===2){var c=tn(n);c!==0&&(r=c,o=Nh(n,c))}if(o===1)throw o=ya,Wi(n,0),ni(n,r),Jt(n,Ue()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,qi(n,Qt,Tr),Jt(n,Ue()),null}function Dh(n,r){var o=xe;xe|=1;try{return n(r)}finally{xe=o,xe===0&&(Zs=Ue()+500,bl&&Qr())}}function Hi(n){ei!==null&&ei.tag===0&&(xe&6)===0&&eo();var r=xe;xe|=1;var o=gn.transition,c=ke;try{if(gn.transition=null,ke=1,n)return n()}finally{ke=c,gn.transition=o,xe=r,(xe&6)===0&&Qr()}}function Vh(){an=Ys.current,He(Ys)}function Wi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,K_(o)),st!==null)for(o=st.return;o!==null;){var c=o;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vl();break;case 3:Qs(),He(qt),He(Nt),nh();break;case 5:eh(c);break;case 4:Qs();break;case 13:He(Qe);break;case 19:He(Qe);break;case 10:Qc(c.type._context);break;case 22:case 23:Vh()}o=o.return}if(gt=n,st=n=ri(n.current,null),It=an=r,dt=0,ya=null,Ah=ru=$i=0,Qt=va=null,Ui!==null){for(r=0;r<Ui.length;r++)if(o=Ui[r],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}o.pending=c}Ui=null}return n}function gm(n,r){do{var o=st;try{if(Kc(),ql.current=Jl,Gl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Gl=!1}if(Bi=0,mt=ht=Je=null,ha=!1,da=0,kh.current=null,o===null||o.return===null){dt=1,ya=r,st=null;break}e:{var p=n,v=o.return,I=o,P=r;if(r=It,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=zp(v);if(ne!==null){ne.flags&=-257,Bp(ne,v,I,p,r),ne.mode&1&&Up(p,F,r),r=ne,P=F;var ae=r.updateQueue;if(ae===null){var le=new Set;le.add(P),r.updateQueue=le}else ae.add(P);break e}else{if((r&1)===0){Up(p,F,r),Lh();break e}P=Error(t(426))}}else if(qe&&I.mode&1){var nt=zp(v);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),Bp(nt,v,I,p,r),qc(Js(P,I));break e}}p=P=Js(P,I),dt!==4&&(dt=2),va===null?va=[p]:va.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=jp(p,P,r);hp(p,M);break e;case 1:I=P;var N=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Zr===null||!Zr.has(j)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Fp(p,I,r);hp(p,Y);break e}}p=p.return}while(p!==null)}_m(o)}catch(he){r=he,st===o&&o!==null&&(st=o=o.return);continue}break}while(!0)}function ym(){var n=nu.current;return nu.current=Jl,n===null?Jl:n}function Lh(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||($i&268435455)===0&&(ru&268435455)===0||ni(gt,It)}function uu(n,r){var o=xe;xe|=2;var c=ym();(gt!==n||It!==r)&&(Tr=null,Wi(n,r));do try{_0();break}catch(d){gm(n,d)}while(!0);if(Kc(),xe=o,nu.current=c,st!==null)throw Error(t(261));return gt=null,It=0,dt}function _0(){for(;st!==null;)vm(st)}function E0(){for(;st!==null&&!ol();)vm(st)}function vm(n){var r=Tm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?_m(n):st=r,kh.current=null}function _m(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=d0(o,r,an),o!==null){st=o;return}}else{if(o=f0(o,r),o!==null){o.flags&=32767,st=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function qi(n,r,o){var c=ke,d=gn.transition;try{gn.transition=null,ke=1,w0(n,r,o,c)}finally{gn.transition=d,ke=c}return null}function w0(n,r,o,c){do eo();while(ei!==null);if((xe&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(je(n,p),n===gt&&(st=gt=null,It=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||su||(su=!0,Im(un,function(){return eo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=ke;ke=1;var I=xe;xe|=4,kh.current=null,m0(n,o),um(o,n),z_(Lc),$r=!!Vc,Lc=Vc=null,n.current=o,g0(o),vc(),xe=I,ke=v,gn.transition=p}else n.current=o;if(su&&(su=!1,ei=n,ou=d),p=n.pendingLanes,p===0&&(Zr=null),ul(o.stateNode),Jt(n,Ue()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(iu)throw iu=!1,n=Rh,Rh=null,n;return(ou&1)!==0&&n.tag!==0&&eo(),p=n.pendingLanes,(p&1)!==0?n===xh?_a++:(_a=0,xh=n):_a=0,Qr(),null}function eo(){if(ei!==null){var n=zr(ou),r=gn.transition,o=ke;try{if(gn.transition=null,ke=16>n?16:n,ei===null)var c=!1;else{if(n=ei,ei=null,ou=0,(xe&6)!==0)throw Error(t(331));var d=xe;for(xe|=4,oe=n.current;oe!==null;){var p=oe,v=p.child;if((oe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(oe=F;oe!==null;){var K=oe;switch(K.tag){case 0:case 11:case 15:ga(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,oe=Q;else for(;oe!==null;){K=oe;var q=K.sibling,ne=K.return;if(im(K),K===F){oe=null;break}if(q!==null){q.return=ne,oe=q;break}oe=ne}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var nt=le.sibling;le.sibling=null,le=nt}while(le!==null)}}oe=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,oe=v;else e:for(;oe!==null;){if(p=oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ga(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,oe=M;break e}oe=p.return}}var N=n.current;for(oe=N;oe!==null;){v=oe;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,oe=j;else e:for(v=N;oe!==null;){if(I=oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:tu(9,I)}}catch(he){Ye(I,I.return,he)}if(I===v){oe=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,oe=Y;break e}oe=I.return}}if(xe=d,Qr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ri,n)}catch{}c=!0}return c}finally{ke=o,gn.transition=r}}return!1}function Em(n,r,o){r=Js(o,r),r=jp(n,r,1),n=Xr(n,r,1),r=$t(),n!==null&&(Fr(n,1,r),Jt(n,r))}function Ye(n,r,o){if(n.tag===3)Em(n,n,o);else for(;r!==null;){if(r.tag===3){Em(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Zr===null||!Zr.has(c))){n=Js(o,n),n=Fp(r,n,1),r=Xr(r,n,1),n=$t(),r!==null&&(Fr(r,1,n),Jt(r,n));break}}r=r.return}}function T0(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&o,gt===n&&(It&o)===o&&(dt===4||dt===3&&(It&130023424)===It&&500>Ue()-Ph?Wi(n,0):Ah|=o),Jt(n,r)}function wm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Is,Is<<=1,(Is&130023424)===0&&(Is=4194304)));var o=$t();n=_r(n,r),n!==null&&(Fr(n,r,o),Jt(n,o))}function I0(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),wm(n,o)}function S0(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),wm(n,o)}var Tm;Tm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Kt=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Kt=!1,h0(n,r,o);Kt=(n.flags&131072)!==0}else Kt=!1,qe&&(r.flags&1048576)!==0&&tp(r,jl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Zl(n,r),n=r.pendingProps;var d=Bs(r,Nt.current);Ks(r,o),d=sh(null,r,c,n,d,o);var p=oh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(p=!0,Ll(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,dh(r,c,n,o),r=gh(null,r,c,!0,p,o)):(r.tag=0,qe&&p&&Bc(r),Bt(null,r,d,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Zl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=k0(c),n=Nn(c,n),d){case 0:r=mh(null,r,c,n,o);break e;case 1:r=Kp(null,r,c,n,o);break e;case 11:r=$p(null,r,c,n,o);break e;case 14:r=Hp(null,r,c,Nn(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),mh(n,r,c,d,o);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Kp(n,r,c,d,o);case 3:e:{if(Qp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,cp(n,r),Hl(r,c,null,o);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Js(Error(t(423)),r),r=Jp(n,r,c,o,d);break e}else if(c!==d){d=Js(Error(t(424)),r),r=Jp(n,r,c,o,d);break e}else for(on=qr(r.stateNode.containerInfo.firstChild),sn=r,qe=!0,xn=null,o=lp(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ws(),c===d){r=wr(n,r,o);break e}Bt(n,r,c,o)}r=r.child}return r;case 5:return fp(r),n===null&&Wc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,bc(c,d)?v=null:p!==null&&bc(c,p)&&(r.flags|=32),Gp(n,r),Bt(n,r,v,o),r.child;case 6:return n===null&&Wc(r),null;case 13:return Xp(n,r,o);case 4:return Zc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=qs(r,null,c,o):Bt(n,r,c,o),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),$p(n,r,c,d,o);case 7:return Bt(n,r,r.pendingProps,o),r.child;case 8:return Bt(n,r,r.pendingProps.children,o),r.child;case 12:return Bt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,ze(zl,c._currentValue),c._currentValue=v,p!==null)if(Rn(p.value,v)){if(p.children===d.children&&!qt.current){r=wr(n,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Er(-1,o&-o),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?P.next=P:(P.next=K.next,K.next=P),F.pending=P}}p.lanes|=o,P=p.alternate,P!==null&&(P.lanes|=o),Jc(p.return,o,r),I.lanes|=o;break}P=P.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=o,I=v.alternate,I!==null&&(I.lanes|=o),Jc(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Bt(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ks(r,o),d=pn(d),c=c(d),r.flags|=1,Bt(n,r,c,o),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),Hp(n,r,c,d,o);case 15:return Wp(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Zl(n,r),r.tag=1,Gt(c)?(n=!0,Ll(r)):n=!1,Ks(r,o),bp(r,c,d),dh(r,c,d,o),gh(null,r,c,!0,n,o);case 19:return Zp(n,r,o);case 22:return qp(n,r,o)}throw Error(t(156,r.tag))};function Im(n,r){return ws(n,r)}function C0(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,o,c){return new C0(n,r,o,c)}function bh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function k0(n){if(typeof n=="function")return bh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Rt)return 14}return 2}function ri(n,r){var o=n.alternate;return o===null?(o=yn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function cu(n,r,o,c,d,p){var v=2;if(c=n,typeof n=="function")bh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case O:return Gi(o.children,d,p,r);case S:v=8,d|=8;break;case A:return n=yn(12,o,r,d|2),n.elementType=A,n.lanes=p,n;case k:return n=yn(13,o,r,d),n.elementType=k,n.lanes=p,n;case et:return n=yn(19,o,r,d),n.elementType=et,n.lanes=p,n;case Me:return hu(o,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:v=10;break e;case D:v=9;break e;case L:v=11;break e;case Rt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(v,o,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Gi(n,r,o,c){return n=yn(7,n,c,r),n.lanes=o,n}function hu(n,r,o,c){return n=yn(22,n,c,r),n.elementType=Me,n.lanes=o,n.stateNode={isHidden:!1},n}function Mh(n,r,o){return n=yn(6,n,null,r),n.lanes=o,n}function jh(n,r,o){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function A0(n,r,o,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jr(0),this.expirationTimes=jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fh(n,r,o,c,d,p,v,I,P){return n=new A0(n,r,o,I,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=yn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(p),n}function P0(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function Sm(n){if(!n)return Kr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gt(o))return Yf(n,o,r)}return r}function Cm(n,r,o,c,d,p,v,I,P){return n=Fh(o,c,!0,n,d,p,v,I,P),n.context=Sm(null),o=n.current,c=$t(),d=ti(o),p=Er(c,d),p.callback=r??null,Xr(o,p,d),n.current.lanes=d,Fr(n,d,c),Jt(n,c),n}function du(n,r,o,c){var d=r.current,p=$t(),v=ti(d);return o=Sm(o),r.context===null?r.context=o:r.pendingContext=o,r=Er(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Xr(d,r,v),n!==null&&(Vn(n,d,v,p),$l(n,d,v)),v}function fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Uh(n,r){km(n,r),(n=n.alternate)&&km(n,r)}function R0(){return null}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function zh(n){this._internalRoot=n}pu.prototype.render=zh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));du(n,r,null,null)},pu.prototype.unmount=zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Hi(function(){du(null,n,null,null)}),r[mr]=null}};function pu(n){this._internalRoot=n}pu.prototype.unstable_scheduleHydration=function(n){if(n){var r=pl();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Wn.length&&r!==0&&r<Wn[o].priority;o++);Wn.splice(o,0,n),o===0&&yl(n)}};function Bh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function x0(n,r,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=fu(v);p.call(F)}}var v=Cm(r,c,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=v,n[mr]=v.current,ra(n.nodeType===8?n.parentNode:n),Hi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=fu(P);I.call(F)}}var P=Fh(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=P,n[mr]=P.current,ra(n.nodeType===8?n.parentNode:n),Hi(function(){du(r,P,o,c)}),P}function gu(n,r,o,c,d){var p=o._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=fu(v);I.call(P)}}du(r,v,n,d)}else v=x0(o,r,n,d,c);return fu(v)}dl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Mr(r.pendingLanes);o!==0&&(Ur(r,o|1),Jt(r,Ue()),(xe&6)===0&&(Zs=Ue()+500,Qr()))}break;case 13:Hi(function(){var c=_r(n,1);if(c!==null){var d=$t();Vn(c,n,1,d)}}),Uh(n,1)}},Ss=function(n){if(n.tag===13){var r=_r(n,134217728);if(r!==null){var o=$t();Vn(r,n,134217728,o)}Uh(n,134217728)}},fl=function(n){if(n.tag===13){var r=ti(n),o=_r(n,r);if(o!==null){var c=$t();Vn(o,n,r,c)}Uh(n,r)}},pl=function(){return ke},ml=function(n,r){var o=ke;try{return ke=n,r()}finally{ke=o}},ms=function(n,r,o){switch(r){case"input":if(Po(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var d=Dl(c);if(!d)throw Error(t(90));us(c),Po(c,d)}}}break;case"textarea":fs(n,o);break;case"select":r=o.value,r!=null&&ar(n,!!o.multiple,r,!1)}},Si=Dh,jo=Hi;var N0={usingClientEntryPoint:!1,Events:[oa,Us,Dl,$n,Mo,Dh]},Ea={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Ri=yu.inject(O0),en=yu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0,Xt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(r))throw Error(t(200));return P0(n,r,null,o)},Xt.createRoot=function(n,r){if(!Bh(n))throw Error(t(299));var o=!1,c="",d=Am;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Fh(n,1,!1,null,null,o,!1,c,d),n[mr]=r.current,ra(n.nodeType===8?n.parentNode:n),new zh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Hi(n)},Xt.hydrate=function(n,r,o){if(!mu(r))throw Error(t(200));return gu(null,n,r,!0,o)},Xt.hydrateRoot=function(n,r,o){if(!Bh(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",v=Am;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=Cm(r,null,n,1,o??null,d,!1,p,v),n[mr]=r.current,ra(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new pu(r)},Xt.render=function(n,r,o){if(!mu(r))throw Error(t(200));return gu(null,n,r,!1,o)},Xt.unmountComponentAtNode=function(n){if(!mu(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){gu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Dh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!mu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gu(n,r,o,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var bm;function dy(){if(bm)return Wh.exports;bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Wh.exports=z0(),Wh.exports}var Mm;function B0(){if(Mm)return vu;Mm=1;var i=dy();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var $0=B0();const H0=cy($0);dy();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Da.apply(null,arguments)}var ci;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(ci||(ci={}));const jm="popstate";function W0(i){i===void 0&&(i={});function e(s,a){let{pathname:u,search:h,hash:m}=s.location;return sd("",{pathname:u,search:h,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Lu(a)}return G0(e,t,null,i)}function Xe(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Od(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function q0(){return Math.random().toString(36).substr(2,8)}function Fm(i,e){return{usr:i.state,key:i.key,idx:e}}function sd(i,e,t,s){return t===void 0&&(t=null),Da({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?_o(e):e,{state:t,key:e&&e.key||s||q0()})}function Lu(i){let{pathname:e="/",search:t="",hash:s=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function _o(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substr(s),i=i.substr(0,s)),i&&(e.pathname=i)}return e}function G0(i,e,t,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:u=!1}=s,h=a.history,m=ci.Pop,g=null,_=w();_==null&&(_=0,h.replaceState(Da({},h.state,{idx:_}),""));function w(){return(h.state||{idx:null}).idx}function T(){m=ci.Pop;let U=w(),ie=U==null?null:U-_;_=U,g&&g({action:m,location:G.location,delta:ie})}function x(U,ie){m=ci.Push;let te=sd(G.location,U,ie);_=w()+1;let se=Fm(te,_),ce=G.createHref(te);try{h.pushState(se,"",ce)}catch(De){if(De instanceof DOMException&&De.name==="DataCloneError")throw De;a.location.assign(ce)}u&&g&&g({action:m,location:G.location,delta:1})}function H(U,ie){m=ci.Replace;let te=sd(G.location,U,ie);_=w();let se=Fm(te,_),ce=G.createHref(te);h.replaceState(se,"",ce),u&&g&&g({action:m,location:G.location,delta:0})}function B(U){let ie=a.location.origin!=="null"?a.location.origin:a.location.href,te=typeof U=="string"?U:Lu(U);return te=te.replace(/ $/,"%20"),Xe(ie,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,ie)}let G={get action(){return m},get location(){return i(a,h)},listen(U){if(g)throw new Error("A history only accepts one active listener");return a.addEventListener(jm,T),g=U,()=>{a.removeEventListener(jm,T),g=null}},createHref(U){return e(a,U)},createURL:B,encodeLocation(U){let ie=B(U);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:x,replace:H,go(U){return h.go(U)}};return G}var Um;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Um||(Um={}));function K0(i,e,t){return t===void 0&&(t="/"),Q0(i,e,t)}function Q0(i,e,t,s){let a=typeof e=="string"?_o(e):e,u=uo(a.pathname||"/",t);if(u==null)return null;let h=fy(i);J0(h);let m=null,g=aE(u);for(let _=0;m==null&&_<h.length;++_)m=sE(h[_],g);return m}function fy(i,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let a=(u,h,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};g.relativePath.startsWith("/")&&(Xe(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let _=hi([s,g.relativePath]),w=t.concat(g);u.children&&u.children.length>0&&(Xe(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),fy(u.children,e,w,_)),!(u.path==null&&!u.index)&&e.push({path:_,score:rE(_,u.index),routesMeta:w})};return i.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))a(u,h);else for(let g of py(u.path))a(u,h,g)}),e}function py(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return a?[u,""]:[u];let h=py(s.join("/")),m=[];return m.push(...h.map(g=>g===""?u:[u,g].join("/"))),a&&m.push(...h),m.map(g=>i.startsWith("/")&&g===""?"/":g)}function J0(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:iE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const X0=/^:[\w-]+$/,Y0=3,Z0=2,eE=1,tE=10,nE=-2,zm=i=>i==="*";function rE(i,e){let t=i.split("/"),s=t.length;return t.some(zm)&&(s+=nE),e&&(s+=Z0),t.filter(a=>!zm(a)).reduce((a,u)=>a+(X0.test(u)?Y0:u===""?eE:tE),s)}function iE(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function sE(i,e,t){let{routesMeta:s}=i,a={},u="/",h=[];for(let m=0;m<s.length;++m){let g=s[m],_=m===s.length-1,w=u==="/"?e:e.slice(u.length)||"/",T=od({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},w),x=g.route;if(!T)return null;Object.assign(a,T.params),h.push({params:a,pathname:hi([u,T.pathname]),pathnameBase:dE(hi([u,T.pathnameBase])),route:x}),T.pathnameBase!=="/"&&(u=hi([u,T.pathnameBase]))}return h}function od(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=oE(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let u=a[0],h=u.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:s.reduce((_,w,T)=>{let{paramName:x,isOptional:H}=w;if(x==="*"){let G=m[T]||"";h=u.slice(0,u.length-G.length).replace(/(.)\/+$/,"$1")}const B=m[T];return H&&!B?_[x]=void 0:_[x]=(B||"").replace(/%2F/g,"/"),_},{}),pathname:u,pathnameBase:h,pattern:i}}function oE(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Od(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function aE(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Od(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function uo(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}const lE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uE=i=>lE.test(i);function cE(i,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?_o(i):i,u;if(t)if(uE(t))u=t;else{if(t.includes("//")){let h=t;t=my(t),Od(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?u=Bm(t.substring(1),"/"):u=Bm(t,e)}else u=e;return{pathname:u,search:fE(s),hash:pE(a)}}function Bm(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Kh(i,e,t,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hE(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Dd(i,e){let t=hE(i);return e?t.map((s,a)=>a===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Vd(i,e,t,s){s===void 0&&(s=!1);let a;typeof i=="string"?a=_o(i):(a=Da({},i),Xe(!a.pathname||!a.pathname.includes("?"),Kh("?","pathname","search",a)),Xe(!a.pathname||!a.pathname.includes("#"),Kh("#","pathname","hash",a)),Xe(!a.search||!a.search.includes("#"),Kh("#","search","hash",a)));let u=i===""||a.pathname==="",h=u?"/":a.pathname,m;if(h==null)m=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),T-=1;a.pathname=x.join("/")}m=T>=0?e[T]:"/"}let g=cE(a,m),_=h&&h!=="/"&&h.endsWith("/"),w=(u||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||w)&&(g.pathname+="/"),g}const my=i=>i.replace(/\/\/+/g,"/"),hi=i=>my(i.join("/")),dE=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),fE=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,pE=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function mE(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const gy=["post","put","patch","delete"];new Set(gy);const gE=["get",...gy];new Set(gE);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Va.apply(null,arguments)}const nc=X.createContext(null),yy=X.createContext(null),Nr=X.createContext(null),rc=X.createContext(null),Or=X.createContext({outlet:null,matches:[],isDataRoute:!1}),vy=X.createContext(null);function yE(i,e){let{relative:t}=e===void 0?{}:e;Eo()||Xe(!1);let{basename:s,navigator:a}=X.useContext(Nr),{hash:u,pathname:h,search:m}=sc(i,{relative:t}),g=h;return s!=="/"&&(g=h==="/"?s:hi([s,h])),a.createHref({pathname:g,search:m,hash:u})}function Eo(){return X.useContext(rc)!=null}function wo(){return Eo()||Xe(!1),X.useContext(rc).location}function _y(i){X.useContext(Nr).static||X.useLayoutEffect(i)}function ic(){let{isDataRoute:i}=X.useContext(Or);return i?OE():vE()}function vE(){Eo()||Xe(!1);let i=X.useContext(nc),{basename:e,future:t,navigator:s}=X.useContext(Nr),{matches:a}=X.useContext(Or),{pathname:u}=wo(),h=JSON.stringify(Dd(a,t.v7_relativeSplatPath)),m=X.useRef(!1);return _y(()=>{m.current=!0}),X.useCallback(function(_,w){if(w===void 0&&(w={}),!m.current)return;if(typeof _=="number"){s.go(_);return}let T=Vd(_,JSON.parse(h),u,w.relative==="path");i==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:hi([e,T.pathname])),(w.replace?s.replace:s.push)(T,w.state,w)},[e,s,h,u,i])}const _E=X.createContext(null);function EE(i){let e=X.useContext(Or).outlet;return e&&X.createElement(_E.Provider,{value:i},e)}function sc(i,e){let{relative:t}=e===void 0?{}:e,{future:s}=X.useContext(Nr),{matches:a}=X.useContext(Or),{pathname:u}=wo(),h=JSON.stringify(Dd(a,s.v7_relativeSplatPath));return X.useMemo(()=>Vd(i,JSON.parse(h),u,t==="path"),[i,h,u,t])}function wE(i,e){return TE(i,e)}function TE(i,e,t,s){Eo()||Xe(!1);let{navigator:a}=X.useContext(Nr),{matches:u}=X.useContext(Or),h=u[u.length-1],m=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let _=wo(),w;if(e){var T;let U=typeof e=="string"?_o(e):e;g==="/"||(T=U.pathname)!=null&&T.startsWith(g)||Xe(!1),w=U}else w=_;let x=w.pathname||"/",H=x;if(g!=="/"){let U=g.replace(/^\//,"").split("/");H="/"+x.replace(/^\//,"").split("/").slice(U.length).join("/")}let B=K0(i,{pathname:H}),G=AE(B&&B.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:hi([g,a.encodeLocation?a.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:hi([g,a.encodeLocation?a.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),u,t,s);return e&&G?X.createElement(rc.Provider,{value:{location:Va({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:ci.Pop}},G):G}function IE(){let i=NE(),e=mE(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:a},t):null,null)}const SE=X.createElement(IE,null);class CE extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?X.createElement(Or.Provider,{value:this.props.routeContext},X.createElement(vy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kE(i){let{routeContext:e,match:t,children:s}=i,a=X.useContext(nc);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),X.createElement(Or.Provider,{value:e},s)}function AE(i,e,t,s){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),i==null){var u;if(!t)return null;if(t.errors)i=t.matches;else if((u=s)!=null&&u.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let h=i,m=(a=t)==null?void 0:a.errors;if(m!=null){let w=h.findIndex(T=>T.route.id&&(m==null?void 0:m[T.route.id])!==void 0);w>=0||Xe(!1),h=h.slice(0,Math.min(h.length,w+1))}let g=!1,_=-1;if(t&&s&&s.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=w),T.route.id){let{loaderData:x,errors:H}=t,B=T.route.loader&&x[T.route.id]===void 0&&(!H||H[T.route.id]===void 0);if(T.route.lazy||B){g=!0,_>=0?h=h.slice(0,_+1):h=[h[0]];break}}}return h.reduceRight((w,T,x)=>{let H,B=!1,G=null,U=null;t&&(H=m&&T.route.id?m[T.route.id]:void 0,G=T.route.errorElement||SE,g&&(_<0&&x===0?(DE("route-fallback"),B=!0,U=null):_===x&&(B=!0,U=T.route.hydrateFallbackElement||null)));let ie=e.concat(h.slice(0,x+1)),te=()=>{let se;return H?se=G:B?se=U:T.route.Component?se=X.createElement(T.route.Component,null):T.route.element?se=T.route.element:se=w,X.createElement(kE,{match:T,routeContext:{outlet:w,matches:ie,isDataRoute:t!=null},children:se})};return t&&(T.route.ErrorBoundary||T.route.errorElement||x===0)?X.createElement(CE,{location:t.location,revalidation:t.revalidation,component:G,error:H,children:te(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):te()},null)}var Ey=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(Ey||{}),wy=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(wy||{});function PE(i){let e=X.useContext(nc);return e||Xe(!1),e}function RE(i){let e=X.useContext(yy);return e||Xe(!1),e}function xE(i){let e=X.useContext(Or);return e||Xe(!1),e}function Ty(i){let e=xE(),t=e.matches[e.matches.length-1];return t.route.id||Xe(!1),t.route.id}function NE(){var i;let e=X.useContext(vy),t=RE(),s=Ty();return e!==void 0?e:(i=t.errors)==null?void 0:i[s]}function OE(){let{router:i}=PE(Ey.UseNavigateStable),e=Ty(wy.UseNavigateStable),t=X.useRef(!1);return _y(()=>{t.current=!0}),X.useCallback(function(a,u){u===void 0&&(u={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Va({fromRouteId:e},u)))},[i,e])}const $m={};function DE(i,e,t){$m[i]||($m[i]=!0)}function VE(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function LE(i){let{to:e,replace:t,state:s,relative:a}=i;Eo()||Xe(!1);let{future:u,static:h}=X.useContext(Nr),{matches:m}=X.useContext(Or),{pathname:g}=wo(),_=ic(),w=Vd(e,Dd(m,u.v7_relativeSplatPath),g,a==="path"),T=JSON.stringify(w);return X.useEffect(()=>_(JSON.parse(T),{replace:t,state:s,relative:a}),[_,T,a,t,s]),null}function bE(i){return EE(i.context)}function Zn(i){Xe(!1)}function ME(i){let{basename:e="/",children:t=null,location:s,navigationType:a=ci.Pop,navigator:u,static:h=!1,future:m}=i;Eo()&&Xe(!1);let g=e.replace(/^\/*/,"/"),_=X.useMemo(()=>({basename:g,navigator:u,static:h,future:Va({v7_relativeSplatPath:!1},m)}),[g,m,u,h]);typeof s=="string"&&(s=_o(s));let{pathname:w="/",search:T="",hash:x="",state:H=null,key:B="default"}=s,G=X.useMemo(()=>{let U=uo(w,g);return U==null?null:{location:{pathname:U,search:T,hash:x,state:H,key:B},navigationType:a}},[g,w,T,x,H,B,a]);return G==null?null:X.createElement(Nr.Provider,{value:_},X.createElement(rc.Provider,{children:t,value:G}))}function jE(i){let{children:e,location:t}=i;return wE(ad(e),t)}new Promise(()=>{});function ad(i,e){e===void 0&&(e=[]);let t=[];return X.Children.forEach(i,(s,a)=>{if(!X.isValidElement(s))return;let u=[...e,a];if(s.type===X.Fragment){t.push.apply(t,ad(s.props.children,u));return}s.type!==Zn&&Xe(!1),!s.props.index||!s.props.children||Xe(!1);let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=ad(s.props.children,u)),t.push(h)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bu(){return bu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},bu.apply(null,arguments)}function Iy(i,e){if(i==null)return{};var t={};for(var s in i)if({}.hasOwnProperty.call(i,s)){if(e.indexOf(s)!==-1)continue;t[s]=i[s]}return t}function FE(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function UE(i,e){return i.button===0&&(!e||e==="_self")&&!FE(i)}const zE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],BE=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],$E="6";try{window.__reactRouterVersion=$E}catch{}const HE=X.createContext({isTransitioning:!1}),WE="startTransition",Hm=j0[WE];function qE(i){let{basename:e,children:t,future:s,window:a}=i,u=X.useRef();u.current==null&&(u.current=W0({window:a,v5Compat:!0}));let h=u.current,[m,g]=X.useState({action:h.action,location:h.location}),{v7_startTransition:_}=s||{},w=X.useCallback(T=>{_&&Hm?Hm(()=>g(T)):g(T)},[g,_]);return X.useLayoutEffect(()=>h.listen(w),[h,w]),X.useEffect(()=>VE(s),[s]),X.createElement(ME,{basename:e,children:t,location:m.location,navigationType:m.action,navigator:h,future:s})}const GE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,La=X.forwardRef(function(e,t){let{onClick:s,relative:a,reloadDocument:u,replace:h,state:m,target:g,to:_,preventScrollReset:w,viewTransition:T}=e,x=Iy(e,zE),{basename:H}=X.useContext(Nr),B,G=!1;if(typeof _=="string"&&KE.test(_)&&(B=_,GE))try{let se=new URL(window.location.href),ce=_.startsWith("//")?new URL(se.protocol+_):new URL(_),De=uo(ce.pathname,H);ce.origin===se.origin&&De!=null?_=De+ce.search+ce.hash:G=!0}catch{}let U=yE(_,{relative:a}),ie=JE(_,{replace:h,state:m,target:g,preventScrollReset:w,relative:a,viewTransition:T});function te(se){s&&s(se),se.defaultPrevented||ie(se)}return X.createElement("a",bu({},x,{href:B||U,onClick:G||u?s:te,ref:t,target:g}))}),Sy=X.forwardRef(function(e,t){let{"aria-current":s="page",caseSensitive:a=!1,className:u="",end:h=!1,style:m,to:g,viewTransition:_,children:w}=e,T=Iy(e,BE),x=sc(g,{relative:T.relative}),H=wo(),B=X.useContext(yy),{navigator:G,basename:U}=X.useContext(Nr),ie=B!=null&&XE(x)&&_===!0,te=G.encodeLocation?G.encodeLocation(x).pathname:x.pathname,se=H.pathname,ce=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;a||(se=se.toLowerCase(),ce=ce?ce.toLowerCase():null,te=te.toLowerCase()),ce&&U&&(ce=uo(ce,U)||ce);const De=te!=="/"&&te.endsWith("/")?te.length-1:te.length;let Te=se===te||!h&&se.startsWith(te)&&se.charAt(De)==="/",O=ce!=null&&(ce===te||!h&&ce.startsWith(te)&&ce.charAt(te.length)==="/"),S={isActive:Te,isPending:O,isTransitioning:ie},A=Te?s:void 0,R;typeof u=="function"?R=u(S):R=[u,Te?"active":null,O?"pending":null,ie?"transitioning":null].filter(Boolean).join(" ");let D=typeof m=="function"?m(S):m;return X.createElement(La,bu({},T,{"aria-current":A,className:R,ref:t,style:D,to:g,viewTransition:_}),typeof w=="function"?w(S):w)});var ld;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(ld||(ld={}));var Wm;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Wm||(Wm={}));function QE(i){let e=X.useContext(nc);return e||Xe(!1),e}function JE(i,e){let{target:t,replace:s,state:a,preventScrollReset:u,relative:h,viewTransition:m}=e===void 0?{}:e,g=ic(),_=wo(),w=sc(i,{relative:h});return X.useCallback(T=>{if(UE(T,t)){T.preventDefault();let x=s!==void 0?s:Lu(_)===Lu(w);g(i,{replace:x,state:a,preventScrollReset:u,relative:h,viewTransition:m})}},[_,g,w,s,a,t,i,u,h,m])}function XE(i,e){e===void 0&&(e={});let t=X.useContext(HE);t==null&&Xe(!1);let{basename:s}=QE(ld.useViewTransitionState),a=sc(i,{relative:e.relative});if(!t.isTransitioning)return!1;let u=uo(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=uo(t.nextLocation.pathname,s)||t.nextLocation.pathname;return od(a.pathname,h)!=null||od(a.pathname,u)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=X.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:u,iconNode:h,...m},g)=>X.createElement("svg",{ref:g,...ZE,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Cy("lucide",a),...m},[...h.map(([_,w])=>X.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(i,e)=>{const t=X.forwardRef(({className:s,...a},u)=>X.createElement(ew,{ref:u,iconNode:e,className:Cy(`lucide-${YE(i)}`,s),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Pt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Pt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Pt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=Pt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=Pt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Pt("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=Pt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=Pt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Pt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Pt("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=Pt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Pt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=Pt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Pt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Pt("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Pt("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Pt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),gw=[{to:"/dashboard",label:"Início",icon:sw},{to:"/jogos",label:"Jogos",icon:ow},{to:"/meus-palpites",label:"Palpites",icon:hw},{to:"/ranking",label:"Ranking",icon:Ld},{to:"/admin",label:"Admin",icon:rw}];function yw(){return C.jsx("nav",{className:"fixed inset-x-0 bottom-0 z-40 border-t border-sofia-green/10 bg-white/95 px-2 py-2 backdrop-blur md:hidden",children:C.jsx("div",{className:"grid grid-cols-5 gap-1",children:gw.map(i=>{const e=i.icon;return C.jsxs(Sy,{to:i.to,className:({isActive:t})=>["flex h-14 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold transition",t?"bg-sofia-green text-white":"text-sofia-green hover:bg-sofia-cream"].join(" "),children:[C.jsx(e,{"aria-hidden":!0,size:19,strokeWidth:2.2}),C.jsx("span",{children:i.label})]},i.to)})})})}const vw=[{to:"/dashboard",label:"Dashboard"},{to:"/jogos",label:"Jogos"},{to:"/meus-palpites",label:"Meus Palpites"},{to:"/ranking",label:"Ranking"},{to:"/admin",label:"Admin"}];function _w(){return C.jsx("header",{className:"sticky top-0 z-30 border-b border-sofia-green/10 bg-white/95 backdrop-blur",children:C.jsxs("div",{className:"mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[C.jsxs(La,{to:"/dashboard",className:"flex min-w-0 items-center gap-3",children:[C.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sofia-green text-white",children:C.jsx(Ld,{"aria-hidden":!0,size:22})}),C.jsxs("span",{className:"min-w-0",children:[C.jsx("span",{className:"block truncate text-sm font-black uppercase text-sofia-green sm:text-base",children:"Bolão Copa"}),C.jsx("span",{className:"block truncate text-xs font-semibold text-sofia-green/70",children:"Mercado Sofia"})]})]}),C.jsx("nav",{className:"hidden items-center gap-1 md:flex",children:vw.map(i=>C.jsx(Sy,{to:i.to,className:({isActive:e})=>["rounded-md px-3 py-2 text-sm font-semibold transition",e?"bg-sofia-green text-white":"text-sofia-green hover:bg-sofia-cream"].join(" "),children:i.label},i.to))}),C.jsxs(La,{to:"/login",className:"secondary-button hidden md:inline-flex",children:[C.jsx(lw,{"aria-hidden":!0,size:17}),"Sair"]})]})})}function Ew(){return C.jsxs("div",{className:"min-h-screen bg-sofia-cream pb-20 md:pb-0",children:[C.jsx(_w,{}),C.jsx("main",{children:C.jsx(bE,{})}),C.jsx(yw,{})]})}function Ha({eyebrow:i,title:e,description:t}){return C.jsxs("div",{className:"mb-5",children:[i?C.jsx("p",{className:"mb-2 text-xs font-black uppercase tracking-wide text-sofia-gold",children:i}):null,C.jsx("h1",{className:"text-2xl font-black text-sofia-green sm:text-3xl",children:e}),C.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-6 text-slate-600",children:t})]})}function ww(){return C.jsxs("div",{className:"page-shell",children:[C.jsx(Ha,{title:"Admin",description:"Área para gerenciar jogos, resultados e participantes do sistema interno."}),C.jsxs("section",{className:"grid gap-4 lg:grid-cols-[0.95fr_1.05fr]",children:[C.jsxs("article",{className:"panel p-5",children:[C.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[C.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-sofia-green text-white",children:C.jsx(nw,{"aria-hidden":!0,size:21})}),C.jsx("h2",{className:"text-lg font-black text-sofia-green",children:"Cadastrar jogo"})]}),C.jsxs("form",{className:"grid gap-4 sm:grid-cols-2",children:[C.jsx("input",{className:"field",placeholder:"Seleção mandante"}),C.jsx("input",{className:"field",placeholder:"Seleção visitante"}),C.jsx("input",{className:"field",placeholder:"Grupo"}),C.jsx("input",{className:"field",placeholder:"Local"}),C.jsx("input",{className:"field",type:"datetime-local"}),C.jsxs("select",{className:"field",defaultValue:"aberto",children:[C.jsx("option",{value:"aberto",children:"Palpite aberto"}),C.jsx("option",{value:"encerrado",children:"Encerrado"}),C.jsx("option",{value:"finalizado",children:"Finalizado"})]}),C.jsx("button",{className:"primary-button sm:col-span-2",type:"button",children:"Salvar jogo"})]})]}),C.jsxs("div",{className:"grid gap-4",children:[C.jsxs("article",{className:"panel p-5",children:[C.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[C.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-sofia-gold/25 text-sofia-green",children:C.jsx(iw,{"aria-hidden":!0,size:21})}),C.jsx("h2",{className:"text-lg font-black text-sofia-green",children:"Lançar resultado"})]}),C.jsxs("form",{className:"grid grid-cols-[1fr_auto_1fr] gap-2 sm:grid-cols-[1fr_auto_1fr_auto]",children:[C.jsx("input",{className:"field text-center",inputMode:"numeric",placeholder:"0"}),C.jsx("span",{className:"self-center font-black text-sofia-green",children:"x"}),C.jsx("input",{className:"field text-center",inputMode:"numeric",placeholder:"0"}),C.jsx("button",{className:"secondary-button col-span-3 sm:col-span-1",type:"button",children:"Atualizar"})]})]}),C.jsxs("article",{className:"panel p-5",children:[C.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[C.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-sofia-green text-white",children:C.jsx(pw,{"aria-hidden":!0,size:21})}),C.jsx("h2",{className:"text-lg font-black text-sofia-green",children:"Participantes"})]}),C.jsxs("div",{className:"grid gap-3 sm:grid-cols-3",children:[C.jsxs("div",{className:"rounded-lg bg-sofia-cream p-4",children:[C.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"Ativos"}),C.jsx("p",{className:"mt-1 text-2xl font-black text-sofia-green",children:"42"})]}),C.jsxs("div",{className:"rounded-lg bg-sofia-cream p-4",children:[C.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"Setores"}),C.jsx("p",{className:"mt-1 text-2xl font-black text-sofia-green",children:"6"})]}),C.jsxs("div",{className:"rounded-lg bg-sofia-cream p-4",children:[C.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"Palpites"}),C.jsx("p",{className:"mt-1 text-2xl font-black text-sofia-green",children:"118"})]})]})]})]})]})]})}const Tw=()=>{};var qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Iw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[t++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[t++],h=i[t++],m=i[t++],g=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Py={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const u=i[a],h=a+1<i.length,m=h?i[a+1]:0,g=a+2<i.length,_=g?i[a+2]:0,w=u>>2,T=(u&3)<<4|m>>4;let x=(m&15)<<2|_>>6,H=_&63;g||(H=64,h||(x=64)),s.push(t[w],t[T],t[x],t[H])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ay(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Iw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const u=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const _=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,u==null||m==null||_==null||T==null)throw new Sw;const x=u<<2|m>>4;if(s.push(x),_!==64){const H=m<<4&240|_>>2;if(s.push(H),T!==64){const B=_<<6&192|T;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cw=function(i){const e=Ay(i);return Py.encodeByteArray(e,!0)},Mu=function(i){return Cw(i).replace(/\./g,"")},Ry=function(i){try{return Py.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=()=>kw().__FIREBASE_DEFAULTS__,Pw=()=>{if(typeof process>"u"||typeof qm>"u")return;const i=qm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Rw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ry(i[1]);return e&&JSON.parse(e)},oc=()=>{try{return Tw()||Aw()||Pw()||Rw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},xy=i=>{var e,t;return(t=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},xw=i=>{const e=xy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ny=()=>{var i;return(i=oc())===null||i===void 0?void 0:i.config},Oy=i=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dy(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Mu(JSON.stringify(t)),Mu(JSON.stringify(h)),""].join(".")}const ka={};function Dw(){const i={prod:[],emulator:[]};for(const e of Object.keys(ka))ka[e]?i.emulator.push(e):i.prod.push(e);return i}function Vw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Gm=!1;function Vy(i,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||ka[i]===e||ka[i]||Gm)return;ka[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=Dw().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function g(x,H){x.setAttribute("width","24"),x.setAttribute("id",H),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function _(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Gm=!0,h()},x}function w(x,H){x.setAttribute("id",H),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function T(){const x=Vw(s),H=t("text"),B=document.getElementById(H)||document.createElement("span"),G=t("learnmore"),U=document.getElementById(G)||document.createElement("a"),ie=t("preprendIcon"),te=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const se=x.element;m(se),w(U,G);const ce=_();g(te,ie),se.append(te,B,U,ce),document.body.appendChild(se)}u?(B.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function bw(){var i;const e=(i=oc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Fw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function zw(){return!bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bw(){try{return typeof indexedDB=="object"}catch{return!1}}function $w(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="FirebaseError";class zn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Hw,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?Ww(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new zn(a,m,s)}}function Ww(i,e){return i.replace(qw,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const qw=/\{\$([^}]+)}/g;function Gw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Yi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const u=i[a],h=e[a];if(Km(u)&&Km(h)){if(!Yi(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function Km(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ia(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,u]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(u)}}),e}function Sa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Kw(i,e){const t=new Qw(i,e);return t.subscribe.bind(t)}class Qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Jw(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Qh),a.error===void 0&&(a.error=Qh),a.complete===void 0&&(a.complete=Qh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(i){return i&&i._delegate?i._delegate:i}class Zi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Nw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zw(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(a,u);const h=this.instances.get(a);return h&&e(h,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(i){return i===Ki?void 0:i}function Zw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const t1={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},n1=Ce.INFO,r1={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},i1=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=r1[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bd{constructor(e){this.name=e,this._logLevel=n1,this._logHandler=i1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const s1=(i,e)=>e.some(t=>i instanceof t);let Qm,Jm;function o1(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a1(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ly=new WeakMap,ud=new WeakMap,by=new WeakMap,Jh=new WeakMap,Md=new WeakMap;function l1(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(di(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ly.set(t,i)}).catch(()=>{}),Md.set(e,i),e}function u1(i){if(ud.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ud.set(i,e)}let cd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ud.get(i);if(e==="objectStoreNames")return i.objectStoreNames||by.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function c1(i){cd=i(cd)}function h1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Xh(this),e,...t);return by.set(s,e.sort?e.sort():[e]),di(s)}:a1().includes(i)?function(...e){return i.apply(Xh(this),e),di(Ly.get(this))}:function(...e){return di(i.apply(Xh(this),e))}}function d1(i){return typeof i=="function"?h1(i):(i instanceof IDBTransaction&&u1(i),s1(i,o1())?new Proxy(i,cd):i)}function di(i){if(i instanceof IDBRequest)return l1(i);if(Jh.has(i))return Jh.get(i);const e=d1(i);return e!==i&&(Jh.set(i,e),Md.set(e,i)),e}const Xh=i=>Md.get(i);function f1(i,e,{blocked:t,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(i,e),m=di(h);return s&&h.addEventListener("upgradeneeded",g=>{s(di(h.result),g.oldVersion,g.newVersion,di(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),a&&g.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const p1=["get","getKey","getAll","getAllKeys","count"],m1=["put","add","delete","clear"],Yh=new Map;function Xm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Yh.get(e))return Yh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=m1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||p1.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,a?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),a&&g.done]))[0]};return Yh.set(e,u),u}c1(i=>({...i,get:(e,t,s)=>Xm(e,t)||i.get(e,t,s),has:(e,t)=>!!Xm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(y1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function y1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Ym="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new bd("@firebase/app"),v1="@firebase/app-compat",_1="@firebase/analytics-compat",E1="@firebase/analytics",w1="@firebase/app-check-compat",T1="@firebase/app-check",I1="@firebase/auth",S1="@firebase/auth-compat",C1="@firebase/database",k1="@firebase/data-connect",A1="@firebase/database-compat",P1="@firebase/functions",R1="@firebase/functions-compat",x1="@firebase/installations",N1="@firebase/installations-compat",O1="@firebase/messaging",D1="@firebase/messaging-compat",V1="@firebase/performance",L1="@firebase/performance-compat",b1="@firebase/remote-config",M1="@firebase/remote-config-compat",j1="@firebase/storage",F1="@firebase/storage-compat",U1="@firebase/firestore",z1="@firebase/ai",B1="@firebase/firestore-compat",$1="firebase",H1="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",W1={[hd]:"fire-core",[v1]:"fire-core-compat",[E1]:"fire-analytics",[_1]:"fire-analytics-compat",[T1]:"fire-app-check",[w1]:"fire-app-check-compat",[I1]:"fire-auth",[S1]:"fire-auth-compat",[C1]:"fire-rtdb",[k1]:"fire-data-connect",[A1]:"fire-rtdb-compat",[P1]:"fire-fn",[R1]:"fire-fn-compat",[x1]:"fire-iid",[N1]:"fire-iid-compat",[O1]:"fire-fcm",[D1]:"fire-fcm-compat",[V1]:"fire-perf",[L1]:"fire-perf-compat",[b1]:"fire-rc",[M1]:"fire-rc-compat",[j1]:"fire-gcs",[F1]:"fire-gcs-compat",[U1]:"fire-fst",[B1]:"fire-fst-compat",[z1]:"fire-vertex","fire-js":"fire-js",[$1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,q1=new Map,fd=new Map;function Zm(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function co(i){const e=i.name;if(fd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,i);for(const t of ju.values())Zm(t,i);for(const t of q1.values())Zm(t,i);return!0}function jd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Wa("app","Firebase",G1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=H1;function My(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dd,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw fi.create("bad-app-name",{appName:String(a)});if(t||(t=Ny()),!t)throw fi.create("no-options");const u=ju.get(a);if(u){if(Yi(t,u.options)&&Yi(s,u.config))return u;throw fi.create("duplicate-app",{appName:a})}const h=new e1(a);for(const g of fd.values())h.addComponent(g);const m=new K1(t,s,h);return ju.set(a,m),m}function jy(i=dd){const e=ju.get(i);if(!e&&i===dd&&Ny())return My();if(!e)throw fi.create("no-app",{appName:i});return e}function pi(i,e,t){var s;let a=(s=W1[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const u=a.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${a}" with version "${e}":`];u&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(m.join(" "));return}co(new Zi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="firebase-heartbeat-database",J1=1,ba="firebase-heartbeat-store";let Zh=null;function Fy(){return Zh||(Zh=f1(Q1,J1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ba)}catch(t){console.warn(t)}}}}).catch(i=>{throw fi.create("idb-open",{originalErrorMessage:i.message})})),Zh}async function X1(i){try{const t=(await Fy()).transaction(ba),s=await t.objectStore(ba).get(Uy(i));return await t.done,s}catch(e){if(e instanceof zn)Rr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function eg(i,e){try{const s=(await Fy()).transaction(ba,"readwrite");await s.objectStore(ba).put(e,Uy(i)),await s.done}catch(t){if(t instanceof zn)Rr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function Uy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=1024,Z1=30;class eT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=tg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats.length>Z1){const h=rT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tg(),{heartbeatsToSend:s,unsentEntries:a}=tT(this._heartbeatsCache.heartbeats),u=Mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function tg(){return new Date().toISOString().substring(0,10)}function tT(i,e=Y1){const t=[];let s=i.slice();for(const a of i){const u=t.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),ng(t)>e){u.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),ng(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class nT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bw()?$w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await X1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return eg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return eg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function ng(i){return Mu(JSON.stringify({version:2,heartbeats:i})).length}function rT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(i){co(new Zi("platform-logger",e=>new g1(e),"PRIVATE")),co(new Zi("heartbeat",e=>new eT(e),"PRIVATE")),pi(hd,Ym,i),pi(hd,Ym,"esm2017"),pi("fire-js","")}iT("");var sT="firebase",oT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pi(sT,oT,"app");function Fd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aT=zy,By=new Wa("auth","Firebase",zy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new bd("@firebase/auth");function lT(i,...e){Fu.logLevel<=Ce.WARN&&Fu.warn(`Auth (${Io}): ${i}`,...e)}function ku(i,...e){Fu.logLevel<=Ce.ERROR&&Fu.error(`Auth (${Io}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(i,...e){throw Ud(i,...e)}function tr(i,...e){return Ud(i,...e)}function $y(i,e,t){const s=Object.assign(Object.assign({},aT()),{[e]:t});return new Wa("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return $y(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ud(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return By.create(i,...e)}function ye(i,e,...t){if(!i)throw Ud(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ku(e),new Error(e)}function xr(i,e){i||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function uT(){return rg()==="http:"||rg()==="https:"}function rg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uT()||jw()||"connection"in navigator)?navigator.onLine:!0}function hT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=Lw()||Fw()}get(){return cT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(i,e){xr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pT=new Ga(3e4,6e4);function _i(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Dr(i,e,t,s,a={}){return Wy(i,a,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=qa(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return Mw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&To(i.emulatorConfig.host)&&(_.credentials="include"),Hy.fetch()(await qy(i,i.config.apiHost,t,m),_)})}async function Wy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},dT),e);try{const a=new gT(i),u=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw _u(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw _u(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw _u(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw $y(i,w,_);Un(i,w)}}catch(a){if(a instanceof zn)throw a;Un(i,"network-request-failed",{message:String(a)})}}async function Ka(i,e,t,s,a={}){const u=await Dr(i,e,t,s,a);return"mfaPendingCredential"in u&&Un(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function qy(i,e,t,s){const a=`${e}${t}?${s}`,u=i,h=u.config.emulator?zd(i.config,a):`${i.config.apiScheme}://${a}`;return fT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function mT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),pT.get())})}}function _u(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=tr(i,e,s);return a.customData._tokenResponse=t,a}function ig(i){return i!==void 0&&i.enterprise!==void 0}class yT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vT(i,e){return Dr(i,"GET","/v2/recaptchaConfig",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(i,e){return Dr(i,"POST","/v1/accounts:delete",e)}async function Uu(i,e){return Dr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ET(i,e=!1){const t=_n(i),s=await t.getIdToken(e),a=Bd(s);ye(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:a,token:s,authTime:Aa(ed(a.auth_time)),issuedAtTime:Aa(ed(a.iat)),expirationTime:Aa(ed(a.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ed(i){return Number(i)*1e3}function Bd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ry(t);return a?JSON.parse(a):(ku("Failed to decode base64 JWT payload"),null)}catch(a){return ku("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function sg(i){const e=Bd(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zn&&wT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function wT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(i){var e;const t=i.auth,s=await i.getIdToken(),a=await ho(i,Uu(t,{idToken:s}));ye(a==null?void 0:a.users.length,t,"internal-error");const u=a.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Gy(u.providerUserInfo):[],m=ST(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,T={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new md(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,T)}async function IT(i){const e=_n(i);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ST(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Gy(i){return i.map(e=>{var{providerId:t}=e,s=Fd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(i,e){const t=await Wy(i,{},async()=>{const s=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,h=await qy(i,a,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&To(i.emulatorConfig.host)&&(g.credentials="include"),Hy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kT(i,e){return Dr(i,"POST","/v2/accounts:revokeToken",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:u}=await CT(e,t);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:u}=t,h=new io;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(ye(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,u=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new md(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ho(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ET(this,e)}reload(){return IT(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await ho(this,_T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,u,h,m,g,_,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,x=(a=t.email)!==null&&a!==void 0?a:void 0,H=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(m=t.tenantId)!==null&&m!==void 0?m:void 0,U=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ie=(_=t.createdAt)!==null&&_!==void 0?_:void 0,te=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:se,emailVerified:ce,isAnonymous:De,providerData:Te,stsTokenManager:O}=t;ye(se&&O,e,"internal-error");const S=io.fromJSON(this.name,O);ye(typeof se=="string",e,"internal-error"),si(T,e.name),si(x,e.name),ye(typeof ce=="boolean",e,"internal-error"),ye(typeof De=="boolean",e,"internal-error"),si(H,e.name),si(B,e.name),si(G,e.name),si(U,e.name),si(ie,e.name),si(te,e.name);const A=new jn({uid:se,auth:e,email:x,emailVerified:ce,displayName:T,isAnonymous:De,photoURL:B,phoneNumber:H,tenantId:G,stsTokenManager:S,createdAt:ie,lastLoginAt:te});return Te&&Array.isArray(Te)&&(A.providerData=Te.map(R=>Object.assign({},R))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,s=!1){const a=new io;a.updateFromServerResponse(t);const u=new jn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await zu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];ye(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?Gy(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),m=new io;m.updateFromIdToken(s);const g=new jn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new md(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Map;function Sr(i){xr(i instanceof Function,"Expected a class definition");let e=og.get(i);return e?(xr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,og.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ky.type="NONE";const ag=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(i,e,t){return`firebase:${i}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=Au(this.userKey,a.apiKey,u),this.fullPersistenceKey=Au("persistence",a.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uu(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(Sr(ag),e,s);const a=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=a[0]||Sr(ag);const h=Au(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const x=await Uu(e,{idToken:w}).catch(()=>{});if(!x)break;T=await jn._fromGetAccountInfoResponse(e,x,w)}else T=jn._fromJSON(e,w);_!==u&&(m=T),u=_;break}}catch{}const g=a.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new so(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new so(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(Jy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(Zy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qy(i=Ft()){return/firefox\//i.test(i)}function Jy(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(i=Ft()){return/crios\//i.test(i)}function Yy(i=Ft()){return/iemobile/i.test(i)}function Zy(i=Ft()){return/android/i.test(i)}function ev(i=Ft()){return/blackberry/i.test(i)}function tv(i=Ft()){return/webos/i.test(i)}function $d(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function AT(i=Ft()){var e;return $d(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PT(){return Uw()&&document.documentMode===10}function nv(i=Ft()){return $d(i)||Zy(i)||tv(i)||ev(i)||/windows phone/i.test(i)||Yy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(i,e=[]){let t;switch(i){case"Browser":t=lg(Ft());break;case"Worker":t=`${lg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Io}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(i,e={}){return Dr(i,"GET","/v2/passwordPolicy",_i(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=6;class OT{constructor(e){var t,s,a,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:NT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(a=g.containsLowercaseLetter)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new RT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,a,u;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uu(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(a=g.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Cr(this));const t=e?_n(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xT(this),t=new OT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,a);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function os(i){return _n(i)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kw(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VT(i){ac=i}function iv(i){return ac.loadJS(i)}function LT(){return ac.recaptchaEnterpriseScript}function bT(){return ac.gapiScript}function MT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class jT{constructor(){this.enterprise=new FT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const UT="recaptcha-enterprise",sv="NO_RECAPTCHA";class zT{constructor(e){this.type=UT,this.auth=os(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{vT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new yT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function a(u,h,m){const g=window.grecaptcha;ig(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(sv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&ig(window.grecaptcha))a(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=LT();g.length!==0&&(g+=m),iv(g).then(()=>{a(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function cg(i,e,t,s=!1,a=!1){const u=new zT(i);let h;if(a)h=sv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function gd(i,e,t,s,a){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await cg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await cg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(i,e){const t=jd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),u=t.getOptions();if(Yi(u,e??{}))return a;Un(a,"already-initialized")}return t.initialize({options:e})}function $T(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HT(i,e,t){const s=os(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=ov(e),{host:h,port:m}=WT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(Yi(_,s.config.emulator)&&Yi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,To(h)?(Dy(`${u}//${h}${g}`),Vy("Auth",!0)):qT()}function ov(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function WT(i){const e=ov(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:hg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:hg(h)}}}function hg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function qT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function GT(i,e){return Dr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(i,e){return Ka(i,"POST","/v1/accounts:signInWithPassword",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",_i(i,e))}async function JT(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Hd{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ma(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ma(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,t,"signInWithPassword",KT);case"emailLink":return QT(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,s,"signUpPassword",GT);case"emailLink":return JT(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(i,e){return Ka(i,"POST","/v1/accounts:signInWithIdp",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="http://localhost";class es extends Hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,u=Fd(t,["providerId","signInMethod"]);if(!s||!a)return null;const h=new es(s,a);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:XT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZT(i){const e=Ia(Sa(i)).link,t=e?Ia(Sa(e)).deep_link_id:null,s=Ia(Sa(i)).deep_link_id;return(s?Ia(Sa(s)).link:null)||s||t||e||i}class Wd{constructor(e){var t,s,a,u,h,m;const g=Ia(Sa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,T=YT((a=g.mode)!==null&&a!==void 0?a:null);ye(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=ZT(e);try{return new Wd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.providerId=So.PROVIDER_ID}static credential(e,t){return Ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Wd.parseLink(t);return ye(s,"argument-error"),Ma._fromEmailAndCode(e,s.code,s.tenantId)}}So.PROVIDER_ID="password";So.EMAIL_PASSWORD_SIGN_IN_METHOD="password";So.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Qa{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return es._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Qa{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Qa{constructor(){super("twitter.com")}static credential(e,t){return es._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(i,e){return Ka(i,"POST","/v1/accounts:signUp",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const u=await jn._fromIdTokenResponse(e,s,a),h=dg(s);return new ts({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=dg(s);return new ts({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function dg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends zn{constructor(e,t,s,a){var u;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Bu(e,t,s,a)}}function lv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(i,u,e,s):u})}async function tI(i,e,t=!1){const s=await ho(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ts._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(i,e,t=!1){const{auth:s}=i;if(vn(s.app))return Promise.reject(Cr(s));const a="reauthenticate";try{const u=await ho(i,lv(s,a,e,i),t);ye(u.idToken,s,"internal-error");const h=Bd(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),ts._forOperation(i,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Un(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(i,e,t=!1){if(vn(i.app))return Promise.reject(Cr(i));const s="signIn",a=await lv(i,s,e),u=await ts._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(u.user),u}async function rI(i,e){return uv(os(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(i){const e=os(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iI(i,e,t){if(vn(i.app))return Promise.reject(Cr(i));const s=os(i),h=await gd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&cv(i),g}),m=await ts._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function sI(i,e,t){return vn(i.app)?Promise.reject(Cr(i)):rI(_n(i),So.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&cv(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(i,e){return Dr(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=_n(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await ho(s,oI(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function lI(i,e,t,s){return _n(i).onIdTokenChanged(e,t,s)}function uI(i,e,t){return _n(i).beforeAuthStateChanged(e,t)}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=1e3,hI=10;class dv extends hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);PT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,hI):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dv.type="LOCAL";const dI=dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv extends hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fv.type="SESSION";const pv=fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new lc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:u}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await fI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=qd("",20);a.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(T){const x=T;if(x.data.eventId===_)switch(x.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function mI(i){nr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function gI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function vI(){return mv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebaseLocalStorageDb",_I=1,Hu="firebaseLocalStorage",yv="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uc(i,e){return i.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function EI(){const i=indexedDB.deleteDatabase(gv);return new Ja(i).toPromise()}function yd(){const i=indexedDB.open(gv,_I);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Hu,{keyPath:yv})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Hu)?e(s):(s.close(),await EI(),e(await yd()))})})}async function fg(i,e,t){const s=uc(i,!0).put({[yv]:e,value:t});return new Ja(s).toPromise()}async function wI(i,e){const t=uc(i,!1).get(e),s=await new Ja(t).toPromise();return s===void 0?null:s.value}function pg(i,e){const t=uc(i,!0).delete(e);return new Ja(t).toPromise()}const TI=800,II=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>II)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(vI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gI(),!this.activeServiceWorker)return;this.sender=new pI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await fg(e,$u,"1"),await pg(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>fg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>wI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=uc(a,!1).getAll();return new Ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const SI=vv;new Ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(i,e){return e?Sr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kI(i){return uv(i.auth,new Gd(i),i.bypassAuthState)}function AI(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),nI(t,new Gd(i),i.bypassAuthState)}async function PI(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),tI(t,new Gd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kI;case"linkViaPopup":case"linkViaRedirect":return PI;case"reauthViaPopup":case"reauthViaRedirect":return AI;default:Un(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Ga(2e3,1e4);class ro extends _v{constructor(e,t,s,a,u){super(e,t,a,u),this.provider=s,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RI.get())};e()}}ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="pendingRedirect",Pu=new Map;class NI extends _v{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const s=await OI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OI(i,e){const t=LI(e),s=VI(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function DI(i,e){Pu.set(i._key(),e)}function VI(i){return Sr(i._redirectPersistence)}function LI(i){return Au(xI,i.config.apiKey,i.name)}async function bI(i,e,t=!1){if(vn(i.app))return Promise.reject(Cr(i));const s=os(i),a=CI(s,e),h=await new NI(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=600*1e3;class jI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ev(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MI&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ev({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ev(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(i,e={}){return Dr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BI=/^https?/;async function $I(i){if(i.config.emulator)return;const{authorizedDomains:e}=await UI(i);for(const t of e)try{if(HI(t))return}catch{}Un(i,"unauthorized-domain")}function HI(i){const e=pd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!BI.test(t))return!1;if(zI.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new Ga(3e4,6e4);function gg(){const i=nr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function qI(i){return new Promise((e,t)=>{var s,a,u;function h(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),t(tr(i,"network-request-failed"))},timeout:WI.get()})}if(!((a=(s=nr().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((u=nr().gapi)===null||u===void 0)&&u.load)h();else{const m=MT("iframefcb");return nr()[m]=()=>{gapi.load?h():t(tr(i,"network-request-failed"))},iv(`${bT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function GI(i){return Ru=Ru||qI(i),Ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Ga(5e3,15e3),QI="__/auth/iframe",JI="emulator/auth/iframe",XI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZI(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?zd(e,JI):`https://${i.config.authDomain}/${QI}`,s={apiKey:e.apiKey,appName:i.name,v:Io},a=YI.get(i.config.apiHost);a&&(s.eid=a);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${qa(s).slice(1)}`}async function eS(i){const e=await GI(i),t=nr().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:ZI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XI,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(i,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},KI.get());function g(){nr().clearTimeout(m),a(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,rS=600,iS="_blank",sS="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(i,e,t,s=nS,a=rS){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},tS),{width:s.toString(),height:a.toString(),top:u,left:h}),_=Ft().toLowerCase();t&&(m=Xy(_)?iS:t),Qy(_)&&(e=e||sS,g.scrollbars="yes");const w=Object.entries(g).reduce((x,[H,B])=>`${x}${H}=${B},`,"");if(AT(_)&&m!=="_self")return aS(e||"",m),new yg(null);const T=window.open(e||"",m,w);ye(T,i,"popup-blocked");try{T.focus()}catch{}return new yg(T)}function aS(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="__/auth/handler",uS="emulator/auth/handler",cS=encodeURIComponent("fac");async function vg(i,e,t,s,a,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Io,eventId:a};if(e instanceof av){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Gw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof Qa){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${cS}=${encodeURIComponent(g)}`:"";return`${hS(i)}?${qa(m).slice(1)}${_}`}function hS({config:i}){return i.emulator?zd(i,uS):`https://${i.authDomain}/${lS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="webStorageSupport";class dS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pv,this._completeRedirectFn=bI,this._overrideRedirectResult=DI}async _openPopup(e,t,s,a){var u;xr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await vg(e,t,s,pd(),a);return oS(e,h,qd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const u=await vg(e,t,s,pd(),a);return mI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:u}=this.eventManagers[t];return a?Promise.resolve(a):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await eS(e),s=new jI(e);return t.register("authEvent",a=>(ye(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(td,{type:td},a=>{var u;const h=(u=a==null?void 0:a[0])===null||u===void 0?void 0:u[td];h!==void 0&&t(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$I(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nv()||Jy()||$d()}}const fS=dS;var _g="@firebase/auth",Eg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gS(i){co(new Zi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(i)},_=new DT(s,a,u,g);return $T(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),co(new Zi("auth-internal",e=>{const t=os(e.getProvider("auth").getImmediate());return(s=>new pS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(_g,Eg,mS(i)),pi(_g,Eg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=300,vS=Oy("authIdTokenMaxAge")||yS;let wg=null;const _S=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vS)return;const a=t==null?void 0:t.token;wg!==a&&(wg=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ES(i=jy()){const e=jd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=BT(i,{popupRedirectResolver:fS,persistence:[SI,dI,pv]}),s=Oy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=_S(u.toString());uI(t,h,()=>h(t.currentUser)),lI(t,m=>h(m))}}const a=xy("auth");return a&&HT(t,`http://${a}`),t}function wS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}VT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const u=tr("internal-error");u.customData=a,t(u)},s.type="text/javascript",s.charset="UTF-8",wS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gS("Browser");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kd;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function A(){}A.prototype=S.prototype,O.D=S.prototype,O.prototype=new A,O.prototype.constructor=O,O.C=function(R,D,L){for(var k=Array(arguments.length-2),et=2;et<arguments.length;et++)k[et-2]=arguments[et];return S.prototype[D].apply(R,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(O,S,A){A||(A=0);var R=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)R[D]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(D=0;16>D;++D)R[D]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=O.g[0],A=O.g[1],D=O.g[2];var L=O.g[3],k=S+(L^A&(D^L))+R[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=L+(D^S&(A^D))+R[1]+3905402710&4294967295,L=S+(k<<12&4294967295|k>>>20),k=D+(A^L&(S^A))+R[2]+606105819&4294967295,D=L+(k<<17&4294967295|k>>>15),k=A+(S^D&(L^S))+R[3]+3250441966&4294967295,A=D+(k<<22&4294967295|k>>>10),k=S+(L^A&(D^L))+R[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=L+(D^S&(A^D))+R[5]+1200080426&4294967295,L=S+(k<<12&4294967295|k>>>20),k=D+(A^L&(S^A))+R[6]+2821735955&4294967295,D=L+(k<<17&4294967295|k>>>15),k=A+(S^D&(L^S))+R[7]+4249261313&4294967295,A=D+(k<<22&4294967295|k>>>10),k=S+(L^A&(D^L))+R[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=L+(D^S&(A^D))+R[9]+2336552879&4294967295,L=S+(k<<12&4294967295|k>>>20),k=D+(A^L&(S^A))+R[10]+4294925233&4294967295,D=L+(k<<17&4294967295|k>>>15),k=A+(S^D&(L^S))+R[11]+2304563134&4294967295,A=D+(k<<22&4294967295|k>>>10),k=S+(L^A&(D^L))+R[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=L+(D^S&(A^D))+R[13]+4254626195&4294967295,L=S+(k<<12&4294967295|k>>>20),k=D+(A^L&(S^A))+R[14]+2792965006&4294967295,D=L+(k<<17&4294967295|k>>>15),k=A+(S^D&(L^S))+R[15]+1236535329&4294967295,A=D+(k<<22&4294967295|k>>>10),k=S+(D^L&(A^D))+R[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=L+(A^D&(S^A))+R[6]+3225465664&4294967295,L=S+(k<<9&4294967295|k>>>23),k=D+(S^A&(L^S))+R[11]+643717713&4294967295,D=L+(k<<14&4294967295|k>>>18),k=A+(L^S&(D^L))+R[0]+3921069994&4294967295,A=D+(k<<20&4294967295|k>>>12),k=S+(D^L&(A^D))+R[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=L+(A^D&(S^A))+R[10]+38016083&4294967295,L=S+(k<<9&4294967295|k>>>23),k=D+(S^A&(L^S))+R[15]+3634488961&4294967295,D=L+(k<<14&4294967295|k>>>18),k=A+(L^S&(D^L))+R[4]+3889429448&4294967295,A=D+(k<<20&4294967295|k>>>12),k=S+(D^L&(A^D))+R[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=L+(A^D&(S^A))+R[14]+3275163606&4294967295,L=S+(k<<9&4294967295|k>>>23),k=D+(S^A&(L^S))+R[3]+4107603335&4294967295,D=L+(k<<14&4294967295|k>>>18),k=A+(L^S&(D^L))+R[8]+1163531501&4294967295,A=D+(k<<20&4294967295|k>>>12),k=S+(D^L&(A^D))+R[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=L+(A^D&(S^A))+R[2]+4243563512&4294967295,L=S+(k<<9&4294967295|k>>>23),k=D+(S^A&(L^S))+R[7]+1735328473&4294967295,D=L+(k<<14&4294967295|k>>>18),k=A+(L^S&(D^L))+R[12]+2368359562&4294967295,A=D+(k<<20&4294967295|k>>>12),k=S+(A^D^L)+R[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=L+(S^A^D)+R[8]+2272392833&4294967295,L=S+(k<<11&4294967295|k>>>21),k=D+(L^S^A)+R[11]+1839030562&4294967295,D=L+(k<<16&4294967295|k>>>16),k=A+(D^L^S)+R[14]+4259657740&4294967295,A=D+(k<<23&4294967295|k>>>9),k=S+(A^D^L)+R[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=L+(S^A^D)+R[4]+1272893353&4294967295,L=S+(k<<11&4294967295|k>>>21),k=D+(L^S^A)+R[7]+4139469664&4294967295,D=L+(k<<16&4294967295|k>>>16),k=A+(D^L^S)+R[10]+3200236656&4294967295,A=D+(k<<23&4294967295|k>>>9),k=S+(A^D^L)+R[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=L+(S^A^D)+R[0]+3936430074&4294967295,L=S+(k<<11&4294967295|k>>>21),k=D+(L^S^A)+R[3]+3572445317&4294967295,D=L+(k<<16&4294967295|k>>>16),k=A+(D^L^S)+R[6]+76029189&4294967295,A=D+(k<<23&4294967295|k>>>9),k=S+(A^D^L)+R[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=L+(S^A^D)+R[12]+3873151461&4294967295,L=S+(k<<11&4294967295|k>>>21),k=D+(L^S^A)+R[15]+530742520&4294967295,D=L+(k<<16&4294967295|k>>>16),k=A+(D^L^S)+R[2]+3299628645&4294967295,A=D+(k<<23&4294967295|k>>>9),k=S+(D^(A|~L))+R[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=L+(A^(S|~D))+R[7]+1126891415&4294967295,L=S+(k<<10&4294967295|k>>>22),k=D+(S^(L|~A))+R[14]+2878612391&4294967295,D=L+(k<<15&4294967295|k>>>17),k=A+(L^(D|~S))+R[5]+4237533241&4294967295,A=D+(k<<21&4294967295|k>>>11),k=S+(D^(A|~L))+R[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=L+(A^(S|~D))+R[3]+2399980690&4294967295,L=S+(k<<10&4294967295|k>>>22),k=D+(S^(L|~A))+R[10]+4293915773&4294967295,D=L+(k<<15&4294967295|k>>>17),k=A+(L^(D|~S))+R[1]+2240044497&4294967295,A=D+(k<<21&4294967295|k>>>11),k=S+(D^(A|~L))+R[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=L+(A^(S|~D))+R[15]+4264355552&4294967295,L=S+(k<<10&4294967295|k>>>22),k=D+(S^(L|~A))+R[6]+2734768916&4294967295,D=L+(k<<15&4294967295|k>>>17),k=A+(L^(D|~S))+R[13]+1309151649&4294967295,A=D+(k<<21&4294967295|k>>>11),k=S+(D^(A|~L))+R[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=L+(A^(S|~D))+R[11]+3174756917&4294967295,L=S+(k<<10&4294967295|k>>>22),k=D+(S^(L|~A))+R[2]+718787259&4294967295,D=L+(k<<15&4294967295|k>>>17),k=A+(L^(D|~S))+R[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,O.g[2]=O.g[2]+D&4294967295,O.g[3]=O.g[3]+L&4294967295}s.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var A=S-this.blockSize,R=this.B,D=this.h,L=0;L<S;){if(D==0)for(;L<=A;)a(this,O,L),L+=this.blockSize;if(typeof O=="string"){for(;L<S;)if(R[D++]=O.charCodeAt(L++),D==this.blockSize){a(this,R),D=0;break}}else for(;L<S;)if(R[D++]=O[L++],D==this.blockSize){a(this,R),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var A=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=A&255,A/=256;for(this.u(O),O=Array(16),S=A=0;4>S;++S)for(var R=0;32>R;R+=8)O[A++]=this.g[S]>>>R&255;return O};function u(O,S){var A=m;return Object.prototype.hasOwnProperty.call(A,O)?A[O]:A[O]=S(O)}function h(O,S){this.h=S;for(var A=[],R=!0,D=O.length-1;0<=D;D--){var L=O[D]|0;R&&L==S||(A[D]=L,R=!1)}this.g=A}var m={};function g(O){return-128<=O&&128>O?u(O,function(S){return new h([S|0],0>S?-1:0)}):new h([O|0],0>O?-1:0)}function _(O){if(isNaN(O)||!isFinite(O))return T;if(0>O)return U(_(-O));for(var S=[],A=1,R=0;O>=A;R++)S[R]=O/A|0,A*=4294967296;return new h(S,0)}function w(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return U(w(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(S,8)),R=T,D=0;D<O.length;D+=8){var L=Math.min(8,O.length-D),k=parseInt(O.substring(D,D+L),S);8>L?(L=_(Math.pow(S,L)),R=R.j(L).add(_(k))):(R=R.j(A),R=R.add(_(k)))}return R}var T=g(0),x=g(1),H=g(16777216);i=h.prototype,i.m=function(){if(G(this))return-U(this).m();for(var O=0,S=1,A=0;A<this.g.length;A++){var R=this.i(A);O+=(0<=R?R:4294967296+R)*S,S*=4294967296}return O},i.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(B(this))return"0";if(G(this))return"-"+U(this).toString(O);for(var S=_(Math.pow(O,6)),A=this,R="";;){var D=ce(A,S).g;A=ie(A,D.j(S));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(O);if(A=D,B(A))return L+R;for(;6>L.length;)L="0"+L;R=L+R}},i.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function B(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function G(O){return O.h==-1}i.l=function(O){return O=ie(this,O),G(O)?-1:B(O)?0:1};function U(O){for(var S=O.g.length,A=[],R=0;R<S;R++)A[R]=~O.g[R];return new h(A,~O.h).add(x)}i.abs=function(){return G(this)?U(this):this},i.add=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],R=0,D=0;D<=S;D++){var L=R+(this.i(D)&65535)+(O.i(D)&65535),k=(L>>>16)+(this.i(D)>>>16)+(O.i(D)>>>16);R=k>>>16,L&=65535,k&=65535,A[D]=k<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ie(O,S){return O.add(U(S))}i.j=function(O){if(B(this)||B(O))return T;if(G(this))return G(O)?U(this).j(U(O)):U(U(this).j(O));if(G(O))return U(this.j(U(O)));if(0>this.l(H)&&0>O.l(H))return _(this.m()*O.m());for(var S=this.g.length+O.g.length,A=[],R=0;R<2*S;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var D=0;D<O.g.length;D++){var L=this.i(R)>>>16,k=this.i(R)&65535,et=O.i(D)>>>16,Rt=O.i(D)&65535;A[2*R+2*D]+=k*Rt,te(A,2*R+2*D),A[2*R+2*D+1]+=L*Rt,te(A,2*R+2*D+1),A[2*R+2*D+1]+=k*et,te(A,2*R+2*D+1),A[2*R+2*D+2]+=L*et,te(A,2*R+2*D+2)}for(R=0;R<S;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=S;R<2*S;R++)A[R]=0;return new h(A,0)};function te(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function se(O,S){this.g=O,this.h=S}function ce(O,S){if(B(S))throw Error("division by zero");if(B(O))return new se(T,T);if(G(O))return S=ce(U(O),S),new se(U(S.g),U(S.h));if(G(S))return S=ce(O,U(S)),new se(U(S.g),S.h);if(30<O.g.length){if(G(O)||G(S))throw Error("slowDivide_ only works with positive integers.");for(var A=x,R=S;0>=R.l(O);)A=De(A),R=De(R);var D=Te(A,1),L=Te(R,1);for(R=Te(R,2),A=Te(A,2);!B(R);){var k=L.add(R);0>=k.l(O)&&(D=D.add(A),L=k),R=Te(R,1),A=Te(A,1)}return S=ie(O,D.j(S)),new se(D,S)}for(D=T;0<=O.l(S);){for(A=Math.max(1,Math.floor(O.m()/S.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),L=_(A),k=L.j(S);G(k)||0<k.l(O);)A-=R,L=_(A),k=L.j(S);B(L)&&(L=x),D=D.add(L),O=ie(O,k)}return new se(D,O)}i.A=function(O){return ce(this,O).h},i.and=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],R=0;R<S;R++)A[R]=this.i(R)&O.i(R);return new h(A,this.h&O.h)},i.or=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],R=0;R<S;R++)A[R]=this.i(R)|O.i(R);return new h(A,this.h|O.h)},i.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],R=0;R<S;R++)A[R]=this.i(R)^O.i(R);return new h(A,this.h^O.h)};function De(O){for(var S=O.g.length+1,A=[],R=0;R<S;R++)A[R]=O.i(R)<<1|O.i(R-1)>>>31;return new h(A,O.h)}function Te(O,S){var A=S>>5;S%=32;for(var R=O.g.length-A,D=[],L=0;L<R;L++)D[L]=0<S?O.i(L+A)>>>S|O.i(L+A+1)<<32-S:O.i(L+A);return new h(D,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Kd=h}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wv,Ca,Tv,xu,vd,Iv,Sv,Cv;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var b=l[E];if(!(b in y))break e;y=y[b]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,b={next:function(){if(!E&&y<l.length){var z=y++;return{value:f(z,l[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}a("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function T(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,E),l.apply(f,b)}}return function(){return l.apply(f,arguments)}}function x(l,f,y){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,x.apply(null,arguments)}function H(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function B(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,b,z){for(var Z=Array(arguments.length-2),be=2;be<arguments.length;be++)Z[be-2]=arguments[be];return f.prototype[b].apply(E,Z)}}function G(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function U(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const b=l.length||0,z=E.length||0;l.length=b+z;for(let Z=0;Z<z;Z++)l[b+Z]=E[Z]}else l.push(E)}}class ie{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function te(l){return/^[\s\xa0]*$/.test(l)}function se(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function ce(l){return ce[" "](l),l}ce[" "]=function(){};var De=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function Te(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function O(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function S(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,f){let y,E;for(let b=1;b<arguments.length;b++){E=arguments[b];for(y in E)l[y]=E[y];for(let z=0;z<A.length;z++)y=A[z],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function L(l){m.setTimeout(()=>{throw l},0)}function k(){var l=fe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=Rt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Rt=new ie(()=>new xt,l=>l.reset());class xt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ee=!1,fe=new et,re=()=>{const l=m.Promise.resolve(void 0);Me=()=>{l.then(V)}};var V=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(y){L(y)}var f=Rt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ee=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ee=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Ie(l,f){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(De){e:{try{ce(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}B(Ie,de);var Ae={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Le=0;function Fe(l,f,y,E,b){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=b,this.key=++Le,this.da=this.fa=!1}function ft(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function sr(l){this.src=l,this.g={},this.h=0}sr.prototype.add=function(l,f,y,E,b){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var Z=Vr(l,f,E,b);return-1<Z?(f=l[Z],y||(f.fa=!1)):(f=new Fe(f,this.src,z,!!E,b),f.fa=y,l.push(f)),f};function us(l,f){var y=f.type;if(y in l.g){var E=l.g[y],b=Array.prototype.indexOf.call(E,f,void 0),z;(z=0<=b)&&Array.prototype.splice.call(E,b,1),z&&(ft(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Vr(l,f,y,E){for(var b=0;b<l.length;++b){var z=l[b];if(!z.da&&z.listener==f&&z.capture==!!y&&z.ha==E)return b}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),cs={};function Ao(l,f,y,E,b){if(Array.isArray(f)){for(var z=0;z<f.length;z++)Ao(l,f[z],y,E,b);return null}return y=xo(y),l&&l[Ve]?l.K(f,y,_(E)?!!E.capture:!1,b):Po(l,f,y,!1,E,b)}function Po(l,f,y,E,b,z){if(!f)throw Error("Invalid event type");var Z=_(b)?!!b.capture:!!b,be=ds(l);if(be||(l[Ei]=be=new sr(l)),y=be.add(f,y,E,Z,z),y.proxy)return y;if(E=rl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ee||(b=Z),b===void 0&&(b=!1),l.addEventListener(f.toString(),E,b);else if(l.attachEvent)l.attachEvent(ar(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function rl(){function l(y){return f.call(l.src,l.listener,y)}const f=Ro;return l}function hs(l,f,y,E,b){if(Array.isArray(f))for(var z=0;z<f.length;z++)hs(l,f[z],y,E,b);else E=_(E)?!!E.capture:!!E,y=xo(y),l&&l[Ve]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],y=Vr(z,y,E,b),-1<y&&(ft(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=ds(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Vr(f,y,E,b)),(y=-1<l?f[l]:null)&&or(y))}function or(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ve])us(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(ar(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ds(f))?(us(y,l),y.h==0&&(y.src=null,f[Ei]=null)):ft(l)}}}function ar(l){return l in cs?cs[l]:cs[l]="on"+l}function Ro(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&or(l),l=y.call(E,f)}return l}function ds(l){return l=l[Ei],l instanceof sr?l:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function xo(l){return typeof l=="function"?l:(l[fs]||(l[fs]=function(f){return l.handleEvent(f)}),l[fs])}function lt(){$.call(this),this.i=new sr(this),this.M=this,this.F=null}B(lt,$),lt.prototype[Ve]=!0,lt.prototype.removeEventListener=function(l,f,y,E){hs(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new de(f,l);else if(f instanceof de)f.target=f.target||l;else{var b=f;f=new de(E,l),R(f,b)}if(b=!0,y)for(var z=y.length-1;0<=z;z--){var Z=f.g=y[z];b=lr(Z,E,!0,f)&&b}if(Z=f.g=l,b=lr(Z,E,!0,f)&&b,b=lr(Z,E,!1,f)&&b,y)for(z=0;z<y.length;z++)Z=f.g=y[z],b=lr(Z,E,!1,f)&&b}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)ft(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function lr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,z=0;z<f.length;++z){var Z=f[z];if(Z&&!Z.da&&Z.capture==y){var be=Z.listener,ct=Z.ha||Z.src;Z.fa&&us(l.i,Z),b=be.call(ct,E)!==!1&&b}}return b&&!E.defaultPrevented}function No(l,f,y){if(typeof l=="function")y&&(l=x(l,y));else if(l&&typeof l.handleEvent=="function")l=x(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Lr(l){l.g=No(()=>{l.g=null,l.i&&(l.i=!1,Lr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class wi extends ${constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(l){$.call(this),this.h=l,this.g={}}B(Ti,$);var Oo=[];function Do(l){Te(l.g,function(f,y){this.g.hasOwnProperty(y)&&or(f)},l),l.g={}}Ti.prototype.N=function(){Ti.aa.N.call(this),Do(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vo=m.JSON.stringify,Lo=m.JSON.parse,bo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ii(){}Ii.prototype.h=null;function ps(l){return l.h||(l.h=l.i())}function ms(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){de.call(this,"d")}B(Bn,de);function gs(){de.call(this,"c")}B(gs,de);var $n={},Mo=null;function Si(){return Mo=Mo||new lt}$n.La="serverreachability";function jo(l){de.call(this,$n.La,l)}B(jo,de);function ur(l){const f=Si();ut(f,new jo(f))}$n.STAT_EVENT="statevent";function Fo(l,f){de.call(this,$n.STAT_EVENT,l),this.stat=f}B(Fo,de);function tt(l){const f=Si();ut(f,new Fo(f,l))}$n.Ma="timingevent";function ys(l,f){de.call(this,$n.Ma,l),this.size=f}B(ys,de);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function ki(l,f,y,E,b,z){l.info(function(){if(l.g)if(z)for(var Z="",be=z.split("&"),ct=0;ct<be.length;ct++){var Pe=be[ct].split("=");if(1<Pe.length){var pt=Pe[0];Pe=Pe[1];var it=pt.split("_");Z=2<=it.length&&it[1]=="type"?Z+(pt+"="+Pe+"&"):Z+(pt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+E+") [attempt "+b+"]: "+f+`
`+y+`
`+Z})}function vs(l,f,y,E,b,z,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+b+"]: "+f+`
`+y+`
`+z+" "+Z})}function wn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+yc(l,y)+(E?" "+E:"")})}function Uo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ci.prototype.info=function(){};function yc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var b=E[1];if(Array.isArray(b)&&!(1>b.length)){var z=b[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<b.length;Z++)b[Z]=""}}}}return Vo(y)}catch{return f}}var _s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},il={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ai(){}B(Ai,Ii),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},Tn=new Ai;function In(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sl}function sl(){this.i=null,this.g="",this.h=!1}var zo={},Es={};function ws(l,f,y){l.L=1,l.v=Ur(tn(f)),l.m=y,l.P=!0,Bo(l,null)}function Bo(l,f){l.F=Date.now(),Ue(l),l.A=tn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Br(y.i,"t",E),l.C=0,y=l.j.J,l.h=new sl,l.g=Il(l.j,y?f:null,!l.m),0<l.O&&(l.M=new wi(x(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Oo[0]=b.toString()),b=Oo);for(var z=0;z<b.length;z++){var Z=Ao(y,b[z],E||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ur(),ki(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const it=Wt(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Ko(this.g)))){this.J||it!=4||f==7||(f==8||0>=hn?ur(3):ur(2)),Pi(this);var y=this.g.Z();this.X=y;t:if(ol(this)){var E=Ko(this.g);l="";var b=E.length,z=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),br(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(z&&f==b-1)});E.length=0,this.h.g+=l,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,vs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ct=this.g;if((be=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(be)){var Pe=be;break t}}Pe=null}if(y=Pe)wn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$o(this,y);else{this.o=!1,this.s=3,tt(12),un(this),br(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<Z.length;)if(rn=vc(this,Z),rn==Es){it==4&&(this.s=4,tt(14),y=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==zo){this.s=4,tt(15),wn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else wn(this.i,this.l,rn,null),$o(this,rn);if(ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Z.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)wn(this.i,this.l,Z,"[Invalid Chunked Response]"),un(this),br(this);else if(0<Z.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Jo(pt),pt.M=!0,tt(11))}}else wn(this.i,this.l,Z,null),$o(this,Z);it==4&&un(this),this.o&&!this.J&&(it==4?Os(this.j,this):(this.o=!1,Ue(this)))}else As(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),un(this),br(this)}}}catch{}finally{}};function ol(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function vc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?Es:(y=Number(f.substring(y,E)),isNaN(y)?zo:(E+=1,E+y>f.length?Es:(f=f.slice(E,E+y),l.C=E+y,f)))}In.prototype.cancel=function(){this.J=!0,un(this)};function Ue(l){l.S=Date.now()+l.I,al(l,l.I)}function al(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(x(l.ba,l),f)}function Pi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Uo(this.i,this.A),this.L!=2&&(ur(),tt(17)),un(this),this.s=2,br(this)):al(this,this.S-l)};function br(l){l.j.G==0||l.J||Os(l.j,l)}function un(l){Pi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Do(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function $o(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var b=E;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ns(y),Pn(y);else break e;xs(y),tt(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=En(x(y.Za,y),6e3));if(1>=ul(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else pr(y,11)}else if((l.K||y.g==l)&&Ns(y),!te(f))for(b=y.Da.g.parse(f),f=0;f<b.length;f++){let Pe=b[f];if(y.T=Pe[0],Pe=Pe[1],y.G==2)if(Pe[0]=="c"){y.K=Pe[1],y.ia=Pe[2];const pt=Pe[3];pt!=null&&(y.la=pt,y.j.info("VER="+y.la));const it=Pe[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const hn=Pe[5];hn!=null&&typeof hn=="number"&&0<hn&&(E=1.5*hn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const rn=l.g;if(rn){const Li=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var z=E.h;z.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ho(z,z.h),z.h=null))}if(E.D){const Vs=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vs&&(E.ya=Vs,je(E.I,E.D,Vs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=l;if(E.qa=Tl(E,E.J?E.ia:null,E.W),Z.K){cl(E.h,Z);var be=Z,ct=E.L;ct&&(be.I=ct),be.B&&(Pi(be),Ue(be)),E.g=Z}else Vi(E);0<y.i.length&&Gn(y)}else Pe[0]!="stop"&&Pe[0]!="close"||pr(y,7);else y.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?pr(y,7):wt(y):Pe[0]!="noop"&&y.l&&y.l.ta(Pe),y.v=0)}}ur(4)}catch{}}var ll=class{constructor(l,f){this.g=l,this.map=f}};function Ri(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ul(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ho(l,f){l.g?l.g.add(f):l.h=f}function cl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ri.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function hl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return G(l.i)}function Ts(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Is(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Mr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Is(l),E=Ts(l),b=E.length,z=0;z<b;z++)f.call(void 0,E[z],y&&y[z],l)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),b=null;if(0<=E){var z=l[y].substring(0,E);b=l[y].substring(E+1)}else z=l[y];f(z,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function cr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof cr){this.h=l.h,Ni(this,l.j),this.o=l.o,this.g=l.g,jr(this,l.s),this.l=l.l;var f=l.i,y=new Hn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Fr(this,y),this.m=l.m}else l&&(f=String(l).match(xi))?(this.h=!1,Ni(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),jr(this,f[4]),this.l=ke(f[5]||"",!0),Fr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}cr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(zr(f,Ss,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(zr(f,Ss,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(zr(y,y.charAt(0)=="/"?pl:fl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",zr(y,Wo)),l.join("")};function tn(l){return new cr(l)}function Ni(l,f,y){l.j=y?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function jr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Fr(l,f,y){f instanceof Hn?(l.i=f,Wn(l.i,l.h)):(y||(f=zr(f,ml)),l.i=new Hn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function Ur(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,dl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function dl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ss=/[#\/\?@]/g,fl=/[#\?:]/g,pl=/[#\?]/g,ml=/[#\?@]/g,Wo=/#/g;function Hn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&_c(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Hn.prototype,i.add=function(l,f){Et(this),this.i=null,l=cn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Sn(l,f){Et(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Cn(l,f){return Et(l),f=cn(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(y,E){y.forEach(function(b){l.call(f,b,E,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const b=l[E];for(let z=0;z<b.length;z++)y.push(f[E])}return y},i.V=function(l){Et(this);let f=[];if(typeof l=="string")Cn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Et(this),this.i=null,l=cn(this,l),Cn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Br(l,f,y){Sn(l,f),0<y.length&&(l.i=null,l.g.set(cn(l,f),G(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const z=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var b=z;Z[E]!==""&&(b+="="+encodeURIComponent(String(Z[E]))),l.push(b)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Wn(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(y,E){var b=E.toLowerCase();E!=b&&(Sn(this,E),Br(this,b,y))},l)),l.j=f}function Ec(l,f){const y=new Ci;if(m.Image){const E=new Image;E.onload=H(Ht,y,"TestLoadImage: loaded",!0,f,E),E.onerror=H(Ht,y,"TestLoadImage: error",!1,f,E),E.onabort=H(Ht,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=H(Ht,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function gl(l,f){const y=new Ci,E=new AbortController,b=setTimeout(()=>{E.abort(),Ht(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(b),z.ok?Ht(y,"TestPingServer: ok",!0,f):Ht(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),Ht(y,"TestPingServer: error",!1,f)})}function Ht(l,f,y,E,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),E(y)}catch{}}function wc(){this.g=new bo}function yl(l,f,y){const E=y||"";try{Mr(l,function(b,z){let Z=b;_(b)&&(Z=Vo(b)),f.push(E+z+"="+encodeURIComponent(Z))})}catch(b){throw f.push(E+"type="+encodeURIComponent("_badmap")),b}}function hr(l){this.l=l.Ub||null,this.j=l.eb||!1}B(hr,Ii),hr.prototype.g=function(){return new Oi(this.l,this.j)},hr.prototype.i=(function(l){return function(){return l}})({});function Oi(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Oi,lt),i=Oi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,An(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?kn(this):An(this),this.readyState==3&&vl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,kn(this))},i.Qa=function(l){this.g&&(this.response=l,kn(this))},i.ga=function(){this.g&&kn(this)};function kn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function dr(l){let f="";return Te(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function $r(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=dr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function We(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(We,lt);var Tc=/^https?$/i,qo=["POST","PUT"];i=We.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?ps(this.o):ps(Tn),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Di(this,z);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var b in E)y.set(b,E[b]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),b=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(qo,f,void 0))||E||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ks(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Di(this,z)}};function Di(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Cs(l),nn(l)}function Cs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),We.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Go(this):this.bb())},i.bb=function(){Go(this)};function Go(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)No(l.Ea,0,l);else if(ut(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const Z=l.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=Z===0){var b=String(l.D).match(xi)[1]||null;!b&&m.self&&m.self.location&&(b=m.self.location.protocol.slice(0,-1)),E=!Tc.test(b?b.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var z=2<Wt(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",Cs(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){ks(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function ks(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lo(f)}};function Ko(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function As(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(te(l[E]))continue;var y=D(l[E]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=f[b]||[];f[b]=z,z.push(y)}O(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Qo(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,l),this.cb=qn("retryDelaySeedMs",1e4,l),this.Wa=qn("forwardChannelMaxRetries",2,l),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(l&&l.concurrentRequestLimit),this.Da=new wc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Qo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Tl(this,null,this.W),Gn(this)};function wt(l){if(Ps(l),l.G==3){var f=l.U++,y=tn(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),fr(l,y),f=new In(l,l.j,f),f.L=2,f.v=Ur(tn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Il(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ue(f)}wl(l)}function Pn(l){l.g&&(Jo(l),l.g.cancel(),l.g=null)}function Ps(l){Pn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ns(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Gn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Me||re(),ee||(Me(),ee=!0),fe.add(f,l),l.B=0}}function Ic(l,f){return ul(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(x(l.Ga,l,f),El(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new In(this,this.j,l);let z=this.o;if(this.S&&(z?(z=S(z),R(z,this.S)):z=this.S),this.m!==null||this.O||(b.H=z,z=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Hr(this,b,f),y=tn(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),fr(this,y),z&&(this.O?f="headers="+encodeURIComponent(String(dr(z)))+"&"+f:this.m&&$r(y,this.m,z)),Ho(this.h,b),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),b.T=!0,ws(b,y,null)):ws(b,y,f),this.G=2}}else this.G==3&&(l?Rs(this,l):this.i.length==0||en(this.h)||Rs(this))};function Rs(l,f){var y;f?y=f.l:y=l.U++;const E=tn(l.I);je(E,"SID",l.K),je(E,"RID",y),je(E,"AID",l.T),fr(l,E),l.m&&l.o&&$r(E,l.m,l.o),y=new In(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Hr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ho(l.h,y),ws(y,E,f)}function fr(l,f){l.H&&Te(l.H,function(y,E){je(f,E,y)}),l.l&&Mr({},function(y,E){je(f,E,y)})}function Hr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?x(l.l.Na,l.l,l):null;e:{var b=l.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=b[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let be=!0;for(let ct=0;ct<y;ct++){let Pe=b[ct].g;const pt=b[ct].map;if(Pe-=z,0>Pe)z=Math.max(0,b[ct].g-100),be=!1;else try{yl(pt,Z,"req"+Pe+"_")}catch{E&&E(pt)}}if(be){E=Z.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Vi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Me||re(),ee||(Me(),ee=!0),fe.add(f,l),l.v=0}}function xs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(x(l.Fa,l),El(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,_l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(x(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Pn(this),_l(this))};function Jo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function _l(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),fr(l,f),l.m&&l.o&&$r(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Ur(tn(f)),y.m=null,y.P=!0,Bo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Pn(this),xs(this),tt(19))};function Ns(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Os(l,f){var y=null;if(l.g==f){Ns(l),Jo(l),l.g=null;var E=2}else if(Ut(l.h,f))y=f.D,cl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var b=l.B;E=Si(),ut(E,new ys(E,y)),Gn(l)}else Vi(l);else if(b=f.s,b==3||b==0&&0<f.X||!(E==1&&Ic(l,f)||E==2&&xs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),b){case 1:pr(l,5);break;case 4:pr(l,10);break;case 3:pr(l,6);break;default:pr(l,2)}}}function El(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function pr(l,f){if(l.j.info("Error code "+f),f==2){var y=x(l.fb,l),E=l.Xa;const b=!E;E=new cr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ni(E,"https"),Ur(E),b?Ec(E.toString(),y):gl(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),wl(l),Ps(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function wl(l){if(l.G=0,l.ka=[],l.l){const f=hl(l.h);(f.length!=0||l.i.length!=0)&&(U(l.ka,f),U(l.ka,l.i),l.h.i.length=0,G(l.i),l.i.length=0),l.l.ra()}}function Tl(l,f,y){var E=y instanceof cr?tn(y):new cr(y);if(E.g!="")f&&(E.g=f+"."+E.g),jr(E,E.s);else{var b=m.location;E=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var z=new cr(null);E&&Ni(z,E),f&&(z.g=f),b&&jr(z,b),y&&(z.l=y),E=z}return y=l.D,f=l.ya,y&&f&&je(E,y,f),je(E,"VER",l.la),fr(l,E),E}function Il(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new We(new hr({eb:y})):new We(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}i=Xo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ds(){}Ds.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){lt.call(this),this.g=new Qo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!te(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!te(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Kn(this)}B(zt,lt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){wt(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Vo(l),l=y);f.i.push(new ll(f.Ya++,l)),f.G==3&&Gn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,zt.aa.N.call(this)};function Sl(l){Bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}B(Sl,Bn);function Cl(){gs.call(this),this.status=1}B(Cl,gs);function Kn(l){this.g=l}B(Kn,Xo),Kn.prototype.ua=function(){ut(this.g,"a")},Kn.prototype.ta=function(l){ut(this.g,new Sl(l))},Kn.prototype.sa=function(l){ut(this.g,new Cl)},Kn.prototype.ra=function(){ut(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Cv=function(){return new Ds},Sv=function(){return Si()},Iv=$n,vd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,xu=_s,il.COMPLETE="complete",Tv=il,ms.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ca=ms,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,wv=We}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore",Sg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new bd("@firebase/firestore");function to(){return ns.logLevel}function ue(i,...e){if(ns.logLevel<=Ce.DEBUG){const t=e.map(Qd);ns.debug(`Firestore (${Co}): ${i}`,...t)}}function rs(i,...e){if(ns.logLevel<=Ce.ERROR){const t=e.map(Qd);ns.error(`Firestore (${Co}): ${i}`,...t)}}function fo(i,...e){if(ns.logLevel<=Ce.WARN){const t=e.map(Qd);ns.warn(`Firestore (${Co}): ${i}`,...t)}}function Qd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,kv(i,s,t)}function kv(i,e,t){let s=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw rs(s),new Error(s)}function Ze(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||kv(e,a,s)}function Be(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class IS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class SS{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let s=this.i;const a=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ji,e.enqueueRetryable((()=>a(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await a(this.currentUser)}))},m=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ji)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new Av(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class CS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new CS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const a=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>a(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?a(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Cg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=PS(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<t&&(s+=e.charAt(a[u]%62))}return s}}function Ne(i,e){return i<e?-1:i>e?1:0}function _d(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ne(s,a);{const u=RS(),h=xS(u.encode(kg(i,t)),u.encode(kg(e,t)));return h!==0?h:Ne(s,a)}}t+=s>65535?2:1}return Ne(i.length,e.length)}function kg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function xS(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ne(i[t],e[t]);return Ne(i.length,e.length)}function po(i,e,t){return i.length===e.length&&i.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const u=er.compareSegments(e.get(a),t.get(a));if(u!==0)return u}return Ne(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),a=er.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?er.extractNumericId(e).compare(er.extractNumericId(t)):_d(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kd.fromString(e.substring(4,e.length-2))}}class rt extends er{construct(e,t,s){return new rt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new rt(t)}static emptyPath(){return new rt([])}}const NS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends er{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return NS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ag}static keyField(){return new kt([Ag])}static fromServerFormat(e){const t=[];let s="",a=0;const u=()=>{if(s.length===0)throw new ge(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ge(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[a+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ge(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new ge(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(rt.fromString(e))}static fromName(e){return new _e(rt.fromString(e).popFirst(5))}static empty(){return new _e(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new rt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(i,e,t){if(!t)throw new ge(J.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function DS(i,e,t,s){if(e===!0&&s===!0)throw new ge(J.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Pg(i){if(!_e.isDocumentKey(i))throw new ge(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Pv(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Xd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":we(12329,{type:typeof i})}function Ed(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ge(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(i);throw new ge(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(i,e){const t={typeString:i};return e&&(t.value=e),t}function Xa(i,e){if(!Pv(i))throw new ge(J.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(a&&typeof h!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ge(J.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=-62135596800,xg=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xg);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rg)throw new ge(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xg}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xa(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:at("string",Ke._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static fromTimestamp(e){return new Ge(e)}static min(){return new Ge(new Ke(0,0))}static max(){return new Ge(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=-1;function VS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Ge.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new mi(a,_e.empty(),e)}function LS(i){return new mi(i.readTime,i.key,ja)}class mi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new mi(Ge.min(),_e.empty(),ja)}static max(){return new mi(Ge.max(),_e.empty(),ja)}}function bS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(i.documentKey,e.documentKey),t!==0?t:Ne(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(i){if(i.code!==J.FAILED_PRECONDITION||i.message!==MS)throw i;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let a=0,u=0,h=!1;e.forEach((m=>{++a,m.next((()=>{++u,h&&u===a&&t()}),(g=>s(g)))})),h=!0,u===a&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((a=>a?W.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,u)=>{s.push(t.call(this,a,u))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>a(w)))}}))}static doWhile(e,t){return new W(((s,a)=>{const u=()=>{e()===!0?t().next((()=>{u()}),a):s()};u()}))}}function FS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ya(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Zd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=-1;function tf(i){return i==null}function Wu(i){return i===0&&1/i==-1/0}function US(i){return typeof i=="number"&&Number.isInteger(i)&&!Wu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="";function zS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ng(e)),e=BS(i.get(t),e);return Ng(e)}function BS(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const u=i.charAt(a);switch(u){case"\0":t+="";break;case Rv:t+="";break;default:t+=u}}return t}function Ng(i){return i+Rv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ko(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function xv(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Zt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,a,u){this.key=e,this.value=t,this.color=s??St.RED,this.left=a??St.EMPTY,this.right=u??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,u){return new St(e??this.key,t??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,t,s),null):u===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return St.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,a,u){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new Zt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dg(this.data.getIterator())}getIteratorFrom(e){return new Dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class Dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new At(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new $S("Invalid base64 string: "+u):u}})(e);return new rr(t)}static fromUint8Array(e){const t=(function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u})(e);return new rr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rr.EMPTY_BYTE_STRING=new rr("");const HS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(i){if(Ze(!!i,39018),typeof i=="string"){let e=0;const t=HS.exec(i);if(Ze(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ct(i.seconds),nanos:Ct(i.nanos)}}function Ct(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function mo(i){return typeof i=="string"?rr.fromBase64String(i):rr.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="server_timestamp",Ov="__type__",Dv="__previous_value__",Vv="__local_write_time__";function nf(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ov])===null||t===void 0?void 0:t.stringValue)===Nv}function rf(i){const e=i.mapValue.fields[Dv];return nf(e)?rf(e):e}function qu(i){const e=is(i.mapValue.fields[Vv].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,t,s,a,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Gu="(default)";class Ku{constructor(e,t){this.projectId=e,this.database=t||Gu}static empty(){return new Ku("","")}get isDefaultDatabase(){return this.database===Gu}isEqual(e){return e instanceof Ku&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="__type__",qS="__max__",Tu={mapValue:{}},bv="__vector__",wd="value";function ss(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?nf(i)?4:KS(i)?9007199254740991:GS(i)?10:11:we(28295,{value:i})}function ir(i,e){if(i===e)return!0;const t=ss(i);if(t!==ss(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return qu(i).isEqual(qu(e));case 3:return(function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=is(a.timestampValue),m=is(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,u){return mo(a.bytesValue).isEqual(mo(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,u){return Ct(a.geoPointValue.latitude)===Ct(u.geoPointValue.latitude)&&Ct(a.geoPointValue.longitude)===Ct(u.geoPointValue.longitude)})(i,e);case 2:return(function(a,u){if("integerValue"in a&&"integerValue"in u)return Ct(a.integerValue)===Ct(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=Ct(a.doubleValue),m=Ct(u.doubleValue);return h===m?Wu(h)===Wu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return po(i.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(Og(h)!==Og(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ir(h[g],m[g])))return!1;return!0})(i,e);default:return we(52216,{left:i})}}function Fa(i,e){return(i.values||[]).find((t=>ir(t,e)))!==void 0}function go(i,e){if(i===e)return 0;const t=ss(i),s=ss(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=Ct(u.integerValue||u.doubleValue),g=Ct(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return Vg(i.timestampValue,e.timestampValue);case 4:return Vg(qu(i),qu(e));case 5:return _d(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=mo(u),g=mo(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Ne(m[_],g[_]);if(w!==0)return w}return Ne(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ne(Ct(u.latitude),Ct(h.latitude));return m!==0?m:Ne(Ct(u.longitude),Ct(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Lg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,_,w;const T=u.fields||{},x=h.fields||{},H=(m=T[wd])===null||m===void 0?void 0:m.arrayValue,B=(g=x[wd])===null||g===void 0?void 0:g.arrayValue,G=Ne(((_=H==null?void 0:H.values)===null||_===void 0?void 0:_.length)||0,((w=B==null?void 0:B.values)===null||w===void 0?void 0:w.length)||0);return G!==0?G:Lg(H,B)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Tu.mapValue&&h===Tu.mapValue)return 0;if(u===Tu.mapValue)return 1;if(h===Tu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const x=_d(g[T],w[T]);if(x!==0)return x;const H=go(m[g[T]],_[w[T]]);if(H!==0)return H}return Ne(g.length,w.length)})(i.mapValue,e.mapValue);default:throw we(23264,{le:t})}}function Vg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ne(i,e);const t=is(i),s=is(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function Lg(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const u=go(t[a],s[a]);if(u)return u}return Ne(t.length,s.length)}function yo(i){return Td(i)}function Td(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=is(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return mo(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return _e.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",a=!0;for(const u of t.values||[])a?a=!1:s+=",",s+=Td(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${Td(t.fields[h])}`;return a+"}"})(i.mapValue):we(61005,{value:i})}function Nu(i){switch(ss(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rf(i);return e?16+Nu(e):16;case 5:return 2*i.stringValue.length;case 6:return mo(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,u)=>a+Nu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return ko(s.fields,((u,h)=>{a+=u.length+Nu(h)})),a})(i.mapValue);default:throw we(13486,{value:i})}}function Id(i){return!!i&&"integerValue"in i}function sf(i){return!!i&&"arrayValue"in i}function Ou(i){return!!i&&"mapValue"in i}function GS(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Lv])===null||t===void 0?void 0:t.stringValue)===bv}function Pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ko(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function KS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===qS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ou(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=kt.emptyPath(),s={},a=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):a.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,a)}delete(e){const t=this.field(e.popLast());Ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Ou(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){ko(t,((a,u)=>e[a]=u));for(const a of s)delete e[a]}clone(){return new bn(Pa(this.value))}}function Mv(i){const e=[];return ko(i.fields,((t,s)=>{const a=new kt([t]);if(Ou(s)){const u=Mv(s.mapValue).fields;if(u.length===0)e.push(a);else for(const h of u)e.push(a.child(h))}else e.push(a)})),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,s,a,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ln(e,0,Ge.min(),Ge.min(),Ge.min(),bn.empty(),0)}static newFoundDocument(e,t,s,a){return new Ln(e,1,t,Ge.min(),s,a,0)}static newNoDocument(e,t){return new Ln(e,2,t,Ge.min(),Ge.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new Ln(e,3,t,Ge.min(),Ge.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ln&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function bg(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const u=e[a],h=i.position[a];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ir(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t="asc"){this.field=e,this.dir=t}}function QS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{}class _t extends jv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new XS(e,t,s):t==="array-contains"?new eC(e,s):t==="in"?new tC(e,s):t==="not-in"?new nC(e,s):t==="array-contains-any"?new rC(e,s):new _t(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new YS(e,s):new ZS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(go(t,this.value)):t!==null&&ss(this.value)===ss(t)&&this.matchesComparison(go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gi extends jv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new gi(e,t)}matches(e){return Fv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Fv(i){return i.op==="and"}function Uv(i){return JS(i)&&Fv(i)}function JS(i){for(const e of i.filters)if(e instanceof gi)return!1;return!0}function Sd(i){if(i instanceof _t)return i.field.canonicalString()+i.op.toString()+yo(i.value);if(Uv(i))return i.filters.map((e=>Sd(e))).join(",");{const e=i.filters.map((t=>Sd(t))).join(",");return`${i.op}(${e})`}}function zv(i,e){return i instanceof _t?(function(s,a){return a instanceof _t&&s.op===a.op&&s.field.isEqual(a.field)&&ir(s.value,a.value)})(i,e):i instanceof gi?(function(s,a){return a instanceof gi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((u,h,m)=>u&&zv(h,a.filters[m])),!0):!1})(i,e):void we(19439)}function Bv(i){return i instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`})(i):i instanceof gi?(function(t){return t.op.toString()+" {"+t.getFilters().map(Bv).join(" ,")+"}"})(i):"Filter"}class XS extends _t{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class YS extends _t{constructor(e,t){super(e,"in",t),this.keys=$v("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ZS extends _t{constructor(e,t){super(e,"not-in",t),this.keys=$v("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $v(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>_e.fromName(s.referenceValue)))}class eC extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&Fa(t.arrayValue,this.value)}}class tC extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fa(this.value.arrayValue,t)}}class nC extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fa(this.value.arrayValue,t)}}class rC extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Fa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function jg(i,e=null,t=[],s=[],a=null,u=null,h=null){return new iC(i,e,t,s,a,u,h)}function of(i){const e=Be(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Sd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),tf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>yo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>yo(s))).join(",")),e.Pe=t}return e.Pe}function af(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!QS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!zv(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Mg(i.startAt,e.startAt)&&Mg(i.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t=null,s=[],a=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function sC(i,e,t,s,a,u,h,m){return new cc(i,e,t,s,a,u,h,m)}function oC(i){return new cc(i)}function Fg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function aC(i){return i.collectionGroup!==null}function Ra(i){const e=Be(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new At(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Ju(u,s))})),t.has(kt.keyField().canonicalString())||e.Te.push(new Ju(kt.keyField(),s))}return e.Te}function Xi(i){const e=Be(i);return e.Ie||(e.Ie=lC(e,Ra(i))),e.Ie}function lC(i,e){if(i.limitType==="F")return jg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const u=a.dir==="desc"?"asc":"desc";return new Ju(a.field,u)}));const t=i.endAt?new Qu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Qu(i.startAt.position,i.startAt.inclusive):null;return jg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Cd(i,e,t){return new cc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Hv(i,e){return af(Xi(i),Xi(e))&&i.limitType===e.limitType}function Wv(i){return`${of(Xi(i))}|lt:${i.limitType}`}function Ta(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>Bv(a))).join(", ")}]`),tf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>yo(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>yo(a))).join(",")),`Target(${s})`})(Xi(i))}; limitType=${i.limitType})`}function lf(i,e){return e.isFoundDocument()&&(function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,a){for(const u of Ra(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(h,m,g){const _=bg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Ra(s),a)||s.endAt&&!(function(h,m,g){const _=bg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Ra(s),a))})(i,e)}function uC(i){return(e,t)=>{let s=!1;for(const a of Ra(i)){const u=cC(a,e,t);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function cC(i,e,t){const s=i.field.isKeyField()?_e.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?go(g,_):we(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ko(this.inner,((t,s)=>{for(const[a,u]of s)e(a,u)}))}isEmpty(){return xv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Zt(_e.comparator);function Xu(){return hC}const qv=new Zt(_e.comparator);function Iu(...i){let e=qv;for(const t of i)e=e.insert(t.key,t);return e}function Gv(i){let e=qv;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Qi(){return xa()}function Kv(){return xa()}function xa(){return new as((i=>i.toString()),((i,e)=>i.isEqual(e)))}const dC=new Zt(_e.comparator),fC=new At(_e.comparator);function Mt(...i){let e=fC;for(const t of i)e=e.add(t);return e}const pC=new At(Ne);function mC(){return pC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function Qv(i){return{integerValue:""+i}}function gC(i,e){return US(e)?Qv(e):uf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function yC(i,e,t){return i instanceof Ua?(function(a,u){const h={fields:{[Ov]:{stringValue:Nv},[Vv]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&nf(u)&&(u=rf(u)),u&&(h.fields[Dv]=u),{mapValue:h}})(t,e):i instanceof za?Xv(i,e):i instanceof Ba?Yv(i,e):(function(a,u){const h=Jv(a,u),m=Ug(h)+Ug(a.Ee);return Id(h)&&Id(a.Ee)?Qv(m):uf(a.serializer,m)})(i,e)}function vC(i,e,t){return i instanceof za?Xv(i,e):i instanceof Ba?Yv(i,e):t}function Jv(i,e){return i instanceof Yu?(function(s){return Id(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ua extends hc{}class za extends hc{constructor(e){super(),this.elements=e}}function Xv(i,e){const t=Zv(e);for(const s of i.elements)t.some((a=>ir(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Ba extends hc{constructor(e){super(),this.elements=e}}function Yv(i,e){let t=Zv(e);for(const s of i.elements)t=t.filter((a=>!ir(a,s)));return{arrayValue:{values:t}}}class Yu extends hc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Ug(i){return Ct(i.integerValue||i.doubleValue)}function Zv(i){return sf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,t){this.field=e,this.transform=t}}function EC(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof za&&a instanceof za||s instanceof Ba&&a instanceof Ba?po(s.elements,a.elements,ir):s instanceof Yu&&a instanceof Yu?ir(s.Ee,a.Ee):s instanceof Ua&&a instanceof Ua})(i.transform,e.transform)}class wC{constructor(e,t){this.version=e,this.transformResults=t}}class kr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kr}static exists(e){return new kr(void 0,e)}static updateTime(e){return new kr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Du(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class dc{}function e_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new n_(i.key,kr.none()):new Za(i.key,i.data,kr.none());{const t=i.data,s=bn.empty();let a=new At(kt.comparator);for(let u of e.fields)if(!a.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new ls(i.key,s,new Fn(a.toArray()),kr.none())}}function TC(i,e,t){i instanceof Za?(function(a,u,h){const m=a.value.clone(),g=Bg(a.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ls?(function(a,u,h){if(!Du(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Bg(a.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(t_(a)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Na(i,e,t,s){return i instanceof Za?(function(u,h,m,g){if(!Du(u.precondition,h))return m;const _=u.value.clone(),w=$g(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ls?(function(u,h,m,g){if(!Du(u.precondition,h))return m;const _=$g(u.fieldTransforms,g,h),w=h.data;return w.setAll(t_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(i,e,t,s):(function(u,h,m){return Du(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function IC(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),u=Jv(s.transform,a||null);u!=null&&(t===null&&(t=bn.empty()),t.set(s.field,u))}return t||null}function zg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&po(s,a,((u,h)=>EC(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Za extends dc{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ls extends dc{constructor(e,t,s,a,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function t_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Bg(i,e,t){const s=new Map;Ze(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const u=i[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,vC(h,m,t[a]))}return s}function $g(i,e,t){const s=new Map;for(const a of i){const u=a.transform,h=t.data.field(a.field);s.set(a.field,yC(u,h,e))}return s}class n_ extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SC extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&TC(u,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Kv();return this.mutations.forEach((a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(a.key)?null:m;const g=e_(h,m);g!==null&&s.set(a.key,g),h.isValidDocument()||h.convertToNoDocument(Ge.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Mt())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,((t,s)=>zg(t,s)))&&po(this.baseMutations,e.baseMutations,((t,s)=>zg(t,s)))}}class cf{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Ze(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=(function(){return dC})();const u=e.mutations;for(let h=0;h<u.length;h++)a=a.insert(u[h].key,s[h].version);return new cf(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Re;function AC(i){switch(i){case J.OK:return we(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return we(15467,{code:i})}}function PC(i){if(i===void 0)return rs("GRPC error has no .code"),J.UNKNOWN;switch(i){case ot.OK:return J.OK;case ot.CANCELLED:return J.CANCELLED;case ot.UNKNOWN:return J.UNKNOWN;case ot.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case ot.INTERNAL:return J.INTERNAL;case ot.UNAVAILABLE:return J.UNAVAILABLE;case ot.UNAUTHENTICATED:return J.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case ot.NOT_FOUND:return J.NOT_FOUND;case ot.ALREADY_EXISTS:return J.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return J.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case ot.ABORTED:return J.ABORTED;case ot.OUT_OF_RANGE:return J.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return J.UNIMPLEMENTED;case ot.DATA_LOSS:return J.DATA_LOSS;default:return we(39323,{code:i})}}(Re=ot||(ot={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Kd([4294967295,4294967295],0);class RC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kd(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xC(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function NC(i,e){return kd(i,e.toTimestamp())}function ao(i){return Ze(!!i,49232),Ge.fromTimestamp((function(t){const s=is(t);return new Ke(s.seconds,s.nanos)})(i))}function r_(i,e){return Ad(i,e).canonicalString()}function Ad(i,e){const t=(function(a){return new rt(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function OC(i){const e=rt.fromString(i);return Ze(UC(e),10190,{key:e.toString()}),e}function Pd(i,e){return r_(i.databaseId,e.path)}function DC(i){const e=OC(i);return e.length===4?rt.emptyPath():LC(e)}function VC(i){return new rt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function LC(i){return Ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Hg(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function bC(i,e){let t;if(e instanceof Za)t={update:Hg(i,e.key,e.value)};else if(e instanceof n_)t={delete:Pd(i,e.key)};else if(e instanceof ls)t={update:Hg(i,e.key,e.data),updateMask:FC(e.fieldMask)};else{if(!(e instanceof SC))return we(16599,{Rt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Yu)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw we(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,u){return u.updateTime!==void 0?{updateTime:NC(a,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)})(i,e.precondition)),t}function MC(i,e){return i&&i.length>0?(Ze(e!==void 0,14353),i.map((t=>(function(a,u){let h=a.updateTime?ao(a.updateTime):ao(u);return h.isEqual(Ge.min())&&(h=ao(u)),new wC(h,a.transformResults||[])})(t,e)))):[]}function jC(i){let e=DC(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ze(s===1,65062);const w=t.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(T){const x=i_(T);return x instanceof gi&&Uv(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((x=>(function(B){return new Ju(no(B.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let x;return x=typeof T=="object"?T.value:T,tf(x)?null:x})(t.limit));let g=null;t.startAt&&(g=(function(T){const x=!!T.before,H=T.values||[];return new Qu(H,x)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const x=!T.before,H=T.values||[];return new Qu(H,x)})(t.endAt)),sC(e,a,h,u,m,"F",g,_)}function i_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return _t.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=no(t.unaryFilter.field);return _t.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return _t.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(i):i.fieldFilter!==void 0?(function(t){return _t.create(no(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return gi.create(t.compositeFilter.filters.map((s=>i_(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(i):we(30097,{filter:i})}function no(i){return kt.fromServerFormat(i.fieldPath)}function FC(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function UC(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.gt=e}}function BC(i){const e=jC({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Cd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.Dn=new HC}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(mi.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class HC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new At(rt.comparator),u=!a.has(s);return this.index[t]=a.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new At(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},s_=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(s_,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new vo(0)}static ur(){return new vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="LruGarbageCollector",WC=1048576;function Gg([i,e],[t,s]){const a=Ne(i,t);return a===0?Ne(e,s):a}class qC{constructor(e){this.Tr=e,this.buffer=new At(Gg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class GC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(qg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ya(t)?ue(qg,"Ignoring IndexedDB error during garbage collection: ",t):await Yd(t)}await this.Rr(3e5)}))}}class KC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Zd.ue);const s=new qC(t);return this.Vr.forEachTarget(e,(a=>s.Er(a.sequenceNumber))).next((()=>this.Vr.gr(e,(a=>s.Er(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Wg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,h=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),to()<=Ce.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:u,documentsRemoved:T}))))}}function QC(i,e){return new KC(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.changes=new as((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ln.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Na(s.mutation,a,Fn.empty(),Ke.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Mt()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Mt()){const a=Qi();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((u=>{let h=Iu();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Qi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Mt())))}populateOverlays(e,t,s){const a=[];return s.forEach((u=>{t.has(u)||a.push(u)})),this.documentOverlayCache.getOverlays(e,a).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,a){let u=Xu();const h=xa(),m=(function(){return xa()})();return t.forEach(((g,_)=>{const w=s.get(_.key);a.has(_.key)&&(w===void 0||w.mutation instanceof ls)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Na(w.mutation,_,w.mutation.getFieldMask(),Ke.now())):h.set(_.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return m.set(_,new XC(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=xa();let a=new Zt(((h,m)=>h-m)),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Fn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(a.get(m.batchId)||Mt()).add(g);a=a.insert(m.batchId,T)}))})).next((()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=Kv();w.forEach((x=>{if(!u.has(x)){const H=e_(t.get(x),s.get(x));H!==null&&T.set(x,H),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return W.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):aC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-u.size):W.resolve(Qi());let m=ja,g=u;return h.next((_=>W.forEach(_,((w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next((x=>{g=g.insert(w,x)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Mt()))).next((w=>({batchId:m,changes:Gv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((s=>{let a=Iu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const u=t.collectionGroup;let h=Iu();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(g=>{const _=(function(T,x){return new cc(x,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,a).next((w=>{w.forEach(((T,x)=>{h=h.insert(T,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,a)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ln.newInvalidDocument(w)))}));let m=Iu();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&Na(w.mutation,_,Fn.empty(),Ke.now()),lf(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:ao(a.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(a){return{name:a.name,query:BC(a.bundledQuery),readTime:ao(a.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.overlays=new Zt(_e.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qi();return W.forEach(t,(a=>this.getOverlay(e,a).next((u=>{u!==null&&s.set(a,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,u)=>{this.wt(e,t,u)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const a=Qi(),u=t.length+1,h=new _e(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&a.set(g.getKey(),g)}return W.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let u=new Zt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=Qi(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=Qi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=a)););return W.resolve(m)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new kC(t,s));let u=this.kr.get(t);u===void 0&&(u=Mt(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.sessionToken=rr.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.qr=new At(vt.Qr),this.$r=new At(vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new vt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new _e(new rt([])),s=new vt(t,e),a=new vt(t,e+1),u=[];return this.$r.forEachInRange([s,a],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new rt([])),s=new vt(t,e),a=new vt(t,e+1);let u=Mt();return this.$r.forEachInRange([s,a],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new vt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||Ne(e.Hr,t.Hr)}static Ur(e,t){return Ne(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new At(vt.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new CC(u,t,s,a);this.mutationQueue.push(h);for(const m of a)this.Yr=this.Yr.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),u=a<0?0:a;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?ef:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),a=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,a],(h=>{const m=this.Zr(h.Hr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new At(Ne);return t.forEach((a=>{const u=new vt(a,0),h=new vt(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),W.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new vt(new _e(u),0);let m=new At(Ne);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===a&&(m=m.add(g.Hr)),!0)}),h),W.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return W.forEach(t.mutations,(a=>{const u=new vt(a.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new vt(t,0),a=this.Yr.firstAfterOrEqual(s);return W.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.ni=e,this.docs=(function(){return new Zt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),u=a?a.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ln.newInvalidDocument(t))}getEntries(e,t){let s=Xu();return t.forEach((a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Ln.newInvalidDocument(a))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let u=Xu();const h=t.path,m=new _e(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||bS(LS(w),s)<=0||(a.has(w.key)||lf(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,a){we(9500)}ri(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new ik(this)}getSize(e){return W.resolve(this.size)}}class ik extends JC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.persistence=e,this.ii=new as((t=>of(t)),af),this.lastRemoteSnapshotVersion=Ge.min(),this.highestTargetId=0,this.si=0,this.oi=new hf,this.targetCount=0,this._i=vo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,a)=>t(a))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let a=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),W.waitFor(u).next((()=>a))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,u=[];return a&&t.forEach((h=>{u.push(a.markPotentiallyOrphaned(e,h))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.ai={},this.overlays={},this.ui=new Zd(0),this.ci=!1,this.ci=!0,this.li=new tk,this.referenceDelegate=e(this),this.hi=new sk(this),this.indexManager=new $C,this.remoteDocumentCache=(function(a){return new rk(a)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new zC(t),this.Ti=new ZC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ek,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new nk(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const a=new ok(this.ui.next());return this.referenceDelegate.Ii(),s(a).next((u=>this.referenceDelegate.di(a).next((()=>u)))).toPromise().then((u=>(a.raiseOnCommittedEvent(),u)))}Ei(e,t){return W.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class ok extends jS{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Ai=new hf,this.Ri=null}static Vi(e){return new df(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((a=>this.mi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(s=>{const a=_e.fromPath(s);return this.fi(e,a).next((u=>{u||t.removeEntry(a,Ge.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Zu{constructor(e,t){this.persistence=e,this.gi=new as((s=>zS(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=QC(this,t)}static Vi(e,t){return new Zu(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((s,a)=>this.Sr(e,s,a).next((u=>u?W.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),u=a.newChangeBuffer();return a.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ge.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nu(e.data.value)),t}Sr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return W.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=Mt(),a=Mt();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new ff(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return zw()?8:FS(Ft())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,a,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new ak;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(to()<=Ce.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ta(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(to()<=Ce.DEBUG&&ue("QueryEngine","Query:",Ta(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(to()<=Ce.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ta(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xi(t))):W.resolve())}ps(e,t){if(Fg(t))return W.resolve(null);let s=Xi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Cd(t,null,"F"),s=Xi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Mt(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,Cd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,a){return Fg(t)||a.isEqual(Ge.min())?W.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,a)?W.resolve(null):(to()<=Ce.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ta(t)),this.vs(e,h,t,VS(a,ja)).next((m=>m)))}))}bs(e,t){let s=new At(uC(e));return t.forEach(((a,u)=>{lf(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}ws(e,t,s){return to()<=Ce.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ta(t)),this.gs.getDocumentsMatchingQuery(e,t,mi.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="LocalStore";class ck{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new Zt(Ne),this.Ms=new as((u=>of(u)),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function hk(i,e,t,s){return new ck(i,e,t,s)}async function a_(i,e){const t=Be(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((u=>(a=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Mt();for(const _ of a){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function dk(i,e){const t=Be(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const T=_.batch,x=T.keys();let H=W.resolve();return x.forEach((B=>{H=H.next((()=>w.getEntry(g,B))).next((G=>{const U=_.docVersions.get(B);Ze(U!==null,48541),G.version.compareTo(U)<0&&(T.applyToRemoteDocument(G,_),G.isValidDocument()&&(G.setReadTime(_.commitVersion),w.addEntry(G)))}))})),H.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Mt();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function fk(i){const e=Be(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function pk(i,e){const t=Be(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ef),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}class Kg{constructor(){this.activeTargetIds=mC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mk{constructor(){this.Fo=new Kg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Kg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="ConnectivityMonitor";class Jg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(Qg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(Qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=null;function Rd(){return Su===null?Su=(function(){return 268435456+Math.round(2147483648*Math.random())})():Su++,"0x"+Su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="RestConnection",yk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===Gu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,u){const h=Rd(),m=this.Go(e,t.toUriEncodedString());ue(nd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,a,u);const{host:_}=new URL(m),w=To(_);return this.jo(e,m,g,s,w).then((T=>(ue(nd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw fo(nd,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T}))}Jo(e,t,s,a,u,h){return this.Wo(e,t,s,a,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Co})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,u)=>e[u]=a)),s&&s.headers.forEach(((a,u)=>e[u]=a))}Go(e,t){const s=yk[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class Ek extends vk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,u){const h=Rd();return new Promise(((m,g)=>{const _=new wv;_.setWithCredentials(!0),_.listenOnce(Tv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case xu.NO_ERROR:const T=_.getResponseJson();ue(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case xu.TIMEOUT:ue(Lt,`RPC '${e}' ${h} timed out`),g(new ge(J.DEADLINE_EXCEEDED,"Request time out"));break;case xu.HTTP_ERROR:const x=_.getStatus();if(ue(Lt,`RPC '${e}' ${h} failed with status:`,x,"response text:",_.getResponseText()),x>0){let H=_.getResponseJson();Array.isArray(H)&&(H=H[0]);const B=H==null?void 0:H.error;if(B&&B.status&&B.message){const G=(function(ie){const te=ie.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(te)>=0?te:J.UNKNOWN})(B.status);g(new ge(G,B.message))}else g(new ge(J.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ge(J.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ue(Lt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(a);ue(Lt,`RPC '${e}' ${h} sending request:`,a),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const a=Rd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Cv(),m=Sv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ue(Lt,`Creating RPC '${e}' stream ${a}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let x=!1,H=!1;const B=new _k({Ho:U=>{H?ue(Lt,`Not sending because RPC '${e}' stream ${a} is closed:`,U):(x||(ue(Lt,`Opening RPC '${e}' stream ${a} transport.`),T.open(),x=!0),ue(Lt,`RPC '${e}' stream ${a} sending:`,U),T.send(U))},Yo:()=>T.close()}),G=(U,ie,te)=>{U.listen(ie,(se=>{try{te(se)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return G(T,Ca.EventType.OPEN,(()=>{H||(ue(Lt,`RPC '${e}' stream ${a} transport opened.`),B.s_())})),G(T,Ca.EventType.CLOSE,(()=>{H||(H=!0,ue(Lt,`RPC '${e}' stream ${a} transport closed`),B.__(),this.I_(T))})),G(T,Ca.EventType.ERROR,(U=>{H||(H=!0,fo(Lt,`RPC '${e}' stream ${a} transport errored. Name:`,U.name,"Message:",U.message),B.__(new ge(J.UNAVAILABLE,"The operation could not be completed")))})),G(T,Ca.EventType.MESSAGE,(U=>{var ie;if(!H){const te=U.data[0];Ze(!!te,16349);const se=te,ce=(se==null?void 0:se.error)||((ie=se[0])===null||ie===void 0?void 0:ie.error);if(ce){ue(Lt,`RPC '${e}' stream ${a} received error:`,ce);const De=ce.status;let Te=(function(A){const R=ot[A];if(R!==void 0)return PC(R)})(De),O=ce.message;Te===void 0&&(Te=J.INTERNAL,O="Unknown error status: "+De+" with message "+ce.message),H=!0,B.__(new ge(Te,O)),T.close()}else ue(Lt,`RPC '${e}' stream ${a} received:`,te),B.a_(te)}})),G(m,Iv.STAT_EVENT,(U=>{U.stat===vd.PROXY?ue(Lt,`RPC '${e}' stream ${a} detected buffering proxy`):U.stat===vd.NOPROXY&&ue(Lt,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function rd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(i){return new RC(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,s=1e3,a=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="PersistentStream";class wk{constructor(e,t,s,a,u,h,m,g){this.Fi=e,this.w_=s,this.S_=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new l_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(rs(t.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.b_===t&&this.W_(s,a)}),(s=>{e((()=>{const a=new ge(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((a=>{s((()=>this.G_(a)))})),this.stream.onMessage((a=>{s((()=>++this.C_==1?this.j_(a):this.onNext(a)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(Xg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(Xg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tk extends wk{constructor(e,t,s,a,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=MC(e.writeResults,e.commitTime),s=ao(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=VC(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>bC(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{}class Sk extends Ik{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new ge(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Ad(t,s),a,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ge(J.UNKNOWN,u.toString())}))}Jo(e,t,s,a,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Ad(t,s),a,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ge(J.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Ck{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rs(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="RemoteStore";class kk{constructor(e,t,s,a,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{nl(this)&&(ue(el,"Restarting streams for network reachability change."),await(async function(g){const _=Be(g);_.Ia.add(4),await tl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await pc(_)})(this))}))})),this.Aa=new Ck(s,a)}}async function pc(i){if(nl(i))for(const e of i.da)await e(!0)}async function tl(i){for(const e of i.da)await e(!1)}function nl(i){return Be(i).Ia.size===0}async function u_(i,e,t){if(!Ya(e))throw e;i.Ia.add(1),await tl(i),i.Aa.set("Offline"),t||(t=()=>fk(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ue(el,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await pc(i)}))}function c_(i,e){return e().catch((t=>u_(i,t,e)))}async function mc(i){const e=Be(i),t=yi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ef;for(;Ak(e);)try{const a=await pk(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,Pk(e,a)}catch(a){await u_(e,a)}h_(e)&&d_(e)}function Ak(i){return nl(i)&&i.Pa.length<10}function Pk(i,e){i.Pa.push(e);const t=yi(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function h_(i){return nl(i)&&!yi(i).M_()&&i.Pa.length>0}function d_(i){yi(i).start()}async function Rk(i){yi(i).na()}async function xk(i){const e=yi(i);for(const t of i.Pa)e.X_(t.mutations)}async function Nk(i,e,t){const s=i.Pa.shift(),a=cf.from(s,e,t);await c_(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await mc(i)}async function Ok(i,e){e&&yi(i).Z_&&await(async function(s,a){if((function(h){return AC(h)&&h!==J.ABORTED})(a.code)){const u=s.Pa.shift();yi(s).N_(),await c_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,a))),await mc(s)}})(i,e),h_(i)&&d_(i)}async function Yg(i,e){const t=Be(i);t.asyncQueue.verifyOperationInProgress(),ue(el,"RemoteStore received new credentials");const s=nl(t);t.Ia.add(3),await tl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await pc(t)}async function Dk(i,e){const t=Be(i);e?(t.Ia.delete(2),await pc(t)):e||(t.Ia.add(2),await tl(t),t.Aa.set("Unknown"))}function yi(i){return i.ma||(i.ma=(function(t,s,a){const u=Be(t);return u.ia(),new Tk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:Rk.bind(null,i),n_:Ok.bind(null,i),ea:xk.bind(null,i),ta:Nk.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await mc(i)):(await i.ma.stop(),i.Pa.length>0&&(ue(el,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,s,a,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,u){const h=Date.now()+s,m=new pf(e,t,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f_(i,e){if(rs("AsyncQueue",`${e}: ${i}`),Ya(i))return new ge(J.UNAVAILABLE,`${e}: ${i}`);throw i}class Vk{constructor(){this.queries=Zg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=Be(t),u=a.queries;a.queries=Zg(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new ge(J.ABORTED,"Firestore shutting down"))}}function Zg(){return new as((i=>Wv(i)),Hv)}function Lk(i){i.Da.forEach((e=>{e.next()}))}var ey,ty;(ty=ey||(ey={})).Fa="default",ty.Cache="cache";const bk="SyncEngine";class Mk{constructor(e,t,s,a,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new as((m=>Wv(m)),Hv),this.Tu=new Map,this.Iu=new Set,this.du=new Zt(_e.comparator),this.Eu=new Map,this.Au=new hf,this.Ru={},this.Vu=new Map,this.mu=vo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function jk(i,e,t){const s=Bk(i);try{const a=await(function(h,m){const g=Be(h),_=Ke.now(),w=m.reduce(((H,B)=>H.add(B.key)),Mt());let T,x;return g.persistence.runTransaction("Locally write mutations","readwrite",(H=>{let B=Xu(),G=Mt();return g.Os.getEntries(H,w).next((U=>{B=U,B.forEach(((ie,te)=>{te.isValidDocument()||(G=G.add(ie))}))})).next((()=>g.localDocuments.getOverlayedDocuments(H,B))).next((U=>{T=U;const ie=[];for(const te of m){const se=IC(te,T.get(te.key).overlayedDocument);se!=null&&ie.push(new ls(te.key,se,Mv(se.value.mapValue),kr.exists(!0)))}return g.mutationQueue.addMutationBatch(H,_,ie,m)})).next((U=>{x=U;const ie=U.applyToLocalDocumentSet(T,G);return g.documentOverlayCache.saveOverlays(H,U.batchId,ie)}))})).then((()=>({batchId:x.batchId,changes:Gv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(h,m,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new Zt(Ne)),_=_.insert(m,g),h.Ru[h.currentUser.toKey()]=_})(s,a.batchId,t),await gc(s,a.changes),await mc(s.remoteStore)}catch(a){const u=f_(a,"Failed to persist write");t.reject(u)}}function ny(i,e,t){const s=Be(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(h,m){const g=Be(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,T)=>{for(const x of T.wa)x.va(m)&&(_=!0)})),_&&Lk(g)})(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fk(i,e){const t=Be(i),s=e.batch.batchId;try{const a=await dk(t.localStore,e);m_(t,s,null),p_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gc(t,a)}catch(a){await Yd(a)}}async function Uk(i,e,t){const s=Be(i);try{const a=await(function(h,m){const g=Be(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(Ze(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);m_(s,e,t),p_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gc(s,a)}catch(a){await Yd(a)}}function p_(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function m_(i,e,t){const s=Be(i);let a=s.Ru[s.currentUser.toKey()];if(a){const u=a.get(e);u&&(t?u.reject(t):u.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}async function gc(i,e,t){const s=Be(i),a=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=void 0)===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){a.push(_);const T=ff.Es(g.targetId,_);u.push(T)}})))})),await Promise.all(h),s.hu.J_(a),await(async function(g,_){const w=Be(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(_,(x=>W.forEach(x.Is,(H=>w.persistence.referenceDelegate.addReference(T,x.targetId,H))).next((()=>W.forEach(x.ds,(H=>w.persistence.referenceDelegate.removeReference(T,x.targetId,H)))))))))}catch(T){if(!Ya(T))throw T;ue(uk,"Failed to update sequence numbers: "+T)}for(const T of _){const x=T.targetId;if(!T.fromCache){const H=w.Fs.get(x),B=H.snapshotVersion,G=H.withLastLimboFreeSnapshotVersion(B);w.Fs=w.Fs.insert(x,G)}}})(s.localStore,u))}async function zk(i,e){const t=Be(i);if(!t.currentUser.isEqual(e)){ue(bk,"User change. New user:",e.toKey());const s=await a_(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ge(J.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gc(t,s.Bs)}}function Bk(i){const e=Be(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uk.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return hk(this.persistence,new lk,e.initialUser,this.serializer)}Du(e){return new o_(df.Vi,this.serializer)}bu(e){return new mk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class $k extends ec{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ze(this.persistence.referenceDelegate instanceof Zu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GC(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new o_((s=>Zu.Vi(s,t)),this.serializer)}}class xd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ny(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zk.bind(null,this.syncEngine),await Dk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Vk})()}createDatastore(e){const t=fc(e.databaseInfo.databaseId),s=(function(u){return new Ek(u)})(e.databaseInfo);return(function(u,h,m,g){return new Sk(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,u,h,m){return new kk(s,a,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ny(this.syncEngine,t,0)),(function(){return Jg.C()?new Jg:new gk})())}createSyncEngine(e,t){return(function(a,u,h,m,g,_,w){const T=new Mk(a,u,h,m,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const u=Be(a);ue(el,"RemoteStore shutting down."),u.Ia.add(5),await tl(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xd.provider={build:()=>new xd};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="FirestoreClient";class Hk{constructor(e,t,s,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bt.UNAUTHENTICATED,this.clientId=Jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ue(vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ue(vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=f_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function id(i,e){i.asyncQueue.verifyOperationInProgress(),ue(vi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await a_(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>{fo("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((a=>{fo("Terminating Firestore due to IndexedDb database deletion failed",a)}))})),i._offlineComponents=e}async function ry(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Wk(i);ue(vi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Yg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>Yg(e.remoteStore,a))),i._onlineComponents=e}async function Wk(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ue(vi,"Using user provided OfflineComponentProvider");try{await id(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===J.FAILED_PRECONDITION||a.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;fo("Error using user provided cache. Falling back to memory cache: "+t),await id(i,new ec)}}else ue(vi,"Using default OfflineComponentProvider"),await id(i,new $k(void 0));return i._offlineComponents}async function qk(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ue(vi,"Using user provided OnlineComponentProvider"),await ry(i,i._uninitializedComponentsProvider._online)):(ue(vi,"Using default OnlineComponentProvider"),await ry(i,new xd))),i._onlineComponents}function Gk(i){return qk(i).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firestore.googleapis.com",sy=!0;class oy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=y_,this.ssl=sy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:sy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=s_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WC)throw new ge(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ge(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ge(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ge(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mf{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new TS;switch(s.type){case"firstParty":return new kS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=iy.get(t);s&&(ue("ComponentProvider","Removing Datastore"),iy.delete(t),s.terminate())})(this),Promise.resolve()}}function Kk(i,e,t,s={}){var a;i=Ed(i,mf);const u=To(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Dy(`https://${g}`),Vy("Firestore",!0)),h.host!==y_&&h.host!==g&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Yi(_,m)&&(i._setSettings(_),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=bt.MOCK_USER;else{w=Ow(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ge(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new bt(x)}i._authCredentials=new IS(new Av(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gf(this.firestore,e,this._query)}}class jt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $a(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}toJSON(){return{type:jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xa(t,jt._jsonSchema))return new jt(e,s||null,new _e(rt.fromString(t.referencePath)))}}jt._jsonSchemaVersion="firestore/documentReference/1.0",jt._jsonSchema={type:at("string",jt._jsonSchemaVersion),referencePath:at("string")};class $a extends gf{constructor(e,t,s){super(e,t,oC(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new _e(e))}withConverter(e){return new $a(this.firestore,e,this._path)}}function Qk(i,e,...t){if(i=_n(i),arguments.length===1&&(e=Jd.newId()),OS("doc","path",e),i instanceof mf){const s=rt.fromString(e,...t);return Pg(s),new jt(i,null,new _e(s))}{if(!(i instanceof jt||i instanceof $a))throw new ge(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(rt.fromString(e,...t));return Pg(s),new jt(i.firestore,i instanceof $a?i.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="AsyncQueue";class ly{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new l_(this,"async_queue_retry"),this.oc=()=>{const s=rd();s&&ue(ay,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=rd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=rd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ji;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ya(e))throw e;ue(ay,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,rs("INTERNAL UNHANDLED ERROR: ",uy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=pf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(a),a}ac(){this.tc&&we(47125,{hc:uy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function uy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class v_ extends mf{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new ly,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ly(e),this._firestoreClient=void 0,await e}}}function Jk(i,e){const t=typeof i=="object"?i:jy(),s=typeof i=="string"?i:Gu,a=jd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=xw("firestore");u&&Kk(a,...u)}return a}function Xk(i){if(i._terminated)throw new ge(J.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Yk(i),i._firestoreClient}function Yk(i){var e,t,s;const a=i._freezeSettings(),u=(function(m,g,_,w){return new WS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,g_(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new Hk(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(rr.fromBase64String(e))}catch(t){throw new ge(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mn(rr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xa(e,Mn._jsonSchema))return Mn.fromBase64String(e.bytes)}}Mn._jsonSchemaVersion="firestore/bytes/1.0",Mn._jsonSchema={type:at("string",Mn._jsonSchemaVersion),bytes:at("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ar._jsonSchemaVersion}}static fromJSON(e){if(Xa(e,Ar._jsonSchema))return new Ar(e.latitude,e.longitude)}}Ar._jsonSchemaVersion="firestore/geoPoint/1.0",Ar._jsonSchema={type:at("string",Ar._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Pr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xa(e,Pr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Pr(e.vectorValues);throw new ge(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pr._jsonSchemaVersion="firestore/vectorValue/1.0",Pr._jsonSchema={type:at("string",Pr._jsonSchemaVersion),vectorValues:at("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=/^__.*__$/;class eA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new Za(e,this.data,t,this.fieldTransforms)}}function __(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:i})}}class _f{constructor(e,t,s,a,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new _f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return tc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(__(this.Ec)&&Zk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class tA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||fc(e)}Dc(e,t,s,a=!1){return new _f({Ec:e,methodName:t,bc:s,path:kt.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nA(i){const e=i._freezeSettings(),t=fc(i._databaseId);return new tA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function rA(i,e,t,s,a,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,a);I_("Data must be an object, but it was:",h,s);const m=w_(s,h);let g,_;if(u.merge)g=new Fn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const T of u.mergeFields){const x=iA(e,T,t);if(!h.contains(x))throw new ge(J.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);oA(w,x)||w.push(x)}g=new Fn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new eA(new bn(m),g,_)}class Ef extends vf{_toFieldTransform(e){return new _C(e.path,new Ua)}isEqual(e){return e instanceof Ef}}function E_(i,e){if(T_(i=_n(i)))return I_("Unsupported field value:",e,i),w_(i,e);if(i instanceof vf)return(function(s,a){if(!__(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,a){const u=[];let h=0;for(const m of s){let g=E_(m,a.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,a){if((s=_n(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return gC(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ke.fromDate(s);return{timestampValue:kd(a.serializer,u)}}if(s instanceof Ke){const u=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kd(a.serializer,u)}}if(s instanceof Ar)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mn)return{bytesValue:xC(a.serializer,s._byteString)};if(s instanceof jt){const u=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw a.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:r_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Pr)return(function(h,m){return{mapValue:{fields:{[Lv]:{stringValue:bv},[wd]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return uf(m.serializer,_)}))}}}}}})(s,a);throw a.wc(`Unsupported field value: ${Xd(s)}`)})(i,e)}function w_(i,e){const t={};return xv(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ko(i,((s,a)=>{const u=E_(a,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function T_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ke||i instanceof Ar||i instanceof Mn||i instanceof jt||i instanceof vf||i instanceof Pr)}function I_(i,e,t){if(!T_(t)||!Pv(t)){const s=Xd(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function iA(i,e,t){if((e=_n(e))instanceof yf)return e._internalPath;if(typeof e=="string")return S_(i,e);throw tc("Field path arguments must be of type string or ",i,!1,void 0,t)}const sA=new RegExp("[~\\*/\\[\\]]");function S_(i,e,t){if(e.search(sA)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new yf(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function tc(i,e,t,s,a){const u=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${a}`),g+=")"),new ge(J.INVALID_ARGUMENT,m+i+g)}function oA(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,s,a,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(k_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aA extends C_{data(){return super.data()}}function k_(i,e){return typeof e=="string"?S_(i,e):e instanceof yf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lo extends C_{constructor(e,t,s,a,u,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(k_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=lo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}lo._jsonSchemaVersion="firestore/documentSnapshot/1.0",lo._jsonSchema={type:at("string",lo._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class Vu extends lo{data(e={}){return super.data(e)}}class Oa{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Cu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Vu(this._firestore,this._userDataWriter,s.key,s,new Cu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,u){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map((m=>{const g=new Vu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new Cu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Vu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new Cu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:uA(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),a.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:i})}}Oa._jsonSchemaVersion="firestore/querySnapshot/1.0",Oa._jsonSchema={type:at("string",Oa._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};function cA(i,e,t){i=Ed(i,jt);const s=Ed(i.firestore,v_),a=lA(i.converter,e);return hA(s,[rA(nA(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,kr.none())])}function hA(i,e){return(function(s,a){const u=new Ji;return s.asyncQueue.enqueueAndForget((async()=>jk(await Gk(s),a,u))),u.promise})(Xk(i),e)}function dA(){return new Ef("serverTimestamp")}(function(e,t=!0){(function(a){Co=a})(Io),co(new Zi("firestore",((s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new v_(new SS(s.getProvider("auth-internal")),new AS(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ge(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ku(_.options.projectId,w)})(h,a),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),pi(Ig,Sg,e),pi(Ig,Sg,"esm2017")})();const fA={apiKey:"AIzaSyAnYhfRRxNYiBl0T-MRfOuC_xj-z64H7HE",authDomain:"bolao-copa-fa73a.firebaseapp.com",projectId:"bolao-copa-fa73a",storageBucket:"bolao-copa-fa73a.firebasestorage.app",messagingSenderId:"850866388210",appId:"1:850866388210:web:7e95846f3ef3f19043246b",measurementId:"G-Z053KDDZSN"},A_=My(fA),P_=ES(A_),pA=Jk(A_);function mA(){const i=ic(),[e,t]=X.useState(""),[s,a]=X.useState(""),[u,h]=X.useState(""),[m,g]=X.useState(""),[_,w]=X.useState(""),[T,x]=X.useState(""),[H,B]=X.useState(!1);async function G(U){if(U.preventDefault(),x(""),m!==_){x("As senhas não conferem.");return}B(!0);try{const ie=await iI(P_,u,m);await aI(ie.user,{displayName:e}),await cA(Qk(pA,"users",ie.user.uid),{uid:ie.user.uid,name:e,sector:s,email:ie.user.email,role:"employee",totalPoints:0,exactScores:0,winnerHits:0,createdAt:dA()}),i("/dashboard")}catch(ie){ie instanceof zn?x(gA(ie.code)):x("Não foi possível criar o cadastro agora. Tente novamente.")}finally{B(!1)}}return C.jsx("main",{className:"flex min-h-screen items-center justify-center bg-sofia-cream px-4 py-8",children:C.jsxs("section",{className:"panel w-full max-w-xl p-5 sm:p-7",children:[C.jsxs("div",{className:"mb-6 flex items-center gap-3",children:[C.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-md bg-sofia-green text-white",children:C.jsx(fw,{"aria-hidden":!0,size:22})}),C.jsxs("div",{children:[C.jsx("h1",{className:"text-2xl font-black text-sofia-green",children:"Cadastro"}),C.jsx("p",{className:"text-sm text-slate-600",children:"Entre para registrar seus palpites."})]})]}),C.jsxs("form",{className:"grid gap-4 sm:grid-cols-2",onSubmit:G,children:[C.jsxs("label",{className:"block sm:col-span-2",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"Nome completo"}),C.jsx("input",{className:"field",type:"text",placeholder:"Seu nome",value:e,onChange:U=>t(U.target.value),required:!0})]}),C.jsxs("label",{className:"block",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"Setor"}),C.jsxs("select",{className:"field",value:s,onChange:U=>a(U.target.value),required:!0,children:[C.jsx("option",{value:"",disabled:!0,children:"Selecione"}),C.jsx("option",{children:"Caixa"}),C.jsx("option",{children:"Padaria"}),C.jsx("option",{children:"Hortifruti"}),C.jsx("option",{children:"Estoque"}),C.jsx("option",{children:"Administrativo"})]})]}),C.jsxs("label",{className:"block",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"E-mail"}),C.jsx("input",{className:"field",type:"email",placeholder:"voce@mercadosofia.com",value:u,onChange:U=>h(U.target.value),required:!0})]}),C.jsxs("label",{className:"block",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"Senha"}),C.jsx("input",{className:"field",type:"password",placeholder:"Crie uma senha",value:m,onChange:U=>g(U.target.value),minLength:6,required:!0})]}),C.jsxs("label",{className:"block",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"Confirmar senha"}),C.jsx("input",{className:"field",type:"password",placeholder:"Repita a senha",value:_,onChange:U=>w(U.target.value),minLength:6,required:!0})]}),T?C.jsx("p",{className:"rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 sm:col-span-2",children:T}):null,C.jsx("button",{className:"primary-button disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2",type:"submit",disabled:H,children:H?"Criando cadastro...":"Criar cadastro"})]}),C.jsxs("p",{className:"mt-5 text-center text-sm text-slate-600",children:["Já tem acesso?"," ",C.jsx(La,{className:"font-bold text-sofia-green underline-offset-4 hover:underline",to:"/login",children:"Entrar"})]})]})})}function gA(i){return i==="auth/email-already-in-use"?"Este e-mail já está cadastrado.":i==="auth/weak-password"?"Use uma senha com pelo menos 6 caracteres.":i==="auth/invalid-email"?"Digite um e-mail válido.":"Não foi possível criar o cadastro agora. Tente novamente."}function wf({children:i,tone:e="neutral"}){const t={green:"bg-sofia-green/10 text-sofia-green",gold:"bg-sofia-gold/20 text-amber-800",neutral:"bg-slate-100 text-slate-600"};return C.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-bold ${t[e]}`,children:i})}const Tf=[{id:"1",group:"Grupo A",home:"Brasil",away:"Marrocos",date:"12 jun, 16:00",venue:"Cidade do México",status:"aberto"},{id:"2",group:"Grupo B",home:"Argentina",away:"Japão",date:"13 jun, 13:00",venue:"Los Angeles",status:"aberto"},{id:"3",group:"Grupo C",home:"Portugal",away:"Gana",date:"14 jun, 19:00",venue:"Toronto",status:"encerrado"},{id:"4",group:"Grupo D",home:"França",away:"Coreia do Sul",date:"15 jun, 15:00",venue:"Vancouver",status:"finalizado",score:"2 x 1"}],R_=[{id:"1",match:"Brasil x Marrocos",guess:"2 x 0",points:0,status:"registrado"},{id:"2",match:"Argentina x Japão",guess:"1 x 1",points:0,status:"aguardando"},{id:"3",match:"França x Coreia do Sul",guess:"2 x 1",points:5,status:"pontuado"}],x_=[{position:1,name:"Ana Paula",department:"Caixa",points:34,exact:4},{position:2,name:"Rafael Lima",department:"Padaria",points:29,exact:3},{position:3,name:"Marina Souza",department:"Hortifruti",points:26,exact:3},{position:4,name:"Carlos Nunes",department:"Estoque",points:21,exact:2}],yA=[{label:"Jogos cadastrados",value:Tf.length,icon:tw},{label:"Meus palpites",value:R_.length,icon:dw},{label:"Participantes",value:42,icon:mw},{label:"Minha posição",value:"8º",icon:ky}];function vA(){const i=Tf.find(e=>e.status==="aberto");return C.jsxs("div",{className:"page-shell",children:[C.jsx(Ha,{eyebrow:"Copa 2026",title:"Dashboard",description:"Resumo dos jogos, desempenho e próximos palpites do Bolão Copa Mercado Sofia."}),C.jsx("section",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:yA.map(e=>{const t=e.icon;return C.jsx("article",{className:"panel p-4",children:C.jsxs("div",{className:"flex items-center justify-between gap-4",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-semibold text-slate-500",children:e.label}),C.jsx("p",{className:"mt-2 text-3xl font-black text-sofia-green",children:e.value})]}),C.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-md bg-sofia-gold/20 text-sofia-green",children:C.jsx(t,{"aria-hidden":!0,size:22})})]})},e.label)})}),C.jsxs("section",{className:"mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",children:[C.jsxs("article",{className:"panel p-5",children:[C.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[C.jsx("h2",{className:"text-lg font-black text-sofia-green",children:"Próximo jogo"}),C.jsx(wf,{tone:"green",children:"Palpite aberto"})]}),i?C.jsxs("div",{className:"mt-5 rounded-lg bg-sofia-cream p-4",children:[C.jsx("p",{className:"text-sm font-bold text-sofia-gold",children:i.group}),C.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 text-center",children:[C.jsx("strong",{className:"flex-1 text-xl text-sofia-green",children:i.home}),C.jsx("span",{className:"rounded-md bg-white px-3 py-2 text-sm font-black text-sofia-green shadow-sm",children:"x"}),C.jsx("strong",{className:"flex-1 text-xl text-sofia-green",children:i.away})]}),C.jsxs("p",{className:"mt-4 text-sm text-slate-600",children:[i.date," · ",i.venue]})]}):null]}),C.jsxs("article",{className:"panel p-5",children:[C.jsx("h2",{className:"text-lg font-black text-sofia-green",children:"Top 3 ranking"}),C.jsx("div",{className:"mt-4 space-y-3",children:x_.slice(0,3).map(e=>C.jsxs("div",{className:"flex items-center gap-3 rounded-lg border border-sofia-green/10 p-3",children:[C.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-md bg-sofia-green text-sm font-black text-white",children:e.position}),C.jsxs("div",{className:"min-w-0 flex-1",children:[C.jsx("p",{className:"truncate font-bold text-sofia-green",children:e.name}),C.jsx("p",{className:"text-xs font-semibold text-slate-500",children:e.department})]}),C.jsxs("strong",{className:"text-sofia-gold",children:[e.points," pts"]})]},e.position))})]})]})]})}function _A(){return C.jsxs("div",{className:"page-shell",children:[C.jsx(Ha,{title:"Jogos",description:"Consulte a tabela e registre seu palpite antes do encerramento de cada jogo."}),C.jsx("section",{className:"grid gap-4",children:Tf.map(i=>{const e=i.status==="aberto";return C.jsxs("article",{className:"panel overflow-hidden",children:[C.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-sofia-green/10 px-4 py-3",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-xs font-black uppercase text-sofia-gold",children:i.group}),C.jsxs("p",{className:"mt-1 text-sm text-slate-600",children:[i.date," · ",i.venue]})]}),C.jsx(wf,{tone:e?"green":i.status==="finalizado"?"gold":"neutral",children:e?"Palpite aberto":i.status==="finalizado"?"Finalizado":"Encerrado"})]}),C.jsxs("div",{className:"grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center",children:[C.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center",children:[C.jsx("strong",{className:"text-lg text-sofia-green",children:i.home}),C.jsx("span",{className:"rounded-md bg-sofia-cream px-3 py-2 text-sm font-black text-sofia-green",children:i.score??"x"}),C.jsx("strong",{className:"text-lg text-sofia-green",children:i.away})]}),e?C.jsxs("form",{className:"grid grid-cols-[1fr_auto_1fr_auto] items-center gap-2",children:[C.jsx("input",{"aria-label":`Gols ${i.home}`,className:"field h-10 text-center",inputMode:"numeric",placeholder:"0"}),C.jsx("span",{className:"font-black text-sofia-green",children:"x"}),C.jsx("input",{"aria-label":`Gols ${i.away}`,className:"field h-10 text-center",inputMode:"numeric",placeholder:"0"}),C.jsxs("button",{className:"primary-button h-10 px-3",type:"button",title:"Salvar palpite",children:[C.jsx(cw,{"aria-hidden":!0,size:17}),C.jsx("span",{className:"hidden sm:inline",children:"Salvar"})]})]}):null]})]},i.id)})})]})}function EA(){const i=ic(),[e,t]=X.useState(""),[s,a]=X.useState(""),[u,h]=X.useState(""),[m,g]=X.useState(!1);async function _(w){w.preventDefault(),h(""),g(!0);try{await sI(P_,e,s),i("/dashboard")}catch(T){T instanceof zn?h(wA(T.code)):h("Não foi possível entrar agora. Tente novamente.")}finally{g(!1)}}return C.jsxs("main",{className:"grid min-h-screen bg-sofia-cream md:grid-cols-[1.05fr_0.95fr]",children:[C.jsx("section",{className:"flex min-h-[36vh] items-end bg-sofia-green px-6 py-8 text-white md:min-h-screen md:items-center md:px-12",children:C.jsxs("div",{className:"max-w-xl",children:[C.jsx("div",{className:"mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-sofia-gold text-sofia-green",children:C.jsx(Ld,{"aria-hidden":!0,size:30})}),C.jsx("h1",{className:"text-4xl font-black sm:text-5xl",children:"Bolão Copa Mercado Sofia"}),C.jsx("p",{className:"mt-4 max-w-md text-base leading-7 text-white/80",children:"Área interna para acompanhar jogos, registrar palpites e celebrar a Copa 2026 com a equipe."})]})}),C.jsx("section",{className:"flex items-center justify-center px-4 py-8",children:C.jsxs("div",{className:"panel w-full max-w-md p-5 sm:p-7",children:[C.jsx("h2",{className:"text-2xl font-black text-sofia-green",children:"Entrar"}),C.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Acesse com seu e-mail corporativo."}),C.jsxs("form",{className:"mt-6 space-y-4",onSubmit:_,children:[C.jsxs("label",{className:"block",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"E-mail"}),C.jsxs("div",{className:"relative",children:[C.jsx(uw,{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sofia-green/50",size:18}),C.jsx("input",{className:"field pl-10",type:"email",placeholder:"voce@mercadosofia.com",value:e,onChange:w=>t(w.target.value),required:!0})]})]}),C.jsxs("label",{className:"block",children:[C.jsx("span",{className:"mb-1 block text-sm font-semibold text-sofia-green",children:"Senha"}),C.jsxs("div",{className:"relative",children:[C.jsx(aw,{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sofia-green/50",size:18}),C.jsx("input",{className:"field pl-10",type:"password",placeholder:"Digite sua senha",value:s,onChange:w=>a(w.target.value),required:!0})]})]}),u?C.jsx("p",{className:"rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700",children:u}):null,C.jsx("button",{className:"primary-button w-full disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:m,children:m?"Entrando...":"Entrar"})]}),C.jsxs("p",{className:"mt-5 text-center text-sm text-slate-600",children:["Ainda não participa?"," ",C.jsx(La,{className:"font-bold text-sofia-green underline-offset-4 hover:underline",to:"/cadastro",children:"Criar cadastro"})]})]})})]})}function wA(i){return i==="auth/invalid-credential"||i==="auth/user-not-found"||i==="auth/wrong-password"?"E-mail ou senha inválidos.":i==="auth/too-many-requests"?"Muitas tentativas. Aguarde um pouco e tente novamente.":"Não foi possível entrar agora. Tente novamente."}function TA(){return C.jsxs("div",{className:"page-shell",children:[C.jsx(Ha,{title:"Meus Palpites",description:"Acompanhe seus palpites registrados, pontos conquistados e jogos ainda aguardando resultado."}),C.jsxs("section",{className:"panel overflow-hidden",children:[C.jsxs("div",{className:"hidden grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] border-b border-sofia-green/10 bg-sofia-green px-4 py-3 text-sm font-bold text-white md:grid",children:[C.jsx("span",{children:"Jogo"}),C.jsx("span",{children:"Palpite"}),C.jsx("span",{children:"Pontos"}),C.jsx("span",{children:"Status"})]}),C.jsx("div",{className:"divide-y divide-sofia-green/10",children:R_.map(i=>C.jsxs("article",{className:"grid gap-3 px-4 py-4 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] md:items-center",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-xs font-bold uppercase text-slate-500 md:hidden",children:"Jogo"}),C.jsx("p",{className:"font-bold text-sofia-green",children:i.match})]}),C.jsxs("div",{children:[C.jsx("p",{className:"text-xs font-bold uppercase text-slate-500 md:hidden",children:"Palpite"}),C.jsx("p",{className:"font-black text-sofia-green",children:i.guess})]}),C.jsxs("div",{children:[C.jsx("p",{className:"text-xs font-bold uppercase text-slate-500 md:hidden",children:"Pontos"}),C.jsx("p",{className:"font-black text-sofia-gold",children:i.points})]}),C.jsx(wf,{tone:i.status==="pontuado"?"gold":i.status==="registrado"?"green":"neutral",children:i.status==="pontuado"?"Pontuado":i.status==="registrado"?"Registrado":"Aguardando"})]},i.id))})]})]})}function IA(){return C.jsxs("div",{className:"page-shell",children:[C.jsx(Ha,{title:"Ranking",description:"Classificação geral dos participantes do Bolão Copa Mercado Sofia."}),C.jsxs("section",{className:"panel overflow-hidden",children:[C.jsxs("div",{className:"hidden grid-cols-[0.4fr_1.2fr_0.8fr_0.6fr_0.6fr] border-b border-sofia-green/10 bg-sofia-green px-4 py-3 text-sm font-bold text-white md:grid",children:[C.jsx("span",{children:"Posição"}),C.jsx("span",{children:"Nome"}),C.jsx("span",{children:"Setor"}),C.jsx("span",{children:"Pontos"}),C.jsx("span",{children:"Exatos"})]}),C.jsx("div",{className:"divide-y divide-sofia-green/10",children:x_.map(i=>C.jsxs("article",{className:"grid gap-3 px-4 py-4 md:grid-cols-[0.4fr_1.2fr_0.8fr_0.6fr_0.6fr] md:items-center",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-md bg-sofia-gold/25 font-black text-sofia-green",children:i.position}),i.position<=3?C.jsx(ky,{className:"text-sofia-gold","aria-hidden":!0,size:19}):null]}),C.jsx("p",{className:"font-bold text-sofia-green",children:i.name}),C.jsx("p",{className:"text-sm font-semibold text-slate-600",children:i.department}),C.jsx("p",{className:"font-black text-sofia-green",children:i.points}),C.jsx("p",{className:"font-black text-sofia-gold",children:i.exact})]},i.position))})]})]})}function SA(){return C.jsxs(jE,{children:[C.jsx(Zn,{path:"/login",element:C.jsx(EA,{})}),C.jsx(Zn,{path:"/cadastro",element:C.jsx(mA,{})}),C.jsxs(Zn,{element:C.jsx(Ew,{}),children:[C.jsx(Zn,{index:!0,element:C.jsx(LE,{to:"/dashboard",replace:!0})}),C.jsx(Zn,{path:"/dashboard",element:C.jsx(vA,{})}),C.jsx(Zn,{path:"/jogos",element:C.jsx(_A,{})}),C.jsx(Zn,{path:"/meus-palpites",element:C.jsx(TA,{})}),C.jsx(Zn,{path:"/ranking",element:C.jsx(IA,{})}),C.jsx(Zn,{path:"/admin",element:C.jsx(ww,{})})]})]})}H0.createRoot(document.getElementById("root")).render(C.jsx(hy.StrictMode,{children:C.jsx(qE,{children:C.jsx(SA,{})})}));
