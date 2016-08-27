// THE MENU
var $menu = $('#ldd_menu');
// custom dictionary to reducing clothing types to 5 categories
var customCategory;
var categoryConversions = {
	"Sneakers":"shoes",
	"Flats":"shoes",
	"Watches":"accessories",
	"Hats":"accessories",
	"Sandals":"shoes",
	"Leather Jackets":"tops",
	"Clothing":"misc",
	"Hair Styling Products": "misc",
	"Hair Care":"misc",
	"Tees":"tops",
	"Jeans": "bottoms",
	"Sunglasses": "accessories",
	"Lace-up Shoes": "shoes",
	"Jewelry": "accessories",
	"Slip-ons & Loafers":"shoes",
	"Shirts": "tops",
	"Slim Jeans":"bottoms",
	"Fragrances":"misc",
	"Athletic Shoes":"shoes",
	"Dresses":"tops",
	"Day Dresses":"tops",
	"Shorts":"bottoms",
	"Face Makeup":"misc",
	"Face Moisturizers":"misc",
	"Evening Dresses":"tops",
	"Face Anti-Aging":"misc",
	"Duffels & Totes":"accessories",
	"Styling Products":"misc",
	"Diamond Necklaces":"accessories",
	"Coats":"tops",
	"Pumps":"shoes",
	"Skin Care":"misc",
	"Longsleeve Tops":"tops",
	"Casual Jackets":"tops",
	"Boots":"shoes",
	"Cardigans":"tops",
	"Bridal Gowns":"tops",
	"Cream Foundation": "misc",
	"Cropped Denim":"tops",
	"Cocktail Dresses": "tops",
	"Skinny Denim": "bottoms",
	"Mules & Clogs": "shoes",
	"Teen Girls' Tops": "tops",
	"Cashmere Sweaters":"tops",
	"Shoulder Bags":"accessories",
	"Tanks":"tops",
	"Coats":"tops",
	"Backpacks":"accessories",
	"Clutches":"accessories",
	"Eyebrow Enhancers":"misc",
	"Eye Shadow":"misc",
	"Outerwear":"tops",
	"Mascara":"misc",
	"Lipstick":"misc",
	"Dark Circles":"misc",
	"Blow Dryers & Irons":"misc",
	"Nail Polish":"misc",
	"Makeup":"misc",
	"Beauty Products":"misc",
	"Wedges":"Shoes",
	"Distressed Denim":"bottoms",
	"Face Skin Revitalizers":"misc",
	"Necklaces":"accessories",
	"Bracelets":"accessories",
	"Face Blush":"misc",
	"Teen Girls' Clothes":"misc",
	"Bags":"accessories",
	"Heels":"shoes",
	"Rings":"accessories",
	"Face Bronzer":"misc",
	"Bridal Shoes":"shoes",
	"Pumps":"shoes",
	"Platforms":"shoes"
}
//  for each list element, we show the submenu when hovering and expand the span element (title) to 510px

$menu.children('li').each(function(){
	var $this = $(this);
	var $span = $this.children('span');
	$span.data('width',$span.width());
	$this.bind('mouseenter', function(){
	$menu.find('.ldd_submenu').stop(true,true).hide();
	$span.stop().animate({'width':'200px'},500,function(){
	$this.find('.ldd_submenu').slideDown(200);
		});
		}).bind('mouseleave',function(){
			$this.find('.ldd_submenu').stop(true,true).hide();
			$span.stop().animate({'width':$span.data('width')+'px'},500);
			$('.product-item').html("")
			// make template
			render = _.template($('#product-template').html());

				$('.uil-ring-css').removeClass('hide')
				$.get('/retailers', function(product) {
						if(product.error){
							console.log(product.error)
						} else {
								$('.product-item').show();
								$('.uil-ring-css').addClass('hide')
								product.forEach(function(products) {
									// add field products.customCategory
									// populate customCategory with categoryConvert function
									products.customCategory = categoryConversions[products.categories[0].name]
									$('.product-item').append(render(products))
								});
							}
					});
			});
});

// takes in a sophisticated category and returns
// a dumbed down category

	$('.cbox1').click(function(event){
		// Checks to see if the box is checked.
		// IF yes THEN add the retailer ID to the DB under user.retailers
		if($(event.target).is(':checked')) {
			var $label = $(event.target).next('label').text();
			var $retailer_id = $(event.target).next('label').attr("data-id");
				$.ajax({
					url: '/retailers',
					type: "put",
					dataType: "json",
					data: {
						retailer: $retailer_id
					}
				});
			}
			else {
				// IF no THEN remove the retailer ID from the DB under user.retailers
				var $label = $(event.target).next('label').text();
				var $retailer_id = $(event.target).next('label').attr("data-id");
					$.ajax({
						url: '/retailers',
						type: "delete",
						dataType: "json",
						data: {
							retailer: $retailer_id
						}
					});
			}
	});

// On Page reload - Load products
$(document).ready(function(){
	render = _.template($('#product-template').html());
	$.get('/retailers', function(product) {
			if(product.error){
				console.log(product.error)
			} else {
				product.forEach(function(products) {
					$('.product-item').append(render(products))
					$('.uil-ring-css').addClass('hide')
				});
			}
	});
});

// Adding a product to my closet
$('.product-item').on('click', '.add-to-closet', function(event){
	// Grabs the product ID out of the button
	var $product_id = $(event.target).attr("data-id");
		$.ajax({
			url: '/products/:id',
			type: "put",
			dataType: "json",
			data: {
				product: $product_id
			}
		});
});
