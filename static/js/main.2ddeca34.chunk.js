(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{34:function(e,a,t){e.exports=t(64)},39:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),o=t.n(c),l=(t(39),t(12)),s=t(1),i=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-danger"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 text-white"},a),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item text-white"},r.a.createElement(l.b,{to:"/",className:"nav-link text-white"},r.a.createElement("i",{className:"fa fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item text-white"},r.a.createElement(l.b,{to:"/about",className:"nav-link text-white"},r.a.createElement("i",{className:"fa fa-question"}),"About")),r.a.createElement("li",{className:"nav-item text-white"},r.a.createElement(l.b,{to:"/contacts/add",className:"nav-link text-white"},r.a.createElement("i",{className:"fa fa-plus"}),"Add"))))},m=t(7),u=t(8),h=t(10),p=t(9),d=t(11),f=t.n(d),E=t(33),v=t(14),b=r.a.createContext(),y=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"EDIT_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a.payload.id?a.payload:e}))});default:return e}},g=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[],dispatch:function(a){e.setState((function(e){return y(e,a)}))}},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/users").then((function(a){return e.setState({contacts:a.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=b.Consumer,N=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!0},e.onDeleteClick=function(e,a){try{f.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(t){return a({type:"DELETE_CONTACT",payload:e})})).catch((function(e){return console.log(e)}))}catch(t){a({type:"DELETE_CONTACT",payload:e})}},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone;return r.a.createElement(C,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mt-3"},r.a.createElement("h3",null,n,r.a.createElement("i",{className:"fa fa-caret-down",style:{cursor:"pointer"},onClick:function(){e.setState((function(e){return{showContactInfo:!e.showContactInfo}}))}}),r.a.createElement("i",{className:"fa fa-trash-o",style:O,onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(l.b,{to:"/contacts/edit/".concat(t),style:{marginRight:"1rem",cursor:"pointer",color:"black",float:"right"}},r.a.createElement("i",{className:"fa fa-pencil"}))),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},o)):null)}))}}]),t}(n.Component),O={cursor:"pointer",color:"red",float:"right"},j=N,w=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(j,{key:e.id,contact:e})})))}))}}]),t}(n.Component),k=t(15),S=t(32),T=t.n(S),A=function(e){var a=e.label,t=e.value,n=e.name,c=e.type,o=e.placeholder,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:n},a),r.a.createElement("input",{type:c,name:n,id:n,className:T()("form-control",{"is-invalid":s}),placeholder:o,value:t,onChange:l}),r.a.createElement("div",{className:"invalid-feedback"},s))};A.defaultProps={type:"text"};var x=A,P=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.name,c=n.email,o=n.phone;if(""!==r)if(""!==c)if(""!==o){var l={name:r,email:c,phone:o};f.a.post("https://jsonplaceholder.typicode.com/users",l).then((function(e){return a({type:"ADD_CONTACT",payload:e.data})})).catch((function(e){return console.log(e)})),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is Required"}});else e.setState({errors:{email:"Email is Required"}});else e.setState({errors:{name:"Name is Required"}})},e.onChange=function(a){e.setState(Object(k.a)({},a.target.name,a.target.value))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card my-2"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"Add Component")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(x,{label:"Name",name:"name",placeholder:"Enter Name Please...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(x,{label:"Email",type:"email",name:"email",placeholder:"Enter Email Please...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(x,{label:"Phone",name:"phone",placeholder:"Enter Phone Please...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-primary btn-block"}))))}))}}]),t}(n.Component),D=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.name,c=n.email,o=n.phone;if(""!==r)if(""!==c)if(""!==o){var l={name:r,email:c,phone:o},s=e.props.match.params.id;f.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),l).then((function(e){return a({type:"EDIT_CONTACT",payload:e.data})})).catch((function(e){return console.log(e)})),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is Required"}});else e.setState({errors:{email:"Email is Required"}});else e.setState({errors:{name:"Name is Required"}})},e.onChange=function(a){e.setState(Object(k.a)({},a.target.name,a.target.value))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("https://jsonplaceholder.typicode.com/users/".concat(a)).then((function(a){return e.setState({name:a.data.name,email:a.data.email,phone:a.data.phone})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(C,null,(function(a){var t=e.state,n=t.name,c=t.email,o=t.phone,l=t.errors,s=a.dispatch;return r.a.createElement("div",{className:"card my-2"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"Edit Component")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(x,{label:"Name",name:"name",placeholder:"Enter Name Please...",value:n,onChange:e.onChange,error:l.name}),r.a.createElement(x,{label:"Email",type:"email",name:"email",placeholder:"Enter Email Please...",value:c,onChange:e.onChange,error:l.email}),r.a.createElement(x,{label:"Phone",name:"phone",placeholder:"Enter Phone Please...",value:o,onChange:e.onChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-primary btn-block"}))))}))}}]),t}(n.Component),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-secondary mt-2"},"About Page"),r.a.createElement("p",{className:"lead"},"This is version 1.0.0 of Contact Manager where you can manage your contacts"))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry! the requested url can not be found"))};t(62),t(63);var R=function(){return r.a.createElement(g,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,{branding:"ContactManager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/about",component:q}),r.a.createElement(s.a,{exact:!0,path:"/contacts/add",component:P}),r.a.createElement(s.a,{exact:!0,path:"/contacts/edit/:id",component:D}),r.a.createElement(s.a,{component:I}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2ddeca34.chunk.js.map