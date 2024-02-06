<?php
include_once "core.php";
include "gVariable.php";
include "messeges.php";
include "audited.php";
$response['data'] = array('success' => true, 'messege' => array());
$audit =  array(
    "cat" => "",
    "actname" => "",
    "actby" => "",
    "prev" => ""
);
if(!$_POST){
    header("location: ../../");
    exit();
} else {
    if(!isset($_POST['data']) || !isset($_POST['module'])){
        header("location: ../../");
        exit();
    } else {

        function addtask($uprev,$uid,$module){
            include "db.php";
            $audit["cat"] = $module;
            $audit["prev"] = $uprev;
            $audit["actby"] = $uid;
            if($uprev === "MANAGER"){
                //do condition with form values
                //          |
                //          v
                $fname      = $connect->real_escape_string($_POST["fname"]);
                $cell       = $connect->real_escape_string($_POST["cell"]);
                $serv       = $connect->real_escape_string($_POST["serv"]);
                $expdate    = $connect->real_escape_string($_POST["expdate"]);
                $tp         = $connect->real_escape_string($_POST["tp"]);
                $dp         = $connect->real_escape_string($_POST["dp"]);
                $addet      = $connect->real_escape_string($_POST["addet"]);
                $branch     = $connect->real_escape_string($_POST["ass"]);
                $tp = str_replace(",","",$tp);
                $dp = str_replace(",","",$dp);
                
                // $fname      = "Patrick Grajo";
                // $cell       = "09231456789";
                // $serv       = "1";
                // $size       = "30";
                // $expdate    = "2018-09-30 9:45 PM";
                // $tp         = "1000";
                // $dp         = "500";
                // $addet      = "nuginawamoeh";
                // $branch     = "2";
                
                $size;
                $quan;
                $nodesign;
                if($serv === "1" || $serv === "2"){
                    $typeOfSize = $connect->real_escape_string($_POST["typeofsize"]);
                    if ($typeOfSize === "1") {
                        $height     = $connect->real_escape_string($_POST["height1"]);
                        $width      = $connect->real_escape_string($_POST["width1"]);
                        $quan       = $connect->real_escape_string($_POST["quan1"]);
                        $size       = $width . "x" . $height;
                        if(!array_key_exists("nodesign1", $_POST)){
                            $nodesign = 0;
                        } else {
                            $nodesign = 150;
                        }
                    } elseif($typeOfSize === "2") {
                        $height     = $connect->real_escape_string($_POST["height2"]);
                        $width      = $connect->real_escape_string($_POST["width2"]);
                        $quan       = $connect->real_escape_string($_POST["quan2"]);
                        $size       = $width . "x" . $height;
                        if(!array_key_exists("nodesign2", $_POST)){
                            $nodesign = 0;
                        } else {
                            $nodesign = 150;
                        }
                    } else {
                        $response['success'] = false;
                        $response['messages'] = "Invalid type of size.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    }   
                } elseif ($serv === "3"){
                    $quan = $connect->real_escape_string($_POST["quan3"]);
                    $size = "N/A";
                    if(!array_key_exists("nodesign3", $_POST)){
                        $nodesign = 0;
                    } else {
                        $nodesign = 150;
                    }
                } else {
                    $response['success'] = false;
                    $response['messages'] = "Invalid type of service.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                }
                $attach;
                $attachName = $connect->real_escape_string($_FILES["attach"]['name']);
                $attachTmpName = $_FILES["attach"]['tmp_name'];
                $attachSize = $connect->real_escape_string($_FILES["attach"]['size']);
                $attachError = $connect->real_escape_string($_FILES["attach"]['error']);
                $attachType = $connect->real_escape_string($_FILES["attach"]['type']);
                $fileExt = explode('.', $attachName);
                $fileActualExt = strtolower(end($fileExt));
                $allowedExt = array('rar','zip','gzip','gz','7z');
                if(!in_array($fileActualExt, $allowedExt)){
                    $response['success'] = false;
                    $response['messages'] = "Invalid file type.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                } else {
                    if($attachError !== "0"){
                        $response['success'] = false;
                        $response['messages'] = "There was an error uploading your file.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        if($attachSize >  100000000){
                            $response['success'] = false;
                            $response['messages'] = "Your file is too big.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        } else {
                            $fileNameNew = uniqid('', true).".".$fileActualExt;
                            $attach = $fileNameNew;
                            $fileDestination = '../../uploads/attachment/'.$fileNameNew;
                        }
                    }
                }
                //get the people in branch
                //          |
                //          v

                $expdate = date('Y-m-d H:i:s', strtotime($expdate));
                $empsArray = array('data' => array());                     
                $sql = "SELECT * FROM `user` WHERE `branch_id` = '$branch' ORDER BY `fname` ASC";
                $result = $connect->query($sql);
                if($result->num_rows > 0){
                    while($row = $result->fetch_assoc()){
                        if($row['prev'] === "ADMIN" && $result->num_rows == 1){
                            $response['success'] = false;
                            $response['messages'] = "Please add employee to this branch.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        } elseif($row['prev'] === "ADMIN"){
                            GVariable::$brhead = $row['fname'];
                            GVariable::$brheadId = $row['id'];
                        } else {
                            $empsArray['data'][] = array(
                                "id"    => $row['id'],
                                "fname" => $row['fname'] 
                            );
                        }
                    }
                    // selecting ng bawat ID at ung bilang task nila
                    $Ids = $empsArray['data'];
                    $empAndNumOfTask = array('data' => array());
                    foreach ($Ids as $Id){
                        $Id = $Id["id"];
                        $sql = "SELECT * FROM task WHERE empname = '$Id'";
                        $result = $connect->query($sql);
                        $empAndNumOfTask['data'][] = array(
                            "id"    => $Id,
                            "numoftask" => $result->num_rows
                        );
                    }
                    // salain kung may zero na task
                    $lists = $empAndNumOfTask['data'];
                    // $empAndNumOfTask = array('data' => array());
                    foreach ($lists as $list){
                        $numtask = $list["numoftask"];
                        $id = $list["id"];
                        if($numtask === 0){
                            GVariable::$empId = $id;
                            $brheadid = GVariable::$brheadId;
                            $empid = GVariable::$empId;
                            $sql = "INSERT INTO `task` (`id`, `name`, `cell`, `serv`, `size`, `attach`, `addet`, `expdate`, `dp`, `tp`, `remarks`, `status`, `started`, `remday`, `finish`, `branch`, `adname`, `empname`, `dndate`, `quan`, `nodesign`, `aprvdby`) 
                                                VALUES (NULL, '$fname', '$cell', '$serv', '$size', '$attach', '$addet', '$expdate', '$dp', '$tp', '', '1', NOW(), '0', '0000-00-00 00:00:00', '$branch', '$brheadid', '$empid', '0000-00-00 00:00:00', '$quan', '$nodesign', 0)";
                            if($connect->query($sql) === true){
                                // $response['success'] = true;
                                // $response['messages'] = "Successfully add a new task.";
                                // $connect->close();
                                // echo json_encode($response);
                                // exit();
                                move_uploaded_file($attachTmpName, $fileDestination);
                                $audit["actname"] = "Add new task for ".ucwords($fname);
                                audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                                sendNudes($uprev,"add",$cell,$uid,GVariable::$brheadId,GVariable::$empId,$fname);
                                exit();
                            } else {
                                $response['success'] = false;
                                $response['messages'] = "Failed to insert in database.";
                                $connect->close();
                                echo json_encode($response);
                                exit();
                            }
                        }
                    }
                    // piliin ung pinakamataas na expdate bawat emp
                    $empIdAndMaxdate = array('data' => array()); 
                    foreach ($lists as $list){
                        $id = $list["id"];
                        $sql = "SELECT MAX(expdate) AS 'max_date' FROM task WHERE empname = '$id' AND `status` = 1";
                        $result = $connect->query($sql);
                        $row = $result->fetch_assoc();
                        $maxdate = $row['max_date'];
                        $empIdAndMaxdate['data'][] = array(
                            "id"    => $id,
                            "maxdate" => $maxdate
                        );
                    }
                    //lagay ng random seconds at kunin ung pinaka mababang expdate sa array
                    $empAndNewMaxdate = array('data' => array());
                    $lists = $empIdAndMaxdate['data'];
                    foreach($lists as $list){
                        $date = new DateTime($list['maxdate']);
                        $randomSeconds = rand(0,59);
                        $date->add(new DateInterval('PT'.$randomSeconds.'S'));

                        $newMaxdate = $date->format('Y-m-d H:i:s');
                        $id = $list['id'];
                        $empAndNewMaxdate['data'][] = array(
                            "id"    => $id,
                            "maxdate" => $newMaxdate
                        );
                    }
                    function customFunction($array) {
                        return $array['maxdate'];
                    }
                    $dateArray = array_map('customFunction', $empAndNewMaxdate['data']);
                    $oldDate = min($dateArray); 
                    function search($array, $key, $value)
                    {
                        $results = array();
                        if (is_array($array)) {
                            if (isset($array[$key]) && $array[$key] == $value) {
                                $results[] = $array;
                            }
                            foreach ($array as $subarray) {
                                $results = array_merge($results, search($subarray, $key, $value));
                            }
                        }
                        return $results;
                    }
                    $rawArray = search($empAndNewMaxdate['data'], 'maxdate', $oldDate);
                    $designatedEmpId = $rawArray[0]['id'];
                    GVariable::$empId = $designatedEmpId;
                    $brheadid = GVariable::$brheadId;
                    $empid = GVariable::$empId;
                    $sql = "INSERT INTO `task` (`id`, `name`, `cell`, `serv`, `size`, `attach`, `addet`, `expdate`, `dp`, `tp`, `remarks`, `status`, `started`, `remday`, `finish`, `branch`, `adname`, `empname`, `dndate`,`quan`, `nodesign`, `aprvdby`) 
                                        VALUES (NULL, '$fname', '$cell', '$serv', '$size', '$attach', '$addet', '$expdate', '$dp', '$tp', '', '1', NOW(), '0', '0000-00-00 00:00:00', '$branch', '$brheadid', '$empid', '0000-00-00 00:00:00', '$quan', '$nodesign', 0)";
                    if($connect->query($sql) === true){
                        // $response['success'] = true;
                        // $response['messages'] = "Successfully add a new task.";
                        // $connect->close();
                        // echo json_encode($response);
                        // exit();
                        move_uploaded_file($attachTmpName, $fileDestination);
                        $audit["actname"] = "Add new task for ".ucwords($fname);
                        audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                        sendNudes($uprev,"add",$cell,$uid,GVariable::$brheadId,GVariable::$empId,$fname);
                        exit();
                    } else {
                        $response['success'] = false;
                        $response['messages'] = "Failed to insert in database.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    }
                } else {
                    $response['success'] = false;
                    $response['messages'] = "No records.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                } 
            } elseif($uprev === "ADMIN") {
                //do condition with form values
                //          |
                //          v
                $fname      = $connect->real_escape_string($_POST["fname"]);
                $cell       = $connect->real_escape_string($_POST["cell"]);
                $serv       = $connect->real_escape_string($_POST["serv"]);
                $expdate    = $connect->real_escape_string($_POST["expdate"]);
                $tp         = $connect->real_escape_string($_POST["tp"]);
                $dp         = $connect->real_escape_string($_POST["dp"]);
                $addet      = $connect->real_escape_string($_POST["addet"]);
                $branch     = $_SESSION['branch'];
                $tp = str_replace(",","",$tp);
                $dp = str_replace(",","",$dp);

                $size;
                $quan;
                $nodesign;
                if($serv === "1" || $serv === "2"){
                    $typeOfSize = $connect->real_escape_string($_POST["typeofsize"]);
                    if ($typeOfSize === "1") {
                        $height     = $connect->real_escape_string($_POST["height1"]);
                        $width      = $connect->real_escape_string($_POST["width1"]);
                        $quan       = $connect->real_escape_string($_POST["quan1"]);
                        $size       = $width . "x" . $height;
                        if(!array_key_exists("nodesign1", $_POST)){
                            $nodesign = 0;
                        } else {
                            $nodesign = 150;
                        }
                    } elseif($typeOfSize === "2") {
                        $height     = $connect->real_escape_string($_POST["height2"]);
                        $width      = $connect->real_escape_string($_POST["width2"]);
                        $quan       = $connect->real_escape_string($_POST["quan2"]);
                        $size       = $width . "x" . $height;
                        if(!array_key_exists("nodesign2", $_POST)){
                            $nodesign = 0;
                        } else {
                            $nodesign = 150;
                        }
                    } else {
                        $response['success'] = false;
                        $response['messages'] = "Invalid type of size.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    }   
                } elseif ($serv === "3"){
                    $quan = $connect->real_escape_string($_POST["quan3"]);
                    $size = "N/A";
                    if(!array_key_exists("nodesign3", $_POST)){
                        $nodesign = 0;
                    } else {
                        $nodesign = 150;
                    }
                } else {
                    $response['success'] = false;
                    $response['messages'] = "Invalid type of service.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                }
                $attach;
                $attachName = $connect->real_escape_string($_FILES["attach"]['name']);
                $attachTmpName = $_FILES["attach"]['tmp_name'];
                $attachSize = $connect->real_escape_string($_FILES["attach"]['size']);
                $attachError = $connect->real_escape_string($_FILES["attach"]['error']);
                $attachType = $connect->real_escape_string($_FILES["attach"]['type']);
                $fileExt = explode('.', $attachName);
                $fileActualExt = strtolower(end($fileExt));
                $allowedExt = array('rar','zip','gzip','gz','7z');
                if(!in_array($fileActualExt, $allowedExt)){
                    $response['success'] = false;
                    $response['messages'] = "Invalid file type.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                } else {
                    if($attachError !== "0"){
                        $response['success'] = false;
                        $response['messages'] = "There was an error uploading your file.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        if($attachSize >  100000000){
                            $response['success'] = false;
                            $response['messages'] = "Your file is too big.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        } else {
                            $fileNameNew = uniqid('', true).".".$fileActualExt;
                            $attach = $fileNameNew;
                            $fileDestination = '../../uploads/attachment/'.$fileNameNew;
                        }
                    }
                }
                // $fname      = "Patrick Grajo";
                // $cell       = "09231456789";
                // $serv       = "4";
                // $size       = "30";
                // $expdate    = "2018-08-30";
                // $tp         = "1000";
                // $dp         = "500";
                // $addet      = "nuginawamoeh";
                // $branch     = "1";
                //get the people in branch
                //          |
                //          v
                $expdate = date('Y-m-d H:i:s', strtotime($expdate));
                $empsArray = array('data' => array());                     
                $sql = "SELECT * FROM `user` WHERE `branch_id` = '$branch' ORDER BY `fname` ASC";
                $result = $connect->query($sql);
                if($result->num_rows > 0){
                    while($row = $result->fetch_assoc()){
                        if($row['prev'] === "ADMIN" && $result->num_rows == 1){
                            $response['success'] = false;
                            $response['messages'] = "Please add employee to this branch.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        } elseif($row['prev'] === "ADMIN"){
                            GVariable::$brhead = $row['fname'];
                            GVariable::$brheadId = $row['id'];
                        } else {
                            $empsArray['data'][] = array(
                                "id"    => $row['id'],
                                "fname" => $row['fname'] 
                            );
                        }
                    }
                    // selecting ng bawat ID at ung bilang task nila
                    $Ids = $empsArray['data'];
                    $empAndNumOfTask = array('data' => array());
                    foreach ($Ids as $Id){
                        $Id = $Id["id"];
                        $sql = "SELECT * FROM task WHERE empname = '$Id'";
                        $result = $connect->query($sql);
                        $empAndNumOfTask['data'][] = array(
                            "id"    => $Id,
                            "numoftask" => $result->num_rows
                        );
                    }
                    // salain kung may zero na task
                    $lists = $empAndNumOfTask['data'];
                    // $empAndNumOfTask = array('data' => array());
                    foreach ($lists as $list){
                        $numtask = $list["numoftask"];
                        $id = $list["id"];
                        if($numtask === 0){
                            GVariable::$empId = $id;
                            $brheadid = GVariable::$brheadId;
                            $empid = GVariable::$empId;
                            $sql = "INSERT INTO `task` (`id`, `name`, `cell`, `serv`, `size`, `attach`, `addet`, `expdate`, `dp`, `tp`, `remarks`, `status`, `started`, `remday`, `finish`, `branch`, `adname`, `empname`, `dndate`, `quan`, `nodesign`, `aprvdby`) 
                                                VALUES (NULL, '$fname', '$cell', '$serv', '$size', '$attach', '$addet', '$expdate', '$dp', '$tp', '', '1', NOW(), '0', '0000-00-00 00:00:00', '$branch', '$brheadid', '$empid', '0000-00-00 00:00:00', '$quan', '$nodesign', 0)";
                            if($connect->query($sql) === true){
                                // $response['success'] = true;
                                // $response['messages'] = "Successfully add a new task.";
                                // $connect->close();
                                // echo json_encode($response);
                                // exit();
                                move_uploaded_file($attachTmpName, $fileDestination);
                                $audit["actname"] = "Add new task for ".ucwords($fname);
                                audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                                sendNudes($uprev,"add",$cell,$uid,GVariable::$brheadId,GVariable::$empId,$fname);
                                exit();
                            } else {
                                $response['success'] = false;
                                $response['messages'] = "Failed to insert in database.";
                                $connect->close();
                                echo json_encode($response);
                                exit();
                            }
                        }
                    }
                    // piliin ung pinakamataas na expdate bawat emp
                    $empIdAndMaxdate = array('data' => array()); 
                    foreach ($lists as $list){
                        $id = $list["id"];
                        $sql = "SELECT MAX(expdate) AS 'max_date' FROM task WHERE empname = '$id' AND `status` = 1";
                        $result = $connect->query($sql);
                        $row = $result->fetch_assoc();
                        $maxdate = $row['max_date'];
                        $empIdAndMaxdate['data'][] = array(
                            "id"    => $id,
                            "maxdate" => $maxdate
                        );
                    }
                    //lagay ng random seconds at kunin ung pinaka mababang expdate sa array
                    $empAndNewMaxdate = array('data' => array());
                    $lists = $empIdAndMaxdate['data'];
                    foreach($lists as $list){
                        $date = new DateTime($list['maxdate']);
                        $randomSeconds = rand(0,59);
                        $date->add(new DateInterval('PT'.$randomSeconds.'S'));

                        $newMaxdate = $date->format('Y-m-d H:i:s');
                        $id = $list['id'];
                        $empAndNewMaxdate['data'][] = array(
                            "id"    => $id,
                            "maxdate" => $newMaxdate
                        );
                    }
                    function customFunction($array) {
                        return $array['maxdate'];
                    }
                    $dateArray = array_map('customFunction', $empAndNewMaxdate['data']);
                    $oldDate = min($dateArray); 
                    function search($array, $key, $value)
                    {
                        $results = array();
                        if (is_array($array)) {
                            if (isset($array[$key]) && $array[$key] == $value) {
                                $results[] = $array;
                            }
                            foreach ($array as $subarray) {
                                $results = array_merge($results, search($subarray, $key, $value));
                            }
                        }
                        return $results;
                    }
                    $rawArray = search($empAndNewMaxdate['data'], 'maxdate', $oldDate);
                    $designatedEmpId = $rawArray[0]['id'];
                    GVariable::$empId = $designatedEmpId;
                    $brheadid = GVariable::$brheadId;
                    $empid = GVariable::$empId;
                    $sql = "INSERT INTO `task` (`id`, `name`, `cell`, `serv`, `size`, `attach`, `addet`, `expdate`, `dp`, `tp`, `remarks`, `status`, `started`, `remday`, `finish`, `branch`, `adname`, `empname`, `dndate`, `quan`, `nodesign`, `aprvdby`) 
                                        VALUES (NULL, '$fname', '$cell', '$serv', '$size', '$attach', '$addet', '$expdate', '$dp', '$tp', '', '1', NOW(), '0', '0000-00-00 00:00:00', '$branch', '$brheadid', '$empid', '0000-00-00 00:00:00', '$quan', '$nodesign', 0)";
                    if($connect->query($sql) === true){
                        // $response['success'] = true;
                        // $response['messages'] = "Successfully add a new task.";
                        // $connect->close();
                        // echo json_encode($response);
                        // exit();
                        move_uploaded_file($attachTmpName, $fileDestination);
                        $audit["actname"] = "Add new task for ".ucwords($fname);
                        audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                        sendNudes($uprev,"add",$cell,$uid,GVariable::$brheadId,GVariable::$empId,$fname);
                        exit();
                    } else {
                        $response['success'] = false;
                        $response['messages'] = "Failed to insert in database.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    }
                } else {
                    $response['success'] = false;
                    $response['messages'] = "No records.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                }
            } else {
                $response['success'] = false;
                $response['messages'] = "Error.";
                $connect->close();
                echo json_encode($response);
                exit();
            }
        }
        function adduser($prev,$uid,$module){
            $audit["cat"] = $module;
            $audit["prev"] = $prev;
            $audit["actby"] = $uid;
            include "db.php";
            $uname  = $connect->real_escape_string($_POST["uname"]);
            $pass   = $connect->real_escape_string($_POST["pass"]);
            $fname  = $connect->real_escape_string($_POST["fname"]);
            $prev   = $connect->real_escape_string($_POST["prev"]);
            $cell   = $connect->real_escape_string($_POST["cell"]);
            $br     = $connect->real_escape_string($_POST["br"]);
            $sql = "SELECT * FROM `user` WHERE uname = '$uname'";
            $result = $connect->query($sql);
            if($result->num_rows > 0){
                $response['success'] = false;
                $response['messages'] = "Username is already taken.";
                $connect->close();
                echo json_encode($response);
                exit();
            } else {
                $picName = $connect->real_escape_string($_FILES["pic"]['name']);
                $picTmpName = $_FILES["pic"]['tmp_name'];
                $picSize = $connect->real_escape_string($_FILES["pic"]['size']);
                $picError = $connect->real_escape_string($_FILES["pic"]['error']);
                $picType = $connect->real_escape_string($_FILES["pic"]['type']);
                $fileExt = explode('.', $picName);
                $fileActualExt = strtolower(end($fileExt));
                $allowedExt = array('jpg','jpeg','png','gif');
                if(!in_array($fileActualExt, $allowedExt)){
                    $response['success'] = false;
                    $response['messages'] = "Invalid file type.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                } else {
                    if($picError !== "0"){
                        $response['success'] = false;
                        $response['messages'] = "There was an error uploading your file.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        if($picSize >  2000000){
                            $response['success'] = false;
                            $response['messages'] = "Your file is too big.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        } else {
                            $fileNameNew = uniqid('', true).".".$fileActualExt;
                            $fileDestination = '../../uploads/'.$fileNameNew;
                        }
                    }
                }
                if($prev === "1"){
                    $prev = "ADMIN";
                } else {
                    $prev = "EMP";
                }
                $pass = md5($pass);
                if($prev === "ADMIN"){
                    $sql = "SELECT * FROM `user` WHERE branch_id = '$br' AND prev = 'ADMIN'";
                    $result = $connect->query($sql);
                    if($result->num_rows > 0){
                        $response['success'] = false;
                        $response['messages'] = "The branch already have ADMIN.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        $sql = "INSERT INTO `user` (`id`, `uname`, `pass`, `fname`, `prev`, `con`, `branch_id`, `credate`, `path`) VALUES (NULL, '$uname', '$pass', '$fname', '$prev', '$cell', '$br', NOW(), '$fileNameNew')";
                        $result = $connect->query($sql);
                        $affected = $connect->affected_rows;
                        if($affected == 0){
                            $response['success'] = false;
                            $response['messages'] = "Failed to insert in database.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        } else {
                            move_uploaded_file($picTmpName, $fileDestination);
                            $audit["actname"] = "Add new Account user for ".ucwords($fname);
                            audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                            $response['success'] = true;
                            $response['messages'] = "Successfully add new <strong>ADMIN</strong> user account.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        }
                    }
                } else {
                    $sql = "INSERT INTO `user` (`id`, `uname`, `pass`, `fname`, `prev`, `con`, `branch_id`, `credate`, `path`) VALUES (NULL, '$uname', '$pass', '$fname', '$prev', '$cell', '$br', NOW(), '$fileNameNew')";
                    $result = $connect->query($sql);
                    $affected = $connect->affected_rows;
                    if($affected == 0){
                        $response['success'] = false;
                        $response['messages'] = "Failed to insert in database.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        move_uploaded_file($picTmpName, $fileDestination);
                        $audit["actname"] = "Add new Account user for ".ucwords($fname);
                        audited($audit["cat"], $audit["actname"], $audit["actby"], $audit["prev"]);
                        $response['success'] = true;
                        $response['messages'] = "Successfully add new <strong>EMPLOYEE</strong> user account.";
                        $connect->close();  
                        echo json_encode($response);
                        exit();
                    }
                }  
            } 
        }
        //umpisa ng kalbaryo
        $prev = $_SESSION['prev'];
        $module = $_POST['module'];
        $module = "task";
        $uid = $_SESSION['uid'];
        if($prev === "MANAGER"){
            if($module === "task"){
                addtask($prev,$uid,$module);
                exit();
            } elseif($module === "useracc"){
                adduser($prev,$uid,$module);
            } else {
                header("location: ../../");
                exit();
            }
        } elseif($prev === "ADMIN"){
            if($module === "task"){
                addtask($prev,$uid,$module);
                exit();
            } else {
                header("location: ../../");
                exit();
            }
        } else {
            header("location: ../../");
            exit();
        }
    }  
}
?>
