
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
	<link rel="manifest" href="img/site.webmanifest">
	<link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5">
	<title>Primier Link Graphics</title>
	<!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4-4.1.1/jq-3.3.1/jszip-2.5.0/dt-1.10.18/af-2.3.0/b-1.5.2/b-colvis-1.5.2/b-flash-1.5.2/b-html5-1.5.2/b-print-1.5.2/cr-1.5.0/fc-3.2.5/fh-3.1.4/kt-2.4.0/r-2.2.2/rg-1.0.3/rr-1.2.4/sc-1.5.0/sl-1.2.6/datatables.min.css"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> -->
    <link rel="stylesheet" type="text/css" media="screen" href="plugins/datatables/datatables.min.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="plugins/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="plugins/fa/fa/css/all.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="plugins/file-input/content/css/fileinput.min.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="plugins/file-input/content/css/fileinput-rtl.min.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="plugins/datetimepicker/css/bootstrap-datetimepicker.min.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    
</head>
<body>
	<div class="bg_img">
	<div class="bg_id">
	<?php
		require_once "part/modals.php";
	?>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-12">
				<nav class="navbar fixed-top navbar-expand-md navbar-dark">
					<a class="navbar-brand" href="#"><img src="img/logo.png" width="40" height="25" alt="logo"></a>
					<button class="navbar-toggler hidden-lg-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
				
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<!-- <li class="nav-item active">
								<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
							</li> -->
							<?php
								$prev = $_SESSION['prev'];
								if($prev === "MANAGER"){
									$prev = strtolower($prev);
								} else {
									$prev = "normie";
								}
								if($_SESSION['prev'] === "MANAGER"){
							?>
							<li class="nav-item">
								<a class="nav-link" href="#" id="manager_add_newTask"><i class="fa fa-plus-circle fa-lg"></i> Add new task</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="manOnGoingT"><i class="fa fa-people-carry fa-lg"></i> On going tasks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="manPendingT"><i class="fa fa-spinner fa-lg"></i> For Approval Tasks</a>
							</li>
							<li class="nav-item">
							<a class="nav-link" href="#" id="manAllFinishT"><i class="fa fa-calendar-check fa-lg"></i> Finish tasks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="manU"><i class="fa fa-users fa-lg"></i> User Accounts</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="auditT"><i class="fa fa-shoe-prints fa-lg"></i> Audit Trail</a>
							</li>
							<?php		
								} elseif($_SESSION['prev'] === "ADMIN") {
							?>
							<li class="nav-item">
								<a class="nav-link" href="#" id="admin_add_newTask"><i class="fa fa-plus-circle fa-lg"></i> Add new task</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="adminOnGoingT"><i class="fa fa-people-carry fa-lg"></i> On going tasks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="adminPendingT"><i class="fa fa-spinner fa-lg"></i> For Approval Tasks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="adminAllFinishT"><i class="fa fa-calendar-check fa-lg"></i> Finish tasks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="adminEmp"><i class="fa fa-address-book fa-lg"></i> Employees</a>
							</li>
							<?php
								} elseif($_SESSION['prev'] === "EMP") {
							?>
							<li class="nav-item">
								<a class="nav-link" href="#" id="empOnGoingT"><i class="fa fa-people-carry fa-lg"></i> On going tasks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="empFinishT"><i class="fa fa-calendar-check fa-lg"></i> Finish tasks</a>
							</li>
							<!-- <li class="nav-item">
								<a class="nav-link" href="#" id="empCal"><i class="fa fa-calendar-alt fa-lg"></i> Calendar</a>
							</li> -->
							<?php
								} else {
									echo "Invalid previlege.";
								}
							?>
						</ul>
						<ul class="navbar-nav ml-auto">
							<input type="hidden" value="<?=$_SESSION['branch']?>" id="sessionBranch">
							<li class="nav-item">
								<a class="nav-link user-modal" href="#" id="<?='usermodal_'.$prev.'_'.$_SESSION['uid']?>">
									Hello!, <?=$_SESSION['fname']?> 
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="main-container">