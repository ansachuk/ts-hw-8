import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const FORM_DATA_LOCAL_KEY = '"feedback-form-state"';

const onFormInput = e => {
  const {
    elements: { email, message },
  } = feedbackFormRef;

  const inputValues = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(FORM_DATA_LOCAL_KEY, JSON.stringify(inputValues));
  console.log(localStorage.getItem(FORM_DATA_LOCAL_KEY));
};

const onFormSubmit = e => {
  e.preventDefault();

  const formData = JSON.parse(localStorage.getItem(FORM_DATA_LOCAL_KEY));
  console.log(formData);

  localStorage.removeItem(FORM_DATA_LOCAL_KEY);

  feedbackFormRef.reset();
};

const onPageReset = () => {
  const formData = JSON.parse(localStorage.getItem(FORM_DATA_LOCAL_KEY));

  if (formData) {
    const { email, message } = formData;
    feedbackFormRef.email.value = email;
    feedbackFormRef.message.value = message;
  }
};

onPageReset();
feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);
//throttle(onFormInput, 1000)
