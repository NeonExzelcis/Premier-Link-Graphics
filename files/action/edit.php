<?php
include_once "core.php";
include "gVariable.php";
include "messeges.php";
$response['data'] = array('success' => true, 'messege' => array());
if(!$_POST){
    header("location: ../../");
    exit();
} else {
    if( !isset($_POST['data']) || !isset($_POST['module']) || !isset($_POST['itemId']) ){
        header("location: ../../");
        exit();
    } else {
        function edituser(){
            include "db.php";
            $id     = $connect->real_escape_string($_POST["id"]);
            $uname  = $connect->real_escape_string($_POST["uname"]);
            $pass   = $connect->real_escape_string($_POST["pass"]);
            $fname  = $connect->real_escape_string($_POST["fname"]);
            $prev   = $connect->real_escape_string($_POST["prev"]);
            $cell   = $connect->real_escape_string($_POST["cell"]);
            $br     = $connect->real_escape_string($_POST["br"]);
            // validate this infos
            //              |
            //              v
            
            // insert in db
            //              |
            //              v
            $sql = "SELECT * FROM `user` WHERE id = '$id'";
            $result = $connect->query($sql);
            if($result->num_rows == 0){
                echo "error";
                exit();
            } else {
                $row = $result->fetch_assoc();
                if($prev === "1"){
                    $prev = "ADMIN";
                } elseif($prev === "2") {
                    $prev = "EMP";
                }
                if($uname === $row["uname"] && $pass === $row["pass"] && $fname === $row["fname"] && $prev === $row["prev"] && $cell === $row["con"] && $br === $row["branch_id"]){
                    echo "nochange";
                    exit();
                } else {
                    $olduname = $row['uname'];
                    if($uname === $olduname){
                        if($prev === "ADMIN"){
                            $sql = "SELECT * FROM `user` WHERE branch_id = '$br' AND prev = 'ADMIN'";
                            $result = $connect->query($sql);
                            if($result->num_rows > 0){
                                echo "alreadyhaveadmin";
                                exit();
                            } else {
                                $sql = "UPDATE `user` SET `uname` = '$uname', `pass` = '$pass', `fname` = '$fname', `prev` = '$prev', `con` = '$cell', `branch_id` = '$br' WHERE id = '$id'";
                                $result = $connect->query($sql);
                                $affected = $connect->affected_rows;
                                if($affected == 0){
                                    //echo $prev."<br>";
                                    echo "nochange";
                                    exit();
                                } else {
                                    echo "successadmin";
                                    exit();
                                }
                            }
                        } else {
                            $sql = "UPDATE `user` SET `uname` = '$uname', `pass` = '$pass', `fname` = '$fname', `prev` = '$prev', `con` = '$cell', `branch_id` = '$br' WHERE id = '$id'";
                            $result = $connect->query($sql);
                            $affected = $connect->affected_rows;
                            if($affected == 0){
                                echo "nochange";
                                exit();
                            } else {
                                echo "successemp";
                                exit();
                            }
                        }  
                    } else {
                        $sql = "SELECT * FROM `user` WHERE uname = '$uname'";
                        $result = $connect->query($sql);
                        if($result->num_rows > 0){
                            echo "unametaken";
                            exit();
                        } else {
                            if($prev === "1"){
                                $prev = "ADMIN";
                            } else {
                                $prev = "EMP";
                            }
                            if($prev === "ADMIN"){
                                $sql = "SELECT * FROM `user` WHERE branch_id = '$br' AND prev = 'ADMIN'";
                                $result = $connect->query($sql);
                                if($result->num_rows > 0){
                                    echo "alreadyhaveadmin";
                                    exit();
                                } else {
                                    $sql = "UPDATE `user` SET `uname` = '$uname', `pass` = '$pass', `fname` = '$fname', `prev` = '$prev', `con` = '$cell', `branch_id` = '$br' WHERE id = '$id'";
                                    $result = $connect->query($sql);
                                    $affected = $connect->affected_rows;
                                    if($affected == 0){
                                        echo "error";
                                        exit();
                                    } else {
                                        echo "successadmin";
                                        exit();
                                    }
                                }
                            } else {
                                $sql = "UPDATE `user` SET `uname` = '$uname', `pass` = '$pass', `fname` = '$fname', `prev` = '$prev', `con` = '$cell', `branch_id` = '$br' WHERE id = '$id'";
                                $result = $connect->query($sql);
                                $affected = $connect->affected_rows;
                                if($affected == 0){
                                    echo "error";
                                    exit();
                                } else {
                                    echo "successemp";
                                    exit();
                                }
                            }  
                        } 
                    }
                }
            } 
        }
        function edittask($uPrev,$uId){
            include "db.php";
            if ($uPrev === "MANAGER"){
                $itemId     = $connect->real_escape_string($_POST["itemId"]);
                $fname      = $connect->real_escape_string($_POST["fname"]);
                $cell       = $connect->real_escape_string($_POST["cell"]);
                $size       = $connect->real_escape_string($_POST["size"]);
                $expdate    = $connect->real_escape_string($_POST["expdate"]);
                $addet      = $connect->real_escape_string($_POST["addet"]);
                $branch     = $connect->real_escape_string($_POST["ass"]);
                
                // $itemId     = "11";
                // $fname      = "asd";
                // $cell       = "09472717863";
                // $serv       = "1";
                // $size       = "30";
                // $expdate    = "2018-09-30 9:45 PM";
                // $addet      = "hahaha";
                // $branch     = "4";
                $expdate = date('Y-m-d H:i:s', strtotime($expdate));
                $sql = "SELECT * FROM `task` WHERE id = '$itemId'";
                $result = $connect->query($sql);
                if($result->num_rows == 1){
                    $row = $result->fetch_assoc();
                    $row['expdate'] = new DateTime($row['expdate']);
                    $row['expdate'] = $row['expdate']->format('Y-m-d H:i:s');
                    if($row['name'] === $fname && $row['cell'] === $cell && $row['size'] === $size && $row['expdate'] === $expdate && $row['addet'] === $addet && $row['branch'] === $branch){
                        $response['success'] = false;
                        $response['messages'] = "No change detected.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        if(strtotime($expdate) >= strtotime('today UTC')){  
                            if($row['branch'] === $branch){
                                $sql = "UPDATE `task` SET `name` = '$fname', `cell` = '$cell', `size` = '$size', `addet` = '$addet', `expdate` = '$expdate' WHERE `task`.`id` = '$itemId'";
                                $connect->query($sql);
                                if($connect->affected_rows == 1){
                                    GVariable::$brheadId = $row['adname'];
                                    GVariable::$empId = $row['empname'];
                                    sendNudes($uPrev,"editnotchangebranch",$cell,$uId,GVariable::$brheadId,GVariable::$empId,$fname);
                                    exit();
                                } else {
                                    $response['success'] = false;
                                    $response['messages'] = "Update failed";
                                    echo json_encode($response);
                                    exit();
                                }
                            } else {
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
                                            $brheadId = GVariable::$brheadId;
                                            $empId = GVariable::$empId;
                                            $sql = "UPDATE `task` SET `name` = '$fname', `cell` = '$cell', `size` = '$size', `addet` = '$addet', `expdate` = '$expdate', `branch` = '$branch', `adname` = '$brheadId', `empname` = '$empId' WHERE `task`.`id` = '$itemId'";
                                            $result = $connect->query($sql);
                                            if($connect->affected_rows == 1){
                                                echo $brheadId."<br>";
                                                echo $empId;
                                                $response['success'] = true;
                                                $response['messages'] = "Update success.";
                                                echo json_encode($response);
                                                exit();
                                                // sendNudes($uPrev,"editchangebranch",$cell,$uId,GVariable::$brheadId,GVariable::$empId,$fname);
                                                // exit();
                                            } else {
                                                $response['success'] = false;
                                                $response['messages'] = "No change detected.";
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
                                    $brheadId = GVariable::$brheadId;
                                    $empId = GVariable::$empId;
                                    $sql = "UPDATE `task` SET `name` = '$fname', `cell` = '$cell', `size` = '$size', `addet` = '$addet', `expdate` = '$expdate', `branch` = '$branch', `adname` = '$brheadId', `empname` = '$empId' WHERE `task`.`id` = '$itemId'";
                                    $result = $connect->query($sql);
                                    if($connect->affected_rows == 1){
                                        echo $brheadId."<br>";
                                        echo $empId;
                                        $response['success'] = true;
                                        $response['messages'] = "Update success.";
                                        echo json_encode($response);
                                        exit();
                                        // sendNudes($uPrev,"editchangebranch",$cell,$uId,GVariable::$brheadId,GVariable::$empId,$fname);
                                        // exit();
                                    } else {
                                        $response['success'] = false;
                                        $response['messages'] = "No change detected.";
                                        echo json_encode($response);
                                        exit();
                                    }
            
                                    // echo array_search("'".$oldDate."'",$empAndNewMaxdate,true);
                                    // echo $vals;
                                    /*check kung pare pareho ung max dates
                                     kung pare pareho pumili ng random employee*/
                                    
                                    
            
                                    // echo "hindi na sya nag execute<br>";
                                    // echo $expdate."<br>";
                                    // echo strtotime($expdate)."<br>";
                                    // echo date('m/d/Y h:i A', strtotime($expdate))."<br>";
                                    // echo strtotime('today UTC');
                                } else {
                                    $response['success'] = false;
                                    $response['messages'] = "No records.";
                                    $connect->close();
                                    echo json_encode($response);
                                    exit();
                                } 
                            }
                        } else {
                            $response['success'] = false;
                            $response['messages'] = "Invalid expected date.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        }
                    }
                } else {
                    $response['success'] = false;
                    $response['messages'] = "Invalid item id.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                }
            } elseif($uPrev === "ADMIN") {
                $itemId     = $connect->real_escape_string($_POST["itemId"]);
                $fname      = $connect->real_escape_string($_POST["fname"]);
                $cell       = $connect->real_escape_string($_POST["cell"]);
                $size       = $connect->real_escape_string($_POST["size"]);
                $expdate    = $connect->real_escape_string($_POST["expdate"]);
                $addet      = $connect->real_escape_string($_POST["addet"]);

                $expdate = date('Y-m-d H:i:s', strtotime($expdate));
                $sql = "SELECT * FROM `task` WHERE id = '$itemId'";
                $result = $connect->query($sql);
                if($result->num_rows == 1){
                    $row = $result->fetch_assoc();
                    $row['expdate'] = new DateTime($row['expdate']);
                    $row['expdate'] = $row['expdate']->format('Y-m-d H:i:s');
                    if($row['name'] === $fname && $row['cell'] === $cell && $row['size'] === $size && $row['expdate'] === $expdate && $row['addet'] === $addet && $row['branch'] === $branch){
                        $response['success'] = false;
                        $response['messages'] = "No change detected.";
                        $connect->close();
                        echo json_encode($response);
                        exit();
                    } else {
                        if(strtotime($expdate) >= strtotime('today UTC')){
                            $sql = "UPDATE `task` SET `name` = '$fname', `cell` = '$cell', `size` = '$size', `addet` = '$addet', `expdate` = '$expdate' WHERE `task`.`id` = '$itemId'";
                            $connect->query($sql);
                            if($connect->affected_rows == 1){
                                GVariable::$brheadId = $row['adname'];
                                GVariable::$empId = $row['empname'];
                                // $response['success'] = true;
                                // $response['messages'] = "Update success.";
                                // echo json_encode($response);
                                // exit();
                                sendNudes($uPrev,"edit",$cell,$uId,GVariable::$brheadId,GVariable::$empId,$fname);
                                exit();
                            } else {
                                $response['success'] = false;
                                $response['messages'] = "No change detected.";
                                echo json_encode($response);
                                exit();
                            }
                        } else {
                            $response['success'] = false;
                            $response['messages'] = "Invalid expected date.";
                            $connect->close();
                            echo json_encode($response);
                            exit();
                        }
                    }
                } else {
                    $response['success'] = false;
                    $response['messages'] = "Invalid item id.";
                    $connect->close();
                    echo json_encode($response);
                    exit();
                }
            } else {
                $response['success'] = false;
                $response['messages'] = "Invalid user previlege please contact the developers.";
                echo json_encode($response);
                exit();
            }
        } 
        $prev = $_SESSION['prev'];
        $module = $_POST['module'];
        // $module  = "task";
        $uid = $_SESSION['uid'];
        if($prev === "MANAGER"){
            if($module === "task"){
                edittask($prev,$uid);
            } elseif($module === "useracc"){
                edituser();
            } else {
                $response['success'] = false;
                $response['messages'] = "Error";
                echo json_encode($response);
                exit();
            }
        } elseif($prev === "ADMIN"){
            if($module === "task"){
                edittask($prev,$uid);
            } else {
                $response['success'] = false;
                $response['messages'] = "Error";
                echo json_encode($response);
                exit();
            }
        } else {
            $response['success'] = false;
            $response['messages'] = "Error";
            echo json_encode($response);
            exit();
        }
    }
}
?>