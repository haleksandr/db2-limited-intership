(this["webpackJsonpdb2-limited-intership-testtask"]=this["webpackJsonpdb2-limited-intership-testtask"]||[]).push([[0],{27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(5),r=a.n(s),o=a(3),i=(a(27),a(28),a(29),a(11)),d=a.n(i),l=(a(30),"ADD_NEW_TASK"),b="TOGGLE_DONE_TASK",j="UPDATE_NEW_TASK",u="DELETE_TASK",O="SET_QUERY",p=function(t){return{type:j,payload:t}},h=function(t){return{type:l,payload:t}},k=a(1),f=function(t){var e=Object(o.b)();return Object(k.jsxs)("div",{className:"todo__task-list-item",children:[Object(k.jsx)("p",{className:d()(t.className,{done:t.done}),children:t.labelTask}),Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{className:"btn btn-done",onClick:function(){var a;e((a=t.id,{type:b,payload:a}))},children:"DONE"}),Object(k.jsx)("button",{className:"btn btn-delete",onClick:function(){var a;e((a=t.id,{type:u,payload:a}))},children:"DELETE"})]})]})},T=(a(32),function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.todo.newTaskText}));return Object(k.jsxs)("div",{className:"todo__new-task",children:[Object(k.jsx)("input",{required:!0,className:"fieldNewTask",type:"text",onChange:function(e){var a=e.target.value;t(p(a))},placeholder:"Enter your task here",value:e,onKeyDown:function(a){"Enter"===a.key&&e.length>=1&&(t(h(e)),t(p("")))}}),Object(k.jsx)("button",{className:"buttonNewTask",onClick:function(){e.length<1?alert("FIELD IS EMPTY"):(t(h(e)),t(p("")))},children:"ADD NEW TASK"})]})}),v=function(t){var e=Object(o.c)((function(t){return t.todo.tasksData}));return Object(k.jsxs)("div",{children:[Object(k.jsx)(T,{}),Object(k.jsx)("ul",{className:"todo__tasks",children:e.map((function(t,e){return Object(k.jsx)("li",{children:Object(k.jsx)(f,{labelTask:t.labelTask,id:t.id,done:t.done})},e)}))})]})};var x=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)("div",{className:"todo",children:Object(k.jsx)(v,{})})})},y=a(4),m=a(12),D=a(13),E=a(14),N=a(2),_={tasksData:[],newTaskText:""},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(N.a)(Object(N.a)({},t),{},{newTaskText:e.payload});case l:var a={id:Math.floor(1e3*Math.random()),labelTask:e.payload,done:!1};return Object(N.a)(Object(N.a)({},t),{},{tasksData:[].concat(Object(E.a)(t.tasksData),[a])});case b:return Object(N.a)(Object(N.a)({},t),{},{tasksData:t.tasksData.map((function(t){return t.id===e.payload?Object(N.a)(Object(N.a)({},t),{},{done:!t.done}):t}))});case u:var n=parseInt(e.payload);return Object(N.a)(Object(N.a)({},t),{},{tasksData:t.tasksData.filter((function(t){return t.id!==n}))});case O:return Object(N.a)(Object(N.a)({},t),{},{searchQuery:e.payload});default:return t}},A=Object(y.combineReducers)({todo:w}),S=[D.a],g=Object(y.createStore)(A,{},Object(m.composeWithDevTools)(y.applyMiddleware.apply(void 0,S)));r.a.render(Object(k.jsx)(o.a,{store:g,children:Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(x,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.45970daa.chunk.js.map