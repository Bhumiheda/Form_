document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation flags
  let isValid = true;

  // Name check
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Message check
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // Show success if all is valid
  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
