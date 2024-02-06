<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $prev = strtolower($_SESSION['prev']);
        $module = $_POST['module'];
        $mode = $_POST['value'];
        $output = array('data' => array());
        
        include_once "../../action/db.php";
        $sql = "SELECT * FROM `audit` ORDER BY id DESC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){  
            while($row = $result->fetch_array()) {
                $row[5] = new DateTime($row[5]);
                $row[5] = $row[5]->format('m/d/Y h:i A');
                $uid = $row[3];
                $sqluser = "SELECT * FROM user WHERE `id` = '$uid'";
                $resultuser = $connect->query($sqluser);
                $emprow = $resultuser->fetch_assoc();
                $output['data'][] = array(
                    strtoupper($row[1]),
                    $row[2],
                    $emprow['fname'],
                    $row[4],
                    $row[5]
                );

            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>