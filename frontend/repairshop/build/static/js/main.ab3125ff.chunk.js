(this.webpackJsonprepairshop=this.webpackJsonprepairshop||[]).push([[0],{259:function(e,t,a){e.exports=a(473)},264:function(e,t,a){},265:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},266:function(e,t,a){},310:function(e,t){},312:function(e,t){},354:function(e,t){},355:function(e,t){},473:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(85),o=a.n(c),l=(a(264),a(265),a(266),a(27)),u=a.n(l),i=a(42),s=a(37),m=a(243),p=a.n(m).a.create({baseURL:"https://jaimeautoshop3.herokuapp.com/"}),f=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/api/customer/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api helper create customer",t),e.next=3,p.post("/api/customer/",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/api/customer/".concat(t,"/"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api helper",t),e.next=3,p.put("/api/customer/".concat(t,"/"),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/api/service/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=a(481),g=a(482),x=a(52),_=a(244),j=a.n(_),O=a(480),w=a(484),y=a(483),k=a(475),N=a(476),S=a(477),C=a(478),P=a(479);var z=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),m=Object(s.a)(l,2),p=m[0],f=m[1],d=Object(n.useState)(),v=Object(s.a)(d,2),E=v[0],b=v[1],g=Object(n.useState)(),x=Object(s.a)(g,2),_=x[0],j=x[1],w=Object(n.useState)(),y=Object(s.a)(w,2),z=y[0],A=y[1],D={first_name:c,last_name:p,phone_number:E,vin_number:_,reason:z},V=function(){var t=Object(i.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.useId,console.log("update id",n),console.log("returned json from click",D),t.next=6,h(n,D);case 6:r=t.sent,console.log("resposne",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",null,r.a.createElement(k.a,null,r.a.createElement(N.a,{onSubmit:V},r.a.createElement(S.a,null,r.a.createElement(C.a,{for:"exampleEmail"},"Edit Appointment"),r.a.createElement("br",null),r.a.createElement(P.a,{type:"text",name:"first_name",id:"exampleFirstName",placeholder:"First Name",onChange:function(t){o(t.target.value),console.log("update props",e.useId),console.log("handle firstname",t)},value:c}),r.a.createElement(P.a,{type:"text",name:"last_name",id:"exampleLastName",placeholder:"Last Name",onChange:function(e){console.log("handle lastname",e),f(e.target.value)},value:p}),r.a.createElement(P.a,{type:"text",name:"phone_number",id:"examplePhone",placeholder:"Phone Number",onChange:function(e){console.log("handle phone",e),b(e.target.value)},value:E}),r.a.createElement(P.a,{type:"text",name:"vin_number",id:"exampleVin",placeholder:"Vin Number",onChange:function(e){console.log("handle vin",e),j(e.target.value)},value:_}),r.a.createElement(P.a,{type:"textarea",name:"description",id:"exampleDescription",placeholder:"Enter your vehicle issues here...",onChange:function(e){console.log("handle description",e),A(e.target.value)},value:z})),r.a.createElement(O.a,{color:"warning"},"Create New Appointment")," "))))};var A=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),m=l[0],p=l[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(" clicked delete",a.id),e.next=3,v(t);case 3:"success"===e.sent.status&&(n=a.filter((function(e){return e.id!==t})),console.log(n),alert("Customer Appointment Removed"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(x.c,{size:32}),r.a.createElement("h6",null,e.first_name," ",e.last_name),r.a.createElement("h6",null,"Scheduled for : ",e.date_requested),r.a.createElement("p",null,"Phone :",e.phone_number),r.a.createElement("p",null,"Vin: ",e.vin_number),r.a.createElement("p",null,e.reason),r.a.createElement("div",{className:"split"},r.a.createElement(O.a,{id:"Popover3",type:"button"},r.a.createElement(x.e,{size:20,onClick:function(){return t=e.id,console.log("update ",t),void p(t);var t}}),r.a.createElement("i",{className:"fas fa-play"},r.a.createElement(w.a,{trigger:"legacy",placement:"top",target:"Popover3"},r.a.createElement(y.a,null,r.a.createElement(z,{useId:m}))))),r.a.createElement(x.f,{size:20,onClick:function(){return function(e){var t=e;console.log("Handle pdf was clicked",t);var a=new j.a;a.text("Auto Repair Shop",10,10),a.text("Repair Shop # 999-999-9999",10,15),a.text("".concat(t.first_name," ").concat(t.last_name),20,20),a.text("Phone Number :".concat(t.phone_number),80,20),a.text("Appointment : ".concat(t.date_requested),80,30),a.text("Vin Number : ".concat(t.vin_number),20,40),a.text("Description :".concat(t.reason),5,60),a.text("Signature :____________________",100,250),a.save("repairorder.pdf")}(e)}}),r.a.createElement(x.g,{size:20,onClick:function(){return d(e.id)}})))),r.a.createElement("hr",null))}));return r.a.createElement("section",null,h)};var D=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),l=Object(s.a)(o,2),u=l[0],i=l[1],m=Object(n.useState)(),p=Object(s.a)(m,2),f=p[0],v=p[1],h=Object(n.useState)(),E=Object(s.a)(h,2),b=E[0],g=E[1],x=Object(n.useState)(),_=Object(s.a)(x,2),j=_[0],w=_[1],y={first_name:a,last_name:u,phone_number:f,vin_number:b,reason:j};return r.a.createElement("aside",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),console.log("returned json from click",y),e.target.reset();d(y)}},r.a.createElement(S.a,null,r.a.createElement(C.a,{for:"exampleEmail"},"Create New Appointment"),r.a.createElement("br",null),r.a.createElement(P.a,{type:"text",name:"first_name",id:"exampleFirstName",placeholder:"First Name",onChange:function(e){c(e.target.value),console.log("handle firstname",e)},value:a}),r.a.createElement(P.a,{type:"text",name:"last_name",id:"exampleLastName",placeholder:"Last Name",onChange:function(e){console.log("handle lastname",e),i(e.target.value)},value:u}),r.a.createElement(P.a,{type:"text",name:"phone_number",id:"examplePhone",placeholder:"Phone Number",onChange:function(e){console.log("handle phone",e),v(e.target.value)},value:f}),r.a.createElement(P.a,{type:"text",name:"vin_number",id:"exampleVin",placeholder:"Vin Number",onChange:function(e){console.log("handle vin",e),g(e.target.value)},value:b}),r.a.createElement(P.a,{type:"textarea",name:"description",id:"exampleDescription",placeholder:"Enter your vehicle issues here...",onChange:function(e){console.log("handle description",e),w(e.target.value)},value:j})),r.a.createElement(O.a,{color:"warning"},"Create New Appointment")," "))},V=a(258);var F=function(){return r.a.createElement("section",null,r.a.createElement(V.a,null))},I=a(86);var L=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(O.a,{id:"Popover1",type:"button"},r.a.createElement(x.b,{size:32}),r.a.createElement("i",{className:"fas fa-play"},r.a.createElement(w.a,{trigger:"legacy",placement:"top",target:"Popover1"},r.a.createElement(y.a,null,r.a.createElement(D,null))))),r.a.createElement(O.a,{id:"Popover2",type:"button"},r.a.createElement(x.a,{size:32}),r.a.createElement("i",{className:"fas fa-play"},r.a.createElement(w.a,{trigger:"legacy",placement:"top",target:"Popover2"},r.a.createElement(y.a,null,r.a.createElement(F,null))))),r.a.createElement(I.b,{to:"/service"},r.a.createElement(x.d,{size:32})))},R=a(69);var q=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,console.log("services",t),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=a.map((function(e,t){return console.log("servicesmap",e),r.a.createElement("div",{key:t,className:"serviceItem"},r.a.createElement(x.h,{size:32}),r.a.createElement("h5",null,e.name," : ",e.price," "))}));return r.a.createElement("section",null,o)};var B=function(){return r.a.createElement("main",null,r.a.createElement("br",null),r.a.createElement(R.a,{exact:!0,path:"/",component:A}),r.a.createElement(R.a,{exact:!0,path:"/service",component:q}),r.a.createElement(L,null))},J=a(71);J.c.create({page:{flexDirection:"row",backroundColor:"tan"},section:{margin:10,padding:10,flexGrow:1}});var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,null,r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[259,1,2]]]);
//# sourceMappingURL=main.ab3125ff.chunk.js.map