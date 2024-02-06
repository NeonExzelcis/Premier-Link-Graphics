<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $branch = $_SESSION['branch'];
        $output = array('data' => array());
        include_once "../../action/db.php";
        $sql = "SELECT * FROM user WHERE branch_id = '$branch' ORDER BY id ASC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                $row[7] = new DateTime($row[7]);
                $row[7] = $row[7]->format('m/d/Y H:i A');
                if($row[4] === "EMP"){
                    $row[4] = "EMPLOYEE";
                } elseif($row[4] === "ADMIN") {
                    $row[4] = "SUPERVISOR";
                }
                $output['data'][] = array(
                    ucwords($row[3]),
                    $row[1],
                    $row[4],
                    $row[5],
                    $row[7],
                    $row[8]
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>