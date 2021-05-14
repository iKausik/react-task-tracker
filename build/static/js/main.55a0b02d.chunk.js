(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(9)),i=n(2),u=n(14),j=n(23),l=n(6),b=n.n(l),d=n(12),h=n(11),f=n(8),p=n.n(f),x=n(1),O=function(e){var t=e.text,n=e.color,r=e.btnClick;return Object(x.jsx)("button",{className:"btn",style:{backgroundColor:n},onClick:r,children:t})};O.defaultProps={color:"black"},O.prototype={text:p.a.string,color:p.a.string,btnClick:p.a.func.isRequired};var m=O,v=function(e){var t=e.title,n=e.showForm,r=e.showAdd;return Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)(m,{text:r?"Close":"Add",color:r?"red":"green",btnClick:n})]})},k=n(22),g=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(x.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(x.jsxs)("h3",{children:[t.text," ",Object(x.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(x.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(x.jsx)(x.Fragment,{children:t.map((function(e){return Object(x.jsx)(g,{task:e,onDelete:n,onToggle:r},e.id)}))})},w=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(h.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(h.a)(o,2),u=i[0],j=i[1],l=Object(r.useState)(!1),b=Object(h.a)(l,2),d=b[0],f=b[1];return Object(x.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:d}),s(""),j(""),f(!1)):alert("please add a task")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{htmlFor:"",children:"Task"}),Object(x.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{htmlFor:"",children:"Day & Time"}),Object(x.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control form-control-check",children:[Object(x.jsx)("label",{htmlFor:"",children:"Set Reminder"}),Object(x.jsx)("input",{type:"checkbox",checked:d,value:d,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(x.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},T="https://task-tracker-api-server.herokuapp.com/tasks";console.log("".concat(T,"/").concat(5));var C=function(){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(h.a)(a,2),o=s[0],l=s[1],f=Object(i.f)();Object(r.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,l([].concat(Object(j.a)(o),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/").concat(t),{method:"DELETE"});case 2:l(o.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(u.a)(Object(u.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("".concat(T,"/").concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,l(o.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:"/"===f.pathname&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{title:"Task Tracker",showForm:function(){return c(!n)},showAdd:n}),n&&Object(x.jsx)(w,{onAdd:m}),o.length>0?Object(x.jsx)(y,{tasks:o,onDelete:k,onToggle:g}):"No task to show"]})})},N=function(){var e=Object(i.f)();return Object(x.jsx)(x.Fragment,{children:"/"===e.pathname&&Object(x.jsxs)("footer",{children:[Object(x.jsx)("p",{children:"Copyright \xa9 2021"}),Object(x.jsx)(o.b,{to:"/about",children:"About"})]})})},S=function(){return Object(x.jsxs)("div",{className:"about",children:[Object(x.jsx)("h4",{children:"Version 1.0.0"}),Object(x.jsx)(o.b,{to:"/",children:"Go Back"})]})};var D=function(){return Object(x.jsx)(o.a,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(C,{}),Object(x.jsx)(N,{}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/"}),Object(x.jsx)(i.a,{exact:!0,path:"/about",component:S})]})]})})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.55a0b02d.chunk.js.map