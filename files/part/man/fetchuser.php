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
        $sql = "SELECT * FROM user ORDER BY id DESC";
        $result = $connect->query($sql);
        if($result->num_rows > 0){  
            while($row = $result->fetch_array()) {
                $row[7] = new DateTime($row[7]);
                $row[7] = $row[7]->format('m/d/Y H:i A');
                $btnEdit = "<button class='btn btn-success btn-sm edit' id='".$prev."_".$mode."_".$module."_".$row[0]."'><i class='fa fa-users-cog fa-lg'></i> Edit</button>";
                
                $btnLock = "<button class='btn btn-danger btn-sm lock-acc' id='".$prev."_".$mode."_".$module."_".$row[0]."'><i class='fa fa-users-cog fa-lg'></i> Lock</button>";
                $btnUnlock = "<button class='btn btn-primary btn-sm unlock-acc' id='".$prev."_".$mode."_".$module."_".$row[0]."'><i class='fa fa-users-cog fa-lg'></i> Unlock</button>";
                $actions;
                if($row[9] === "1"){
                    $row[9] = $btnLock;
                } else {
                    $row[9] = $btnUnlock;
                }
               
                if($row[6] === "0"){
                    $row[6] = "MANAGER";
                    $btnEdit = "";
                    $row[9] = "";
                } elseif($row[6] === "1"){
                    $row[6] = "Branch 1";
                } elseif($row[6] === "2"){
                    $row[6] = "Branch 2";
                } elseif($row[6] === "3"){
                    $row[6] = "Branch 3";
                } elseif($row[6] === "4"){
                    $row[6] = "Branch 4";
                }
                if($row[4] === "EMP"){
                    $row[4] = "EMPLOYEE";
                } else if ($row[4] === "ADMIN"){
                    $row[4] = "SUPERVISOR";
                } else if ($row[4] === "MANAGER"){
                    $row[4] = "ADMINISTRATOR";
                }
                $output['data'][] = array(
                    ucwords($row[3]),
                    $row[1],
                    $row[4],
                    $row[5],
                    $row[6],
                    $row[7],
                    $btnEdit,
                    // ." ". $row[9]
                    $row[8]
                );

            }
        }
        $connect->close();
        echo json_encode($output);
    }
?>