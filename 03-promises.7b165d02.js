function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector(".form"),a={};l.addEventListener("submit",(function(t){t.preventDefault(),function(e){new FormData(e.currentTarget).forEach(((e,t)=>{a[t]=Number(e)}))}(t),function(t,n,o){let r=0,l=o;setTimeout((()=>{const o=setInterval((()=>{var a,u;r!==Number(n)?((a=r,u=l,new Promise(((e,t)=>{Math.random()>.3&&e({position:a,delay:u}),t({position:a,delay:u})}))).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),r+=1,l+=t):clearInterval(o)}),t)}),o)}(a.step,a.amount,a.delay)}));
//# sourceMappingURL=03-promises.7b165d02.js.map