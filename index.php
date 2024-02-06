<?php
	session_start();
	require_once 'files/action/db.php';
	ob_start();
	if(!array_key_exists('uid', $_SESSION) || !isset($_SESSION['uid']) || empty($_SESSION['uid'])){
		include_once "files/part/login.php";
	} else {
		include_once "files/header.php";
?>
					<!-- <div class="jumbotron">
						<div class="row">
							<form action="#" id="tryform" enctype="multipart/form-data">
								<div class="form-group col-lg-12">
									<label class="control-label" for="haha">Picture</label>
									<input id="haha" name="hahafile[]" type="file" multiple>
									<div id="haha-error"></div>
								</div>
								<input type="submit">
							</form>
						</div>
					</div> -->
					
					
<?php
		include_once "files/footer.php";
	}
	
?>
				