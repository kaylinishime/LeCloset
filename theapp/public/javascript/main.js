console.log("Main js loaded");

// Checks to see when the triple handshake has been completed and auto closes the window once its complete.
var googleWindow;
    checkConnect = setInterval(function() {
        if (googleWindow && googleWindow.location.pathname === "/close") {
        clearInterval(checkConnect);
        googleWindow.close();
      };
    }, 100);

// Login Button
$("#login").on("click", function (){
  googleWindow = window.open('/auth/google', 'googleWindow', 'scrollbars=yes,resizable=yes,top=175,left=450,width=500,height=400');
})

// Register Button
$("#register").on("click", function (){
  googleWindow = window.open('/auth/google', 'googleWindow', 'scrollbars=yes,resizable=yes,top=175,left=450,width=500,height=400');
})

// My Closet Button
$("#my_closet").on("click", function (){
  window.location.href="/users/:id"
})

// Log Out Button
$("#log_out").on("click", function (){
  window.location.href="/logout"
})

// Changes the LOGIN modal and asks more questions to the user.
$('.google').on('click', function() {
    $('#modal_login1').removeClass('morph-button-modal-2').addClass('morph-button-modal-3');
    $('.modal_header').text('Tell Us More');
    $('.google').remove();
    $('.login_form_hidden').removeClass('login_form_hidden').addClass('login_form_show')
})

// Changes the REGISTER modal and asks more questions to the user.
$('.google').on('click', function() {
    $('#modal_login2').removeClass('morph-button-modal-2').addClass('morph-button-modal-3');
    $('.modal_header').text('Tell Us More');
    $('.google').remove();
    $('.login_form_hidden').removeClass('login_form_hidden').addClass('login_form_show')
})

// Redirects LOGIN user to their Product Search page.
$('#lets_do_this1').on('click', function() {
  var $gender = $('#user_gender1').val()
  if ($gender.length >= 4) {
    //persist to database
    console.log('it works');
    window.location.href="/products/:id"
  }
  else {
    // show error to the user
    console.log('its broken');
  }
})

// Redirects REGISTER user to their Product Search page.
$('#lets_do_this2').on('click', function() {
  var $gender = $('#user_gender2').val()
  if ($gender.length >= 4) {
    //persist to database
    console.log('it works');

    window.location.href="/products/:id"

  }
  else {
    // show error to the user
    console.log('its broken');
  }
})
