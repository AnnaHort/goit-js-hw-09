!function(){var e=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),o=document.querySelector('[name="amount"]');function t(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(a){a.preventDefault();for(var c=parseInt(e.value),r=parseInt(n.value),i=parseInt(o.value),u=1;u<=i;u+=1){t(u,c+(u-1)*r).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.6a1c3f2d.js.map