<?php
    // $localhost = "sql112.epizy.com";
    // $username = "epiz_22556255";
    // $password = "YGCgz3s42Yk";
    // $dbname = "epiz_22556255_itp";
    $localhost = "localhost";
    $username = "root";
    $password = "";
    $dbname = "itp";
    
    // db connection
    $connect = new mysqli($localhost, $username, $password, $dbname);
    // check connection
    if (mysqli_connect_errno()) {
      printf("Connect failed: %s\n", mysqli_connect_error());
      exit();
    }
?>
