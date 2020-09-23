(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{128:function(e,n,t){e.exports=t(168)},142:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAPVJREFUOE+Nk711wjAUhe/lWK7ZICpQHTYANkgmCIyQSWCDMIpHcC8XHiF1RPRypBN8bJAlq1Nxv/fzSRRjtjfgXDn3zr7/xoJzM+bogV1t7YnOmAbkTkRa5dyhBAlhIb9iHe8PFK3Xrq4bAq8lyDhMkVNl7ZUBtASSCodsBJQgc+EJYA7yq9TbfeZ72+M9Dx0kOwF6AjpW+p/5UdITYNRJS+Al3r3/rLvukjKcBExUBUBG8RNgHA6VsVodc4ongNS2S4oHQE5VDhIBuXDpnXBJOAv5MeZK8mPO86O6YRwRXQH7OILbbPaq65oFP3l49lBK09r2D7wK+1wi9HpOAAAAAElFTkSuQmCC"},165:function(e,n,t){},168:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),c=t.n(o),i=t(36),l=t(76),u=t(8),s=t(3),m=t(4);function p(){var e=Object(m.a)(["\n\n\n* {\n    box-sizing: border-box;\n}\n\n*, *:before, *:after {\n    -moz-box-sizing: border-box; \n    -webkit-box-sizing: border-box; \n    box-sizing: border-box;\n    font-family: 'Raleway', sans-serif;\n}\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    overflow-x:hidden;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n"]);return p=function(){return e},e}var d=Object(s.b)(p()),h={primary:"#0075D8",text:"#080c51",button:"#0075D8",bg:"#BCE0FD",border:"#BCE0FD",warning:"#FB2626"},f={home:"/",login:"/login",createAccount:"/create-account",addLesson:"/add-lesson",homeInstructor:"/home-instructor",listOfStudents:"/list-of-students",instructorCalendar:"/calendar-instructor"},b=t(11),v=t.n(b),g=t(111),E=t(18),x=t(80),j=t.n(x);t(135),t(137);j.a.initializeApp("{");var w=j.a.auth(),y=j.a.firestore(),O=function(){var e=Object(E.a)(v.a.mark((function e(n,t){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return a=y.doc("users/".concat(n.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=16;break}return r=n.email,e.prev=8,e.next=11,a.set(Object(g.a)({email:r},t));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",k(n.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,y.doc("users/".concat(n)).get();case 5:return t=e.sent,e.abrupt("return",Object(g.a)({uid:n},t.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=Object(E.a)(v.a.mark((function e(n){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.firestore().collection("users").get();case 2:return t=e.sent,a=t.docs.map((function(e){return e.data()})),console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),N=t(82),C=t.n(N);function A(){var e=Object(m.a)(["\n  position: absolute;\n  top: 25px;\n  margin: 0 auto;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n\n  .ldio-qmjujd0lqs9 div {\n    position: absolute;\n    border-width: 4px;\n    border-style: solid;\n    opacity: 1;\n    border-radius: 50%;\n    animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n\n  .ldio-qmjujd0lqs9 div:nth-child(1) {\n    border-color: #93dbe9;\n  }\n\n  .ldio-qmjujd0lqs9 div:nth-child(2) {\n    border-color: #689cc5;\n    animation-delay: -0.5s;\n  }\n\n  .ldio-qmjujd0lqs9 {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0; /* see note above */\n  }\n  .ldio-qmjujd0lqs9 div {\n    box-sizing: content-box;\n  }\n"]);return A=function(){return e},e}function z(){var e=Object(m.a)(["\n   0% {\n    top: 96px;\n    left: 96px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 18px;\n    left: 18px;\n    width: 156px;\n    height: 156px;\n    opacity: 0;\n  }\n"]);return z=function(){return e},e}var D=Object(s.d)(z()),I=s.c.div(A(),D),M=function(){return r.a.createElement(I,{className:"loadingio-spinner-ripple-xvso974sx3b"},r.a.createElement("div",{className:"ldio-qmjujd0lqs9"},r.a.createElement("div",null),r.a.createElement("div",null)))},q=t(54),H=t(55),B=function(e,n,t){return N.store.addNotification({title:e,message:n,type:t,insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:1e3,onScreen:!0}})};function P(){var e=Object(m.a)(["\n  color: white;\n  font-size: 70px;\n  font-family: arial;\n  font-weight: bold;\n"]);return P=function(){return e},e}function R(){var e=Object(m.a)(["\n  border: 10px solid white;\n  height: 100px;\n  width: 100px;\n  margin-top: 30px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return e},e}var U=s.c.div(R()),F=s.c.span(P()),J=function(){return r.a.createElement(U,null,r.a.createElement(F,null,"L"))};function Z(){var e=Object(m.a)(["\n  color: ",";\n  padding: 0 10px;\n"]);return Z=function(){return e},e}function T(){var e=Object(m.a)(["\n  text-transform: uppercase;\n  color: ",";\n"]);return T=function(){return e},e}function V(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  background-color: ",";\n  clip-path: polygon(0 15%, 100% 78%, 100% 100%, 0% 100%);\n\n  @media (orientation: landscape) {\n    height: 100vh;\n    background-position: center top;\n    background-size: cover;\n    clip-path: polygon(0 0, 37% 0, 68% 100%, 0% 100%);\n  }\n"]);return V=function(){return e},e}function W(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  min-width: 320px;\n  border-radius: 10px;\n"]);return W=function(){return e},e}function Y(){var e=Object(m.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  min-height: 100vh;\n"]);return Y=function(){return e},e}var K=s.c.div(Y()),Q=s.c.div(W()),L=s.c.div(V(),(function(e){return e.theme.bg})),X=s.c.h2(T(),(function(e){return e.theme.text})),G=s.c.p(Z(),(function(e){return e.theme.warning})),$=function(e){var n=e.children,t=e.title,a=e.status,o=e.error;return r.a.createElement(K,null,r.a.createElement(L,null),r.a.createElement(Q,null,"in progress"===a&&r.a.createElement(M,null),r.a.createElement(X,null,t),o&&r.a.createElement(G,null,o),n,r.a.createElement(J,null)))};t.p,t(142);function _(){var e=Object(m.a)(["\n  margin: 5px auto 0;\n\n  color: ",";\n"]);return _=function(){return e},e}function ee(){var e=Object(m.a)(["\n  display: block;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: bold;\n"]);return ee=function(){return e},e}function ne(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 95%;\n  margin: 0 auto;\n  border: 2px solid ",";\n  border-radius: 5px;\n  outline-color: ",";\n\n  input {\n    color: ",";\n    padding: 8px;\n    border: none;\n    outline: none;\n    height: 100%;\n    flex-grow: 1;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(m.a)(["\n  width: 20vw;\n  min-width: 360px;\n\n  @media (max-width: 360px) {\n    min-width: 95vw;\n  }\n"]);return te=function(){return e},e}var ae=s.c.div(te()),re=s.c.div(ne(),(function(e){return e.theme.border}),(function(e){return e.theme.primary}),(function(e){return e.theme.text})),oe=s.c.label(ee()),ce=s.c.div(_(),(function(e){return e.theme.warning})),ie=function(e){var n=e.type,t=e.name,a=e.label;return r.a.createElement(q.a,{name:t},(function(e){var t=e.field,o=e.meta;return r.a.createElement(ae,null,r.a.createElement(oe,null,a),r.a.createElement(re,null,r.a.createElement("input",Object.assign({type:n},t))),o.touched&&o.error&&r.a.createElement(ce,null,o.error))}))};function le(){var e=Object(m.a)(["\n  display: block;\n  border: none;\n  background-color: ",";\n  width: 95%;\n  margin: 0 auto;\n  padding: 15px;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 15px;\n  border-radius: 5px;\n\n  cursor: pointer;\n  transition: 0.5s;\n\n  :hover {\n    transform: scale(1.05);\n    box-shadow: 0 0 10px 2px #bbb;\n  }\n"]);return le=function(){return e},e}var ue=s.c.button(le(),(function(e){return e.theme.button}));function se(){var e=Object(m.a)(["\n  border: none;\n  background-color: transparent;\n  color: ",";\n  margin-top: 20px;\n  padding-left: 10px;\n\n  cursor: pointer;\n  transition: 0.5s;\n\n  :hover {\n    transform: translateX(10px);\n  }\n"]);return se=function(){return e},e}var me=s.c.button(se(),(function(e){return e.theme.text})),pe=H.a().shape({email:H.b().required().email(),password:H.b().required().min(4)}),de=function(){var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),s=l[0],m=l[1],p=function(){var e=Object(E.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o("loading");try{w.signInWithEmailAndPassword(n.email,n.password),o("success")}catch(s){m(s.message),console.log("Error signing in with password and email",s),o("error")}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,"success"===t?r.a.createElement(u.a,{to:{pathname:"/"}}):r.a.createElement($,{title:"Zaloguj si\u0119",status:t,error:s},r.a.createElement(q.c,{initialValues:{email:"",password:""},onSubmit:p,validationSchema:pe},(function(e){var n=e.values;return r.a.createElement(q.b,{style:{margin:"0 auto"}},r.a.createElement(ie,{type:"text",name:"email",label:"Login",login:!0}),r.a.createElement(ie,{type:"password",name:"password",label:"Has\u0142o",login:!0}),r.a.createElement(ue,null,"Zaloguj si\u0119"),r.a.createElement(me,{type:"button",onClick:function(){return e=n.email,void w.sendPasswordResetEmail(e).then((function(){B("Email do zresetowania has\u0142a zosta\u0142 wys\u0142any","Sprawd\u017a poczt\u0119!","success")})).catch((function(){m("Error resetting password")}));var e}},"Chcesz zresetowa\u0107 has\u0142o?"))}))))},he=t(31),fe=t(32),be=t(35),ve=t(34),ge=t(75),Ee=t.n(ge),xe=t(98),je=t(25),we=t.n(je),ye=t(100),Oe=t.n(ye),ke=t(126),Se=t.n(ke),Ne=function(e){var n=e.i,t=e.w,a=e.d,o=(e.className,Object(xe.a)(e,["i","w","d","className"])),c=0===t&&n>7,i=t>=4&&n<=14,l=we()({"prev-month":c,"next-month":i,"current-day":!c&&!i&&n===a});return r.a.createElement("td",Object.assign({className:l},o),n)},Ce=function(e){Object(be.a)(t,e);var n=Object(ve.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).selectDate=function(n,t){var a=0===t&&n>7,r=t>=4&&n<=14,o=e.props.moment;a&&o.subtract(1,"month"),r&&o.add(1,"month"),o.date(n),e.props.onChange(o)},e.prevMonth=function(n){n.preventDefault(),e.props.onChange(e.props.moment.subtract(1,"month"))},e.nextMonth=function(n){n.preventDefault(),e.props.onChange(e.props.moment.add(1,"month"))},e}return Object(fe.a)(t,[{key:"render",value:function(){var e=this,n=this.props.moment,t=n.date(),a=n.clone().subtract(1,"month").endOf("month").date(),o=n.clone().date(1).day(),c=n.clone().endOf("month").date(),i=[].concat(Oe()(a-o+1,a+1),Oe()(1,c+1),Oe()(1,42-c-o+1));return r.a.createElement("div",{className:we()("m-calendar",this.props.className)},r.a.createElement("div",{className:"toolbar"},r.a.createElement("button",{type:"button",className:"prev-month",onClick:this.prevMonth},r.a.createElement("i",{className:this.props.prevMonthIcon})),r.a.createElement("span",{className:"current-date"},n.format("MMMM YYYY")),r.a.createElement("button",{type:"button",className:"next-month",onClick:this.nextMonth},r.a.createElement("i",{className:this.props.nextMonthIcon}))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,["Pon","Wt","Sr","Czw","Pt","Sob","Nd"].map((function(e,n){return r.a.createElement("td",{key:n},e)})))),r.a.createElement("tbody",null,Se()(i,7).map((function(n,a){return r.a.createElement("tr",{key:a},n.map((function(n){return r.a.createElement(Ne,{key:n,i:n,d:t,w:a,onClick:function(){return e.selectDate(n,a)}})})))})))))}}]),t}(a.Component),Ae=t(108),ze=t.n(Ae),De=function(e){Object(be.a)(t,e);var n=Object(ve.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).changeHours=function(n){var t=e.props.moment;t.hours(n.x),e.props.onChange(t)},e.changeMinutes=function(n){var t=e.props.moment;t.minutes(n.x),e.props.onChange(t)},e}return Object(fe.a)(t,[{key:"render",value:function(){var e=this.props.moment;return r.a.createElement("div",{className:we()("m-time",this.props.className)},r.a.createElement("div",{className:"showtime"},r.a.createElement("span",{className:"time"},e.format("HH")),r.a.createElement("span",{className:"separater"},":"),r.a.createElement("span",{className:"time"},e.format("mm"))),r.a.createElement("div",{className:"sliders"},r.a.createElement("div",{className:"time-text"},"Godzina:"),r.a.createElement(ze.a,{className:"u-slider-time",xmin:0,xmax:23,xstep:this.props.hourStep,x:e.hour(),onChange:this.changeHours}),r.a.createElement("div",{className:"time-text"},"Minuta:"),r.a.createElement(ze.a,{className:"u-slider-time",xmin:0,xmax:59,xstep:this.props.minStep,x:e.minute(),onChange:this.changeMinutes})))}}]),t}(a.Component),Ie=function(e){Object(be.a)(t,e);var n=Object(ve.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={tab:0},e.handleClickTab=function(n,t){n.preventDefault(),e.setState({tab:t})},e.handleSave=function(n){n.preventDefault(),e.props.onSave&&e.props.onSave()},e}return Object(fe.a)(t,[{key:"render",value:function(){var e=this,n=this.state.tab,t=this.props,a=t.moment,o=t.className,c=(t.prevMonthIcon,t.nextMonthIcon,t.minStep,t.hourStep,t.onSave,Object(xe.a)(t,["moment","className","prevMonthIcon","nextMonthIcon","minStep","hourStep","onSave"])),i=we()("m-input-moment",o);return r.a.createElement("div",Object.assign({className:i},c),r.a.createElement("div",{className:"options"},r.a.createElement("button",{type:"button",className:we()("ion-calendar im-btn",{"is-active":0===n}),onClick:function(n){return e.handleClickTab(n,0)}},"Data"),r.a.createElement("button",{type:"button",className:we()("ion-clock im-btn",{"is-active":1===n}),onClick:function(n){return e.handleClickTab(n,1)}},"Godzina")),r.a.createElement("div",{className:"tabs"},r.a.createElement(Ce,{className:we()("tab",{"is-active":0===n}),moment:a,onChange:this.props.onChange,prevMonthIcon:this.props.prevMonthIcon,nextMonthIcon:this.props.nextMonthIcon}),r.a.createElement(De,{className:we()("tab",{"is-active":1===n}),moment:a,minStep:this.props.minStep,hourStep:this.props.hourStep,onChange:this.props.onChange})),this.props.onSave?r.a.createElement("button",{type:"button",className:"im-btn btn-save ion-checkmark",onClick:this.handleSave},"Zapisz"):null)}}]),t}(a.Component);Ie.defaultProps={prevMonthIcon:"ion-ios-arrow-left",nextMonthIcon:"ion-ios-arrow-right",minStep:1,hourStep:1};t(165);function Me(){var e=Object(m.a)(["\n  text-align: center;\n  padding-bottom: 2vh;\n\n  label {\n    display: block;\n    margin: 2vh 0;\n    color: #0d528a;\n  }\n\n  input {\n    background-color: transparent;\n    color: #0d528a;\n    font-weight: 600;\n    border: 2px solid white;\n    padding: 5px 15px;\n    width: 90%;\n  }\n"]);return Me=function(){return e},e}function qe(){var e=Object(m.a)(["\n  background-color: ",";\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  h1 {\n    color: white;\n  }\n"]);return qe=function(){return e},e}var He=s.c.div(qe(),(function(e){return e.theme.bg})),Be=s.c.div(Me()),Pe=function(e){Object(be.a)(t,e);var n=Object(ve.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={m:Ee()(),studentName:"",during:null},e.handleChange=function(n){e.setState({m:n})},e.handleChangeName=function(n){console.log(n),e.setState({studentName:n})},e.handleChangeDuring=function(n){console.log(n),e.setState({during:n})},e.handleSave=function(){console.log("saved",e.state.m.format())},e}return Object(fe.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(He,null,r.a.createElement("h1",null,"Dodaj termin jazdy"),r.a.createElement("form",null,r.a.createElement(Be,null,r.a.createElement("div",null,r.a.createElement("label",null,"Imi\u0119 i nazwisko kursanta"),r.a.createElement("input",{type:"text",value:this.state.studentName,onChange:function(n){return e.handleChangeName(n.target.value)}})),r.a.createElement("sidv",null,r.a.createElement("label",null,"Czas trwania jazdy (min)"),r.a.createElement("input",{type:"number",value:this.state.during,onChange:function(n){return e.handleChangeDuring(n.target.value)}}))),r.a.createElement(Ie,{moment:this.state.m,onChange:this.handleChange,minStep:5,onSave:this.handleSave})))}}]),t}(a.Component),Re=t(109),Ue=function(e){var n=e.list,t=e.title;return console.log(n),r.a.createElement("div",null,t,r.a.createElement("p",null,"list"))};t(166);function Fe(){var e=Object(m.a)([""]);return Fe=function(){return e},e}function Je(){var e=Object(m.a)([""]);return Je=function(){return e},e}function Ze(){var e=Object(m.a)([""]);return Ze=function(){return e},e}function Te(){var e=Object(m.a)([""]);return Te=function(){return e},e}var Ve=s.c.div(Te()),We=s.c.button(Ze()),Ye=s.c.nav(Je()),Ke=s.c.li(Fe()),Qe=[{start:Ee()().toDate(),end:Ee()().add(1,"days").toDate(),title:"Some title"},{id:14,title:"Today",start:new Date((new Date).setHours((new Date).getHours()-3)),end:new Date((new Date).setHours((new Date).getHours()+3))}],Le=function(){var e=Object(Re.b)(Ee.a);return r.a.createElement(Ve,null,r.a.createElement(We,{onClick:function(){w.signOut()}}," ","Wyloguj"),r.a.createElement(Ye,null,r.a.createElement("ul",null,r.a.createElement(Ke,null,"Zarz\u0105dzaj kursantami"),r.a.createElement(Ke,null,"Dodanie jazdy"),r.a.createElement(Ke,null,"Zadeklaruj wolne terminy"))),r.a.createElement(Ue,{list:[{id:1,date:"8.09.2019",name:"Jan Nowak"},{id:2,date:"8.09.2019",name:"Jan Nowak"},{id:3,date:"8.09.2019",name:"Jan Nowak"}],title:"Najbli\u017csze terminy"}),r.a.createElement("div",null,r.a.createElement(Re.a,{localizer:e,defaultDate:new Date,defaultView:"week",events:Qe,style:{minHeight:"50vh"}})))};function Xe(){var e=Object(m.a)([""]);return Xe=function(){return e},e}function Ge(){var e=Object(m.a)([""]);return Ge=function(){return e},e}function $e(){var e=Object(m.a)([""]);return $e=function(){return e},e}function _e(){var e=Object(m.a)([""]);return _e=function(){return e},e}var en=s.c.div(_e()),nn=s.c.button($e()),tn=s.c.nav(Ge()),an=s.c.li(Xe()),rn=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1];Object(a.useEffect)((function(){(function(){var e=Object(E.a)(v.a.mark((function e(){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:n=e.sent,t=n.filter((function(e){return"STUD"===e.role})),console.log(t),o(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=t.map((function(e){return r.a.createElement("p",null,e.name)}));return r.a.createElement(en,null,r.a.createElement(nn,null,"Wyloguj"),r.a.createElement(tn,null,r.a.createElement("ul",null,r.a.createElement(an,null,"Zarz\u0105dzaj kursantami"),r.a.createElement(an,null,"Dodanie jazdy"),r.a.createElement(an,null,"Zadeklaruj wolne terminy")),c))},on=Object(a.createContext)({user:null}),cn=function(e){Object(be.a)(t,e);var n=Object(ve.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={user:null},e.componentDidMount=Object(E.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w.onAuthStateChanged(function(){var n=Object(E.a)(v.a.mark((function n(t){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(t);case 2:a=n.sent,e.setState({user:a});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)}))),e}return Object(fe.a)(t,[{key:"render",value:function(){return console.log(this.state.user),r.a.createElement(r.a.Fragment,null,null!==this.state.user&&r.a.createElement(on.Provider,{value:this.state.user},this.props.children))}}]),t}(a.Component),ln=function(){var e=Object(a.useContext)(on);return console.log(e),e?"INS"===e.role||"admin"===e.role?r.a.createElement(u.a,{to:"/home-instructor"}):r.a.createElement("div",null,r.a.createElement("p",null,"hello student"),r.a.createElement("button",{onClick:function(){w.signOut()}},"Wyloguj")):r.a.createElement(u.a,{to:"/login"})},un=H.a().shape({email:H.b().required().email(),password:H.b().required().min(4)}),sn=function(){var e=Object(a.useContext)(on),n=Object(a.useState)(""),t=Object(i.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),m=s[0],p=s[1],d=function(){var e=Object(E.a)(v.a.mark((function e(n){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("loading"),e.prev=1,e.next=4,w.createUserWithEmailAndPassword(n.email,n.password);case 4:t=e.sent,a=t.user,O(a,{name:n.name,role:n.role,phone:n.phone}),c("success"),B("Uda\u0142o si\u0119","Konto zosta\u0142o za\u0142o\u017cone","success"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),p(e.t0.message),console.log(e.t0),c("");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,"admin"!==(null===e||void 0===e?void 0:e.role)?r.a.createElement(u.a,{to:{pathname:"/login"}}):r.a.createElement($,{title:"Utw\xf3rz konto",status:o,error:m},r.a.createElement(q.c,{initialValues:{email:"",password:"",name:"",phone:"",role:""},onSubmit:d,validationSchema:un},(function(){return r.a.createElement(q.b,{style:{margin:"0 auto"}},r.a.createElement(ie,{type:"text",name:"email",label:"Login (email)"}),r.a.createElement(ie,{type:"text",name:"name",label:"Imi\u0119 i Nazwisko"}),r.a.createElement(ie,{type:"number",name:"phone",label:"Nr telefonu"}),r.a.createElement(ie,{type:"text",name:"role",label:"Rola (INS/STUD)"}),r.a.createElement(ie,{type:"password",name:"password",label:"Has\u0142o tymczasowe"}),r.a.createElement(ue,{type:"submit"},"Utw\xf3rz konto"))}))))};var mn=function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){new Promise((function(e){w.onAuthStateChanged(e)})).then((function(e){o(e)}))})),!1!==t?r.a.createElement(l.a,null,r.a.createElement(d,null),r.a.createElement(s.a,{theme:h},r.a.createElement(C.a,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:f.home,component:ln}),r.a.createElement(u.b,{exact:!0,path:f.login,component:de}),r.a.createElement(u.b,{exact:!0,path:f.addLesson,component:Pe}),r.a.createElement(u.b,{exact:!0,path:f.homeInstructor,component:Le}),r.a.createElement(u.b,{exact:!0,path:f.listOfStudents,component:rn}),r.a.createElement(u.b,{exact:!0,path:f.createAccountPage,component:sn})))):r.a.createElement("div",{id:"loader"},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(167);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(cn,null,r.a.createElement(mn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.193be0dc.chunk.js.map