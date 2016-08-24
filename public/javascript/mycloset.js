// On page-load, load my closet with my products
$(document).ready(function(){
	$('#empty-state').hide()
	render = _.template($('#profile-template').html());
	$.get('/products/:id/get', function(product) {
			if(product.error){
				console.log(product.error)
			}
			else {
				if (product.length <= 0){
					$('.uil-ring-css').addClass('hide')
					$('#empty-state').show()
				}
				else {
					product.forEach(function(products) {
						products.customCategory = categoryConversions[products.categories[0].name]
						$('.product-item').append(render(products))
						$('.uil-ring-css').addClass('hide')
					});
				}
			}
	});
});

// Removing a product from my closet
$('.product-item').on('click', '.remove-from-closet', function(event){
	// Grabs the product ID out of the button
	var $product_id = $(event.target).attr("data-id");
  $('.product-item').hide()
  $('.product-item').html("")
	$('#empty-state').hide()
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
            if (product.length <= 0){
              $('.uil-ring-css').addClass('hide')
              $('#empty-state').show()
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
