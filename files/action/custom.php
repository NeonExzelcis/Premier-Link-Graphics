<?php
include_once "core.php";
include "messeges.php";
include "audited.php";
$audit =  array(
    "cat" => "",
    "actname" => "",
    "actby" => "",
    "prev" => ""
);
$response['data'] = array('success' => true, 'messege' => array());
if(!$_POST){
    header("location: ../../");
    exit();
} else {
    if(!isset($_POST['data']) || !isset($_POST['btn']) || !isset($_POST['id'])){
        header("location: ../../");
        exit();
    } else {
        $itemId = $connect->real_escape_string($_POST['id']);
        $btnMode = $connect->real_escape_string($_POST['btn']);
        include "db.php";
        $sql = "SELECT * FROM task WHERE id = '$itemId'";
        $result = $connect->query($sql);
        if($result->num_rows != 1){
            $response['success'] = false;
            $response['messages'] = "Invalid item ID.";
            echo json_encode($response);
            exit();
        } else {
            $row = $result->fetch_assoc();
            $uPrev = $_SESSION['prev'];
            $uId = $_SESSION['uid'];
            $brheadId = $row['adname'];
            $branchId = $row['branch'];
            $empId = $row['empname'];
            $fname = $row['name'];
            $cell = $row['cell'];

            if($branchId === 1){
                $branchId = "Main Branch";
            } elseif($branchId === 2){
                $branchId = "Branch 2";
            } elseif($branchId === 3){
                $branchId = "Branch 3";
            } elseif($branchId === 4){
                $branchId = "Branch 4";
            }


            $audit["prev"] = $uPrev;
            $audit["actby"] = $uId;
            $audit["cat"] = "task";
            if($btnMode === "approve"){
                $sql = "UPDATE `task` SET `status` = '3', `finish` = NOW() WHERE `task`.`id` = '$itemId'";
                $result = $connect->query($sql);
                if($connect->affected_rows != 1){
                    $response['success'] = false;
                    $response['messages'] = "Failed to approved ".$fname.".";
                    echo json_encode($response);
                    exit();
                } else {
                    // $response['success'] = true;
                    // $response['messages'] = "Approve success.";
                    // echo json_encode($response);
                    // exit();
                    
                    $audit["actname"] = "Task approved for ".ucwords($fname);
                    audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                    sendNudes($uPrev,$btnMode,$cell,$uId,$brheadId,$empId,$fname);
                    exit();
                }
            } elseif($btnMode === "modify"){
                $rem = $connect->real_escape_string($_POST['rem']);
                $sql = "UPDATE `task` SET `remarks` = '$rem' WHERE `task`.`id` = '$itemId'";
                $result = $connect->query($sql);
                if($connect->affected_rows != 1){
                    $response['success'] = false;
                    $response['messages'] = "Failed to modify ".$fname.".";
                    echo json_encode($response);
                    exit();
                } else {
                    $audit["actname"] = "Task modified for ".ucwords($fname);
                    audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                    $response['success'] = true;
                    $response['messages'] = "Success to modify ".$fname.".";
                    echo json_encode($response);
                    exit();
                }
            } elseif($uPrev === "EMP" && $btnMode === "done"){
                $sql = "UPDATE `task` SET `status` = '2', `dndate` = NOW() WHERE `task`.`id` = '$itemId'";
                $result = $connect->query($sql);
                if($connect->affected_rows != 1){
                    $response['success'] = false;
                    $response['messages'] = "Failed to done task for ".$fname.".";
                    echo json_encode($response);
                    exit();
                } else {
                    // $response['success'] = true;
                    // $response['messages'] = "Done success.";
                    // echo json_encode($response);
                    // exit();
                    $audit["actname"] = "Task doned for ".ucwords($fname);
                    audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                    sendNudes($uPrev,$btnMode,$cell,$uId,$brheadId,$empId,$fname);
                    exit();
                }
            } elseif($btnMode === "renotify"){ 
                $audit["actname"] = "Reminded ".$branchId." about on going task for ".ucwords($fname);
                audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                sendNudes($uPrev,$btnMode,$cell,$uId,$brheadId,$empId,$fname);
                exit();
            } else {
                $response['success'] = false;
                $response['messages'] = "Invalid previlage.";
                echo json_encode($response);
                exit();
            }
            $response['success'] = true;
            $response['messages'] = "basta";
            echo json_encode($response);
            exit();
        }
    }
}
?>