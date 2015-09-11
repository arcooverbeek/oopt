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
});
