import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r={email:"",message:""},a="feedback-form-state",l=document.querySelector(".feedback-form");m();l.addEventListener("submit",s);l.addEventListener("input",o);function s(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),n=e.currentTarget.elements.message.value.trim();if(!t||!n)return alert("Fill please all fields");localStorage.removeItem(a),e.currentTarget.reset()}function o(e){r.email=e.currentTarget.elements.email.value.trim(),r.message=e.currentTarget.elements.message.value.trim();try{localStorage.setItem(a,JSON.stringify(r))}catch{console.log(err);return}}function m(){let e={};try{e=JSON.parse(localStorage.getItem(a))}catch(t){console.log(t);return}if(e)for(const t in e)l.elements[t].value=e[t]}
//# sourceMappingURL=commonHelpers2.js.map