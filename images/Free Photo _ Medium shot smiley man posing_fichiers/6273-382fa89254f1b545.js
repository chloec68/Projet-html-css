!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8142770e-74ff-4539-ba93-67df6f8685b7",e._sentryDebugIdIdentifier="sentry-dbid-8142770e-74ff-4539-ba93-67df6f8685b7")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6273],{50726:function(e,t,n){"use strict";n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},c=0,u=function(e){return e&&(e.host||u(e.parentNode))},i=function(e,t,n,i){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],s=[],f=new Set,p=new Set(l),v=function(e){!e||f.has(e)||(f.add(e),v(e.parentNode))};l.forEach(v);var m=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(i),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,u=(d.get(e)||0)+1;r.set(e,c),d.set(e,u),s.push(e),1===c&&a&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(i,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),c++,function(){s.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(i),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),i(r,o,n,"aria-hidden")):function(){return null}}},53043:function(){},83669:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var r,o,a,c,u,i,l=n(43112),d=n(52983),s="right-scroll-bar-position",f="width-before-scroll-bar";function p(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var v="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,m=new WeakMap,h=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),a=[],c=!1,u={read:function(){if(c)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=o(e,c);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(c=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){c=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=(0,l.pi)({async:!0,ssr:!1},r),u),g=function(){},y=d.forwardRef(function(e,t){var n,r,o,a,c=d.useRef(null),u=d.useState({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:g}),i=u[0],s=u[1],f=e.forwardProps,y=e.children,E=e.className,b=e.removeScrollBar,w=e.enabled,C=e.shards,R=e.sideCar,S=e.noIsolation,M=e.inert,D=e.allowPinchZoom,k=e.as,A=(0,l._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),_=(n=[c,t],r=function(e){return n.forEach(function(t){return p(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,v(function(){var e=m.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||p(e,null)}),r.forEach(function(e){t.has(e)||p(e,o)})}m.set(a,n)},[n]),a),T=(0,l.pi)((0,l.pi)({},A),i);return d.createElement(d.Fragment,null,w&&d.createElement(R,{sideCar:h,removeScrollBar:b,shards:C,noIsolation:S,inert:M,setCallbacks:s,allowPinchZoom:!!D,lockRef:c}),f?d.cloneElement(d.Children.only(y),(0,l.pi)((0,l.pi)({},T),{ref:_})):d.createElement(void 0===k?"div":k,(0,l.pi)({},T,{className:E,ref:_}),y))});y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},y.classNames={fullWidth:f,zeroRight:s};var E=function(e){var t=e.sideCar,n=(0,l._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,(0,l.pi)({},n))};E.isSideCarExport=!0;var b=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=i||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},w=function(){var e=b();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},C=function(){var e=w();return function(t){return e(t.styles,t.dynamic),null}},R={left:0,top:0,right:0,gap:0},S=function(e){return parseInt(e||"",10)||0},M=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[S(n),S(r),S(o)]},D=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return R;var t=M(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},k=C(),A="data-scroll-locked",_=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(A,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(s," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(f," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(s," .").concat(s," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(A,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},T=function(){var e=parseInt(document.body.getAttribute(A)||"0",10);return isFinite(e)?e:0},O=function(){d.useEffect(function(){return document.body.setAttribute(A,(T()+1).toString()),function(){var e=T()-1;e<=0?document.body.removeAttribute(A):document.body.setAttribute(A,e.toString())}},[])},I=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;O();var a=d.useMemo(function(){return D(o)},[o]);return d.createElement(k,{styles:_(a,!t,o,n?"":"!important")})},N=!1;if("undefined"!=typeof window)try{var L=Object.defineProperty({},"passive",{get:function(){return N=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch(e){N=!1}var P=!!N&&{passive:!1},x=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},F=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),W(e,n)){var r=Z(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},W=function(e,t){return"v"===e?x(t,"overflowY"):x(t,"overflowX")},Z=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},j=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=c*r,i=n.target,l=t.contains(i),d=!1,s=u>0,f=0,p=0;do{var v=Z(e,i),m=v[0],h=v[1]-v[2]-c*m;(m||h)&&W(e,i)&&(f+=h,p+=m),i=i.parentNode}while(!l&&i!==document.body||l&&(t.contains(i)||t===i));return s&&(o&&0===f||!o&&u>f)?d=!0:!s&&(o&&0===p||!o&&-u>p)&&(d=!0),d},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},K=function(e){return[e.deltaX,e.deltaY]},X=function(e){return e&&"current"in e?e.current:e},Y=0,z=[],V=(h.useMedium(function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(Y++)[0],a=d.useState(function(){return C()})[0],c=d.useRef(e);d.useEffect(function(){c.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,l.ev)([e.lockRef.current],(e.shards||[]).map(X),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,a=B(e),u=n.current,i="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],d=e.target,s=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=F(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=F(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||l)&&(r.current=o),!o)return!0;var p=r.current||o;return j(p,t,e,"h"===p?i:l,!0)},[]),i=d.useCallback(function(e){if(z.length&&z[z.length-1]===a){var n="deltaY"in e?K(e):B(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(X).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=d.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),f=d.useCallback(function(e){n.current=B(e),r.current=void 0},[]),p=d.useCallback(function(t){s(t.type,K(t),t.target,u(t,e.lockRef.current))},[]),v=d.useCallback(function(t){s(t.type,B(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return z.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",i,P),document.addEventListener("touchmove",i,P),document.addEventListener("touchstart",f,P),function(){z=z.filter(function(e){return e!==a}),document.removeEventListener("wheel",i,P),document.removeEventListener("touchmove",i,P),document.removeEventListener("touchstart",f,P)}},[]);var m=e.removeScrollBar,h=e.inert;return d.createElement(d.Fragment,null,h?d.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?d.createElement(I,{gapMode:"margin"}):null)}),E),H=d.forwardRef(function(e,t){return d.createElement(y,(0,l.pi)({},e,{ref:t,sideCar:V}))});H.classNames=y.classNames;var U=H},66827:function(e,t,n){"use strict";n.d(t,{VY:function(){return Y},aV:function(){return X},fC:function(){return j},h_:function(){return K},x8:function(){return z},xz:function(){return B}});var r=n(24552),o=n(52983),a=n(12527),c=n(81213),u=n(62331),i=n(74009),l=n(23196),d=n(56368),s=n(3636),f=n(74077),p=n(88702),v=n(37956),m=n(29520),h=n(83669),g=n(50726),y=n(96782);let E="Dialog",[b,w]=(0,u.b)(E),[C,R]=b(E),S=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,i=R("DialogTrigger",n),l=(0,c.e)(t,i.triggerRef);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":F(i.open)},u,{ref:l,onClick:(0,a.M)(e.onClick,i.onOpenToggle)}))}),M="DialogPortal",[D,k]=b(M,{forceMount:void 0}),A="DialogOverlay",_=(0,o.forwardRef)((e,t)=>{let n=k(A,e.__scopeDialog),{forceMount:a=n.forceMount,...c}=e,u=R(A,e.__scopeDialog);return u.modal?(0,o.createElement)(p.z,{present:a||u.open},(0,o.createElement)(T,(0,r.Z)({},c,{ref:t}))):null}),T=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,c=R(A,n);return(0,o.createElement)(h.Z,{as:y.g7,allowPinchZoom:!0,shards:[c.contentRef]},(0,o.createElement)(v.WV.div,(0,r.Z)({"data-state":F(c.open)},a,{ref:t,style:{pointerEvents:"auto",...a.style}})))}),O="DialogContent",I=(0,o.forwardRef)((e,t)=>{let n=k(O,e.__scopeDialog),{forceMount:a=n.forceMount,...c}=e,u=R(O,e.__scopeDialog);return(0,o.createElement)(p.z,{present:a||u.open},u.modal?(0,o.createElement)(N,(0,r.Z)({},c,{ref:t})):(0,o.createElement)(L,(0,r.Z)({},c,{ref:t})))}),N=(0,o.forwardRef)((e,t)=>{let n=R(O,e.__scopeDialog),u=(0,o.useRef)(null),i=(0,c.e)(t,n.contentRef,u);return(0,o.useEffect)(()=>{let e=u.current;if(e)return(0,g.Ry)(e)},[]),(0,o.createElement)(P,(0,r.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault())}))}),L=(0,o.forwardRef)((e,t)=>{let n=R(O,e.__scopeDialog),a=(0,o.useRef)(!1),c=(0,o.useRef)(!1);return(0,o.createElement)(P,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),a.current=!1,c.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(c.current=!0));let u=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&c.current&&t.preventDefault()}}))}),P=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:u,onCloseAutoFocus:i,...l}=e,f=R(O,n),p=(0,o.useRef)(null),v=(0,c.e)(t,p);return(0,m.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:u,onUnmountAutoFocus:i},(0,o.createElement)(d.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":F(f.open)},l,{ref:v,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),x=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...c}=e,u=R("DialogClose",n);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button"},c,{ref:t,onClick:(0,a.M)(e.onClick,()=>u.onOpenChange(!1))}))});function F(e){return e?"open":"closed"}let[W,Z]=(0,u.k)("DialogTitleWarning",{contentName:O,titleName:"DialogTitle",docsSlug:"dialog"}),j=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:c,modal:u=!0}=e,d=(0,o.useRef)(null),s=(0,o.useRef)(null),[f=!1,p]=(0,l.T)({prop:r,defaultProp:a,onChange:c});return(0,o.createElement)(C,{scope:t,triggerRef:d,contentRef:s,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:f,onOpenChange:p,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},B=S,K=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,c=R(M,t);return(0,o.createElement)(D,{scope:t,forceMount:n},o.Children.map(r,e=>(0,o.createElement)(p.z,{present:n||c.open},(0,o.createElement)(f.h,{asChild:!0,container:a},e))))},X=_,Y=I,z=x},29520:function(e,t,n){"use strict";n.d(t,{EW:function(){return a}});var r=n(52983);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},3636:function(e,t,n){"use strict";let r;n.d(t,{M:function(){return f}});var o=n(24552),a=n(52983),c=n(81213),u=n(37956),i=n(91109);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[E,b]=(0,a.useState)(null),w=(0,i.W)(f),C=(0,i.W)(g),R=(0,a.useRef)(null),S=(0,c.e)(t,e=>b(e)),M=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(M.paused||!E)return;let t=e.target;E.contains(t)?R.current=t:m(R.current,{select:!0})}function t(e){if(M.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(R.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,M.paused]),(0,a.useEffect)(()=>{if(E){h.add(M);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,s);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(p(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(d,s);E.addEventListener(d,C),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(d,C),h.remove(M)},0)}}},[E,w,C,M]);let D=(0,a.useCallback)(e=>{if(!n&&!r||M.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=p(e);return[v(t,e),v(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,M.paused]);return(0,a.createElement)(u.WV.div,(0,o.Z)({tabIndex:-1},y,{ref:S,onKeyDown:D}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},43112:function(e,t,n){"use strict";n.d(t,{_T:function(){return o},ev:function(){return c},gn:function(){return a},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n,r){var o,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c}function c(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);