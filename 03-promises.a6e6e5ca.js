!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r,u=i("iU1Pc"),a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var l="Expected a function",c=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),b=Object.prototype.toString,y=Math.max,S=Math.min,O=function(){return g.Date.now()};function N(e,t,n){var o,i,r,u,a,c,f=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(l);function v(t){var n=o,r=i;return o=i=void 0,f=t,u=e.apply(r,n)}function m(e){return f=e,a=setTimeout(b,t),s?v(e):u}function g(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-f>=r}function b(){var e=O();if(g(e))return N(e);a=setTimeout(b,function(e){var n=t-(e-c);return d?S(n,r-(e-f)):n}(e))}function N(e){return a=void 0,p&&o?v(e):(o=i=void 0,u)}function T(){var e=O(),n=g(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return m(c);if(d)return a=setTimeout(b,t),v(c)}return void 0===a&&(a=setTimeout(b,t)),u}return t=w(t)||0,j(n)&&(s=!!n.leading,r=(d="maxWait"in n)?y(w(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?u:N(O())},T}function j(t){var n=void 0===t?"undefined":e(a)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(a)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var o=s.test(t);return o||d.test(t)?p(t.slice(2),o?2:8):f.test(t)?NaN:+t}r=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(l);return j(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),N(e,t,{leading:o,maxWait:t,trailing:i})};var T,h={inputs:document.querySelectorAll("input"),submit:document.querySelector("button")},x="income-data",E=localStorage.getItem(x)?JSON.parse(localStorage.getItem(x)):{};function I(e){E[e.target.name]=e.target.value,localStorage.setItem(x,JSON.stringify(E))}h.submit.addEventListener("submit",(function(e){console.log("сработала функция onFormSubmit"),e.preventDefault(),h.inputs[0].value&&h.inputs[1].value&&h.inputs[2].value&&(console.log("Отправляем форму"),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem(x))),localStorage.removeItem(x),E={})})),h.submit.addEventListener("submit",function(t,n){var o=function(t){new Promise((function(n,o){var a=Math.random()>.3;setTimeout((function(){a?(console.log("создаем промис успешено"),e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))):(console.log("создаем промис неуспешно"),e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms")))}),r),r+=i.step}))},i=JSON.parse(localStorage.getItem(x)),r=i.delay;console.log(r);for(var a=1;a<=i.amount;a+=1)o(a)}(h.inputs[2].value,h.inputs[0].value)),h.inputs[0].addEventListener("input",e(r)(I,500)),h.inputs[1].addEventListener("input",e(r)(I,500)),h.inputs[2].addEventListener("input",e(r)(I,500)),T=JSON.parse(localStorage.getItem(x)),console.log(T),T&&(h.inputs[0].value=T.delay||"",h.inputs[1].value=T.step||"",h.inputs[2].value=T.amount||"")}();
//# sourceMappingURL=03-promises.a6e6e5ca.js.map
