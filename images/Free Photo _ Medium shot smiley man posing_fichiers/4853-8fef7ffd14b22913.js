!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b8695a5d-c2c6-45eb-95b7-cfc8572b7d6a",e._sentryDebugIdIdentifier="sentry-dbid-b8695a5d-c2c6-45eb-95b7-cfc8572b7d6a")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4853],{17417:function(e,n,t){t.d(n,{FN:function(){return p},VW:function(){return M},x_:function(){return o}});var r=t(52983);let i=(0,r.createContext)(void 0),s=(0,r.createContext)(void 0),u=()=>{let e=(0,r.useContext)(i);if(void 0===e)throw Error("useToastItem must be used within a ToastProvider");return e},o=()=>{let e=(0,r.useContext)(s);if(void 0===e)throw Error("useToastActions must be used within a ToastProvider");return e};var a=t(97458),c=t(11539),l=t(83598),d=t(58785),f=t(40165),v=t(50273),m=t(73418);t(2935),t(35156);var h=(0,t(22319).c)({defaultClassName:"_y2mn0v4 _y2mn0v3 $text-white $rounded-full $grid $justify-center $items-center",variantClassNames:{type:{danger:"$bg-redBloody",info:"$bg-blueFreepik",success:"$bg-greenFlaticon",warning:"$bg-yellowPremium"}},defaultVariants:{type:"danger"},compoundVariants:[]});let g={danger:d.Z,warning:d.Z,success:f.Z,info:f.Z},p=()=>{var e;let n=u(),{closeToast:t}=o();return(0,a.jsxs)(c.zt,{children:[(0,a.jsx)(c.fC,{open:!!n,onOpenChange:e=>{e||t()},duration:null!==(e=null==n?void 0:n.duration)&&void 0!==e?e:5e3,children:(0,a.jsx)(x,{item:n})}),(0,a.jsx)(c.l_,{})]})},x=e=>{let{item:n}=e;if(!n)return null;let{type:t,title:r,message:i,testId:s}=n;return(0,a.jsxs)("div",{className:"_y2mn0v0 $fixed $z-3 $right-20 $bg-white $py-10 $pl-15 $pr-50 $shadow-[0_0_60px_rgba(34,_34,_34,_0.25)] $rounded-sm $sprinkles-text-sm $text-grayOxford $max-w-320 $flex $gap-10","data-cy":s,children:[(0,a.jsx)(y,{type:t}),(0,a.jsxs)("div",{className:"$flex $flex-col $justify-center",children:[(0,a.jsx)(c.Dx,{asChild:!0,children:r&&(0,a.jsx)("h4",{className:"_y2mn0v1",children:r})}),(0,a.jsx)(c.dk,{asChild:!0,children:(0,a.jsx)("div",{className:"_y2mn0v2 $font-semibold",children:i})})]}),(0,a.jsx)(c.x8,{asChild:!0,children:(0,a.jsxs)("button",{className:"$absolute $top-5 $right-5 $flex $items-center $justify-center $p-10 $rounded-sm hover:$bg-grayMystic","aria-label":"Close",children:[(0,a.jsx)(v.J,{as:l.Z,size:"base"}),(0,a.jsx)(m.T,{children:"close"})]})})]})},y=e=>{let{type:n="warning"}=e;return(0,a.jsx)("div",{className:h({type:n}),children:(0,a.jsx)(v.J,{as:g[n],size:"sm"})})},M=e=>{let{children:n,baseItem:t={type:"warning",message:"unknown"}}=e,[u,o]=(0,r.useState)(null),{type:c,message:l,duration:d,testId:f,title:v}=t,m=(0,r.useMemo)(()=>({openToast:e=>{o(null!=e?e:{type:c,message:l,duration:d,testId:f,title:v})},closeToast:()=>{o(null)}}),[d,l,f,v,c]);return(0,a.jsx)(i.Provider,{value:u,children:(0,a.jsx)(s.Provider,{value:m,children:n})})}},40165:function(e,n,t){var r=t(97458);n.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M207 653c-68.38 0-132.667-26.629-181.02-74.98C-22.371 529.667-49 465.38-49 397s26.629-132.667 74.98-181.02C74.333 167.629 138.62 141 207 141s132.667 26.629 181.02 74.98C436.371 264.333 463 328.62 463 397s-26.629 132.667-74.98 181.02C339.667 626.371 275.38 653 207 653m0-462C93.411 191 1 283.411 1 397s92.411 206 206 206 206-92.411 206-206-92.411-206-206-206"}),(0,r.jsx)("path",{d:"M217 543c-13.807 0-25-11.193-25-25V391h-25c-13.807 0-25-11.193-25-25s11.193-25 25-25h50c13.807 0 25 11.193 25 25v152c0 13.807-11.193 25-25 25m-10-232c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30"})]})},8156:function(e,n,t){t.d(n,{AV:function(){return v},zV:function(){return h},w5:function(){return m}});var r=t(51028);let i=e=>e.endsWith("px")?parseFloat(e):e.endsWith("rem")?16*parseFloat(e):0,s={min:e=>"screen and (min-width: ".concat(e,")"),max:e=>"screen and (max-width: ".concat(i(e)-1,"px)")},u=(e,n)=>{let t=s[n];return Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})},o=e=>n=>Object.keys(n).reduce((t,r)=>(t[String(r)]=e(n[r]),t),{}),a=o(r.Vj),c=["r","g","b"],l=e=>{if("r"in e&&"g"in e&&"b"in e){let{r:n,g:t,b:r}=e;return"".concat(n,", ").concat(t,", ").concat(r)}throw Error("Invalid source color: ".concat(JSON.stringify(e)))},d=o(e=>{if("object"==typeof e)return l(e);let n=e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);if(n)return l(n.slice(1).reduce((e,n,t)=>(e[c[t]]=parseInt(n,16),e),{}));let t=e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);if(t)return l(t.slice(1).reduce((e,n,t)=>(e[c[t]]=17*parseInt(n,16),e),{}));throw Error("Invalid source color: ".concat(e))}),f=o(e=>"".concat(e)),v=a(r.BREAKPOINTS),m=u(v,"min"),h=u(v,"max");a(r.fo),r.M8,r.go,d(r.DM),r.Lj,r.Lh,a(r.um),f(r.Xw),f(r.HE),f(r.AQ),a(r.OU),a(r.RV),r.yu,r.hm,f(r.IF)},66287:function(e,n,t){t.d(n,{a:function(){return r.a}});var r=t(89002)},89002:function(e,n,t){t.d(n,{a:function(){return d}});var r=t(52983),i=t(8156);let s=[...Object.keys(i.w5),...Object.keys(i.zV).map(e=>"".concat(e,"Max"))],u={min:i.w5,max:i.zV},o=e=>"string"==typeof e?{query:e}:e,a=e=>{let n=o(e);if(!n.custom&&s.includes(n.query)){let e=n.query,t="Max"===e.slice(-3)?"max":"min",r="max"===t?e.slice(0,-3):e;return{...n,query:u[t][r]}}return n},c=e=>(0,r.useCallback)(n=>{let t=window.matchMedia(e);return"function"==typeof t.addEventListener?t.addEventListener("change",n):"function"==typeof t.addListener&&t.addListener(n),()=>{"function"==typeof t.removeEventListener?t.removeEventListener("change",n):"function"==typeof t.removeListener&&t.removeListener(n)}},[e]),l=e=>{let{query:n,ssrDefaultValue:t}=e,i=c(n);return(0,r.useSyncExternalStore)(i,()=>window.matchMedia(n).matches,()=>t)},d=e=>{let{query:n,onChange:t,onEnter:i,onExit:s,ssrDefaultValue:u=!1}=a(e),o=l({query:n,ssrDefaultValue:u}),c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{c.current!==o&&(c.current=o,t&&t(o),i&&o&&i(),s&&!o&&s())},[o,t,i,s]),o}},37904:function(e,n,t){t.d(n,{E7:function(){return r.E},HI:function(){return o.H},Lh:function(){return a.L},Q9:function(){return s.Q},RI:function(){return l.R},_7:function(){return i._},hr:function(){return c.h},j7:function(){return u.j}});var r=t(59398),i=t(45123);t(9950),t(48496);var s=t(41286),u=t(92942),o=t(78510),a=t(72833),c=t(35074),l=t(93176)},59398:function(e,n,t){t.d(n,{E:function(){return u}});var r=t(52983),i=t(11032),s=t(48496);let u=()=>{let e=(0,s.t)();return(0,r.useCallback)(n=>{e({walletId:n,product:"ANONYMOUS",status:"active",creditsAvailable:0,totalCreditsOfPlan:0,spendPerTool:{removeBackground:0,iconGeneration:0,iconGenerationSvgDownload:0},creditsAddonsAvailable:0,totalCreditsAvailable:0}),i.f.update({wallet_id:n})},[e])}},45123:function(e,n,t){t.d(n,{_:function(){return a}});var r=t(52983),i=t(93827),s=t(42011),u=t(9950),o=t(72833);let a=()=>{let e=(0,u.n)(),n=(0,o.L)(),t=(0,s.d)(),a=(0,i.K)();return(0,r.useMemo)(()=>!!a&&(e&&!t||!!n),[e,a,t,n])}},9950:function(e,n,t){t.d(n,{n:function(){return o}});var r=t(52983),i=t(65261),s=t(29892);let u=["AD","AE","AL","AO","AT","AX","BA","BE","BF","BG","BH","BI","BJ","BW","CD","CF","CG","CH","CI","CM","CV","CY","CZ","DE","DJ","DK","DZ","EE","EH","ER","ES","ET","FI","FO","FR","GA","GB","GG","GH","GI","GL","GM","GN","GQ","GR","GW","HR","HU","IE","IL","IM","IS","IT","JE","KE","KM","KW","LI","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MK","ML","MR","MT","MU","MW","MZ","NA","NE","NG","NL","NO","PL","PT","QA","RE","RO","RS","RW","SA","SC","SE","SH","SI","SJ","SK","SL","SM","SN","SO","ST","SZ","TD","TF","TG","TN","TZ","UA","UG","VA","XK","YT","ZA","ZM","ZW"],o=()=>{let e=(0,s.N)(),n=(0,i.Kg)();return(0,r.useMemo)(()=>n&&e&&u.length>0&&u.includes(e),[e,n])}},92942:function(e,n,t){t.d(n,{j:function(){return l}});var r=t(78510),i=t(35074),s=t(93176);let u="/pricing?origin=freepik_web",o="/profile/my_subscriptions",a="".concat(o,"?upgrade=plan"),c="".concat(o,"?upgrade=frequency"),l=()=>{let e=(0,r.H)(),{isFree:n,isPremiumPlusMonthly:t,isPremiumPlusAnnual:l}=(0,i.h)(),{isActive:d}=(0,s.R)();return e?n?u:d?l?"/profile/support":t?c:a:o:u}},78510:function(e,n,t){t.d(n,{H:function(){return s}});var r=t(7616),i=t(21595);let s=()=>(0,r.Dv)(i.Qq)},72833:function(e,n,t){t.d(n,{L:function(){return s}});var r=t(7616),i=t(21595);let s=()=>(0,r.Dv)(i.Nf)},35074:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(7616),i=t(52983),s=t(61647),u=t(21595);let o=()=>{let e=(0,r.Dv)(u._5),n=e===s.HG["BASIC-M"],t=e===s.HG["BASIC-Y"],o=e===s.HG["PREMIUMT-M"],a=e===s.HG["PREMIUMT-Y"],c=e===s.HG["MAGNIFIC-M"],l=e===s.HG["MAGNIFIC-Y"],d=o||a,f=c||l;return(0,i.useMemo)(()=>({isAnonymous:e===s.HG.ANONYMOUS,isFree:e===s.HG.REGISTERED,isBasicMonthly:n,isBasicAnnual:t,isBasic:n||t,isPremiumTMonthly:o,isPremiumTAnnual:a,isPremiumT:d,isPremiumPlusMonthly:c,isPremiumPlusAnnual:l,isPremiumPlus:f,isPremium:d||f}),[e,n,t,o,a,d,c,l,f])}},93176:function(e,n,t){t.d(n,{R:function(){return o}});var r=t(7616),i=t(52983),s=t(61647),u=t(21595);let o=()=>{let e=(0,r.Dv)(u.O7);return(0,i.useMemo)(()=>({isActive:e===s.dM.ACTIVE,isUnpaid:e===s.dM.UNPAID,isFrozen:e===s.dM.FROZEN,isCancelled:e===s.dM.CANCELLED}),[e])}},87539:function(e,n,t){t.d(n,{A:function(){return s}});var r=t(7616),i=t(41843);let s=()=>(0,r.Dv)(i.nF)},83272:function(e,n,t){t.d(n,{I:function(){return s}});var r=t(7616),i=t(41843);let s=()=>(0,r.Dv)(i.DW)},42011:function(e,n,t){t.d(n,{d:function(){return s}});var r=t(7616),i=t(41843);let s=()=>!!(0,r.Dv)(i.PQ)},37538:function(e,n,t){t.d(n,{K:function(){return i}});let r="tracker-uuid",i=(()=>{let e=function(){try{let e="__storage_test__";return sessionStorage.setItem(e,"test"),sessionStorage.removeItem(e),!0}catch(e){return!1}}();return{get:()=>e?sessionStorage.getItem(r):null,set:n=>{e&&sessionStorage.setItem(r,n)}}})()},2482:function(e,n,t){t.d(n,{f:function(){return r}});let r=e=>e.split("#")[0]}}]);