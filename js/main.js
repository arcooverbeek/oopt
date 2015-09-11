$(document).ready(function(){
  $('a.check-stock').click(function(){
    var stockButton = $(this);

    
    $.ajax(stockButton.attr('href'), {
      
      success: function(data){
        stockButton.replaceWith(data);
      }
    });

    return false;
  });



  $('a.order-product').click(function(){
    

    
    $.ajax('addToCart.php', {
      success: function(data){
        $('span#number-of-cart-items').html(data);
      }
    });

    return false;
  });



});
