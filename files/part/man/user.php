<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="jumbotron text-center">
                <div class="row">
                    <div class="col-lg-12 text-left">
                        <div class="form-group">
                            <div class="main-title">
                                <h1 class="text-left"><i class="fas fa-users fa-1x"></i> User Accounts</h1>
                            </div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary text-left" id="manager_add_userAccount"><i class="fa fa-user-plus fa-lg"></i> Add New Account</button>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <?php
                            include_once "../table.php";
                        ?>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</div>