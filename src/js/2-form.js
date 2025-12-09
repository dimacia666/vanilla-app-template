const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
    
let formData = {
    email: "",
    message: "",
};

feedbackForm.addEventListener("input", event => {
    const elementName = event.target.name;
    const elementValue = event.target.value;

    formData[elementName] = elementValue;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const saveValue = localStorage.getItem("feedback-form-state");

if (saveValue) { 
    const parseValue = JSON.parse(saveValue);
    formData = parseValue;

    emailInput.value = parseValue.email || "";
    messageInput.value = parseValue.message || "";
};

feedbackForm.addEventListener("submit", onSubmit);

function onSubmit(event) { 
    event.preventDefault();

    if (!formData.email||!formData.message) { 
        alert("Fill please all fields");
        return;
    };

    console.log(formData);
    
    formData = {
        email: "",
        message: "",
    }

    localStorage.removeItem("feedback-form-state");
    feedbackForm.reset();
};
