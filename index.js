'use strict';

const root = document.getElementById('root');

// Create Container

const formContainer = document.createElement('div');
formContainer.className = 'form-container';

// Heading
const heading = document.createElement('h2');
heading.textContent = 'Login';

// Form
const form = document.createElement('form');

// Email
// Email Label
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email : ';
emailLabel.htmlFor = 'email';
// Email Input Field
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.autocomplete = 'email';
emailInput.placeholder = 'Please enter your email';

// Password
// Password Label
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password : ';
passwordLabel.htmlFor = 'password';
// Password Input
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.placeholder = 'Please enter your password';

// Error paragraph
const errorMsg = document.createElement('p');
errorMsg.className = 'error-msg';

// Button
const loginBtn = document.createElement('button');
loginBtn.textContent = 'Submit';
loginBtn.type = 'submit';

// Append elements
form.append(
  emailLabel,
  emailInput,
  passwordLabel,
  passwordInput,
  errorMsg,
  loginBtn
);

formContainer.append(heading, form);
root.append(formContainer);

// Validation and Form Submission
form.addEventListener('submit', function (e) {
  // preventing form default behavior
  e.preventDefault();

  // setting back to default states
  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');
  errorMsg.textContent = '';

  // trimmed to removes whitespaces from starting and ending of the string
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // checking if email or password is empty, if empty showing error message and add class error to input field
  if (!email || !password) {
    if (!email) emailInput.classList.add('error');
    if (!password) passwordInput.classList.add('error');
    errorMsg.textContent = 'Please fill in all fields';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // checking if the email is valid or not using regex email pattern
  if (!emailPattern.test(email)) {
    emailInput.classList.add('error');
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  // checking if the password contains atleast 8 characters, if not return error message
  if (password.length < 8) {
    passwordInput.classList.add('error');
    errorMsg.textContent = 'Password must contain atleast 8 characters.';
    return;
  }

  // if all fields are valid then alerting the user with their email and password

  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');
  alert(`Email : ${email} \nPassword : ${password}`);

  // clear input fields
  emailInput.value = '';
  passwordInput.value = '';
});
