<?php
  session_start();
  $_SESSION['number_of_cart_items'] += 1;
  echo $_SESSION['number_of_cart_items'];
?>
