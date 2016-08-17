
	$(function() {
					/**
					 * the menu
					 */
					var $menu = $('#ldd_menu');

					/**
					 * for each list element,
					 * we show the submenu when hovering and
					 * expand the span element (title) to 510px
					 */
					$menu.children('li').each(function(){
						var $this = $(this);
						var $span = $this.children('span');
						$span.data('width',$span.width());

						$this.bind('mouseenter',function(){
							$menu.find('.ldd_submenu').stop(true,true).hide();
							$span.stop().animate({'width':'400px'},200,function(){
								$this.find('.ldd_submenu').slideDown(100);
							});
						}).bind('mouseleave',function(){
							$this.find('.ldd_submenu').stop(true,true).hide();
							$span.stop().animate({'width':$span.data('width')+'px'},300);
						});

					});

var retailerIds = []
$('.cbox1').click(function(event){
	var label = $(event.target).next('label').text();
	console.log(label)
	console.log($(event.target).next('label').attr('data-id'))
	// var retailerNames = $('<label>' + label.text() + '</label>')

    // retailerNames.data('id', label[0].dataset.id);
		// $('.col-md-2').append(retailerNames);
	})


	// grab retail id
	// AJAX request sending ID to retailers create controller
	// write code in controller to persist to database




// if ($('input.cbox1').is(':checked')){
// 	$.ajax({
// 	url: '/retailers',
// 	type: "create",
// 	dataType: "json",
// 	data: {
// 	gender: $gender1,
// }
// })


$('.names').click(function(event){
	console.log(event.target)
		if (event.target.is($('.names'))){
				$(event.target).remove();
		}
	})

});
