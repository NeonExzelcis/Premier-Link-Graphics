<?php 

require_once 'core.php';

try {
    session_unset(); 
    session_destroy(); 
    echo "logout";
    exit();
} catch (Exception $ee) {
    echo "logout";
    exit();
}


?>