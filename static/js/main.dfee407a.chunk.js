(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{421:function(e,t){},661:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(26),r=a.n(i),s=a(27),o=a(692),l=Object(o.a)((function(e){return{card:{maxWidth:"100%",height:"100%"},bar:{height:"35%",width:"35%"},cardcontent:{display:"flex"}}})),d=a(157),b=a(694),j=a(4),u=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=l();return Object(n.useEffect)((function(){fetch("https://hidden-dusk-28735.herokuapp.com/").then((function(e){return e.json()})).then((function(e){c(e.data)}))}),[]),Object(j.jsx)(b.a,{className:i.card,children:Object(j.jsx)(d.Bar,{className:i.bar,data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of votes",data:a,backgroundColor:"rgba(0, 181, 204, 1) "}]},height:"35%",width:"35%"})})},h=Object(o.a)((function(e){return{card:{maxWidth:"100%",height:"100%"},bar:{height:"35%",width:"35%"},cardcontent:{display:"flex"}}})),p=a(722),x=a(696),g=function(){var e=h(),t=Object(n.useState)(5),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(j.jsxs)(b.a,{className:e.card,children:[Object(j.jsx)(d.Bar,{className:e.bar,data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of votes",data:[c,10,3,5,2,3],backgroundColor:"rgba(137, 196, 244, 1)"}]},height:"35%",width:"35%"}),Object(j.jsx)(x.a,{className:e.cardContent,children:Object(j.jsx)(p.a,{value:c,onChange:function(e,t){i(t)},valueLabelDisplay:"auto",min:0,max:20,marks:[{value:0,label:"0"},{value:5,label:"5"},{value:20,label:"20"}]})})]})},m=a(161),O=a(114),f=a.n(O),v=a(697),w=a(698),y=a(299),k=a(702),N=a(292),C=a(293),A=a(137),_=Object(o.a)((function(e){return{card:{maxWidth:"100%",height:"100%"}}})),I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=_(),r=f.a.connect("https://hidden-dusk-28735.herokuapp.com/test",{reconnection:!0});return Object(n.useEffect)((function(){r.on("newnumber",(function(e){c((function(t){return t.length>=10&&t.shift(),[].concat(Object(m.a)(t),[{uv:e.number}])}))}))}),[]),Object(j.jsx)(b.a,{className:i.card,children:Object(j.jsx)(v.a,{width:"95%",aspect:.95,children:Object(j.jsxs)(w.a,{data:a,children:[Object(j.jsx)(y.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),Object(j.jsx)(k.a,{stroke:"#ccc"}),Object(j.jsx)(N.a,{fontSize:"0.8em"}),Object(j.jsx)(C.a,{fontSize:"0.8em",width:30}),Object(j.jsx)(A.a,{})]})})})},R=a(62),P=a(703),S=a(723),B=a(704),G=a(705),E=a(706),z=Object(o.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),position:"relative"},root:{flexGrow:1},grid:{padding:"15vh 0 0 0"}}})),D=function(){var e=c.a.useState(0),t=Object(s.a)(e,2),a=t[0],n=t[1],i=z(),r=Object(R.a)();return Object(j.jsx)("div",{className:i.content,children:Object(j.jsxs)(P.a,{container:!0,justify:"center",direction:"row",spacing:0,className:i.grid,children:[function(e){switch(e){case 0:return Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(I,{})});case 1:return Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(g,{})});case 2:return Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(u,{})});default:return Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(I,{})})}}(a),Object(j.jsx)(P.a,{container:!0,justify:"center",direction:"row",spacing:0,children:Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(S.a,{steps:3,position:"static",variant:"text",activeStep:a,nextButton:Object(j.jsxs)(B.a,{size:"small",onClick:function(){n((function(e){return e+1}))},disabled:2===a,children:["Next","rtl"===r.direction?Object(j.jsx)(G.a,{}):Object(j.jsx)(E.a,{})]}),backButton:Object(j.jsxs)(B.a,{size:"small",onClick:function(){n((function(e){return e-1}))},disabled:0===a,children:["rtl"===r.direction?Object(j.jsx)(E.a,{}):Object(j.jsx)(G.a,{}),"Back"]})})})})]})})},F=a(707),L=a(708),W=a(664),M=a(709),T=a(296),J=a(724),U=a(710),Y=a(711),q=a(712),H=a(713),K=a(69),V=a(28),X=Object(o.a)((function(e){var t;return{appBar:(t={boxShadow:"none"},Object(K.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),Object(K.a)(t,"position","fixed"),Object(K.a)(t,"backgroundColor","white"),t),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:{},grow:{flexGrow:1},search:Object(K.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(V.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(V.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(K.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),Q=a(61),Z=[{id:0,name:"Progressive Graph",root:"/"},{id:1,name:"Authentication",root:"/auth"},{id:2,name:"Image Display",root:"/imgdisplay"},{id:3,name:"Chatapp",root:"/chatapp"}],$=function(){var e=X(),t=Object(n.useState)("Progressive Graph"),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),l=o[0],d=o[1],b=Boolean(l),u=function(e){i(e.target.text),d(null)};return Object(j.jsx)("div",{children:Object(j.jsx)(F.a,{className:e.appBar,children:Object(j.jsxs)(L.a,{children:[Object(j.jsx)(W.a,{variant:"h6",className:e.title,component:Q.b,to:"/practice-app/",onClick:function(){return i("Progressive Graph")},children:"Yui's"}),Object(j.jsxs)("div",{className:e.menuButton,children:[Object(j.jsx)(M.a,{"aria-label":"bookmark","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},children:Object(j.jsx)(U.a,{})}),Object(j.jsx)(T.a,{id:"long-menu",anchorEl:l,keepMounted:!0,open:b,onClose:u,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:Z.map((function(e){return Object(j.jsx)(J.a,{selected:e.name===c,onClick:u,component:Q.b,eventKey:e.id,to:"/practice-app"+e.root,children:e.name},e.name)}))}),Object(j.jsx)(M.a,{href:"https://github.com/zcemycl",target:"_blank","aria-label":"GitHub Repository",children:Object(j.jsx)(Y.a,{})}),Object(j.jsx)(M.a,{href:"https://www.linkedin.com/in/yui-chun-leung-48524b134",target:"_blank","aria-label":"LinkedIn Profile",children:Object(j.jsx)(q.a,{})}),Object(j.jsx)(M.a,{disabled:!0,children:Object(j.jsx)(H.a,{})})]})]})})})},ee=Object(o.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),position:"relative"},root:{flexGrow:1},grid:{padding:"15vh 0 0 0"},card:{maxWidth:"100%",height:"100%",textAlign:"center"}}})),te=a(714),ae=a.p+"static/media/2b.de3029cd.png",ne=function(){var e=ee();return Object(j.jsx)("div",{className:e.content,children:Object(j.jsx)(P.a,{container:!0,justify:"center",direction:"row",spacing:0,className:e.grid,children:Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsxs)(b.a,{className:e.card,children:[Object(j.jsx)(te.a,{component:"img",image:ae,title:"2b"}),Object(j.jsx)(x.a,{children:Object(j.jsx)(W.a,{variant:"h5",children:"Image Display"})})]})})})})},ce=Object(o.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),position:"relative"},form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"75%"}},card:{maxWidth:"100%",height:"100%",textAlign:"center",padding:"5% 0 4%"},grid:{padding:"15vh 0 0 0"},button:{marginLeft:"65%",marginTop:"7%"},divbtn:{display:"flex"}}})),ie=a(37),re=a(55),se=a(719),oe=a(715),le=a(716),de=a(717),be=function(e){var t,a=e.handleSignIn,c=e.valueUser,i=e.valuePwd,r=(e.isAuth,e.setIsAuth,ce()),o=Object(n.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),l=Object(s.a)(o,2),d=l[0],b=l[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:r.form,noValidate:!0,autoComplete:"off",children:[Object(j.jsx)(se.a,{id:"username",inputRef:c,label:"Username",required:!0,variant:"outlined"}),Object(j.jsx)(se.a,{id:"password",inputRef:i,label:"Password",required:!0,variant:"outlined",onChange:(t="password",function(e){b(Object(re.a)(Object(re.a)({},d),{},Object(K.a)({},t,e.target.value)))}),type:d.showPassword?"text":"password",value:d.password,InputProps:{endAdornment:Object(j.jsx)(oe.a,{position:"end",children:Object(j.jsx)(M.a,{"aria-label":"toggle password visibility",onClick:function(){b(Object(re.a)(Object(re.a)({},d),{},{showPassword:!d.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:d.showPassword?Object(j.jsx)(le.a,{}):Object(j.jsx)(de.a,{})})})}}),Object(j.jsx)("div",{className:r.divbtn,children:Object(j.jsx)(B.a,{type:"submit",variant:"contained",className:r.button,color:"primary",disableElevation:!0,onClick:a,component:Q.b,to:"/practice-app/profile",children:"Login"})})]})})},je=function(e){var t=e.isAuth,a=e.setIsAuth,c=ce(),i=Object(n.useRef)(""),r=Object(n.useRef)("");return t?Object(j.jsx)(ie.a,{to:"/practice-app/profile"}):Object(j.jsx)("div",{className:c.content,children:Object(j.jsx)(P.a,{container:!0,justify:"center",direction:"row",spacing:0,className:c.grid,children:Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsxs)(b.a,{className:c.card,children:[Object(j.jsx)(x.a,{children:Object(j.jsx)(W.a,{variant:"h5",children:"Login Form"})}),Object(j.jsx)(be,{handleSignIn:function(){var e="IamLeo",t=i.current.value===e,n=r.current.value===e;t&&n&&a(!0)},valueUser:i,valuePwd:r,isAuth:t,setIsAuth:a})]})})})})},ue=Object(o.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),position:"relative",overflow:"hidden"},root:{flexGrow:1},grid:{padding:"15vh 0 0 0"},message_holder:{overflow:"scroll",height:"80%",padding:"5%"},card:{width:"100%",height:"70vh",textAlign:"center",position:"relative"},bx1left:{display:"flex",flexDirection:"row",position:"relative"},bx2left:{display:"flex",backgroundColor:"#AFEEEE",position:"relative",textAlign:"left",width:"fit-content",borderRadius:"15px 50px 30px 5px"},bx3left:{position:"absolute",top:"-10px",backgroundColor:"#48D1CC",textAlign:"left",height:"30%",borderRadius:"10px",padding:"1%",wordWrap:"break-word"},bx3right:{position:"absolute",top:"-10px",backgroundColor:"#66CDAA",textAlign:"right",height:"30%",borderRadius:"10px",padding:"1%",wordWrap:"break-word"},bx1right:{display:"flex",flexDirection:"row-reverse",position:"relative"},bx2right:{display:"flex",backgroundColor:"#7FFFD4",position:"relative",textAlign:"right",width:"fit-content",borderRadius:"50px 15px 5px 30px "},form:{width:"100%",position:"absolute",bottom:"1%",height:"10%",padding:"2% 1%"},button:{width:"10%",height:"100%"},txtfm:{width:"50%",height:"100%"},txtfu:{width:"30%",height:"100%",marginRight:"2%"}}})),he=a(718),pe=a(720),xe=function(e){var t=e.target,a=e.msg,n=e.name,c=ue(),i=null,r=null,s=null;return"me"===t?(i=c.bx1right,r=c.bx2right,s=c.bx3right):(i=c.bx1left,r=c.bx2left,s=c.bx3left),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(pe.a,{className:i,p:1.2,children:[Object(j.jsx)(pe.a,{className:s,p:1,children:Object(j.jsx)(W.a,{variant:"body1",style:{fontSize:"70%"},children:n})}),Object(j.jsx)(pe.a,{className:r,p:1,children:Object(j.jsx)(W.a,{variant:"body1",children:a})})]})})},ge=a(294),me=a.n(ge),Oe=function(){var e=ue(),t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useRef)(""),o=Object(n.useRef)(""),l="https://hidden-dusk-28735.herokuapp.com",d=Object(n.useRef)();d.current=f()(l,{reconnection:!0}),Object(n.useEffect)((function(){void 0===d.current.id&&(d.current=f()(l,{reconnection:!0})),d.current.on("my_response",(function(e){console.log("receiving..."),console.log(d.current.id),console.log(e.senderId);var t=Object(re.a)(Object(re.a)({},e),{},{same:d.current.id===e.senderId});i((function(e){return[].concat(Object(m.a)(e),[t])}))}))}),[]);return Object(j.jsx)("div",{className:e.content,children:Object(j.jsx)(P.a,{container:!0,justify:"center",direction:"row",spacing:0,className:e.grid,children:Object(j.jsx)(P.a,{xs:12,sm:8,md:6,lg:4,children:Object(j.jsxs)(b.a,{className:e.card,children:[Object(j.jsxs)(x.a,{class:e.message_holder,children:[Object(j.jsx)(W.a,{variant:"h5",style:{padding:"0 0 5%"},children:"Chatapp [Testing]"}),Object(j.jsx)(he.a,{}),Object(j.jsxs)("div",{style:{padding:"5% 0 0"},children:[Object(j.jsx)(xe,{target:"other",name:"Admin",msg:"I am Leo."}),Object(j.jsx)(xe,{target:"other",name:"Admin",msg:"Feel free to share this link, and start chatting. The record won't be stored."}),c.map((function(e){return Object(j.jsx)(xe,{target:e.same?"me":"other",name:e.user+" "+e.senderId.substring(0,6),msg:e.body})}))]})]}),Object(j.jsxs)("form",{className:e.form,children:[Object(j.jsx)(he.a,{style:{marginBottom:"1%"}}),Object(j.jsx)(se.a,{id:"user",label:"Nickname",variant:"outlined",inputRef:r,className:e.txtfu}),Object(j.jsx)(se.a,{id:"sendMsg",label:"Send Message ...",variant:"outlined",inputRef:o,className:e.txtfm}),Object(j.jsx)(M.a,{className:e.button,onClick:function(){console.log("sending..."),void 0===d.current.id&&(d.current=f()(l,{reconnection:!0})),console.log(o.current.value),console.log(r.current.value),console.log(d.current.id),d.current.emit("my_event",{body:o.current.value,user:r.current.value,senderId:d.current.id}),o.current.value=""},children:Object(j.jsx)(me.a,{})})]})]})})})})},fe=a(295),ve=a.n(fe),we={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}},ye=Object(o.a)((function(e){return{particleBg:{fontFamily:"sans-serif",textAlign:"center",top:0,left:0,right:0,bottom:0,height:"100%",backgroundSize:"cover",background:"#B0E0E6",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed"},particles:{height:"100vh",width:"100vw"}}})),ke=Object(o.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),position:"relative"},grid:{padding:"15vh 0 0 0"},card:{maxWidth:"100%",height:"100%",textAlign:"center"},typo:{alignItems:"center"}}})),Ne=Object(ie.g)((function(){var e=ke();return Object(j.jsx)("div",{className:e.content,children:Object(j.jsx)(P.a,{container:!0,justify:"center",direction:"row",spacing:0,className:e.grid,children:Object(j.jsx)(P.a,{xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(b.a,{className:e.card,children:Object(j.jsx)(x.a,{children:Object(j.jsx)(W.a,{variant:"h5",children:"Profile many Profile"})})})})})})})),Ce=a(298),Ae=function(e){var t=e.isAuth,a=e.component,n=Object(Ce.a)(e,["isAuth","component"]);return Object(j.jsx)(ie.b,Object(re.a)(Object(re.a)({},n),{},{render:function(e){return t?Object(j.jsx)(a,{}):Object(j.jsx)(ie.a,{to:{pathname:"/practice-app/auth",state:{from:e.location}}})}}))},_e=function(){var e=ye(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(j.jsx)(Q.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:e.particleBg,children:Object(j.jsx)(ve.a,{className:e.particles,config:we})}),Object(j.jsx)($,{}),Object(j.jsxs)(ie.d,{children:[Object(j.jsx)(ie.b,{exact:!0,path:"/practice-app/",children:Object(j.jsx)(D,{})}),Object(j.jsx)(ie.b,{exact:!0,path:"/practice-app/auth",children:Object(j.jsx)(je,{isAuth:c,setIsAuth:i})}),Object(j.jsx)(ie.b,{exact:!0,path:"/practice-app/imgdisplay",children:Object(j.jsx)(ne,{})}),Object(j.jsx)(ie.b,{exact:!0,path:"/practice-app/chatapp",children:Object(j.jsx)(Oe,{})})]}),Object(j.jsx)(Ae,{path:"/practice-app/profile",component:Ne,isAuth:c})]})})},Ie=document.getElementById("root");r.a.render(Object(j.jsx)(_e,{}),Ie)}},[[661,1,2]]]);
//# sourceMappingURL=main.dfee407a.chunk.js.map