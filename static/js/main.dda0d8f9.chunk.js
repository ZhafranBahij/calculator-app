(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{14:function(t,e,r){},15:function(t,e,r){},17:function(t,e,r){"use strict";r.r(e);var n=r(2),a=r.n(n),i=r(5),s=r.n(i),c=(r(14),r(6)),l=r(7),o=r(1),u=r(9),h=r(8),p=(r(4),r(15),r(0)),b=function(t){Object(u.a)(r,t);var e=Object(h.a)(r);function r(t){var n;return Object(c.a)(this,r),(n=e.call(this,t)).state={calculator_template:0,calculator_text:""},n.temp_caltext="",n.temp_number_group=[null],n.temp_operator_group=[null],n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleClear=n.handleClear.bind(Object(o.a)(n)),n.handleResult=n.handleResult.bind(Object(o.a)(n)),n.Number=n.Number.bind(Object(o.a)(n)),n.operators=["+","-","x",":"],n}return Object(l.a)(r,[{key:"handleChange",value:function(t){var e=t.target.getAttribute("name"),r=this.state.calculator_text.length;this.operators.includes(e)&&0===r?alert("Don't input operator early!"):this.operators.includes(this.state.calculator_text.charAt(r-1))&&this.operators.includes(e)?alert("After operator don't use operator"):(this.temp_caltext+=e,this.setState({calculator_text:this.temp_caltext}))}},{key:"handleClear",value:function(){this.setState({calculator_text:""}),this.temp_caltext=""}},{key:"handleResult",value:function(){for(var t=0,e=0;e<this.temp_caltext.length;e++)this.operators.includes(this.temp_caltext.charAt(e))&&(t+=1);if(0!==t)if(t>=2)alert("I'm apologize, i just can operate one operation.");else{for(var r=this.temp_caltext,n="",a=0;a<r.length;a++)this.operators.includes(r.charAt(a))?(n=parseInt(n),this.temp_number_group.push(n),this.temp_operator_group.push(r.charAt(a)),n=""):n+=r.charAt(a);this.temp_number_group.push(parseInt(n));var i=this.temp_number_group.pop(),s=this.temp_number_group.pop(),c=this.temp_operator_group.pop();n=this.some_operation(s,i,c),this.temp_caltext=n.toString(),this.setState({calculator_text:this.temp_caltext})}else alert("Well, i hope you don't use '=' if it doesn't has any operator")}},{key:"some_operation",value:function(t,e,r){return"+"===r?t+e:"-"===r?(t-e<0&&alert("I'm sorry, i can't operate it if the number is below zero. So, i'll absolue it."),Math.abs(t-e)):"x"===r?t*e:":"===r?t/e:void 0}},{key:"Number",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"operator";return"num"===e?Object(p.jsx)("div",{class:"col text-white text-center bg-dark",onClick:this.handleChange,name:t,children:t}):Object(p.jsx)("div",{class:"col text-white text-center bg-primary",onClick:this.handleChange,name:t,children:t})}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"container d-grid gap-3 text-white",children:[Object(p.jsx)("div",{class:"result visible bg-white text-dark text-end ",children:Object(p.jsx)("h3",{children:this.state.calculator_text})}),Object(p.jsxs)("div",{class:"row justify-content-between",children:[this.Number(1,"num"),this.Number(2,"num"),this.Number(3,"num"),this.Number("+")]}),Object(p.jsxs)("div",{class:"row  justify-content-between",children:[this.Number(4,"num"),this.Number(5,"num"),this.Number(6,"num"),this.Number("-")]}),Object(p.jsxs)("div",{class:"row justify-content-between",children:[this.Number(7,"num"),this.Number(8,"num"),this.Number(9,"num"),this.Number("x")]}),Object(p.jsxs)("div",{class:"row justify-content-between",children:[this.Number(0,"num"),Object(p.jsx)("div",{class:"col bg-danger text-white text-center",onClick:this.handleClear,children:"C"}),Object(p.jsx)("div",{class:"col bg-primary text-white text-center",onClick:this.handleResult,name:"=",children:"="}),this.Number(":")]})]})}}]),r}(a.a.Component);var m=function(){return Object(p.jsx)(b,{})},d=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;r(t),n(t),a(t),i(t),s(t)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),d()}},[[17,1,2]]]);
//# sourceMappingURL=main.dda0d8f9.chunk.js.map