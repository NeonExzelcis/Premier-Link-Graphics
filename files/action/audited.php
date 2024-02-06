<?php
    include_once "core.php";
    function audited($cat, $actname, $actby, $prev){
        include "db.php";
        $sql = "INSERT INTO `audit` (`id`, `category`, `actname`, `actby`, `prev`, `actdate`) 
        VALUES (NULL, '$cat', '$actname', '$actby', '$prev', NOW())";
        $connect->query($sql);
    }
?>