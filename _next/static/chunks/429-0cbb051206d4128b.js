"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{15446:function(e,t,r){r.d(t,{O:function(){return o}});var n=r(30120),i=r(36336),a=r(85893),o=function(e){var t=e.children;return(0,a.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,a.jsx)(i.Z,{children:t})})}},25563:function(e,t,r){r.d(t,{hu:function(){return Z},St:function(){return F},gO:function(){return C},tF:function(){return S}});var n=r(59499),i=r(49501),a=r(61782),o=r(30120),s=r(72389),c=r(62097),l=r(61225),x=r(82334),d=r(81645),u=r(29630),p=r(31538),h=r(61702),m=r(67294),f=r(46930),g=r(84950),b=r(34637),v=r(59379),j=r(85893);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w,Z=function(e){var t=g.ei[e];return{market:t,network:g.m5[t.chainId]}},F=function(e){var t=["G\xf6rli","Ropsten","Mumbai","Sepolia","Fuji","Testnet","Kovan","Rinkeby"],r=e.split(" "),n=r.filter((function(e){return t.indexOf(e)>-1}));return{name:r.filter((function(e){return!n.includes(e)})).join(" "),testChainName:n[0]}},C=function(e){var t=e.size,r=e.logo,n=e.testChainName;return(0,j.jsxs)(o.Z,{sx:{mr:2,width:t,height:t,position:"relative"},children:[(0,j.jsx)("img",{src:r,alt:"",width:"100%",height:"100%"}),n&&(0,j.jsx)(s.Z,{title:n,arrow:!0,children:(0,j.jsx)(o.Z,{sx:{bgcolor:"#29B6F6",width:"16px",height:"16px",borderRadius:"50%",color:"common.white",fontSize:"12px",lineHeight:"16px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"-2px",bottom:"-2px"},children:n.split("")[0]})})]})};!function(e){e[e.V2=0]="V2",e[e.V3=1]="V3"}(w||(w={}));var S=function(){var e=(0,f.f)(),t=e.currentMarket,r=e.setCurrentMarket,n=(0,m.useState)(w.V3),s=n[0],k=n[1],S=(0,c.Z)(),M=(0,l.Z)(S.breakpoints.up("lg")),O=(0,l.Z)(S.breakpoints.down("xsm")),I=g.z2.map((function(e){return Z(e).market.v3})).some((function(e){return!!e}));return(0,j.jsxs)(x.Z,{select:!0,"aria-label":"select market","data-cy":"marketSelector",value:t,onChange:function(e){return r(e.target.value)},sx:{mr:2,"& .MuiOutlinedInput-notchedOutline":{border:"none"}},SelectProps:{native:!1,className:"MarketSwitcher__select",IconComponent:function(e){return(0,j.jsx)(d.Z,y(y({fontSize:"medium"},e),{},{children:(0,j.jsx)(a.Z,{})}))},renderValue:function(e){var t=Z(e),r=t.market,n=t.network;return(0,j.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(C,{size:M?32:28,logo:n.networkLogoPath,testChainName:F(r.marketTitle).testChainName}),(0,j.jsxs)(o.Z,{sx:{mr:1,display:"inline-flex",alignItems:"flex-start"},children:[(0,j.jsxs)(u.Z,{variant:M?"display1":"h1",sx:{fontSize:O?"1.55rem":void 0,color:"common.white",mr:1},children:[F(r.marketTitle).name," ",r.isFork?"Fork":"",M&&" Market"]}),r.v3&&(0,j.jsx)(o.Z,{sx:{color:"#fff",px:2,borderRadius:"12px",background:function(e){return e.palette.gradients.aaveGradient}},children:(0,j.jsx)(u.Z,{variant:"subheader2",children:"Version 3"})})]})]})},sx:{"&.MarketSwitcher__select .MuiSelect-outlined":{pl:0,py:0,backgroundColor:"transparent !important"},".MuiSelect-icon":{color:"#F1F1F3"}},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"right"},PaperProps:{style:{minWidth:240},variant:"outlined",elevation:0}}},children:[(0,j.jsx)(o.Z,{children:(0,j.jsx)(u.Z,{variant:"subheader2",color:"text.secondary",sx:{px:4,pt:2},children:(0,j.jsx)(i.cC,{id:"{0}",values:{0:g.p8||g.aV?"Select Aave Testnet Market":"Select Aave Market"}})})}),I&&(0,j.jsx)(o.Z,{sx:{mx:"18px",display:"flex",justifyContent:"center"},children:(0,j.jsxs)(v.Z,{value:s,exclusive:!0,onChange:function(e,t){null!==t&&k(t)},sx:{width:"100%",height:"36px",background:S.palette.primary.main,border:"1px solid ".concat("dark"===S.palette.mode?"rgba(235, 235, 237, 0.12)":"#1B2030"),borderRadius:"6px",marginTop:"16px",marginBottom:"12px",padding:"2px"},children:[(0,j.jsx)(b.Z,{value:w.V3,"data-cy":"markets_switch_button_v3",sx:{backgroundColor:"dark"===S.palette.mode?"#EAEBEF":"#383D51","&.Mui-selected, &.Mui-selected:hover":{backgroundColor:"dark"===S.palette.mode?"#292E41":"#FFFFFF",boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.05)"},borderRadius:"4px"},children:(0,j.jsx)(u.Z,{variant:"buttonM",sx:s===w.V3?{backgroundImage:function(e){return e.palette.gradients.aaveGradient},backgroundClip:"text",color:"transparent"}:{color:"dark"===S.palette.mode?"#0F121D":"#FFFFFF"},children:(0,j.jsx)(i.cC,{id:"Version 3"})})}),(0,j.jsx)(b.Z,{value:w.V2,"data-cy":"markets_switch_button_v2",sx:{backgroundColor:"dark"===S.palette.mode?"#EAEBEF":"#383D51","&.Mui-selected, &.Mui-selected:hover":{backgroundColor:"dark"===S.palette.mode?"#292E41":"#FFFFFF",boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.05)"},borderRadius:"4px"},children:(0,j.jsx)(u.Z,{variant:"buttonM",sx:s===w.V2?{backgroundImage:function(e){return e.palette.gradients.aaveGradient},backgroundClip:"text",color:"transparent"}:{color:"dark"===S.palette.mode?"#0F121D":"#FFFFFF"},children:(0,j.jsx)(i.cC,{id:"Version 2"})})})]})}),g.z2.map((function(e){var t=Z(e),r=t.market,n=t.network,i=F(r.marketTitle);return(0,j.jsxs)(p.Z,{"data-cy":"marketSelector_".concat(e),value:e,sx:{".MuiListItemIcon-root":{minWidth:"unset"},display:r.v3&&s===w.V2||!r.v3&&s===w.V3?"none":"flex"},children:[(0,j.jsx)(C,{size:32,logo:n.networkLogoPath,testChainName:i.testChainName}),(0,j.jsxs)(h.Z,{sx:{mr:0},children:[i.name," ",r.isFork?"Fork":""]}),(0,j.jsx)(h.Z,{sx:{textAlign:"right"},children:(0,j.jsx)(u.Z,{color:"text.muted",variant:"description",children:i.testChainName})})]},e)}))]})}},40535:function(e,t,r){r.d(t,{V:function(){return h}});var n=r(49501),i=r(62097),a=r(61225),o=r(30120),s=r(29630),c=r(75084),l=r(84953),x=r(67728),d=r(25563),u=r(68861),p=r(85893),h=function(e){var t=e.pageTitle,r=e.withMarketSwitcher,h=e.withMigrateButton,m=(0,l.Yh)((function(e){return(0,x.lY)(e)})),f=(0,i.Z)(),g=(0,a.Z)(f.breakpoints.up("lg")),b=(0,a.Z)(f.breakpoints.down("xsm"));return(0,p.jsxs)(o.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",xsm:"center"},mb:t?4:0,flexDirection:{xs:"column",xsm:"row"}},children:[t&&(b||!r)&&(0,p.jsx)(o.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,p.jsx)(s.Z,{variant:b?"h2":g?"display1":"h1",sx:{color:r?"text.muted":"text.white",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:t})}),(0,p.jsxs)(o.Z,{sx:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",mb:t?0:4},children:[r&&(0,p.jsx)(d.tF,{}),m&&h&&(0,p.jsx)(u.rU,{href:u.Z6.migrationTool,sx:{mt:{xs:2,xsm:0}},children:(0,p.jsx)(c.Z,{variant:"gradient",size:"small",children:(0,p.jsx)(n.cC,{id:"Migrate to V3"})})})]})]})}},74815:function(e,t,r){r.d(t,{f:function(){return s}});var n=r(30120),i=r(36336),a=r(40535),o=r(85893),s=function(e){var t=e.pageTitle,r=e.titleComponent,s=e.withMarketSwitcher,c=e.withMigrateButton,l=e.bridge,x=e.children;return(0,o.jsx)(n.Z,{sx:{bgcolor:"background.header",pt:{xs:10,md:12},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:(0,o.jsx)(i.Z,{sx:{pb:0},children:(0,o.jsxs)(n.Z,{sx:{px:{xs:4,xsm:6}},children:[!r&&(0,o.jsx)(a.V,{pageTitle:t,withMarketSwitcher:s,withMigrateButton:c,bridge:l}),r&&r,(0,o.jsx)(n.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:x})]})})})}},87369:function(e,t,r){r.d(t,{d:function(){return l}});var n=r(62097),i=r(61225),a=r(30120),o=r(29630),s=r(91655),c=r(85893),l=function(e){var t=e.icon,r=e.title,l=e.titleIcon,x=e.children,d=e.hideIcon,u=e.variant,p=void 0===u?"dark":u,h=e.withLine,m=e.loading,f=e.withoutIconWrapper,g=(0,n.Z)(),b=(0,i.Z)(g.breakpoints.up("sm"));return(0,c.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[h&&(0,c.jsx)(a.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!d&&(f?t&&t:(0,c.jsx)(a.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#383D51",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:t&&t})),(0,c.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,c.jsxs)(a.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,c.jsx)(o.Z,{sx:{color:"dark"===p?"#A5A8B6":"#62677B"},variant:b?"description":"caption",component:"div",children:r}),l&&l]}),m?(0,c.jsx)(s.Z,{height:b?28:24,sx:{background:"#383D51"}}):x]})]})}},3765:function(e,t,r){r.d(t,{p:function(){return c}});var n=r(49501),i=r(75084),a=r(26074),o=r(58294),s=r(85893),c=function(){var e=(0,a.q)().setWalletModalOpen;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{variant:"gradient",onClick:function(){return e(!0)},children:(0,s.jsx)(n.cC,{id:"Connect wallet"})}),(0,s.jsx)(o.x,{})]})}},23608:function(e,t,r){r.d(t,{f:function(){return Z}});var n,i,a=r(49501),o=r(56707),s=r(75084),c=r(81645),l=r(67294),x=r(50029),d=r(87794),u=r.n(d),p=r(56365),h=r(29630),m=r(30120),f=r(31959),g=r(46930),b=r(77537);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}var j=function(e){return l.createElement("svg",v({viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),n||(n=l.createElement("path",{d:"M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32Z",fill:"#1461DB"})),i||(i=l.createElement("path",{d:"m52.206 30.048-9.038-9.038-.017-.017-.036-.03a2.281 2.281 0 0 0-.183-.15 1.795 1.795 0 0 0-.137-.101c-.02-.015-.042-.027-.064-.04a2.454 2.454 0 0 0-3.28.544L25.393 35.274V22.75a2.483 2.483 0 0 0-4.965 0v12.524l-5.132-5.132a2.483 2.483 0 0 0-3.51 3.51l9.37 9.37c.059.06.121.116.186.168.063.05.129.1.194.15.339.218.726.352 1.127.388h.01c.081.008.162.012.242.012h.038c.067 0 .134-.003.2-.009h.05c.064-.007.128-.015.191-.028h.028c.07-.015.14-.031.209-.052h.012a2.298 2.298 0 0 0 .519-.228l.056-.033a2.38 2.38 0 0 0 .269-.191l.025-.022c.052-.045.105-.09.15-.14l14.253-14.264V41.26a2.483 2.483 0 0 0 4.965 0V28.735l4.816 4.825a2.482 2.482 0 0 0 3.51-3.512Z",fill:"#fff"})))},k=r(85893),y=[{name:"Transak",makeLink:function(e){var t=e.cryptoSymbol,r=e.network,n=e.walletAddress;return"".concat("https://global.transak.com","/?apiKey=").concat("799087ea-c2be-44b8-a0fe-56d96b37ee3c","&network=").concat(r.split(" ")[0],"&cryptoCurrencyCode=").concat(t,"&walletAddress=").concat(n,"&disableWalletAddressForm=true")},icon:(0,k.jsx)(j,{})}],w=function(e){var t=e.cryptoSymbol,r=e.open,n=e.close,i=(0,b.Z)().currentAccount,o=(0,g.f)().currentNetworkConfig.name;return(0,k.jsxs)(f.P,{open:r,setOpen:n,children:[(0,k.jsx)(h.Z,{variant:"h2",children:(0,k.jsx)(a.cC,{id:"Buy Crypto with Fiat"})}),(0,k.jsx)(h.Z,{sx:{my:6},children:y.length&&1===y.length?(0,k.jsx)(a.cC,{id:"{0} on-ramp service is provided by External Provider and by selecting you agree to Terms of the Provider. Your access to the service might be reliant on the External Provider being operational.",values:{0:y[0].name}}):(0,k.jsx)(a.cC,{id:"Choose one of the on-ramp services"})}),(0,k.jsx)(m.Z,{children:y.map((function(e){var r=e.name,n=e.makeLink,l=e.icon;return(0,k.jsx)(s.Z,{variant:"outlined",size:"large",endIcon:(0,k.jsx)(c.Z,{children:(0,k.jsx)(p.Z,{})}),fullWidth:!0,sx:{px:4,"&:not(:first-of-type)":{mt:4}},href:n({cryptoSymbol:t,network:o,walletAddress:i}),target:"_blank",rel:"noopener",children:(0,k.jsxs)(m.Z,{sx:{display:"flex",flexGrow:1},children:[(0,k.jsx)(c.Z,{sx:{mr:2},children:l}),(0,k.jsx)(a.cC,{id:"{0}{name}",values:{0:1===y.length?"Continue with ":null,name:r}})]})},r)}))})]})},Z=function(e){var t=e.cryptoSymbol,r=function(e,t){var r=(0,l.useState)(!1),n=r[0],i=r[1];return(0,l.useEffect)((function(){(0,x.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=1,r.next=4,fetch("".concat("https://api.transak.com","/cryptocoverage/api/v1/public/partner/crypto-currencies?symbol=").concat(e,"&network=").concat(t));case 4:n=r.sent,i(n.ok),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),i(!1);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}),[e,t]),{isAvailable:n}}(t,e.networkMarketName),n=r.isAvailable,i=(0,l.useState)(null),d=i[0],p=i[1],h=Boolean(d);return n?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{variant:"outlined",size:"small",onClick:function(e){p(e.currentTarget)},startIcon:(0,k.jsx)(c.Z,{sx:{mr:-1},children:(0,k.jsx)(o.Z,{})}),children:(0,k.jsx)(a.cC,{id:"Buy {cryptoSymbol} with Fiat",values:{cryptoSymbol:t}})}),(0,k.jsx)(w,{cryptoSymbol:t,open:h,close:function(){p(null)}})]}):null}}}]);