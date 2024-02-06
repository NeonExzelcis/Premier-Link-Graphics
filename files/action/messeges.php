<?php
include_once "core.php";
function forEmp($empCell,$fname,$messegeEmp,$responseMessage){
    if(strlen($empCell) != 11){
        $response['success'] = true;
        $response['messages'] = $messegeEmp.", <strong><span class='text-danger'>Invalid Employee Number.</span></strong>";
        echo json_encode($response);
        exit();
    } else {
        $messegeBody = $messegeEmp;
        $messegeResult = itexmo($empCell,$messegeBody,"ST-MICHA717863_Y7RZ8");
        if ($messegeResult == ""){
            $response['success'] = false;
            $response['messages'] = "iTexMo: No response from server!!!
                Please check the METHOD used (CURL or CURL-LESS). If you are using CURL then try CURL-LESS and vice versa.	
                Please CONTACT US for help.";
            echo json_encode($response);
            exit();
        } else if ($messegeResult == 0) {
            $response['success'] = true;
            $response['messages'] = $responseMessage;
            echo json_encode($response);
            exit();
        } else {
            $response['success'] = true;
            $response['messages'] = $responseMessage."<br><span class='text-danger'>But error Num ". $messegeResult . " was encountered!.</span>";
            echo json_encode($response);
        }
    }
}
function forAdmin($adminCell,$empname,$fname,$messegeAdmin){
    if(strlen($adminCell) != 11){
        $response['success'] = true;
        $response['messages'] = $messegeAdmin.", <strong><span class='text-danger'>Invalid Admin Number.</span></strong>";
        echo $adminCell;
        echo json_encode($response);
        exit();
    } else {
        $messegeBody = $messegeAdmin;
        $messegeResult = itexmo($adminCell,$messegeBody,"ST-MICHA717863_Y7RZ8");
        if ($messegeResult == ""){
            // $response['success'] = false;
            // $response['messages'] = "iTexMo: No response from server!!!
            //     Please check the METHOD used (CURL or CURL-LESS). If you are using CURL then try CURL-LESS and vice versa.	
            //     Please CONTACT US for help.";
            // echo json_encode($response);
            // exit();
        } else if ($messegeResult == 0) {
            
        } else {	
            // $response['success'] = false;
            // $response['messages'] = "Error Num ". $messegeResult . " was encountered!. but your task in successfully registered.";
            // echo json_encode($response);
        }
    }
}
function forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager){
    if(strlen($managerCell) != 11){
        $response['success'] = true;
        $response['messages'] = $messegeManager.", <strong><span class='text-danger'>Invalid Manager Number.</span></strong>";
        echo json_encode($response);
        exit();
    } else {
        $messegeBody = $messegeManager;
        $messegeResult = itexmo($managerCell,$messegeBody,"ST-MICHA717863_Y7RZ8");
        if ($messegeResult == ""){
            // $response['success'] = false;
            // $response['messages'] = "iTexMo: No response from server!!!
            //     Please check the METHOD used (CURL or CURL-LESS). If you are using CURL then try CURL-LESS and vice versa.	
            //     Please CONTACT US for help.";
            // echo json_encode($response);
            // exit();
        } else if ($messegeResult == 0) {
        
        } else {	
            // $response['success'] = false;
            // $response['messages'] = "Error Num ". $messegeResult . " was encountered!, but your task in successfully registered.";
            // echo json_encode($response);
        }
    }
}
function forCustomer($customerCell,$messegeCustomer){
    if(strlen($customerCell) != 11){
        $response['success'] = true;
        $response['messages'] = $messegeCustomer.", <strong><span class='text-danger'>Invalid Customer Number.</span></strong>";
        echo json_encode($response);
        exit();
    } else {
        $messegeBody = $messegeCustomer;
        $messegeResult = itexmo($customerCell,$messegeBody,"ST-MICHA717863_Y7RZ8");
        if ($messegeResult == ""){
            // $response['success'] = false;
            // $response['messages'] = "iTexMo: No response from server!!!
            //     Please check the METHOD used (CURL or CURL-LESS). If you are using CURL then try CURL-LESS and vice versa.	
            //     Please CONTACT US for help.";
            // echo json_encode($response);
            // exit();
        } else if ($messegeResult == 0) {
            
        } else {	
            // $response['success'] = false;
            // $response['messages'] = "Error Num ". $messegeResult . " was encountered!, but your task in successfully registered.";
            // echo json_encode($response);
        }
    }
}
function sendNudes($prev,$mode,$cell,$uid,$brheadid,$empid,$fname){
    include "db.php";
    $customerCell = $cell;
    $managerCell;
    $adminCell;
    $employeeCell;
    $sql = "SELECT * FROM user WHERE id = '$uid'";
    $result = $connect->query($sql);
    $row = $result->fetch_assoc();
    $managerCell = $row['con'];
    $sql = "SELECT * FROM user WHERE id = '$brheadid'";
    $result = $connect->query($sql);
    $row = $result->fetch_assoc();
    $adminCell = $row['con'];
    $adminname = $row['fname'];
    $sql = "SELECT * FROM user WHERE id = '$empid'";
    $result = $connect->query($sql);
    $row = $result->fetch_assoc();
    $empCell = $row['con'];
    $empname = $row['fname'];
    $empbr = $row['branch_id'];
    if($empbr === "1"){
        $empbr = "Main Branch";
    } elseif($empbr === "2") {
        $empbr = "Branch 2";
    } elseif($empbr === "3") {
        $empbr = "Branch 3";
    } elseif($empbr === "4") {
        $empbr = "Branch 4";
    }
    include "smsfunc.php";
    if($prev === "MANAGER"){
        if($mode === "add") {
            $messegeCustomer = "Your order was successfully scheduled.\nYou will recieve a follow-up message(s) about the update of your order.";
            $messegeManager = "The task for ".$fname." is successfully registered to ".$empname." of ".$empbr.".\nPlease assist ".$adminname."(Branch head) for the details of this task.";
            $messegeAdmin = "The task for ".$fname." has been assigned to ".$empname.".\nPlease wait for the assistance of the manager for more specific details of the task.";
            $messegeEmp = "The task for ".$fname." was assigned to you.\nPlease open your account and coordinate with your admin for more details.";
            $responseMessage = "Successfully add a new task.\nThis task assigned to <strong>".$empname."</strong> of <strong>".$empbr."</strong>.";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        } elseif($mode === "editnotchangebranch"){
            $messegeCustomer = "Their took some change about the details of the task.\nIf you not inform about this, Please contact this number for more details.\n".$managerCell;
            $messegeManager = "Please assist ".$adminname." admin of ".$empbr." about the changes of task for ".$fname.".";
            $messegeAdmin = "Minimal changes detected to the task for ".$fname.".\nPlease wait the assistance of manager about the details.";
            $messegeEmp = "Minimal changes detected to the task for ".$fname.".\nPlease wait the assistance of your admin about the details.";
            $responseMessage = "Successfully update a task.\nThis task assigned to <strong>".$empname."</strong> of <strong>".$empbr."</strong>.";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        } elseif($mode === "editchangebranch"){
            $messegeCustomer = "Their took some change about the details of the task.\nIf you not inform about this, Please contact this number for more details.\n".$managerCell;
            $messegeManager = "Task for ".$fname." is transfered to ".$empbr.".\nPlease assist ".$adminname." for the specific details.";
            $messegeAdmin = "Task for ".$fname." is transfered to ".$empname.".\nPlease wait for the assistance of the manager.";
            $messegeEmp = "Task for ".$fname." is transfered to you.\nPlease wait for the assistance of your admin.";
            $responseMessage = "Successfully update a task.\nThis task assigned to <strong>".$empname."</strong> of <strong>".$empbr."</strong>.";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        } elseif($mode === "approve"){
            $messegeCustomer = "Thank you for being our valued customer.";
            $messegeManager = "Task for ".$fname." is finish.\n Check ALL FINISH TASKS in your account to see the full details of the task.";
            $messegeAdmin = "Task for ".$fname." is finish.\n Check ALL FINISH TASKS in your account to see the full details of the task.";
            $messegeEmp = "Task for ".$fname." is finish.\n Check ALL FINISH TASKS in your account to see the full details of the task.";
            $responseMessage = "Successfully approve a task.\nThis task will go to <strong>ALL FINISH TASK</strong>";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        } elseif($mode === "renotify"){
            if($notifmode === "ogt"){

            }
        }
    } elseif($prev === "ADMIN") {
        if($mode === "add"){
            $messegeCustomer = "Your order was successfully scheduled.\nYou will recieve a follow-up message(s) about the update of your order.";
            $messegeAdmin = "Task for ".$fname." has been assigned to ".$empname.".";
            $messegeEmp = "The task for ".$fname." was assigned to you.\nPlease open your account and coordinate with your admin for more details.";
            $responseMessage = "Successfully add a task.\nThis task assigned to <strong>".$empname."</strong> of <strong>".$empbr."</strong>.";
            forCustomer($customerCell,$messegeCustomer);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        } elseif($mode === "edit"){
            $messegeCustomer = "Their took some change about the details of the task.\nIf you not inform about this, Please contact this number for more details.\n".$adminCell;
            $messegeManager = "Minimal changes detected to the task for ".$fname.". b";
            $messegeAdmin = "Please assist ".$empname." about the changes of task for ".$fname.".";
            $messegeEmp = "Minimal changes detected to the task for ".$fname.".\nPlease wait the assistance of your admin about the details.";
            $responseMessage = "Successfully update a task.\nThis task assigned to <strong>".$empname."</strong> of <strong>".$empbr."</strong>.";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        } elseif($mode === "approve"){
            $messegeCustomer = "Thank you for being our valued customer. We are grateful for the pleasure of serving you and meeting your printing needs.";
            $messegeManager = "Task for ".$fname." is finish.\n Check ALL FINISH TASKS in your account to see the full details of the task.";
            $messegeAdmin = "Task for ".$fname." is finish.\n Check ALL FINISH TASKS in your account to see the full details of the task.";
            $messegeEmp = "Task for ".$fname." is finish.\n Check ALL FINISH TASKS in your account to see the full details of the task.";
            $responseMessage = "Successfully approve a task.\nThis task will go to <strong>ALL FINISH TASK</strong>";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        }
    } elseif($prev === "EMP") {
        if($mode === "done"){
            $messegeCustomer = "Your order is done!, Please go to us and check the your order.";
            $messegeManager = "Task for ".$fname." is done.\n Check PENDING TASK in your account to see the full details of the task.";
            $messegeAdmin = "Task for ".$fname." is done.\n Check PENDING TASK in your account to see the full details of the task.";
            $messegeEmp = "You've done a task.";
            $responseMessage = "Successfully done a task.\nWait for the approval of your task.";
            forCustomer($customerCell,$messegeCustomer);
            forManager($managerCell,$empname,$empbr,$adminname,$fname,$messegeManager);
            forAdmin($adminCell,$empname,$fname,$messegeAdmin);
            forEmp($empCell,$fname,$messegeEmp,$responseMessage);
            exit();
        }
    } else {
        $response['success'] = false;
        $response['messages'] = "Invalid previlege please contact the developers.";
        echo json_encode($response);
        exit();
    }
} 
?>