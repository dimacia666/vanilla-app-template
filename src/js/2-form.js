const feedbackForm = document.querySelector(".feedback-form");



let formData = {
    email: "",
    message: "",
};

feedbackForm.addEventListener("input", (event) => {
    if (event = feedbackForm.email) {
        formData.email = event.target.value;
    }
});
console.log(formData);

