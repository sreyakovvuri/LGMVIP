function submitForm(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Validate password
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Perform further processing or submit the form
  // For this example, we're just displaying an alert
  alert("Registration successful!");
}
