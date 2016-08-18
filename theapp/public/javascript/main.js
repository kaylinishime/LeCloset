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
  var $gender1 = $('#user_gender1').val()
  var $retailer1 = $('#retailer1 option:selected').attr('data-id')
  var $retailer2 = $('#retailer2 option:selected').attr('data-id')
  if ($gender1.length >= 4) {
    // sending the data to controller to persist to DB
    $.ajax({
      url: '/users/:id',
      type: "put",
      dataType: "json",
      data: {
        gender: $gender1,
        retailer1: $retailer1,
        retailer2: $retailer2
      }
    })
      // .then(function(data) {
      //   if (data.error) {
      //     $("#errors").html(`Error: ${data.error}`);
      //   }
      //   else {
      //     $("#errors").html('');
      //     $("#additional-information").hide();
      //     $("#update-button").show();
      //     if (data.shelter) $("#shelter-button").show();
      //     else $("#shelter-button").hide();
      //   }
      // })
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
  var $gender2 = $('#user_gender2').val()
  var $retailer3 = $('#retailer3 option:selected').attr('data-id')
  var $retailer4 = $('#retailer4 option:selected').attr('data-id')
  if ($gender2.length >= 4) {
    // sending the data to controller to persist to DB
    $.ajax({
      url: '/users/:id',
      type: "put",
      dataType: "json",
      data: {
        gender: $gender2,
        retailer1: $retailer3,
        retailer2: $retailer4
      }
    })
    // .then(function(data) {
    //   if (data.error) {
    //     $("#errors").html(`Error: ${data.error}`);
    //   }
    //   else {
    //     $("#errors").html('');
    //     $("#additional-information").hide();
    //     $("#update-button").show();
    //     if (data.shelter) $("#shelter-button").show();
    //     else $("#shelter-button").hide();
    //   }
    // })
    console.log('it works');

    window.location.href="/products/:id"

  }
  else {
    // show error to the user
    console.log('its broken');
  }
})
