<?php
session_start();
require_once 'db.php';
ob_start();
if (!array_key_exists('uid', $_SESSION)) {
    header("Location: ../../");
    exit();
} else {}
?>