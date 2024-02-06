<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $prev = strtolower($_SESSION['prev']);
        $mode = $_POST['value'];
        $module = $_POST['module'];
        $uid = $_SESSION['uid'];
        $output = array('data' => array());
        include_once "../../action/db.php";
        $sql = "SELECT * FROM task WHERE `empname` = '$uid' AND `status` = 3 ORDER BY `finish` DESC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                $row[12] = new DateTime($row[12]);
                $row[12] = $row[12]->format('m/d/Y H:i A');

                $row[14] = new DateTime($row[14]);
                $row[14] = $row[14]->format('m/d/Y H:i A');
                if($row[3] === "1"){
                    $row[3] = "Tarpaulin";
                } elseif($row[3] === "2"){
                    $row[3] = "Sticker";
                } elseif($row[3] === "3"){
                    $row[3] = "Mug Press";
                } elseif($row[3] === "4"){
                    $row[3] = "Heat Press";
                }
                $btnFv = "<button class='btn btn-primary btn-sm fv' id='".$prev."_".$mode."_".$module."_".$row[0]."'><i class='fa fa-eye fa-lg'></i> Fullview</button>";
                $output['data'][] = array(
                    ucwords($row[1]),
                    $row[2],
                    $row[3],
                    $row[4],
                    $row[12],
                    $row[14],
                    $btnFv
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>