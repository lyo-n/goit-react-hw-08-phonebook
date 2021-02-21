(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{112:function(t,e,n){},115:function(t,e,n){"use strict";n.r(e);var c,r,a,o,u,s=n(0),i=n(18),b=n.n(i),j=n(12),l=n(55),O=n(56),d=n(70),f=n(69),g=n(17),h=n(53),p=n(42),v=n(25),m=n(9),C=[{path:"/login",label:"Login",exact:!0,component:Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,162))})),private:!1,restricted:!0},{path:"/register",label:"Register",exact:!0,component:Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,163))})),private:!1,restricted:!0},{path:"/contacts",label:"Contacts",exact:!0,component:Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,165))})),private:!0,restricted:!1}],x=n(45),_=n(2),k=function(t){var e=t.component,n=Object(x.a)(t,["component"]),c=Object(g.d)((function(t){return t.auth.token}));return Object(_.jsx)(m.b,Object(j.a)(Object(j.a)({},n),{},{render:function(t){return c?Object(_.jsx)(e,Object(j.a)({},t)):Object(_.jsx)(m.a,{to:"/login"})}}))},S=function(t){var e=t.component,n=t.restricted,c=Object(x.a)(t,["component","restricted"]),r=Object(g.d)((function(t){return t.auth.token}));return Object(_.jsx)(m.b,Object(j.a)(Object(j.a)({},c),{},{render:function(t){return r&&n?Object(_.jsx)(m.a,{to:"/contacts"}):Object(_.jsx)(e,Object(j.a)({},t))}}))},y={isAuthenticated:function(t){return t.auth.token},usersName:function(t){return t.auth.user.name},loading:function(t){return t.auth.loading},error:function(t){return t.auth.error}},E=n(132),L=n(46),R=n.n(L),N={appear:R.a.appear,appearActive:R.a.appearActive},q=function(){return Object(_.jsx)(E.a,{in:!0,appear:!0,timeout:500,classNames:N,unmountOnExit:!0,children:Object(_.jsx)("h1",{className:R.a.logo,children:"Phonebook"})})},A=n(24),M=n.n(A),U=function(){return Object(_.jsxs)("nav",{className:M.a.nav,children:[Object(_.jsx)(v.b,{exact:!0,to:"/login",className:M.a.NavigationLink+" "+M.a.navLink,activeClassName:M.a.NavigationLinkActive,children:"Login"}),Object(_.jsx)("br",{}),Object(_.jsx)(v.b,{to:"/register",className:M.a.NavigationLink+" "+M.a.navLink,activeClassName:M.a.NavigationLinkActive,children:"Register"})]})},w=n(131),z=n(32),I=n.n(z),P=Object(g.b)((function(t){return{name:y.usersName(t)}}),{onLogout:p.a.logoutUser})((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(_.jsx)("div",{className:I.a.userMenu,children:Object(_.jsxs)("div",{className:I.a.container,children:[Object(_.jsx)("img",{src:e,alt:"",width:"32",className:I.a.avatar}),Object(_.jsx)("span",{className:I.a.name,children:n}),Object(_.jsx)(w.a,{className:I.a.btn,variant:"contained",color:"secondary",type:"button",onClick:c,children:"Logout"})]})})})),F=Object(g.b)((function(t){return{isAuthenticated:y.isAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(_.jsxs)("header",{children:[Object(_.jsx)(q,{}),e?Object(_.jsx)(P,{}):Object(_.jsx)(U,{})]})})),B=(n(112),function(){return Object(_.jsxs)(v.a,{children:[Object(_.jsx)(F,{}),Object(_.jsx)(s.Suspense,{fallback:Object(_.jsx)("h1",{children:"Loading..."}),children:Object(_.jsxs)(m.d,{children:[C.map((function(t){return t.private?Object(_.jsx)(k,Object(j.a)({},t),t.label):Object(_.jsx)(S,Object(j.a)(Object(j.a)({},t),{},{restricted:t.restricted}),t.label)})),Object(_.jsx)(m.a,{to:"/login"})]})})]})}),D=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.currentUser()}},{key:"render",value:function(){return Object(_.jsx)(B,Object(j.a)({},this.props))}}]),n}(s.Component),G=Object(g.b)((function(t){return{isloadingContacts:h.a.getLoading(t)}}),(function(t){return{currentUser:function(){return t(p.a.getCurrentUser())}}}))(D),J=n(76),W=n(3),V=n(36),Z=n(4),H=n(78),K=n(10),Q=n(13),T=Object(W.c)([],(c={},Object(Z.a)(c,Q.a.fetchContactSuccess,(function(t,e){return e.payload})),Object(Z.a)(c,Q.a.addContactSuccess,(function(t,e){return[].concat(Object(H.a)(t),[e.payload])})),Object(Z.a)(c,Q.a.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),X=Object(W.c)("",Object(Z.a)({},Q.a.changeFilter,(function(t,e){return e.payload}))),Y=Object(W.c)(!1,(r={},Object(Z.a)(r,Q.a.addContactRequest,(function(){return!0})),Object(Z.a)(r,Q.a.addContactSuccess,(function(){return!1})),Object(Z.a)(r,Q.a.addContactError,(function(){return!1})),Object(Z.a)(r,Q.a.fetchContactRequest,(function(){return!0})),Object(Z.a)(r,Q.a.fetchContactSuccess,(function(){return!1})),Object(Z.a)(r,Q.a.fetchContactError,(function(){return!1})),Object(Z.a)(r,Q.a.removeContactRequest,(function(){return!0})),Object(Z.a)(r,Q.a.removeContactSuccess,(function(){return!1})),Object(Z.a)(r,Q.a.removeContactError,(function(){return!1})),r)),$=Object(K.c)({arrayItems:T,loading:Y,filter:X}),tt=n(52),et=n(77),nt=n.n(et),ct=n(5),rt={name:null,email:null},at=Object(W.c)(rt,(a={},Object(Z.a)(a,ct.a.registerSuccess,(function(t,e){return e.payload.user})),Object(Z.a)(a,ct.a.loginSuccess,(function(t,e){return e.payload.user})),Object(Z.a)(a,ct.a.getCurrentSuccess,(function(t,e){return e.payload})),Object(Z.a)(a,ct.a.logoutSuccess,(function(){return rt})),a)),ot=Object(W.c)(null,(o={},Object(Z.a)(o,ct.a.registerSuccess,(function(t,e){return e.payload.token})),Object(Z.a)(o,ct.a.loginSuccess,(function(t,e){return e.payload.token})),Object(Z.a)(o,ct.a.logoutSuccess,(function(){return null})),o)),ut=Object(W.c)(null,(u={},Object(Z.a)(u,ct.a.registerError,(function(t,e){return e.payload})),Object(Z.a)(u,ct.a.loginError,(function(t,e){return e.payload})),Object(Z.a)(u,ct.a.logoutError,(function(t,e){return e.payload})),Object(Z.a)(u,ct.a.getCurrentError,(function(t,e){return e.payload})),u)),st=Object(K.c)({user:at,token:ot,error:ut}),it={key:"auth",storage:nt.a,whitelist:["token"]},bt=Object(W.a)({reducer:{contacts:$,auth:Object(tt.a)(it,st)},middleware:[V.a]}),jt=Object(tt.b)(bt);b.a.render(Object(_.jsx)(g.a,{store:bt,children:Object(_.jsx)(J.a,{persistor:jt,children:Object(_.jsx)(G,{})})}),document.getElementById("root"))},13:function(t,e,n){"use strict";var c=n(3),r={fetchContactRequest:Object(c.b)("contacts/fetchRequest"),fetchContactSuccess:Object(c.b)("contacts/fetchSuccess"),fetchContactError:Object(c.b)("contacts/fetchError"),addContactRequest:Object(c.b)("contacts/addRequest"),addContactSuccess:Object(c.b)("contacts/addSuccess"),addContactError:Object(c.b)("contacts/addError"),removeContactRequest:Object(c.b)("contacts/removeRequest"),removeContactSuccess:Object(c.b)("contacts/removeSuccess"),removeContactError:Object(c.b)("contacts/removeError"),deleteContact:Object(c.b)("contacts/remove"),changeFilter:Object(c.b)("contscts/changeFilter")};e.a=r},24:function(t,e,n){t.exports={nav:"nav_nav__2svnm",NavigationLink:"nav_NavigationLink__2zxsp",navLink:"nav_navLink__1NnPE",NavigationLinkActive:"nav_NavigationLinkActive__RdAm7",AddInfoLink:"nav_AddInfoLink__fIuWc"}},32:function(t,e,n){t.exports={userMenu:"userMenu_userMenu__35V5E",container:"userMenu_container__3Zyo2",avatar:"userMenu_avatar__2Dsp0",name:"userMenu_name__2L9rG",btn:"userMenu_btn__2GtqO"}},42:function(t,e,n){"use strict";var c=n(23),r=n.n(c),a=n(5);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var o=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){r.a.defaults.headers.common.Authorization=""},s={registrationUser:function(t){return function(e){e(a.a.registerRequest()),r.a.post("users/signup",t).then((function(t){o(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){return e(a.a.registerError(t))}))}},authorizationUser:function(t){return function(e){e(a.a.loginRequest()),r.a.post("users/login",t).then((function(t){o(t.data.token),e(a.a.loginSuccess(t.data))})).catch((function(t){return e(a.a.loginError(t))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(a.a.getCurrentRequest()),r.a.get("users/current").then((function(e){var n=e.data;return t(a.a.getCurrentSuccess(n))})).catch((function(t){return a.a.getCurrentError(t)})))}},logoutUser:function(){return function(t){t(a.a.logoutRequest()),r.a.post("users/logout").then((function(){u(),t(a.a.logoutSuccess())})).catch((function(e){return t(a.a.logoutError(e))}))}}};e.a=s},46:function(t,e,n){t.exports={logo:"logo_logo__j2gMh",appear:"logo_appear__3CWM9",appearActive:"logo_appearActive__1w1zy"}},5:function(t,e,n){"use strict";var c=n(3),r={registerRequest:Object(c.b)("auth/registerRequest"),registerSuccess:Object(c.b)("auth/registerSuccess"),registerError:Object(c.b)("auth/registerError"),loginRequest:Object(c.b)("auth/loginRequest"),loginSuccess:Object(c.b)("auth/loginSuccess"),loginError:Object(c.b)("auth/loginError"),logoutRequest:Object(c.b)("auth/logoutRequest"),logoutSuccess:Object(c.b)("auth/logoutSuccess"),logoutError:Object(c.b)("auth/logoutError"),getCurrentRequest:Object(c.b)("auth/getCurrentRequest"),getCurrentSuccess:Object(c.b)("auth/getCurrentSuccess"),getCurrentError:Object(c.b)("auth/getCurrentError")};e.a=r},53:function(t,e,n){"use strict";var c=n(34),r=function(t){return t.contacts.arrayItems},a=function(t){return t.contacts.filter},o={selectContacts:Object(c.a)([r,a],(function(t,e){return t&&t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContacts:r,getFilter:a,getLoading:function(t){return t.contacts.loading}};e.a=o}},[[115,2,3]]]);
//# sourceMappingURL=main.a73d3631.chunk.js.map