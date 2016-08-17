
$( ".jacketbutton" ).click(function() {
  $( ".catA" ).hide( "fast" );
});

$( ".shirtbutton" ).click(function() {
  $( ".catB" ).hide( "fast" );
});

$( ".dressbutton" ).click(function() {
  $( ".catC" ).hide( "fast" );
});

$( ".trouserbutton" ).click(function() {
  $( ".catD" ).hide( "fast" );
});

$( ".shoebutton" ).click(function() {
  $( ".catE" ).hide( "fast" );
});

// When I have this active I am not able to do the above
// $( ".allbutton" ).click(function() {
//   $( ".dog" ).show( "fast" );

// $( ".allbutton" ).click(function() {
//   $( "#dog" ).show( "fast", function showNext() {
//     $( this ).next( "#dog" ).show( "fast", showNext );
//   });
// });
