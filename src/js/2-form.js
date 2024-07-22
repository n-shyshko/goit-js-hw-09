const formData = { 
    email: "", 
    message: "" }
  
  const ST_KEY = "feedback-form-state";
  
  const form = document.querySelector(".feedback-form");
  
  fillFormFromST();
  
  form.addEventListener("submit", handleSubmit);
  form.addEventListener("input", handleInput);
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const usrEmail = event.currentTarget.elements.email.value.trim();
    const usrMessage = event.currentTarget.elements.message.value.trim();
  
    if (!usrEmail || !usrMessage) {
      return alert("Fill please all fields");
  }
  localStorage.removeItem(ST_KEY);
  event.currentTarget.reset();
  }
  
  function handleInput(event) {
    formData.email = event.currentTarget.elements.email.value.trim();
    formData.message = event.currentTarget.elements.message.value.trim();
  
    // let savedFormData = {};
  
    try {
      localStorage.setItem(ST_KEY, JSON.stringify(formData));
  } catch (error) {
      console.log(err);
      return;
  }
  }
  
  function fillFormFromST() {
    let savedData = {};
  
    try {
      savedData = JSON.parse(localStorage.getItem(ST_KEY));
    } catch (err) {
      console.log(err);
      return;
    }
  
    if (!savedData) {
      return;
    }
  
    for (const key in savedData) {
      form.elements[key].value = savedData[key];
    }
  }