const  KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea'); 

let formData = {
  email: '',
  message: '',
};

populateTextarea();

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

