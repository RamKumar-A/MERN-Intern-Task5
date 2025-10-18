# MERN Stack – Task 5: Dynamic Login Form

## Implementation Overview

The login form is completely generated using JavaScript, meaning no static HTML form elements are used. The implementation focuses on creating each part of the form programmatically and ensuring that it is interactive and user-friendly.

## Form Structure

### The dynamically created form consists of:

- Heading – Displays the title of the form ("Login").

- Email Input Field – A labeled input for the user to enter their email.

- Password Input Field – A labeled input for the user to enter their password.

- Submit Button – A button to trigger form submission.

- Error Message Paragraph – Displays validation errors such as empty fields, invalid email, or short passwords.

- All these elements are appended to a form container div, which is then appended to the root element in the HTML document.

## Functionality and Validation

### The JavaScript code provides:

- Dynamic Element Creation – All form elements, including labels, inputs, buttons, and error messages, are created programmatically.

- Event Handling – A listener is attached to the submit button to handle form interactions.

- ### Validation Logic:

- - Ensures all fields are filled before submission.

- - Checks for valid email format.

- - Verifies that the password meets minimum length requirements.

- Error Feedback – If validation fails, an error message is displayed inline without affecting the form layout.

- Successful Submission – On valid input, the entered email and password are displayed in an alert, and the form is reset for new input.

## Testing

### The form has been tested under:

- Empty Fields: Displays a warning to fill in all fields.

- Invalid Email: Shows an error message for incorrect email format.

- Short Password: Warns when the password does not meet minimum requirements.

- Valid Input: Displays entered credentials in an alert and resets the form.

- Responsiveness: The form maintains layout and usability across desktop and mobile screen sizes.

## Screenshots

!(form)[./images/form.png]
!(empty_fields)[./images/empty_fields.png]
!(email_error)[./images/email_error.png]
!(password_error)[./images/password_error.png]
!(onsuccess)[./images/onsuccess.png]
!(mobile-screen)[./images/mobile-screen.png]
