
let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

populateForm();

form.addEventListener("input", onInputChange);
form.addEventListener("submit", onFormSubmit);

function onInputChange(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
    }
    
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formData = { email: "", message: "" };
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;
    Object.entries(parsedData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}