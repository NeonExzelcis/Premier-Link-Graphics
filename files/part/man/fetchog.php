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
        $sql = "SELECT * FROM task WHERE `status` = 1 ORDER BY `started` DESC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                $row[12] = new DateTime($row[12]);
                $row[12] = $row[12]->format('m/d/Y h:i A');
                $row[7] = new DateTime($row[7]);
                $row[7] = $row[7]->format('m/d/Y h:i A');
                if($row[3] === "1"){
                    $row[3] = "Tarpaulin";
                } elseif($row[3] === "2"){
                    $row[3] = "Sticker";
                } elseif($row[3] === "3"){
                    $row[3] = "Mug Press";
                } elseif($row[3] === "4"){
                    $row[3] = "Heat Press";
                }
                if($row[15] === "1"){
                    $row[15] = "Main";
                } elseif($row[15] === "2"){
                    $row[15] = "Branch 2";
                } elseif($row[15] === "3"){
                    $row[15] = "Branch 3";
                } elseif($row[15] === "4"){
                    $row[15] = "Branch 4";
                }
                $btnEdit = "<button class='btn btn-success btn-sm edit' id='".$prev."_".$mode[0]."_".$module."_".$row[0]."'><i class='fa fa-edit fa-lg'></i> Edit</button>";
                $uid = $row[17];
                $sqluser = "SELECT * FROM user WHERE `id` = '$uid'";
                $resultuser = $connect->query($sqluser);
                $emprow = $resultuser->fetch_assoc();
                $output['data'][] = array(
                    ucwords($row[1]),
                    $row[2],
                    $row[3],
                    $row[4],
                    $row[12],
                    $row[7],
                    $emprow["fname"],
                    $row[15],
                    $btnEdit,
                    $row[0]
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>