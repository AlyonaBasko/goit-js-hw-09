import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a="feedback-form-state",o=document.querySelector(".feedback-form"),m=document.querySelector("input"),c=document.querySelector("textarea");let t={email:"",message:""};u();o.addEventListener("input",s);o.addEventListener("submit",l);function s(e){const{name:n,value:r}=e.target;t[n]=r.trim(),i()}function l(e){e.preventDefault(),console.log(t),o.reset(),localStorage.removeItem(a),t={email:"",message:""}}function u(){const e=JSON.parse(localStorage.getItem(a));e&&(m.value=e.email||"",c.value=e.message||"",t=e)}function i(){localStorage.setItem(a,JSON.stringify(t))}
//# sourceMappingURL=commonHelpers2.js.map