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

function onInputForm(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormDataToLocalStorage();
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.removeItem(KEY);
  formData = { email: '', message: '' };
}

function populateTextarea() {
  const savedData = JSON.parse(localStorage.getItem(KEY));
  if (savedData) {
    input.value = savedData.email || '';
    textarea.value = savedData.message || '';
    formData = savedData;
  }
}
function saveFormDataToLocalStorage() {
  localStorage.setItem(KEY, JSON.stringify(formData));
}

