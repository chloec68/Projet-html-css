!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="725aeaee-d344-4f17-8e6e-08e48e86055e",e._sentryDebugIdIdentifier="sentry-dbid-725aeaee-d344-4f17-8e6e-08e48e86055e")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9045,6463],{52758:function(e,t,n){"use strict";n.d(t,{G:function(){return s},c:function(){return r}}),n(2935),n(19837),n(27673);var s="_1c8tuf0 _1a81dk51 $inline-block",r="_1c8tuf1 _1a81dk51 $inline-block $ml-10"},97601:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(81026)}])},77110:function(e,t,n){"use strict";n.d(t,{x:function(){return j},u:function(){return g}});var s=n(97458),r=n(7616),a=n(32748),l=n(15881),c=n(64282),i=n(88789),o=n(43096);let u=e=>{let{nextSearch:t}=e;if(!t)return null;let{originalTermResults:n}=t;return n?(0,s.jsx)(m,{}):(0,s.jsx)(d,{})},d=()=>{let{t:e}=(0,a.$G)("regularSearch"),t=(0,o.Jn)("term");return(0,s.jsx)("span",{className:"$sprinkles-text-lg $text-grayOxford",children:e("originalTermNotFound",{keyword:t})})},m=()=>{let e=(0,o.Jn)("term"),t=x(),n=(0,i.Y)("fromQuery",{withPush:!0});return(0,s.jsx)("a",{href:t,className:"$text-blueFreepik $sprinkles-text-lg",onClick:t=>{t.preventDefault(),n(e||"")},children:(0,s.jsx)(a.cC,{i18nKey:"regularSearch:searchForOriginalInstead",values:{keyword:e},components:{1:(0,s.jsx)("strong",{})}})})},x=()=>{let e=(0,r.Dv)(o.lh),t=(0,o.Jn)("term"),n=[...e,[l.FILTERS_NAMES.fromQuery,t]],s=(0,c.E$)(n);return"/search?".concat(s)};var f=n(99753);let h=e=>{let{title:t}=e,{t:n}=(0,a.$G)(["common","regularSearch","iconsSearch","videosSearch"]),r=(0,f.W)(),l=(0,o.Jn)("sort");return(0,s.jsxs)("h1",{className:"$text-grayBayoux $font-normal $text-xl lg:$text-2xl",children:[t||n("common:".concat("recent"===l?"recent":"popular")),(0,s.jsx)($,{page:r})]})},$=e=>{let{page:t}=e,{t:n}=(0,a.$G)("common");return 1===t?null:" - ".concat(n("common:pageNumber",{page:t}))},j=e=>{let{title:t,description:n,nextSearch:r}=e;return(0,s.jsxs)("div",{className:"$flex $flex-col $gap-15 $items-center lg:$items-start",children:[(0,s.jsx)(h,{title:t}),n&&(0,s.jsx)("div",{className:"$text-grayOxford $leading-normal",children:n}),r&&(0,s.jsx)(u,{nextSearch:r})]})};var p=n(97114),v="$flex $flex-row $gap-25 $items-center";let g=()=>(0,s.jsxs)("div",{className:v,children:[(0,s.jsx)(p.O.Rect,{className:"$h-120 $w-150"}),(0,s.jsxs)("div",{className:"$flex $flex-col $gap-20",children:[(0,s.jsx)(p.O.Rect,{className:"$h-20 $w-200"}),(0,s.jsx)(p.O.Rect,{className:"$h-20 $w-150"}),(0,s.jsxs)("div",{className:v,children:[(0,s.jsx)(p.O.Rect,{className:"$h-30 $w-200"}),(0,s.jsx)(p.O.Rect,{className:"$h-30 $w-100"})]})]})]})},53433:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var s=n(97458),r=n(97114);let a=e=>{let{length:t=1,className:n}=e;return Array.from({length:t},(e,t)=>t).map(e=>(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)(r.O.Rect,{style:{height:340},className:"$mb-20 $w-full"}),(0,s.jsx)(r.O.Rect,{className:"$mb-10 $h-20 $w-1/3"}),(0,s.jsx)(r.O.Rect,{className:"$h-15 $w-1/2"})]},e))}},58896:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var s=n(97458);n(27089);let r=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"_19fh5w80 $grid $gap-30",children:t})}},84615:function(e,t,n){"use strict";n.d(t,{A:function(){return o},f:function(){return d}});var s=n(97458),r=n(83410),a=n(50273),l=n(83648),c=n(52983);n(2935),n(77863);var i=(0,n(22319).c)({defaultClassName:"_1bd345n1 _1bd345n0 $flex $gap-10 $items-center $sprinkles-text-sm $border-b-sm $pb-10",variantClassNames:{selected:{true:"$font-semibold $text-grayEbony",false:"$text-grayHoki $border-transparent hover:$border-grayGaysir"},asLink:{true:"_1bd345n4"}},defaultVariants:{},compoundVariants:[]});let o=(0,c.forwardRef)((e,t)=>{let{label:n,icon:r,selected:c=!1,quantity:o,url:d,showQuantity:m=!0,onClick:x,...f}=e,{push:h}=(0,l.useRouter)(),$=u(o);return(0,s.jsxs)("button",{ref:t,className:i({selected:c,asLink:!!d}),...f,onClick:e=>{x&&x(e),d&&h(d)},children:[(0,s.jsx)(a.J,{as:r,size:"sm"})," ",n,m&&(0,s.jsx)("div",{className:"$font-normal $text-grayBayoux $hidden sm:$inline-block",children:$})]})}),u=e=>void 0===e?"-":e<=0?"":(0,r.u)(e),d=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"$flex $gap-40 $w-full lg:$w-auto $justify-center lg:$justify-start",children:t})}},66461:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var s=n(97458),r=n(51028),a=n(92521),l=n(52983);let c=e=>e.nodeType===Node.ELEMENT_NODE,i=e=>{let{children:t,className:n}=e,i=(0,l.useRef)(null);return o(()=>{let e;let t=()=>window.matchMedia("(min-width: ".concat(r.BREAKPOINTS.xs,"px)")).matches,n=i.current;if(!n)return;let s=Array.from(n.children);if(!(null==s?void 0:s.length))return;let a=()=>{let e=t(),r=parseInt(window.getComputedStyle(n).getPropertyValue("grid-row-gap")),a=u(s);a.forEach((t,n)=>{if(!(t.element instanceof HTMLElement)||(t.element.style.marginTop="0",!e))return;let s=d(t.element),l=n-1;for(;l>=0;){let e=a[l];if(c(e.element)&&e.left===t.left){t.element.style.marginTop=-(s-m(e.element)-r)+"px";break}l-=1}})},l=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(a)};return t()&&l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),cancelAnimationFrame(e)}},[t,n]),(0,s.jsx)("div",{ref:i,className:(0,a.m)("$grid $items-start $gap-30 $grid-cols-1 xs:$grid-cols-2 md:$grid-cols-3 xl:$grid-cols-4",n),children:t})},o=l.useLayoutEffect,u=e=>e.map(e=>({element:e,left:e.getBoundingClientRect().left})),d=e=>e.getBoundingClientRect().top+window.scrollY,m=e=>e.getBoundingClientRect().bottom+window.scrollY},23919:function(e,t,n){"use strict";n.d(t,{y:function(){return c}});var s=n(97458),r=n(78364),a=n(43096);n(83727);var l=(0,n(22319).c)({defaultClassName:"_1n8py6t2 $grid $gap-20 xl:$gap-30",variantClassNames:{aspectRatio:{"16:9":"_1n8py6t0","9:16":"_1n8py6t1"}},defaultVariants:{aspectRatio:"16:9"},compoundVariants:[]});let c=e=>{let{className:t,...n}=e,c=(0,a.Jn)("aspectRatio");return(0,s.jsx)("div",{"data-cy":"resource-container",className:(0,r.W)(t,l({aspectRatio:"9:16"===c?"9:16":void 0})),...n})}},19077:function(e,t,n){"use strict";n.d(t,{c:function(){return p}});var s=n(97458),r=n(75348),a=n(64655),l=n(80477),c=n(45784),i=n(7616),o=n(32748),u=n(84615),d=n(15881),m=n(43096);let{format:x}=d.FILTERS_NAMES,{search:f,families:h}=d.FILTERS_VALUES.format,$={animated:"animatedIcons",sticker:"stickers",standard:"icons",uicon:"icons"},j={animated:r.Z,sticker:c.Z,standard:a.Z,uicon:a.Z},p=e=>{var t;let{selected:n="resources",quantity:r}=e,{t:a}=(0,o.$G)("common"),l=g(n),c="author"!==(0,m.Jn)("format"),i=null!==(t=(0,m.Jn)("iconType"))&&void 0!==t?t:"standard",d="standard"===(0,m.Jn)("iconType"),x="resources"===n,f="families"===n,h=x?r:void 0,p=f?r:void 0;return(0,s.jsxs)(u.f,{children:[(0,s.jsx)(u.A,{label:a($[i]),icon:j[i],selected:x,quantity:h,showQuantity:x,url:l}),c&&d&&(0,s.jsx)(v,{selected:n,familiesQuantity:p,isFamiliesSelected:f})]})},v=e=>{let{familiesQuantity:t,isFamiliesSelected:n,selected:r}=e,{t:a}=(0,o.$G)("common"),c=w(r);return(0,s.jsx)(u.A,{label:a("families"),icon:l.Z,selected:n,quantity:t,showQuantity:n,url:c})},g=e=>{let t=(0,i.Dv)(m.lh);if("resources"===e)return;let n=t.filter(e=>{let[t]=e;return t!==x});n.push([x,f]);let s=(0,d.oq)(n);return"/search?".concat((0,d.E$)(s))},w=e=>{let t=(0,i.Dv)(m.lh);if("families"===e)return;let n=t.filter(e=>{let[t]=e;return t!==x});n.push([x,h]);let s=(0,d.oq)(n);return"/search?".concat((0,d.E$)(s))}},15748:function(e,t,n){"use strict";n.d(t,{d:function(){return a}});var s=n(97458),r=n(78364);n(75537);let a=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.W)(t,"_1rimrxt0 $grid xl:$gap-y-20 xl:$gap-x-5 $items-center"),...n})}},55535:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});var s=n(97458),r=n(97114),a=n(92521),l=n(66461);let c=Array.from({length:n(65059).a5},(e,t)=>t),i=e=>{let{className:t}=e;return(0,s.jsx)(l.k,{children:c.map(e=>(0,s.jsx)("div",{className:"$flex $aspect-square $w-full $items-center $justify-center",children:(0,s.jsx)(r.O.Rect,{className:(0,a.m)("$h-full",t)})},e))})}},26463:function(e,t,n){"use strict";n.d(t,{j:function(){return h},e:function(){return f.e}});var s=n(97458),r=n(8490),a=n(70177),l=n(32748),c=n(77110),i=n(84615),o=n(6863),u=n(15881),d=n(43096),m=n(26778),x=n(52758),f=n(55535);let h=()=>{let{t:e}=(0,l.$G)("common"),t=(0,d.Jn)("type"),n=(0,m.tm)(),u=e(t?"common:regularTypeTitle:".concat(t):e("images")),h=$(t);return(0,s.jsx)(o.f,{introContent:n?(0,s.jsx)(c.u,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:x.G}),(0,s.jsx)("div",{className:x.c})]}),infoContent:!n&&(0,s.jsxs)(i.f,{children:[(0,s.jsx)(i.A,{icon:r.Z,label:u}),h&&(0,s.jsx)(i.A,{icon:a.Z,label:e("collections")})]}),children:(0,s.jsx)(f.e,{})})},$=e=>null===e||!u.Mi.has(e)},6863:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var s=n(97458),r=n(26778);n(26196);var a=(0,n(22319).c)({defaultClassName:"_d44wcd1 $flex $justify-between $mb-25 $items-start $gap-20",variantClassNames:{isSearchingByImage:{true:"_d44wcd2",false:"_d44wcd3"}},defaultVariants:{isSearchingByImage:!1},compoundVariants:[]});let l=e=>{let{infoContent:t,introContent:n,children:l}=e,c=(0,r.tm)();return(0,s.jsxs)("div",{className:"$px-20 lg:$px-60 $mt-20 $mb-60 $flex-1 $[contain:layout]",children:[n&&(0,s.jsx)("div",{className:"_d44wcd0 $mb-30 $max-w-screen-lg",children:n}),(0,s.jsx)("div",{className:a({isSearchingByImage:c}),children:t}),l]})}},96166:function(e,t,n){"use strict";n.d(t,{j:function(){return c}});var s=n(97458),r=n(68278),a=n(32748),l=n(84615);let c=e=>{let{quantity:t}=e,{t:n}=(0,a.$G)("common");return(0,s.jsx)(l.f,{children:(0,s.jsx)(l.A,{label:n("video_other"),icon:r.Z,quantity:t})})}},23924:function(e,t,n){"use strict";n.d(t,{D6:function(){return r},De:function(){return c},LH:function(){return l},O3:function(){return a},aV:function(){return o},cT:function(){return u},kr:function(){return i},rC:function(){return d},zT:function(){return m}});var s=n(15303);let r={standard:{premium:["svg"],free:["png"]},animated:{premium:["svg","aep","json"],free:["png","gif","mp4"]},sticker:{premium:["svg"],free:["png"]},uicon:{premium:[],free:["png","svg"]}},a={standard:{primary:"svg",secondary:"png"},animated:{primary:"json",secondary:"gif"},sticker:{primary:"svg",secondary:"png"},uicon:{primary:"svg",secondary:"png"}},l={...a,animated:{primary:"json",secondary:"png"}},c=[512,256,128,64,32,24,16],i=512,o=96,u="".concat(s.p,"/icons/"),d={width:1462,height:820,url:"".concat(u,"meta/icons-meta.png")},m="https://cdn-sprites.flaticon.com/families"},81026:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return em},default:function(){return ed}});var s=n(97458),r=n(34529),a=n(16830),l=n.n(a),c=n(88887),i=n.n(c),o=n(52983),u=n(43369),d=n(56590),m=n(25092),x=n(21188),f=n(26521),h=n(43096),$=n(26778),j=n(61146),p=n(71409),v=n(7616),g=n(24399),w=n(73139);let y=(0,w.xu)(e=>(0,w.n7)((0,g.cn)(async t=>{let n=t((0,h.t6)("author"));if(!n)return null;let s=await fetch("/api/author?id=".concat(n,"&locale=").concat(e));if(!s.ok)throw Error("Invalid response");return await s.json()})));var N=n(18251);let b=()=>{let e=(0,p.ZK)(),t=(0,v.Dv)(y(e)),n="hasData"===t.state&&t.data?t.data.totals:null;(0,N.N)(n)};var _=n(2482),k=n(83648),R=n(11341),O=n(15881),C=n(4074),T=n(70978);let E=e=>{let{searchPath:t}=e,[n,s]=(0,v.KO)(T.pY),r=(0,v.b9)(T.p8),a=(0,o.useMemo)(()=>{let e=(0,O.oq)((0,O.i1)(t));return C.U.get()||(e=e.filter(e=>{let[t]=e;return"img"!==t})),e},[t]);(0,o.useEffect)(()=>{let e=C.U.get(),t=a.some(e=>{let[t,n]=e;return"img"===t&&"1"===n});if(!e||!t){s(void 0),r(void 0);return}let{imageFile:l,searchType:c}=e;n||(s(l),r(c))},[a,s,n,r])},S=e=>e.startsWith("/search")?(0,_.f)(e):null,F=e=>{let{children:t,showSponsor:n=!1}=e,{asPath:r}=(0,k.useRouter)(),a=(0,o.useRef)(S(r)||""),l=(0,o.useMemo)(()=>{let e=S(r);return e&&(a.current=e),a.current},[r]);return E({searchPath:a.current}),(0,s.jsx)(R.G.Provider,{value:{path:l,showSponsor:n},children:t})};var G=n(66787),J=n(20296),P=n(97114),I=n(84684);let A=()=>(0,s.jsxs)("div",{className:I.Qf,children:[(0,s.jsxs)("div",{className:"$flex $items-center $justify-center $gap-10 xl:$justify-start",children:[(0,s.jsx)(P.O.Circle,{className:"$ml-0 $h-60 $w-60 sm:$ml-30 xl:$ml-0"}),(0,s.jsxs)("div",{className:"$block $w-100",children:[(0,s.jsx)(P.O.Rect,{className:"$mb-10 $h-20 $w-100"}),(0,s.jsx)(P.O.Rect,{className:"$h-20 $w-100"})]})]}),(0,s.jsxs)("div",{className:"$flex $flex-wrap $items-center $gap-10",children:[(0,s.jsx)(P.O.Rect,{className:"$h-20 $w-100"}),(0,s.jsx)(P.O.Rect,{className:"$h-20 $w-full"})]}),(0,s.jsxs)("div",{className:"$hidden $w-300 $flex-wrap $items-center $gap-10 sm:$block xl:$w-100",children:[(0,s.jsx)(P.O.Rect,{className:"$mb-10 $ml-150 $h-20 $w-50 xl:$ml-0"}),(0,s.jsx)(P.O.Rect,{className:"$ml-150 $h-20 $w-90 xl:$ml-0"})]}),(0,s.jsxs)("div",{className:"$hidden $w-60 $flex-wrap $items-center $gap-10 xl:$block",children:[(0,s.jsx)(P.O.Rect,{className:"$mb-10 $h-20 $w-50"}),(0,s.jsx)(P.O.Rect,{className:"$h-20 $w-60"})]}),(0,s.jsxs)("div",{className:"$flex $h-60 $w-300 $items-center $justify-center $gap-10 sm:$justify-start xl:$w-300",children:[(0,s.jsx)(P.O.Rect,{className:"$h-35 $w-80"}),(0,s.jsx)(P.O.Rect,{className:"$h-35 $w-80"})]})]}),D=()=>{let{locale:e}=(0,p.Vx)(),t=(0,h.Jn)("format"),n=(0,v.Dv)(y(e));if("author"!==t)return null;if("loading"===n.state)return(0,s.jsx)(A,{});if("hasData"!==n.state||null===n.data)return null;let r=n.data;return(0,s.jsx)(J.G,{author:r})};var V=n(34001),M=n(66531),L=n(26463),B=n(52759),Z=n(79080),q=n(36782);let z=e=>{let{resourceType:t,format:n}=e,r=(0,h.Jn)("type")||t,a=(0,h.Jn)("format")||n;return"collections"===a?(0,s.jsx)(B.P,{}):"icon"===r?(0,s.jsx)(Z.J,{format:a}):"video"===r?(0,s.jsx)(q.J,{}):(0,s.jsx)(L.j,{})},Q=l()(()=>Promise.all([n.e(7092),n.e(6249),n.e(4682),n.e(5788),n.e(8909),n.e(7116),n.e(640),n.e(3590),n.e(2526),n.e(6381),n.e(9025),n.e(2005)]).then(n.bind(n,87809)).then(e=>e.CollectionsSearch),{loadableGenerated:{webpack:()=>[87809]},ssr:!1,loading:()=>(0,s.jsx)(z,{format:"collections"})}),H=l()(()=>Promise.all([n.e(8909),n.e(4498),n.e(7709),n.e(9025),n.e(2281),n.e(6438)]).then(n.bind(n,98029)).then(e=>e.IconSearch),{loadableGenerated:{webpack:()=>[98029]},ssr:!1,loading:()=>(0,s.jsx)(z,{resourceType:"icon"})}),K=l()(()=>Promise.all([n.e(8909),n.e(8745),n.e(8958),n.e(9025),n.e(8372),n.e(8091)]).then(n.bind(n,13817)).then(e=>e.VideoSearch),{loadableGenerated:{webpack:()=>[13817]},ssr:!1,loading:()=>(0,s.jsx)(z,{resourceType:"video"})}),U=l()(()=>Promise.all([n.e(7092),n.e(6249),n.e(8909),n.e(7116),n.e(640),n.e(3590),n.e(9025),n.e(2383),n.e(1340)]).then(n.bind(n,73133)).then(e=>e.RegularSearch),{loadableGenerated:{webpack:()=>[73133]},ssr:!1,loading:()=>(0,s.jsx)(z,{})}),W=()=>{let e=(0,h.Jn)("format"),t=(0,h.Jn)("type");return e===M.O.format.values.collections?(0,s.jsx)(Q,{}):t===M.O.type.values.video?(0,s.jsx)(K,{}):t===M.O.type.values.icon?(0,s.jsx)(H,{}):(0,s.jsx)(U,{resourceType:null!=t?t:void 0})};var X=n(15833);let Y=l()(()=>n.e(6745).then(n.bind(n,6745)).then(e=>e.CollectionsExtraTags),{loadableGenerated:{webpack:()=>[6745]},ssr:!1}),ee=l()(()=>n.e(4807).then(n.bind(n,54807)).then(e=>e.RegularExtraTags),{loadableGenerated:{webpack:()=>[54807]},ssr:!1}),et=l()(()=>n.e(1864).then(n.bind(n,61864)).then(e=>e.VideoExtraTags),{loadableGenerated:{webpack:()=>[61864]},ssr:!1}),en=l()(()=>n.e(2192).then(n.bind(n,72192)).then(e=>e.IconExtraTags),{loadableGenerated:{webpack:()=>[72192]},ssr:!1}),es=()=>{let e=(0,h.Jn)("format"),t=(0,h.Jn)("type");return e===O.FILTERS_CONFIG.format.values.collections?(0,s.jsx)(Y,{}):t===O.FILTERS_CONFIG.type.values.video?(0,s.jsx)(et,{}):t===O.FILTERS_CONFIG.type.values.icon?(0,s.jsx)(en,{}):(0,s.jsx)(ee,{})},er=l()(()=>n.e(2111).then(n.bind(n,92111)).then(e=>e.RelatedTagsBar),{loadableGenerated:{webpack:()=>[92111]}}),ea=e=>{let{format:t,resourceType:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(el,{format:t,resourceType:n}),(0,s.jsx)(X.E,{format:t,resourceType:n})]})},el=e=>{let{format:t,resourceType:n}=e,r="psd"===n||"vector"===n;return"author"!==t?(0,s.jsx)(er,{excludeTag:r?n:void 0,resourceType:null!=n?n:void 0,children:(0,s.jsx)(es,{})}):null},ec=l()(()=>Promise.resolve().then(n.bind(n,63665)).then(e=>e.CampaignBanner),{loadableGenerated:{webpack:()=>[63665]}}),ei=e=>{let{resourceType:t,format:n,showSponsor:a,filterMenuUserPreferences:l}=e;return(0,r.Pu)([[f.zs,null!=l?l:f.cs]]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i(),{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow, noarchive"})}),(0,s.jsx)(F,{showSponsor:a,children:(0,s.jsxs)(eo,{resourceType:t,format:n,children:[(0,s.jsx)(eu,{}),(0,s.jsx)(W,{})]})})]})},eo=e=>{let{children:t,resourceType:n,format:r}=e,a=(0,G.U)(),l=j.h.safeParse(n).success||!n;return(0,$.iC)(n),b(),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.A,{format:r,resourceType:n,hasSearchByImage:l,header:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D,{}),a&&(0,s.jsx)(V.DP,{})]}),topContent:(0,s.jsx)(ea,{format:r,resourceType:n}),children:[(0,s.jsx)(u.t,{}),t]}),a&&(0,s.jsx)(V.DJ,{}),(0,s.jsx)(ec,{location:"search"})]})},eu=()=>{let e=(0,h.Jn)("format"),t=(0,h.Jn)("term"),n=(0,h.Jn)("type"),s=(0,h.Jn)("iconType"),r={content_group:"search",content_group2:(0,x.TJ)("icon"===n?s:n),content_type:"collections"===e?"collections":"na",search_term:t},a=(0,o.useRef)(null),l=(0,o.useCallback)(e=>{var t;return a.current!==e.asPath&&(a.current=e.asPath,(null==e?void 0:null===(t=e.page_location)||void 0===t?void 0:t.includes("/search?"))||!1)},[]);return(0,x.RP)(r,l),null};ei.layout=m.FullLayout;var ed=ei,em=!0},34001:function(e,t,n){"use strict";n.d(t,{DJ:function(){return c},DP:function(){return l},KQ:function(){return i}});var s=n(97458),r=n(67132),a=n(29699);let l=()=>{let e=(0,a.FO)(),t=(0,a.qv)();return(0,s.jsx)(r.Ms,{...e,placement:"srp",isReady:t})},c=()=>{let e=(0,a.FO)();return(0,s.jsx)(r.lr,{...e})},i=e=>{let t=(0,a.FO)();return(0,s.jsx)(r.im,{...t,...e})}},52759:function(e,t,n){"use strict";n.d(t,{P:function(){return m}});var s=n(97458),r=n(8490),a=n(70177),l=n(32748),c=n(53433),i=n(58896),o=n(52758),u=n(84615),d=n(6863);let m=()=>{let{t:e}=(0,l.$G)("common");return(0,s.jsx)(d.f,{introContent:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:o.G}),(0,s.jsx)("div",{className:o.c})]}),infoContent:(0,s.jsxs)(u.f,{children:[(0,s.jsx)(u.A,{icon:r.Z,label:e("images")}),(0,s.jsx)(u.A,{icon:a.Z,label:e("collections"),selected:!0})]}),children:(0,s.jsx)(i.i,{children:(0,s.jsx)(c.X,{length:8})})})}},79080:function(e,t,n){"use strict";n.d(t,{J:function(){return $}});var s=n(97458),r=n(77110),a=n(19077),l=n(6863),c=n(26778);n(2935),n(19837),n(47766),n(38664);var i=n(97114),o=n(92521),u=n(15748);let d=Array.from({length:5},(e,t)=>t),m=Array.from({length:24},(e,t)=>t),x=()=>(0,s.jsx)("div",{className:"$flex $flex-col $gap-20",children:d.map(e=>(0,s.jsxs)("div",{className:"$flex $flex-col $gap-20",children:[(0,s.jsxs)("div",{className:"$flex $flex-col $gap-10",children:[(0,s.jsxs)("div",{className:"$flex $items-end $gap-5",children:[(0,s.jsx)(i.O.Rect,{className:"$h-30 $w-300"}),(0,s.jsx)(i.O.Rect,{className:"$h-20 $w-150"})]}),(0,s.jsx)(i.O.Rect,{className:"$h-20 $w-200"})]}),(0,s.jsx)(u.d,{className:"$flex-1 $overflow-hidden $max-h-[384px] sm:$max-h-[256px] lg:$max-h-[128px]",children:m.map(e=>(0,s.jsx)("div",{className:(0,o.m)("$w-full $aspect-square $flex $items-center $justify-center","_1uapw4u1"),children:(0,s.jsx)(i.O.Rect,{className:"$h-60 $w-60"})},e))}),(0,s.jsx)("div",{className:"$flex $justify-end lg:$hidden",children:(0,s.jsx)(i.O.Rect,{className:"$h-35 $w-150"})}),(0,s.jsx)(i.O.Rect,{className:"$h-1 $w-full"})]},e))}),f=Array.from({length:n(23924).aV},(e,t)=>t),h=()=>(0,s.jsx)(u.d,{children:f.map(e=>(0,s.jsx)("div",{className:"$flex $aspect-square $w-full $items-center $justify-center",children:(0,s.jsx)(i.O.Rect,{className:"$h-60 $w-60"})},e))}),$=e=>{let{introContent:t,format:n="search"}=e,i=(0,c.tm)();return(0,s.jsx)(l.f,{introContent:i?(0,s.jsx)(r.u,{}):t||(0,s.jsx)(j,{}),infoContent:(0,s.jsx)(a.c,{selected:"families"===n?"families":"resources"}),children:"families"===n?(0,s.jsx)(x,{}):(0,s.jsx)(h,{})})},j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"_8u25y30 _1a81dk51 $inline-block"}),(0,s.jsx)("div",{className:"_8u25y31 _1a81dk51 $inline-block $ml-10"})]})},11341:function(e,t,n){"use strict";n.d(t,{G:function(){return s}});let s=(0,n(52983).createContext)(void 0)},66787:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var s=n(29892),r=n(52983),a=n(29699),l=n(11341);let c=e=>a.nh.includes(e),i=()=>{var e,t,n;let a=(0,r.useContext)(l.G);if(c(null!==(t=null===(e=(0,s.N)())||void 0===e?void 0:e.toLowerCase())&&void 0!==t?t:"en"))return!1;if(null==a)throw Error("SearchPathContext is not defined. Please make sure you have added the SearchPathProvider to the root of your app.");return null!==(n=a.showSponsor)&&void 0!==n&&n}},36782:function(e,t,n){"use strict";n.d(t,{J:function(){return u}});var s=n(97458),r=n(92521),a=n(6863),l=n(96166),c=n(23919),i=n(43096);n(63662),n(2935),n(19837),n(72689);let o=Array.from({length:24},(e,t)=>t),u=e=>{let{introContent:t=(0,s.jsx)(d,{})}=e,n=(0,i.Jn)("aspectRatio");return(0,s.jsx)(a.f,{introContent:t,infoContent:(0,s.jsx)(l.j,{}),children:(0,s.jsx)(c.y,{children:o.map(e=>(0,s.jsx)("div",{className:(0,r.m)("$rounded","_1a81dk51 _1wc8gem5","9:16"===n?"$aspect-[9/16]":"$aspect-[16/9]")},e))})})},d=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"_9jflrp1 _1a81dk51 $inline-block"}),(0,s.jsx)("div",{className:"_9jflrp2 _1a81dk51 $inline-block $ml-10"})]})},75348:function(e,t,n){"use strict";var s=n(97458);t.Z=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,s.jsx)("path",{d:"M38.5 202.5c13.8 0 25-11.2 25-25v-96c0-8.3 6.7-15 15-15h85c13.8 0 25-11.2 25-25s-11.2-25-25-25h-85c-35.8 0-65 29.2-65 65v96c0 13.8 11.2 25 25 25M470.5 322.5c-13.8 0-25 11.2-25 25v86c0 8.3-6.7 15-15 15h-86c-13.8 0-25 11.2-25 25s11.2 25 25 25h86c35.8 0 65-29.2 65-65v-86c0-13.8-11.2-25-25-25M163.5 448.5h-85c-8.3 0-15-6.7-15-15v-86c0-13.8-11.2-25-25-25s-25 11.2-25 25v86c0 35.8 29.2 65 65 65h85c13.8 0 25-11.2 25-25s-11.2-25-25-25M498.4 58.1l-88-53C402.7.4 393 .3 385.2 4.8c-7.8 4.4-12.7 12.8-12.7 21.8v106c0 9 4.9 17.3 12.7 21.8 3.8 2.2 8.1 3.2 12.3 3.2 4.5 0 8.9-1.2 12.9-3.6l88-53c7.5-4.5 12.1-12.6 12.1-21.4s-4.6-17-12.1-21.5M322.3 324.9l-7.9-45.8 33.3-32.5c11-10.7 4.9-29.3-10.2-31.5l-46-6.7-20.6-41.7c-6.8-13.7-26.3-13.7-33.1 0l-20.6 41.7-46 6.7c-15.1 2.2-21.2 20.8-10.2 31.5l33.3 32.5-7.9 45.8c-2.6 15.1 13.2 26.6 26.8 19.4l41.2-21.6 41.2 21.6c13.5 7.2 29.3-4.3 26.7-19.4"})})},8490:function(e,t,n){"use strict";var s=n(97458);t.Z=e=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,s.jsx)("path",{d:"M446.5 36h-283c-35.8 0-65 29.2-65 65v33h-33c-35.8 0-65 29.2-65 65v212c0 35.8 29.2 65 65 65h283c35.8 0 65-29.2 65-65v-33h33c35.8 0 65-29.2 65-65V101c0-35.8-29.2-65-65-65m-283 50h283c8.3 0 15 6.7 15 15v212.5l-55.3-56c-4.7-4.8-11.1-7.4-17.8-7.4s-13.1 2.7-17.8 7.5l-25 25.6-95.3-95.7c-4.7-4.7-11.1-7.4-17.7-7.4s-13 2.6-17.7 7.3l-66.3 66.3V101c-.1-8.3 6.6-15 14.9-15m200 325c0 8.3-6.7 15-15 15h-283c-8.3 0-15-6.7-15-15V199c0-8.3 6.7-15 15-15h33v129.5c0 .8 0 1.5.1 2.3 1.5 34.6 30 62.2 64.9 62.2h200z"}),(0,s.jsx)("circle",{cx:361.5,cy:166,r:30})]})},80477:function(e,t,n){"use strict";var s=n(97458);t.Z=e=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,s.jsx)("path",{d:"M123.9 451.397c-1.286 2.265-3.047 5.367-3.812 6.36-14.319 18.615-28.724 29.184-29.567 29.794-8.989 6.212-12.82 17.486-9.577 27.926C84.193 525.934 93.954 533 104.904 533h70c33.084 0 60-26.916 60-60s-26.916-60-60-60c-29.201 0-43.383 24.978-51.004 38.397m331.345-273.498c-9.997-9.523-25.819-9.141-35.346.855l-196.853 206.62a100.76 100.76 0 0 1 36.403 34.278l196.652-206.407c9.523-9.997 9.14-25.821-.856-35.346"}),(0,s.jsx)("path",{d:"M393 337.465V558c0 8.271-6.729 15-15 15H16c-8.271 0-15-6.729-15-15s6.729-15 15-15c13.807 0 25-11.193 25-25V271h235.767l47.636-50H41v-25c0-13.807-11.193-25-25-25-35.841 0-65 29.159-65 65v322c0 35.409 28.465 64.276 63.712 64.968q.64.032 1.288.032h362c35.841 0 65-29.159 65-65V286c0-.332-.02-.658-.025-.989z"})]})},45784:function(e,t,n){"use strict";var s=n(97458);t.Z=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,s.jsx)("path",{d:"M437.5 74.9c-48.4-48.4-112.6-75-181-75s-132.7 26.6-181 75c-48.4 48.4-75 112.6-75 181s26.6 132.7 75 181c48.4 48.4 112.6 75 181 75 6.6 0 13-2.6 17.7-7.3l231-231c4.7-4.7 7.3-11 7.3-17.7 0-68.4-26.6-132.7-75-181m-387 181c0-113.6 92.4-206 206-206 95.7 0 176.4 65.6 199.4 154.2-1.1-.2-2.2-.2-3.4-.2-67.6 0-131.1 26.3-178.9 74.1-47.1 47.1-73.3 109.4-74.1 175.9-85.9-24.8-149-104.2-149-198m198.9 202.7c0-.6.1-1.1.1-1.7 0-111.9 91.1-203 203-203 .6 0 1.1 0 1.7-.1z"})})},27089:function(){},83727:function(){},75537:function(){},27673:function(){},26196:function(){},47766:function(){},38664:function(){},72689:function(){},19837:function(){}},function(e){e.O(0,[236,381,6273,5757,5450,1516,9378,1116,8780,8870,7408,7601,8872,6177,5229,4853,8357,5059,9414,6483,8010,9518,656,125,3226,4831,2888,9774,179],function(){return e(e.s=97601)}),_N_E=e.O()}]);