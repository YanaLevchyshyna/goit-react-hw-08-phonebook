"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{395:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r=t(8174),o=t(2791),i=t(9439),a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},c=t(9434),u="NOT_FOUND";var l=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?l:r,i=t.maxSize,a=void 0===i?1:i,c=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),f=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(e,o){r(e)===u&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function p(){var e=f.get(arguments);if(e===u){if(e=n.apply(null,arguments),c){var t=f.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function f(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function p(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],m=f(r),h=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(d)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(x,{resultFunc:u,memoizedResultFunc:h,dependencies:m,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var d,m,h,x,b,g=p(s),v=function(n){return n.contacts.contacts},y=function(n){return n.filter},w=g([v,y],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().trim().includes(t)}))})),j=t(5036),k=t(168),Z=t(9202),z=Z.Z.div(d||(d=(0,k.Z)(["\n  margin: 20px auto 20px auto;\n\n  padding: ","px;\n\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 380px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radius.normal})),C=Z.Z.form(m||(m=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),O=Z.Z.label(h||(h=(0,k.Z)(["\n  margin-bottom: 30px;\n  display: block;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.label})),A=Z.Z.input(x||(x=(0,k.Z)(["\n  margin-top: 10px;\n  display: block;\n  width: 300px;\n  font-size: 13px;\n  padding: 6px 0 4px 10px;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),\n    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);\n\n  ::placeholder {\n    color: ",";\n    opacity: 0.4;\n  }\n\n  :focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #bdbdbd;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);\n  }\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.colors.primary})),E=Z.Z.button(b||(b=(0,k.Z)(["\n  width: 120px;\n  height: 40px;\n  border: none;\n  font-size: 14px;\n  outline: none;\n  background: ",";\n  color: ",";\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n\n  :before {\n    content: '';\n    background: linear-gradient(\n      45deg,\n      #ff0000,\n      #ff7300,\n      #fffb00,\n      #48ff00,\n      #00ffd5,\n      #002bff,\n      #7a00ff,\n      #ff00c8,\n      #ff0000\n    );\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    background-size: 400%;\n    z-index: -1;\n    filter: blur(5px);\n    width: calc(100% + 4px);\n    height: calc(100% + 4px);\n    animation: glowing 20s linear infinite;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    border-radius: 10px;\n  }\n  :active {\n    color: #000;\n  }\n  :active:after {\n    background: transparent;\n  }\n  :hover:before {\n    opacity: 1;\n  }\n  :after {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #111;\n    left: 0;\n    top: 0;\n    border-radius: 10px;\n  }\n"])),(function(n){return n.theme.colors.button}),(function(n){return n.theme.colors.label})),N=t(184);function S(){var n=(0,o.useState)(""),e=(0,i.Z)(n,2),t=e[0],u=e[1],l=(0,o.useState)(""),s=(0,i.Z)(l,2),f=s[0],p=s[1],d=(0,c.I0)(),m=(0,c.v9)(v),h=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"number":p(r);break;default:return}},x=function(){u(""),p("")};return(0,N.jsx)(z,{children:(0,N.jsxs)(C,{onSubmit:function(n){n.preventDefault(),m.find((function(n){return n.name.toLowerCase().trim()===t.toLowerCase().trim()||n.number.trim()===f.trim()}))?r.Am.error("".concat(t," is already in contacts"),{position:r.Am.POSITION.TOP_RIGHT}):(d((0,j.uK)({name:t,number:f,id:"id"+a()})),x())},children:[(0,N.jsxs)(O,{htmlFor:t,children:["Name",(0,N.jsx)(A,{type:"text",placeholder:"Enter name",name:"name",value:t,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,N.jsxs)(O,{htmlFor:f,children:["Number",(0,N.jsx)(A,{placeholder:"Enter number",type:"tel",name:"number",value:f,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,N.jsx)(E,{type:"submit",children:"Add contact"})]})})}var F,I=t(9983);function L(n){return(0,I.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"}}]})(n)}var P,_,T,q=Z.Z.button(F||(F=(0,k.Z)(["\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n\n  & > svg {\n    fill: #a0a8ba;\n\n    :hover {\n      fill: #67686b;\n    }\n  }\n"])));function R(n){var e=n.name,t=n.phone,r=n.id,o=(0,c.I0)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("span",{children:[e,":"]}),(0,N.jsx)("span",{children:t}),(0,N.jsx)(q,{type:"button",onClick:function(){o((0,j.GK)(r))},children:(0,N.jsx)(L,{size:"16"})})]})}var M,U,B,D=Z.Z.div(P||(P=(0,k.Z)(["\n  margin: 20px auto 20px auto;\n\n  padding: ","px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 480px;\n"])),(function(n){return n.theme.space[5]})),G=Z.Z.ul(_||(_=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  list-style-type: none;\n  margin: 0;\n  padding-left: 0;\n"]))),K=Z.Z.li(T||(T=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 400px;\n  gap: 15px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text}));function H(){var n=(0,c.v9)(w);return(0,N.jsx)(D,{children:(0,N.jsx)(G,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,N.jsx)(K,{children:(0,N.jsx)(R,{name:e,phone:t,id:r})},r)}))})})}var J,V,W,Y=Z.Z.div(M||(M=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),$=Z.Z.label(U||(U=(0,k.Z)(["\n  margin: 0 auto;\n  margin-bottom: 30px;\n  display: block;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primary})),Q=Z.Z.input(B||(B=(0,k.Z)(["\n  margin-top: 10px;\n  display: block;\n  width: 300px;\n  font-size: 13px;\n  padding: 6px 0 4px 10px;\n  background-color: #f6f6f6;\n  border: ",";\n  border-radius: ",";\n\n  ::placeholder {\n    color: #212529;\n    opacity: 0.4;\n  }\n\n  :focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #bdbdbd;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);\n  }\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radius.normal})),X=t(7657);function nn(){var n=(0,c.v9)(y),e=(0,c.I0)();return(0,N.jsx)(Y,{children:(0,N.jsxs)($,{htmlFor:"id"+a(),children:["Find contacts by name",(0,N.jsx)(Q,{id:"id"+a(),placeholder:"Search",type:"text",name:"filter",value:n,onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,X.x)(t))}})]})})}var en=Z.Z.div(J||(J=(0,k.Z)(["\n  padding-top: 80px;\n"]))),tn=Z.Z.h1(V||(V=(0,k.Z)(["\n  color: ",";\n  margin: 0;\n  text-align: center;\n"])),(function(n){return n.theme.colors.primary})),rn=Z.Z.p(W||(W=(0,k.Z)(["\n  color: ",";\n  margin: 0;\n  text-align: center;\n"])),(function(n){return n.theme.colors.primary}));function on(){var n=(0,c.I0)(),e=(0,c.v9)(v);return(0,o.useEffect)((function(){n((0,j.yF)())}),[n]),(0,N.jsxs)(en,{children:[(0,N.jsx)(tn,{children:"Phonebook"}),(0,N.jsx)(S,{}),e.length>0?(0,N.jsx)(nn,{}):(0,N.jsx)(rn,{children:"Your contact list is empty. Please add contacts!"}),e.length>0&&(0,N.jsx)(H,{}),(0,N.jsx)(r.Ix,{})]})}},9983:function(n,e,t){t.d(e,{w_:function(){return l}});var r=t(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},a.apply(this,arguments)},c=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};function u(n){return n&&n.map((function(n,e){return r.createElement(n.tag,a({key:e},n.attr),u(n.child))}))}function l(n){return function(e){return r.createElement(s,a({attr:a({},n.attr)},e),u(n.child))}}function s(n){var e=function(e){var t,o=n.attr,i=n.size,u=n.title,l=c(n,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return e(n)})):e(o)}}}]);
//# sourceMappingURL=395.d8b4c4b7.chunk.js.map