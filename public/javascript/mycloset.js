// On page-load, load my closet with my products
$(document).ready(function(){
	render = _.template($('#profile-template').html());
	$.get('/products/:id/get', function(product) {
			console.log(product)
			if(product.error){
				console.log(product.error)
			} else {
				console.log(product);
				product.forEach(function(products) {
					products.customCategory = categoryConversions[products.categories[0].name]
					$('.product-item').append(render(products))
					$('.uil-ring-css').addClass('hide')
				});
			}
	});
});

// Removing a product from my closet
$('.product-item').on('click', '.remove-from-closet', function(event){
	console.log('clicked');
	// Grabs the product ID out of the button
	var $product_id = $(event.target).attr("data-id");
	console.log($product_id);
  $('.product-item').hide()
  $('.product-item').html("")
  $('.uil-ring-css').removeClass('hide')
		$.ajax({
			url: '/products/:id',
			type: "delete",
			dataType: "json",
			data: {
				product: $product_id
			}
		})
      .then(function() {
        render = _.template($('#profile-template').html());
        $.get('/products/:id/get', function(product) {
            console.log(product)
            if (product.length <= 0){
              console.log('ALL DONE');
              $('.uil-ring-css').addClass('hide')
              // $('#corbot').removeClass('hide')
            }
            else {
              if(product.error){
                console.log(product.error)
              } else {
                product.forEach(function(products) {
                  $('.product-item').show();
                  $('.product-item').append(render(products));
                  $('.uil-ring-css').addClass('hide');
                });
              }
            }


          });

      });
});
