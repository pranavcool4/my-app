(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,a){t.exports=a(38)},38:function(t,e,a){"use strict";a.r(e);var s=a(31),n=a(32),i=a(35),o=a(33),r=a(36),l=a(5),d=a(0),c=a.n(d),m=a(22),u=a.n(m),h=(a(44),a(23)),f=a.n(h),p=a(34),v=a.n(p),g=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(i.a)(this,Object(o.a)(e).call(this,t))).onChange=function(t){var e=a.state.formdata;a.setState({date:t}),console.log(t),a.setState({dateEmpty:!1},console.log(a.state.dateEmpty)),a.validateIt(e.data[0].validations,t,!0)},a.state={formdata:null,isLoaded:!1,date:new Date,dateValid:!1,dateEmpty:!0,myForm:[],errMessage:""},a.onChange=a.onChange.bind(Object(l.a)(Object(l.a)(a))),a.onSubmit=a.onSubmit.bind(Object(l.a)(Object(l.a)(a))),a}return Object(r.a)(e,t),Object(n.a)(e,[{key:"validateIt",value:function(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&(this.state.dateEmpty=!1);for(var a=!1,s=0;s<t.length;s++){if("min"===t[s].name&&!0!==a){var n=new Date,i=t[s].value.split(" ");if(e<n)e<f()(n).add(i[0],i[1])&&(this.state.dateEmpty=!0,a=!0,this.state.errMessage=t[s].message)}else if("max"===t[s].name&&!0!==a){var o=new Date;i=t[s].value.split(" ");if(e>o)e>f()(o).add(i[0],i[1])&&(a=!0,this.state.errMessage=t[s].message)}else"required"===t[s].name&&this.state.dateEmpty&&!0!==a&&(a=!0,this.state.errMessage=t[s].message);a?this.state.dateValid=!1:(this.state.errMessage="",this.state.dateValid=!0)}}},{key:"componentDidMount",value:function(){var t=this;fetch("https://ca.platform.simplifii.xyz/api/v1/static/assignment9").then(function(t){return t.json()}).then(function(e){t.setState({formdata:e.response,isLoaded:!0})})}},{key:"onSubmit",value:function(){var t=this.state.formdata;if(!this.state.dateEmpty&&this.state.dateValid){for(var e=0;e<t.data.length&&"button"!==t.data[e].type;)e++;if(console.log(t.data[e].api),"api"===t.data[e].action)var a=t.data[e].api;var s=t.data[0].name,n=this.state.date,i={};i[s]=n,fetch(a.uri,{method:a.method,body:JSON.stringify(i)}).then(function(t){if(t.status>=200&&t.status<300)return alert("Data Posted Successfully"),t;alert("Something happened wrong")}).catch(function(t){return t})}else this.validateIt(t.data[0].validations,this.state.date),alert(this.state.errMessage),console.log(this.state.dateEmpty,this.state.date)}},{key:"setForm",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=[],s=0;s<t.length;s++)"datetime"===t[s].type?(a.push(c.a.createElement("div",{class:"contact1-form-title"},t[s].label)),a.push(c.a.createElement("div",null,c.a.createElement(v.a,{class:"wrap-input1 validate-input",onChange:this.onChange,value:this.state.date})))):"button"===t[s].type&&a.push(c.a.createElement("div",{class:"container-contact1-form-btn"},c.a.createElement("button",{class:"contact1-form-btn",onClick:this.onSubmit},t[s].label)));a.push(c.a.createElement("div",null,c.a.createElement("p",{style:{color:"red"}},e))),this.state.myForm=a}},{key:"render",value:function(){var t=this.state,e=t.formdata;return t.isLoaded?(this.setForm(e.data,this.state.errMessage),this.state.myForm):c.a.createElement("div",null," ..loading ")}}]),e}(c.a.Component);u.a.render(c.a.createElement(g,null),document.getElementById("root"))},44:function(t,e,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.d4fef898.chunk.js.map