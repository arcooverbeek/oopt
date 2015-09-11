<?php
  $productId = $_GET['id'] |= 1;
  $productStock = ['1' => '0', '2' => '345789', '3' => '3498' ];
  

  if ($productStock[$productId] > 0) {
    ?>
    <strong>Yo de stock is: <?php echo $productStock[$productId]; ?></strong>
    <a class="btn btn-default"> Bestel deze shit er is voorraad!</a>
    <?php
  } else {
    ?>
    <strong>Yo de stock is: <?php echo $productStock[$productId]; ?></strong>
    Jammer joh
    <?php 
  }

?>
