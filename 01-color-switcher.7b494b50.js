!function(){var t=null,e=!0,n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");function r(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}n.addEventListener("click",(function(){e&&(t=setInterval(r,1e3),e=!1,n.setAttribute("disabled",""),o.removeAttribute("disabled"))})),o.addEventListener("click",(function(){clearInterval(t),e=!0,n.removeAttribute("disabled"),o.setAttribute("disabled","")})),o.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.7b494b50.js.map
