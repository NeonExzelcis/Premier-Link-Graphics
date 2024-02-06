<?php 
    require_once "../core.php";
    if(!isset($_POST['data'])){
        echo "error";
        exit();
    } else {
        $prev = strtolower($_SESSION['prev']);
        $module = $_POST['module'];
        $mode = $_POST['value'];
        $branch = $_SESSION['branch'];
        $output = array('data' => array());
        include_once "../../action/db.php";
        $sql = "SELECT * FROM task WHERE branch = '$branch' AND `status` = 1 ORDER BY id DESC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_array()) {
                $uid = $row[17];
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
                $btnEdit = "<button class='btn btn-success btn-sm edit' id='".$prev."_".$mode[0]."_".$module."_".$row[0]."'><i class='fa fa-edit fa-lg'></i> Edit</button>";
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
                    $btnEdit
                );
            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>