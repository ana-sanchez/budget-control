(this["webpackJsonpbudget-control"]=this["webpackJsonpbudget-control"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=(a(12),a(6)),u=a(1),m=(a(13),function(e){var t=e.message;return r.a.createElement("p",{className:"alert alert-danger error"},t)}),o=function(e){var t=e.setBudget,a=e.setRest,l=e.setQuestion,s=Object(n.useState)(0),c=Object(u.a)(s,2),o=c[0],i=c[1],p=Object(n.useState)(!1),E=Object(u.a)(p,2),b=E[0],d=E[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Coloca tu presupuesto"),b?r.a.createElement(m,{message:"El presupuesto es incorrecto"}):null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o<1||isNaN(o)?d(!0):(d(!1),t(o),a(o),l(!1))}},r.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu presupuesto",onChange:function(e){i(parseInt(e.target.value,10))}}),r.a.createElement("input",{type:"submit",className:"button-primary u-full-width",value:"Definir presupuesto"})))},i=a(5),p=a.n(i),E=function(e){var t=e.setExpense,a=e.setMakeExpense,l=Object(n.useState)(""),s=Object(u.a)(l,2),c=s[0],o=s[1],i=Object(n.useState)(0),E=Object(u.a)(i,2),b=E[0],d=E[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),g=v[0],j=v[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),b<1||isNaN(b)||""===c.trim())j(!0);else{j(!1);var n={item:c,number:b,id:p.a.generate()};t(n),a(!0),o(""),d(0)}}},r.a.createElement("h2",null,"Agrega tus gastos aqu\xed"),g?r.a.createElement(m,{message:"Todos los campos son obligatorios o presupuesto incorrecto"}):null,r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Nombre Gasto"),r.a.createElement("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Gasto"),r.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:b,onChange:function(e){return d(parseInt(e.target.value,10))}})),r.a.createElement("input",{type:"submit",className:"button-primary u-full-width",value:"agregar gasto"}))},b=function(e){var t=e.expense;return r.a.createElement("li",{className:"expenses"},r.a.createElement("p",null,t.item,r.a.createElement("span",{className:"expanse"}," ",t.number," \u20ac")))},d=function(e){var t=e.expenses;return r.a.createElement("div",{className:"expenses-made"},r.a.createElement("h2",null,"Listados"),t.map((function(e){return r.a.createElement(b,{key:e.id,expense:e})})))},f=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},v=function(e){var t=e.budget,a=e.rest;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"alert alert-primary"},"Presupuesto: ",t," \u20ac"),r.a.createElement("div",{className:f(t,a)},"Restante: ",a," \u20ac"))};var g=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(0),m=Object(u.a)(s,2),i=m[0],p=m[1],b=Object(n.useState)(!0),f=Object(u.a)(b,2),g=f[0],j=f[1],O=Object(n.useState)([]),N=Object(u.a)(O,2),h=N[0],x=N[1],S=Object(n.useState)({}),y=Object(u.a)(S,2),w=y[0],k=y[1],C=Object(n.useState)(!1),B=Object(u.a)(C,2),D=B[0],G=B[1];return Object(n.useEffect)((function(){if(D){x([].concat(Object(c.a)(h),[w]));var e=i-w.number;p(e)}G(!1)}),[w,D,h,i]),r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",null,"Gasto semanal"),r.a.createElement("div",{className:"principal-content content"},g?r.a.createElement(o,{setBudget:l,setRest:p,setQuestion:j}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-half column"},r.a.createElement(E,{setExpense:k,setMakeExpense:G})),r.a.createElement("div",{className:"one-half column"},r.a.createElement(d,{expenses:h}),r.a.createElement(v,{budget:a,rest:i}))))))};s.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(22)}},[[7,1,2]]]);
//# sourceMappingURL=main.b2245a65.chunk.js.map