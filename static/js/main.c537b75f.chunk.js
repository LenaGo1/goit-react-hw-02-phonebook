(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}},13:function(t,e,n){t.exports={container:"Container_container__3e1Mh"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2IF4m",label:"ContactForm_label__2mfXY",input:"ContactForm_input__3dHde",button:"ContactForm_button__3oBpw"}},3:function(t,e,n){t.exports={list:"ContactList_list__2cE9S",item:"ContactList_item__MbtlS",contact:"ContactList_contact__2n-Pp",button:"ContactList_button__3KnM2"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=n(15),s=n(5),l=n(6),u=n(8),b=n(7),m=n(12),d=n(2),h=n.n(d),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.handleChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:h.a.label,children:["Name",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:h.a.label,children:["Number",Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=n(3),C=n.n(p),_=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:C.a.item,children:[Object(j.jsxs)("p",{className:C.a.contact,children:[a,": ",c]}),Object(j.jsx)("button",{className:C.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},O=n(13),x=n.n(O),v=function(t){var e=t.children;return Object(j.jsx)("div",{className:x.a.container,children:e})},g=n(10),N=n.n(g),S=function(t){var e=t.value,n=t.onChange,a=t.onBlur;return Object(j.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:N.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n,onBlur:a})]})},A=n(14),F=n.n(A),y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){e.id=F.a.generate(),t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[e].concat(Object(o.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.resetFilter=function(){t.setState({filter:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacts();return Object(j.jsxs)(v,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(S,{value:this.state.filter,onChange:this.changeFilter,onBlur:this.resetFilter}),Object(j.jsx)(_,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(29);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c537b75f.chunk.js.map