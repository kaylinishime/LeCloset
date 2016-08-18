$('.allbutton').click(function() {
  // Show everything
  $(".tops").show('fast'),
  $(".bottoms").show('fast'),
  $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  $(".misc").show('fast')

})

$('.topbutton').click(function() {
  // Double check that everything is visible
  $(".tops").show('fast'),
  $(".bottoms").show('fast'),
  $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  $(".misc").show('fast')
  // Hide everything exept for Jackets
  $(".bottoms").hide('fast'),
  $(".accessories").hide('fast'),
  $(".shoes").hide('fast'),
  $(".misc").hide('fast')
})

$('.bottomsbutton').click(function() {
  // Double check that everything is visible
  $(".tops").show('fast'),
  $(".bottoms").show('fast'),
  $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  $(".misc").show('fast')
  // Hide everything exept for Jackets
  $(".tops").hide('fast'),
  $(".accessories").hide('fast'),
  $(".shoes").hide('fast'),
  $(".misc").hide('fast')
})

$('.shoesbutton').click(function() {
    console.log('clicked')
  // Double check that everything is visible
  // $(".tops").show('fast'),
  // $(".bottoms").show('fast'),
  // $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  // $(".misc").show('fast')
  // Hide everything exept for Jackets
  $(".tops").hide('fast'),
  $(".bottoms").hide('fast'),
  $(".accessories").hide('fast'),
  $(".misc").hide('fast')
})

$('.trouserbutton').click(function() {
  // Double check that everything is visible
  $(".catA").show('fast'),
  $(".catB").show('fast'),
  $(".catC").show('fast'),
  $(".catD").show('fast'),
  $(".catE").show('fast')
  // Hide everything exept for Jackets
  $(".catA").hide('fast'),
  $(".catB").hide('fast'),
  $(".catC").hide('fast'),
  $(".catE").hide('fast')
})

$('.shoebutton').click(function() {

  // Double check that everything is visible
  $(".catA").show('fast'),
  $(".catB").show('fast'),
  $(".catC").show('fast'),
  $(".catD").show('fast'),
  $(".catE").show('fast')
  // Hide everything exept for Jackets
  $(".catA").hide('fast'),
  $(".catB").hide('fast'),
  $(".catC").hide('fast'),
  $(".catD").hide('fast')
})
// $('#shoes').on('click', function() {
//   $('#shoes').removeClass('hide')
//   $('#shirts').removeClass('hide')
//   $('#hats').removeClass('hide')
//   $('#pants').removeClass('hide')
//   $('#shorts').removeClass('hide')
//   $('#jacket').removeClass('hide')

//   $('#jackets').addClass('hide')
//   $('#shirts').addClass('hide')
//   $('#hats').addClass('hide')
//   $('#pants').addClass('hide')
//   $('#shorts').addClass('hide')
// })

// $( "button" ).click(function() {
//   var clickedButtonId = $(this).attr(button);

//   var divList = $("section").toArray();

//   divList.sort(function(a, b) {
//    if (clickedButtonId === '.allbutton') {
//     return $(a).find('.allbutton').text() > $(b).find('.allbutton').text() ? 1 : -1; ;
//    }

//   else if (clickedButtonId === '.jacketbutton') {
//     return $(b).find('.jacketbutton').data('.jacketbutton') - +$(a).find('.jacketbutton').data('.jacketbutton');
//    }

//   else if (clickedButtonId === '.shirtbutton'){
//     return $(b).find('.shirtbutton').data('.shirtbutton') - +$(a).find('.shirtbutton').data('.shirtbutton');
//   }

//   else if (clickedButtonId === '.dressbutton'){
//     return $(b).find('.dressbutton').data('.dressbutton') - +$(a).find('.dressbutton').data('.dressbutton');
//   }

//   else if (clickedButtonId === '.trouserbutton'){
//     return $(b).find('.trouserbutton').data('.trouserbutton') - +$(a).find('.trouserbutton').data('.trouserbutton');
//   }

//   else if (clickedButtonId === '.shoebutton'){
//     return $(b).find('.shoebutton').data('.shoebutton') - +$(a).find('.shoebutton').data('.shoebutton');
//   }


//     });

//     $("section").html(divList);

//     $('button').removeClass('active');
//     $(this).addClass('active');
//     });



// $( ".jacketbutton" ).click(function() {
//   $( ".catA" ).hide( "fast" );
// });

// $( ".shirtbutton" ).click(function() {
//   $( ".catB" ).hide( "fast" );
// });

// $( ".dressbutton" ).click(function() {
//   $( ".catC" ).hide( "fast" );
// });

// $( ".trouserbutton" ).click(function() {
//   $( ".catD" ).hide( "fast" );
// });

// $( ".shoebutton" ).click(function() {
//   $( ".catE" ).hide( "fast" );
// });

// When I have this active I am not able to do the above
// $( ".allbutton" ).click(function() {
//   $( ".dog" ).show( "fast" );

// $( ".allbutton" ).click(function() {
//   $( "#dog" ).show( "fast", function showNext() {
//     $( this ).next( "#dog" ).show( "fast", showNext );
//   });
// });
