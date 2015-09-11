<?php
  $productId = $_GET['id'] |= 1;
  $productStock = ['1' => '208', '2' => '345789', '3' => '3498' ];
  
  ?>
  <strong>Yo de stock is: <?php echo $productStock[$productId]; ?></strong>


  

  <?php
?>
