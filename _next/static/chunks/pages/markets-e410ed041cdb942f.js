(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{27561:function(e,t,r){var n=r(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:function(e,t,r){var n=r(13218),i=r(7771),s=r(14841),o=Math.max,a=Math.min;e.exports=function(e,t,r){var l,c,u,d,x,h,p=0,m=!1,b=!1,j=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=l,n=c;return l=c=void 0,p=t,d=e.apply(n,r)}function v(e){return p=e,x=setTimeout(g,t),m?f(e):d}function y(e){var r=e-h;return void 0===h||r>=t||r<0||b&&e-p>=u}function g(){var e=i();if(y(e))return w(e);x=setTimeout(g,function(e){var r=t-(e-h);return b?a(r,u-(e-p)):r}(e))}function w(e){return x=void 0,j&&l?f(e):(l=c=void 0,d)}function Z(){var e=i(),r=y(e);if(l=arguments,c=this,h=e,r){if(void 0===x)return v(h);if(b)return clearTimeout(x),x=setTimeout(g,t),f(h)}return void 0===x&&(x=setTimeout(g,t)),d}return t=s(t)||0,n(r)&&(m=!!r.leading,u=(b="maxWait"in r)?o(s(r.maxWait)||0,t):u,j="trailing"in r?!!r.trailing:j),Z.cancel=function(){void 0!==x&&clearTimeout(x),p=0,l=h=c=x=void 0},Z.flush=function(){return void 0===x?d:w(i())},Z}},33448:function(e,t,r){var n=r(44239),i=r(37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(55639);e.exports=function(){return n.Date.now()}},14841:function(e,t,r){var n=r(27561),i=r(13218),s=r(33448),o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=a.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):o.test(e)?NaN:+e}},75283:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return me}});var n=r(15446),i=r(17667),s=r(59499),o=r(49501),a=r(80854),l=r(62097),c=r(61225),u=r(30120),d=r(29630),x=r(67294),h=r(45556),p=r(13850),m=r(68861),b=r(19952),j=r(28480),f=r(14795),v=r(46839),y=r(46930),g=r(7775),w=r(14379),Z=r(45884),O=r(99435),D=r(1475),P=r(36864),C=r(75084),A=r(11163),S=r(39900),k=r(42115),L=r(14463),E=r(19547),B=r(52906),_=r(35161),V=r(32383),T=r(41024),M=r(2180),W=r(85893),N=function(e){var t=(0,P.Z)({},e),r=(0,A.useRouter)(),n=(0,y.f)().currentMarket;return(0,W.jsxs)(V.H,{px:6,minHeight:76,onClick:function(){return r.push(m.Z6.reserveOverview(t.underlyingAsset,n))},sx:{cursor:"pointer"},button:!0,"data-cy":"marketListItemListItem_".concat(t.symbol.toUpperCase()),children:[(0,W.jsxs)(Z.h,{isRow:!0,maxWidth:280,children:[(0,W.jsx)(M.T1,{symbol:t.iconSymbol,fontSize:"large"}),(0,W.jsxs)(u.Z,{sx:{pl:3.5,overflow:"hidden"},children:[(0,W.jsx)(d.Z,{variant:"h4",noWrap:!0,children:t.name}),(0,W.jsx)(u.Z,{sx:{p:{xs:"0",xsm:"3.625px 0px"}},children:(0,W.jsx)(d.Z,{variant:"subheader2",color:"text.muted",noWrap:!0,children:t.symbol})})]}),"AMPL"===t.symbol&&(0,W.jsx)(_.$,{}),"renFIL"===t.symbol&&(0,W.jsx)(k.F,{}),"BUSD"===t.symbol&&(0,W.jsx)(S.t,{})]}),(0,W.jsxs)(Z.h,{children:[(0,W.jsx)(T.B,{compact:!0,value:t.totalLiquidity,variant:"main16"}),(0,W.jsx)(E.i,{value:t.totalLiquidityUSD})]}),(0,W.jsx)(Z.h,{children:(0,W.jsx)(B.J,{value:t.supplyAPY,incentives:t.aIncentivesData||[],symbol:t.symbol,variant:"main16",symbolsVariant:"secondary16"})}),(0,W.jsx)(Z.h,{children:t.borrowingEnabled||Number(t.totalDebt)>0?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(T.B,{compact:!0,value:t.totalDebt,variant:"main16"})," ",(0,W.jsx)(E.i,{value:t.totalDebtUSD})]}):(0,W.jsx)(L.J,{variant:"secondary14",color:"text.secondary"})}),(0,W.jsxs)(Z.h,{children:[(0,W.jsx)(B.J,{value:Number(t.totalVariableDebtUSD)>0?t.variableBorrowAPY:"-1",incentives:t.vIncentivesData||[],symbol:t.symbol,variant:"main16",symbolsVariant:"secondary16"}),!t.borrowingEnabled&&Number(t.totalVariableDebt)>0&&!t.isFrozen&&(0,W.jsx)(E.i,{value:"Disabled"})]}),(0,W.jsxs)(Z.h,{children:[(0,W.jsx)(B.J,{value:Number(t.totalStableDebtUSD)>0?t.stableBorrowAPY:"-1",incentives:t.sIncentivesData||[],symbol:t.symbol,variant:"main16",symbolsVariant:"secondary16"}),!t.borrowingEnabled&&Number(t.totalStableDebt)>0&&!t.isFrozen&&(0,W.jsx)(E.i,{value:"Disabled"})]}),(0,W.jsx)(Z.h,{maxWidth:95,minWidth:95,align:"right",children:(0,W.jsx)(C.Z,{variant:"outlined",component:m.rU,href:m.Z6.reserveOverview(t.underlyingAsset,n),children:(0,W.jsx)(o.cC,{id:"Details"})})})]})},U=r(91655),F=function(){return(0,W.jsxs)(V.H,{px:6,minHeight:76,children:[(0,W.jsxs)(Z.h,{isRow:!0,maxWidth:280,children:[(0,W.jsx)(U.Z,{variant:"circular",width:32,height:32}),(0,W.jsx)(u.Z,{sx:{pl:3.5,overflow:"hidden"},children:(0,W.jsx)(U.Z,{width:75,height:24})})]}),(0,W.jsx)(Z.h,{children:(0,W.jsx)(U.Z,{width:70,height:24})}),(0,W.jsx)(Z.h,{children:(0,W.jsx)(U.Z,{width:70,height:24})}),(0,W.jsx)(Z.h,{children:(0,W.jsx)(U.Z,{width:70,height:24})}),(0,W.jsx)(Z.h,{children:(0,W.jsx)(U.Z,{width:70,height:24})}),(0,W.jsx)(Z.h,{children:(0,W.jsx)(U.Z,{width:70,height:24})}),(0,W.jsx)(Z.h,{maxWidth:95,minWidth:95,align:"right",children:(0,W.jsx)(U.Z,{width:74,height:38})})]})},Y=r(44373),I=r(92391),z=r(15880),q=function(e){var t=(0,P.Z)({},e),r=(0,y.f)().currentMarket;return(0,W.jsxs)(z.o,{symbol:t.symbol,iconSymbol:t.iconSymbol,name:t.name,underlyingAsset:t.underlyingAsset,currentMarket:r,children:[(0,W.jsx)(I.X,{caption:(0,W.jsx)(o.cC,{id:"Total supplied"}),captionVariant:"description",mb:3,children:(0,W.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"flex-end"},justifyContent:"center",textAlign:"center"},children:[(0,W.jsx)(T.B,{compact:!0,value:t.totalLiquidity,variant:"secondary14"}),(0,W.jsx)(E.i,{value:t.totalLiquidityUSD,rightAlign:!0})]})}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(o.cC,{id:"Supply APY"}),captionVariant:"description",mb:3,align:"flex-start",children:(0,W.jsx)(B.J,{align:"flex-end",value:t.supplyAPY,incentives:t.aIncentivesData||[],symbol:t.symbol,variant:"secondary14"})}),(0,W.jsx)(Y.Z,{sx:{mb:3}}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(o.cC,{id:"Total borrowed"}),captionVariant:"description",mb:3,children:(0,W.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"flex-end"},justifyContent:"center",textAlign:"center"},children:Number(t.totalDebt)>0?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(T.B,{compact:!0,value:t.totalDebt,variant:"secondary14"}),(0,W.jsx)(E.i,{value:t.totalDebtUSD,rightAlign:!0})]}):(0,W.jsx)(L.J,{variant:"secondary14",color:"text.secondary"})})}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(w.B,{text:(0,W.jsx)(o.cC,{id:"Borrow APY, variable"}),variant:"description"},"APY_list_mob_variable_type"),captionVariant:"description",mb:3,align:"flex-start",children:(0,W.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,W.jsx)(B.J,{align:"flex-end",value:Number(t.totalVariableDebtUSD)>0?t.variableBorrowAPY:"-1",incentives:t.vIncentivesData||[],symbol:t.symbol,variant:"secondary14"}),!t.borrowingEnabled&&Number(t.totalVariableDebt)>0&&!t.isFrozen&&(0,W.jsx)(E.i,{value:"Disabled"})]})}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(g.s,{text:(0,W.jsx)(o.cC,{id:"Borrow APY, stable"}),variant:"description"},"APY_list_mob_stable_type"),captionVariant:"description",mb:4,align:"flex-start",children:(0,W.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,W.jsx)(B.J,{align:"flex-end",value:Number(t.totalStableDebtUSD)>0?t.stableBorrowAPY:"-1",incentives:t.sIncentivesData||[],symbol:t.symbol,variant:"secondary14"}),!t.borrowingEnabled&&Number(t.totalStableDebt)>0&&!t.isFrozen&&(0,W.jsx)(E.i,{value:"Disabled"})]})}),(0,W.jsx)(C.Z,{variant:"outlined",component:m.rU,href:m.Z6.reserveOverview(t.underlyingAsset,r),fullWidth:!0,children:(0,W.jsx)(o.cC,{id:"View details"})})]})},X=function(){return(0,W.jsxs)(z.o,{loading:!0,children:[(0,W.jsx)(I.X,{caption:(0,W.jsx)(U.Z,{width:100,height:20}),captionVariant:"description",mb:3,children:(0,W.jsx)(U.Z,{width:45,height:20})}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(U.Z,{width:100,height:20}),captionVariant:"description",mb:3,align:"flex-start",children:(0,W.jsx)(U.Z,{width:45,height:20})}),(0,W.jsx)(Y.Z,{sx:{mb:3}}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(U.Z,{width:100,height:20}),captionVariant:"description",mb:3,children:(0,W.jsx)(U.Z,{width:45,height:20})}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(U.Z,{width:100,height:20}),captionVariant:"description",mb:3,align:"flex-start",children:(0,W.jsx)(U.Z,{width:45,height:20})}),(0,W.jsx)(I.X,{caption:(0,W.jsx)(U.Z,{width:100,height:20}),captionVariant:"description",mb:4,align:"flex-start",children:(0,W.jsx)(U.Z,{width:45,height:20})}),(0,W.jsx)(U.Z,{width:"100%",height:38})]})};function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=[{title:(0,W.jsx)(o.cC,{id:"Asset"}),sortKey:"symbol"},{title:(0,W.jsx)(o.cC,{id:"Total supplied"}),sortKey:"totalLiquidityUSD"},{title:(0,W.jsx)(o.cC,{id:"Supply APY"}),sortKey:"supplyAPY"},{title:(0,W.jsx)(o.cC,{id:"Total borrowed"}),sortKey:"totalDebtUSD"},{title:(0,W.jsx)(w.B,{text:(0,W.jsx)(o.cC,{id:"Borrow APY, variable"}),variant:"subheader2"},"APY_list_variable_type"),sortKey:"variableBorrowAPY"},{title:(0,W.jsx)(g.s,{text:(0,W.jsx)(o.cC,{id:"Borrow APY, stable"}),variant:"subheader2"},"APY_list_stable_type"),sortKey:"stableBorrowAPY"}];function J(e){var t=e.reserves,r=e.loading,n=(0,c.Z)("(max-width:1125px)"),i=(0,x.useState)(""),s=i[0],o=i[1],a=(0,x.useState)(!1),l=a[0],u=a[1];return l?"symbol"===s?t.sort((function(e,t){return e.symbol.toUpperCase()<t.symbol.toUpperCase()?-1:1})):t.sort((function(e,t){return e[s]-t[s]})):"symbol"===s?t.sort((function(e,t){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:1})):t.sort((function(e,t){return t[s]-e[s]})),r?n?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(X,{}),(0,W.jsx)(X,{}),(0,W.jsx)(X,{})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(F,{}),(0,W.jsx)(F,{}),(0,W.jsx)(F,{}),(0,W.jsx)(F,{}),(0,W.jsx)(F,{})]}):0===t.length?null:(0,W.jsxs)(W.Fragment,{children:[!n&&(0,W.jsxs)(D.u,{px:6,children:[H.map((function(e){return(0,W.jsx)(Z.h,{isRow:"symbol"===e.sortKey,maxWidth:"symbol"===e.sortKey?280:void 0,children:(0,W.jsx)(O.M,{sortName:s,sortDesc:l,setSortName:o,setSortDesc:u,sortKey:e.sortKey,children:e.title})},e.sortKey)})),(0,W.jsx)(Z.h,{maxWidth:95,minWidth:95})]}),t.map((function(e){return n?(0,x.createElement)(q,R(R({},e),{},{key:e.id})):(0,x.createElement)(N,R(R({},e),{},{key:e.id}))}))]})}var $=r(41551);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee,te,re=function(){var e=(0,v.HT)(),t=e.reserves,r=e.loading,n=(0,y.f)(),i=n.currentMarketData,s=n.currentNetworkConfig,g=(0,x.useState)(""),w=g[0],Z=g[1],O=(0,l.Z)().breakpoints,D=(0,c.Z)(O.down("sm")),P=t.filter((function(e){return e.isActive})).filter((function(e){if(!w)return!0;var t=w.toLowerCase().trim();return e.symbol.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)||e.underlyingAsset.toLowerCase().includes(t)})).map((function(e){return G(G({},e),e.isWrappedBaseAsset?(0,$.QD)({symbol:s.baseAssetSymbol,underlyingAsset:a.hP.toLowerCase()}):{})})),C=!t.some((function(e){return!e.isFrozen}))&&["Harmony","Fantom"].includes(s.name),A=P.filter((function(e){return!e.isFrozen})),S=P.filter((function(e){return e.isFrozen}));return(0,W.jsxs)(h.l,{titleComponent:(0,W.jsx)(j._,{onSearchTermChange:Z,title:(0,W.jsxs)(W.Fragment,{children:[i.marketTitle," ",(0,W.jsx)(o.cC,{id:"assets"})]}),searchPlaceholder:D?"Search asset":"Search asset name, symbol, or address"}),children:[C&&(0,W.jsx)(u.Z,{mx:6,children:(0,W.jsx)(f.C,{marketName:s.name,forum:!0})}),(0,W.jsx)(J,{reserves:A,loading:r}),S.length>0&&(0,W.jsxs)(u.Z,{sx:{mt:10,px:{xs:4,xsm:6}},children:[(0,W.jsx)(d.Z,{variant:"h4",mb:4,children:(0,W.jsx)(o.cC,{id:"Frozen assets"})}),(0,W.jsx)(b.v,{severity:"info",children:(0,W.jsx)(o.cC,{id:"These assets are temporarily frozen by Aave community decisions, meaning that further supply / borrow, or rate swap of these assets are unavailable. Withdrawals and debt repayments are allowed. Follow the <0>Aave governance forum</0> for further updates.",components:{0:(0,W.jsx)(m.rU,{href:"https://governance.aave.com",underline:"always"})}})})]}),(0,W.jsx)(J,{reserves:S,loading:r}),!r&&0===P.length&&(0,W.jsx)(p.q,{searchTerm:w,subtitle:"We couldn't find any assets related to your search. Try again with a different asset name, symbol, or address."})]})},ne=r(1279);function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ie.apply(this,arguments)}var se,oe=function(e){return x.createElement("svg",ie({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),ee||(ee=x.createElement("path",{d:"M10.886 2A10.059 10.059 0 1 0 22 13.114H10.886V2Z",stroke:"#A5A8B6",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),te||(te=x.createElement("path",{d:"M21.489 8.644h-6.133V2.511a10.086 10.086 0 0 1 6.133 6.133Z",stroke:"#A5A8B6",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ae.apply(this,arguments)}var le,ce=function(e){return x.createElement("svg",ae({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),se||(se=x.createElement("path",{d:"M17.625 21v-1.125m0-4.5V14.25M6.375 21l3.375-3.375M6.375 3v18V3Zm0 18L3 17.625 6.375 21Zm11.25-18L21 6.375M17.625 9.75V3v6.75Zm0-6.75L14.25 6.375 17.625 3Z",stroke:"#A5A8B6",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue.apply(this,arguments)}var de=function(e){return x.createElement("svg",ue({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),le||(le=x.createElement("path",{d:"M6.375 3v1.125m0 4.5V9.75M17.625 3 14.25 6.375M17.625 21V3v18Zm0-18L21 6.375 17.625 3ZM6.375 21 3 17.625m3.375-3.375V21v-6.75Zm0 6.75 3.375-3.375L6.375 21Z",stroke:"#A5A8B6",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))},xe=r(74815),he=r(87369),pe=function(){var e=(0,v.HT)(),t=e.reserves,r=e.loading,n=(0,l.Z)(),i=(0,c.Z)(n.breakpoints.down("sm")),s=t.reduce((function(e,t){return{totalLiquidity:e.totalLiquidity.plus(t.totalLiquidityUSD),totalDebt:e.totalDebt.plus(t.totalDebtUSD)}}),{totalLiquidity:(0,ne.hE)(0),totalDebt:(0,ne.hE)(0)}),a=i?"main16":"main21",u=i?"secondary16":"secondary21";return(0,W.jsxs)(xe.f,{pageTitle:(0,W.jsx)(o.cC,{id:"Markets"}),withMarketSwitcher:!0,children:[(0,W.jsx)(he.d,{icon:(0,W.jsx)(oe,{}),title:(0,W.jsx)(o.cC,{id:"Total market size"}),loading:r,children:(0,W.jsx)(T.B,{value:s.totalLiquidity.toString(),symbol:"USD",variant:a,visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:u})}),(0,W.jsx)(he.d,{icon:(0,W.jsx)(de,{}),title:(0,W.jsx)(o.cC,{id:"Total available"}),loading:r,children:(0,W.jsx)(T.B,{value:s.totalLiquidity.minus(s.totalDebt).toString(),symbol:"USD",variant:a,visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:u})}),(0,W.jsx)(he.d,{icon:(0,W.jsx)(ce,{}),title:(0,W.jsx)(o.cC,{id:"Total borrows"}),loading:r,children:(0,W.jsx)(T.B,{value:s.totalDebt.toString(),symbol:"USD",variant:a,visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:u})})]})};function me(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(pe,{}),(0,W.jsx)(n.O,{children:(0,W.jsx)(re,{})})]})}me.getLayout=function(e){return(0,W.jsx)(i.Z,{children:e})}},13850:function(e,t,r){"use strict";r.d(t,{q:function(){return u}});var n=r(49501),i=r(6022),s=r(62097),o=r(61225),a=r(30120),l=r(29630),c=r(85893),u=function(e){var t=e.searchTerm,r=e.subtitle,u=(0,s.Z)().breakpoints,d=(0,o.Z)(u.down("sm"));return(0,c.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,pt:15,pb:32,px:4},children:[d?(0,c.jsxs)(a.Z,{sx:{textAlign:"center",maxWidth:"300px"},children:[(0,c.jsx)(l.Z,{variant:"h2",children:i.ag._("No search results{0}",{0:t&&" for"})}),t&&(0,c.jsxs)(l.Z,{sx:{overflowWrap:"anywhere"},variant:"h2",children:["'",t,"'"]})]}):(0,c.jsx)(l.Z,{sx:{textAlign:"center",maxWidth:"480px",overflowWrap:"anywhere"},variant:"h2",children:i.ag._("No search results{0}",{0:t&&" for '".concat(t,"'")})}),r&&(0,c.jsx)(l.Z,{sx:{width:"280px",textAlign:"center"},variant:"description",color:"text.secondary",children:(0,c.jsx)(n.cC,{id:"{subtitle}",values:{subtitle:r}})})]})}},19547:function(e,t,r){"use strict";r.d(t,{i:function(){return l}});var n=r(49501),i=r(29630),s=r(30120),o=(r(67294),r(41024)),a=r(85893);function l(e){var t=e.value,r=e.rightAlign;return(0,a.jsx)(s.Z,{sx:{p:r?{xs:"0",xsm:"2px 0"}:{xs:"0",xsm:"3.625px 0px"},display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Disabled"===t?(0,a.jsxs)(i.Z,{component:"span",sx:{mr:.5},variant:"secondary12",color:"text.muted",children:["(",(0,a.jsx)(n.cC,{id:"Disabled"}),")"]}):(0,a.jsx)(o.B,{compact:!0,value:t,variant:"secondary12",color:"text.secondary",symbolsVariant:"secondary12",symbolsColor:"text.secondary",symbol:"USD"})})}},8403:function(e,t,r){"use strict";r.d(t,{M:function(){return b}});var n=r(59499),i=r(53737),s=r(33740),o=r(62097),a=r(61225),l=r(30120),c=r(81011),u=r(80562),d=r(23279),x=r.n(d),h=r(67294),p=r(85893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=function(e){var t=e.onSearchTermChange,r=e.wrapperSx,d=e.placeholder,b=(0,h.useRef)(null),j=(0,h.useState)(""),f=j[0],v=j[1],y=(0,o.Z)().breakpoints,g=(0,a.Z)(y.down("sm")),w=(0,h.useMemo)((function(){return x()((function(e){t(e)}),300)}),[t]);return(0,p.jsxs)(l.Z,{sx:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"flex",alignItems:"center",gap:2,border:"1px solid ".concat(e.palette.divider),borderRadius:"6px",height:"36px"},r)},children:[(0,p.jsx)(l.Z,{sx:{ml:2,mt:1},children:(0,p.jsx)(i.Z,{height:16})}),(0,p.jsx)(c.ZP,{autoFocus:g,inputRef:b,sx:{width:"100%",fontSize:{xs:16,sm:14}},placeholder:d,value:f,onChange:function(e){v(e.target.value),w(e.target.value)}}),(0,p.jsx)(u.Z,{sx:{p:0,mr:2,visibility:f?"visible":"hidden"},onClick:function(){return function(){var e;v(""),t(""),null===(e=b.current)||void 0===e||e.focus()}()},children:(0,p.jsx)(s.Z,{height:16})})]})}},28480:function(e,t,r){"use strict";r.d(t,{_:function(){return f}});var n=r(59499),i=r(49501),s=r(69743),o=r(62097),a=r(61225),l=r(30120),c=r(29630),u=r(80562),d=r(81645),x=r(75084),h=r(67294),p=r(8403),m=r(85893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.onSearchTermChange,r=e.searchPlaceholder,n=e.titleProps,b=e.title,f=(0,h.useState)(!1),v=f[0],y=f[1],g=(0,o.Z)().breakpoints,w=(0,a.Z)(g.down("sm")),Z=w&&!v,O=!w||!v;return(0,m.jsxs)(l.Z,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[O&&(0,m.jsx)(c.Z,j(j({component:"div",variant:"h2",sx:{mr:4}},n),{},{children:b})),(0,m.jsxs)(l.Z,{sx:{height:"40px",width:v&&w?"100%":"unset",position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Z&&(0,m.jsx)(u.Z,{onClick:function(){return y(!0)},children:(0,m.jsx)(d.Z,{children:(0,m.jsx)(s.Z,{})})}),(v||!w)&&(0,m.jsxs)(l.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,m.jsx)(p.M,{wrapperSx:{width:{xs:"100%",sm:"340px"}},placeholder:r,onSearchTermChange:t}),w&&(0,m.jsx)(x.Z,{sx:{ml:2},onClick:function(){return y(!1),void t("")},children:(0,m.jsx)(c.Z,{variant:"buttonM",children:(0,m.jsx)(i.cC,{id:"Cancel"})})})]})]})]})}},99404:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/markets",function(){return r(75283)}])},53737:function(e,t,r){"use strict";var n=r(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))}));t.Z=i},69743:function(e,t,r){"use strict";var n=r(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));t.Z=i}},function(e){e.O(0,[249,897,270,774,888,179],(function(){return t=99404,e(e.s=t);var t}));var t=e.O();_N_E=t}]);