(this["webpackJsonpshort-app"]=this["webpackJsonpshort-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(6),s=c.n(i),r=(c(12),c(2)),a=c.p+"static/media/logo.83464303.svg",l=c.p+"static/media/bars-solid-menu.e8db7520.svg",o=(c(13),c(0)),j={visibility:"hidden",opacity:"0",transition:"visibility 0s linear 300ms, opacity 300ms"},d={visibility:"visible",opacity:"1",transition:"visibility 0s linear 0s, opacity 300ms"},b=Object(n.forwardRef)((function(e,t){return Object(o.jsxs)("div",{style:"hidden"===e.visible?j:d,ref:t,className:"mobMenu",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Features"}),Object(o.jsx)("li",{children:"Pricing"}),Object(o.jsx)("li",{children:"Resources"})]}),Object(o.jsx)("div",{className:"hr"}),Object(o.jsxs)("ul",{className:"login",children:[Object(o.jsx)("li",{children:"Login"}),Object(o.jsx)("li",{className:"sign",children:"Sign Up"})]})]})}));c(15);var u=function(){var e=Object(n.useState)("hidden"),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(n.useRef)(),j=Object(n.useRef)();return Object(n.useEffect)((function(){document.addEventListener("mousedown",(function(e){s.current&&!s.current.contains(e.target)&&j.current&&!j.current.contains(e.target)&&i("hidden")}))}),[]),Object(o.jsxs)("header",{children:[Object(o.jsxs)("nav",{className:"siteNav",children:[Object(o.jsx)("img",{className:"logo",src:a,alt:"logo"}),Object(o.jsx)("img",{ref:j,className:"menuBar",onClick:function(){i("hidden"===c?"visible":"hidden")},src:l,alt:"menu"})]}),Object(o.jsx)(b,{visible:c,ref:s})]})},h=c(7);c(16);var O=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"More than just shorter links"})})};c(17);var x=function(){return Object(o.jsx)("div",{className:"siteInfo",children:Object(o.jsx)("p",{children:"Build your brand's recognition and get detailed insights on how your links are performing."})})};c(18);var m=function(){return Object(o.jsx)("div",{className:"mainButton",children:Object(o.jsx)("button",{children:"GET STARTED"})})};c(19);var f=function(e){return Object(o.jsx)("div",{className:"shorten",children:Object(o.jsxs)("form",{onSubmit:e.submitUrl,children:[Object(o.jsx)("input",{placeholder:"Shorten a link here...",value:e.clearInput,onChange:e.liftData,type:"text"}),Object(o.jsx)("button",{type:"submit",children:"Shorten It!"})]})})},p=(c(20),c.p+"static/media/icon-brand-recognition.c349d3b6.svg"),v=c.p+"static/media/icon-detailed-records.265c8aea.svg",g=c.p+"static/media/icon-fully-customizable.a1532a74.svg";c(21);var k=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),i=c[0],s=c[1];function a(){s(!0),navigator.clipboard.writeText(e.copyLink)}return!1===i?Object(o.jsx)("button",{className:"buttonCopy",onClick:a,children:"Copy"}):Object(o.jsx)("button",{className:"buttonCopy",style:{backgroundColor:"hsl(257, 27%, 26%)"},onClick:a,children:"Copied!"})},N=(c(22),function(e){return Object(o.jsx)("div",{className:"linksHolder",children:e.links.map((function(e){return Object(o.jsxs)("div",{className:"linksBlock",children:[Object(o.jsx)("p",{className:"pLink linksFit",children:e.long}),Object(o.jsx)("div",{className:"hr"}),Object(o.jsx)("a",{className:"aLink linksFit",target:"_blank",rel:"noreferrer",href:"".concat(e.shorten),children:e.shorten}),Object(o.jsx)(k,{copyLink:e.shorten})]})}))})});var y=function(e){return Object(o.jsxs)("div",{className:"fullInfo",children:[Object(o.jsx)(N,{links:e.passData}),Object(o.jsx)("h3",{children:"Adanced Statistics"}),Object(o.jsx)("p",{className:"fullInfo_p",children:"Track how your links are performing across the web with our advanced statistics dashboard"}),Object(o.jsxs)("div",{className:"frame",children:[Object(o.jsx)("div",{className:"picto",children:Object(o.jsx)("img",{src:p,alt:"chart"})}),Object(o.jsx)("h4",{children:"Brand Recognition"}),Object(o.jsx)("p",{className:"fullInfo_p",children:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."})]}),Object(o.jsxs)("div",{className:"frame",children:[Object(o.jsx)("div",{className:"picto detailed",children:Object(o.jsx)("img",{src:v,alt:"pointer"})}),Object(o.jsx)("h4",{children:"Detailed Records"}),Object(o.jsx)("p",{className:"fullInfo_p",children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision."})]}),Object(o.jsxs)("div",{className:"frame",children:[Object(o.jsx)("div",{className:"picto",children:Object(o.jsx)("img",{src:g,alt:"burhses"})}),Object(o.jsx)("h4",{children:"Fully Customizable"}),Object(o.jsx)("p",{className:"fullInfo_p",children:"Improve brand awareness and content discoverability trough customizable links, superchaging audience engagment."})]}),Object(o.jsx)("div",{className:"vLine"})]})};c(23);var C=function(){return Object(o.jsxs)("div",{className:"back",children:[Object(o.jsx)("h3",{children:"Boost your links today"}),Object(o.jsx)(m,{})]})};c(24);var w=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)((function(){var e=sessionStorage.getItem("linkData");return e?JSON.parse(e):[]})),a=Object(r.a)(s,2),l=a[0],j=a[1];return Object(n.useEffect)((function(){sessionStorage.setItem("linkData",JSON.stringify(l))}),[l]),Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(O,{}),Object(o.jsx)(x,{}),Object(o.jsx)(m,{}),Object(o.jsx)(f,{liftData:function(e){i(e.target.value)},submitUrl:function(e){e.preventDefault(),""!==c&&fetch("https://api.shrtco.de/v2/shorten?url=".concat(c)).then((function(e){return e.json()})).then((function(e){void 0!==e.result.full_short_link2&&j((function(t){return[].concat(Object(h.a)(t),[{long:e.result.original_link,shorten:e.result.full_short_link2}])}))})).catch((function(e){console.log(e)})),i("")},clearInput:c}),Object(o.jsx)(y,{passData:l}),Object(o.jsx)(C,{})]})},S=c.p+"static/media/icon-facebook.229c75a0.svg",I=c.p+"static/media/icon-twitter.1d5c6d5e.svg",B=c.p+"static/media/icon-pinterest.a2d25ab4.svg",D=c.p+"static/media/icon-instagram.df587328.svg";c(25);function _(e){window.scrollTo({top:0,behavior:"smooth"})}var L=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("h2",{children:"Shortly"}),Object(o.jsx)("h4",{children:"Features"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Link Shortening"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Branded Links"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Analytics"})})]}),Object(o.jsx)("h4",{children:"Resources"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Blog"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Developers"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Support"})})]}),Object(o.jsx)("h4",{children:"Company"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Our team"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Careers"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:_,children:"Contact"})})]}),Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("img",{src:S,alt:"fb ico"}),Object(o.jsx)("img",{src:I,alt:"twitter ico"}),Object(o.jsx)("img",{src:B,alt:"pinterest ico"}),Object(o.jsx)("img",{src:D,alt:"insta ico"})]})]})};c(26);var R=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)(w,{}),Object(o.jsx)(L,{})]})};s.a.render(Object(o.jsx)(R,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.1d9ab358.chunk.js.map