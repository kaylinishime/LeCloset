console.log("Main js loaded");

var $connect = $("#login");
var googleWindow;

    checkConnect = setInterval(function() {
        if (googleWindow && googleWindow.location.pathname === "/close") {
        clearInterval(checkConnect);
        googleWindow.close();
      };
    }, 100);

$connect.on("click", function (){
  googleWindow = window.open('/auth/google', 'googleWindow', 'scrollbars=yes,resizable=yes,top=175,left=450,width=500,height=400');
})


$('.google').on('click', function() {
    $('#modal_login').removeClass('morph-button-modal-2').addClass('morph-button-modal-3');
    $('.modal_header').text('Tell Us More');
    $('.google').remove();
    $('.login_form_hidden').removeClass('login_form_hidden').addClass('login_form_show')
})

$('#lets_do_this').on('click', function() {
  var $gender = $('#user_gender').val()
  if ($gender.length >= 4) {
    //persist to database
    console.log('it works');
    window.location.href="/products"
  }
  else {
    // show error to the user
    console.log('its broken');
  }
})
