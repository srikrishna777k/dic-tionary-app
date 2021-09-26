(this["webpackJsonpdic-tionary-app"]=this["webpackJsonpdic-tionary-app"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(8),l=t.n(s),i=(t(73),t(42)),r=t(41),u=t.n(r),o=t(54),b=t(30),j=t(4),d=t(137),h=t(134),p=t(55),m=(t(93),t(62)),O=t(131),f=t(135),v=t(138),g=(t(94),[{value:"English",label:"en"},{value:"Hindi",label:"hi"},{value:"Spanish",label:"es"},{value:"French",label:"fr"},{value:"Japanese",label:"ja"},{value:"Russian",label:"ru"},{value:"German",label:"de"},{value:"Italian",label:"it"},{value:"Korean",label:"ko"},{value:"Brazilian Portuguese",label:"pt-BR"},{value:"Arabic",label:"ar"},{value:"Turkish",label:"tr"}]),x=t(6),k=function(e){var a=e.language,t=e.setLanguage,n=e.input,c=e.setInput,s=e.lightmode,l=Object(m.a)({palette:{primary:{main:s?"#000":"#fff"},type:s?"light":"dark"}});return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("span",{className:"title",children:n||"Word House"}),Object(x.jsx)("form",{noValidate:!0,autoComplete:"off",className:"inputs",children:Object(x.jsxs)(O.a,{theme:l,children:[Object(x.jsx)(f.a,{label:"Input",className:"word",value:n,onChange:function(e){c(e.target.value)}}),Object(x.jsx)(f.a,{select:!0,label:"Language",className:"select",value:a,onChange:function(e){var a;a=e.target.value,t(a),c("")},children:g.map((function(e){return Object(x.jsx)(v.a,{value:e.label,children:e.value},e.label)}))})]})})]})},y=t(61),N=t.n(y),w=(t(99),function(e){var a=e.definition,t=e.input,n=e.language,c=e.lightmode;return Object(x.jsxs)("div",{className:"meanings scroll",children:[t&&a[0]&&"en"===n&&Object(x.jsx)(N.a,{className:"audio",src:a[0].phonetics[0]&&a[0].phonetics[0].audio,controls:!0}),t?a.map((function(e){return e.meanings.map((function(e){return e.definitions.map((function(e){return Object(x.jsxs)("div",{className:"def",style:{backgroundColor:c?"#28303d":"white",color:c?"white":"black"},children:[Object(x.jsx)("b",{className:"type",children:e.definition}),Object(x.jsx)("hr",{className:"break"}),e.example&&Object(x.jsxs)("span",{className:"type",children:[Object(x.jsx)("b",{children:"Example : "}),e.example]}),1==e.synonyms&&Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Synonyms : "}),e.synonyms.map((function(e){return"".concat(e,", ")}))]})]})}))}))})):Object(x.jsx)("div",{className:"enter",children:"Enter something"})]})}),C=t(38);var S=function(){var e=Object(j.a)({switchBase:{color:C.a[300],"&$checked":{color:C.a[500]},"&$checked + $track":{backgroundColor:C.a[500]}},checked:{},track:{}})(d.a),a=Object(n.useState)(""),t=Object(b.a)(a,2),c=t[0],s=t[1],l=Object(n.useState)([]),r=Object(b.a)(l,2),m=r[0],O=r[1],f=Object(n.useState)("en"),v=Object(b.a)(f,2),g=v[0],y=v[1],N=Object(n.useState)(0),S=Object(b.a)(N,2),E=S[0],I=S[1],B=function(){var e=Object(o.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.get)("https://api.dictionaryapi.dev/api/v2/entries/".concat(g,"/").concat(c));case 3:a=e.sent,t=a.data,O(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){B()}),[c,g]);var L={language:g,setLanguage:y,input:c,setInput:s,lightmode:E},J={definition:m,input:c,language:g,lightmode:E};return Object(x.jsx)("div",{className:"App",style:{backgroundColor:E?"#fff":"#28303d",color:E?"black":"white",transition:"all 0.5s linear"},children:Object(x.jsxs)(h.a,{maxWidth:"md",className:"container",children:[Object(x.jsxs)("div",{className:"theme",children:[Object(x.jsxs)("span",{children:[E?"Dark":"Light"," theme"]}),Object(x.jsx)(e,{onChange:function(){return I(!E)},checked:E})]}),Object(x.jsx)(k,Object(i.a)({},L)),Object(x.jsx)(w,Object(i.a)({},J))]})})};l.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))},73:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},99:function(e,a,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.b50e7119.chunk.js.map