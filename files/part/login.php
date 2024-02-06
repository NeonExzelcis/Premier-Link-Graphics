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
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 login-container-centered alert-con-height">
            <div class="msg-alert">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-5 col-sm-6 col-9 login-container-centered">
            <div class="jumbotron login-centered bg-jumbo jumbo-login">
              <div class="row">
                <div class="col-lg-12 text-center">
                    <img src="img/logo.png" alt="logo" class="img-responsive" width="100" id="login-logo">
                    <h3 class="text-center" id="tryfont">Premier Link Graphics</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-10 login-container-centered">
                  <form method="POST" class="form" id="login_form">
                    <div class="form-group">
                      <label for="username">Username:</label>
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text"><span class="fa fa-user"></span></div>
                        </div>
                        <input class="form-control form-control-sm" name="username" autocomplete="off" type="text" id="username" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password">Password:</label>
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text"><span class="fa fa-key"></span></div>
                        </div>
                        <input class="form-control form-control-sm" name="password" autocomplete="off" type="password" id="password">
                      </div>
                    </div>
                    <input type="hidden" name="login" value="1">
                    <button class="btn btn-primary" type="submit" id="login_submit"><span class="spinner"></span> Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div>
  <script src="plugins/datatables/datatables.min.js"></script>
	<script src="plugins/datetimepicker/js/moment-with-locale.min.js"></script>
	<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="plugins/fa/fa/js/all.js"></script>
	<script src="plugins/file-input/scripts/fileinput.min.js"></script>
	<script src="plugins/file-input/content/themes/fas/theme.min.js"></script>
	<script src="plugins/datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
	<script src="js/main.js"></script>
  <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/v/bs4-4.1.1/jq-3.3.1/jszip-2.5.0/dt-1.10.18/af-2.3.0/b-1.5.2/b-colvis-1.5.2/b-flash-1.5.2/b-html5-1.5.2/b-print-1.5.2/cr-1.5.0/fc-3.2.5/fh-3.1.4/kt-2.4.0/r-2.2.2/rg-1.0.3/rr-1.2.4/sc-1.5.0/sl-1.2.6/datatables.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->
</body>
</html>