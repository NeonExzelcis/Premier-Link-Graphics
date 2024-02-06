<?php
    require_once "core.php";
    if(!$_POST || !isset($_POST['data']) || !isset($_POST['module']) || !isset($_POST['id'])){
        echo "error";
        exit();
    } else {
        include_once "db.php";
        $id = $_POST['id'];
        $output;

        if($_POST['module'] === "userAccount"){
            $sql = "SELECT * FROM user WHERE id = '$id'";
            $result = $connect->query($sql);
            if($result->num_rows == 1){
                while($row = $result->fetch_array()) {
                    $row[7] = new DateTime($row[7]);
                    $row[7] = $row[7]->format('m/d/Y');
                    if($row[4] === "ADMIN"){
                        $row[4] = "1";
                    } elseif($row[4] === "EMP") {
                        $row[4] = "2";
                    }
                    $output = array(
                        "uname" => $row[1],
                        "pass" => $row[2],
                        "fname" => $row[3],
                        "prev" => $row[4],
                        "cell" => $row[5],
                        "br" => $row[6],
                        "dtcreate" => $row[7],
                        "pic" => $row[8]
                    );
                }
                $connect->close();
                echo json_encode($output);
            } else {
                echo "error";
                exit();
            }
        } elseif($_POST['module'] === "ogt"){
            $sql = "SELECT * FROM task WHERE id = '$id'";
            $result = $connect->query($sql);
            if($result->num_rows == 1){
                while($row = $result->fetch_array()) {
                    $row[7] = new DateTime($row[7]);
                    $row[7] = $row[7]->format('Y-m-d h:i A');
                    $row[12] = new DateTime($row[12]);
                    $row[12] = $row[12]->format('Y-m-d h:i A');
                    if($row[3] === "1"){
                        $row[3] = "Tarpaulin";
                    } elseif($row[3] === "2"){
                        $row[3] = "Sticker";
                    } elseif($row[3] === "3"){
                        $row[3] = "Mug Press";
                    } elseif($row[3] === "4"){
                        $row[3] = "Heat Press";
                    }
                    $output = array(
                        "id" => $row[0],
                        "name" => $row[1],
                        "cell" => $row[2],
                        "serv" => $row[3],
                        "size" => $row[4],
                        "stdate" => $row[12],
                        "expdate" => $row[7],
                        "tp" => $row[9],
                        "dp" => $row[8],
                        "branch" => $row[15],
                        "addet" => $row[6],
                        "attach" => $row[5],
                        "quan" => $row[19],
                        "nodesign" => $row[20]

                    );
                }
                $connect->close();
                echo json_encode($output);
            } else {
                echo "error";
                exit();
            }
        } elseif($_POST['module'] === "aft"){
            $sql = "SELECT * FROM task WHERE id = '$id'";
            $result = $connect->query($sql);
            if($result->num_rows == 1){
                while($row = $result->fetch_array()) {
                    $row[14] = new DateTime($row[14]);
                    $row[14] = $row[14]->format('m/d/Y');
                    $row[12] = new DateTime($row[12]);
                    $row[12] = $row[12]->format('m/d/Y');
                    if($row[15] === "1"){
                        $row[15] = "Main";
                    }elseif($row[15] === "2"){
                        $row[15] = "Branch 2";
                    }elseif($row[15] === "3"){
                        $row[15] = "Branch 3";
                    }elseif($row[15] === "4"){
                        $row[15] = "Branch 4";
                    }
                    if($row[3] === "1"){
                        $row[3] = "Tarpaulin";
                    } elseif($row[3] === "2"){
                        $row[3] = "Sticker";
                    } elseif($row[3] === "3"){
                        $row[3] = "Mug Press";
                    } elseif($row[3] === "4"){
                        $row[3] = "Heat Press";
                    }
                    $empid = $row[17];
                    $sqluser = "SELECT * FROM user WHERE id = '$empid'";
                    $resultuser = $connect->query($sqluser);
                    $rowuser = $resultuser->fetch_array();
                    $output = array(
                        "name" => $row[1],
                        "cell" => $row[2],
                        "serv" => $row[3],
                        "size" => $row[4],
                        "stdate" => $row[12],
                        "fdate" => $row[14],
                        "tp" => $row[9],
                        "dp" => $row[8],
                        "branch" => $row[15],
                        "empname" => $rowuser[3],
                        "addet" => $row[6],
                        "rem" => $row[10]
                    );
                }
                $connect->close();
                echo json_encode($output);
            } else {
                echo "error";
                exit();
            }
        } elseif($_POST['module'] === "pending"){
            $sql = "SELECT * FROM task WHERE id = '$id'";
            $result = $connect->query($sql);
            if($result->num_rows == 1){
                while($row = $result->fetch_array()) {
                    $row[14] = new DateTime($row[14]);
                    $row[14] = $row[14]->format('m/d/Y');
                    $row[12] = new DateTime($row[12]);
                    $row[12] = $row[12]->format('m/d/Y');
                    $row[7] = new DateTime($row[7]);
                    $row[7] = $row[7]->format('m/d/Y');
                    if($row[15] === "1"){
                        $row[15] = "Main";
                    }elseif($row[15] === "2"){
                        $row[15] = "Branch 2";
                    }elseif($row[15] === "3"){
                        $row[15] = "Branch 3";
                    }elseif($row[15] === "4"){
                        $row[15] = "Branch 4";
                    }
                    if($row[3] === "1"){
                        $row[3] = "Tarpaulin";
                    } elseif($row[3] === "2"){
                        $row[3] = "Sticker";
                    } elseif($row[3] === "3"){
                        $row[3] = "Mug Press";
                    } elseif($row[3] === "4"){
                        $row[3] = "Heat Press";
                    }
                    $empid = $row[17];
                    $sqluser = "SELECT * FROM user WHERE id = '$empid'";
                    $result = $connect->query($sqluser);
                    $rowuser = $result->fetch_array();
                    $output = array(
                        "itemId" => $row[0],
                        "name" => $row[1],
                        "cell" => $row[2],
                        "serv" => $row[3],
                        "size" => $row[4],
                        "stdate" => $row[12],
                        "fdate" => $row[14],
                        "expdate" => $row[7],
                        "tp" => $row[9],
                        "dp" => $row[8],
                        "branch" => $row[15],
                        "empname" => $rowuser[3],
                        "addet" => $row[6],
                        "rem" => $row[10]
                    );
                }
                $connect->close();
                echo json_encode($output);
            } else {
                echo "error";
                exit();
            }
        } elseif($_POST['module'] === "searchExpdate"){
            $response['data'] = array('success' => true, 'messege' => array());
            // $expdate = date('Y-m-d H:i:s', strtotime($expdate));
            $empsArray = array('data' => array());  
            $branch = $connect->real_escape_string($_POST['id']);                   
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
                        $response['success'] = true;
                        $response['messages'] = date("Y-m-d H:i");
                        $connect->close();
                        echo json_encode($response);
                        exit();
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
                $response['success'] = true;
                $response['messages'] = date("Y-m-d H:i",strtotime($rawArray[0]['maxdate']));
                $connect->close();
                echo json_encode($response);
                exit();
            } else {
                $response['success'] = false;
                $response['messages'] = "No employee registered to this branch.";
                $connect->close();
                echo json_encode($response);
                exit();
            }
        } else {
            echo "error";
            exit();
        }
    }
?>