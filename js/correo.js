$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('name')
    var phone   = document.getElementById('phone')
    var email = document.getElementById('email')
    var message = document.getElementById('mensaje')

    if (!name.value || !phone.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/diegotafurobregon@outlook.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Mensaje enviado gracias.");
    }
  });
});