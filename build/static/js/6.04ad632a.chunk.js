(this.webpackJsonpreacttamplate=this.webpackJsonpreacttamplate||[]).push([[6],{157:function(e,a,t){"use strict";t.r(a);var n=t(132),l=t(0),r=t.n(l),c=t(15),i=t(33),m=t(158),s=t(128);a.default=function(){var e=Object(c.c)(),a=Object(l.useState)(""),t=Object(n.a)(a,2),p=t[0],o=t[1],u=Object(l.useState)(""),g=Object(n.a)(u,2),b=g[0],h=g[1],v=Object(l.useState)(""),d=Object(n.a)(v,2),f=d[0],y=d[1];return r.a.createElement("form",{style:{display:"flex",padding:"0 0 30px 10px"}},r.a.createElement("div",{style:{marginRight:"10px"}},r.a.createElement(m.a,{label:"name",name:"name",type:"text",value:p,onChange:function(e){var a=e.target;o(a.value)}}),r.a.createElement("br",null),r.a.createElement(m.a,{label:"email",type:"email",name:"email",value:b,onChange:function(e){var a=e.target;h(a.value)}}),r.a.createElement("br",null),r.a.createElement(m.a,{error:!(f.length<1||f.length>6),helperText:f.length<1||f.length>6?"":"need more symbols",label:"password",type:"password",name:"password",value:f,onChange:function(e){var a=e.target;y(a.value)}})),r.a.createElement(s.a,{style:{height:"40px",marginTop:"60px"},variant:"contained",color:"primary",type:"submit",onClick:function(a){a.preventDefault(),e(i.a.register({name:p,email:b,password:f}))}},"Register"))}}}]);
//# sourceMappingURL=6.04ad632a.chunk.js.map