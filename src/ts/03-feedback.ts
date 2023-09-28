import throttle from "lodash.throttle";

const feedbackFormRef = document.querySelector<HTMLFormElement>(".feedback-form");
const FORM_DATA_LOCAL_KEY = "feedback-form-state";

const onFormInput = () => {
	const email: HTMLInputElement = feedbackFormRef?.email;
	const message: HTMLTextAreaElement = feedbackFormRef?.message;

	console.log(email, message);

	const inputValues = {
		email: email.value,
		message: message.value,
	};

	localStorage.setItem(FORM_DATA_LOCAL_KEY, JSON.stringify(inputValues));
	console.log(localStorage.getItem(FORM_DATA_LOCAL_KEY));
};

const onFormSubmit = (e: SubmitEvent) => {
	e.preventDefault();

	const ls = localStorage.getItem(FORM_DATA_LOCAL_KEY);

	if (ls) {
		const formData = JSON.parse(ls);
		console.log(formData);

		localStorage.removeItem(FORM_DATA_LOCAL_KEY);

		feedbackFormRef?.reset();
	}
};

const onPageReset = () => {
	const ls = localStorage.getItem(FORM_DATA_LOCAL_KEY);
	if (ls) {
		const formData = JSON.parse(ls);

		if (formData) {
			const { email, message } = formData;

			if (feedbackFormRef) {
				feedbackFormRef.email.value = email;
				feedbackFormRef.message.value = message;
			}
		}
	}
};

onPageReset();
feedbackFormRef?.addEventListener("input", throttle(onFormInput, 500));
feedbackFormRef?.addEventListener("submit", onFormSubmit);
