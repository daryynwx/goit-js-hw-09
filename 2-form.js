import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a=document.querySelector(".feedback-form"),r="feedback-form-state";let e={email:"",message:""};const s=localStorage.getItem(r);if(s)try{e=JSON.parse(s),a.elements.email.value=e.email||"",a.elements.message.value=e.message||""}catch(t){console.error("Error parsing saved form data:",t)}a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))});a.addEventListener("submit",t=>{t.preventDefault();const{email:l,message:m}=e;if(l===""||m===""){alert("Fill please all fields");return}console.log("Form submitted:",e),a.reset(),localStorage.removeItem(r),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
