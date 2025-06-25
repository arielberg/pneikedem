(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function ey(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function PE(){if(pm)return Re;pm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function W(x,$,ce){this.props=x,this.context=$,this.refs=J,this.updater=ce||j}W.prototype.isReactComponent={},W.prototype.setState=function(x,$){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,$,"setState")},W.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ve(){}ve.prototype=W.prototype;function de(x,$,ce){this.props=x,this.context=$,this.refs=J,this.updater=ce||j}var ge=de.prototype=new ve;ge.constructor=de,X(ge,W.prototype),ge.isPureReactComponent=!0;var Te=Array.isArray,ze=Object.prototype.hasOwnProperty,Ie={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(x,$,ce){var Se,Ce={},De=null,Me=null;if($!=null)for(Se in $.ref!==void 0&&(Me=$.ref),$.key!==void 0&&(De=""+$.key),$)ze.call($,Se)&&!N.hasOwnProperty(Se)&&(Ce[Se]=$[Se]);var be=arguments.length-2;if(be===1)Ce.children=ce;else if(1<be){for(var je=Array(be),vt=0;vt<be;vt++)je[vt]=arguments[vt+2];Ce.children=je}if(x&&x.defaultProps)for(Se in be=x.defaultProps,be)Ce[Se]===void 0&&(Ce[Se]=be[Se]);return{$$typeof:i,type:x,key:De,ref:Me,props:Ce,_owner:Ie.current}}function A(x,$){return{$$typeof:i,type:x.type,key:$,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function V(x){var $={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ce){return $[ce]})}var O=/\/+/g;function S(x,$){return typeof x=="object"&&x!==null&&x.key!=null?V(""+x.key):$.toString(36)}function Ke(x,$,ce,Se,Ce){var De=typeof x;(De==="undefined"||De==="boolean")&&(x=null);var Me=!1;if(x===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(x.$$typeof){case i:case e:Me=!0}}if(Me)return Me=x,Ce=Ce(Me),x=Se===""?"."+S(Me,0):Se,Te(Ce)?(ce="",x!=null&&(ce=x.replace(O,"$&/")+"/"),Ke(Ce,$,ce,"",function(vt){return vt})):Ce!=null&&(k(Ce)&&(Ce=A(Ce,ce+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(O,"$&/")+"/")+x)),$.push(Ce)),1;if(Me=0,Se=Se===""?".":Se+":",Te(x))for(var be=0;be<x.length;be++){De=x[be];var je=Se+S(De,be);Me+=Ke(De,$,ce,je,Ce)}else if(je=D(x),typeof je=="function")for(x=je.call(x),be=0;!(De=x.next()).done;)De=De.value,je=Se+S(De,be++),Me+=Ke(De,$,ce,je,Ce);else if(De==="object")throw $=String(x),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Me}function gt(x,$,ce){if(x==null)return x;var Se=[],Ce=0;return Ke(x,Se,"","",function(De){return $.call(ce,De,Ce++)}),Se}function yt(x){if(x._status===-1){var $=x._result;$=$(),$.then(function(ce){(x._status===0||x._status===-1)&&(x._status=1,x._result=ce)},function(ce){(x._status===0||x._status===-1)&&(x._status=2,x._result=ce)}),x._status===-1&&(x._status=0,x._result=$)}if(x._status===1)return x._result.default;throw x._result}var Z={current:null},z={transition:null},ne={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:z,ReactCurrentOwner:Ie};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:gt,forEach:function(x,$,ce){gt(x,function(){$.apply(this,arguments)},ce)},count:function(x){var $=0;return gt(x,function(){$++}),$},toArray:function(x){return gt(x,function($){return $})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Re.Component=W,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=de,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,Re.act=ee,Re.cloneElement=function(x,$,ce){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Se=X({},x.props),Ce=x.key,De=x.ref,Me=x._owner;if($!=null){if($.ref!==void 0&&(De=$.ref,Me=Ie.current),$.key!==void 0&&(Ce=""+$.key),x.type&&x.type.defaultProps)var be=x.type.defaultProps;for(je in $)ze.call($,je)&&!N.hasOwnProperty(je)&&(Se[je]=$[je]===void 0&&be!==void 0?be[je]:$[je])}var je=arguments.length-2;if(je===1)Se.children=ce;else if(1<je){be=Array(je);for(var vt=0;vt<je;vt++)be[vt]=arguments[vt+2];Se.children=be}return{$$typeof:i,type:x.type,key:Ce,ref:De,props:Se,_owner:Me}},Re.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},Re.createElement=I,Re.createFactory=function(x){var $=I.bind(null,x);return $.type=x,$},Re.createRef=function(){return{current:null}},Re.forwardRef=function(x){return{$$typeof:m,render:x}},Re.isValidElement=k,Re.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:yt}},Re.memo=function(x,$){return{$$typeof:_,type:x,compare:$===void 0?null:$}},Re.startTransition=function(x){var $=z.transition;z.transition={};try{x()}finally{z.transition=$}},Re.unstable_act=ee,Re.useCallback=function(x,$){return Z.current.useCallback(x,$)},Re.useContext=function(x){return Z.current.useContext(x)},Re.useDebugValue=function(){},Re.useDeferredValue=function(x){return Z.current.useDeferredValue(x)},Re.useEffect=function(x,$){return Z.current.useEffect(x,$)},Re.useId=function(){return Z.current.useId()},Re.useImperativeHandle=function(x,$,ce){return Z.current.useImperativeHandle(x,$,ce)},Re.useInsertionEffect=function(x,$){return Z.current.useInsertionEffect(x,$)},Re.useLayoutEffect=function(x,$){return Z.current.useLayoutEffect(x,$)},Re.useMemo=function(x,$){return Z.current.useMemo(x,$)},Re.useReducer=function(x,$,ce){return Z.current.useReducer(x,$,ce)},Re.useRef=function(x){return Z.current.useRef(x)},Re.useState=function(x){return Z.current.useState(x)},Re.useSyncExternalStore=function(x,$,ce){return Z.current.useSyncExternalStore(x,$,ce)},Re.useTransition=function(){return Z.current.useTransition()},Re.version="18.3.1",Re}var mm;function ty(){return mm||(mm=1,Oh.exports=PE()),Oh.exports}var Mt=ty();const B=ey(Mt);var ru={},Lh={exports:{}},Yt={},Mh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function NE(){return gm||(gm=1,function(i){function e(z,ne){var ee=z.length;z.push(ne);e:for(;0<ee;){var x=ee-1>>>1,$=z[x];if(0<o($,ne))z[x]=ne,z[ee]=$,ee=x;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ne=z[0],ee=z.pop();if(ee!==ne){z[0]=ee;e:for(var x=0,$=z.length,ce=$>>>1;x<ce;){var Se=2*(x+1)-1,Ce=z[Se],De=Se+1,Me=z[De];if(0>o(Ce,ee))De<$&&0>o(Me,Ce)?(z[x]=Me,z[De]=ee,x=De):(z[x]=Ce,z[Se]=ee,x=Se);else if(De<$&&0>o(Me,ee))z[x]=Me,z[De]=ee,x=De;else break e}}return ne}function o(z,ne){var ee=z.sortIndex-ne.sortIndex;return ee!==0?ee:z.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,R=null,D=3,j=!1,X=!1,J=!1,W=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(z){for(var ne=t(_);ne!==null;){if(ne.callback===null)s(_);else if(ne.startTime<=z)s(_),ne.sortIndex=ne.expirationTime,e(y,ne);else break;ne=t(_)}}function Te(z){if(J=!1,ge(z),!X)if(t(y)!==null)X=!0,yt(ze);else{var ne=t(_);ne!==null&&Z(Te,ne.startTime-z)}}function ze(z,ne){X=!1,J&&(J=!1,ve(I),I=-1),j=!0;var ee=D;try{for(ge(ne),R=t(y);R!==null&&(!(R.expirationTime>ne)||z&&!V());){var x=R.callback;if(typeof x=="function"){R.callback=null,D=R.priorityLevel;var $=x(R.expirationTime<=ne);ne=i.unstable_now(),typeof $=="function"?R.callback=$:R===t(y)&&s(y),ge(ne)}else s(y);R=t(y)}if(R!==null)var ce=!0;else{var Se=t(_);Se!==null&&Z(Te,Se.startTime-ne),ce=!1}return ce}finally{R=null,D=ee,j=!1}}var Ie=!1,N=null,I=-1,A=5,k=-1;function V(){return!(i.unstable_now()-k<A)}function O(){if(N!==null){var z=i.unstable_now();k=z;var ne=!0;try{ne=N(!0,z)}finally{ne?S():(Ie=!1,N=null)}}else Ie=!1}var S;if(typeof de=="function")S=function(){de(O)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,gt=Ke.port2;Ke.port1.onmessage=O,S=function(){gt.postMessage(null)}}else S=function(){W(O,0)};function yt(z){N=z,Ie||(Ie=!0,S())}function Z(z,ne){I=W(function(){z(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){X||j||(X=!0,yt(ze))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(z){switch(D){case 1:case 2:case 3:var ne=3;break;default:ne=D}var ee=D;D=ne;try{return z()}finally{D=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,ne){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=D;D=z;try{return ne()}finally{D=ee}},i.unstable_scheduleCallback=function(z,ne,ee){var x=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ee+$,z={id:w++,callback:ne,priorityLevel:z,startTime:ee,expirationTime:$,sortIndex:-1},ee>x?(z.sortIndex=ee,e(_,z),t(y)===null&&z===t(_)&&(J?(ve(I),I=-1):J=!0,Z(Te,ee-x))):(z.sortIndex=$,e(y,z),X||j||(X=!0,yt(ze))),z},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(z){var ne=D;return function(){var ee=D;D=ne;try{return z.apply(this,arguments)}finally{D=ee}}}}(bh)),bh}var ym;function DE(){return ym||(ym=1,Mh.exports=NE()),Mh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function VE(){if(vm)return Yt;vm=1;var i=ty(),e=DE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function D(n){return y.call(R,n)?!0:y.call(w,n)?!1:_.test(n)?R[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ve,de);W[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ve,de);W[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ve,de);W[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),z=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function $(n){if(x===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+n}var ce=!1;function Se(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ce(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ie:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ke:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gt:return r=n.displayName||null,r!==null?r:De(n.type)||"Memo";case yt:r=n._payload,n=n._init;try{return De(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function vt(n){var r=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=vt(n))}function ss(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function os(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=be(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Io(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function So(n,r){Io(n,r);var a=be(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?as(n,r.type,a):r.hasOwnProperty("defaultValue")&&as(n,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function ja(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function as(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ao(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ls(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:be(a)}}function us(n,r){var a=be(r.value),c=be(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Co(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,Ro=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Nr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ei=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(n){Ei.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),_i[r]=_i[n]})});function ko(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||_i.hasOwnProperty(n)&&_i[n]?(""+r).trim():r+"px"}function Po(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ko(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(n,r){if(r){if(No[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Vo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hs=null,ln=null,Un=null;function ds(n){if(n=na(n)){if(typeof hs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=vl(r),hs(n.stateNode,n.type,r))}}function zn(n){ln?Un?Un.push(n):Un=[n]:ln=n}function xo(){if(ln){var n=ln,r=Un;if(Un=ln=null,ds(n),r)for(n=0;n<r.length;n++)ds(r[n])}}function Ti(n,r){return n(r)}function Oo(){}var or=!1;function Lo(n,r,a){if(or)return n(r,a);or=!0;try{return Ti(n,r,a)}finally{or=!1,(ln!==null||Un!==null)&&(Oo(),xo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var fs=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){fs=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{fs=!1}function Ii(n,r,a,c,d,p,v,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var Si=!1,ps=null,En=!1,Mo=null,lc={onError:function(n){Si=!0,ps=n}};function ms(n,r,a,c,d,p,v,T,C){Si=!1,ps=null,Ii.apply(lc,arguments)}function $a(n,r,a,c,d,p,v,T,C){if(ms.apply(this,arguments),Si){if(Si){var F=ps;Si=!1,ps=null}else throw Error(t(198));En||(En=!0,Mo=F)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ai(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Tn(n){if(wn(n)!==n)throw Error(t(188))}function Ha(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Tn(d),n;if(p===c)return Tn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=p;break}if(T===c){v=!0,c=d,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,c=d;break}if(T===c){v=!0,c=p,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function bo(n){return n=Ha(n),n!==null?gs(n):null}function gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gs(n);if(r!==null)return r;n=n.sibling}return null}var ys=e.unstable_scheduleCallback,Fo=e.unstable_cancelCallback,Wa=e.unstable_shouldYield,uc=e.unstable_requestPaint,$e=e.unstable_now,qa=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,Dr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,Ka=e.unstable_IdlePriority,Ri=null,Zt=null;function Ga(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ri,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Xa,zo=Math.log,Qa=Math.LN2;function Xa(n){return n>>>=0,n===0?32:31-(zo(n)/Qa|0)|0}var vs=64,_s=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ki(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Vr(T):(p&=v,p!==0&&(c=Vr(p)))}else v=a&~d,v!==0?c=Vr(v):p!==0&&(c=Vr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-zt(r),d=1<<a,c|=n[a],r&=~d;return c}function cc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-zt(p),T=1<<v,C=d[v];C===-1?((T&a)===0||(T&c)!==0)&&(d[v]=cc(T,r)):C<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pi(){var n=vs;return vs<<=1,(vs&4194240)===0&&(vs=64),n}function xr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Or(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-zt(r),n[r]=a}function Be(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Lr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ne=0;function Mr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ya,Es,Ja,Za,el,Bo=!1,Bn=[],St=null,In=null,Sn=null,br=new Map,cn=new Map,jn=[],hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(n,r){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(r.pointerId)}}function Ht(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=na(r),r!==null&&Es(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function dc(n,r,a,c,d){switch(r){case"focusin":return St=Ht(St,n,r,a,c,d),!0;case"dragenter":return In=Ht(In,n,r,a,c,d),!0;case"mouseover":return Sn=Ht(Sn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return br.set(p,Ht(br.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,Ht(cn.get(p)||null,n,r,a,c,d)),!0}return!1}function nl(n){var r=Oi(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ai(a),r!==null){n.blockedOn=r,el(n.priority,function(){Ja(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ws(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);wi=c,a.target.dispatchEvent(c),wi=null}else return r=na(a),r!==null&&Es(r),n.blockedOn=a,!1;r.shift()}return!0}function Ni(n,r,a){lr(n)&&a.delete(r)}function rl(){Bo=!1,St!==null&&lr(St)&&(St=null),In!==null&&lr(In)&&(In=null),Sn!==null&&lr(Sn)&&(Sn=null),br.forEach(Ni),cn.forEach(Ni)}function An(n,r){n.blockedOn===r&&(n.blockedOn=null,Bo||(Bo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rl)))}function Cn(n){function r(d){return An(d,n)}if(0<Bn.length){An(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&An(St,n),In!==null&&An(In,n),Sn!==null&&An(Sn,n),br.forEach(r),cn.forEach(r),a=0;a<jn.length;a++)c=jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)nl(a),a.blockedOn===null&&jn.shift()}var ur=Te.ReactCurrentBatchConfig,Fr=!0;function Ge(n,r,a,c){var d=Ne,p=ur.transition;ur.transition=null;try{Ne=1,jo(n,r,a,c)}finally{Ne=d,ur.transition=p}}function fc(n,r,a,c){var d=Ne,p=ur.transition;ur.transition=null;try{Ne=4,jo(n,r,a,c)}finally{Ne=d,ur.transition=p}}function jo(n,r,a,c){if(Fr){var d=ws(n,r,a,c);if(d===null)Sc(n,r,c,Di,a),tl(n,c);else if(dc(d,n,r,a,c))c.stopPropagation();else if(tl(n,c),r&4&&-1<hc.indexOf(n)){for(;d!==null;){var p=na(d);if(p!==null&&Ya(p),p=ws(n,r,a,c),p===null&&Sc(n,r,c,Di,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Sc(n,r,c,null,a)}}var Di=null;function ws(n,r,a,c){if(Di=null,n=cs(c),n=Oi(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ai(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Di=n,null}function $o(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qa()){case Ci:return 1;case Dr:return 4;case un:case Uo:return 16;case Ka:return 536870912;default:return 16}default:return 16}}var tn=null,Ts=null,Wt=null;function Ho(){if(Wt)return Wt;var n,r=Ts,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function Is(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Wo(){return!1}function At(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?$n:Wo,this.isPropagationStopped=Wo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=At(Rn),Hn=ee({},Rn,{view:0,detail:0}),pc=At(Hn),As,cr,Ur,Vi=ee({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(As=n.screenX-Ur.screenX,cr=n.screenY-Ur.screenY):cr=As=0,Ur=n),As)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),Cs=At(Vi),qo=ee({},Vi,{dataTransfer:0}),il=At(qo),Rs=ee({},Hn,{relatedTarget:0}),ks=At(Rs),sl=ee({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=At(sl),ol=ee({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),al=At(ol),ll=ee({},Rn,{data:0}),Ko=At(ll),Ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ul[n])?!!r[n]:!1}function Wn(){return cl}var l=ee({},Hn,{key:function(n){if(n.key){var r=Ps[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Is(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(n){return n.type==="keypress"?Is(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Is(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(l),g=ee({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(g),L=ee({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),U=At(L),te=ee({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=At(te),ct=ee({},Vi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=At(ct),_t=[9,13,27,32],it=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var nn=m&&"TextEvent"in window&&!hn,xi=m&&(!it||hn&&8<hn&&11>=hn),Ns=" ",lf=!1;function uf(n,r){switch(n){case"keyup":return _t.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function C_(n,r){switch(n){case"compositionend":return cf(r);case"keypress":return r.which!==32?null:(lf=!0,Ns);case"textInput":return n=r.data,n===Ns&&lf?null:n;default:return null}}function R_(n,r){if(Ds)return n==="compositionend"||!it&&uf(n,r)?(n=Ho(),Wt=Ts=tn=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return xi&&r.locale!=="ko"?null:r.data;default:return null}}var k_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!k_[n.type]:r==="textarea"}function df(n,r,a,c){zn(c),r=ml(r,"onChange"),0<r.length&&(a=new Ss("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Go=null,Qo=null;function P_(n){Nf(n,0)}function hl(n){var r=Ms(n);if(ss(r))return n}function N_(n,r){if(n==="change")return r}var ff=!1;if(m){var mc;if(m){var gc="oninput"in document;if(!gc){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),gc=typeof pf.oninput=="function"}mc=gc}else mc=!1;ff=mc&&(!document.documentMode||9<document.documentMode)}function mf(){Go&&(Go.detachEvent("onpropertychange",gf),Qo=Go=null)}function gf(n){if(n.propertyName==="value"&&hl(Qo)){var r=[];df(r,Qo,n,cs(n)),Lo(P_,r)}}function D_(n,r,a){n==="focusin"?(mf(),Go=r,Qo=a,Go.attachEvent("onpropertychange",gf)):n==="focusout"&&mf()}function V_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(Qo)}function x_(n,r){if(n==="click")return hl(r)}function O_(n,r){if(n==="input"||n==="change")return hl(r)}function L_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var kn=typeof Object.is=="function"?Object.is:L_;function Xo(n,r){if(kn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!kn(n[d],r[d]))return!1}return!0}function yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vf(n,r){var a=yf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yf(a)}}function _f(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_f(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ef(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function yc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function M_(n){var r=Ef(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&_f(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=vf(a,p);var v=vf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var b_=m&&"documentMode"in document&&11>=document.documentMode,Vs=null,vc=null,Yo=null,_c=!1;function wf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||Vs==null||Vs!==Pr(c)||(c=Vs,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&Xo(Yo,c)||(Yo=c,c=ml(vc,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Vs)))}function dl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var xs={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Ec={},Tf={};m&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function fl(n){if(Ec[n])return Ec[n];if(!xs[n])return n;var r=xs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Tf)return Ec[n]=r[a];return n}var If=fl("animationend"),Sf=fl("animationiteration"),Af=fl("animationstart"),Cf=fl("transitionend"),Rf=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){Rf.set(n,r),u(r,[n])}for(var wc=0;wc<kf.length;wc++){var Tc=kf[wc],F_=Tc.toLowerCase(),U_=Tc[0].toUpperCase()+Tc.slice(1);zr(F_,"on"+U_)}zr(If,"onAnimationEnd"),zr(Sf,"onAnimationIteration"),zr(Af,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Cf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Pf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,$a(c,r,void 0,n),n.currentTarget=null}function Nf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;Pf(d,T,F),p=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,F=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;Pf(d,T,F),p=C}}}if(En)throw n=Mo,En=!1,Mo=null,n}function We(n,r){var a=r[Nc];a===void 0&&(a=r[Nc]=new Set);var c=n+"__bubble";a.has(c)||(Df(r,n,2,!1),a.add(c))}function Ic(n,r,a){var c=0;r&&(c|=4),Df(a,n,c,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[pl]){n[pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(z_.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,Ic("selectionchange",!1,r))}}function Df(n,r,a,c){switch($o(r)){case 1:var d=Ge;break;case 4:d=fc;break;default:d=jo}a=d.bind(null,r,a,n),d=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Sc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Oi(T),v===null)return;if(C=v.tag,C===5||C===6){c=p=v;continue e}T=T.parentNode}}c=c.return}Lo(function(){var F=p,K=cs(a),Q=[];e:{var q=Rf.get(n);if(q!==void 0){var re=Ss,oe=n;switch(n){case"keypress":if(Is(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":oe="focus",re=ks;break;case"focusout":oe="blur",re=ks;break;case"beforeblur":case"afterblur":re=ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=U;break;case If:case Sf:case Af:re=hr;break;case Cf:re=Ue;break;case"scroll":re=pc;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var ae=(r&4)!==0,nt=!ae&&n==="scroll",M=ae?q!==null?q+"Capture":null:q;ae=[];for(var P=F,b;P!==null;){b=P;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=tt(P,M),Y!=null&&ae.push(ea(P,Y,b)))),nt)break;P=P.return}0<ae.length&&(q=new re(q,oe,null,a,K),Q.push({event:q,listeners:ae}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",q&&a!==wi&&(oe=a.relatedTarget||a.fromElement)&&(Oi(oe)||oe[dr]))break e;if((re||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,re?(oe=a.relatedTarget||a.toElement,re=F,oe=oe?Oi(oe):null,oe!==null&&(nt=wn(oe),oe!==nt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=F),re!==oe)){if(ae=Cs,Y="onMouseLeave",M="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,Y="onPointerLeave",M="onPointerEnter",P="pointer"),nt=re==null?q:Ms(re),b=oe==null?q:Ms(oe),q=new ae(Y,P+"leave",re,a,K),q.target=nt,q.relatedTarget=b,Y=null,Oi(K)===F&&(ae=new ae(M,P+"enter",oe,a,K),ae.target=b,ae.relatedTarget=nt,Y=ae),nt=Y,re&&oe)t:{for(ae=re,M=oe,P=0,b=ae;b;b=Os(b))P++;for(b=0,Y=M;Y;Y=Os(Y))b++;for(;0<P-b;)ae=Os(ae),P--;for(;0<b-P;)M=Os(M),b--;for(;P--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Os(ae),M=Os(M)}ae=null}else ae=null;re!==null&&Vf(Q,q,re,ae,!1),oe!==null&&nt!==null&&Vf(Q,nt,oe,ae,!0)}}e:{if(q=F?Ms(F):window,re=q.nodeName&&q.nodeName.toLowerCase(),re==="select"||re==="input"&&q.type==="file")var le=N_;else if(hf(q))if(ff)le=O_;else{le=V_;var fe=D_}else(re=q.nodeName)&&re.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(le=x_);if(le&&(le=le(n,F))){df(Q,le,a,K);break e}fe&&fe(n,q,F),n==="focusout"&&(fe=q._wrapperState)&&fe.controlled&&q.type==="number"&&as(q,"number",q.value)}switch(fe=F?Ms(F):window,n){case"focusin":(hf(fe)||fe.contentEditable==="true")&&(Vs=fe,vc=F,Yo=null);break;case"focusout":Yo=vc=Vs=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,wf(Q,a,K);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":wf(Q,a,K)}var pe;if(it)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ds?uf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(xi&&a.locale!=="ko"&&(Ds||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ds&&(pe=Ho()):(tn=K,Ts="value"in tn?tn.value:tn.textContent,Ds=!0)),fe=ml(F,_e),0<fe.length&&(_e=new Ko(_e,n,null,a,K),Q.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=cf(a),pe!==null&&(_e.data=pe)))),(pe=nn?C_(n,a):R_(n,a))&&(F=ml(F,"onBeforeInput"),0<F.length&&(K=new Ko("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=pe))}Nf(Q,r)})}function ea(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ml(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(ea(n,p,d)),p=tt(n,r),p!=null&&c.push(ea(n,p,d))),n=n.return}return c}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=tt(a,p),C!=null&&v.unshift(ea(a,C,T))):d||(C=tt(a,p),C!=null&&v.push(ea(a,C,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var B_=/\r\n?/g,j_=/\u0000|\uFFFD/g;function xf(n){return(typeof n=="string"?n:""+n).replace(B_,`
`).replace(j_,"")}function gl(n,r,a){if(r=xf(r),xf(n)!==r&&a)throw Error(t(425))}function yl(){}var Ac=null,Cc=null;function Rc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,H_=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(n){return Of.resolve(null).then(n).catch(W_)}:kc;function W_(n){setTimeout(function(){throw n})}function Pc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Cn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Cn(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Lf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,ta="__reactProps$"+Ls,dr="__reactContainer$"+Ls,Nc="__reactEvents$"+Ls,q_="__reactListeners$"+Ls,K_="__reactHandles$"+Ls;function Oi(n){var r=n[qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Lf(n);n!==null;){if(a=n[qn])return a;n=Lf(n)}return r}n=a,a=n.parentNode}return null}function na(n){return n=n[qn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function vl(n){return n[ta]||null}var Dc=[],bs=-1;function jr(n){return{current:n}}function qe(n){0>bs||(n.current=Dc[bs],Dc[bs]=null,bs--)}function He(n,r){bs++,Dc[bs]=n.current,n.current=r}var $r={},Dt=jr($r),qt=jr(!1),Li=$r;function Fs(n,r){var a=n.type.contextTypes;if(!a)return $r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function _l(){qe(qt),qe(Dt)}function Mf(n,r,a){if(Dt.current!==$r)throw Error(t(168));He(Dt,r),He(qt,a)}function bf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return ee({},a,c)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Li=Dt.current,He(Dt,n),He(qt,qt.current),!0}function Ff(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=bf(n,r,Li),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(Dt),He(Dt,n)):qe(qt),He(qt,a)}var fr=null,wl=!1,Vc=!1;function Uf(n){fr===null?fr=[n]:fr.push(n)}function G_(n){wl=!0,Uf(n)}function Hr(){if(!Vc&&fr!==null){Vc=!0;var n=0,r=Ne;try{var a=fr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,wl=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),ys(Ci,Hr),d}finally{Ne=r,Vc=!1}}return null}var Us=[],zs=0,Tl=null,Il=0,dn=[],fn=0,Mi=null,pr=1,mr="";function bi(n,r){Us[zs++]=Il,Us[zs++]=Tl,Tl=n,Il=r}function zf(n,r,a){dn[fn++]=pr,dn[fn++]=mr,dn[fn++]=Mi,Mi=n;var c=pr;n=mr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var p=32-zt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,pr=1<<32-zt(r)+d|a<<d|c,mr=p+n}else pr=1<<p|a<<d|c,mr=n}function xc(n){n.return!==null&&(bi(n,1),zf(n,1,0))}function Oc(n){for(;n===Tl;)Tl=Us[--zs],Us[zs]=null,Il=Us[--zs],Us[zs]=null;for(;n===Mi;)Mi=dn[--fn],dn[fn]=null,mr=dn[--fn],dn[fn]=null,pr=dn[--fn],dn[fn]=null}var rn=null,sn=null,Qe=!1,Pn=null;function Bf(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function jf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Mi!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mc(n){if(Qe){var r=sn;if(r){var a=r;if(!jf(n,r)){if(Lc(n))throw Error(t(418));r=Br(a.nextSibling);var c=rn;r&&jf(n,r)?Bf(c,a):(n.flags=n.flags&-4097|2,Qe=!1,rn=n)}}else{if(Lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,rn=n}}}function $f(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Sl(n){if(n!==rn)return!1;if(!Qe)return $f(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Rc(n.type,n.memoizedProps)),r&&(r=sn)){if(Lc(n))throw Hf(),Error(t(418));for(;r;)Bf(n,r),r=Br(r.nextSibling)}if($f(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Br(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Br(n.stateNode.nextSibling):null;return!0}function Hf(){for(var n=sn;n;)n=Br(n.nextSibling)}function Bs(){sn=rn=null,Qe=!1}function bc(n){Pn===null?Pn=[n]:Pn.push(n)}var Q_=Te.ReactCurrentBatchConfig;function ra(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Wf(n){var r=n._init;return r(n._payload)}function qf(n){function r(M,P){if(n){var b=M.deletions;b===null?(M.deletions=[P],M.flags|=16):b.push(P)}}function a(M,P){if(!n)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=Jr(M,P),M.index=0,M.sibling=null,M}function p(M,P,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<P?(M.flags|=2,P):b):(M.flags|=2,P)):(M.flags|=1048576,P)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,P,b,Y){return P===null||P.tag!==6?(P=kh(b,M.mode,Y),P.return=M,P):(P=d(P,b),P.return=M,P)}function C(M,P,b,Y){var le=b.type;return le===N?K(M,P,b.props.children,Y,b.key):P!==null&&(P.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===yt&&Wf(le)===P.type)?(Y=d(P,b.props),Y.ref=ra(M,P,b),Y.return=M,Y):(Y=Ql(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ra(M,P,b),Y.return=M,Y)}function F(M,P,b,Y){return P===null||P.tag!==4||P.stateNode.containerInfo!==b.containerInfo||P.stateNode.implementation!==b.implementation?(P=Ph(b,M.mode,Y),P.return=M,P):(P=d(P,b.children||[]),P.return=M,P)}function K(M,P,b,Y,le){return P===null||P.tag!==7?(P=Wi(b,M.mode,Y,le),P.return=M,P):(P=d(P,b),P.return=M,P)}function Q(M,P,b){if(typeof P=="string"&&P!==""||typeof P=="number")return P=kh(""+P,M.mode,b),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ze:return b=Ql(P.type,P.key,P.props,null,M.mode,b),b.ref=ra(M,null,P),b.return=M,b;case Ie:return P=Ph(P,M.mode,b),P.return=M,P;case yt:var Y=P._init;return Q(M,Y(P._payload),b)}if(rr(P)||ne(P))return P=Wi(P,M.mode,b,null),P.return=M,P;Al(M,P)}return null}function q(M,P,b,Y){var le=P!==null?P.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,P,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:return b.key===le?C(M,P,b,Y):null;case Ie:return b.key===le?F(M,P,b,Y):null;case yt:return le=b._init,q(M,P,le(b._payload),Y)}if(rr(b)||ne(b))return le!==null?null:K(M,P,b,Y,null);Al(M,b)}return null}function re(M,P,b,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(P,M,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ze:return M=M.get(Y.key===null?b:Y.key)||null,C(P,M,Y,le);case Ie:return M=M.get(Y.key===null?b:Y.key)||null,F(P,M,Y,le);case yt:var fe=Y._init;return re(M,P,b,fe(Y._payload),le)}if(rr(Y)||ne(Y))return M=M.get(b)||null,K(P,M,Y,le,null);Al(P,Y)}return null}function oe(M,P,b,Y){for(var le=null,fe=null,pe=P,_e=P=0,Tt=null;pe!==null&&_e<b.length;_e++){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var Le=q(M,pe,b[_e],Y);if(Le===null){pe===null&&(pe=Tt);break}n&&pe&&Le.alternate===null&&r(M,pe),P=p(Le,P,_e),fe===null?le=Le:fe.sibling=Le,fe=Le,pe=Tt}if(_e===b.length)return a(M,pe),Qe&&bi(M,_e),le;if(pe===null){for(;_e<b.length;_e++)pe=Q(M,b[_e],Y),pe!==null&&(P=p(pe,P,_e),fe===null?le=pe:fe.sibling=pe,fe=pe);return Qe&&bi(M,_e),le}for(pe=c(M,pe);_e<b.length;_e++)Tt=re(pe,M,_e,b[_e],Y),Tt!==null&&(n&&Tt.alternate!==null&&pe.delete(Tt.key===null?_e:Tt.key),P=p(Tt,P,_e),fe===null?le=Tt:fe.sibling=Tt,fe=Tt);return n&&pe.forEach(function(Zr){return r(M,Zr)}),Qe&&bi(M,_e),le}function ae(M,P,b,Y){var le=ne(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var fe=le=null,pe=P,_e=P=0,Tt=null,Le=b.next();pe!==null&&!Le.done;_e++,Le=b.next()){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var Zr=q(M,pe,Le.value,Y);if(Zr===null){pe===null&&(pe=Tt);break}n&&pe&&Zr.alternate===null&&r(M,pe),P=p(Zr,P,_e),fe===null?le=Zr:fe.sibling=Zr,fe=Zr,pe=Tt}if(Le.done)return a(M,pe),Qe&&bi(M,_e),le;if(pe===null){for(;!Le.done;_e++,Le=b.next())Le=Q(M,Le.value,Y),Le!==null&&(P=p(Le,P,_e),fe===null?le=Le:fe.sibling=Le,fe=Le);return Qe&&bi(M,_e),le}for(pe=c(M,pe);!Le.done;_e++,Le=b.next())Le=re(pe,M,_e,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&pe.delete(Le.key===null?_e:Le.key),P=p(Le,P,_e),fe===null?le=Le:fe.sibling=Le,fe=Le);return n&&pe.forEach(function(kE){return r(M,kE)}),Qe&&bi(M,_e),le}function nt(M,P,b,Y){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:e:{for(var le=b.key,fe=P;fe!==null;){if(fe.key===le){if(le=b.type,le===N){if(fe.tag===7){a(M,fe.sibling),P=d(fe,b.props.children),P.return=M,M=P;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===yt&&Wf(le)===fe.type){a(M,fe.sibling),P=d(fe,b.props),P.ref=ra(M,fe,b),P.return=M,M=P;break e}a(M,fe);break}else r(M,fe);fe=fe.sibling}b.type===N?(P=Wi(b.props.children,M.mode,Y,b.key),P.return=M,M=P):(Y=Ql(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ra(M,P,b),Y.return=M,M=Y)}return v(M);case Ie:e:{for(fe=b.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===b.containerInfo&&P.stateNode.implementation===b.implementation){a(M,P.sibling),P=d(P,b.children||[]),P.return=M,M=P;break e}else{a(M,P);break}else r(M,P);P=P.sibling}P=Ph(b,M.mode,Y),P.return=M,M=P}return v(M);case yt:return fe=b._init,nt(M,P,fe(b._payload),Y)}if(rr(b))return oe(M,P,b,Y);if(ne(b))return ae(M,P,b,Y);Al(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,b),P.return=M,M=P):(a(M,P),P=kh(b,M.mode,Y),P.return=M,M=P),v(M)):a(M,P)}return nt}var js=qf(!0),Kf=qf(!1),Cl=jr(null),Rl=null,$s=null,Fc=null;function Uc(){Fc=$s=Rl=null}function zc(n){var r=Cl.current;qe(Cl),n._currentValue=r}function Bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Hs(n,r){Rl=n,Fc=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:r,next:null},$s===null){if(Rl===null)throw Error(t(308));$s=n,Rl.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return r}var Fi=null;function jc(n){Fi===null?Fi=[n]:Fi.push(n)}function Gf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,jc(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Wr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,jc(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function kl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}function Xf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Pl(n,r,a,c){var d=n.updateQueue;Wr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,v===null?p=F:v.next=F,v=C;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=F:T.next=F,K.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;v=0,K=F=C=null,T=p;do{var q=T.lane,re=T.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(q=r,re=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(re,Q,q);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,q=typeof oe=="function"?oe.call(re,Q,q):oe,q==null)break e;Q=ee({},Q,q);break e;case 2:Wr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else re={eventTime:re,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(F=K=re,C=Q):K=K.next=re,v|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Bi|=v,n.lanes=v,n.memoizedState=Q}}function Yf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ia={},Kn=jr(ia),sa=jr(ia),oa=jr(ia);function Ui(n){if(n===ia)throw Error(t(174));return n}function Hc(n,r){switch(He(oa,r),He(sa,n),He(Kn,ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}qe(Kn),He(Kn,r)}function Ws(){qe(Kn),qe(sa),qe(oa)}function Jf(n){Ui(oa.current);var r=Ui(Kn.current),a=ut(r,n.type);r!==a&&(He(sa,n),He(Kn,a))}function Wc(n){sa.current===n&&(qe(Kn),qe(sa))}var Ye=jr(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var qc=[];function Kc(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var Dl=Te.ReactCurrentDispatcher,Gc=Te.ReactCurrentBatchConfig,zi=0,Je=null,ht=null,Et=null,Vl=!1,aa=!1,la=0,X_=0;function Vt(){throw Error(t(321))}function Qc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!kn(n[a],r[a]))return!1;return!0}function Xc(n,r,a,c,d,p){if(zi=p,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dl.current=n===null||n.memoizedState===null?eE:tE,n=a(c,d),aa){p=0;do{if(aa=!1,la=0,25<=p)throw Error(t(301));p+=1,Et=ht=null,r.updateQueue=null,Dl.current=nE,n=a(c,d)}while(aa)}if(Dl.current=Ll,r=ht!==null&&ht.next!==null,zi=0,Et=ht=Je=null,Vl=!1,r)throw Error(t(300));return n}function Yc(){var n=la!==0;return la=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=n:Et=Et.next=n,Et}function mn(){if(ht===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=Et===null?Je.memoizedState:Et.next;if(r!==null)Et=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Et===null?Je.memoizedState=Et=n:Et=Et.next=n}return Et}function ua(n,r){return typeof r=="function"?r(n):r}function Jc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,C=null,F=p;do{var K=F.lane;if((zi&K)===K)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,v=c):C=C.next=Q,Je.lanes|=K,Bi|=K}F=F.next}while(F!==null&&F!==p);C===null?v=c:C.next=T,kn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Je.lanes|=p,Bi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Zc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);kn(p,r.memoizedState)||(Gt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Zf(){}function ep(n,r){var a=Je,c=mn(),d=r(),p=!kn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,eh(rp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ca(9,np.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(zi&30)!==0||tp(a,r,d)}return d}function tp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function np(n,r,a,c){r.value=a,r.getSnapshot=c,ip(r)&&sp(n)}function rp(n,r,a){return a(function(){ip(r)&&sp(n)})}function ip(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!kn(n,a)}catch{return!0}}function sp(n){var r=gr(n,1);r!==null&&xn(r,n,1,-1)}function op(n){var r=Gn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},r.queue=n,n=n.dispatch=Z_.bind(null,Je,n),[r.memoizedState,n]}function ca(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function ap(){return mn().memoizedState}function xl(n,r,a,c){var d=Gn();Je.flags|=n,d.memoizedState=ca(1|r,a,void 0,c===void 0?null:c)}function Ol(n,r,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var v=ht.memoizedState;if(p=v.destroy,c!==null&&Qc(c,v.deps)){d.memoizedState=ca(r,a,p,c);return}}Je.flags|=n,d.memoizedState=ca(1|r,a,p,c)}function lp(n,r){return xl(8390656,8,n,r)}function eh(n,r){return Ol(2048,8,n,r)}function up(n,r){return Ol(4,2,n,r)}function cp(n,r){return Ol(4,4,n,r)}function hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function dp(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4,4,hp.bind(null,r,n),a)}function th(){}function fp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function pp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function mp(n,r,a){return(zi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(kn(a,r)||(a=Pi(),Je.lanes|=a,Bi|=a,n.baseState=!0),r)}function Y_(n,r){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=Gc.transition;Gc.transition={};try{n(!1),r()}finally{Ne=a,Gc.transition=c}}function gp(){return mn().memoizedState}function J_(n,r,a){var c=Xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},yp(n))vp(r,a);else if(a=Gf(n,r,a,c),a!==null){var d=$t();xn(a,n,c,d),_p(a,r,c)}}function Z_(n,r,a){var c=Xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(yp(n))vp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,T=p(v,a);if(d.hasEagerState=!0,d.eagerState=T,kn(T,v)){var C=r.interleaved;C===null?(d.next=d,jc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=Gf(n,r,d,c),a!==null&&(d=$t(),xn(a,n,c,d),_p(a,r,c))}}function yp(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function vp(n,r){aa=Vl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function _p(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}var Ll={readContext:pn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},eE={readContext:pn,useCallback:function(n,r){return Gn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:lp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,xl(4194308,4,hp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return xl(4194308,4,n,r)},useInsertionEffect:function(n,r){return xl(4,2,n,r)},useMemo:function(n,r){var a=Gn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Gn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=J_.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Gn();return n={current:n},r.memoizedState=n},useState:op,useDebugValue:th,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=op(!1),r=n[0];return n=Y_.bind(null,n[1]),Gn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Je,d=Gn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(zi&30)!==0||tp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,lp(rp.bind(null,c,p,n),[n]),c.flags|=2048,ca(9,np.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Gn(),r=wt.identifierPrefix;if(Qe){var a=mr,c=pr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=la++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=X_++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},tE={readContext:pn,useCallback:fp,useContext:pn,useEffect:eh,useImperativeHandle:dp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:pp,useReducer:Jc,useRef:ap,useState:function(){return Jc(ua)},useDebugValue:th,useDeferredValue:function(n){var r=mn();return mp(r,ht.memoizedState,n)},useTransition:function(){var n=Jc(ua)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Zf,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},nE={readContext:pn,useCallback:fp,useContext:pn,useEffect:eh,useImperativeHandle:dp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:pp,useReducer:Zc,useRef:ap,useState:function(){return Zc(ua)},useDebugValue:th,useDeferredValue:function(n){var r=mn();return ht===null?r.memoizedState=n:mp(r,ht.memoizedState,n)},useTransition:function(){var n=Zc(ua)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Zf,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function nh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ml={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Xr(n),p=yr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(xn(r,n,d,c),kl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Xr(n),p=yr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(xn(r,n,d,c),kl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=Xr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(xn(r,n,c,a),kl(r,n,c))}};function Ep(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!Xo(a,c)||!Xo(d,p):!0}function wp(n,r,a){var c=!1,d=$r,p=r.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Kt(r)?Li:Dt.current,c=r.contextTypes,p=(c=c!=null)?Fs(n,d):$r),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Tp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function rh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Kt(r)?Li:Dt.current,d.context=Fs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(nh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ml.enqueueReplaceState(d,d.state,null),Pl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,r){try{var a="",c=r;do a+=Ce(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function ih(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function sh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var rE=typeof WeakMap=="function"?WeakMap:Map;function Ip(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){$l||($l=!0,Eh=c),sh(n,r)},a}function Sp(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){sh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){sh(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Ap(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new rE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=yE.bind(null,n,r,a),r.then(n,n))}function Cp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Rp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var iE=Te.ReactCurrentOwner,Gt=!1;function jt(n,r,a,c){r.child=n===null?Kf(r,null,a,c):js(r,n.child,a,c)}function kp(n,r,a,c,d){a=a.render;var p=r.ref;return Hs(r,d),c=Xc(n,r,a,c,p,d),a=Yc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,vr(n,r,d)):(Qe&&a&&xc(r),r.flags|=1,jt(n,r,c,d),r.child)}function Pp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Rh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Np(n,r,p,c,d)):(n=Ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(v,c)&&n.ref===r.ref)return vr(n,r,d)}return r.flags|=1,n=Jr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Np(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Xo(p,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return r.lanes=n.lanes,vr(n,r,d)}return oh(n,r,a,c,d)}function Dp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Gs,on),on|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Gs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(Gs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(Gs,on),on|=c;return jt(n,r,d,a),r.child}function Vp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function oh(n,r,a,c,d){var p=Kt(a)?Li:Dt.current;return p=Fs(r,p),Hs(r,d),a=Xc(n,r,a,c,p,d),c=Yc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,vr(n,r,d)):(Qe&&c&&xc(r),r.flags|=1,jt(n,r,a,d),r.child)}function xp(n,r,a,c,d){if(Kt(a)){var p=!0;El(r)}else p=!1;if(Hs(r,d),r.stateNode===null)Fl(n,r),wp(r,a,c),rh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Kt(a)?Li:Dt.current,F=Fs(r,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Tp(r,v,c,F),Wr=!1;var q=r.memoizedState;v.state=q,Pl(r,c,v,d),C=r.memoizedState,T!==c||q!==C||qt.current||Wr?(typeof K=="function"&&(nh(r,a,K,c),C=r.memoizedState),(T=Wr||Ep(r,a,T,c,q,C,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Qf(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Nn(r.type,T),v.props=F,Q=r.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=pn(C):(C=Kt(a)?Li:Dt.current,C=Fs(r,C));var re=a.getDerivedStateFromProps;(K=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||q!==C)&&Tp(r,v,c,C),Wr=!1,q=r.memoizedState,v.state=q,Pl(r,c,v,d);var oe=r.memoizedState;T!==Q||q!==oe||qt.current||Wr?(typeof re=="function"&&(nh(r,a,re,c),oe=r.memoizedState),(F=Wr||Ep(r,a,F,c,q,oe,C)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),v.props=c,v.state=oe,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ah(n,r,a,c,p,d)}function ah(n,r,a,c,d,p){Vp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Ff(r,a,!1),vr(n,r,p);c=r.stateNode,iE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=js(r,n.child,null,p),r.child=js(r,null,T,p)):jt(n,r,T,p),r.memoizedState=c.state,d&&Ff(r,a,!0),r.child}function Op(n){var r=n.stateNode;r.pendingContext?Mf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Mf(n,r.context,!1),Hc(n,r.containerInfo)}function Lp(n,r,a,c,d){return Bs(),bc(d),r.flags|=256,jt(n,r,a,c),r.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mp(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ye,d&1),n===null)return Mc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Xl(v,c,0,null),n=Wi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=uh(a),r.memoizedState=lh,n):ch(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return sE(n,r,v,c,T,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Jr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Jr(T,p):(p=Wi(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?uh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=lh,c}return p=n.child,n=p.sibling,c=Jr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ch(n,r){return r=Xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function bl(n,r,a,c){return c!==null&&bc(c),js(r,n.child,null,a),n=ch(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function sE(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=ih(Error(t(422))),bl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Xl({mode:"visible",children:c.children},d,0,null),p=Wi(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&js(r,n.child,null,v),r.child.memoizedState=uh(v),r.memoizedState=lh,p);if((r.mode&1)===0)return bl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=ih(p,c,void 0),bl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Gt||T){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,gr(n,d),xn(c,n,d,-1))}return Ch(),c=ih(Error(t(421))),bl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=vE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=Br(d.nextSibling),rn=r,Qe=!0,Pn=null,n!==null&&(dn[fn++]=pr,dn[fn++]=mr,dn[fn++]=Mi,pr=n.id,mr=n.overflow,Mi=r),r=ch(r,c.children),r.flags|=4096,r)}function bp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Bc(n.return,r,a)}function hh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Fp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,r,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bp(n,a,r);else if(n.tag===19)bp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ye,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Nl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),hh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Nl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}hh(r,!0,a,null,p);break;case"together":hh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function vr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Bi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Jr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function oE(n,r,a){switch(r.tag){case 3:Op(r),Bs();break;case 5:Jf(r);break;case 1:Kt(r.type)&&El(r);break;case 4:Hc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Cl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Ye,Ye.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Mp(n,r,a):(He(Ye,Ye.current&1),n=vr(n,r,a),n!==null?n.sibling:null);He(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Fp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Dp(n,r,a)}return vr(n,r,a)}var Up,dh,zp,Bp;Up=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},dh=function(){},zp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Ui(Kn.current);var p=null;switch(a){case"input":d=vi(n,d),c=vi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yl)}Do(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&We("scroll",n),p||T===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Bp=function(n,r,a,c){a!==c&&(r.flags|=4)};function ha(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function aE(n,r,a){var c=r.pendingProps;switch(Oc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(r),null;case 1:return Kt(r.type)&&_l(),xt(r),null;case 3:return c=r.stateNode,Ws(),qe(qt),qe(Dt),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pn!==null&&(Ih(Pn),Pn=null))),dh(n,r),xt(r),null;case 5:Wc(r);var d=Ui(oa.current);if(a=r.type,n!==null&&r.stateNode!=null)zp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return xt(r),null}if(n=Ui(Kn.current),Sl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[qn]=r,c[ta]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":os(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":ls(c,p),We("invalid",c)}Do(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":nr(c),ja(c,p,!0);break;case"textarea":nr(c),Co(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[qn]=r,n[ta]=c,Up(n,r,!1,!1),r.stateNode=n;e:{switch(v=Vo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":os(n,c),d=vi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),We("invalid",n);break;case"textarea":ls(n,c),d=Ao(n,c),We("invalid",n);break;default:d=c}Do(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?Po(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ro(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Nr(n,C):typeof C=="number"&&Nr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&We("scroll",n):C!=null&&ge(n,p,C,v))}switch(a){case"input":nr(n),ja(n,c,!1);break;case"textarea":nr(n),Co(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ir(n,!!c.multiple,p,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xt(r),null;case 6:if(n&&r.stateNode!=null)Bp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Ui(oa.current),Ui(Kn.current),Sl(r)){if(c=r.stateNode,a=r.memoizedProps,c[qn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=r,r.stateNode=c}return xt(r),null;case 13:if(qe(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Hf(),Bs(),r.flags|=98560,p=!1;else if(p=Sl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=r}else Bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xt(r),p=!1}else Pn!==null&&(Ih(Pn),Pn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ye.current&1)!==0?dt===0&&(dt=3):Ch())),r.updateQueue!==null&&(r.flags|=4),xt(r),null);case 4:return Ws(),dh(n,r),n===null&&Zo(r.stateNode.containerInfo),xt(r),null;case 10:return zc(r.type._context),xt(r),null;case 17:return Kt(r.type)&&_l(),xt(r),null;case 19:if(qe(Ye),p=r.memoizedState,p===null)return xt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)ha(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Nl(n),v!==null){for(r.flags|=128,ha(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Qs&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304)}else{if(!c)if(n=Nl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ha(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Qe)return xt(r),null}else 2*$e()-p.renderingStartTime>Qs&&a!==1073741824&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ye.current,He(Ye,c?a&1|2:a&1),r):(xt(r),null);case 22:case 23:return Ah(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(xt(r),r.subtreeFlags&6&&(r.flags|=8192)):xt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function lE(n,r){switch(Oc(r),r.tag){case 1:return Kt(r.type)&&_l(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ws(),qe(qt),qe(Dt),Kc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Wc(r),null;case 13:if(qe(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Ye),null;case 4:return Ws(),null;case 10:return zc(r.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var Ul=!1,Ot=!1,uE=typeof WeakSet=="function"?WeakSet:Set,se=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function fh(n,r,a){try{a()}catch(c){et(n,r,c)}}var jp=!1;function cE(n,r){if(Ac=Fr,n=Ef(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,F=0,K=0,Q=n,q=null;t:for(;;){for(var re;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==p||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(re=Q.firstChild)!==null;)q=Q,Q=re;for(;;){if(Q===n)break t;if(q===a&&++F===d&&(T=v),q===p&&++K===c&&(C=v),(re=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=re}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},Fr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,nt=oe.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?ae:Nn(r.type,ae),nt);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=jp,jp=!1,oe}function da(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&fh(r,a,p)}d=d.next}while(d!==c)}}function zl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ph(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function $p(n){var r=n.alternate;r!==null&&(n.alternate=null,$p(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[ta],delete r[Nc],delete r[q_],delete r[K_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hp(n){return n.tag===5||n.tag===3||n.tag===4}function Wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=yl));else if(c!==4&&(n=n.child,n!==null))for(mh(n,r,a),n=n.sibling;n!==null;)mh(n,r,a),n=n.sibling}function gh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gh(n,r,a),n=n.sibling;n!==null;)gh(n,r,a),n=n.sibling}var Ct=null,Dn=!1;function Kr(n,r,a){for(a=a.child;a!==null;)qp(n,r,a),a=a.sibling}function qp(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ri,a)}catch{}switch(a.tag){case 5:Ot||Ks(a,r);case 6:var c=Ct,d=Dn;Ct=null,Kr(n,r,a),Ct=c,Dn=d,Ct!==null&&(Dn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Dn?(n=Ct,a=a.stateNode,n.nodeType===8?Pc(n.parentNode,a):n.nodeType===1&&Pc(n,a),Cn(n)):Pc(Ct,a.stateNode));break;case 4:c=Ct,d=Dn,Ct=a.stateNode.containerInfo,Dn=!0,Kr(n,r,a),Ct=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&fh(a,r,v),d=d.next}while(d!==c)}Kr(n,r,a);break;case 1:if(!Ot&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){et(a,r,T)}Kr(n,r,a);break;case 21:Kr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Kr(n,r,a),Ot=c):Kr(n,r,a);break;default:Kr(n,r,a)}}function Kp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new uE),r.forEach(function(c){var d=_E.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:Ct=T.stateNode,Dn=!1;break e;case 3:Ct=T.stateNode.containerInfo,Dn=!0;break e;case 4:Ct=T.stateNode.containerInfo,Dn=!0;break e}T=T.return}if(Ct===null)throw Error(t(160));qp(p,v,d),Ct=null,Dn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){et(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Gp(r,n),r=r.sibling}function Gp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Qn(n),c&4){try{da(3,n,n.return),zl(3,n)}catch(ae){et(n,n.return,ae)}try{da(5,n,n.return)}catch(ae){et(n,n.return,ae)}}break;case 1:Vn(r,n),Qn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Vn(r,n),Qn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{Nr(d,"")}catch(ae){et(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Io(d,p),Vo(T,v);var F=Vo(T,p);for(v=0;v<C.length;v+=2){var K=C[v],Q=C[v+1];K==="style"?Po(d,Q):K==="dangerouslySetInnerHTML"?Ro(d,Q):K==="children"?Nr(d,Q):ge(d,K,Q,F)}switch(T){case"input":So(d,p);break;case"textarea":us(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?ir(d,!!p.multiple,re,!1):q!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[ta]=p}catch(ae){et(n,n.return,ae)}}break;case 6:if(Vn(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){et(n,n.return,ae)}}break;case 3:if(Vn(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(ae){et(n,n.return,ae)}break;case 4:Vn(r,n),Qn(n);break;case 13:Vn(r,n),Qn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(_h=$e())),c&4&&Kp(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||K,Vn(r,n),Ot=F):Vn(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Q=se=K;se!==null;){switch(q=se,re=q.child,q.tag){case 0:case 11:case 14:case 15:da(4,q,q.return);break;case 1:Ks(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(ae){et(c,a,ae)}}break;case 5:Ks(q,q.return);break;case 22:if(q.memoizedState!==null){Yp(Q);continue}}re!==null?(re.return=q,se=re):Yp(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=ko("display",v))}catch(ae){et(n,n.return,ae)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ae){et(n,n.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Vn(r,n),Qn(n),c&4&&Kp(n);break;case 21:break;default:Vn(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Hp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Nr(d,""),c.flags&=-33);var p=Wp(n);gh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Wp(n);mh(n,T,v);break;default:throw Error(t(161))}}catch(C){et(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function hE(n,r,a){se=n,Qp(n)}function Qp(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Ul;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Ot;T=Ul;var F=Ot;if(Ul=v,(Ot=C)&&!F)for(se=d;se!==null;)v=se,C=v.child,v.tag===22&&v.memoizedState!==null?Jp(d):C!==null?(C.return=v,se=C):Jp(d);for(;p!==null;)se=p,Qp(p),p=p.sibling;se=d,Ul=T,Ot=F}Xp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Xp(n)}}function Xp(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||zl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Nn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Yf(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Yf(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Cn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&ph(r)}catch(q){et(r,r.return,q)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function Yp(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function Jp(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{zl(4,r)}catch(C){et(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){et(r,d,C)}}var p=r.return;try{ph(r)}catch(C){et(r,p,C)}break;case 5:var v=r.return;try{ph(r)}catch(C){et(r,v,C)}}}catch(C){et(r,r.return,C)}if(r===n){se=null;break}var T=r.sibling;if(T!==null){T.return=r.return,se=T;break}se=r.return}}var dE=Math.ceil,Bl=Te.ReactCurrentDispatcher,yh=Te.ReactCurrentOwner,gn=Te.ReactCurrentBatchConfig,Oe=0,wt=null,st=null,Rt=0,on=0,Gs=jr(0),dt=0,fa=null,Bi=0,jl=0,vh=0,pa=null,Qt=null,_h=0,Qs=1/0,_r=null,$l=!1,Eh=null,Gr=null,Hl=!1,Qr=null,Wl=0,ma=0,wh=null,ql=-1,Kl=0;function $t(){return(Oe&6)!==0?$e():ql!==-1?ql:ql=$e()}function Xr(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:Q_.transition!==null?(Kl===0&&(Kl=Pi()),Kl):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:$o(n.type)),n)}function xn(n,r,a,c){if(50<ma)throw ma=0,wh=null,Error(t(185));Or(n,a,c),((Oe&2)===0||n!==wt)&&(n===wt&&((Oe&2)===0&&(jl|=a),dt===4&&Yr(n,Rt)),Xt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(Qs=$e()+500,wl&&Hr()))}function Xt(n,r){var a=n.callbackNode;ar(n,r);var c=ki(n,n===wt?Rt:0);if(c===0)a!==null&&Fo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Fo(a),r===1)n.tag===0?G_(em.bind(null,n)):Uf(em.bind(null,n)),H_(function(){(Oe&6)===0&&Hr()}),a=null;else{switch(Mr(c)){case 1:a=Ci;break;case 4:a=Dr;break;case 16:a=un;break;case 536870912:a=Ka;break;default:a=un}a=lm(a,Zp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Zp(n,r){if(ql=-1,Kl=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var c=ki(n,n===wt?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Gl(n,c);else{r=c;var d=Oe;Oe|=2;var p=nm();(wt!==n||Rt!==r)&&(_r=null,Qs=$e()+500,$i(n,r));do try{mE();break}catch(T){tm(n,T)}while(!0);Uc(),Bl.current=p,Oe=d,st!==null?r=0:(wt=null,Rt=0,r=dt)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Th(n,d))),r===1)throw a=fa,$i(n,0),Yr(n,c),Xt(n,$e()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!fE(d)&&(r=Gl(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Th(n,p))),r===1))throw a=fa,$i(n,0),Yr(n,c),Xt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Hi(n,Qt,_r);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=_h+500-$e(),10<r)){if(ki(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=kc(Hi.bind(null,n,Qt,_r),r);break}Hi(n,Qt,_r);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-zt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dE(c/1960))-c,10<c){n.timeoutHandle=kc(Hi.bind(null,n,Qt,_r),c);break}Hi(n,Qt,_r);break;case 5:Hi(n,Qt,_r);break;default:throw Error(t(329))}}}return Xt(n,$e()),n.callbackNode===a?Zp.bind(null,n):null}function Th(n,r){var a=pa;return n.current.memoizedState.isDehydrated&&($i(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Ih(r)),n}function Ih(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function fE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!kn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~vh,r&=~jl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-zt(r),c=1<<a;n[a]=-1,r&=~c}}function em(n){if((Oe&6)!==0)throw Error(t(327));Xs();var r=ki(n,0);if((r&1)===0)return Xt(n,$e()),null;var a=Gl(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Th(n,c))}if(a===1)throw a=fa,$i(n,0),Yr(n,r),Xt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Hi(n,Qt,_r),Xt(n,$e()),null}function Sh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(Qs=$e()+500,wl&&Hr())}}function ji(n){Qr!==null&&Qr.tag===0&&(Oe&6)===0&&Xs();var r=Oe;Oe|=1;var a=gn.transition,c=Ne;try{if(gn.transition=null,Ne=1,n)return n()}finally{Ne=c,gn.transition=a,Oe=r,(Oe&6)===0&&Hr()}}function Ah(){on=Gs.current,qe(Gs)}function $i(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$_(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Oc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&_l();break;case 3:Ws(),qe(qt),qe(Dt),Kc();break;case 5:Wc(c);break;case 4:Ws();break;case 13:qe(Ye);break;case 19:qe(Ye);break;case 10:zc(c.type._context);break;case 22:case 23:Ah()}a=a.return}if(wt=n,st=n=Jr(n.current,null),Rt=on=r,dt=0,fa=null,vh=jl=Bi=0,Qt=pa=null,Fi!==null){for(r=0;r<Fi.length;r++)if(a=Fi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Fi=null}return n}function tm(n,r){do{var a=st;try{if(Uc(),Dl.current=Ll,Vl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(zi=0,Et=ht=Je=null,aa=!1,la=0,yh.current=null,a===null||a.return===null){dt=1,fa=r,st=null;break}e:{var p=n,v=a.return,T=a,C=r;if(r=Rt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var re=Cp(v);if(re!==null){re.flags&=-257,Rp(re,v,T,p,r),re.mode&1&&Ap(p,F,r),r=re,C=F;var oe=r.updateQueue;if(oe===null){var ae=new Set;ae.add(C),r.updateQueue=ae}else oe.add(C);break e}else{if((r&1)===0){Ap(p,F,r),Ch();break e}C=Error(t(426))}}else if(Qe&&T.mode&1){var nt=Cp(v);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),Rp(nt,v,T,p,r),bc(qs(C,T));break e}}p=C=qs(C,T),dt!==4&&(dt=2),pa===null?pa=[p]:pa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Ip(p,C,r);Xf(p,M);break e;case 1:T=C;var P=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gr===null||!Gr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Sp(p,T,r);Xf(p,Y);break e}}p=p.return}while(p!==null)}im(a)}catch(le){r=le,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function nm(){var n=Bl.current;return Bl.current=Ll,n===null?Ll:n}function Ch(){(dt===0||dt===3||dt===2)&&(dt=4),wt===null||(Bi&268435455)===0&&(jl&268435455)===0||Yr(wt,Rt)}function Gl(n,r){var a=Oe;Oe|=2;var c=nm();(wt!==n||Rt!==r)&&(_r=null,$i(n,r));do try{pE();break}catch(d){tm(n,d)}while(!0);if(Uc(),Oe=a,Bl.current=c,st!==null)throw Error(t(261));return wt=null,Rt=0,dt}function pE(){for(;st!==null;)rm(st)}function mE(){for(;st!==null&&!Wa();)rm(st)}function rm(n){var r=am(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?im(n):st=r,yh.current=null}function im(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=aE(a,r,on),a!==null){st=a;return}}else{if(a=lE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Hi(n,r,a){var c=Ne,d=gn.transition;try{gn.transition=null,Ne=1,gE(n,r,a,c)}finally{gn.transition=d,Ne=c}return null}function gE(n,r,a,c){do Xs();while(Qr!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Be(n,p),n===wt&&(st=wt=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Hl||(Hl=!0,lm(un,function(){return Xs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=Ne;Ne=1;var T=Oe;Oe|=4,yh.current=null,cE(n,a),Gp(a,n),M_(Cc),Fr=!!Ac,Cc=Ac=null,n.current=a,hE(a),uc(),Oe=T,Ne=v,gn.transition=p}else n.current=a;if(Hl&&(Hl=!1,Qr=n,Wl=d),p=n.pendingLanes,p===0&&(Gr=null),Ga(a.stateNode),Xt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($l)throw $l=!1,n=Eh,Eh=null,n;return(Wl&1)!==0&&n.tag!==0&&Xs(),p=n.pendingLanes,(p&1)!==0?n===wh?ma++:(ma=0,wh=n):ma=0,Hr(),null}function Xs(){if(Qr!==null){var n=Mr(Wl),r=gn.transition,a=Ne;try{if(gn.transition=null,Ne=16>n?16:n,Qr===null)var c=!1;else{if(n=Qr,Qr=null,Wl=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(se=F;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:da(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,se=Q;else for(;se!==null;){K=se;var q=K.sibling,re=K.return;if($p(K),K===F){se=null;break}if(q!==null){q.return=re,se=q;break}se=re}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var nt=ae.sibling;ae.sibling=null,ae=nt}while(ae!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:da(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var P=n.current;for(se=P;se!==null;){v=se;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,se=b;else e:for(v=P;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:zl(9,T)}}catch(le){et(T,T.return,le)}if(T===v){se=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,se=Y;break e}se=T.return}}if(Oe=d,Hr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ri,n)}catch{}c=!0}return c}finally{Ne=a,gn.transition=r}}return!1}function sm(n,r,a){r=qs(a,r),r=Ip(n,r,1),n=qr(n,r,1),r=$t(),n!==null&&(Or(n,1,r),Xt(n,r))}function et(n,r,a){if(n.tag===3)sm(n,n,a);else for(;r!==null;){if(r.tag===3){sm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=qs(a,n),n=Sp(r,n,1),r=qr(r,n,1),n=$t(),r!==null&&(Or(r,1,n),Xt(r,n));break}}r=r.return}}function yE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Rt&a)===a&&(dt===4||dt===3&&(Rt&130023424)===Rt&&500>$e()-_h?$i(n,0):vh|=a),Xt(n,r)}function om(n,r){r===0&&((n.mode&1)===0?r=1:(r=_s,_s<<=1,(_s&130023424)===0&&(_s=4194304)));var a=$t();n=gr(n,r),n!==null&&(Or(n,r,a),Xt(n,a))}function vE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),om(n,a)}function _E(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),om(n,a)}var am;am=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Gt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Gt=!1,oE(n,r,a);Gt=(n.flags&131072)!==0}else Gt=!1,Qe&&(r.flags&1048576)!==0&&zf(r,Il,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Fl(n,r),n=r.pendingProps;var d=Fs(r,Dt.current);Hs(r,a),d=Xc(null,r,c,n,d,a);var p=Yc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,El(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(r),d.updater=Ml,r.stateNode=d,d._reactInternals=r,rh(r,c,n,a),r=ah(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&xc(r),jt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Fl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=wE(c),n=Nn(c,n),d){case 0:r=oh(null,r,c,n,a);break e;case 1:r=xp(null,r,c,n,a);break e;case 11:r=kp(null,r,c,n,a);break e;case 14:r=Pp(null,r,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),oh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),xp(n,r,c,d,a);case 3:e:{if(Op(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Qf(n,r),Pl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=qs(Error(t(423)),r),r=Lp(n,r,c,a,d);break e}else if(c!==d){d=qs(Error(t(424)),r),r=Lp(n,r,c,a,d);break e}else for(sn=Br(r.stateNode.containerInfo.firstChild),rn=r,Qe=!0,Pn=null,a=Kf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===d){r=vr(n,r,a);break e}jt(n,r,c,a)}r=r.child}return r;case 5:return Jf(r),n===null&&Mc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Rc(c,d)?v=null:p!==null&&Rc(c,p)&&(r.flags|=32),Vp(n,r),jt(n,r,v,a),r.child;case 6:return n===null&&Mc(r),null;case 13:return Mp(n,r,a);case 4:return Hc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=js(r,null,c,a):jt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),kp(n,r,c,d,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,He(Cl,c._currentValue),c._currentValue=v,p!==null)if(kn(p.value,v)){if(p.children===d.children&&!qt.current){r=vr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=yr(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?C.next=C:(C.next=K.next,K.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),Bc(p.return,a,r),T.lanes|=a;break}C=C.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),Bc(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}jt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Hs(r,a),d=pn(d),c=c(d),r.flags|=1,jt(n,r,c,a),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),Pp(n,r,c,d,a);case 15:return Np(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Fl(n,r),r.tag=1,Kt(c)?(n=!0,El(r)):n=!1,Hs(r,a),wp(r,c,d),rh(r,c,d,a),ah(null,r,c,!0,n,a);case 19:return Fp(n,r,a);case 22:return Dp(n,r,a)}throw Error(t(156,r.tag))};function lm(n,r){return ys(n,r)}function EE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new EE(n,r,a,c)}function Rh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wE(n){if(typeof n=="function")return Rh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===gt)return 14}return 2}function Jr(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ql(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Rh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return Wi(a.children,d,p,r);case I:v=8,d|=8;break;case A:return n=yn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=yn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Ke:return n=yn(19,a,r,d),n.elementType=Ke,n.lanes=p,n;case Z:return Xl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case V:v=9;break e;case O:v=11;break e;case gt:v=14;break e;case yt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Wi(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function Xl(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function kh(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function Ph(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function TE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nh(n,r,a,c,d,p,v,T,C){return n=new TE(n,r,a,T,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=yn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(p),n}function IE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function um(n){if(!n)return $r;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return bf(n,a,r)}return r}function cm(n,r,a,c,d,p,v,T,C){return n=Nh(a,c,!0,n,d,p,v,T,C),n.context=um(null),a=n.current,c=$t(),d=Xr(a),p=yr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Or(n,d,c),Xt(n,c),n}function Yl(n,r,a,c){var d=r.current,p=$t(),v=Xr(d);return a=um(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,v),n!==null&&(xn(n,d,v,p),kl(n,d,v)),v}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Dh(n,r){hm(n,r),(n=n.alternate)&&hm(n,r)}function SE(){return null}var dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vh(n){this._internalRoot=n}Zl.prototype.render=Vh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Yl(n,r,null,null)},Zl.prototype.unmount=Vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ji(function(){Yl(null,n,null,null)}),r[dr]=null}};function Zl(n){this._internalRoot=n}Zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Za();n={blockedOn:null,target:n,priority:r};for(var a=0;a<jn.length&&r!==0&&r<jn[a].priority;a++);jn.splice(a,0,n),a===0&&nl(n)}};function xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function AE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Jl(v);p.call(F)}}var v=cm(r,c,n,0,null,!1,!1,"",fm);return n._reactRootContainer=v,n[dr]=v.current,Zo(n.nodeType===8?n.parentNode:n),ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Jl(C);T.call(F)}}var C=Nh(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=C,n[dr]=C.current,Zo(n.nodeType===8?n.parentNode:n),ji(function(){Yl(r,C,a,c)}),C}function tu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var C=Jl(v);T.call(C)}}Yl(r,v,n,d)}else v=AE(a,r,n,d,c);return Jl(v)}Ya=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vr(r.pendingLanes);a!==0&&(Lr(r,a|1),Xt(r,$e()),(Oe&6)===0&&(Qs=$e()+500,Hr()))}break;case 13:ji(function(){var c=gr(n,1);if(c!==null){var d=$t();xn(c,n,1,d)}}),Dh(n,1)}},Es=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=$t();xn(r,n,134217728,a)}Dh(n,134217728)}},Ja=function(n){if(n.tag===13){var r=Xr(n),a=gr(n,r);if(a!==null){var c=$t();xn(a,n,r,c)}Dh(n,r)}},Za=function(){return Ne},el=function(n,r){var a=Ne;try{return Ne=n,r()}finally{Ne=a}},hs=function(n,r,a){switch(r){case"input":if(So(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=vl(c);if(!d)throw Error(t(90));ss(c),So(c,d)}}}break;case"textarea":us(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Ti=Sh,Oo=ji;var CE={usingClientEntryPoint:!1,Events:[na,Ms,vl,zn,xo,Sh]},ga={findFiberByHostInstance:Oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bo(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||SE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ri=nu.inject(RE),Zt=nu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(r))throw Error(t(200));return IE(n,r,null,a)},Yt.createRoot=function(n,r){if(!xh(n))throw Error(t(299));var a=!1,c="",d=dm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Nh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,Zo(n.nodeType===8?n.parentNode:n),new Vh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=bo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return ji(n)},Yt.hydrate=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!xh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=cm(r,null,n,1,a??null,d,!1,p,v),n[dr]=r.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Zl(r)},Yt.render=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!eu(n))throw Error(t(40));return n._reactRootContainer?(ji(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Sh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var _m;function xE(){if(_m)return Lh.exports;_m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Lh.exports=VE(),Lh.exports}var Em;function OE(){if(Em)return ru;Em=1;var i=xE();return ru.createRoot=i.createRoot,ru.hydrateRoot=i.hydrateRoot,ru}var LE=OE();const ME=ey(LE);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ny=(...i)=>i.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Mt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>Mt.createElement("svg",{ref:y,...FE,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:ny("lucide",o),...m},[...h.map(([_,w])=>Mt.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=(i,e)=>{const t=Mt.forwardRef(({className:s,...o},u)=>Mt.createElement(UE,{ref:u,iconNode:e,className:ny(`lucide-${bE(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=Fn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Fn("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Fn("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=Fn("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=Fn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=Fn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=Fn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Fn("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=Fn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=Fn("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Fn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qE=()=>{};var Cm={};/**
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
 */const ry=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},KE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},iy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let D=(m&15)<<2|_>>6,j=_&63;y||(j=64,h||(D=64)),s.push(t[w],t[R],t[D],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ry(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):KE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const R=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||R==null)throw new GE;const D=u<<2|m>>4;if(s.push(D),_!==64){const j=m<<4&240|_>>2;if(s.push(j),R!==64){const X=_<<6&192|R;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class GE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QE=function(i){const e=ry(i);return iy.encodeByteArray(e,!0)},Tu=function(i){return QE(i).replace(/\./g,"")},sy=function(i){try{return iy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YE=()=>XE().__FIREBASE_DEFAULTS__,JE=()=>{if(typeof process>"u"||typeof Cm>"u")return;const i=Cm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ZE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&sy(i[1]);return e&&JSON.parse(e)},$u=()=>{try{return qE()||YE()||JE()||ZE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},oy=i=>{var e,t;return(t=(e=$u())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},e0=i=>{const e=oy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ay=()=>{var i;return(i=$u())===null||i===void 0?void 0:i.config},ly=i=>{var e;return(e=$u())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class t0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function go(i){return i.endsWith(".cloudworkstations.dev")}async function uy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function n0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Tu(JSON.stringify(t)),Tu(JSON.stringify(h)),""].join(".")}const Ea={};function r0(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ea))Ea[e]?i.emulator.push(e):i.prod.push(e);return i}function i0(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Rm=!1;function cy(i,e){if(typeof window>"u"||typeof document>"u"||!go(window.location.host)||Ea[i]===e||Ea[i]||Rm)return;Ea[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=r0().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,j){D.setAttribute("width","24"),D.setAttribute("id",j),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function _(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{Rm=!0,h()},D}function w(D,j){D.setAttribute("id",j),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function R(){const D=i0(s),j=t("text"),X=document.getElementById(j)||document.createElement("span"),J=t("learnmore"),W=document.getElementById(J)||document.createElement("a"),ve=t("preprendIcon"),de=document.getElementById(ve)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ge=D.element;m(ge),w(W,J);const Te=_();y(de,ve),ge.append(de,X,W,Te),document.body.appendChild(ge)}u?(X.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function o0(){var i;const e=(i=$u())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function a0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function l0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function u0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c0(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function h0(){return!o0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d0(){try{return typeof indexedDB=="object"}catch{return!1}}function f0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const p0="FirebaseError";class kr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=p0,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?m0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new kr(o,m,s)}}function m0(i,e){return i.replace(g0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const g0=/\{\$([^}]+)}/g;function y0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Qi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(km(u)&&km(h)){if(!Qi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function km(i){return i!==null&&typeof i=="object"}/**
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
 */function yo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function v0(i,e){const t=new _0(i,e);return t.subscribe.bind(t)}class _0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");E0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Fh),o.error===void 0&&(o.error=Fh),o.complete===void 0&&(o.complete=Fh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Fh(){}/**
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
 */function bn(i){return i&&i._delegate?i._delegate:i}class Xi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qi="[DEFAULT]";/**
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
 */class w0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new t0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I0(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:T0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T0(i){return i===qi?void 0:i}function I0(i){return i.instantiationMode==="EAGER"}/**
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
 */class S0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new w0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const A0={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},C0=ke.INFO,R0={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},k0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=R0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ed{constructor(e){this.name=e,this._logLevel=C0,this._logHandler=k0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const P0=(i,e)=>e.some(t=>i instanceof t);let Pm,Nm;function N0(){return Pm||(Pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D0(){return Nm||(Nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,Xh=new WeakMap,dy=new WeakMap,Uh=new WeakMap,wd=new WeakMap;function V0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&hy.set(t,i)}).catch(()=>{}),wd.set(e,i),e}function x0(i){if(Xh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Xh.set(i,e)}let Yh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Xh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||dy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function O0(i){Yh=i(Yh)}function L0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(zh(this),e,...t);return dy.set(s,e.sort?e.sort():[e]),oi(s)}:D0().includes(i)?function(...e){return i.apply(zh(this),e),oi(hy.get(this))}:function(...e){return oi(i.apply(zh(this),e))}}function M0(i){return typeof i=="function"?L0(i):(i instanceof IDBTransaction&&x0(i),P0(i,N0())?new Proxy(i,Yh):i)}function oi(i){if(i instanceof IDBRequest)return V0(i);if(Uh.has(i))return Uh.get(i);const e=M0(i);return e!==i&&(Uh.set(i,e),wd.set(e,i)),e}const zh=i=>wd.get(i);function b0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(oi(h.result),y.oldVersion,y.newVersion,oi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const F0=["get","getKey","getAll","getAllKeys","count"],U0=["put","add","delete","clear"],Bh=new Map;function Dm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=U0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||F0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return Bh.set(e,u),u}O0(i=>({...i,get:(e,t,s)=>Dm(e,t)||i.get(e,t,s),has:(e,t)=>!!Dm(e,t)||i.has(e,t)}));/**
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
 */class z0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(B0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function B0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",Vm="0.13.1";/**
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
 */const Ir=new Ed("@firebase/app"),j0="@firebase/app-compat",$0="@firebase/analytics-compat",H0="@firebase/analytics",W0="@firebase/app-check-compat",q0="@firebase/app-check",K0="@firebase/auth",G0="@firebase/auth-compat",Q0="@firebase/database",X0="@firebase/data-connect",Y0="@firebase/database-compat",J0="@firebase/functions",Z0="@firebase/functions-compat",ew="@firebase/installations",tw="@firebase/installations-compat",nw="@firebase/messaging",rw="@firebase/messaging-compat",iw="@firebase/performance",sw="@firebase/performance-compat",ow="@firebase/remote-config",aw="@firebase/remote-config-compat",lw="@firebase/storage",uw="@firebase/storage-compat",cw="@firebase/firestore",hw="@firebase/ai",dw="@firebase/firestore-compat",fw="firebase",pw="11.9.0";/**
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
 */const Zh="[DEFAULT]",mw={[Jh]:"fire-core",[j0]:"fire-core-compat",[H0]:"fire-analytics",[$0]:"fire-analytics-compat",[q0]:"fire-app-check",[W0]:"fire-app-check-compat",[K0]:"fire-auth",[G0]:"fire-auth-compat",[Q0]:"fire-rtdb",[X0]:"fire-data-connect",[Y0]:"fire-rtdb-compat",[J0]:"fire-fn",[Z0]:"fire-fn-compat",[ew]:"fire-iid",[tw]:"fire-iid-compat",[nw]:"fire-fcm",[rw]:"fire-fcm-compat",[iw]:"fire-perf",[sw]:"fire-perf-compat",[ow]:"fire-rc",[aw]:"fire-rc-compat",[lw]:"fire-gcs",[uw]:"fire-gcs-compat",[cw]:"fire-fst",[dw]:"fire-fst-compat",[hw]:"fire-vertex","fire-js":"fire-js",[fw]:"fire-js-all"};/**
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
 */const Iu=new Map,gw=new Map,ed=new Map;function xm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function oo(i){const e=i.name;if(ed.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,i);for(const t of Iu.values())xm(t,i);for(const t of gw.values())xm(t,i);return!0}function Td(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Yn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const yw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new Oa("app","Firebase",yw);/**
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
 */class vw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const vo=pw;function fy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zh,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=ay()),!t)throw ai.create("no-options");const u=Iu.get(o);if(u){if(Qi(t,u.options)&&Qi(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new S0(o);for(const y of ed.values())h.addComponent(y);const m=new vw(t,s,h);return Iu.set(o,m),m}function py(i=Zh){const e=Iu.get(i);if(!e&&i===Zh&&ay())return fy();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=mw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}oo(new Xi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const _w="firebase-heartbeat-database",Ew=1,Ca="firebase-heartbeat-store";let jh=null;function my(){return jh||(jh=b0(_w,Ew,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ca)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),jh}async function ww(i){try{const t=(await my()).transaction(Ca),s=await t.objectStore(Ca).get(gy(i));return await t.done,s}catch(e){if(e instanceof kr)Ir.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function Om(i,e){try{const s=(await my()).transaction(Ca,"readwrite");await s.objectStore(Ca).put(e,gy(i)),await s.done}catch(t){if(t instanceof kr)Ir.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function gy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Tw=1024,Iw=30;class Sw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Lm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Iw){const h=Rw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lm(),{heartbeatsToSend:s,unsentEntries:o}=Aw(this._heartbeatsCache.heartbeats),u=Tu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Lm(){return new Date().toISOString().substring(0,10)}function Aw(i,e=Tw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Mm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Mm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d0()?f0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ww(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Om(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Om(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Mm(i){return Tu(JSON.stringify({version:2,heartbeats:i})).length}function Rw(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function kw(i){oo(new Xi("platform-logger",e=>new z0(e),"PRIVATE")),oo(new Xi("heartbeat",e=>new Sw(e),"PRIVATE")),li(Jh,Vm,i),li(Jh,Vm,"esm2017"),li("fire-js","")}kw("");var Pw="firebase",Nw="11.9.1";/**
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
 */li(Pw,Nw,"app");var bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,yy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,V,O){for(var S=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)S[Ke-2]=arguments[Ke];return I.prototype[V].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)k[V]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(V=0;16>V;++V)k[V]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],V=N.g[2];var O=N.g[3],S=I+(O^A&(V^O))+k[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+k[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+k[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+k[3]+3250441966&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(O^A&(V^O))+k[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+k[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+k[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+k[7]+4249261313&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(O^A&(V^O))+k[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+k[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+k[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+k[11]+2304563134&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(O^A&(V^O))+k[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(V^I&(A^V))+k[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(A^O&(I^A))+k[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(I^V&(O^I))+k[15]+1236535329&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(V^O&(A^V))+k[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+k[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+k[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+k[0]+3921069994&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(A^V))+k[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+k[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+k[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+k[4]+3889429448&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(A^V))+k[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+k[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+k[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+k[8]+1163531501&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(A^V))+k[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(I^A))+k[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(O^I))+k[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(V^O))+k[12]+2368359562&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(A^V^O)+k[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+k[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+k[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+k[14]+4259657740&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^O)+k[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+k[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+k[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+k[10]+3200236656&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^O)+k[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+k[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+k[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+k[6]+76029189&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^O)+k[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^V)+k[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^A)+k[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^I)+k[2]+3299628645&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(V^(A|~O))+k[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+k[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+k[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+k[5]+4237533241&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~O))+k[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+k[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+k[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+k[1]+2240044497&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~O))+k[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+k[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+k[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+k[13]+1309151649&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~O))+k[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~V))+k[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~A))+k[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,V=this.h,O=0;O<I;){if(V==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(k[V++]=N.charCodeAt(O++),V==this.blockSize){o(this,k),V=0;break}}else for(;O<I;)if(k[V++]=N[O++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,V=N.length-1;0<=V;V--){var O=N[V]|0;k&&O==I||(A[V]=O,k=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return R;if(0>N)return W(_(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return W(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(I,8)),k=R,V=0;V<N.length;V+=8){var O=Math.min(8,N.length-V),S=parseInt(N.substring(V,V+O),I);8>O?(O=_(Math.pow(I,O)),k=k.j(O).add(_(S))):(k=k.j(A),k=k.add(_(S)))}return k}var R=y(0),D=y(1),j=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-W(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(X(this))return"0";if(J(this))return"-"+W(this).toString(N);for(var I=_(Math.pow(N,6)),A=this,k="";;){var V=Te(A,I).g;A=ve(A,V.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=V,X(A))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function X(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function J(N){return N.h==-1}i.l=function(N){return N=ve(this,N),J(N)?-1:X(N)?0:1};function W(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(D)}i.abs=function(){return J(this)?W(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,V=0;V<=I;V++){var O=k+(this.i(V)&65535)+(N.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);k=S>>>16,O&=65535,S&=65535,A[V]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ve(N,I){return N.add(W(I))}i.j=function(N){if(X(this)||X(N))return R;if(J(this))return J(N)?W(this).j(W(N)):W(W(this).j(N));if(J(N))return W(this.j(W(N)));if(0>this.l(j)&&0>N.l(j))return _(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<N.g.length;V++){var O=this.i(k)>>>16,S=this.i(k)&65535,Ke=N.i(V)>>>16,gt=N.i(V)&65535;A[2*k+2*V]+=S*gt,de(A,2*k+2*V),A[2*k+2*V+1]+=O*gt,de(A,2*k+2*V+1),A[2*k+2*V+1]+=S*Ke,de(A,2*k+2*V+1),A[2*k+2*V+2]+=O*Ke,de(A,2*k+2*V+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function de(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ge(N,I){this.g=N,this.h=I}function Te(N,I){if(X(I))throw Error("division by zero");if(X(N))return new ge(R,R);if(J(N))return I=Te(W(N),I),new ge(W(I.g),W(I.h));if(J(I))return I=Te(N,W(I)),new ge(W(I.g),I.h);if(30<N.g.length){if(J(N)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var A=D,k=I;0>=k.l(N);)A=ze(A),k=ze(k);var V=Ie(A,1),O=Ie(k,1);for(k=Ie(k,2),A=Ie(A,2);!X(k);){var S=O.add(k);0>=S.l(N)&&(V=V.add(A),O=S),k=Ie(k,1),A=Ie(A,1)}return I=ve(N,V.j(I)),new ge(V,I)}for(V=R;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=_(A),S=O.j(I);J(S)||0<S.l(N);)A-=k,O=_(A),S=O.j(I);X(O)&&(O=D),V=V.add(O),N=ve(N,S)}return new ge(V,N)}i.A=function(N){return Te(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function ze(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function Ie(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,V=[],O=0;O<k;O++)V[O]=0<I?N.i(O+A)>>>I|N.i(O+A+1)<<32-I:N.i(O+A);return new h(V,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,yy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,ui=h}).apply(typeof bm<"u"?bm:typeof self<"u"?self:typeof window<"u"?window:{});var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vy,ya,_y,du,td,Ey,wy,Ty;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof iu=="object"&&iu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function R(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function D(l,f,g){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:R,D.apply(null,arguments)}function j(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function X(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var te=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)te[Ue-2]=arguments[Ue];return f.prototype[L].apply(E,te)}}function J(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function W(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let te=0;te<U;te++)l[L+te]=E[te]}else l.push(E)}}class ve{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function de(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var ze=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Ie(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let U=0;U<A.length;U++)g=A[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function V(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ne;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ke{constructor(){this.h=this.g=null}add(f,g){const E=gt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var gt=new ve(()=>new yt,l=>l.reset());class yt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,z=!1,ne=new Ke,ee=()=>{const l=m.Promise.resolve(void 0);Z=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=gt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ce(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ze){e:{try{Te(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:De[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ce.aa.h.call(this)}}X(Ce,ce);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function je(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++be,this.da=this.fa=!1}function vt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,f,g,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var te=Pr(l,f,E,L);return-1<te?(f=l[te],g||(f.fa=!1)):(f=new je(f,this.src,U,!!E,L),f.fa=g,l.push(f)),f};function ss(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(vt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Pr(l,f,g,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return L}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),os={};function Io(l,f,g,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Io(l,f[U],g,E,L);return null}return g=Co(g),l&&l[Me]?l.K(f,g,_(E)?!!E.capture:!1,L):So(l,f,g,!1,E,L)}function So(l,f,g,E,L,U){if(!f)throw Error("Invalid event type");var te=_(L)?!!L.capture:!!L,Ue=ls(l);if(Ue||(l[vi]=Ue=new nr(l)),g=Ue.add(f,g,E,te,U),g.proxy)return g;if(E=ja(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Se||(L=te),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(ir(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ja(){function l(g){return f.call(l.src,l.listener,g)}const f=Ao;return l}function as(l,f,g,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)as(l,f[U],g,E,L);else E=_(E)?!!E.capture:!!E,g=Co(g),l&&l[Me]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=Pr(U,g,E,L),-1<g&&(vt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ls(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,g,E,L)),(g=-1<l?f[l]:null)&&rr(g))}function rr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Me])ss(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(ir(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=ls(f))?(ss(g,l),g.h==0&&(g.src=null,f[vi]=null)):vt(l)}}}function ir(l){return l in os?os[l]:os[l]="on"+l}function Ao(l,f){if(l.da)l=!0;else{f=new Ce(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&rr(l),l=g.call(E,f)}return l}function ls(l){return l=l[vi],l instanceof nr?l:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(l){return typeof l=="function"?l:(l[us]||(l[us]=function(f){return l.handleEvent(f)}),l[us])}function lt(){$.call(this),this.i=new nr(this),this.M=this,this.F=null}X(lt,$),lt.prototype[Me]=!0,lt.prototype.removeEventListener=function(l,f,g,E){as(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var L=f;f=new ce(E,l),k(f,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var te=f.g=g[U];L=sr(te,E,!0,f)&&L}if(te=f.g=l,L=sr(te,E,!0,f)&&L,L=sr(te,E,!1,f)&&L,g)for(U=0;U<g.length;U++)te=f.g=g[U],L=sr(te,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)vt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function sr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var te=f[U];if(te&&!te.da&&te.capture==g){var Ue=te.listener,ct=te.ha||te.src;te.fa&&ss(l.i,te),L=Ue.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ro(l,f,g){if(typeof l=="function")g&&(l=D(l,g));else if(l&&typeof l.handleEvent=="function")l=D(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Nr(l){l.g=Ro(()=>{l.g=null,l.i&&(l.i=!1,Nr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class _i extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Nr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(l){$.call(this),this.h=l,this.g={}}X(Ei,$);var ko=[];function Po(l){Ie(l.g,function(f,g){this.g.hasOwnProperty(g)&&rr(f)},l),l.g={}}Ei.prototype.N=function(){Ei.aa.N.call(this),Po(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=m.JSON.stringify,Do=m.JSON.parse,Vo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function wi(){}wi.prototype.h=null;function cs(l){return l.h||(l.h=l.i())}function hs(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ce.call(this,"d")}X(Un,ce);function ds(){ce.call(this,"c")}X(ds,ce);var zn={},xo=null;function Ti(){return xo=xo||new lt}zn.La="serverreachability";function Oo(l){ce.call(this,zn.La,l)}X(Oo,ce);function or(l){const f=Ti();ut(f,new Oo(f))}zn.STAT_EVENT="statevent";function Lo(l,f){ce.call(this,zn.STAT_EVENT,l),this.stat=f}X(Lo,ce);function tt(l){const f=Ti();ut(f,new Lo(f,l))}zn.Ma="timingevent";function fs(l,f){ce.call(this,zn.Ma,l),this.size=f}X(fs,ce);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function Si(l,f,g,E,L,U){l.info(function(){if(l.g)if(U)for(var te="",Ue=U.split("&"),ct=0;ct<Ue.length;ct++){var Ve=Ue[ct].split("=");if(1<Ve.length){var _t=Ve[0];Ve=Ve[1];var it=_t.split("_");te=2<=it.length&&it[1]=="type"?te+(_t+"="+Ve+"&"):te+(_t+"=redacted&")}}else te=null;else te=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+te})}function ps(l,f,g,E,L,U,te){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+U+" "+te})}function En(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+lc(l,g)+(E?" "+E:"")})}function Mo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function lc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var te=1;te<L.length;te++)L[te]=""}}}}return No(g)}catch{return f}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wn;function Ai(){}X(Ai,wi),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},wn=new Ai;function Tn(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new Ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var bo={},gs={};function ys(l,f,g){l.L=1,l.v=Lr(en(f)),l.m=g,l.P=!0,Fo(l,null)}function Fo(l,f){l.F=Date.now(),$e(l),l.A=en(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),br(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Ha,l.g=ll(l.j,g?f:null,!l.m),0<l.O&&(l.M=new _i(D(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(ko[0]=L.toString()),L=ko);for(var U=0;U<L.length;U++){var te=Io(g,L[U],E||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),or(),Si(l.i,l.u,l.A,l.l,l.R,l.m)}Tn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},Tn.prototype.Y=function(l){try{if(l==this.g)e:{const it=Wt(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Ho(this.g)))){this.J||it!=4||f==7||(f==8||0>=hn?or(3):or(2)),Ci(this);var g=this.g.Z();this.X=g;t:if(Wa(this)){var E=Ho(this.g);l="";var L=E.length,U=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Dr(this);var te="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=g==200,ps(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ct=this.g;if((Ue=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(Ue)){var Ve=Ue;break t}}Ve=null}if(g=Ve)En(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,g);else{this.o=!1,this.s=3,tt(12),un(this),Dr(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<te.length;)if(nn=uc(this,te),nn==gs){it==4&&(this.s=4,tt(14),g=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==bo){this.s=4,tt(15),En(this.i,this.l,te,"[Invalid Chunk]"),g=!1;break}else En(this.i,this.l,nn,null),Uo(this,nn);if(Wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||te.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)En(this.i,this.l,te,"[Invalid Chunked Response]"),un(this),Dr(this);else if(0<te.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),qo(_t),_t.M=!0,tt(11))}}else En(this.i,this.l,te,null),Uo(this,te);it==4&&un(this),this.o&&!this.J&&(it==4?ks(this.j,this):(this.o=!1,$e(this)))}else Is(this.g),g==400&&0<te.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),un(this),Dr(this)}}}catch{}finally{}};function Wa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function uc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?gs:(g=Number(f.substring(g,E)),isNaN(g)?bo:(E+=1,E+g>f.length?gs:(f=f.slice(E,E+g),l.C=E+g,f)))}Tn.prototype.cancel=function(){this.J=!0,un(this)};function $e(l){l.S=Date.now()+l.I,qa(l,l.I)}function qa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(D(l.ba,l),f)}function Ci(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Tn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mo(this.i,this.A),this.L!=2&&(or(),tt(17)),un(this),this.s=2,Dr(this)):qa(this,this.S-l)};function Dr(l){l.j.G==0||l.J||ks(l.j,l)}function un(l){Ci(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Po(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Uo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||zt(g.h,l))){if(!l.K&&zt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Rs(g),Rn(g);else break e;Cs(g),tt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=_n(D(g.Za,g),6e3));if(1>=Ga(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hr(g,11)}else if((l.K||g.g==l)&&Rs(g),!de(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Ve=L[f];if(g.T=Ve[0],Ve=Ve[1],g.G==2)if(Ve[0]=="c"){g.K=Ve[1],g.ia=Ve[2];const _t=Ve[3];_t!=null&&(g.la=_t,g.j.info("VER="+g.la));const it=Ve[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const hn=Ve[5];hn!=null&&typeof hn=="number"&&0<hn&&(E=1.5*hn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const nn=l.g;if(nn){const xi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var U=E.h;U.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(zo(U,U.h),U.h=null))}if(E.D){const Ns=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ns&&(E.ya=Ns,Be(E.I,E.D,Ns))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var te=l;if(E.qa=al(E,E.J?E.ia:null,E.W),te.K){Qa(E.h,te);var Ue=te,ct=E.L;ct&&(Ue.I=ct),Ue.B&&(Ci(Ue),$e(Ue)),E.g=te}else Vi(E);0<g.i.length&&Hn(g)}else Ve[0]!="stop"&&Ve[0]!="close"||hr(g,7);else g.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?hr(g,7):At(g):Ve[0]!="noop"&&g.l&&g.l.ta(Ve),g.v=0)}}or(4)}catch{}}var Ka=class{constructor(l,f){this.g=l,this.map=f}};function Ri(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ga(l){return l.h?1:l.g?l.g.size:0}function zt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function zo(l,f){l.g?l.g.add(f):l.h=f}function Qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ri.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xa(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return J(l.i)}function vs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function _s(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Vr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=_s(l),E=vs(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],g&&g[U],l)}var ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var U=l[g].substring(0,E);L=l[g].substring(E+1)}else U=l[g];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,Pi(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,g=new Bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Or(this,g),this.m=l.m}else l&&(f=String(l).match(ki))?(this.h=!1,Pi(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),xr(this,f[4]),this.l=Ne(f[5]||"",!0),Or(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}ar.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Mr(f,Es,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Mr(f,Es,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Mr(g,g.charAt(0)=="/"?Za:Ja,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Mr(g,Bo)),l.join("")};function en(l){return new ar(l)}function Pi(l,f,g){l.j=g?Ne(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Or(l,f,g){f instanceof Bn?(l.i=f,jn(l.i,l.h)):(g||(f=Mr(f,el)),l.i=new Bn(f,l.h))}function Be(l,f,g){l.i.set(f,g)}function Lr(l){return Be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ne(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Ya),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ya(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Es=/[#\/\?@]/g,Ja=/[#\?:]/g,Za=/[#\?]/g,el=/[#\?@]/g,Bo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function St(l){l.g||(l.g=new Map,l.h=0,l.i&&cc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Bn.prototype,i.add=function(l,f){St(this),this.i=null,l=cn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function In(l,f){St(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Sn(l,f){return St(l),f=cn(l,f),l.g.has(f)}i.forEach=function(l,f){St(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){St(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)g.push(f[E])}return g},i.V=function(l){St(this);let f=[];if(typeof l=="string")Sn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return St(this),this.i=null,l=cn(this,l),Sn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function br(l,f,g){In(l,f),0<g.length&&(l.i=null,l.g.set(cn(l,f),J(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var L=U;te[E]!==""&&(L+="="+encodeURIComponent(String(te[E]))),l.push(L)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jn(l,f){f&&!l.j&&(St(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(In(this,E),br(this,L,g))},l)),l.j=f}function hc(l,f){const g=new Ii;if(m.Image){const E=new Image;E.onload=j(Ht,g,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Ht,g,"TestLoadImage: error",!1,f,E),E.onabort=j(Ht,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Ht,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function tl(l,f){const g=new Ii,E=new AbortController,L=setTimeout(()=>{E.abort(),Ht(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Ht(g,"TestPingServer: ok",!0,f):Ht(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Ht(g,"TestPingServer: error",!1,f)})}function Ht(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function dc(){this.g=new Vo}function nl(l,f,g){const E=g||"";try{Vr(l,function(L,U){let te=L;_(L)&&(te=No(L)),f.push(E+U+"="+encodeURIComponent(te))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}X(lr,wi),lr.prototype.g=function(){return new Ni(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function Ni(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ni,lt),i=Ni.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Cn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?An(this):Cn(this),this.readyState==3&&rl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,An(this))},i.Qa=function(l){this.g&&(this.response=l,An(this))},i.ga=function(){this.g&&An(this)};function An(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Cn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let f="";return Ie(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Fr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ur(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Be(l,f,g))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(Ge,lt);var fc=/^https?$/i,jo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?cs(this.o):cs(wn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Di(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(jo,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,te]of g)this.g.setRequestHeader(U,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Di(this,U)}};function Di(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ws(l),tn(l)}function ws(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},i.bb=function(){$o(this)};function $o(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)Ro(l.Ea,0,l);else if(ut(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=te===0){var L=String(l.D).match(ki)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!fc.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<Wt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ws(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Ts(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function Ts(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Do(f)}};function Ho(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(de(l[E]))continue;var g=V(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[L]||[];f[L]=U,U.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,l),this.cb=$n("retryDelaySeedMs",1e4,l),this.Wa=$n("forwardChannelMaxRetries",2,l),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(l&&l.concurrentRequestLimit),this.Da=new dc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=al(this,null,this.W),Hn(this)};function At(l){if(Ss(l),l.G==3){var f=l.U++,g=en(l.I);if(Be(g,"SID",l.K),Be(g,"RID",f),Be(g,"TYPE","terminate"),cr(l,g),f=new Tn(l,l.j,f),f.L=2,f.v=Lr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=ll(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}ol(l)}function Rn(l){l.g&&(qo(l),l.g.cancel(),l.g=null)}function Ss(l){Rn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Rs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Hn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Z||ee(),z||(Z(),z=!0),ne.add(f,l),l.B=0}}function pc(l,f){return Ga(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(D(l.Ga,l,f),sl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Tn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Ur(this,L,f),g=en(this.I),Be(g,"RID",l),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),cr(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(ur(U)))+"&"+f:this.m&&Fr(g,this.m,U)),zo(this.h,L),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",f),Be(g,"SID","null"),L.T=!0,ys(L,g,null)):ys(L,g,f),this.G=2}}else this.G==3&&(l?As(this,l):this.i.length==0||Zt(this.h)||As(this))};function As(l,f){var g;f?g=f.l:g=l.U++;const E=en(l.I);Be(E,"SID",l.K),Be(E,"RID",g),Be(E,"AID",l.T),cr(l,E),l.m&&l.o&&Fr(E,l.m,l.o),g=new Tn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ur(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zo(l.h,g),ys(g,E,f)}function cr(l,f){l.H&&Ie(l.H,function(g,E){Be(f,E,g)}),l.l&&Vr({},function(g,E){Be(f,E,g)})}function Ur(l,f,g){g=Math.min(l.i.length,g);var E=l.l?D(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const te=["count="+g];U==-1?0<g?(U=L[0].g,te.push("ofs="+U)):U=0:te.push("ofs="+U);let Ue=!0;for(let ct=0;ct<g;ct++){let Ve=L[ct].g;const _t=L[ct].map;if(Ve-=U,0>Ve)U=Math.max(0,L[ct].g-100),Ue=!1;else try{nl(_t,te,"req"+Ve+"_")}catch{E&&E(_t)}}if(Ue){E=te.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Vi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Z||ee(),z||(Z(),z=!0),ne.add(f,l),l.v=0}}function Cs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(D(l.Fa,l),sl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(D(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Rn(this),il(this))};function qo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function il(l){l.g=new Tn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);Be(f,"RID","rpc"),Be(f,"SID",l.K),Be(f,"AID",l.T),Be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Be(f,"TO",l.ja),Be(f,"TYPE","xmlhttp"),cr(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Lr(en(f)),g.m=null,g.P=!0,Fo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Rn(this),Cs(this),tt(19))};function Rs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function ks(l,f){var g=null;if(l.g==f){Rs(l),qo(l),l.g=null;var E=2}else if(zt(l.h,f))g=f.D,Qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ti(),ut(E,new fs(E,g)),Hn(l)}else Vi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&pc(l,f)||E==2&&Cs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function sl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function hr(l,f){if(l.j.info("Error code "+f),f==2){var g=D(l.fb,l),E=l.Xa;const L=!E;E=new ar(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Pi(E,"https"),Lr(E),L?hc(E.toString(),g):tl(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),ol(l),Ss(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ol(l){if(l.G=0,l.ka=[],l.l){const f=Xa(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function al(l,f,g){var E=g instanceof ar?en(g):new ar(g);if(E.g!="")f&&(E.g=f+"."+E.g),xr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new ar(null);E&&Pi(U,E),f&&(U.g=f),L&&xr(U,L),g&&(U.l=g),E=U}return g=l.D,f=l.ya,g&&f&&Be(E,g,f),Be(E,"VER",l.la),cr(l,E),E}function ll(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new lr({eb:g})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}i=Ko.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ps(){}Ps.prototype.g=function(l,f){return new Bt(l,f)};function Bt(l,f){lt.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!de(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!de(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Wn(this)}X(Bt,lt),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){At(this.g)},Bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=No(l),l=g);f.i.push(new Ka(f.Ya++,l)),f.G==3&&Hn(f)},Bt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Bt.aa.N.call(this)};function ul(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}X(ul,Un);function cl(){ds.call(this),this.status=1}X(cl,ds);function Wn(l){this.g=l}X(Wn,Ko),Wn.prototype.ua=function(){ut(this.g,"a")},Wn.prototype.ta=function(l){ut(this.g,new ul(l))},Wn.prototype.sa=function(l){ut(this.g,new cl)},Wn.prototype.ra=function(){ut(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Ty=function(){return new Ps},wy=function(){return Ti()},Ey=zn,td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,du=ms,$a.COMPLETE="complete",_y=$a,hs.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ya=hs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,vy=Ge}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const Fm="@firebase/firestore",Um="4.7.17";/**
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
 */let _o="11.9.0";/**
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
 */const Yi=new Ed("@firebase/firestore");function Ys(){return Yi.logLevel}function ie(i,...e){if(Yi.logLevel<=ke.DEBUG){const t=e.map(Id);Yi.debug(`Firestore (${_o}): ${i}`,...t)}}function Sr(i,...e){if(Yi.logLevel<=ke.ERROR){const t=e.map(Id);Yi.error(`Firestore (${_o}): ${i}`,...t)}}function ao(i,...e){if(Yi.logLevel<=ke.WARN){const t=e.map(Id);Yi.warn(`Firestore (${_o}): ${i}`,...t)}}function Id(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function ye(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Iy(i,s,t)}function Iy(i,e,t){let s=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Sr(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Iy(e,o,s)}function we(i,e){return i}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ci{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Sy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(bt.UNAUTHENTICATED))}shutdown(){}}class Vw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xw{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ci,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ci)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new Sy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class Ow{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Ow(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new zm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new zm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bw(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Ay(){return new TextEncoder}/**
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
 */class Cy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=bw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ae(i,e){return i<e?-1:i>e?1:0}function nd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const u=Ay(),h=Fw(u.encode(Bm(i,t)),u.encode(Bm(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(i.length,e.length)}function Bm(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function Fw(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ae(i[t],e[t]);return Ae(i.length,e.length)}function lo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const jm=-62135596800,$m=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*$m);return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jm)throw new he(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-jm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new pt(0,0))}static max(){return new Ee(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hm="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ae(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):nd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Xe extends Xn{construct(e,t,s){return new Xe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const Uw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Xn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return Uw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hm}static keyField(){return new Pt([Hm])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new he(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Xe.fromString(e))}static fromName(e){return new me(Xe.fromString(e).popFirst(5))}static empty(){return new me(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Xe(e.slice()))}}/**
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
 */const Ra=-1;function zw(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new di(o,me.empty(),e)}function Bw(i){return new di(i.readTime,i.key,Ra)}class di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new di(Ee.min(),me.empty(),Ra)}static max(){return new di(Ee.max(),me.empty(),Ra)}}function jw(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(i.documentKey,e.documentKey),t!==0?t:Ae(i.largestBatchId,e.largestBatchId))}/**
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
 */const $w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Eo(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==$w)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,s)=>{t(e)})}static reject(e){return new H((t,s)=>{s(e)})}static waitFor(e){return new H((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next(o=>o?H.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new H((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new H((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function Ww(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Hu.le=-1;/**
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
 */const Sd=-1;function Wu(i){return i==null}function Su(i){return i===0&&1/i==-1/0}function qw(i){return typeof i=="number"&&Number.isInteger(i)&&!Su(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ry="";function Kw(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Wm(e)),e=Gw(i.get(t),e);return Wm(e)}function Gw(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Ry:t+="";break;default:t+=u}}return t}function Wm(i){return i+Ry+""}/**
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
 */function qm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function es(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function ky(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??kt.RED,this.left=o??kt.EMPTY,this.right=u??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new kt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Km(this.data.getIterator())}getIteratorFrom(e){return new Km(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class Km{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class On{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new On([])}unionWith(e){let t=new mt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Py extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Py("Invalid base64 string: "+u):u}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=Qw.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pi(i){return typeof i=="string"?Nt.fromBase64String(i):Nt.fromUint8Array(i)}/**
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
 */const Ny="server_timestamp",Dy="__type__",Vy="__previous_value__",xy="__local_write_time__";function Ad(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dy])===null||t===void 0?void 0:t.stringValue)===Ny}function qu(i){const e=i.mapValue.fields[Vy];return Ad(e)?qu(e):e}function ka(i){const e=fi(i.mapValue.fields[xy].timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class Xw{constructor(e,t,s,o,u,h,m,y,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=w}}const Au="(default)";class Pa{constructor(e,t){this.projectId=e,this.database=t||Au}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===Au}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Oy="__type__",Yw="__max__",ou={mapValue:{}},Ly="__vector__",Cu="value";function mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ad(i)?4:Zw(i)?9007199254740991:Jw(i)?10:11:ye(28295,{value:i})}function er(i,e){if(i===e)return!0;const t=mi(i);if(t!==mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ka(i).isEqual(ka(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fi(o.timestampValue),m=fi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return pi(o.bytesValue).isEqual(pi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Su(h)===Su(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return lo(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(qm(h)!==qm(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!er(h[y],m[y])))return!1;return!0}(i,e);default:return ye(52216,{left:i})}}function Na(i,e){return(i.values||[]).find(t=>er(t,e))!==void 0}function uo(i,e){if(i===e)return 0;const t=mi(i),s=mi(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return Gm(i.timestampValue,e.timestampValue);case 4:return Gm(ka(i),ka(e));case 5:return nd(i.stringValue,e.stringValue);case 6:return function(u,h){const m=pi(u),y=pi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=Ae(m[_],y[_]);if(w!==0)return w}return Ae(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Ae(rt(u.latitude),rt(h.latitude));return m!==0?m:Ae(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Qm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,_,w;const R=u.fields||{},D=h.fields||{},j=(m=R[Cu])===null||m===void 0?void 0:m.arrayValue,X=(y=D[Cu])===null||y===void 0?void 0:y.arrayValue,J=Ae(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=X==null?void 0:X.values)===null||w===void 0?void 0:w.length)||0);return J!==0?J:Qm(j,X)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===ou.mapValue&&h===ou.mapValue)return 0;if(u===ou.mapValue)return 1;if(h===ou.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let R=0;R<y.length&&R<w.length;++R){const D=nd(y[R],w[R]);if(D!==0)return D;const j=uo(m[y[R]],_[w[R]]);if(j!==0)return j}return Ae(y.length,w.length)}(i.mapValue,e.mapValue);default:throw ye(23264,{Pe:t})}}function Gm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ae(i,e);const t=fi(i),s=fi(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Qm(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=uo(t[o],s[o]);if(u)return u}return Ae(t.length,s.length)}function co(i){return rd(i)}function rd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=fi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return pi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return me.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=rd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${rd(t.fields[h])}`;return o+"}"}(i.mapValue):ye(61005,{value:i})}function fu(i){switch(mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qu(i);return e?16+fu(e):16;case 5:return 2*i.stringValue.length;case 6:return pi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+fu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return es(s.fields,(u,h)=>{o+=u.length+fu(h)}),o}(i.mapValue);default:throw ye(13486,{value:i})}}function id(i){return!!i&&"integerValue"in i}function Cd(i){return!!i&&"arrayValue"in i}function Xm(i){return!!i&&"nullValue"in i}function Ym(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function pu(i){return!!i&&"mapValue"in i}function Jw(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Oy])===null||t===void 0?void 0:t.stringValue)===Ly}function wa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return es(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=wa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Zw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Yw}/**
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
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wa(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=wa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){es(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new vn(wa(this.value))}}function My(i){const e=[];return es(i.fields,(t,s)=>{const o=new Pt([t]);if(pu(s)){const u=My(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new On(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,Ee.min(),Ee.min(),Ee.min(),vn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ee.min(),Ee.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ee.min(),Ee.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ru{constructor(e,t){this.position=e,this.inclusive=t}}function Jm(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=uo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Zm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class ku{constructor(e,t="asc"){this.field=e,this.dir=t}}function eT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class by{}class ft extends by{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new nT(e,t,s):t==="array-contains"?new sT(e,s):t==="in"?new oT(e,s):t==="not-in"?new aT(e,s):t==="array-contains-any"?new lT(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new rT(e,s):new iT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(uo(t,this.value)):t!==null&&mi(this.value)===mi(t)&&this.matchesComparison(uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends by{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tr(e,t)}matches(e){return Fy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Fy(i){return i.op==="and"}function Uy(i){return tT(i)&&Fy(i)}function tT(i){for(const e of i.filters)if(e instanceof tr)return!1;return!0}function sd(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+co(i.value);if(Uy(i))return i.filters.map(e=>sd(e)).join(",");{const e=i.filters.map(t=>sd(t)).join(",");return`${i.op}(${e})`}}function zy(i,e){return i instanceof ft?function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(i,e):i instanceof tr?function(s,o){return o instanceof tr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&zy(h,o.filters[m]),!0):!1}(i,e):void ye(19439)}function By(i){return i instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`}(i):i instanceof tr?function(t){return t.op.toString()+" {"+t.getFilters().map(By).join(" ,")+"}"}(i):"Filter"}class nT extends ft{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class rT extends ft{constructor(e,t){super(e,"in",t),this.keys=jy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class iT extends ft{constructor(e,t){super(e,"not-in",t),this.keys=jy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>me.fromName(s.referenceValue))}class sT extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cd(t)&&Na(t.arrayValue,this.value)}}class oT extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Na(this.value.arrayValue,t)}}class aT extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Na(this.value.arrayValue,t)}}class lT extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Na(this.value.arrayValue,s))}}/**
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
 */class uT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function eg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new uT(i,e,t,s,o,u,h)}function Rd(i){const e=we(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>sd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Wu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>co(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>co(s)).join(",")),e.Ie=t}return e.Ie}function kd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!eT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!zy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Zm(i.startAt,e.startAt)&&Zm(i.endAt,e.endAt)}function od(i){return me.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ku{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function cT(i,e,t,s,o,u,h,m){return new Ku(i,e,t,s,o,u,h,m)}function $y(i){return new Ku(i)}function tg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function hT(i){return i.collectionGroup!==null}function Ta(i){const e=we(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Pt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new ku(u,s))}),t.has(Pt.keyField().canonicalString())||e.Ee.push(new ku(Pt.keyField(),s))}return e.Ee}function Jn(i){const e=we(i);return e.de||(e.de=dT(e,Ta(i))),e.de}function dT(i,e){if(i.limitType==="F")return eg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new ku(o.field,u)});const t=i.endAt?new Ru(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ru(i.startAt.position,i.startAt.inclusive):null;return eg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ad(i,e,t){return new Ku(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Gu(i,e){return kd(Jn(i),Jn(e))&&i.limitType===e.limitType}function Hy(i){return`${Rd(Jn(i))}|lt:${i.limitType}`}function Js(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>By(o)).join(", ")}]`),Wu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>co(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>co(o)).join(",")),`Target(${s})`}(Jn(i))}; limitType=${i.limitType})`}function Qu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ta(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const _=Jm(h,m,y);return h.inclusive?_<=0:_<0}(s.startAt,Ta(s),o)||s.endAt&&!function(h,m,y){const _=Jm(h,m,y);return h.inclusive?_>=0:_>0}(s.endAt,Ta(s),o))}(i,e)}function fT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Wy(i){return(e,t)=>{let s=!1;for(const o of Ta(i)){const u=pT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function pT(i,e,t){const s=i.field.isKeyField()?me.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?uo(y,_):ye(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:i.dir})}}/**
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
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return ky(this.inner)}size(){return this.innerSize}}/**
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
 */const mT=new Ze(me.comparator);function Ar(){return mT}const qy=new Ze(me.comparator);function va(...i){let e=qy;for(const t of i)e=e.insert(t.key,t);return e}function Ky(i){let e=qy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ki(){return Ia()}function Gy(){return Ia()}function Ia(){return new ts(i=>i.toString(),(i,e)=>i.isEqual(e))}const gT=new Ze(me.comparator),yT=new mt(me.comparator);function Pe(...i){let e=yT;for(const t of i)e=e.add(t);return e}const vT=new mt(Ae);function _T(){return vT}/**
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
 */function Pd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function Qy(i){return{integerValue:""+i}}function ET(i,e){return qw(e)?Qy(e):Pd(i,e)}/**
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
 */class Xu{constructor(){this._=void 0}}function wT(i,e,t){return i instanceof Pu?function(o,u){const h={fields:{[Dy]:{stringValue:Ny},[xy]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ad(u)&&(u=qu(u)),u&&(h.fields[Vy]=u),{mapValue:h}}(t,e):i instanceof Da?Yy(i,e):i instanceof Va?Jy(i,e):function(o,u){const h=Xy(o,u),m=ng(h)+ng(o.Re);return id(h)&&id(o.Re)?Qy(m):Pd(o.serializer,m)}(i,e)}function TT(i,e,t){return i instanceof Da?Yy(i,e):i instanceof Va?Jy(i,e):t}function Xy(i,e){return i instanceof Nu?function(s){return id(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Pu extends Xu{}class Da extends Xu{constructor(e){super(),this.elements=e}}function Yy(i,e){const t=Zy(e);for(const s of i.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Va extends Xu{constructor(e){super(),this.elements=e}}function Jy(i,e){let t=Zy(e);for(const s of i.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class Nu extends Xu{constructor(e,t){super(),this.serializer=e,this.Re=t}}function ng(i){return rt(i.integerValue||i.doubleValue)}function Zy(i){return Cd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function IT(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Da&&o instanceof Da||s instanceof Va&&o instanceof Va?lo(s.elements,o.elements,er):s instanceof Nu&&o instanceof Nu?er(s.Re,o.Re):s instanceof Pu&&o instanceof Pu}(i.transform,e.transform)}class ST{constructor(e,t){this.version=e,this.transformResults=t}}class Tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Yu{}function ev(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new nv(i.key,Tr.none()):new La(i.key,i.data,Tr.none());{const t=i.data,s=vn.empty();let o=new mt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ns(i.key,s,new On(o.toArray()),Tr.none())}}function AT(i,e,t){i instanceof La?function(o,u,h){const m=o.value.clone(),y=ig(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof ns?function(o,u,h){if(!mu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ig(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(tv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Sa(i,e,t,s){return i instanceof La?function(u,h,m,y){if(!mu(u.precondition,h))return m;const _=u.value.clone(),w=sg(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof ns?function(u,h,m,y){if(!mu(u.precondition,h))return m;const _=sg(u.fieldTransforms,y,h),w=h.data;return w.setAll(tv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(i,e,t,s):function(u,h,m){return mu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function CT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Xy(s.transform,o||null);u!=null&&(t===null&&(t=vn.empty()),t.set(s.field,u))}return t||null}function rg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&lo(s,o,(u,h)=>IT(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class La extends Yu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ns extends Yu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function tv(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function ig(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,TT(h,m,t[o]))}return s}function sg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,wT(u,h,e))}return s}class nv extends Yu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RT extends Yu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&AT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Sa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Sa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Gy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=ev(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(t,s)=>rg(t,s))&&lo(this.baseMutations,e.baseMutations,(t,s)=>rg(t,s))}}class Nd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=function(){return gT}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Nd(e,t,s,o)}}/**
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
 */class PT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class NT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,xe;function DT(i){switch(i){case G.OK:return ye(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ye(15467,{code:i})}}function rv(i){if(i===void 0)return Sr("GRPC error has no .code"),G.UNKNOWN;switch(i){case ot.OK:return G.OK;case ot.CANCELLED:return G.CANCELLED;case ot.UNKNOWN:return G.UNKNOWN;case ot.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ot.INTERNAL:return G.INTERNAL;case ot.UNAVAILABLE:return G.UNAVAILABLE;case ot.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ot.NOT_FOUND:return G.NOT_FOUND;case ot.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ot.ABORTED:return G.ABORTED;case ot.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ot.DATA_LOSS:return G.DATA_LOSS;default:return ye(39323,{code:i})}}(xe=ot||(ot={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const VT=new ui([4294967295,4294967295],0);function og(i){const e=Ay().encode(i),t=new yy;return t.update(e),new Uint8Array(t.digest())}function ag(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class Dd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new _a(`Invalid padding: ${t}`);if(s<0)throw new _a(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new _a(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ui.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(VT)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=og(e),[s,o]=ag(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Dd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=og(e),[s,o]=ag(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ju{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ju(Ee.min(),o,new Ze(Ae),Ar(),Pe())}}class Ma{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ma(s,t,Pe(),Pe(),Pe())}}/**
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
 */class gu{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class iv{constructor(e,t){this.targetId=e,this.Ce=t}}class sv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class lg{constructor(){this.Fe=0,this.Me=ug(),this.xe=Nt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),s=Pe();return this.Me.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}}),new Ma(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=ug()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Fe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class xT{constructor(e){this.ze=e,this.je=new Map,this.He=Ar(),this.Je=au(),this.Ye=au(),this.Ze=new Ze(Ae)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:ye(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(od(u))if(s===0){const h=new me(u.path);this.tt(t,h,Ft.newNoDocument(h,Ee.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),y=m?this.lt(m,e,h):1;if(y!==0){this.st(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=pi(s).toUint8Array()}catch(y){if(y instanceof Py)return ao("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Dd(h,o,u)}catch(y){return ao(y instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)}),o}It(e){const t=new Map;this.je.forEach((u,h)=>{const m=this._t(h);if(m){if(u.current&&od(m.target)){const y=new me(m.target.path);this.Et(y).has(h)||this.dt(h,y)||this.tt(h,y,Ft.newNoDocument(y,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}});let s=Pe();this.Ye.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const _=this._t(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(e));const o=new Ju(e,t,this.Ze,this.He,s);return this.He=Ar(),this.Je=au(),this.Ye=au(),this.Ze=new Ze(Ae),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new lg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new mt(Ae),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new mt(Ae),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new lg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function au(){return new Ze(me.comparator)}function ug(){return new Ze(me.comparator)}const OT={asc:"ASCENDING",desc:"DESCENDING"},LT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MT={and:"AND",or:"OR"};class bT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ld(i,e){return i.useProto3Json||Wu(e)?e:{value:e}}function Du(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ov(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function FT(i,e){return Du(i,e.toTimestamp())}function Zn(i){return Fe(!!i,49232),Ee.fromTimestamp(function(t){const s=fi(t);return new pt(s.seconds,s.nanos)}(i))}function Vd(i,e){return ud(i,e).canonicalString()}function ud(i,e){const t=function(o){return new Xe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function av(i){const e=Xe.fromString(i);return Fe(dv(e),10190,{key:e.toString()}),e}function cd(i,e){return Vd(i.databaseId,e.path)}function $h(i,e){const t=av(e);if(t.get(1)!==i.databaseId.projectId)throw new he(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new he(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new me(uv(t))}function lv(i,e){return Vd(i.databaseId,e)}function UT(i){const e=av(i);return e.length===4?Xe.emptyPath():uv(e)}function hd(i){return new Xe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function uv(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function cg(i,e,t){return{name:cd(i,e),fields:t.value.mapValue.fields}}function zT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?G.UNKNOWN:rv(_.code);return new he(w,_.message||"")}(h);t=new sv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=$h(i,s.document.name),u=Zn(s.document.updateTime),h=s.document.createTime?Zn(s.document.createTime):Ee.min(),m=new vn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new gu(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=$h(i,s.document),u=s.readTime?Zn(s.readTime):Ee.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new gu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=$h(i,s.document),u=s.removedTargetIds||[];t=new gu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new NT(o,u),m=s.targetId;t=new iv(m,h)}}return t}function BT(i,e){let t;if(e instanceof La)t={update:cg(i,e.key,e.value)};else if(e instanceof nv)t={delete:cd(i,e.key)};else if(e instanceof ns)t={update:cg(i,e.key,e.data),updateMask:XT(e.fieldMask)};else{if(!(e instanceof RT))return ye(16599,{ft:e.type});t={verify:cd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Pu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Da)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Nu)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw ye(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:FT(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)}(i,e.precondition)),t}function jT(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?Zn(o.updateTime):Zn(u);return h.isEqual(Ee.min())&&(h=Zn(u)),new ST(h,o.transformResults||[])}(t,e))):[]}function $T(i,e){return{documents:[lv(i,e.path)]}}function HT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=lv(i,o);const u=function(_){if(_.length!==0)return hv(tr.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(D){return{field:Zs(D.field),direction:KT(D.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=ld(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{gt:t,parent:o}}function WT(i){let e=UT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(R){const D=cv(R);return D instanceof tr&&Uy(D)?D.getFilters():[D]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(D=>function(X){return new ku(eo(X.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(D))}(t.orderBy));let m=null;t.limit&&(m=function(R){let D;return D=typeof R=="object"?R.value:R,Wu(D)?null:D}(t.limit));let y=null;t.startAt&&(y=function(R){const D=!!R.before,j=R.values||[];return new Ru(j,D)}(t.startAt));let _=null;return t.endAt&&(_=function(R){const D=!R.before,j=R.values||[];return new Ru(j,D)}(t.endAt)),cT(e,o,h,u,m,"F",y,_)}function qT(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cv(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=eo(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=eo(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}}(i):i.fieldFilter!==void 0?function(t){return ft.create(eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return tr.create(t.compositeFilter.filters.map(s=>cv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}}(t.compositeFilter.op))}(i):ye(30097,{filter:i})}function KT(i){return OT[i]}function GT(i){return LT[i]}function QT(i){return MT[i]}function Zs(i){return{fieldPath:i.canonicalString()}}function eo(i){return Pt.fromServerFormat(i.fieldPath)}function hv(i){return i instanceof ft?function(t){if(t.op==="=="){if(Ym(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(Xm(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ym(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(Xm(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:GT(t.op),value:t.value}}}(i):i instanceof tr?function(t){const s=t.getFilters().map(o=>hv(o));return s.length===1?s[0]:{compositeFilter:{op:QT(t.op),filters:s}}}(i):ye(54877,{filter:i})}function XT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function dv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class si{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Nt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YT{constructor(e){this.wt=e}}function JT(i){const e=WT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ad(e,e.limit,"L"):e}/**
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
 */class ZT{constructor(){this.Cn=new eI}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(di.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(di.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class eI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(Xe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(Xe.comparator)).toArray()}}/**
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
 */const hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fv=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(fv,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class ho{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ho(0)}static lr(){return new ho(-1)}}/**
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
 */const dg="LruGarbageCollector",tI=1048576;function fg([i,e],[t,s]){const o=Ae(i,t);return o===0?Ae(e,s):o}class nI{constructor(e){this.Er=e,this.buffer=new mt(fg),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();fg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ie(dg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?ie(dg,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.mr(3e5)})}}class iI{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Hu.le);const s=new nI(t);return this.gr.forEachTarget(e,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(hg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hg):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(_=Date.now(),Ys()<=ke.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function sI(i,e){return new iI(i,e)}/**
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
 */class oI{constructor(){this.changes=new ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Sa(s.mutation,o,On.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Ki();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=va();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Ki();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Ar();const h=Ia(),m=function(){return Ia()}();return t.forEach((y,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ns)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Sa(w.mutation,_,w.mutation.getFieldMask(),pt.now())):h.set(_.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var R;return m.set(_,new aI(w,(R=h.get(_))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ia();let o=new Ze((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||On.empty();w=m.applyToLocalView(_,w),s.set(y,w);const R=(o.get(m.batchId)||Pe()).add(y);o=o.insert(m.batchId,R)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,R=Gy();w.forEach(D=>{if(!u.has(D)){const j=ev(t.get(D),s.get(D));j!==null&&R.set(D,j),u=u.add(D)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return H.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(Ki());let m=Ra,y=u;return h.next(_=>H.forEach(_,(w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(D=>{y=y.insert(w,D)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,y,_,Pe())).next(w=>({batchId:m,changes:Ky(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(s=>{let o=va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=va();return this.indexManager.getCollectionParents(e,u).next(m=>H.forEach(m,y=>{const _=function(R,D){return new Ku(D,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((R,D)=>{h=h.insert(R,D)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))});let m=va();return h.forEach((y,_)=>{const w=u.get(y);w!==void 0&&Sa(w.mutation,_,On.empty(),pt.now()),Qu(t,_)&&(m=m.insert(y,_))}),m})}}/**
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
 */class uI{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return H.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Zn(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:JT(o.bundledQuery),readTime:Zn(o.readTime)}}(t)),H.resolve()}}/**
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
 */class cI{constructor(){this.overlays=new Ze(me.comparator),this.Qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ki();return H.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=Ki(),u=t.length+1,h=new me(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=Ki(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=Ki(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return H.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new PT(t,s));let u=this.Qr.get(t);u===void 0&&(u=Pe(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
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
 */class hI{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class xd{constructor(){this.$r=new mt(It.Ur),this.Kr=new mt(It.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new It(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new It(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new me(new Xe([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new me(new Xe([])),s=new It(t,e),o=new It(t,e+1);let u=Pe();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new It(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return me.comparator(e.key,t.key)||Ae(e.Zr,t.Zr)}static Wr(e,t){return Ae(e.Zr,t.Zr)||me.comparator(e.key,t.key)}}/**
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
 */class dI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new mt(It.Ur)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new kT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Sd:this.nr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const m=this.ei(h.Zr);u.push(m)}),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Ae);return t.forEach(o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],m=>{s=s.add(m.Zr)})}),H.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const h=new It(new me(u),0);let m=new mt(Ae);return this.Xr.forEachWhile(y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Zr)),!0)},h),H.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(s=>{const o=this.ei(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return H.forEach(t.mutations,o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new It(t,0),o=this.Xr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fI{constructor(e){this.ii=e,this.docs=function(){return new Ze(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))}),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,m=new me(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||jw(Bw(w),s)<=0||(o.has(w.key)||Qu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}si(e,t){return H.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new pI(this)}getSize(e){return H.resolve(this.size)}}class pI extends oI{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)}),H.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class mI{constructor(e){this.persistence=e,this.oi=new ts(t=>Rd(t),kd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this._i=0,this.ai=new xd,this.targetCount=0,this.ui=ho.cr()}forEachTarget(e,t){return this.oi.forEach((s,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),H.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ho(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Tr(t),H.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),H.waitFor(u).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.ai.containsKey(t))}}/**
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
 */class pv{constructor(e,t){this.ci={},this.overlays={},this.li=new Hu(0),this.hi=!1,this.hi=!0,this.Pi=new hI,this.referenceDelegate=e(this),this.Ti=new mI(this),this.indexManager=new ZT,this.remoteDocumentCache=function(o){return new fI(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new YT(t),this.Ei=new uI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new dI(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new gI(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(e,t){return H.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class gI extends Hw{constructor(e){super(),this.currentSequenceNumber=e}}class Od{constructor(e){this.persistence=e,this.Vi=new xd,this.mi=null}static fi(e){return new Od(e)}get gi(){if(this.mi)return this.mi;throw ye(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.gi,s=>{const o=me.fromPath(s);return this.pi(e,o).next(u=>{u||t.removeEntry(o,Ee.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return H.or([()=>H.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Vu{constructor(e,t){this.persistence=e,this.yi=new ts(s=>Kw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=sI(this,t)}static fi(e,t){return new Vu(e,t)}di(){}Ai(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return H.forEach(this.yi,(s,o)=>this.Dr(e,s,o).next(u=>u?H.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,h=>this.Dr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),H.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fu(e.data.value)),t}Dr(e,t,s){return H.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ld{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ld(e,t.fromCache,s,o)}}/**
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
 */class yI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vI{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return h0()?8:Ww(Ut())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.bs(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new yI;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>u.result)}Ds(e,t,s,o){return s.documentReadCount<this.gs?(Ys()<=ke.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),H.resolve()):(Ys()<=ke.DEBUG&&ie("QueryEngine","Query:",Js(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Ys()<=ke.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(t))):H.resolve())}ws(e,t){if(tg(t))return H.resolve(null);let s=Jn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ad(t,null,"F"),s=Jn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const _=this.vs(t,m);return this.Cs(t,_,h,y.readTime)?this.ws(e,ad(t,null,"F")):this.Fs(e,_,t,y)}))})))}bs(e,t,s,o){return tg(t)||o.isEqual(Ee.min())?H.resolve(null):this.ys.getDocuments(e,s).next(u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?H.resolve(null):(Ys()<=ke.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Js(t)),this.Fs(e,h,t,zw(o,Ra)).next(m=>m))})}vs(e,t){let s=new mt(Wy(e));return t.forEach((o,u)=>{Qu(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Ys()<=ke.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Js(t)),this.ys.getDocumentsMatchingQuery(e,t,di.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Md="LocalStore",_I=3e8;class EI{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new Ze(Ae),this.Os=new ts(u=>Rd(u),kd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lI(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function wI(i,e,t,s){return new EI(i,e,t,s)}async function mv(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(_=>({ks:_,removedBatchIds:h,addedBatchIds:m}))})})}function TI(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,y,_,w){const R=_.batch,D=R.keys();let j=H.resolve();return D.forEach(X=>{j=j.next(()=>w.getEntry(y,X)).next(J=>{const W=_.docVersions.get(X);Fe(W!==null,48541),J.version.compareTo(W)<0&&(R.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),w.addEntry(J)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(y,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function gv(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function II(i,e){const t=we(i),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach((w,R)=>{const D=o.get(R);if(!D)return;m.push(t.Ti.removeMatchingKeys(u,w.removedDocuments,R).next(()=>t.Ti.addMatchingKeys(u,w.addedDocuments,R)));let j=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?j=j.withResumeToken(Nt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(R,j),function(J,W,ve){return J.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=_I?!0:ve.addedDocuments.size+ve.modifiedDocuments.size+ve.removedDocuments.size>0}(D,j,w)&&m.push(t.Ti.updateTargetData(u,j))});let y=Ar(),_=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(SI(u,h,e.documentUpdates).next(w=>{y=w.qs,_=w.Qs})),!s.isEqual(Ee.min())){const w=t.Ti.getLastRemoteSnapshotVersion(u).next(R=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return H.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,_)).next(()=>y)}).then(u=>(t.xs=o,u))}function SI(i,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Ar();return t.forEach((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ee.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie(Md,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)}),{qs:h,Qs:o}})}function AI(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Sd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CI(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ti.getTargetData(s,e).next(u=>u?(o=u,H.resolve(o)):t.Ti.allocateTargetId(s).next(h=>(o=new si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function dd(i,e,t){const s=we(i),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!wo(h))throw h;ie(Md,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function pg(i,e,t){const s=we(i);let o=Ee.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,_,w){const R=we(y),D=R.Os.get(w);return D!==void 0?H.resolve(R.xs.get(D)):R.Ti.getTargetData(_,w)}(s,h,Jn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Pe())).next(m=>(RI(s,fT(e),m),{documents:m,$s:u})))}function RI(i,e,t){let s=i.Ns.get(e)||Ee.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Ns.set(e,s)}class mg{constructor(){this.activeTargetIds=_T()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kI{constructor(){this.xo=new mg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new mg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PI{No(e){}shutdown(){}}/**
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
 */const gg="ConnectivityMonitor";class yg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ie(gg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ie(gg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lu=null;function fd(){return lu===null?lu=function(){return 268435456+Math.round(2147483648*Math.random())}():lu++,"0x"+lu.toString(16)}/**
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
 */const Hh="RestConnection",NI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DI{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Au?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=fd(),m=this.jo(e,t.toUriEncodedString());ie(Hh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(y,o,u);const{host:_}=new URL(m),w=go(_);return this.Jo(e,m,y,s,w).then(R=>(ie(Hh,`Received RPC '${e}' ${h}: `,R),R),R=>{throw ao(Hh,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R})}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}jo(e,t){const s=NI[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class VI{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Lt="WebChannelConnection";class xI extends DI{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=fd();return new Promise((m,y)=>{const _=new vy;_.setWithCredentials(!0),_.listenOnce(_y.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case du.NO_ERROR:const R=_.getResponseJson();ie(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case du.TIMEOUT:ie(Lt,`RPC '${e}' ${h} timed out`),y(new he(G.DEADLINE_EXCEEDED,"Request time out"));break;case du.HTTP_ERROR:const D=_.getStatus();if(ie(Lt,`RPC '${e}' ${h} failed with status:`,D,"response text:",_.getResponseText()),D>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const X=j==null?void 0:j.error;if(X&&X.status&&X.message){const J=function(ve){const de=ve.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(de)>=0?de:G.UNKNOWN}(X.status);y(new he(J,X.message))}else y(new he(G.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new he(G.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{h_:e,streamId:h,P_:_.getLastErrorCode(),T_:_.getLastError()})}}finally{ie(Lt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ie(Lt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}I_(e,t,s){const o=fd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ty(),m=wy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Ho(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ie(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const R=h.createWebChannel(w,y);this.E_(R);let D=!1,j=!1;const X=new VI({Zo:W=>{j?ie(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(D||(ie(Lt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),D=!0),ie(Lt,`RPC '${e}' stream ${o} sending:`,W),R.send(W))},Xo:()=>R.close()}),J=(W,ve,de)=>{W.listen(ve,ge=>{try{de(ge)}catch(Te){setTimeout(()=>{throw Te},0)}})};return J(R,ya.EventType.OPEN,()=>{j||(ie(Lt,`RPC '${e}' stream ${o} transport opened.`),X.__())}),J(R,ya.EventType.CLOSE,()=>{j||(j=!0,ie(Lt,`RPC '${e}' stream ${o} transport closed`),X.u_(),this.d_(R))}),J(R,ya.EventType.ERROR,W=>{j||(j=!0,ao(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),X.u_(new he(G.UNAVAILABLE,"The operation could not be completed")))}),J(R,ya.EventType.MESSAGE,W=>{var ve;if(!j){const de=W.data[0];Fe(!!de,16349);const ge=de,Te=(ge==null?void 0:ge.error)||((ve=ge[0])===null||ve===void 0?void 0:ve.error);if(Te){ie(Lt,`RPC '${e}' stream ${o} received error:`,Te);const ze=Te.status;let Ie=function(A){const k=ot[A];if(k!==void 0)return rv(k)}(ze),N=Te.message;Ie===void 0&&(Ie=G.INTERNAL,N="Unknown error status: "+ze+" with message "+Te.message),j=!0,X.u_(new he(Ie,N)),R.close()}else ie(Lt,`RPC '${e}' stream ${o} received:`,de),X.c_(de)}}),J(m,Ey.STAT_EVENT,W=>{W.stat===td.PROXY?ie(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===td.NOPROXY&&ie(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{X.a_()},0),X}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Wh(){return typeof document<"u"?document:null}/**
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
 */function Zu(i){return new bT(i,!0)}/**
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
 */class yv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const vg="PersistentStream";class vv{constructor(e,t,s,o,u,h,m,y){this.xi=e,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new yv(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===t&&this.z_(s,o)},s=>{e(()=>{const o=new he(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return ie(vg,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(ie(vg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OI extends vv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=zT(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?Zn(h.readTime):Ee.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=hd(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=od(y)?{documents:$T(u,y)}:{query:HT(u,y).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=ov(u,h.resumeToken);const _=ld(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Du(u,h.snapshotVersion.toTimestamp());const _=ld(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=qT(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=hd(this.serializer),t.removeTarget=e,this.Q_(t)}}class LI extends vv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=jT(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=hd(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>BT(this.serializer,s))};this.Q_(t)}}/**
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
 */class MI{}class bI extends MI{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new he(G.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(e,ud(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(G.UNKNOWN,u.toString())})}Yo(e,t,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,ud(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(G.UNKNOWN,h.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class FI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Sr(t),this.ua=!1):ie("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Ji="RemoteStore";class UI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(h=>{s.enqueueAndForget(async()=>{rs(this)&&(ie(Ji,"Restarting streams for network reachability change."),await async function(y){const _=we(y);_.da.add(4),await ba(_),_.Va.set("Unknown"),_.da.delete(4),await ec(_)}(this))})}),this.Va=new FI(s,o)}}async function ec(i){if(rs(i))for(const e of i.Aa)await e(!0)}async function ba(i){for(const e of i.Aa)await e(!1)}function _v(i,e){const t=we(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),zd(t)?Ud(t):To(t).N_()&&Fd(t,e))}function bd(i,e){const t=we(i),s=To(t);t.Ea.delete(e),s.N_()&&Ev(t,e),t.Ea.size===0&&(s.N_()?s.k_():rs(t)&&t.Va.set("Unknown"))}function Fd(i,e){if(i.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}To(i).Z_(e)}function Ev(i,e){i.ma.Ke(e),To(i).X_(e)}function Ud(i){i.ma=new xT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Ea.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),To(i).start(),i.Va.ca()}function zd(i){return rs(i)&&!To(i).O_()&&i.Ea.size>0}function rs(i){return we(i).da.size===0}function wv(i){i.ma=void 0}async function zI(i){i.Va.set("Online")}async function BI(i){i.Ea.forEach((e,t)=>{Fd(i,e)})}async function jI(i,e){wv(i),zd(i)?(i.Va.Pa(e),Ud(i)):i.Va.set("Unknown")}async function $I(i,e,t){if(i.Va.set("Online"),e instanceof sv&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.ma.removeTarget(m))}(i,e)}catch(s){ie(Ji,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xu(i,s)}else if(e instanceof gu?i.ma.Xe(e):e instanceof iv?i.ma.ot(e):i.ma.nt(e),!t.isEqual(Ee.min()))try{const s=await gv(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.ma.It(h);return m.targetChanges.forEach((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ea.get(_);w&&u.Ea.set(_,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,_)=>{const w=u.Ea.get(y);if(!w)return;u.Ea.set(y,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),Ev(u,y);const R=new si(w.target,y,_,w.sequenceNumber);Fd(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ie(Ji,"Failed to raise snapshot:",s),await xu(i,s)}}async function xu(i,e,t){if(!wo(e))throw e;i.da.add(1),await ba(i),i.Va.set("Offline"),t||(t=()=>gv(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ie(Ji,"Retrying IndexedDB access"),await t(),i.da.delete(1),await ec(i)})}function Tv(i,e){return e().catch(t=>xu(i,t,e))}async function tc(i){const e=we(i),t=gi(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Sd;for(;HI(e);)try{const o=await AI(e.localStore,s);if(o===null){e.Ia.length===0&&t.k_();break}s=o.batchId,WI(e,o)}catch(o){await xu(e,o)}Iv(e)&&Sv(e)}function HI(i){return rs(i)&&i.Ia.length<10}function WI(i,e){i.Ia.push(e);const t=gi(i);t.N_()&&t.ea&&t.ta(e.mutations)}function Iv(i){return rs(i)&&!gi(i).O_()&&i.Ia.length>0}function Sv(i){gi(i).start()}async function qI(i){gi(i).ia()}async function KI(i){const e=gi(i);for(const t of i.Ia)e.ta(t.mutations)}async function GI(i,e,t){const s=i.Ia.shift(),o=Nd.from(s,e,t);await Tv(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await tc(i)}async function QI(i,e){e&&gi(i).ea&&await async function(s,o){if(function(h){return DT(h)&&h!==G.ABORTED}(o.code)){const u=s.Ia.shift();gi(s).L_(),await Tv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await tc(s)}}(i,e),Iv(i)&&Sv(i)}async function _g(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),ie(Ji,"RemoteStore received new credentials");const s=rs(t);t.da.add(3),await ba(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await ec(t)}async function XI(i,e){const t=we(i);e?(t.da.delete(2),await ec(t)):e||(t.da.add(2),await ba(t),t.Va.set("Unknown"))}function To(i){return i.fa||(i.fa=function(t,s,o){const u=we(t);return u.oa(),new OI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:zI.bind(null,i),n_:BI.bind(null,i),i_:jI.bind(null,i),Y_:$I.bind(null,i)}),i.Aa.push(async e=>{e?(i.fa.L_(),zd(i)?Ud(i):i.Va.set("Unknown")):(await i.fa.stop(),wv(i))})),i.fa}function gi(i){return i.ga||(i.ga=function(t,s,o){const u=we(t);return u.oa(),new LI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:qI.bind(null,i),i_:QI.bind(null,i),na:KI.bind(null,i),ra:GI.bind(null,i)}),i.Aa.push(async e=>{e?(i.ga.L_(),await tc(i)):(await i.ga.stop(),i.Ia.length>0&&(ie(Ji,`Stopping write stream with ${i.Ia.length} pending writes`),i.Ia=[]))})),i.ga}/**
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
 */class Bd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Bd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jd(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),wo(i))return new he(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=va(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new no;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Eg{constructor(){this.pa=new Ze(me.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):ye(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class fo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new fo(e,t,no.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class YI{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class JI{constructor(){this.queries=wg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=wg(),u.forEach((h,m)=>{for(const y of m.Sa)y.onError(s)})})(this,new he(G.ABORTED,"Firestore shutting down"))}}function wg(){return new ts(i=>Hy(i),Gu)}async function ZI(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Da()&&e.va()&&(s=2):(u=new YI,s=e.va()?0:1);try{switch(s){case 0:u.ba=await t.onListen(o,!0);break;case 1:u.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=jd(h,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.Fa(t.onlineState),u.ba&&e.Ma(u.ba)&&$d(t)}async function e1(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.va()?0:1:!u.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function t1(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Ma(o)&&(s=!0);h.ba=o}}s&&$d(t)}function n1(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function $d(i){i.Ca.forEach(e=>{e.next()})}var pd,Tg;(Tg=pd||(pd={})).xa="default",Tg.Cache="cache";class r1{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new fo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==pd.Cache}}/**
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
 */class Av{constructor(e){this.key=e}}class Cv{constructor(e){this.key=e}}class i1{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.Za=Wy(e),this.Xa=new no(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new Eg,o=t?t.Xa:this.Xa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,R)=>{const D=o.get(w),j=Qu(this.query,R)?R:null,X=!!D&&this.mutatedKeys.has(D.key),J=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let W=!1;D&&j?D.data.isEqual(j.data)?X!==J&&(s.track({type:3,doc:j}),W=!0):this.ru(D,j)||(s.track({type:2,doc:j}),W=!0,(y&&this.Za(j,y)>0||_&&this.Za(j,_)<0)&&(m=!0)):!D&&j?(s.track({type:0,doc:j}),W=!0):D&&!j&&(s.track({type:1,doc:D}),W=!0,(y||_)&&(m=!0)),W&&(j?(h=h.add(j),u=J?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Xa:h,nu:s,Cs:m,mutatedKeys:u}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const h=e.nu.wa();h.sort((w,R)=>function(j,X){const J=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:W})}};return J(j)-J(X)}(w.type,R.type)||this.Za(w.doc,R.doc)),this.iu(s),o=o!=null&&o;const m=t&&!o?this.su():[],y=this.Ya.size===0&&this.current&&!o?1:0,_=y!==this.Ja;return this.Ja=y,h.length!==0||_?{snapshot:new fo(this.query,e.Xa,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Eg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Cv(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new Av(s))}),t}au(e){this.Ha=e.$s,this.Ya=Pe();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return fo.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Hd="SyncEngine";class s1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class o1{constructor(e){this.key=e,this.cu=!1}}class a1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.lu={},this.hu=new ts(m=>Hy(m),Gu),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ze(me.comparator),this.Eu=new Map,this.du=new xd,this.Au={},this.Ru=new Map,this.Vu=ho.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function l1(i,e,t=!0){const s=Vv(i);let o;const u=s.hu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await Rv(s,e,t,!0),o}async function u1(i,e){const t=Vv(i);await Rv(t,e,!0,!1)}async function Rv(i,e,t,s){const o=await CI(i.localStore,Jn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await c1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&_v(i.remoteStore,o),m}async function c1(i,e,t,s,o){i.fu=(R,D,j)=>async function(J,W,ve,de){let ge=W.view.tu(ve);ge.Cs&&(ge=await pg(J.localStore,W.query,!1).then(({documents:N})=>W.view.tu(N,ge)));const Te=de&&de.targetChanges.get(W.targetId),ze=de&&de.targetMismatches.get(W.targetId)!=null,Ie=W.view.applyChanges(ge,J.isPrimaryClient,Te,ze);return Sg(J,W.targetId,Ie.ou),Ie.snapshot}(i,R,D,j);const u=await pg(i.localStore,e,!0),h=new i1(e,u.$s),m=h.tu(u.documents),y=Ma.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);Sg(i,t,_.ou);const w=new s1(e,t,h);return i.hu.set(e,w),i.Pu.has(t)?i.Pu.get(t).push(e):i.Pu.set(t,[e]),_.snapshot}async function h1(i,e,t){const s=we(i),o=s.hu.get(e),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(h=>!Gu(h,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await dd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&bd(s.remoteStore,o.targetId),md(s,o.targetId)}).catch(Eo)):(md(s,o.targetId),await dd(s.localStore,o.targetId,!0))}async function d1(i,e){const t=we(i),s=t.hu.get(e),o=t.Pu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),bd(t.remoteStore,s.targetId))}async function f1(i,e,t){const s=E1(i);try{const o=await function(h,m){const y=we(h),_=pt.now(),w=m.reduce((j,X)=>j.add(X.key),Pe());let R,D;return y.persistence.runTransaction("Locally write mutations","readwrite",j=>{let X=Ar(),J=Pe();return y.Bs.getEntries(j,w).next(W=>{X=W,X.forEach((ve,de)=>{de.isValidDocument()||(J=J.add(ve))})}).next(()=>y.localDocuments.getOverlayedDocuments(j,X)).next(W=>{R=W;const ve=[];for(const de of m){const ge=CT(de,R.get(de.key).overlayedDocument);ge!=null&&ve.push(new ns(de.key,ge,My(ge.value.mapValue),Tr.exists(!0)))}return y.mutationQueue.addMutationBatch(j,_,ve,m)}).next(W=>{D=W;const ve=W.applyToLocalDocumentSet(R,J);return y.documentOverlayCache.saveOverlays(j,W.batchId,ve)})}).then(()=>({batchId:D.batchId,changes:Ky(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let _=h.Au[h.currentUser.toKey()];_||(_=new Ze(Ae)),_=_.insert(m,y),h.Au[h.currentUser.toKey()]=_}(s,o.batchId,t),await Fa(s,o.changes),await tc(s.remoteStore)}catch(o){const u=jd(o,"Failed to persist write");t.reject(u)}}async function kv(i,e){const t=we(i);try{const s=await II(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.cu=!0:o.modifiedDocuments.size>0?Fe(h.cu,14607):o.removedDocuments.size>0&&(Fe(h.cu,42227),h.cu=!1))}),await Fa(t,s,e)}catch(s){await Eo(s)}}function Ig(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.hu.forEach((u,h)=>{const m=h.view.Fa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=we(h);y.onlineState=m;let _=!1;y.queries.forEach((w,R)=>{for(const D of R.Sa)D.Fa(m)&&(_=!0)}),_&&$d(y)}(s.eventManager,e),o.length&&s.lu.Y_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function p1(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new Ze(me.comparator);h=h.insert(u,Ft.newNoDocument(u,Ee.min()));const m=Pe().add(u),y=new Ju(Ee.min(),new Map,new Ze(Ae),h,m);await kv(s,y),s.Iu=s.Iu.remove(u),s.Eu.delete(e),Wd(s)}else await dd(s.localStore,e,!1).then(()=>md(s,e,t)).catch(Eo)}async function m1(i,e){const t=we(i),s=e.batch.batchId;try{const o=await TI(t.localStore,e);Nv(t,s,null),Pv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fa(t,o)}catch(o){await Eo(o)}}async function g1(i,e,t){const s=we(i);try{const o=await function(h,m){const y=we(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return y.mutationQueue.lookupMutationBatch(_,m).next(R=>(Fe(R!==null,37113),w=R.keys(),y.mutationQueue.removeMutationBatch(_,R))).next(()=>y.mutationQueue.performConsistencyCheck(_)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>y.localDocuments.getDocuments(_,w))})}(s.localStore,e);Nv(s,e,t),Pv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fa(s,o)}catch(o){await Eo(o)}}function Pv(i,e){(i.Ru.get(e)||[]).forEach(t=>{t.resolve()}),i.Ru.delete(e)}function Nv(i,e,t){const s=we(i);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Au[s.currentUser.toKey()]=o}}function md(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Pu.get(e))i.hu.delete(s),t&&i.lu.gu(s,t);i.Pu.delete(e),i.isPrimaryClient&&i.du.Hr(e).forEach(s=>{i.du.containsKey(s)||Dv(i,s)})}function Dv(i,e){i.Tu.delete(e.path.canonicalString());const t=i.Iu.get(e);t!==null&&(bd(i.remoteStore,t),i.Iu=i.Iu.remove(e),i.Eu.delete(t),Wd(i))}function Sg(i,e,t){for(const s of t)s instanceof Av?(i.du.addReference(s.key,e),y1(i,s)):s instanceof Cv?(ie(Hd,"Document no longer in limbo: "+s.key),i.du.removeReference(s.key,e),i.du.containsKey(s.key)||Dv(i,s.key)):ye(19791,{pu:s})}function y1(i,e){const t=e.key,s=t.path.canonicalString();i.Iu.get(t)||i.Tu.has(s)||(ie(Hd,"New document in limbo: "+t),i.Tu.add(s),Wd(i))}function Wd(i){for(;i.Tu.size>0&&i.Iu.size<i.maxConcurrentLimboResolutions;){const e=i.Tu.values().next().value;i.Tu.delete(e);const t=new me(Xe.fromString(e)),s=i.Vu.next();i.Eu.set(s,new o1(t)),i.Iu=i.Iu.insert(t,s),_v(i.remoteStore,new si(Jn($y(t.path)),s,"TargetPurposeLimboResolution",Hu.le))}}async function Fa(i,e,t){const s=we(i),o=[],u=[],h=[];s.hu.isEmpty()||(s.hu.forEach((m,y)=>{h.push(s.fu(y,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const R=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,R?"current":"not-current")}if(_){o.push(_);const R=Ld.Rs(y.targetId,_);u.push(R)}}))}),await Promise.all(h),s.lu.Y_(o),await async function(y,_){const w=we(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>H.forEach(_,D=>H.forEach(D.ds,j=>w.persistence.referenceDelegate.addReference(R,D.targetId,j)).next(()=>H.forEach(D.As,j=>w.persistence.referenceDelegate.removeReference(R,D.targetId,j)))))}catch(R){if(!wo(R))throw R;ie(Md,"Failed to update sequence numbers: "+R)}for(const R of _){const D=R.targetId;if(!R.fromCache){const j=w.xs.get(D),X=j.snapshotVersion,J=j.withLastLimboFreeSnapshotVersion(X);w.xs=w.xs.insert(D,J)}}}(s.localStore,u))}async function v1(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){ie(Hd,"User change. New user:",e.toKey());const s=await mv(t.localStore,e);t.currentUser=e,function(u,h){u.Ru.forEach(m=>{m.forEach(y=>{y.reject(new he(G.CANCELLED,h))})}),u.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fa(t,s.ks)}}function _1(i,e){const t=we(i),s=t.Eu.get(e);if(s&&s.cu)return Pe().add(s.key);{let o=Pe();const u=t.Pu.get(e);if(!u)return o;for(const h of u){const m=t.hu.get(h);o=o.unionWith(m.view.eu)}return o}}function Vv(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p1.bind(null,e),e.lu.Y_=t1.bind(null,e.eventManager),e.lu.gu=n1.bind(null,e.eventManager),e}function E1(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=m1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=g1.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return wI(this.persistence,new vI,e.initialUser,this.serializer)}Su(e){return new pv(Od.fi,this.serializer)}bu(e){return new kI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class w1 extends Ou{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Fe(this.persistence.referenceDelegate instanceof Vu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new rI(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new pv(s=>Vu.fi(s,t),this.serializer)}}class gd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ig(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=v1.bind(null,this.syncEngine),await XI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JI}()}createDatastore(e){const t=Zu(e.databaseInfo.databaseId),s=function(u){return new xI(u)}(e.databaseInfo);return function(u,h,m,y){return new bI(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new UI(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Ig(this.syncEngine,t,0),function(){return yg.C()?new yg:new PI}())}createSyncEngine(e,t){return function(o,u,h,m,y,_,w){const R=new a1(o,u,h,m,y,_);return w&&(R.mu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=we(o);ie(Ji,"RemoteStore shutting down."),u.da.add(5),await ba(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gd.provider={build:()=>new gd};/**
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
 *//**
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
 */class T1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const yi="FirestoreClient";class I1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=Cy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ie(yi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ie(yi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=jd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function qh(i,e){i.asyncQueue.verifyOperationInProgress(),ie(yi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await mv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Ag(i,e){i.asyncQueue.verifyOperationInProgress();const t=await S1(i);ie(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>_g(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>_g(e.remoteStore,o)),i._onlineComponents=e}async function S1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(yi,"Using user provided OfflineComponentProvider");try{await qh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ao("Error using user provided cache. Falling back to memory cache: "+t),await qh(i,new Ou)}}else ie(yi,"Using default OfflineComponentProvider"),await qh(i,new w1(void 0));return i._offlineComponents}async function xv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(yi,"Using user provided OnlineComponentProvider"),await Ag(i,i._uninitializedComponentsProvider._online)):(ie(yi,"Using default OnlineComponentProvider"),await Ag(i,new gd))),i._onlineComponents}function A1(i){return xv(i).then(e=>e.syncEngine)}async function C1(i){const e=await xv(i),t=e.eventManager;return t.onListen=l1.bind(null,e.syncEngine),t.onUnlisten=h1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=u1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=d1.bind(null,e.syncEngine),t}function R1(i,e,t={}){const s=new ci;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,_){const w=new T1({next:D=>{w.xu(),h.enqueueAndForget(()=>e1(u,R)),D.fromCache&&y.source==="server"?_.reject(new he(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(D)},error:D=>_.reject(D)}),R=new r1(m,w,{includeMetadataChanges:!0,Qa:!0});return ZI(u,R)}(await C1(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Ov(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Cg=new Map;/**
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
 */function Lv(i,e,t){if(!t)throw new he(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function k1(i,e,t,s){if(e===!0&&s===!0)throw new he(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Rg(i){if(!me.isDocumentKey(i))throw new he(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function kg(i){if(me.isDocumentKey(i))throw new he(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function qd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye(12329,{type:typeof i})}function Lu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qd(i);throw new he(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const Mv="firestore.googleapis.com",Pg=!0;class Ng{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mv,this.ssl=Pg}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Pg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tI)throw new he(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}k1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ov((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new he(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new he(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new he(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Dw;switch(s.type){case"firstParty":return new Lw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Cg.get(t);s&&(ie("ComponentProvider","Removing Datastore"),Cg.delete(t),s.terminate())}(this),Promise.resolve()}}function P1(i,e,t,s={}){var o;i=Lu(i,nc);const u=go(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(uy(`https://${y}`),cy("Firestore",!0)),h.host!==Mv&&h.host!==y&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!Qi(_,m)&&(i._setSettings(_),s.mockUserToken)){let w,R;if(typeof s.mockUserToken=="string")w=s.mockUserToken,R=bt.MOCK_USER;else{w=n0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new he(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new bt(D)}i._authCredentials=new Vw(new Sy(w,R))}}/**
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
 */class rc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rc(this.firestore,e,this._query)}}class Mn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mn(this.firestore,e,this._key)}}class hi extends rc{constructor(e,t,s){super(e,t,$y(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mn(this.firestore,null,new me(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function Dg(i,e,...t){if(i=bn(i),Lv("collection","path",e),i instanceof nc){const s=Xe.fromString(e,...t);return kg(s),new hi(i,null,s)}{if(!(i instanceof Mn||i instanceof hi))throw new he(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...t));return kg(s),new hi(i.firestore,null,s)}}function N1(i,e,...t){if(i=bn(i),arguments.length===1&&(e=Cy.newId()),Lv("doc","path",e),i instanceof nc){const s=Xe.fromString(e,...t);return Rg(s),new Mn(i,null,new me(s))}{if(!(i instanceof Mn||i instanceof hi))throw new he(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...t));return Rg(s),new Mn(i.firestore,i instanceof hi?i.converter:null,new me(s))}}/**
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
 */const Vg="AsyncQueue";class xg{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new yv(this,"async_queue_retry"),this.rc=()=>{const s=Wh();s&&ie(Vg,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=Wh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Wh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new ci;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!wo(e))throw e;ie(Vg,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,Sr("INTERNAL UNHANDLED ERROR: ",Og(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=Bd.createAndSchedule(this,e,t,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&ye(47125,{cc:Og(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Og(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Kd extends nc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new xg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xg(e),this._firestoreClient=void 0,await e}}}function D1(i,e){const t=typeof i=="object"?i:py(),s=typeof i=="string"?i:Au,o=Td(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=e0("firestore");u&&P1(o,...u)}return o}function bv(i){if(i._terminated)throw new he(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||V1(i),i._firestoreClient}function V1(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,_,w){return new Xw(m,y,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Ov(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new I1(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(Nt.fromBase64String(e))}catch(t){throw new he(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new po(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fv{constructor(e){this._methodName=e}}/**
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
 */class Qd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */class Xd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const x1=/^__.*__$/;class O1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,t,this.fieldTransforms):new La(e,this.data,t,this.fieldTransforms)}}function Uv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ic:i})}}class Yd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Vc(e),o}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Mu(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Uv(this.Ic)&&x1.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class L1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Zu(e)}bc(e,t,s,o=!1){return new Yd({Ic:e,methodName:t,wc:s,path:Pt.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function M1(i){const e=i._freezeSettings(),t=Zu(i._databaseId);return new L1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function b1(i,e,t,s,o,u={}){const h=i.bc(u.merge||u.mergeFields?2:0,e,t,o);$v("Data must be an object, but it was:",h,s);const m=Bv(s,h);let y,_;if(u.merge)y=new On(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const D=F1(e,R,t);if(!h.contains(D))throw new he(G.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);z1(w,D)||w.push(D)}y=new On(w),_=h.fieldTransforms.filter(R=>y.covers(R.field))}else y=null,_=h.fieldTransforms;return new O1(new vn(m),y,_)}function zv(i,e){if(jv(i=bn(i)))return $v("Unsupported field value:",e,i),Bv(i,e);if(i instanceof Fv)return function(s,o){if(!Uv(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=zv(m,o.fc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=bn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ET(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Du(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Du(o.serializer,u)}}if(s instanceof Qd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof po)return{bytesValue:ov(o.serializer,s._byteString)};if(s instanceof Mn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.gc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Vd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Xd)return function(h,m){return{mapValue:{fields:{[Oy]:{stringValue:Ly},[Cu]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.gc("VectorValues must only contain numeric values.");return Pd(m.serializer,_)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${qd(s)}`)}(i,e)}function Bv(i,e){const t={};return ky(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(i,(s,o)=>{const u=zv(o,e.Ac(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function jv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof Qd||i instanceof po||i instanceof Mn||i instanceof Fv||i instanceof Xd)}function $v(i,e,t){if(!jv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=qd(t);throw s==="an object"?e.gc(i+" a custom object"):e.gc(i+" "+s)}}function F1(i,e,t){if((e=bn(e))instanceof Gd)return e._internalPath;if(typeof e=="string")return Hv(i,e);throw Mu("Field path arguments must be of type string or ",i,!1,void 0,t)}const U1=new RegExp("[~\\*/\\[\\]]");function Hv(i,e,t){if(e.search(U1)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Gd(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Mu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new he(G.INVALID_ARGUMENT,m+i+y)}function z1(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Wv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class B1 extends Wv{data(){return super.data()}}function qv(i,e){return typeof e=="string"?Hv(i,e):e instanceof Gd?e._internalPath:e._delegate._internalPath}/**
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
 */function j1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new he(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $1{convertValue(e,t="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return es(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Cu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new Xd(u)}convertGeoPoint(e){return new Qd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=qu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ka(e));default:return null}}convertTimestamp(e){const t=fi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Xe.fromString(e);Fe(dv(s),9688,{name:e});const o=new Pa(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function H1(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class uu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class W1 extends Wv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class yu extends W1{data(e={}){return super.data(e)}}class q1{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new uu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new yu(this._firestore,this._userDataWriter,s.key,s,new uu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new yu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new uu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new yu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new uu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:K1(m.type),doc:y,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function K1(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:i})}}class G1 extends $1{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mn(this.firestore,null,t)}}function Q1(i){i=Lu(i,rc);const e=Lu(i.firestore,Kd),t=bv(e),s=new G1(e);return j1(i._query),R1(t,i._query).then(o=>new q1(e,s,i,o))}function X1(i,e){const t=Lu(i.firestore,Kd),s=N1(i),o=H1(i.converter,e);return Y1(t,[b1(M1(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Tr.exists(!1))]).then(()=>s)}function Y1(i,e){return function(s,o){const u=new ci;return s.asyncQueue.enqueueAndForget(async()=>f1(await A1(s),o,u)),u.promise}(bv(i),e)}(function(e,t=!0){(function(o){_o=o})(vo),oo(new Xi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Kd(new xw(s.getProvider("auth-internal")),new Mw(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new he(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(_.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),li(Fm,Um,e),li(Fm,Um,"esm2017")})();const J1={apiKey:"AIzaSyAoOzH_i6sQoQq59NEXZzi-JcWplENTGfw",authDomain:"famelies.firebaseapp.com",projectId:"famelies",storageBucket:"famelies.firebasestorage.app",messagingSenderId:"876298055884",appId:"1:876298055884:web:022e5a07599ceafe829269",measurementId:"G-8CM4RFVH1W"},Z1=fy(J1),Lg=D1(Z1);function Jd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eS=Kv,Gv=new Oa("auth","Firebase",Kv());/**
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
 */const bu=new Ed("@firebase/auth");function tS(i,...e){bu.logLevel<=ke.WARN&&bu.warn(`Auth (${vo}): ${i}`,...e)}function vu(i,...e){bu.logLevel<=ke.ERROR&&bu.error(`Auth (${vo}): ${i}`,...e)}/**
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
 */function Cr(i,...e){throw Zd(i,...e)}function an(i,...e){return Zd(i,...e)}function Qv(i,e,t){const s=Object.assign(Object.assign({},eS()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function Gi(i){return Qv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Gv.create(i,...e)}function ue(i,e,...t){if(!i)throw Zd(e,...t)}function Er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw vu(e),new Error(e)}function Rr(i,e){i||Er(e)}/**
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
 */function yd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Xv(){return Mg()==="http:"||Mg()==="https:"}function Mg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function nS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xv()||l0()||"connection"in navigator)?navigator.onLine:!0}function rS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=s0()||u0()}get(){return nS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ef(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oS=new Ua(3e4,6e4);function tf(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function is(i,e,t,s,o={}){return Jv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=yo(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:y},u);return a0()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&go(i.emulatorConfig.host)&&(_.credentials="include"),Yv.fetch()(await Zv(i,i.config.apiHost,t,m),_)})}async function Jv(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},iS),e);try{const o=new lS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw cu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw cu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw cu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Qv(i,w,_);Cr(i,w)}}catch(o){if(o instanceof kr)throw o;Cr(i,"network-request-failed",{message:String(o)})}}async function aS(i,e,t,s,o={}){const u=await is(i,e,t,s,o);return"mfaPendingCredential"in u&&Cr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Zv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?ef(i.config,o):`${i.config.apiScheme}://${o}`;return sS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class lS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(an(this.auth,"network-request-failed")),oS.get())})}}function cu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=an(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */function bg(i){return i!==void 0&&i.getResponse!==void 0}/**
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
 */async function uS(i){return(await is(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */async function cS(i,e){return is(i,"POST","/v1/accounts:delete",e)}async function Fu(i,e){return is(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Aa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hS(i,e=!1){const t=bn(i),s=await t.getIdToken(e),o=nf(s);ue(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Aa(Kh(o.auth_time)),issuedAtTime:Aa(Kh(o.iat)),expirationTime:Aa(Kh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Kh(i){return Number(i)*1e3}function nf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=sy(t);return o?JSON.parse(o):(vu("Failed to decode base64 JWT payload"),null)}catch(o){return vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Fg(i){const e=nf(i);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof kr&&dS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function dS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class fS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await xa(i,Fu(t,{idToken:s}));ue(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?e_(u.providerUserInfo):[],m=mS(i.providerData,h),y=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?_:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new vd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,R)}async function pS(i){const e=bn(i);await Uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function e_(i){return i.map(e=>{var{providerId:t}=e,s=Jd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function gS(i,e){const t=await Jv(i,{},async()=>{const s=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Zv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&go(i.emulatorConfig.host)&&(y.credentials="include"),Yv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yS(i,e){return is(i,"POST","/v2/accounts:revokeToken",tf(i,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=Fg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await gS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(ue(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ue(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ue(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function ei(i,e){ue(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new vd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await xa(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hS(this,e)}reload(){return pS(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(Gi(this.auth));const e=await this.getIdToken();return await xa(this,cS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,_,w;const R=(s=t.displayName)!==null&&s!==void 0?s:void 0,D=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,X=(h=t.photoURL)!==null&&h!==void 0?h:void 0,J=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,ve=(_=t.createdAt)!==null&&_!==void 0?_:void 0,de=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ge,emailVerified:Te,isAnonymous:ze,providerData:Ie,stsTokenManager:N}=t;ue(ge&&N,e,"internal-error");const I=ro.fromJSON(this.name,N);ue(typeof ge=="string",e,"internal-error"),ei(R,e.name),ei(D,e.name),ue(typeof Te=="boolean",e,"internal-error"),ue(typeof ze=="boolean",e,"internal-error"),ei(j,e.name),ei(X,e.name),ei(J,e.name),ei(W,e.name),ei(ve,e.name),ei(de,e.name);const A=new Ln({uid:ge,auth:e,email:D,emailVerified:Te,displayName:R,isAnonymous:ze,photoURL:X,phoneNumber:j,tenantId:J,stsTokenManager:I,createdAt:ve,lastLoginAt:de});return Ie&&Array.isArray(Ie)&&(A.providerData=Ie.map(k=>Object.assign({},k))),W&&(A._redirectEventId=W),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Uu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ue(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?e_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ro;m.updateFromIdToken(s);const y=new Ln({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new vd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const Ug=new Map;function wr(i){Rr(i instanceof Function,"Expected a class definition");let e=Ug.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ug.set(i,e),e)}/**
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
 */class t_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}t_.type="NONE";const zg=t_;/**
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
 */function _u(i,e,t){return`firebase:${i}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=_u(this.userKey,o.apiKey,u),this.fullPersistenceKey=_u("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Fu(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(wr(zg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||wr(zg);const h=_u(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let R;if(typeof w=="string"){const D=await Fu(e,{idToken:w}).catch(()=>{});if(!D)break;R=await Ln._fromGetAccountInfoResponse(e,D,w)}else R=Ln._fromJSON(e,w);_!==u&&(m=R),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new io(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new io(u,e,s))}}/**
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
 */function Bg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(n_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a_(e))return"Blackberry";if(l_(e))return"Webos";if(r_(e))return"Safari";if((e.includes("chrome/")||i_(e))&&!e.includes("edge/"))return"Chrome";if(o_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function n_(i=Ut()){return/firefox\//i.test(i)}function r_(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i_(i=Ut()){return/crios\//i.test(i)}function s_(i=Ut()){return/iemobile/i.test(i)}function o_(i=Ut()){return/android/i.test(i)}function a_(i=Ut()){return/blackberry/i.test(i)}function l_(i=Ut()){return/webos/i.test(i)}function rf(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function vS(i=Ut()){var e;return rf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _S(){return c0()&&document.documentMode===10}function u_(i=Ut()){return rf(i)||o_(i)||l_(i)||a_(i)||/windows phone/i.test(i)||s_(i)}/**
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
 */function c_(i,e=[]){let t;switch(i){case"Browser":t=Bg(Ut());break;case"Worker":t=`${Bg(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vo}/${s}`}/**
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
 */class ES{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wS(i,e={}){return is(i,"GET","/v2/passwordPolicy",tf(i,e))}/**
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
 */const TS=6;class IS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:TS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class SS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new ES(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fu(this,{idToken:e}),s=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Yn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(Gi(this));const t=e?bn(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(Gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(Gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wS(this),t=new IS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&tS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ic(i){return bn(i)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AS(i){sc=i}function h_(i){return sc.loadJS(i)}function CS(){return sc.recaptchaV2Script}function RS(){return sc.gapiScript}function d_(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const kS=500,PS=6e4,hu=1e12;class NS{constructor(e){this.auth=e,this.counter=hu,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new DS(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||hu;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||hu;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||hu;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class DS{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;ue(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=VS(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},PS)},kS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function VS(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */function xS(i,e){const t=Td(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Qi(u,e??{}))return o;Cr(o,"already-initialized")}return t.initialize({options:e})}function OS(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function LS(i,e,t){const s=ic(i);ue(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=f_(e),{host:h,port:m}=MS(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ue(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ue(Qi(_,s.config.emulator)&&Qi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,go(h)?(uy(`${u}//${h}${y}`),cy("Auth",!0)):bS()}function f_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function MS(i){const e=f_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:$g(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:$g(h)}}}function $g(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function bS(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class p_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
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
 */async function so(i,e){return aS(i,"POST","/v1/accounts:signInWithIdp",tf(i,e))}/**
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
 */const FS="http://localhost";class Zi extends p_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Jd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Zi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return so(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,so(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,so(e,t)}buildRequest(){const e={requestUri:FS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yo(t)}return e}}/**
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
 */class m_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class za extends m_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ti extends za{constructor(){super("facebook.com")}static credential(e){return Zi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
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
 */class ni extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.GOOGLE_SIGN_IN_METHOD="google.com";ni.PROVIDER_ID="google.com";/**
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
 */class ri extends za{constructor(){super("github.com")}static credential(e){return Zi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
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
 */class ii extends za{constructor(){super("twitter.com")}static credential(e,t){return Zi._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
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
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ln._fromIdTokenResponse(e,s,o),h=Hg(s);return new mo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Hg(s);return new mo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Hg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class zu extends kr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new zu(e,t,s,o)}}function g_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(i,u,e,s):u})}async function US(i,e,t=!1){const s=await xa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return mo._forOperation(i,"link",s)}/**
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
 */async function zS(i,e,t=!1){const{auth:s}=i;if(Yn(s.app))return Promise.reject(Gi(s));const o="reauthenticate";try{const u=await xa(i,g_(s,o,e,i),t);ue(u.idToken,s,"internal-error");const h=nf(u.idToken);ue(h,s,"internal-error");const{sub:m}=h;return ue(i.uid===m,s,"user-mismatch"),mo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Cr(s,"user-mismatch"),u}}/**
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
 */async function BS(i,e,t=!1){if(Yn(i.app))return Promise.reject(Gi(i));const s="signIn",o=await g_(i,s,e),u=await mo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function jS(i,e,t,s){return bn(i).onIdTokenChanged(e,t,s)}function $S(i,e,t){return bn(i).beforeAuthStateChanged(e,t)}const Bu="__sak";/**
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
 */class y_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HS=1e3,WS=10;class v_ extends y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=u_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);_S()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,WS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},HS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}v_.type="LOCAL";const qS=v_;/**
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
 */class __ extends y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}__.type="SESSION";const E_=__;/**
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
 */function KS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new oc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await KS(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
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
 */function sf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class GS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=sf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const D=R;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function at(){return window}function QS(i){at().location.href=i}/**
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
 */function of(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function XS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YS(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function JS(){return of()?self:null}/**
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
 */const w_="firebaseLocalStorageDb",ZS=1,ju="firebaseLocalStorage",T_="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ac(i,e){return i.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function eA(){const i=indexedDB.deleteDatabase(w_);return new Ba(i).toPromise()}function _d(){const i=indexedDB.open(w_,ZS);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ju,{keyPath:T_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ju)?e(s):(s.close(),await eA(),e(await _d()))})})}async function Wg(i,e,t){const s=ac(i,!0).put({[T_]:e,value:t});return new Ba(s).toPromise()}async function tA(i,e){const t=ac(i,!1).get(e),s=await new Ba(t).toPromise();return s===void 0?null:s.value}function qg(i,e){const t=ac(i,!0).delete(e);return new Ba(t).toPromise()}const nA=800,rA=3;class I_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(JS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XS(),!this.activeServiceWorker)return;this.sender=new GS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await Wg(e,Bu,"1"),await qg(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ac(o,!1).getAll();return new Ba(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I_.type="LOCAL";const iA=I_;/**
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
 */const Gh=d_("rcb"),sA=new Ua(3e4,6e4);class oA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=at().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ue(aA(t),e,"argument-error"),this.shouldResolveImmediately(t)&&bg(at().grecaptcha)?Promise.resolve(at().grecaptcha):new Promise((s,o)=>{const u=at().setTimeout(()=>{o(an(e,"network-request-failed"))},sA.get());at()[Gh]=()=>{at().clearTimeout(u),delete at()[Gh];const m=at().grecaptcha;if(!m||!bg(m)){o(an(e,"internal-error"));return}const y=m.render;m.render=(_,w)=>{const R=y(_,w);return this.counter++,R},this.hostLanguage=t,s(m)};const h=`${CS()}?${yo({onload:Gh,render:"explicit",hl:t})}`;h_(h).catch(()=>{clearTimeout(u),o(an(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=at().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function aA(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class lA{async load(e){return new NS(e)}clearedOneInstance(){}}/**
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
 */const uA="recaptcha",cA={theme:"light",type:"image"};class hA{constructor(e,t,s=Object.assign({},cA)){this.parameters=s,this.type=uA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ic(e),this.isInvisible=this.parameters.size==="invisible",ue(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;ue(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new lA:new oA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(o=>{const u=h=>{h&&(this.tokenChangeListeners.delete(u),o(h))};this.tokenChangeListeners.add(u),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ue(!this.parameters.sitekey,this.auth,"argument-error"),ue(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ue(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=at()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){ue(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ue(Xv()&&!of(),this.auth,"internal-error"),await dA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await uS(this.auth);ue(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ue(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function dA(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */function fA(i,e){return e?wr(e):(ue(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class af extends p_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,t){return so(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pA(i){return BS(i.auth,new af(i),i.bypassAuthState)}function mA(i){const{auth:e,user:t}=i;return ue(t,e,"internal-error"),zS(t,new af(i),i.bypassAuthState)}async function gA(i){const{auth:e,user:t}=i;return ue(t,e,"internal-error"),US(t,new af(i),i.bypassAuthState)}/**
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
 */class S_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pA;case"linkViaPopup":case"linkViaRedirect":return gA;case"reauthViaPopup":case"reauthViaRedirect":return mA;default:Cr(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yA=new Ua(2e3,1e4);class to extends S_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yA.get())};e()}}to.currentPopupAction=null;/**
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
 */const vA="pendingRedirect",Eu=new Map;class _A extends S_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const s=await EA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EA(i,e){const t=IA(e),s=TA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function wA(i,e){Eu.set(i._key(),e)}function TA(i){return wr(i._redirectPersistence)}function IA(i){return _u(vA,i.config.apiKey,i.name)}async function SA(i,e,t=!1){if(Yn(i.app))return Promise.reject(Gi(i));const s=ic(i),o=fA(s,e),h=await new _A(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const AA=10*60*1e3;class CA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!A_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(an(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kg(e))}saveEventToCache(e){this.cachedEventUids.add(Kg(e)),this.lastProcessedEventTime=Date.now()}}function Kg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function A_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A_(i);default:return!1}}/**
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
 */async function kA(i,e={}){return is(i,"GET","/v1/projects",e)}/**
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
 */const PA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NA=/^https?/;async function DA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await kA(i);for(const t of e)try{if(VA(t))return}catch{}Cr(i,"unauthorized-domain")}function VA(i){const e=yd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!NA.test(t))return!1;if(PA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const xA=new Ua(3e4,6e4);function Gg(){const i=at().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function OA(i){return new Promise((e,t)=>{var s,o,u;function h(){Gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gg(),t(an(i,"network-request-failed"))},timeout:xA.get()})}if(!((o=(s=at().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=at().gapi)===null||u===void 0)&&u.load)h();else{const m=d_("iframefcb");return at()[m]=()=>{gapi.load?h():t(an(i,"network-request-failed"))},h_(`${RS()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw wu=null,e})}let wu=null;function LA(i){return wu=wu||OA(i),wu}/**
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
 */const MA=new Ua(5e3,15e3),bA="__/auth/iframe",FA="emulator/auth/iframe",UA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BA(i){const e=i.config;ue(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?ef(e,FA):`https://${i.config.authDomain}/${bA}`,s={apiKey:e.apiKey,appName:i.name,v:vo},o=zA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${yo(s).slice(1)}`}async function jA(i){const e=await LA(i),t=at().gapi;return ue(t,i,"internal-error"),e.open({where:document.body,url:BA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=an(i,"network-request-failed"),m=at().setTimeout(()=>{u(h)},MA.get());function y(){at().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const $A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HA=500,WA=600,qA="_blank",KA="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GA(i,e,t,s=HA,o=WA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},$A),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ut().toLowerCase();t&&(m=i_(_)?qA:t),n_(_)&&(e=e||KA,y.scrollbars="yes");const w=Object.entries(y).reduce((D,[j,X])=>`${D}${j}=${X},`,"");if(vS(_)&&m!=="_self")return QA(e||"",m),new Qg(null);const R=window.open(e||"",m,w);ue(R,i,"popup-blocked");try{R.focus()}catch{}return new Qg(R)}function QA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const XA="__/auth/handler",YA="emulator/auth/handler",JA=encodeURIComponent("fac");async function Xg(i,e,t,s,o,u){ue(i.config.authDomain,i,"auth-domain-config-required"),ue(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:vo,eventId:o};if(e instanceof m_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",y0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof za){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),_=y?`#${JA}=${encodeURIComponent(y)}`:"";return`${ZA(i)}?${yo(m).slice(1)}${_}`}function ZA({config:i}){return i.emulator?ef(i,YA):`https://${i.authDomain}/${XA}`}/**
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
 */const Qh="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=E_,this._completeRedirectFn=SA,this._overrideRedirectResult=wA}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Xg(e,t,s,yd(),o);return GA(e,h,sf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Xg(e,t,s,yd(),o);return QS(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jA(e),s=new CA(e);return t.register("authEvent",o=>(ue(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qh,{type:Qh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Qh];h!==void 0&&t(!!h),Cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return u_()||r_()||rf()}}const tC=eC;var Yg="@firebase/auth",Jg="1.10.7";/**
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
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iC(i){oo(new Xi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ue(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c_(i)},_=new SS(s,o,u,y);return OS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),oo(new Xi("auth-internal",e=>{const t=ic(e.getProvider("auth").getImmediate());return(s=>new nC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(Yg,Jg,rC(i)),li(Yg,Jg,"esm2017")}/**
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
 */const sC=5*60,oC=ly("authIdTokenMaxAge")||sC;let Zg=null;const aC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>oC)return;const o=t==null?void 0:t.token;Zg!==o&&(Zg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lC(i=py()){const e=Td(i,"auth");if(e.isInitialized())return e.getImmediate();const t=xS(i,{popupRedirectResolver:tC,persistence:[iA,qS,E_]}),s=ly("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=aC(u.toString());$S(t,h,()=>h(t.currentUser)),jS(t,m=>h(m))}}const o=oy("auth");return o&&LS(t,`http://${o}`),t}function uC(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}AS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=an("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",uC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iC("Browser");const cC=()=>{const[i,e]=Mt.useState([]),[t,s]=Mt.useState([]),[o,u]=Mt.useState("list"),[h,m]=Mt.useState(null),[y,_]=Mt.useState({key:"2222",familyName:"",wazeLocation:"",members:[{name:"",phone:"",role:"אב"},{name:"",phone:"",role:"אם"}]}),[w,R]=Mt.useState(!1),[D,j]=Mt.useState(!1),[X,J]=Mt.useState(!1),[W,ve]=Mt.useState(""),de="1234";Mt.useEffect(()=>{(async()=>{const z=Dg(Lg,"families"),ee=(await Q1(z)).docs.map(x=>({id:x.id,...x.data()}));e(ee),s(ee)})()},[]);const ge=async()=>{const Z=y.members.some(z=>z.name.trim());if(y.familyName&&y.wazeLocation&&Z){const z={familyName:y.familyName,wazeLocation:y.wazeLocation,members:y.members.filter(ne=>ne.name.trim()),submittedAt:new Date().toLocaleString("he-IL")};await X1(Dg(Lg,"families"),z),_({familyName:"",wazeLocation:"",members:[{key:"1",name:"",phone:"",role:"אב"},{key:"2",name:"",phone:"",role:"אם"}]}),u("list")}else alert("נא למלא לפחות שם משפחה, מיקום ובן משפחה אחד עם שם")},Te=(Z,z)=>{Z==="wazeLocation"&&z.includes("google.com/maps")&&(z=A(z)),_({...y,[Z]:z})},ze=(Z,z,ne)=>{const ee=[...y.members];ee[Z]={...ee[Z],[z]:ne},_({...y,members:ee})},Ie=()=>{_({...y,members:[...y.members,{name:"",phone:"",role:"ילד/ה"}]})},N=Z=>{if(y.members.length>1){const z=y.members.filter((ne,ee)=>ee!==Z);_({...y,members:z})}},I=()=>{if(R(!0),!navigator.geolocation){alert("הדפדפן שלך לא תומך במיקום אוטומטי"),R(!1);return}const Z={enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4};navigator.geolocation.getCurrentPosition(z=>{const ne=z.coords.latitude.toFixed(6),ee=z.coords.longitude.toFixed(6),x=`${ne},${ee}`;_($=>({...$,wazeLocation:x})),R(!1)},z=>{R(!1);let ne="לא הצלחנו לקבל את המיקום. ";switch(z.code){case z.PERMISSION_DENIED:ne+="נדחתה הגישה למיקום. אנא אפשר גישה למיקום בהגדרות הדפדפן.";break;case z.POSITION_UNAVAILABLE:ne+="מידע המיקום לא זמין.";break;case z.TIMEOUT:ne+="תם הזמן לקבלת המיקום. נסה שוב.";break;default:ne+="שגיאה לא ידועה.";break}alert(ne)},Z)},A=Z=>{const z=Z.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/);if(z){const ne=z[1],ee=z[2];return`${ne},${ee}`}return Z},k=Z=>{window.open(`tel:${Z}`,"_self")},V=Z=>{const z=Z.replace(/[-\s]/g,""),ne=z.startsWith("0")?"972"+z.substring(1):z;window.open(`https://wa.me/${ne}`,"_blank")},O=Z=>{window.open(`https://waze.com/ul?q=${encodeURIComponent(Z)}`,"_blank")},S=()=>{W===de?(j(!0),J(!1),ve("")):(alert("סיסמה שגויה!"),ve(""))},Ke=(Z,z)=>{if(!D){J(!0);return}window.confirm(`האם אתה בטוח שברצונך למחוק את משפחת ${z}?`)&&(e(i.filter(ee=>ee.id!==Z)),h&&h.id===Z&&(u("list"),m(null)))},gt=Z=>{m(Z),u("details")},yt=Z=>{const z=Z.target.value.toLowerCase(),ne=i.filter(ee=>!!((ee.familyName||"").toLowerCase().includes(z)||ee.members.some(x=>(x.name||"").toLowerCase().includes(z))));s(ne)};if(o==="list")return B.createElement("div",{style:{padding:"20px 0"}},B.createElement("div",{className:"",style:{padding:"10px 20px"}},B.createElement("div",{className:"topbar"},B.createElement("h1",{className:"h3 mb-0"},B.createElement(Am,{className:"me-3",size:32}),B.createElement("span",{style:{marginRight:"10px"}},"משפחות הישוב"))),B.createElement("div",null,B.createElement("input",{type:"text",className:"form-control mb-3",onKeyUp:yt,style:{margin:"10px 0"},placeholder:"חפש משפחה לפי שם"})),B.createElement("div",{className:"d-flex align-items-center gap-3"},B.createElement("button",{onClick:()=>u("form"),className:"btn btn-primary d-flex align-items-center gap-2",style:{margin:"10px 0"}},B.createElement($E,{size:20}),"הוסף משפחה חדשה"))),B.createElement("div",{className:"rows"},t.map(Z=>B.createElement("div",{key:Z.id,className:"col"},B.createElement("div",{style:{backgroundColor:"#fff",borderBottom:"3px solid #aaa",margin:"0px 0px 10px",padding:"10px 19px"}},B.createElement("div",{onClick:()=>gt(Z)},B.createElement("div",null,B.createElement("h5",{className:"card-title mb-1"},"משפחת ",Z.familyName," (",Z.members.filter(z=>z.role=="אב"||z.role=="אם").map(z=>z.name).join(","),")"),B.createElement("p",{className:"card-text text-muted"},Z.members.length," בני משפחה"))),B.createElement("div",{className:"d-flex align-items-center gap-2"},D&&B.createElement("button",{onClick:z=>{z.stopPropagation(),Ke(Z.id,Z.familyName)},className:"btn btn-danger btn-sm",title:"מחק משפחה"},B.createElement(Im,{size:16})))))),X&&B.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},B.createElement("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4"},B.createElement("div",{className:"flex items-center mb-4"},B.createElement(zE,{className:"h-6 w-6 text-blue-600 mr-3"}),B.createElement("h3",{className:"text-xl font-bold text-gray-800"},"כניסת מנהל")),B.createElement("p",{className:"text-gray-600 mb-4"},"נדרשת סיסמת מנהל כדי למחוק משפחות"),B.createElement("div",{className:"space-y-4"},B.createElement("input",{type:"password",value:W,onChange:Z=>ve(Z.target.value),onKeyPress:Z=>Z.key==="Enter"&&S(),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"הכנס סיסמת מנהל",autoFocus:!0}),B.createElement("div",{className:"flex space-x-3"},B.createElement("button",{onClick:S,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"},"התחבר"),B.createElement("button",{onClick:()=>{J(!1),ve("")},className:"flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition-colors"},"ביטול")))))));if(o==="form")return B.createElement("div",{style:{padding:"20px"}},B.createElement("div",{className:"d-flex align-items-center justify-content-between mb-4"},B.createElement("h1",{className:"h3 mb-0"},"רישום משפחה חדשה"),B.createElement("button",{onClick:()=>u("list"),className:"btn btn-link text-decoration-none d-flex align-items-center gap-2"},B.createElement(wm,{size:20}),"חזור לרשימה")),B.createElement("div",{className:"row g-4"},B.createElement("div",{className:"col-12"},B.createElement("label",{className:"form-label"},"שם המשפחה *"),B.createElement("input",{type:"text",value:y.familyName,onChange:Z=>Te("familyName",Z.target.value),className:"form-control",placeholder:"הכנס את שם המשפחה"})),B.createElement("div",{className:"col-12"},B.createElement("label",{className:"form-label"},"מיקום בוויז *"),B.createElement("input",{type:"text",value:y.wazeLocation,onChange:Z=>Te("wazeLocation",Z.target.value),className:"form-control mb-3",placeholder:"כתובת מלאה או הדבק קישור מגוגל מפות"}),B.createElement("button",{onClick:I,disabled:w,className:"btn btn-outline-primary mb-3"},w?"מקבל מיקום...":"קבל מיקום נוכחי"),B.createElement("div",{className:"alert alert-info"},B.createElement("strong",{className:"d-block mb-2"},"💡 דרכים לקבל את המיקום שלך:"),B.createElement("ul",{className:"mb-0"},B.createElement("li",null,"פתח גוגל מפות בטלפון → שתף מיקום → העתק קישור"),B.createElement("li",null,"בוויז: לחץ על הבית → שתף → העתק קישור"),B.createElement("li",null,'כתוב כתובת מלאה: "רחוב 123, עיר"'),B.createElement("li",null,"בגוגל: חפש את הכתובת שלך → העתק הקואורדינטות")))),B.createElement("div",{className:"col-12"},B.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},B.createElement("label",{className:"form-label"},"בני המשפחה *"),B.createElement("button",{type:"button",onClick:Ie,className:"btn btn-success btn-sm d-flex align-items-center gap-2"},B.createElement(HE,{size:16}),"הוסף בן משפחה")),y.members.map((Z,z)=>B.createElement("div",{key:z,className:"card mb-3"},B.createElement("div",{className:"card-body"},B.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},B.createElement("div",{className:"d-flex align-items-center gap-2"},B.createElement(Sm,{size:20}),B.createElement("span",{className:"fw-medium"},"בן משפחה ",z+1)),y.members.length>1&&B.createElement("button",{type:"button",onClick:()=>N(z),className:"btn btn-link text-danger p-0"},B.createElement(WE,{size:16}))),B.createElement("div",{className:"row g-3"},B.createElement("div",{className:"col-md-4"},B.createElement("input",{type:"text",value:Z.role,onChange:ne=>ze(z,"role",ne.target.value),className:"form-control",placeholder:"תפקיד (אב/אם/ילד)"})),B.createElement("div",{className:"col-md-4"},B.createElement("input",{type:"text",value:Z.name,onChange:ne=>ze(z,"name",ne.target.value),className:"form-control",placeholder:"שם פרטי"})),B.createElement("div",{className:"col-md-4"},B.createElement("input",{type:"tel",value:Z.phone,onChange:ne=>ze(z,"phone",ne.target.value),className:"form-control",placeholder:"טלפון"}))))))),B.createElement("div",{className:"col-12"},B.createElement("button",{onClick:ge,className:"btn btn-success w-100"},"שלח טופס משפחה"))));if(o==="login"){const Z=lC();return window.recaptchaVerifier||(window.recaptchaVerifier=new hA("sign-in-button",{size:"invisible",callback:z=>{console.log("Recaptcha verified:",z)}},Z)),B.createElement("div",null,"aaa")}return o==="details"&&h?B.createElement("div",null,B.createElement("div",{style:{padding:"20px"}},B.createElement("div",null,B.createElement("div",null,B.createElement("div",{className:"d-flex align-items-center justify-content-between mb-4"},B.createElement("h1",{className:"h3 mb-0"},"משפחת ",h.familyName),B.createElement("div",{className:"d-flex align-items-center gap-3"},D&&B.createElement("button",{onClick:()=>Ke(h.id,h.familyName),className:"btn btn-danger d-flex align-items-center gap-2"},B.createElement(Im,{size:16}),"מחק משפחה"),B.createElement("button",{onClick:()=>u("list"),className:"btn btn-link text-decoration-none d-flex align-items-center gap-2"},B.createElement(wm,{size:20}),"חזור לרשימה"),B.createElement("button",{onClick:()=>u("login")},"ערוך"))),B.createElement("div",{className:"row g-4"},B.createElement("div",{className:"col-12 text-center"},B.createElement("div",{className:"card"},B.createElement("div",{className:"card-body"},B.createElement("div",{className:"avatar-circle bg-primary text-white rounded-circle mx-auto mb-3",style:{padding:"15px 5px",width:"80px",height:"80px",fontSize:"32px"}},B.createElement(Am,{size:45})),B.createElement("h2",{className:"h4 mb-2"},"משפחת ",h.familyName),B.createElement("p",{className:"text-muted"},"נרשם: ",h.submittedAt)))),B.createElement("div",{className:"col-12"},B.createElement("div",{className:"card"},B.createElement("div",{className:"card-body d-flex align-items-center justify-content-between"},B.createElement("div",{className:"d-flex align-items-center gap-3"},B.createElement(Tm,{size:24}),B.createElement("div",null,B.createElement("p",{className:"fw-semibold mb-1"},"מיקום"),B.createElement("p",{className:"text-muted"},h.wazeLocation))),B.createElement("button",{onClick:()=>O(h.wazeLocation),className:"btn btn-primary d-flex align-items-center gap-2"},B.createElement(Tm,{size:16}),"נווט")))),B.createElement("div",{className:"col-12"},B.createElement("h3",{className:"h5 mb-3"},"בני המשפחה"),B.createElement("div",{className:"row row-cols-1 g-4"},h.members.map((Z,z)=>B.createElement("div",{key:z,className:"col"},B.createElement("div",{className:"card"},B.createElement("div",{className:"card-body d-flex align-items-center justify-content-between"},B.createElement("div",{className:"d-flex align-items-center gap-3"},B.createElement("div",{className:"avatar-circle bg-primary-subtle text-primary rounded-circle",style:{padding:"4px 5px",width:"40px",height:"40px",fontSize:"16px"}},B.createElement(Sm,{size:30})),B.createElement("div",null,B.createElement("p",{className:"fw-semibold mb-1"},Z.name||"ללא שם"),B.createElement("p",{className:"text-muted small"},Z.role),Z.phone&&B.createElement("p",{className:"text-muted"},Z.phone)))),Z.phone&&B.createElement("div",{className:"gap-2"},B.createElement("button",{onClick:()=>V(Z.phone),className:"btn btn-success",style:{width:"50%",borderRadius:"0 0 4px"}},B.createElement(BE,{size:16}),B.createElement("span",{style:{marginRight:"5px"}},"ווטסאפ")),B.createElement("button",{onClick:()=>k(Z.phone),className:"btn btn-primary",style:{width:"50%",borderRadius:"0 0 0 4px"}},B.createElement(jE,{size:16}),B.createElement("span",{style:{marginRight:"5px"}},"התקשר"))))))))))))):null};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("worker.js").then(i=>console.log("SW registered:",i)).catch(i=>console.error("SW registration failed:",i))});const hC=ME.createRoot(document.getElementById("app"));hC.render(B.createElement(cC,null));
