//logout
  
  

$(function() {
    //login
    $('#frmLogin').on('submit', function(e) {
        e.preventDefault();
        var mail = $('#email').val();
        var pass = $('#pass').val();
        $.ajax({
          url: 'http://localhost:3000/api/v1/auth/login', // API endpoint for logout
          method: 'POST',
          data: {
            email: mail,
            password: pass
          },
          dataType: 'json'
        }).done(function(data,textStatus, jqXHR) {
            if (data.success) {
                // Set the cookies in the browser
                document.cookie = jqXHR.getResponseHeader('Set-Cookie');
                // Redirect to main page
                console.log(jqXHR.getResponseHeader('Set-Cookie'))
                //  window.location.href = "/dashboard.html";
              } else {
                // Handle failed login
                $("#Incorrect").html("<h8>" + data.data + "</h8>");

              }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            $("#Incorrect").html("<h8>" + jqXHR.responseJSON.data + "</h8>");
            console.log('Error logging out: ' + jqXHR.responseJSON);
        });
      });

    //logout
    $('#btn-logout').on('click', function() {
        $.ajax({
          url: 'http://localhost:3000/api/v1/auth/logout', // API endpoint for logout
          method: 'GET',
          dataType: 'json'
        }).done(function(data) {
          console.log(data)
          window.location.href = "/index.html";
        }).fail(function(jqXHR, textStatus, errorThrown) {
          console.log('Error logging out: ' + errorThrown);
        });
      });

    
});


