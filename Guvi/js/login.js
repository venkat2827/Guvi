$(document).ready(function() {
    // when the login form is submitted
    $("#login-form").submit(function(event) {
      event.preventDefault();
      // get the values of the email and password fields
      var email = $("#email").val();
      var password = $("#password").val();
      // send a POST request to the server to check if the email and password are valid
      $.ajax({
        url: "login.php",
        type: "POST",
        data: {email: email, password: password},
        success: function(data) {
          // if the login was successful, redirect to the profile page
          window.location.href = "profile.html";
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // if the login failed, show an error message
          alert("Invalid email or password.");
        }
      });
    });
  });