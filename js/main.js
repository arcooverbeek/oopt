$(document).ready(function(){
  $('a.check-stock').click(function(){
    $(this).replaceWith( "<h2>New heading</h2>" );
    
    $.ajax('stock.php', {
      success: function(data){
        console.log('success!!!');
        console.log(data);
      }
    });



    return false;
  });
});
