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

$('.bottombutton').click(function() {
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
  $(".tops").show('fast'),
  $(".bottoms").show('fast'),
  $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  $(".misc").show('fast')
  // $(".misc").show('fast')
  // Hide everything exept for Jackets
  $(".tops").hide('fast'),
  $(".bottoms").hide('fast'),
  $(".accessories").hide('fast'),
  $(".misc").hide('fast')
})

$('.accessoriesbutton').click(function() {
  // Double check that everything is visible
  $(".tops").show('fast'),
  $(".bottoms").show('fast'),
  $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  $(".misc").show('fast')
  // Hide everything exept for Jackets
  $(".tops").hide('fast'),
  $(".bottoms").hide('fast'),
  $(".shoes").hide('fast'),
  $(".misc").hide('fast')
})

$('.miscbutton').click(function() {

  // Double check that everything is visible
  $(".tops").show('fast'),
  $(".bottoms").show('fast'),
  $(".accessories").show('fast'),
  $(".shoes").show('fast'),
  $(".misc").show('fast')
  // Hide everything exept for Jackets
  $(".tops").hide('fast'),
  $(".bottoms").hide('fast'),
  $(".accessories").hide('fast'),
  $(".shoes").hide('fast')
})
