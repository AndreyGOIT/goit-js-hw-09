function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequire7bc7;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=n);var i=n("eWCmQ");({inputs:document.querySelectorAll("input"),submit:document.querySelector("button")}).submit.addEventListener("submit",function(t){t.preventDefault();let r=Number(t.target.delay.value),o=Number(t.target.amount.value),n=Number(t.target.step.value);for(let t=1;t<=o;t+=1)setTimeout((()=>{createPromise(t,r).then((({position:t,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}))}),r),r+=n,formats.reset()}());
//# sourceMappingURL=03-promises.11983172.js.map