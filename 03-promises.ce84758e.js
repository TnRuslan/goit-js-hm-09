!function(){var n=document.querySelector(".form"),o={};function e(n,o){return new Promise((function(e,t){var c=Math.random()>.3;setInterval((function(){c&&e({position:n,delay:o}),t({position:n,delay:o})}),o)}))}n.addEventListener("submit",(function(n){n.preventDefault(),function(n){new FormData(n.currentTarget).forEach((function(n,e){o[e]=n})),console.log(o)}(n),e(1,o.delay).then((function(n){var o=n.position,e=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(e,"ms"))})).catch((function(n){var o=n.position,e=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(e,"ms"))})),console.log(e(1,o.step))}))}();
//# sourceMappingURL=03-promises.ce84758e.js.map
