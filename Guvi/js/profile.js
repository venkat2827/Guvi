$(document).ready(function() {
    // when the profile form is submitted
    $("#profile-form").submit(function(event) {
      event.preventDefault();
      // get the values of the name, age, dob, contact, and gender fields
      var name = $("#name").val();
      var age = $("#age").val();
      var dob = $("#dob").val();
      var contact = $("#contact").val();
      var gender = $("input[name=gender]:checked").val();
      // send a POST request to the server to update the user's profile
      $.ajax({
        url: "update_profile.php",
        type: "POST",
        data: {name: name, age: age, dob: dob, contact: contact, gender: gender},
        success: function(data) {
          // if the profile update was successful, show a success message
          alert("Profile updated successfully.");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // if the profile update failed, show an error message
          alert("Error updating profile.");
        }
      });
    });
  });