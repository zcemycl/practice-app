(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{304:function(e,t){},371:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(47),s=n.n(a),r=n(191),o=n(21),i=n(116),h=n(388),d=n(168),l=n.n(d),j=n(383),u=n(192),b=n(387),p=n(188),O=n(189),g=n(75),x=n(14),f=function(){var e=Object(c.useState)(12),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),d=Object(o.a)(s,2),f=d[0],m=d[1],k=Object(c.useState)([]),v=Object(o.a)(k,2),w=v[0],y=v[1],B=l.a.connect("https://hidden-dusk-28735.herokuapp.com/test",{reconnection:!0});return Object(c.useEffect)((function(){B.on("newnumber",(function(e){console.log(e.number),y((function(t){return t.length>=15&&t.shift(),[].concat(Object(r.a)(t),[{uv:e.number}])}))})),console.log(w)}),[]),Object(c.useEffect)((function(){fetch("https://hidden-dusk-28735.herokuapp.com/").then((function(e){return e.json()})).then((function(e){m(e.data)}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:"Hello Leo Leung."})}),Object(x.jsx)("p",{children:"Slider + Chart testing"}),Object(x.jsxs)("div",{style:{height:"20vh"},children:[Object(x.jsx)(i.Bar,{data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of votes",data:[n,19,3,5,2,3],backgroundColor:["red","blue","yellow","green","purple","orange"]}]},height:400,width:600,options:{maintainAspectRatio:!1}}),Object(x.jsx)("div",{style:{textAlign:"center",width:"70vw"},children:Object(x.jsx)(h.a,{value:n,onChange:function(e,t){a(t)}})})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["Data import from ",Object(x.jsx)("a",{href:"https://hidden-dusk-28735.herokuapp.com/",target:"_blank",children:"https://hidden-dusk-28735.herokuapp.com/"})]}),Object(x.jsx)("div",{style:{height:"20vh"},children:Object(x.jsx)(i.Bar,{data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of votes",data:f,backgroundColor:["red","blue","yellow","green","purple","orange"]}]},height:200,width:600,options:{maintainAspectRatio:!1}})}),Object(x.jsxs)("p",{children:["Data import from ",Object(x.jsx)("a",{href:"https://hidden-dusk-28735.herokuapp.com/getrealtimedata",target:"_blank",children:"https://hidden-dusk-28735.herokuapp.com/getrealtimedata"})]}),Object(x.jsx)("div",{style:{height:"20vh",width:"80vw"},children:Object(x.jsxs)(j.a,{width:600,height:200,data:w.slice(Math.max(w.length-10,0)),children:[Object(x.jsx)(u.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),Object(x.jsx)(b.a,{stroke:"#ccc"}),Object(x.jsx)(p.a,{}),Object(x.jsx)(O.a,{}),Object(x.jsx)(g.a,{})]})})]})},m=document.getElementById("root");s.a.render(Object(x.jsx)(f,{}),m)}},[[371,1,2]]]);
//# sourceMappingURL=main.fc2b6be8.chunk.js.map