$(document).ready(function() {
    // when the register form is submitted
    $("#register-form").submit(function(event) {
      event.preventDefault();
      // get the values of the name, email, password, and confirm password fields
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmPassword = $("#confirm-password").val();
      // validate that the password and confirm password fields match
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      // send a POST request to the server to register the user
      $.ajax({
        url: "register.php",
        type: "POST",
        data: {name: name, email: email, password: password},
        success: function(data) {
          // if the registration was successful, redirect to the login page
          window.location.href = "login.html";
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // if the registration failed, show an error message
          alert("Error registering user.");
        }
      });
    });
  });