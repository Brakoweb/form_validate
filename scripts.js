const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

name.addEventListener("input", validate);
email.addEventListener("input", validate);
phone.addEventListener("input", validate);
message.addEventListener("input", validate);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate()) {
    // Form is valid, show success message
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});

function validate() {
  let isValid = true;

  if (!/^[A-Za-z'-]+$/.test(name.value)) {
    isValid = false;
    name.classList.add("error");
    document.getElementById("nameError").textContent = "Invalid name format";
  } else {
    name.classList.remove("error");
    document.getElementById("nameError").textContent = "";
  }

  if (email.validity.valid === false) {
    isValid = false;
    email.classList.add("error");
    document.getElementById("emailError").textContent = "Invalid email format";
  } else {
    email.classList.remove("error");
    document.getElementById("emailError").textContent = "";
  }

  if (!/^\d{10}$/.test(phone.value)) {
    isValid = false;
    phone.classList.add("error");
    document.getElementById("phoneError").textContent =
      "Invalid phone number (10 digits)";
  } else {
    phone.classList.remove("error");
    document.getElementById("phoneError").textContent = "";
  }

  if (message.value.trim() === "") {
    isValid = false;
    message.classList.add("error");
    document.getElementById("messageError").textContent = "Message is required";
  } else {
    message.classList.remove("error");
    document.getElementById("messageError").textContent = "";
  }

  submitBtn.disabled = !isValid;
  return isValid;
}
