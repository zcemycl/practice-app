(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{315:function(e,t){},379:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(50),r=n.n(a),s=n(21),i=n(393),o=Object(i.a)((function(e){return{}})),d=n(95),h=n(400),j=n(12),u=function(){o();var e=Object(c.useState)(12),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Slider + Chart testing"}),Object(j.jsxs)("div",{style:{height:"20vh"},children:[Object(j.jsx)(d.Bar,{data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of votes",data:[n,19,3,5,2,3],backgroundColor:["red","blue","yellow","green","purple","orange"]}]},height:400,width:600,options:{maintainAspectRatio:!1}}),Object(j.jsx)("div",{style:{textAlign:"center",width:"70vw"},children:Object(j.jsx)(h.a,{value:n,onChange:function(e,t){a(t)}})})]})]})},l=Object(i.a)((function(e){return{}})),b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];l();return Object(c.useEffect)((function(){fetch("https://hidden-dusk-28735.herokuapp.com/").then((function(e){return e.json()})).then((function(e){a(e.data)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Data import from ",Object(j.jsx)("a",{href:"https://hidden-dusk-28735.herokuapp.com/",target:"_blank",children:"https://hidden-dusk-28735.herokuapp.com/"})]}),Object(j.jsx)("div",{style:{height:"20vh"},children:Object(j.jsx)(d.Bar,{data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of votes",data:n,backgroundColor:["red","blue","yellow","green","purple","orange"]}]},height:200,width:600,options:{maintainAspectRatio:!1}})})]})},p=n(199),O=n(181),x=n.n(O),f=n(395),g=n(200),v=n(399),k=n(196),m=n(197),w=n(80),y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=x.a.connect("https://hidden-dusk-28735.herokuapp.com/test",{reconnection:!0});return Object(c.useEffect)((function(){r.on("newnumber",(function(e){a((function(t){return t.length>=15&&t.shift(),[].concat(Object(p.a)(t),[{uv:e.number}])}))}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Data import from ",Object(j.jsx)("a",{href:"https://hidden-dusk-28735.herokuapp.com/getrealtimedata",target:"_blank",children:"https://hidden-dusk-28735.herokuapp.com/getrealtimedata"})]}),Object(j.jsx)("div",{style:{height:"20vh",width:"80vw"},children:Object(j.jsxs)(f.a,{width:600,height:200,data:n.slice(Math.max(n.length-10,0)),children:[Object(j.jsx)(g.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),Object(j.jsx)(v.a,{stroke:"#ccc"}),Object(j.jsx)(k.a,{}),Object(j.jsx)(m.a,{}),Object(j.jsx)(w.a,{})]})})]})},B=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)("br",{}),Object(j.jsx)(b,{}),Object(j.jsx)(y,{})]})},C=document.getElementById("root");r.a.render(Object(j.jsx)(B,{}),C)}},[[379,1,2]]]);
//# sourceMappingURL=main.9b56eecf.chunk.js.map