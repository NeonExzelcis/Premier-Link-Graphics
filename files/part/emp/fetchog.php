<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $prev = strtolower($_SESSION['prev']);
        $uid = $_SESSION['uid'];
        $module = $_POST['module'];
        $mode = $_POST['value'];
        $output = array('data' => array());
        include_once "../../action/db.php";
        $sql = "SELECT * FROM task WHERE `empname` = '$uid' AND `status` = 1 ORDER BY `started` ASC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                
                $btnFv = "<button class='btn btn-info btn-sm fv' id='".$prev."_".$mode[0]."_".$module."_".$row[0]."'><i class='fa fa-eye fa-lg'></i> Fullview</button>";
                $btnDone = "<button class='btn btn-success btn-sm done' id='".$prev."_".$mode[1]."_".$module."_".$row[0]."'><i class='fa fa-check-square fa-lg'></i> Done</button>";
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
                $output['data'][] = array(
                    ucwords($row[1]),
                    $row[2],
                    $row[3],
                    $row[4],
                    $row[12],
                    $row[7],
                    $btnFv." | ".$btnDone
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>