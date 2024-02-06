<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $prev = strtolower($_SESSION['prev']);
        $mode = $_POST['value'];
        $module = $_POST['module'];
        $output = array('data' => array());
        include_once "../../action/db.php";
        $sql = "SELECT * FROM task WHERE `status` = 3 ORDER BY id ASC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                if($row[3] === "1"){
                    $row[3] = "Tarpaulin";
                } elseif($row[3] === "2"){
                    $row[3] = "Sticker";
                } elseif($row[3] === "3"){
                    $row[3] = "Mug Press";
                } elseif($row[3] === "4"){
                    $row[3] = "Heat Press";
                }
                $row[12] = new DateTime($row[12]);
                $row[12] = $row[12]->format('m/d/Y H:i A');

                $row[14] = new DateTime($row[14]);
                $row[14] = $row[14]->format('m/d/Y H:i A');
                if($row[15] === "1"){
                    $row[15] = "Main";
                } elseif($row[15] === "2"){
                    $row[15] = "Branch 2";
                } elseif($row[15] === "3"){
                    $row[15] = "Branch 3";
                } elseif($row[15] === "4"){
                    $row[15] = "Branch 4";
                }
                $empid = $row[17];
                $usersql = "SELECT * FROM user WHERE id = '$empid'";
                $resultuser = $connect->query($usersql);
                $rowuser = $resultuser->fetch_array();
                $btnFv = "<button class='btn btn-info btn-sm fv' id='".$prev."_".$mode."_".$module."_".$row[0]."'><i class='fa fa-eye fa-lg'></i> Fullview</button>";
                $output['data'][] = array(
                    ucwords($row[1]),
                    $row[2],
                    $row[3],
                    $row[4],
                    $row[12],
                    $row[14],
                    $rowuser[3],
                    $row[15],
                    $btnFv
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>