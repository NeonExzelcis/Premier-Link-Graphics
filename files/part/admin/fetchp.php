<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $prev = strtolower($_SESSION['prev']);
        $branch = $_SESSION['branch'];
        $module = $_POST['module'];
        $mode = $_POST['value'];
        $output = array('data' => array());
        include_once "../../action/db.php";
        $sql = "SELECT * FROM task WHERE `status` = 2 AND `branch` = '$branch' ORDER BY `dndate` DESC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                $btnModify = "<button class='btn btn-primary btn-sm modify' id='".$prev."_".$mode[0]."_".$module."_".$row[0]."'><i class='fa fa-pen-square fa-lg'></i> Modify</button>";
                $btnApprove = "<button class='btn btn-success btn-sm approve' id='".$prev."_".$mode[1]."_".$module."_".$row[0]."'><i class='fa fa-thumbs-up fa-lg'></i> Approve</button>";
                $uid = $row[17];
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

                $row[7] = new DateTime($row[7]);
                $row[7] = $row[7]->format('m/d/Y H:i A');

                $row[18] = new DateTime($row[18]);
                $row[18] = $row[18]->format('m/d/Y H:i A');

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
                    $row[18],
                    $emprow["fname"],
                    $btnModify .' | '. $btnApprove
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>