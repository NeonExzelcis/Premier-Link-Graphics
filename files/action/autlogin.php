<?php
	session_start();
	ob_start();
	if (array_key_exists('userId', $_SESSION)) {
		header('location: ../../');
		exit();
	}
	else
	{
		if(!isset($_POST["login"])){
			header('location: ../../');
			exit();
		}
		else
		{
			include_once 'db.php';
			$username = $connect->real_escape_string($_POST["username"]);
			$password = $connect->real_escape_string($_POST["password"]);
			if(empty($username) || empty($password)){
				if($password == "" && $username == "")
				{
					echo "Username and Password is required";
				}
				else if($username == "" && $password != "") {
					echo "Username is required";
				} 
				else if($username != "" && $password == "") {
					echo "Password is required";
				}
			}
			else
			{
				$sql = "SELECT * FROM user WHERE uname = '$username'";
				$result = $connect->query($sql);
				if($result->num_rows == 1)
				{
					$password = md5($password);
					$sql = "SELECT * FROM user WHERE uname = '$username' AND pass = '$password'";
					$result = $connect->query($sql);
					if($result->num_rows == 1){
						$row = $result->fetch_assoc();
						$_SESSION['uid'] = $row['id'];
						$_SESSION['fname'] = $row['fname'];
						$_SESSION['prev'] = $row['prev'];
						$_SESSION['credate'] = $row['credate'];
						$_SESSION['branch'] = $row['branch_id'];
						echo "login";
						exit();
					}
					else
					{
						echo "Incorrect username and password combination.";
					}
				}
				else
				{
					echo "Username does not exist.";
				}
			}
		}
	}
?>