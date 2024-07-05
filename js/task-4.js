document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = {};
    const formElements = loginForm.elements;
    
    let allFieldsFilled = true;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type !== 'submit') {
        formData[element.name] = element.value.trim();
        if (formData[element.name] === '') {
          allFieldsFilled = false;
        }
      }
    }
    
    if (!allFieldsFilled) {
      alert('All form fields must be filled in');
      return;
    }
    
    console.log(formData);
    
    loginForm.reset();
  });
});
