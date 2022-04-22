// /* javascript, after body is loaded */
"use strict";

// /* login */

//Show and Hide password - login page
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");

togglePasswordButton.addEventListener("click", togglePassword);

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "Esconder password";
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "Mostrar password";
  }
}

const loginForm = document.getElementById("form_id");
const loginButton = document.getElementById("login-form-submit");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
  // Prevent the default submission of the form
  e.preventDefault();
  // Get the values input by the user in the form fields
  const sns = loginForm.username.value;
  const password = loginForm.password.value;

  if (sns === "test" && password === "test") {
    // If the credentials are valid, show an alert box and redirect to a new page
    alert("You have successfully logged in.");
    document.location.href = "index1.html";
  } else {
    // Otherwise, make the login error message show
    alert("Senha inválida");
  }
});
