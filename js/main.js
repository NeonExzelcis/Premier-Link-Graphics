$(document).ready(function($){
    
    var modalNotifMess;
    var modalModeClass;
    var modalSize = $("#modal>.modal-dialog");
    var modalTitle = $("#modal>.modal-dialog>.modal-content>.modal-header>#modal_title");
    var modalBody = $("#modal>.modal-dialog>.modal-content>.modal-body");

    var modalContent = $("#modal>.modal-dialog>.modal-content");
    var modalHeader = $("#modal>.modal-dialog>.modal-content>.modal-header");
    var alertContainer = $("#alerthome>.row>.centerdiv>#alert");
    
    function changeModalMode(sourceId,modalMode) {
        switch(modalMode) {
            case "primary":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            case "secondary":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            case "dark":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            case "success":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            case "info":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            case "warning":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            case "danger":
                modalContent.addClass("border-" + modalMode);
                modalHeader.addClass("bg-" + modalMode);
                changeModalContent(sourceId,modalMode);
                break;
            default:
                alert("Invalid modal mode - " + modalMode);
                modalModeClass = modalMode;
                removeClassModal(modalModeClass);
                return false;
        }
    }
    function removeClassModal(modalModeClass) {
        modalContent.removeClass("border-" + modalModeClass);
        modalHeader.removeClass("bg-" + modalModeClass);
        modalTitle.empty().html('');
        modalBody.empty().html('');
    }
    function changeModalContent(rawId,modalMode) {
        var idArray = new Array;
        idArray = rawId.split("_");
        if(idArray[0] === "manager"){
            if(idArray[1] === "add"){
                if(idArray[2] === "userAccount"){
                    modalTitle.empty().html("").append('<i class="fa fa-plus-circle fa-lg"></i> Add new account');
                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><form action="#" id="adduserform" enctype="multipart/form-data"><div class="row"><div class="form-group col-lg-6"><label for="uname">Username</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm username" maxlength="20" name="uname" id="uname" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="pass">Password</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-lock"></span></div></div><input class="form-control form-control-sm password" maxlength="20" name="pass" id="pass" autocomplete="off" type="password" required></div></div></div><div class="row"><div class="form-group col-lg-6"><label for="fname">Fullname</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-tie"></span></div></div><input class="form-control form-control-sm person-name" maxlength="50"  name="fname" id="fname" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="prev">Previlege</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-friends"></span></div></div><select name="prev" id="prev" class="form-control form-control-sm" autocomplete="off" required><option value="1">ADMIN</option><option value="2">EMPLOYEE</option></select></div></div></div><div class="row"><div class="form-group col-lg-6"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm cell-num" maxlength="11" name="cell" id="cell" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="br">Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked"></span></div></div><select class="form-control form-control-sm" name="br" id="br" autocomplete="off" type="text" required><option value="1">Main</option><option value="2">Branch 2</option><option value="3">Branch 3</option><option value="4">Branch 4</option></select></div></div></div><div class="row"><div class="form-group col-lg-12 no-zoom text-center mx-auto"><div class="text-left"><label class="control-label" for="pic">Picture</label></div><input id="pic" name="pic" type="file" required><div id="pic-error"></div></div></div><div class="row"><div class="col-lg-2"><button class="btn btn-primary py-2 px-5" type="submit"><i class="fa fa-save fa-lg"></i> Save</button></div></div></form></div></div></div>');
                    $("#modal .modal-dialog .modal-footer").remove();
                    $("#pic").fileinput({
                        theme: "fas",
                        maxFileSize: 2000,
                        overwriteInitial: true,
                        showCaption: false,
                        showClose: false,
                        dropZoneEnabled: false,
                        showPreview: true,
                        showUpload: false,
                        elErrorContainer: '#pic-error',
                        msgErrorClass: 'alert alert-block alert-danger',
                        allowedFileExtensions: ["jpg","png","jpeg","gif"],
                        browseClass: "btn btn-secondary btn-sm",
                        browseLabel: "",
                        browseIcon: '<i class="fa fa-folder-open fa-lg"></i>',
                        removeLabel: "",
                        removeClass: 'btn btn-danger btn-sm',
                        removeIcon: '<i class="fa fa-trash fa-lg"></i>',
                        defaultPreviewContent: '<img src="uploads/default_avatar_male.jpg" alt="Your Avatar">',
                    });
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                } else if(idArray[2] === "newTask"){
                    modalTitle.empty().html("").append('<i class="fa fa-plus-circle fa-lg"></i> Add new task');
                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><form action="#" id="manaddnewtask"><div class="row"><div class="form-group col-lg-6"> <label for="fname">Fullname</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div> <input class="form-control form-control-sm person-name" name="fname" id="fname" maxlength="100" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"> <label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div> <input class="form-control form-control-sm cell-num" name="cell" id="cell" autocomplete="off" maxlength="11" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6 mx-auto"> <label for="serv">Type of Service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div> <select class="form-control form-control-sm serv" name="serv" id="serv" autocomplete="off" maxlength="100" required><option value="1">Tarpaulin</option><option value="2">Vinyl Sticker</option><option value="3">Mug Press</option> </select></div></div><div class="form-group col-lg-6" id="contypeofsize"> <label for="typeofsize">Type of Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div> <select class="form-control form-control-sm serv" name="typeofsize" id="typeofsize" autocomplete="off" maxlength="100" required><option value="1">Standard Size</option><option value="2">Custom Size</option> </select></div></div></div><div class="row" id="standardSize"><div class="form-group col-lg-3"> <label for="width1">Width</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-horizontal"></span></div></div> <select class="form-control form-control-sm serv" name="width1" id="width1" autocomplete="off" maxlength="100" required><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select></div></div><div class="form-group col-lg-3"> <label for="height1">Height</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-vertical"></span></div></div> <select class="form-control form-control-sm serv" name="height1" id="height1" autocomplete="off" maxlength="100" required><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select></div></div><div class="form-group col-lg-3"> <label for="quan1">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="3" id="quan1" name="quan1" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign1" name="nodesign1"></div></div> <label for="nodesign1">&nbsp;Design</label></div></div></div><div class="row" id="seamingSize"><div class="form-group col-lg-3"> <label for="width2">Width</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-horizontal"></span></div></div> <input type="text" maxlength="2" class="form-control form-control-sm size" id="width2" name="width2" required></div></div><div class="form-group col-lg-3"> <label for="height2">Height</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-vertical"></span></div></div> <input type="text" maxlength="2" class="form-control form-control-sm size" id="height2" name="height2" required></div></div><div class="form-group col-lg-3"> <label for="quan2">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="2" id="quan2" name="quan2" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign2" name="nodesign2"></div></div> <label for="nodesign2">&nbsp;Design</label></div></div></div><div class="row" id="mugAndHeat"><div class="form-group col-lg-3"> <label for="quan3">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="3" id="quan3" name="quan3" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign3" name="nodesign3"></div></div> <label for="nodesign3">&nbsp;Design</label></div></div></div><div class="row"><div class="form-group col-lg-6"> <label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div> <input class="form-control form-control-sm money" name="tp" id="tp" autocomplete="off" maxlength="6" type="text" required readonly></div></div><div class="form-group col-lg-6"> <label for="dp">Down Payment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div> <input class="form-control form-control-sm money" name="dp" id="dp" autocomplete="off" maxlength="6" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6"> <label for="ass">Assign to Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked-alt"></span></div></div> <select class="form-control form-control-sm" name="ass" id="ass" maxlength="20" autocomplete="off" required><option value="1">Main</option><option value="2">Branch 2</option><option value="3">Branch 3</option><option value="4">Branch 4</option> </select></div></div><div class="form-group col-lg-6"> <label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div> <input class="form-control form-control-sm" name="expdate" id="expdate" autocomplete="off" type="text" maxlength="20" required></div></div></div><div class="row"><div class="form-group col-lg-12 no-zoom text-center mx-auto"><div class="text-left"> <label class="control-label" for="attach">Attachment</label></div> <input id="attach" name="attach" type="file" required><div id="attach-error"></div></div></div><div class="row"><div class="form-group col-lg-12"> <label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" name="addet" id="addet" autocomplete="off" type="text"></textarea></div></div></div><div class="row"><div class="col-lg-2"> <button class="btn btn-primary py-2 px-5" type="submit"><i class="fa fa-save fa-lg spinner"></i> Save</button></div></div></form></div></div></div>');
                    

                    $("#standardSize").show();
                    $("#seamingSize").hide();
                    $("#mugAndHeat").hide();
                    $("#width2").attr({"disabled":"disabled","required":false});
                    $("#height2").attr({"disabled":"disabled","required":false});
                    $("#quan2").attr({"disabled":"disabled","required":false});
                    $("#nodesign2").attr({"disabled":"disabled"});
                    
                    $("#quan3").attr({"disabled":"disabled","required":false});
                    $("#nodesign3").attr({"disabled":"disabled"});
                    theWidth = $("#width1").val();
                    theHeight = $("#height1").val();
                    theQuan = 0;
                    theNoDesign = 0;  
                    $('#expdate').datetimepicker({
                        daysOfWeekDisabled: [0],
                        useCurrent: false,
                        disabledTimeIntervals: [[moment({ h: 0 }), moment({ h: 8 })], [moment({ h: 21 }), moment({ h: 24 })]]
                    });
                    var branchCode = $("#ass").val();
                    searchExpdate(branchCode);
                    $("#attach").fileinput({
                        theme: "fas",
                        maxFileSize: 100000,
                        overwriteInitial: true,
                        showClose: false,
                        autoReplace: true,
                        showPreview: false,
                        showUpload: false,
                        elErrorContainer: '#attach-error',
                        msgErrorClass: 'alert alert-block alert-danger',
                        allowedFileExtensions: ["rar","zip","gzip","gz","7z"],
                        browseClass: "btn btn-secondary btn-sm",
                        browseLabel: "Browse",
                        browseIcon: '<i class="fa fa-folder-open fa-lg"></i>',
                        removeLabel: "Remove",
                        removeClass: 'btn btn-danger btn-sm',
                        removeIcon: '<i class="fa fa-trash fa-lg"></i>'
                    });
                    $("#modal .modal-dialog .modal-footer").remove();
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                }
            } else if(idArray[1] === "edit") {
                if(idArray[2] === "userAccount"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "userAccount", "id": idArray[3]},
                        success: function(res){
                            if(res === "error"){
                                alert("Error occured.");
                                return false;
                            } else {
                                if(res["prev"] === "MANAGER"){
                                    modalTitle.empty().html("").append('<i class="fa fa-user-secret fa-lg"></i> Please contact the developers, ' + res["fname"]);
                                    modalBody.empty().html("").append('<div class="container"><div class="row text-center"><div class="col-lg-12"><h1>Please reach us!</h1><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><i class="fa fa-envelope"></i> Mail us to: </h3><hr><p class="font-italic font-weight-bold">michaelsiquihod@gmail.com</p></div></div></div></div>');
                                    $("#modal .modal-dialog .modal-footer").remove();
                                    modalModeClass = modalMode;
                                    $("#modal").modal({
                                        backdrop: 'static',
                                        keyboard: false
                                    },"show");
                                } else {
                                    modalTitle.empty().html("").append('<i class="fa fa-user-edit fa-lg"></i> Edit account for '+ res["fname"]);
                                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><form action="#" id="edituserform"><input type="hidden" name="id"><div class="row"><div class="form-group col-lg-6"><label for="uname">Username</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm" name="uname" id="uname" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="pass">Password</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-lock"></span></div></div><input class="form-control form-control-sm" name="pass" id="pass" autocomplete="off" type="password" required></div></div></div><div class="row"><div class="form-group col-lg-6"><label for="fname">Fullname</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-tie"></span></div></div><input class="form-control form-control-sm letter" name="fname" id="fname" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="prev">Previlege</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-friends"></span></div></div><select name="prev" id="prev" class="form-control form-control-sm" autocomplete="off" required><option value="1">ADMIN</option><option value="2">EMPLOYEE</option></select></div></div></div><div class="row"><div class="form-group col-lg-6"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm number" name="cell" id="cell" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="br">Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked"></span></div></div><select class="form-control form-control-sm" name="br" id="br" autocomplete="off" type="text" required><option value="1">Branch 1</option><option value="2">Branch 2</option><option value="3">Branch 3</option><option value="4">Branch 4</option></select></div></div></div><div class="row"><div class="col-lg-2"><button class="btn btn-success py-2 px-5" type="submit" id="submit"><i class="fa fa-save fa-lg"></i> Update</button><button class="btn btn-secondary py-2 px-5" type="button" role="button" id="editbtn"><i class="fa fa-edit fa-lg"></i> Edit</button></div></div></form></div></div></div>');
                                    $("input[name='id']").val(idArray[3]);
                                    $("input[name='uname']").val(res["uname"]);
                                    $("input[name='pass']").val(res["pass"]);
                                    $("input[name='fname']").val(res["fname"]);

                                    $("select[name='prev']").val(res["prev"]);
                                    $("input[name='cell']").val(res["cell"]);
                                    $("select[name='br']").val(res["br"]);
                                    $("#edituserform :input").attr("disabled","disabled");
                                    $("#submit").hide();
                                    $("#editbtn").removeAttr('disabled');

                                    $("#modal .modal-dialog .modal-footer").remove();
                                    modalModeClass = modalMode;
                                    $("#modal").modal({
                                        backdrop: 'static',
                                        keyboard: false
                                    },"show");
                                }
                            }
                        }
                    });
                    
                } else if(idArray[2] === "ogt"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "ogt", "id": idArray[3]},
                        success: function(res){
                            if(res === "error"){
                                alert("Error occured.");
                                return false;
                            } else {
                                modalTitle.empty().html("").append('<i class="fa fa-edit fa-lg"></i> Edit on going task for ' + res["name"]);
                                modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><form action="#" id="manedittask"><div class="row"><div class="form-group col-lg-6"> <label for="fname">Fullname</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div> <input class="form-control form-control-sm person-name" name="fname" id="fname" maxlength="100" autocomplete="off" type="text" required ></div></div><div class="form-group col-lg-6"> <label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div> <input class="form-control form-control-sm cell-num" name="cell" id="cell" autocomplete="off" maxlength="11" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6 mx-auto"> <label for="serv">Type of Service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div> <input class="form-control form-control-sm serv" type="text" name="serv" id="serv" autocomplete="off" maxlength="100" required ></div></div><div class="form-group col-lg-6" id="contypeofsize"> <label for="typeofsize">Type of Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div> <input class="form-control form-control-sm serv" type="text" name="typeofsize" id="typeofsize" autocomplete="off" maxlength="100" required ></div></div></div><div class="row" id="tarpvenSize"><div class="form-group col-lg-3"> <label for="width">Width</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-horizontal"></span></div></div> <input type="text" maxlength="2" class="form-control form-control-sm size" id="width" name="width" required ></div></div><div class="form-group col-lg-3"> <label for="height">Height</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-vertical"></span></div></div> <input type="text" maxlength="2" class="form-control form-control-sm size" id="height" name="height" required ></div></div><div class="form-group col-lg-3"> <label for="quan">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="2" id="quan" name="quan" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign" name="nodesign" ></div></div> <label for="nodesign">&nbsp;Design</label></div></div></div><div class="row" id="mugAndHeat"><div class="form-group col-lg-3"> <label for="quan1">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="3" id="quan1" name="quan1" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign1" name="nodesign1" ></div></div> <label for="nodesign1">&nbsp;Design</label></div></div></div><div class="row"><div class="form-group col-lg-6"> <label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div> <input class="form-control form-control-sm money" name="tp" id="tp" autocomplete="off" maxlength="6" type="text" required ></div></div><div class="form-group col-lg-6"> <label for="dp">Down Payment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div> <input class="form-control form-control-sm money" name="dp" id="dp" autocomplete="off" maxlength="6" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6"> <label for="ass">Assign to Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked-alt"></span></div></div> <select class="form-control form-control-sm" name="ass" id="ass" maxlength="20" autocomplete="off" required><option value="1">Main</option><option value="2">Branch 2</option><option value="3">Branch 3</option><option value="4">Branch 4</option> </select></div></div><div class="form-group col-lg-6"> <label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div> <input class="form-control form-control-sm" name="expdate" id="expdate" autocomplete="off" type="text" maxlength="20" required></div></div></div><div class="row"><div class="form-group col-lg-6 no-zoom text-center mx-auto"> <label for="expdate">Attachment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-archive"></span></div></div> <input class="form-control form-control-sm" name="attach" id="attach" autocomplete="off" type="text" required ></div></div></div><div class="row"><div class="form-group col-lg-12"> <label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" name="addet" id="addet" autocomplete="off" type="text"></textarea></div></div></div><div class="row"><div class="col-lg-2"> <button class="btn btn-success py-2 px-5" type="submit" id="submit"><i class="fa fa-save fa-lg"></i> Update</button> <button class="btn btn-secondary py-2 px-5" type="button" role="button" id="editbtn"><i class="fa fa-edit fa-lg"></i> Edit</button></div></div></form></div></div></div>');
                                if(res["size"] === "N/A"){
                                    $("#contypeofsize").hide();
                                    $("#tarpvenSize").hide();
                                    $("input[name='quan1']").val(res["quan"]);
                                    if(res["nodesign"] == 0){
                                        $("input[name='nodesign1']").attr({"checked":false});
                                    } else {
                                        $("input[name='nodesign1']").attr({"checked":true});
                                    }
                                } else {
                                    var sizeArray = new Array;
                                    sizeArray = res["size"].split("x");
                                    $("#mugAndHeat").hide();
                                    if(sizeArray[0] > 10 || sizeArray[1] > 10){
                                        $("input[name='typeofsize']").val("Custom Size");
                                    } else {
                                        $("input[name='typeofsize']").val("Standard Size");
                                    }
                                    $("input[name='width']").val(sizeArray[0]);
                                    $("input[name='height']").val(sizeArray[1]);
                                    $("input[name='quan']").val(res["quan"]);
                                    if(res["nodesign"] == 0){
                                        $("input[name='nodesign']").attr({"checked":false});
                                    } else {
                                        $("input[name='nodesign']").attr({"checked":true});
                                    }
                                }
                                $("input[name='itemId']").val(res["id"]);
                                $("input[name='fname']").val(res["name"]);
                                $("input[name='cell']").val(res["cell"]);
                                $("input[name='serv']").val(res["serv"]);
                                $("input[name='tp']").val(res["tp"]).trigger("change");
                                $("input[name='dp']").val(res["dp"]).trigger("change");
                                $("select[name='ass']").val(res["branch"]);
                                theWidth = $("#width").val();
                                theHeight = $("#height").val();
                                theQuan = 0;
                                theNoDesign = 0;
                                $("input[name='expdate']").datetimepicker({
                                    daysOfWeekDisabled: [0],
                                    useCurrent: false,
                                    disabledTimeIntervals: [[moment({ h: 0 }), moment({ h: 8 })], [moment({ h: 21 }), moment({ h: 24 })]]
                                }).val(moment(res["expdate"]).format('L LT'));
                                $("input[name='attach']").val(res["attach"]);
                                $("textarea[name='addet']").val(res["addet"]);
                                $("#manedittask :input").attr("disabled","disabled");
                                $("#submit").hide();
                                $("#editbtn").removeAttr('disabled');
                                $("#modal .modal-dialog .modal-footer").remove();
                                modalModeClass = modalMode;
                                $("#modal").modal({
                                    backdrop: 'static',
                                    keyboard: false
                                },"show");
                            }  
                        }
                    });   
                } 
            } else if(idArray[1] === "fv") {
                if(idArray[2] === "aft"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "aft", "id": idArray[3]},
                        success: function(res){
                            modalTitle.empty().html("").append('<i class="fa fa-eye fa-lg"></i> Full details of ' + res["name"]);
                            modalBody.empty().html("").append('<div class="container"><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="fname">Full Name</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm" id="fname" name="fname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm" id="cell" name="cell" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="serv">Type of service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div><input class="form-control form-control-sm" id="serv" name="serv" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="size">Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div><input class="form-control form-control-sm" id="size" name="size" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="stdate">Start Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-plus"></span></div></div><input class="form-control form-control-sm" id="stdate" name="stdate" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="fdate">Finish Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div><input class="form-control form-control-sm" id="fdate" name="fdate" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div><input class="form-control form-control-sm" id="tp" name="tp" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="dp">Downpayment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div><input class="form-control form-control-sm" id="dp" name="dp" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-5"><div class="form-group"><label for="empname">Assigned To</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-circle"></span></div></div><input class="form-control form-control-sm" id="empname" name="empname" type="text" readonly></div></div></div><div class="col-lg-4"><div class="form-group"><label for="branch">Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked"></span></div></div><input class="form-control form-control-sm" id="branch" name="branch" type="text" readonly></div></div></div><div class="col-lg-3"><div class="form-group"><label for="tpay">Total Payment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-dollar-sign"></span></div></div><input class="form-control form-control-sm" id="tpay" name="tpay" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" id="addet" type="text" name="addet" readonly></textarea></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="rem">Remarks</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-comment-dots"></span></div></div><textarea class="form-control form-control-sm" id="rem" name="rem" type="text" readonly></textarea></div></div></div></div></div>');
                            $("input[name='fname']").val(res["name"]);
                            $("input[name='cell']").val(res["cell"]);
                            $("input[name='serv']").val(res["serv"]);
                            $("input[name='size']").val(res["size"]);
                            $("input[name='stdate']").val(res["stdate"]);
                            $("input[name='fdate']").val(res["fdate"]);
                            $("input[name='tp']").val(res["tp"]);
                            $("input[name='dp']").val(res["dp"]);
                            $("input[name='empname']").val(res["empname"]);
                            $("input[name='branch']").val(res["branch"]);
                            $("input[name='tpay']").val(res["tp"]);
                            $("textarea[name='addet']").val(res["addet"]);
                            $("textarea[name='rem']").val(res["rem"]);
                            $("#modal .modal-dialog .modal-footer").remove();
                            modalModeClass = modalMode;
                            $("#modal").modal({
                                backdrop: 'static',
                                keyboard: false
                            },"show");
                        }
                    });
                } 
            } else if(idArray[1] === "approve") {
                if (idArray[2] === "pen"){
                    var fullname = $("#"+rawId).closest("tr").
                        find(".fullname").
                        text();
                    modalTitle.empty().html("").append('<i class="fa fa-exclamation-triangle fa-lg"></i> Approve task');
                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row pb-5"><div class="col-lg-11 mx-auto"><div class="text-center"><h3>Are you sure you want to approve this task for:</h3><hr><h1>"'+fullname+'"</h1></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button data-toggle="tooltip" title="This task will goes to FINISH TASKS if you approve." id="'+idArray[3]+'" class="btn btn-success btn-lg mx-auto approveId"><i class="fa fa-check fa-lg spinner"></i> Approve</button></div></div></div></div></div>');
                    $("#modal .modal-dialog .modal-footer").remove();
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                }
            } else if(idArray[1] === "modify") {
                if(idArray[2] === "pen"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "pending", "id": idArray[3]},
                        success: function(res){
                            modalTitle.empty().html("").append('<i class="fa fa-eye fa-lg"></i> Full details of ' + res["name"]);
                            modalBody.empty().html("").append('<div class="container"><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="fname">Full Name</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm" id="fname" name="fname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm" id="cell" name="cell" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="serv">Type of service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div><input class="form-control form-control-sm" id="serv" name="serv" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="size">Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div><input class="form-control form-control-sm" id="size" name="size" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="stdate">Start Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-plus"></span></div></div><input class="form-control form-control-sm" id="stdate" name="stdate" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div><input class="form-control form-control-sm" id="expdate" name="expdate" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div><input class="form-control form-control-sm" id="tp" name="tp" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="dp">Downpayment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div><input class="form-control form-control-sm" id="dp" name="dp" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="empname">Assigned To</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-circle"></span></div></div><input class="form-control form-control-sm" id="empname" name="empname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="branch">Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked"></span></div></div><input class="form-control form-control-sm" id="branch" name="branch" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" id="addet" type="text" name="addet" readonly></textarea></div></div></div></div><form action="#" id="manmodify"><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="rem">Remarks</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-comment-dots"></span></div></div><input type="hidden" name="id"><textarea class="form-control form-control-sm" id="rem" name="rem" type="text"></textarea></div></div></div></div><div class="row"><div class="col-lg-2"><button class="btn btn-success py-2 px-5" type="submit" id="submit"><i class="fa fa-save fa-lg spinner"></i> Update</button><button class="btn btn-secondary py-2 px-5" type="button" role="button" id="editbtn"><i class="fa fa-edit fa-lg"></i> Edit</button></div></div></form></div>');
                            $("input[name='id']").val(res["itemId"]);
                            $("input[name='fname']").val(res["name"]);
                            $("input[name='cell']").val(res["cell"]);
                            $("input[name='serv']").val(res["serv"]);
                            $("input[name='size']").val(res["size"]);
                            $("input[name='stdate']").val(res["stdate"]);
                            $("input[name='expdate']").val(res["expdate"]);
                            $("input[name='tp']").val(res["tp"]);
                            $("input[name='dp']").val(res["dp"]);
                            $("input[name='empname']").val(res["empname"]);
                            $("input[name='branch']").val(res["branch"]);
                            $("textarea[name='addet']").val(res["addet"]);
                            $("textarea[name='rem']").val(res["rem"]);
                            $("#manmodify :input").attr('disabled', 'disabled');
                            $("#submit").hide();
                            $("#editbtn").removeAttr('disabled');
                            $("#modal .modal-dialog .modal-footer").remove();
                            modalModeClass = modalMode;
                            $("#modal").modal({
                                backdrop: 'static',
                                keyboard: false
                            },"show");
                        }
                    });
                }
            } else if(idArray[1] === "approveId") {
                if(idArray[2] === "pen"){
                    if(idArray[3] === "yes"){
                        modalTitle.empty().html("").append('<i class="fa fa-check fa-lg"></i> Success');
                        modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center text-success"><h3><i class="fa fa-check-circle fa-7x"></i></h3><h1>Success!</h1></div></div></div><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center"><p>'+modalNotifMess+'</p></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Close</button></div></div></div></div></div>');
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                    } else if(idArray[3] === "no"){
                        modalTitle.empty().html("").append('<i class="fa fa-times fa-lg"></i> Failed');
                        modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center text-danger"><h3><i class="fa fa-times-circle fa-7x"></i></h3><h1>Failed</h1></div></div></div><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center"><p>'+modalNotifMess+'</p></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Close</button></div></div></div></div></div>');
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                    }
                }
            } else {
                alert("invalid mode");
                modalModeClass = modalMode;
                removeClassModal(modalModeClass);
                return false;
            }
        } else if (idArray[0] === "admin"){
            if(idArray[1] === "add"){
                if(idArray[2] === "newTask"){
                    modalTitle.empty().html("").append('<i class="fa fa-plus-circle fa-lg"></i> Add new task');
                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><form action="#" id="adminaddnewtask"><div class="row"><div class="form-group col-lg-6"> <label for="fname">Fullname</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div> <input class="form-control form-control-sm person-name" name="fname" id="fname" maxlength="100" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"> <label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div> <input class="form-control form-control-sm cell-num" name="cell" id="cell" autocomplete="off" maxlength="11" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6 mx-auto"> <label for="serv">Type of Service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div> <select class="form-control form-control-sm serv" name="serv" id="serv" autocomplete="off" maxlength="100" required><option value="1">Tarpaulin</option><option value="2">Vinyl Sticker</option><option value="3">Mug Press</option> </select></div></div><div class="form-group col-lg-6" id="contypeofsize"> <label for="typeofsize">Type of Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div> <select class="form-control form-control-sm serv" name="typeofsize" id="typeofsize" autocomplete="off" maxlength="100" required><option value="1">Standard Size</option><option value="2">Custom Size</option> </select></div></div></div><div class="row" id="standardSize"><div class="form-group col-lg-3"> <label for="width1">Width</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-horizontal"></span></div></div> <select class="form-control form-control-sm serv" name="width1" id="width1" autocomplete="off" maxlength="100" required><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select></div></div><div class="form-group col-lg-3"> <label for="height1">Height</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-vertical"></span></div></div> <select class="form-control form-control-sm serv" name="height1" id="height1" autocomplete="off" maxlength="100" required><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select></div></div><div class="form-group col-lg-3"> <label for="quan1">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="3" id="quan1" name="quan1" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign1" name="nodesign1"></div></div> <label for="nodesign1">&nbsp;Design</label></div></div></div><div class="row" id="seamingSize"><div class="form-group col-lg-3"> <label for="width2">Width</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-horizontal"></span></div></div> <input type="text" maxlength="2" class="form-control form-control-sm size" id="width2" name="width2" required></div></div><div class="form-group col-lg-3"> <label for="height2">Height</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-vertical"></span></div></div> <input type="text" maxlength="2" class="form-control form-control-sm size" id="height2" name="height2" required></div></div><div class="form-group col-lg-3"> <label for="quan2">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="2" id="quan2" name="quan2" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign2" name="nodesign2"></div></div> <label for="nodesign2">&nbsp;Design</label></div></div></div><div class="row" id="mugAndHeat"><div class="form-group col-lg-3"> <label for="quan3">Quantity</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-sort-numeric-up"></span></div></div> <input type="text" class="form-control form-control-sm size" maxlength="3" id="quan3" name="quan3" required></div></div><div class="form-group col-lg-3 mt-4 pt-2"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"> <input type="checkbox" id="nodesign3" name="nodesign3"></div></div> <label for="nodesign3">&nbsp;Design</label></div></div></div><div class="row"><div class="form-group col-lg-6"> <label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div> <input class="form-control form-control-sm money" name="tp" id="tp" autocomplete="off" maxlength="6" type="text" required readonly></div></div><div class="form-group col-lg-6"> <label for="dp">Down Payment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div> <input class="form-control form-control-sm money" name="dp" id="dp" autocomplete="off" maxlength="6" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6"> <label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div> <input class="form-control form-control-sm" name="expdate" id="expdate" autocomplete="off" type="text" maxlength="20" required></div></div></div><div class="row"><div class="form-group col-lg-12 no-zoom text-center mx-auto"><div class="text-left"> <label class="control-label" for="attach">Attachment</label></div> <input id="attach" name="attach" type="file" required><div id="attach-error"></div></div></div><div class="row"><div class="form-group col-lg-12"> <label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" name="addet" id="addet" autocomplete="off" type="text"></textarea></div></div></div><div class="row"><div class="col-lg-2"> <button class="btn btn-primary py-2 px-5" type="submit"><i class="fa fa-save fa-lg spinner"></i> Save</button></div></div></form></div></div></div>');
                    
                    $("#standardSize").show();
                    $("#seamingSize").hide();
                    $("#mugAndHeat").hide();
                    $("#width2").attr({"disabled":"disabled","required":false});
                    $("#height2").attr({"disabled":"disabled","required":false});
                    $("#quan2").attr({"disabled":"disabled","required":false});
                    $("#nodesign2").attr({"disabled":"disabled","required":false});
                    
                    $("#quan3").attr({"disabled":"disabled","required":false});
                    $("#nodesign3").attr({"disabled":"disabled","required":false});

                    theWidth = $("#width1").val();
                    theHeight = $("#height1").val();
                    theQuan = 0;
                    theNoDesign = 0;
                    $('#expdate').datetimepicker({
                        minDate: moment(), 
                        daysOfWeekDisabled: [0],
                        defaultDate: moment()
                    });
                    var branchCode = $("#sessionBranch").val();
                    searchExpdate(branchCode);

                    $("#attach").fileinput({
                        theme: "fas",
                        maxFileSize: 100000,
                        overwriteInitial: true,
                        showClose: false,
                        autoReplace: true,
                        showPreview: false,
                        showUpload: false,
                        elErrorContainer: '#attach-error',
                        msgErrorClass: 'alert alert-block alert-danger',
                        allowedFileExtensions: ["rar","zip","gzip","gz","7z"],
                        browseClass: "btn btn-secondary btn-sm",
                        browseLabel: "Browse",
                        browseIcon: '<i class="fa fa-folder-open fa-lg"></i>',
                        removeLabel: "Remove",
                        removeClass: 'btn btn-danger btn-sm',
                        removeIcon: '<i class="fa fa-trash fa-lg"></i>'
                        // defaultPreviewContent: '<img src="uploads/attachment/rar_placeholder.png" width="250" height="200" alt="Your Attachment">',
                    });
                    $("#modal .modal-dialog .modal-footer").remove();
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                }
            } else if(idArray[1] === "edit") {
                if(idArray[2] === "ogt"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "ogt", "id": idArray[3]},
                        success: function(res){
                            if(res === "error"){
                                alert("Error occured.");
                                return false;
                            } else {
                                modalTitle.empty().html("").append('<i class="fa fa-edit fa-lg"></i> Edit on going task for ' + res["name"]);
                                modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><form action="#" id=""><div class="row"><input type="hidden" name="itemId"><div class="form-group col-lg-6"><label for="fname">Fullname</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm person-name" name="fname" id="fname" maxlength="100" autocomplete="off" type="text" required></div></div><div class="form-group col-lg-6"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm cell-num" name="cell" id="cell" autocomplete="off" maxlength="11" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6"><label for="serv">Type of Service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div><input class="form-control form-control-sm serv" type="text" name="serv" id="serv" autocomplete="off" maxlength="100" readonly required></div></div><div class="form-group col-lg-6"><label for="size" id="sizelabel">Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div><input class="form-control form-control-sm size" name="size" id="size" autocomplete="off" maxlength="20" type="text" required></div></div></div><div class="row"><div class="form-group col-lg-6"><label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div><input class="form-control form-control-sm" name="expdate" id="expdate" autocomplete="off" type="date" maxlength="20" required></div></div><div class="form-group col-lg-3"><label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div><input class="form-control form-control-sm money" name="tp" id="tp" autocomplete="off" maxlength="5" type="text" readonly required></div></div><div class="form-group col-lg-3"><label for="dp">Down Payment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div><input class="form-control form-control-sm money" name="dp" id="dp" autocomplete="off" maxlength="5" type="text" readonly required></div></div></div><div class="row"><div class="form-group col-lg-12"><label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" name="addet" id="addet" autocomplete="off" type="text"></textarea></div></div></div><div class="row"><div class="col-lg-2"><button class="btn btn-success py-2 px-5" type="submit" id="submit"><i class="fa fa-save fa-lg spinner"></i> Update</button><button class="btn btn-secondary py-2 px-5" type="button" role="button" id="editbtn"><i class="fa fa-edit fa-lg"></i> Edit</button></div></div></form></div></div></div>');
                                $("input[name='itemId']").val(res["id"]);
                                $("input[name='fname']").val(res["name"]);
                                $("input[name='cell']").val(res["cell"]);
                                $("input[name='serv']").val(res["serv"]);
                                $("input[name='size']").val(res["size"]);
                                $("input[name='stdate']").val(res["stdate"]);
                                $("input[name='expdate']").val(res["expdate"]);
                                $("input[name='tp']").val(res["tp"]);
                                $("input[name='dp']").val(res["dp"]);
                                $("textarea[name='addet']").val(res["addet"]);
                                $("# :input").attr('disabled', 'disabled');
                                $("#submit").hide();
                                $("#editbtn").removeAttr('disabled');
                                $("#modal .modal-dialog .modal-footer").remove();
                                modalModeClass = modalMode;
                                $("#modal").modal({
                                    backdrop: 'static',
                                    keyboard: false
                                },"show");
                            }  
                        }
                    });
                }
            } else if(idArray[1] === "fv") {
                if(idArray[2] === "aft"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "aft", "id": idArray[3]},
                        success: function(res){
                            modalTitle.empty().html("").append('<i class="fa fa-eye fa-lg"></i> Full details of ' + res["name"]);
                            modalBody.empty().html("").append('<div class="container"><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="fname">Full Name</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm" id="fname" name="fname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm" id="cell" name="cell" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="serv">Type of service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div><input class="form-control form-control-sm" id="serv" name="serv" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="size">Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div><input class="form-control form-control-sm" id="size" name="size" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="stdate">Start Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-plus"></span></div></div><input class="form-control form-control-sm" id="stdate" name="stdate" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="fdate">Finish Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div><input class="form-control form-control-sm" id="fdate" name="fdate" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div><input class="form-control form-control-sm" id="tp" name="tp" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="dp">Downpayment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div><input class="form-control form-control-sm" id="dp" name="dp" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="empname">Assigned To</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-circle"></span></div></div><input class="form-control form-control-sm" id="empname" name="empname" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" id="addet" type="text" name="addet" readonly></textarea></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="rem">Remarks</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-comment-dots"></span></div></div><textarea class="form-control form-control-sm" id="rem" name="rem" type="text" readonly></textarea></div></div></div></div></div>');
                            $("input[name='fname']").val(res["name"]);
                            $("input[name='cell']").val(res["cell"]);
                            $("input[name='serv']").val(res["serv"]);
                            $("input[name='size']").val(res["size"]);
                            $("input[name='stdate']").val(res["stdate"]);
                            $("input[name='fdate']").val(res["fdate"]);
                            $("input[name='tp']").val(res["tp"]);
                            $("input[name='dp']").val(res["dp"]);
                            $("input[name='empname']").val(res["empname"]);
                            $("textarea[name='addet']").val(res["addet"]);
                            $("textarea[name='rem']").val(res["rem"]);
                            $("#modal .modal-dialog .modal-footer").remove();
                            modalModeClass = modalMode;
                            $("#modal").modal({
                                backdrop: 'static',
                                keyboard: false
                            },"show");
                        }
                    });
                }
            } else if(idArray[1] === "approve") {
                if (idArray[2] === "pen"){
                    var fullname = $("#"+rawId).closest("tr").
                        find(".fullname").
                        text();
                    modalTitle.empty().html("").append('<i class="fa fa-exclamation-triangle fa-lg"></i> Approve task');
                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row pb-5"><div class="col-lg-11 mx-auto"><div class="text-center"><h3>Are you sure you want to approve this task for:</h3><hr><h1>"'+fullname+'"</h1></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button data-toggle="tooltip" title="This task will goes to FINISH TASKS if you approve." id="'+idArray[3]+'" class="btn btn-success btn-lg mx-auto approveId"><i class="fa fa-check fa-lg spinner"></i> Approve</button></div></div></div></div></div>');
                    $("#modal .modal-dialog .modal-footer").remove();
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                }
            } else if(idArray[1] === "modify") {
                if(idArray[2] === "pen"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "pending", "id": idArray[3]},
                        success: function(res){
                            modalTitle.empty().html("").append('<i class="fa fa-eye fa-lg"></i> Full details of ' + res["name"]);
                            modalBody.empty().html("").append('<div class="container"><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="fname">Full Name</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm" id="fname" name="fname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm" id="cell" name="cell" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="serv">Type of service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div><input class="form-control form-control-sm" id="serv" name="serv" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="size">Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div><input class="form-control form-control-sm" id="size" name="size" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="stdate">Start Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-plus"></span></div></div><input class="form-control form-control-sm" id="stdate" name="stdate" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div><input class="form-control form-control-sm" id="expdate" name="expdate" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div><input class="form-control form-control-sm" id="tp" name="tp" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="dp">Downpayment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div><input class="form-control form-control-sm" id="dp" name="dp" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="empname">Assigned To</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user-circle"></span></div></div><input class="form-control form-control-sm" id="empname" name="empname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="branch">Branch</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-map-marked"></span></div></div><input class="form-control form-control-sm" id="branch" name="branch" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" id="addet" type="text" name="addet" readonly></textarea></div></div></div></div><form action="#" id="manmodify"><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="rem">Remarks</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-comment-dots"></span></div></div><input type="hidden" name="id"><textarea class="form-control form-control-sm" id="rem" name="rem" type="text"></textarea></div></div></div></div><div class="row"><div class="col-lg-2"><button class="btn btn-success py-2 px-5" type="submit" id="submit"><i class="fa fa-save fa-lg spinner"></i> Update</button><button class="btn btn-secondary py-2 px-5" type="button" role="button" id="editbtn"><i class="fa fa-edit fa-lg"></i> Edit</button></div></div></form></div>');
                            $("input[name='id']").val(res["itemId"]);
                            $("input[name='fname']").val(res["name"]);
                            $("input[name='cell']").val(res["cell"]);
                            $("input[name='serv']").val(res["serv"]);
                            $("input[name='size']").val(res["size"]);
                            $("input[name='stdate']").val(res["stdate"]);
                            $("input[name='expdate']").val(res["expdate"]);
                            $("input[name='tp']").val(res["tp"]);
                            $("input[name='dp']").val(res["dp"]);
                            $("input[name='empname']").val(res["empname"]);
                            $("input[name='branch']").val(res["branch"]);
                            $("textarea[name='addet']").val(res["addet"]);
                            $("textarea[name='rem']").val(res["rem"]);
                            $("#manmodify :input").attr('disabled', 'disabled');
                            $("#submit").hide();
                            $("#editbtn").removeAttr('disabled');
                            $("#modal .modal-dialog .modal-footer").remove();
                            modalModeClass = modalMode;
                            $("#modal").modal({
                                backdrop: 'static',
                                keyboard: false
                            },"show");
                        }
                    });
                }
            } else if(idArray[1] === "approveId") {
                if(idArray[2] === "pen"){
                    if(idArray[3] === "yes"){
                        modalTitle.empty().html("").append('<i class="fa fa-check fa-lg"></i> Success');
                        modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center text-success"><h3><i class="fa fa-check-circle fa-7x"></i></h3><h1>Success!</h1></div></div></div><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center"><p>'+modalNotifMess+'</p></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Close</button></div></div></div></div></div>');
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                    } else if(idArray[3] === "no"){
                        modalTitle.empty().html("").append('<i class="fa fa-times fa-lg"></i> Failed');
                        modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center text-danger"><h3><i class="fa fa-times-circle fa-7x"></i></h3><h1>Failed</h1></div></div></div><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center"><p>'+modalNotifMess+'</p></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Close</button></div></div></div></div></div>');
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                    }
                }
            } else {
                alert("invalid mode");
                modalModeClass = modalMode;
                removeClassModal(modalModeClass);
                return false;
            }
        } else if (idArray[0] === "emp"){
            if(idArray[1] === "fv") {
                if(idArray[2] === "ogt"){
                    $.ajax({
                        url: "files/action/idfinder.php",
                        type: "POST",
                        dataType: "JSON",
                        data: {"data": 1, "module": "ogt", "id": idArray[3]},
                        success: function(res){
                            modalTitle.empty().html("").append('<i class="fa fa-eye fa-lg"></i> Full details of ' + res["name"]);
                            modalBody.empty().html("").append('<div class="container"><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="fname">Full Name</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-user"></span></div></div><input class="form-control form-control-sm" id="fname" name="fname" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="cell">Cellphone Number</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-mobile-alt"></span></div></div><input class="form-control form-control-sm" id="cell" name="cell" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="serv">Type of service</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-lightbulb"></span></div></div><input class="form-control form-control-sm" id="serv" name="serv" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="size">Size</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-ruler-combined"></span></div></div><input class="form-control form-control-sm" id="size" name="size" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="stdate">Start Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-plus"></span></div></div><input class="form-control form-control-sm" id="stdate" name="stdate" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="expdate">Expected Date</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-calendar-check"></span></div></div><input class="form-control form-control-sm" id="expdate" name="expdate" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-6"><div class="form-group"><label for="tp">Total Price</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-file-invoice-dollar"></span></div></div><input class="form-control form-control-sm" id="tp" name="tp" type="text" readonly></div></div></div><div class="col-lg-6"><div class="form-group"><label for="dp">Downpayment</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-hand-holding-usd"></span></div></div><input class="form-control form-control-sm" id="dp" name="dp" type="text" readonly></div></div></div></div><div class="row mb-2"><div class="col-lg-12"><div class="form-group"><label for="addet">Additional Details</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><span class="fa fa-clipboard"></span></div></div><textarea class="form-control form-control-sm" id="addet" type="text" name="addet" readonly></textarea></div></div></div></div></div>');
                            $("input[name='fname']").val(res["name"]);
                            $("input[name='cell']").val(res["cell"]);
                            $("input[name='serv']").val(res["serv"]);
                            $("input[name='size']").val(res["size"]);
                            $("input[name='stdate']").val(res["stdate"]);
                            $("input[name='expdate']").val(res["expdate"]);
                            $("input[name='tp']").val(res["tp"]);
                            $("input[name='dp']").val(res["dp"]);
                            $("textarea[name='addet']").val(res["addet"]);
                            $("#modal .modal-dialog .modal-footer").remove();
                            modalModeClass = modalMode;
                            $("#modal").modal({
                                backdrop: 'static',
                                keyboard: false
                            },"show");
                        }
                    });
                }
            } else if(idArray[1] === "done") {
                if (idArray[2] === "ogt"){
                    var fullname = $("#"+rawId).closest("tr").
                        find(".fullname").
                        text();
                    modalTitle.empty().html("").append('<i class="fa fa-exclamation-triangle fa-lg"></i> Done task');
                    modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row pb-5"><div class="col-lg-11 mx-auto"><div class="text-center"><h3>Are you sure you want to done this task for:</h3><hr><h1>"'+fullname+'"</h1></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button data-toggle="tooltip" title="This task will goes to PENDING TASK of your ADMIN if you done." id="'+idArray[3]+'" class="btn btn-success btn-lg mx-auto doneId"><i class="fa fa-check fa-lg spinner"></i> Done</button></div></div></div></div></div>');
                    $("#modal .modal-dialog .modal-footer").remove();
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                }
            } else if(idArray[1] === "doneId") {
                if(idArray[2] === "ogt"){
                    if(idArray[3] === "yes"){
                        modalTitle.empty().html("").append('<i class="fa fa-check fa-lg"></i> Success');
                        modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center text-success"><h3><i class="fa fa-check-circle fa-7x"></i></h3><h1>Success!</h1></div></div></div><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center"><p>'+modalNotifMess+'</p></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Close</button></div></div></div></div></div>');
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                    } else if(idArray[3] === "no"){
                        modalTitle.empty().html("").append('<i class="fa fa-times fa-lg"></i> Failed');
                        modalBody.empty().html("").append('<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center text-danger"><h3><i class="fa fa-times-circle fa-7x"></i></h3><h1>Failed</h1></div></div></div><div class="row"><div class="col-lg-11 mx-auto"><div class="text-center"><p>'+modalNotifMess+'</p></div></div></div><div class="row"><div class="col-lg-12 mx-auto text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Close</button></div></div></div></div></div>');
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                    }
                }
            } else {
                alert("invalid mode");
                modalModeClass = modalMode;
                removeClassModal(modalModeClass);
                return false;
            }
        } else if (idArray[0] === "usermodal"){
            if(idArray[1] === "manager"){
                $.ajax({
                    url: "files/action/idfinder.php",
                    type: "POST",
                    data: {"data": 1, "module": "userAccount", "id": idArray[2]},
                    dataType:"JSON",
                    success: function(res){
                        var pic = res.pic;
                        if(pic === ""){
                            pic = "default_avatar_male.jpg";
                        } 
                        modalTitle.empty().html("").append('<i class="fa fa-user-tie fa-lg pb-1"></i> '+res.prev+' - '+res.fname);
                        modalBody.empty().html("").addClass("p-0").append('<div class="card text-white bg-primary"><img class="card-img-top img img-fluid" src="uploads/'+pic+'"><div class="card-body text-center"><h5 class="card-title">'+res.fname+'</h5><p class="card-text"><strong>Date Created:</strong> '+res.dtcreate+'</p><div class="btn-group" role="group" aria-label="Options"><button type="button" class="btn btn-success">Edit Info</button><button type="button" class="btn btn-danger" id="logout">Logout</button></div></div></div>');
                        modalSize.addClass("modal-sm");
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                        $("#modal").modal({
                            backdrop: 'static',
                            keyboard: false
                        },"show");
                    }
                });
            } else if(idArray[1] === "normie")  {
                $.ajax({
                    url: "files/action/idfinder.php",
                    type: "POST",
                    data: {"data": 1, "module": "userAccount", "id": idArray[2]},
                    dataType:"JSON",
                    success: function(res){
                        var pic = res.pic;
                        var prev = res.prev;
                        if(prev === "1"){
                            prev = "ADMIN";
                        } else if(prev === "2") {
                            prev = "EMPLOYEE";
                        }
                        if(pic === ""){
                            pic = "default_avatar_male.jpg";
                        } 
                        modalTitle.empty().html("").append('<i class="fa fa-user-tie fa-lg pb-1"></i> '+prev+' - '+res.fname);
                        modalBody.empty().html("").addClass("p-0").append('<div class="card text-white bg-primary"><img class="card-img-top img img-fluid" src="uploads/'+pic+'"><div class="card-body text-center"><h5 class="card-title">'+res.fname+'</h5><p class="card-text"><strong>Date Created:</strong> '+res.dtcreate+'</p><div class="btn-group" role="group" aria-label="Options"><button type="button" class="btn btn-success">Edit Info</button><button type="button" class="btn btn-danger" id="logout">Logout</button></div></div></div>');
                        modalSize.addClass("modal-sm");
                        $("#modal .modal-dialog .modal-footer").remove();
                        modalModeClass = modalMode;
                        $("#modal").modal({
                            backdrop: 'static',
                            keyboard: false
                        },"show");
                    }
                });
            }
        } else if (idArray[0] === "renotify"){
            if(idArray[1] === "ogt"){
                if(idArray[2] === "manager"){
                    modalTitle.empty().html("").append('<i class="fa fa-bell fa-lg pb-1"></i> Renotify');
                    modalBody.empty().html("").append('<div class="container"><div class="row text-center"><div class="col-lg-12"><p class="font-italic font-weight-bold font-initial">Would you like to notify the Supervisor ?</p></div></div></div>');
                    $("#modal .modal-dialog .modal-footer").empty().html("").append('<button class="btn btn-success renotifyId spinner" id="'+idArray[3]+'">Renotify</button><button class="btn btn-danger" data-dismiss="modal">Cancel</button>');
                    modalSize.addClass("modal-sm");
                    modalModeClass = modalMode;
                    $("#modal").modal({
                        backdrop: 'static',
                        keyboard: false
                    },"show");
                }
            } else if(idArray[1] === "admin")  {
              
            }
        } else {
            alert("invalid previlege");
            modalModeClass = modalMode;
            removeClassModal(modalModeClass);
            return false;
        }
    }
    // $(document).keydown(function (event) {
    //     if (event.keyCode == 123) {
    //         return false;
    //     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {       
    //         return false;
    //     }
    // });
    // document.addEventListener('contextmenu', event => event.preventDefault());
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
        placement: 'bottom',
        trigger: 'hover',
        html: true
    });
    $.extend(true, $.fn.datetimepicker.defaults, {
        icons: {
            time: 'far fa-clock',
            date: 'far fa-calendar',
            up: 'fas fa-arrow-up',
            down: 'fas fa-arrow-down',
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right',
            today: 'fas fa-calendar-check',
            clear: 'far fa-trash-alt',
            close: 'far fa-times-circle'
        }
    });
    // tawag user-modal
    $("body").on("click", ".user-modal", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "primary";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    // login
    $("body").on("submit", "#login_form", function(e){
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "files/action/autlogin.php",
            type: "POST",
            dataType: "html",
            data: form.serialize(),
            beforeSend: function(){
                $(".spinner").addClass("fa fa-spinner fa-pulse");
                $("#login_form :input").prop("disabled",true);
            },
            success: function(res){
                if(res === "login"){  
                    window.location.reload();
                }
                else 
                {
                    $(".msg-alert")
                        .empty()
                        .append("<div class='alert alert-warning' role='alert' ><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fas fa-exclamation-triangle'></i> <span class='msg'>"+ res +"</span></div>")
                        .fadeTo(2000, 500)
                        .slideUp(500, function(){
                            $(".msg-alert").slideUp(500);
                    });
                }
            },
            error: function(error){
                alert(error.statusText + error.responseText);
            },
            complete: function(){
                $(".spinner").removeClass("fa fa-spinner fa-spin");
                $("#login_form :input").prop("disabled", false);
            }
        });
    });
    // logout
    $("body").on("click", "#logout", function(e){
        e.preventDefault();
        var data = 1;
        $.ajax({
            url: "files/action/logout.php",
            type: "POST",
            data: {data: data},
            beforeSend: function(){
                $(".spinner").addClass("fa fa-spinner fa-pulse");
            },
            success: function(res){
                if(res === "logout"){
                    window.location.href = window.location.href;
                    window.location.reload();
                    return false;
                }
                else 
                {
                    $(".msg-alert")
                    .empty()
                    .fadeIn(1000,function(){
                        $(this).append("<div class='alert alert-warning' role='alert'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fas fa-exclamation-triangle'></i> <span class='msg'>"+ res +"</span></div>");
                    });  
                }
            },
            error: function(error){
                alert(error.statusText + error.responseText);
            },
            complete: function(){
                $(".spinner").removeClass("fa fa-spinner fa-spin");
            },
            dataType: "html"
        });
    });
    // fetch manager task
    $("body").on("click", "#manTask", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
    });
    // fetch manager user
    $("body").on("click", "#manU", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/man/user.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "pageLength": 10,
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "columnDefs": [
                        {
                            "targets": [0], 
                            "title": "Fullname", 
                            "className": "uname",
                            "createdCell": function (td, cellData, rowData, row, col) {
                                var $td = $(td);
                                if(rowData[7] === ""){
                                    $td.popover({
                                        "placement": 'left',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $td,
                                        "animation": true,
                                        "title" : '<i class="fa fa-grin-hearts fa-lg text-center"></i> '+ cellData,
                                        "content" : '<img src="uploads/default_avatar_male.jpg" width="200" height="200" class="img img-fluid img-thumbnail rounded" />'
                                    });
                                } else {
                                    $td.popover({
                                        "placement": 'left',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $td,
                                        "animation": true,
                                        "title" : '<i class="fa fa-grin-hearts fa-lg text-center"></i> '+ cellData,
                                        "content" : '<img src="uploads/'+rowData[7]+'" width="200" height="200" class="img img-fluid img-thumbnail rounded" />'
                                    });
                                }
                            }
                        },
                        {"targets": [1], "title": "Username", "orderable": false, "className": "uname"},
                        {"targets": [2], "title": "Privilege", "className": "prev"},
                        {"targets": [3], "title": "Cellphone#","orderable": false, "className": "con"},
                        {"targets": [4], "title": "Branch", "className": "br"},
                        {"targets": [5], "title": "Date Created", "orderable": false, "className": "llogin"},
                        {"targets": [6], "title": "Action", "orderable": false},
                        {"targets": [7], "title": "Path", "visible": false ,"className": "dppath"}
                    ],
                    "ajax": {
                        "url": "files/part/man/fetchuser.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : "edit", "module": "userAccount"}
                    }
                });
                $(table.table().header()).addClass("thead-dark");
            
                
                // new $.fn.dataTable.FixedHeader(table);
            }
        });
    });
    // fetch admin employees
    $("body").on("click", "#adminEmp", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        
        $.ajax({
            url: "files/part/admin/emp.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "columnDefs": [
                        {
                            "targets": [0], 
                            "title": "Fullname", 
                            "className": "uname",
                            "createdCell": function (td, cellData, rowData, row, col) {
                                var $td = $(td);
                                if(rowData[5] === ""){
                                    $td.popover({
                                        "placement": 'left',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $td,
                                        "animation": true,
                                        "title" : '<i class="fa fa-grin-hearts fa-lg text-center"></i> '+ cellData,
                                        "content" : '<img src="uploads/default_avatar_male.jpg" width="200" height="200" class="img img-fluid img-thumbnail rounded" />'
                                    });
                                } else {
                                    $td.popover({
                                        "placement": 'left',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $td,
                                        "animation": true,
                                        "title" : '<i class="fa fa-grin-hearts fa-lg text-center"></i> '+ cellData,
                                        "content" : '<img src="uploads/'+rowData[5]+'" width="200" height="200" class="img img-fluid img-thumbnail rounded" />'
                                    });
                                }
                            }
                        },
                        {"targets": [1], "title": "Username", "orderable": false, "className": "uname"},
                        {"targets": [2], "title": "Privilege", "className": "prev"},
                        {"targets": [3], "title": "Cellphone#","orderable": false, "className": "con"},
                        {"targets": [4], "title": "Date Created", "orderable": false, "className": "llogin"},
                        {"targets": [5], "title": "Path", "visible": false ,"className": "dppath"}
                    ],
                    "ajax": {
                        "url": "files/part/admin/fetchuser.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : "fv"}
                    }
                });
                $(table.table().header()).addClass("thead-dark");
            
                // new $.fn.dataTable.FixedHeader(table);
            }
        });
    });
    // fetch emp task
    $("body").on("click", "#empTask", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
    });
    // fetch emp calendar
    $("body").on("click", "#empCal", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/emp/cal.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
            }
        });
    });
    // fetch manager newtask
    $("body").on("click", "#manager_add_newTask", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        var modalMode = "primary";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    // fetch admin new task
    $("body").on("click", "#admin_add_newTask", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        var modalMode = "primary";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    // fetch manager ongoing
    $("body").on("click", "#manOnGoingT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/man/ongoing.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                // $.fn.dataTable.moment('MM/DD/YYYY hh:mm:ss A');
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 4, "desc" ]],
                    "bLengthChange": false,
                    "bInfo" : false,
                    "language": {
                        "search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',
                        "searchPlaceholder": 'Search...',
                        "emptyTable": '<div class="container text-center"><div class="row"><div class="col-lg-12"><i class="far fa-sad-tear fa-5x"></i></div></div><div class="row"><div class="col-lg-12"><h1 class="font-weight-light">No data available in table.</h1></div></div></div>'
                    },
                    "responsive": true,
                    "ajax": {
                        "url": "files/part/man/fetchog.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : ["edit","fv"], "module" : "ogt"}
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size / Quantity", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Expected Date", "orderable": false,"type": "date"},
                        {"targets": [6], "title": "Assigned To", "orderable": false},
                        {"targets": [7], "title": "Branch", "orderable": false},
                        {"targets": [8], "title": "Action", "orderable": false},
                        {"targets": [9], "title": "id", "orderable": false, "visible": false, "searchable": false}
                    ],
                    "createdRow": function ( row, data, index ) {
                        var $row = $(row);

                        var theStartdate = new Date(data[4]);
                        var theStartdateToStr = theStartdate.getTime();

                        var theExpdate = new Date(data[5]);
                        var theExpdateToStr = theExpdate.getTime();

                        var theDatenow = new Date();
                        var theDatenowToStr = theDatenow.getTime();

                        var totalHours = theExpdateToStr - theStartdateToStr;
                        var remainingHours = theExpdateToStr - theDatenowToStr;
                        
                        var oneFourthOfTotalHours = totalHours * .25;
                        // alert(oneFourthOfTotalHours);
                        // kung ung oras ay umabott na sa 1/4
                        if(remainingHours < oneFourthOfTotalHours){
                            $row.addClass('bg-warning')
                                .popover({
                                    "placement": 'top',
                                    "trigger": 'hover',
                                    "html": true,
                                    "container": $row,
                                    "animation": true,
                                    "title" : '<i class="fa fa-grin-beam-sweat fa-lg"></i> The expected date is almost there.',
                                    "content" : 'Please remind the <strong>'+ data[7] +'</strong> about the expected date of this task.'
                            });
                            if (parseInt(remainingHours) < 0) {
                                $(row).removeClass('bg-warning')
                                    .popover('dispose')
                                    .addClass("bg-danger text-row-danger")
                                    .popover({
                                        "placement": 'top',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $row,
                                        "animation": true,
                                        "title" : '<i class="fa fa-frown fa-lg"></i> The expected date is already passed.',
                                        "content" : '<div class="container-fluid"><div class="row"><div class="col-lg-*">Please alert the <strong>'+ data[7] +'</strong> about the expected date of this task.</div></div><div class="row mx-auto text-center"><div class="col-lg-12"><button class="btn btn-primary btn-sm renotify" id="renotify_ogt_manager_'+data[9]+'">Renotify Branch Supervisor</button></div></div></div>'
                                });
                            }
                        }
                    }
                });
                $(table.table().header()).addClass("thead-dark");
            }
        });
    });
    // fetch admin ongoing
    $("body").on("click", "#adminOnGoingT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/admin/ongoing.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 4, "asc" ]],
                    "language": {
                        "search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',
                        "searchPlaceholder": 'Search...'
                    },
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/admin/fetchog.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : ["edit","fv"], "module" : "ogt"}
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Expected Date", "orderable": false, "type": "date"},
                        {"targets": [6], "title": "Assigned To", "orderable": false},
                        {"targets": [7], "title": "Action", "orderable": false}
                    ],
                    "createdRow": function ( row, data, index ) {
                        var $row = $(row);

                        var theStartdate = new Date(data[4]);
                        var theStartdateToStr = theStartdate.getTime();

                        var theExpdate = new Date(data[5]);
                        var theExpdateToStr = theExpdate.getTime();

                        var theDatenow = new Date();
                        var theDatenowToStr = theDatenow.getTime();

                        var totalHours = theExpdateToStr - theStartdateToStr;
                        var remainingHours = theExpdateToStr - theDatenowToStr;
                        
                        var oneFourthOfTotalHours = totalHours * .25;
                        // alert(oneFourthOfTotalHours);
                        // kung ung oras ay umabott na sa 1/4
                        if(remainingHours < oneFourthOfTotalHours){
                            $row.addClass('bg-warning')
                                .popover({
                                    "placement": 'top',
                                "trigger": 'hover',
                                "html": true,
                                "container": $row,
                                "animation": true,
                                "title" : '<i class="fa fa-grin-beam-sweat fa-lg"></i> The expected date is almost there.',
                                "content" : 'Please remind <strong>'+ data[6] +'</strong> about the expected date of this task.'
                            });
                            if (parseInt(remainingHours) < 0) {
                                $(row).removeClass('bg-warning')
                                    .popover('dispose')
                                    .addClass("bg-danger")
                                    .popover({
                                        "placement": 'top',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $row,
                                        "animation": true,
                                        "title" : '<i class="fa fa-frown fa-lg"></i> The expected date is already passed.',
                                        "content" : 'Please alert <strong>'+ data[6] +'</strong> about the expected date of this task.'
                                });
                            }
                        }
                    }
                });
                $(table.table().header()).addClass("thead-dark");
            }
        });
    });
    // fetch manager pending
    $("body").on("click", "#manPendingT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/man/pending.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 7, "desc" ]],
                    "language": {
                        "search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',
                        "searchPlaceholder": 'Search...'
                    },
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/man/fetchp.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : ["modify","approve"], "module" : "pen"}
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false, "className": "fullname" },
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size / Quantity", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Expected Date", "orderable": false, "type": "date"},
                        {"targets": [6], "title": "Branch", "orderable": false},
                        {"targets": [7], "title": "Done Date", "orderable": false, "type": "date"},
                        {"targets": [8], "title": "Done By", "orderable": false},
                        {"targets": [9], "title": "Action", "orderable": false}
                    ],
                    "createdRow": function ( row, data, index ) {
                        var $row = $(row);
                        var theDatenow = new Date();
                        var theExpdate = new Date(data[5]);
                        // alert(theExpdate.getDate() +"<br>"+ theDatenow.getDate());
                        // data[5].replace(/[\$,]/g, '') * 1 > 150000
                        if((theExpdate.getDay() === theDatenow.getDay()) && (theExpdate.getDate() === theDatenow.getDate()) && (theExpdate.getMonth() === theDatenow.getMonth()) && (theExpdate.getFullYear() === theDatenow.getFullYear()) ){
                            $row.addClass('bg-warning')
                            .popover({
                                "placement": 'top',
                                "trigger": 'hover',
                                "html": true,
                                "container": $row,
                                "animation": true,
                                "title" : '<i class="fa fa-grin-beam-sweat fa-lg"></i> The expected date is almost there.',
                                "content" : 'Please remind the <strong>'+ data[6] +'</strong> about the expected date of this task.'
                            });
                        } else if (theExpdate.getTime() < theDatenow.getTime()) {
                            $(row).addClass("bg-danger")
                            .popover({
                                "placement": 'top',
                                "trigger": 'hover',
                                "html": true,
                                "container": $row,
                                "animation": true,
                                "title" : '<i class="fa fa-frown fa-lg"></i> The expected date is already passed.',
                                "content" : 'Please alert the <strong>'+ data[6] +'</strong> about the expected date of this task.'
                            });
                        }
                    }
                });
                $(table.table().header()).addClass("thead-dark");
            
            }
        });
    });
    // fetch admin pending
    $("body").on("click", "#adminPendingT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/admin/pending.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 6, "desc" ]],
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/admin/fetchp.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : ["modify","approve"], "module" : "pen"}
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false, "className": "fullname"},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Expected Date", "orderable": false, "type": "date"},
                        {"targets": [6], "title": "Done Date", "orderable": false, "type": "date"},
                        {"targets": [7], "title": "Done By", "orderable": false},
                        {"targets": [8], "title": "Action", "orderable": false}
                    ],
                    "createdRow": function ( row, data, index ) {
                        var $row = $(row);
                        var theDatenow = new Date();
                        var theExpdate = new Date(data[5]);
                        // alert(theExpdate.getDate() +"<br>"+ theDatenow.getDate());
                        // data[5].replace(/[\$,]/g, '') * 1 > 150000
                        if((theExpdate.getDay() === theDatenow.getDay()) && (theExpdate.getDate() === theDatenow.getDate()) && (theExpdate.getMonth() === theDatenow.getMonth()) && (theExpdate.getFullYear() === theDatenow.getFullYear()) ){
                            $(row).addClass('bg-warning')
                            .popover({
                                "placement": 'top',
                                "trigger": 'hover',
                                "html": true,
                                "container": $row,
                                "animation": true,
                                "title" : '<i class="fa fa-grin-beam-sweat fa-lg"></i> The expected date is almost there.',
                                "content" : 'Please remind <strong>'+ data[6] +'</strong> about the expected date of this task.'
                            });
                        } else if (theExpdate.getTime() < theDatenow.getTime()) {
                            $(row).addClass("bg-danger")
                            .popover({
                                "placement": 'top',
                                "trigger": 'hover',
                                "html": true,
                                "container": $row,
                                "animation": true,
                                "title" : '<i class="fa fa-frown fa-lg"></i> The expected date is already passed.',
                                "content" : 'Please alert <strong>'+ data[6] +'</strong> about the expected date of this task.'
                            });

                        }
                    }
                });
                $(table.table().header()).addClass("thead-dark");
            
            }
        });
    });
    // fetch manager finish
    $("body").on("click", "#manAllFinishT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/man/allfinish.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-12 col-sm-12 col-lg-12 text-center mx-0'B>>"+
                            "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 customb'>>",
                    "buttons": [
                        {
                            extend: 'print',
                            text: '<i class="fa fa-print fa-lg"></i> Print',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        },
                        {
                            extend: 'excelHtml5',
                            text: '<i class="fa fa-file-excel fa-lg"></i> Excel',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        },
                        {
                            extend: 'pdfHtml5',
                            text: '<i class="fa fa-file-pdf fa-lg"></i> Pdf',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        }
                    ],  
                    "order": [[ 5, "desc" ]],
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/man/fetchaf.php",
                        "type": "POST",
                        "data": {"data" : 1, "value": "fv", "module" : "aft"}//fv fullview mode 
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size / Quantity", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Date Finish", "type": "date"},
                        {"targets": [6], "title": "Assigned To", "orderable": false},
                        {"targets": [7], "title": "Branch", "orderable": false},
                        {"targets": [8], "title": "Action", "orderable": false}
                    ]
                });
                $(table.table().header()).addClass("thead-dark");
                new $.fn.dataTable.Buttons(table, {
                    buttons: [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ]
                });
                table.buttons( 1, null ).container().appendTo('div.customb');
            }
        });
    });
    // fetch admin finish
    $("body").on("click", "#adminAllFinishT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/admin/allfinish.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 5, "desc" ]],
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/admin/fetchaf.php",
                        "type": "POST",
                        "data": {"data" : 1, "value": "fv", "module":"aft"}//fv fullview mode 
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size", "orderable": false},
                        {"targets": [4], "title": "Started Date"},
                        {"targets": [5], "title": "Date Finish", "orderable": false},
                        {"targets": [6], "title": "Action", "orderable": false}
                    ]
                });
                $(table.table().header()).addClass("thead-dark");
            
            }
        });
    });
    // fetch emp ongoing
    $("body").on("click", "#empOnGoingT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/emp/ongoing.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 5, "desc" ]],
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/emp/fetchog.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : ["fv","done"], "module" : "ogt"}
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false, "className" : "fullname"},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Expected Date", "orderable": false, "type": "date"},
                        {"targets": [6], "title": "Action", "orderable": false}
                    ],
                    "createdRow": function ( row, data, index ) {
                        var $row = $(row);

                        var theStartdate = new Date(data[4]);
                        var theStartdateToStr = theStartdate.getTime();

                        var theExpdate = new Date(data[5]);
                        var theExpdateToStr = theExpdate.getTime();

                        var theDatenow = new Date();
                        var theDatenowToStr = theDatenow.getTime();

                        var totalHours = theExpdateToStr - theStartdateToStr;
                        var remainingHours = theExpdateToStr - theDatenowToStr;
                        
                        var oneFourthOfTotalHours = totalHours * .25;
                        // alert(oneFourthOfTotalHours);
                        // kung ung oras ay umabott na sa 1/4
                        if(remainingHours < oneFourthOfTotalHours){
                            $row.addClass('bg-warning')
                                .popover({
                                    "placement": 'top',
                                    "trigger": 'hover',
                                    "html": true,
                                    "container": $row,
                                    "animation": true,
                                    "title" : '<i class="fa fa-grin-beam-sweat fa-lg"></i> The expected date is almost there.',
                                    "content" : 'Please take some action about this task.'
                            });
                            if (parseInt(remainingHours) < 0) {
                                $(row).removeClass('bg-warning')
                                    .popover('dispose')
                                    .addClass("bg-danger")
                                    .popover({
                                        "placement": 'top',
                                        "trigger": 'hover',
                                        "html": true,
                                        "container": $row,
                                        "animation": true,
                                        "title" : '<i class="fa fa-frown fa-lg"></i> The expected date is already passed.',
                                        "content" : 'Please take some action about this task.'
                                });
                            }
                        }
                    }
                });
                $(table.table().header()).addClass("thead-dark");              
            }
        });
    });
    // fetch emp finish
    $("body").on("click", "#empFinishT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/emp/finish.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 col-md-1 col-sm-1 col-1 'B>>",
                    "buttons": [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ],
                    "order": [[ 5, "desc" ]],
                    "language": {"search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',"searchPlaceholder": 'Search...'},
                    "responsive": true,
                    "bLengthChange": false,
                    "bInfo" : false,
                    "ajax": {
                        "url": "files/part/emp/fetchaf.php",
                        "type": "POST",
                        "data": {"data" : 1, "value": "fv", "module":"aft"}//fv fullview mode 
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Customer Name", "orderable": false},
                        {"targets": [1], "title": "Cellphone#", "orderable": false},
                        {"targets": [2], "title": "Service Type"},
                        {"targets": [3], "title": "Size", "orderable": false},
                        {"targets": [4], "title": "Started Date", "type": "date"},
                        {"targets": [5], "title": "Date Finish", "orderable": false, "type": "date"},
                        {"targets": [6], "title": "Action", "orderable": false}
                    ]
                });
                $(table.table().header()).addClass("thead-dark");
            
            }
        });
    });
    // manager add account button
    $("body").on("click", "#manager_add_userAccount", function(e){
        e.preventDefault();
        var modalMode = "primary";
        var id = $(this).attr('id');
        changeModalMode(id,modalMode);
    });
    // manager add account form
    $("body").on("submit", "#adduserform", function(e){
        e.preventDefault();
        var $this = $(this);
        var formData = new FormData(this);
        formData.append('data', 1);
        formData.append('module', 'useracc');
        $.ajax({
            url: "files/action/add.php",
            type: "POST",
            dataType: "JSON",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function(){
                var id = $this.attr('id');
                $(".spinner")
                    .removeClass("fa-save")
                    .addClass("fa-spinner fa-pulse");
                $("#"+id+" :input").prop("disabled",true);
            },
            success: function(res){
                switch(res.success) {
                    case true:
                        $this[0].reset();
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-user-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(50000, 25000)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-user-times fa-lg"></i> '+ res.messages +'</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    default:
                        alert(res);
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        return false;
                }
            }
        });
    });
    // manager add task form
    $("body").on("submit", "#manaddnewtask", function(e){
        e.preventDefault();
        var $this = $(this);
        var formData = new FormData(this);
        formData.append('data', 1);
        formData.append('module', 'task');
        $.ajax({
            url: "files/action/add.php",
            type: "POST",
            dataType: "JSON",
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function(xhr, opts){
                if($("#cell").val().length != 11){
                    $("#cell").focus();
                    alertContainer
                    .empty()
                    .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> Cellphone Number must be exact 11 digits.</div>')
                    .fadeTo(2000, 500)
                    .slideUp(500, function(){
                        alertContainer.slideUp(500);
                    })
                    .focus();
                    xhr.abort();
                    return false;
                } else {
                    var dp = $("#dp");
                    var tp = $("#tp");
                    var tpIni = tp.val().replace(/,/g, '');
                    var dpReq = (parseInt(tpIni) / 2);
                    var notParsedDp = dp.val().replace(/,/g, '');
                    var dptotal = parseInt(notParsedDp);
                    if(dptotal < dpReq){
                        dp.focus();
                        alertContainer
                        .empty()
                        .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> Downpayment must be half of the total price.</div>')
                        .fadeTo(2000, 500)
                        .slideUp(500, function(){
                            alertContainer.slideUp(500);
                        })
                        .focus();
                        xhr.abort();
                        return false;
                    } else {
                        var width1 = parseInt($("#width1").val());
                        var height1 = parseInt($("#height1").val());
                        var width2 = parseInt($("#width2").val());
                        var height2 = parseInt($("#height2").val());
                        if( (width1 !== "" && height1 !== "") || (width2 !== "" && height2 !== "") ){
                            if( (width1 < 3 || height1 < 2) || (width2 < 3 || height2 < 2) ){
                                alertContainer
                                .empty()
                                .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> Minimum combination of size is 3x2.</div>')
                                .fadeTo(2000, 500)
                                .slideUp(500, function(){
                                    alertContainer.slideUp(500);
                                })
                                .focus();
                                xhr.abort();
                                return false;
                            }  else {
                                
                                var id = $this.attr('id');
                                $(".spinner")
                                    .removeClass("fa-save")
                                    .addClass("fa-spinner fa-pulse");
                                $("#"+id+" :input").prop("disabled",true);
                            }
                        } 
                    }
                }
                
            },
            success: function(res){
                // alert(JSON.stringify(res));
                switch(res.success) {
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> '+ res.messages +'</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                            })
                            .focus();
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    case true:
                        $this[0].reset();
                        var branchCode = $("#expdate").val();
                        searchExpdate(branchCode);
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(50000, 25000)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                            })
                            .focus();
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        $(".reload").trigger("click");
                        break;
                    default:
                        alert(res.messages)
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        return false;
                }
            }
        });
    });
    // manager edit task form
    $("body").on("submit", "#manedittask", function(e){
        e.preventDefault();
        var $this = $(this);
        var data = {
            'data' : '1',
            'module': 'task'
        };  
        data = $this.serialize()+"&"+ $.param(data);
        $.ajax({
            url: "files/action/edit.php",
            type: "POST",
            dataType: "json",
            data: data,
            beforeSend: function(){
                var id = $this.attr('id');
                $(".spinner")
                    .removeClass("fa-save")
                    .addClass("fa-spinner fa-pulse");
                $("#"+id+" :input").prop("disabled",true);
            },
            success: function(res){
                // alert(res);
                switch(res.success) {
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> '+ res.messages +'</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    case true:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(50000, 25000)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#submit").hide();
                        $("#editbtn").removeAttr('disabled');
                        $("#editbtn").show();
                        $(".reload").trigger("click");
                        break;
                    default:
                        alert(res.messages)
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        return false;
                }
            }
        });
    });
    // admin add task form
    $("body").on("submit", "#adminaddnewtask", function(e){
        e.preventDefault();
        var $this = $(this);
        var formData = new FormData(this);
        formData.append('data', 1);
        formData.append('module', 'task');
        $.ajax({
            url: "files/action/add.php",
            type: "POST",
            dataType: "json",
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function(xhr, opts){
                if($("#cell").val().length != 11){
                    $("#cell").focus();
                    alertContainer
                    .empty()
                    .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> Cellphone Number must be exact 11 digits.</div>')
                    .fadeTo(2000, 500)
                    .slideUp(500, function(){
                        alertContainer.slideUp(500);
                    })
                    .focus();
                    xhr.abort();
                    return false;
                } else {
                    var dp = $("#dp");
                    var tp = $("#tp");
                    var tpIni = tp.val().replace(/,/g, '');
                    var dpReq = (parseInt(tpIni) / 2);
                    var notParsedDp = dp.val().replace(/,/g, '');
                    var dptotal = parseInt(notParsedDp);
                    if(dptotal < dpReq){
                        dp.focus();
                        alertContainer
                        .empty()
                        .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> Downpayment must be half of the total price.</div>')
                        .fadeTo(2000, 500)
                        .slideUp(500, function(){
                            alertContainer.slideUp(500);
                        })
                        .focus();
                        xhr.abort();
                        return false;
                    } else {
                        var width1 = parseInt($("#width1").val());
                        var height1 = parseInt($("#height1").val());
                        var width2 = parseInt($("#width2").val());
                        var height2 = parseInt($("#height2").val());
                        if( (width1 !== "" && height1 !== "") || (width2 !== "" && height2 !== "") ){
                            if( (width1 < 3 || height1 < 2) || (width2 < 3 || height2 < 2) ){
                                alertContainer
                                .empty()
                                .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> Minimum combination of size is 3x2.</div>')
                                .fadeTo(2000, 500)
                                .slideUp(500, function(){
                                    alertContainer.slideUp(500);
                                })
                                .focus();
                                xhr.abort();
                                return false;
                            }  else {
                                var id = $this.attr('id');
                                $(".spinner")
                                    .removeClass("fa-save")
                                    .addClass("fa-spinner fa-pulse");
                                $("#"+id+" :input").prop("disabled",true);
                            }
                        } 
                    }
                }
                
            },
            success: function(res){
                switch(res.success) {
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> '+ res.messages +'</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                            })
                            .focus();
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    case true:
                        $this[0].reset();
                        var branchCode = $("#sessionBranch").val();
                        searchExpdate(branchCode);
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(50000, 25000)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                            })
                            .focus();
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        $(".reload").trigger("click");
                        break;
                    default:
                        alert(res.messages)
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        return false;
                }
            }
        });
    });
    // admin edit task form
    $("body").on("submit", "#", function(e){
        e.preventDefault();
        var $this = $(this);
        var data = {
            'data' : '1',
            'module': 'task'
        };  
        data = $this.serialize()+"&"+ $.param(data);
        $.ajax({
            url: "files/action/edit.php",
            type: "POST",
            dataType: "json",
            data: data,
            beforeSend: function(){
                var id = $this.attr('id');
                $(".spinner")
                    .removeClass("fa-save")
                    .addClass("fa-spinner fa-pulse");
                $("#"+id+" :input").prop("disabled",true);
            },
            success: function(res){
                switch(res.success) {
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> '+ res.messages +'</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    case true:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(50000, 25000)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#submit").hide();
                        $("#editbtn").removeAttr('disabled');
                        $("#editbtn").show();
                        $(".reload").trigger("click");
                        break;
                    default:
                        alert(res.messages)
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        return false;
                }
            }
        });
    });
    // manager modify task form
    $("body").on("submit", "#manmodify", function(e){
        e.preventDefault();
        var $this = $(this);
        var data = {
            'data' : '1',
            'btn': 'modify'
        };  
        data = $this.serialize()+"&"+ $.param(data);
        $.ajax({
            url: "files/action/custom.php",
            type: "POST",
            dataType: "json",
            data: data,
            beforeSend: function(){
                var id = $this.attr('id');
                $(".spinner")
                    .removeClass("fa-save")
                    .addClass("fa-spinner fa-pulse");
                $("#"+id+" :input").prop("disabled",true);
            },
            success: function(res){
                switch(res.success) {
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-times fa-lg"></i> '+ res.messages +'</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        break;
                    case true:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(50000, 25000)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#submit").hide();
                        $("#editbtn").removeAttr('disabled');
                        $("#editbtn").show();
                        break;
                    default:
                        alert(res.messages)
                        var id = $this.attr('id');
                        $(".spinner")
                            .removeClass("fa-spinner fa-pulse")
                            .addClass("fa-save");
                        $("#"+id+" :input").removeAttr('disabled');
                        return false;
                }
            }
        });
    });
    // manager edit account
    $("body").on("submit", "#edituserform", function(e){
        e.preventDefault();
        var $this = $(this);
        var data = {
            'data' : '1',
            'module': 'useracc'
        };  
        data = $this.serialize()+"&"+ $.param(data);
        $.ajax({
            url: "files/action/edit.php",
            type: "POST",
            dataType: "html",
            data: data,
            success: function(res){
                switch(res) {
                    case "unametaken":
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-exclamation-triangle fa-lg text-left"></i> Username is already taken.</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        break;
                    case "alreadyhaveadmin":
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-exclamation-triangle fa-lg text-left"></i> The branch you choose is already have ADMIN.</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        break;
                    case "successadmin":
                        $("#edituserform :input").attr("disabled","disabled");
                        $("#submit").hide();
                        $("#editbtn").removeAttr('disabled');
                        $("#editbtn").show();
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-user-check fa-lg text-left"></i> Successfully edit Admin user account.</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        break;
                    case "successemp":
                        $("#edituserform :input").attr("disabled","disabled");
                        $("#submit").hide();
                        $("#editbtn").removeAttr('disabled');
                        $("#editbtn").show();
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-user-check fa-lg text-left"></i> Successfully edit Employee user account.</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        break;
                    case "nochange":
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-exclamation-triangle fa-lg text-left"></i> Please make some change to the values.</div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                        });
                        break;
                    default:
                        alert(res);
                        return false;
                }
            }
        });
    });
    // fetch manager audit
    $("body").on("click", "#auditT", function(e){
        e.preventDefault();
        var $this = $(this);
        isActive($this);
        $.ajax({
            url: "files/part/man/audit.php",
            type: "POST",
            dataType: "html",
            data: {data: 1},
            success: function(res){
                $(".main-container").empty().html("").append(res);
                var table = $("#table").DataTable({
                    "pageLength": 7,
                    "dom":  "<'row'<'col-12 col-sm-12 col-lg-12 text-center mx-0'B>>"+
                            "<'row'<'col-1 col-sm-1 col-md-1 col-lg-1'f><'col-11 col-sm-11 col-md-11 col-lg-11'p>>" +
                            "<'row'<'col-sm-12'tr>>"+
                            "<'row'<'col-lg-1 customb'>>",
                    "buttons": [
                        {
                            extend: 'print',
                            text: '<i class="fa fa-print fa-lg"></i> Print',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        },
                        {
                            extend: 'excelHtml5',
                            text: '<i class="fa fa-file-excel fa-lg"></i> Excel',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        },
                        {
                            extend: 'pdfHtml5',
                            text: '<i class="fa fa-file-pdf fa-lg"></i> Pdf',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        }
                    ],
                    "order": [[ 3, "desc" ]],
                    "bLengthChange": false,
                    "bInfo" : false,
                    "language": {
                        "search": '<div class="badge badge-primary py-2 px-2"><i class="fas fa-search fa-lg"></i></div>',
                        "searchPlaceholder": 'Search...',
                        "emptyTable": '<div class="container text-center"><div class="row"><div class="col-lg-12"><i class="far fa-sad-tear fa-5x"></i></div></div><div class="row"><div class="col-lg-12"><h1 class="font-weight-light">No data available in table.</h1></div></div></div>'
                    },
                    "responsive": true,
                    "ajax": {
                        "url": "files/part/man/fetchaudit.php",
                        "type": "POST",
                        "data": {"data" : 1, "value" : "aud", "module" : "aud"}
                    },
                    "columnDefs": [
                        {"targets": [0], "title": "Category"},
                        {"targets": [1], "title": "Activity Name", "orderable": false},
                        {"targets": [2], "title": "Activity By", "orderable": false},
                        {"targets": [3], "title": "Privilege", "orderable": false},
                        {"targets": [4], "title": "Activity Date"}
                    ]
                });
                $(table.table().header()).addClass("thead-dark");
                new $.fn.dataTable.Buttons(table, {
                    buttons: [
                        {
                            text: '<i class="fa fa-sync-alt fa-lg"></i> Reload',
                            className: 'reload',
                            action: function ( e, dt, node, config ) {
                                dt.ajax.reload();
                            }
                        }
                    ]
                });
                table.buttons( 1, null ).container().appendTo('div.customb');
            }
        });
    });
    //modal hidden
    $("#modal").on("hidden.bs.modal", function(e){
        e.preventDefault();
        removeClassModal(modalModeClass);
        modalSize.removeClass("modal-sm");
        modalBody.removeClass("p-0");
        // modalSize.css({width: "auto"});
    });
    //edit class
    $("body").on("click", ".edit", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "success";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    // edit id
    $("body").on("click", "#editbtn", function(e){
        e.preventDefault();
        var form = $(this).closest('#modal').find('form').attr('id');
        $("#" + form + " :input").removeAttr('disabled');
        $("#submit").show();
        $(this).hide();
        $("input[name='fname']").attr("disabled","disabled");
        $("input[name='serv']").attr("disabled","disabled");
        $("input[name='typeofsize']").attr("disabled","disabled");
        $("input[name='tp']").attr("disabled","disabled");
        $("input[name='width']").attr("disabled","disabled");
        $("input[name='height']").attr("disabled","disabled");
        $("input[name='attach']").attr("disabled","disabled");
        $("input[type='checkbox']").attr("disabled","disabled");
    });
    //fv
    $("body").on("click", ".fv", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "info";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    // renotify class
    $("body").on("click", ".renotify", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "warning";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    // renotifyId
    $("body").on("click", ".renotifyId", function(e){
        e.preventDefault();
        var $this = $(this);
        var id = $this.attr('id');
        $.ajax({
            url: "files/action/custom.php",
            type: "POST",
            dataType: "JSON",
            data: {"data" : 1, "btn" : "renotify", "id" : id},
            beforeSend: function(){
                $this.empty()
                .html('<i class="fa fa-spinner fa-pulse fa-lg"></i> Loading...')
                .attr('disabled', 'disabled');
            },
            success: function(res){
                modalSize.addClass("modal-sm");
                $this.empty().
                    html('<i class="fa fa-check fa-lg"></i> Approve').
                    removeAttr('disabled');
                switch(res.success){
                    case true:
                        removeClassModal(modalModeClass);
                        modalNotifMess = res.messages;
                        var modalMode = "success";
                        var newId = "manager_renotifyId_ogt_yes";
                        changeModalMode(newId,modalMode);
                        // $(".reload").trigger("click");
                        break;
                    case false:
                        removeClassModal(modalModeClass);
                        modalNotifMess = res.messages;
                        var modalMode = "danger";
                        var newId = "manager_renotifyId_ogt_no";
                        changeModalMode(newId,modalMode);
                        break;
                    default:
                        alert(JSON.stringify(res));
                        return false;
                }
            }
        });
    });
    //modify
    $("body").on("click", ".modify", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "primary";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    //approve
    $("body").on("click", ".approve", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "warning";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    //approveId
    $("body").on("click", ".approveId", function(e){
        e.preventDefault();
        var $this = $(this);
        var id = $this.attr('id');
        $.ajax({
            url: "files/action/custom.php",
            type: "POST",
            dataType: "JSON",
            data: {"data" : 1, "btn" : "approve", "id" : id},
            beforeSend: function(){
                $this.empty()
                .html('<i class="fa fa-spinner fa-pulse fa-lg"></i> Loading...')
                .attr('disabled', 'disabled');
            },
            success: function(res){
                // modalSize.animate({
                //     "width": "300px"
                // });
                modalSize.addClass("modal-sm");
                $this.empty().
                    html('<i class="fa fa-check fa-lg"></i> Approve').
                    removeAttr('disabled');
                switch(res.success){
                    case true:
                        removeClassModal(modalModeClass);
                        modalNotifMess = res.messages;
                        var modalMode = "success";
                        var newId = "manager_approveId_pen_yes";
                        changeModalMode(newId,modalMode);
                        $(".reload").trigger("click");
                        break;
                    case false:
                        removeClassModal(modalModeClass);
                        modalNotifMess = res.messages;
                        var modalMode = "danger";
                        var newId = "manager_approveId_pen_no";
                        changeModalMode(newId,modalMode);
                        break;
                    default:
                        alert(JSON.stringify(res));
                        return false;
                }
            }
        });
    });
    //done
    $("body").on("click", ".done", function(e){
        e.preventDefault();
        var $this = $(this);
        var modalMode = "warning";
        var id = $this.attr('id');
        changeModalMode(id,modalMode);
    });
    //doneId
    $("body").on("click", ".doneId", function(e){
        e.preventDefault();
        var $this = $(this);
        var id = $this.attr('id');
        $.ajax({
            url: "files/action/custom.php",
            type: "POST",
            dataType: "JSON",
            data: {"data" : 1, "btn" : "done", "id" : id},
            beforeSend: function(){
                $this.empty()
                .html('<i class="fa fa-spinner fa-pulse fa-lg"></i> Loading...')
                .attr('disabled', 'disabled');
            },
            success: function(res){
                // modalSize.animate({
                //     "width": "300px"
                // });
                modalSize.addClass("modal-sm");
                $this.empty().
                    html('<i class="fa fa-check fa-lg"></i> Approve').
                    removeAttr('disabled');
                switch(res.success){
                    case true:
                        removeClassModal(modalModeClass);
                        modalNotifMess = res.messages;
                        var modalMode = "success";
                        var newId = "emp_doneId_ogt_yes";
                        changeModalMode(newId,modalMode);
                        $(".reload").trigger("click");
                        break;
                    case false:
                        removeClassModal(modalModeClass);
                        modalNotifMess = res.messages;
                        var modalMode = "danger";
                        var newId = "emp_doneId_ogt_no";
                        changeModalMode(newId,modalMode);
                        break;
                    default:
                        alert(JSON.stringify(res));
                        return false;
                }
            }
        });
    });
    // katarantaduhan
    function isActive($this){
        if($this.hasClass('active')){
            return false;
        } else {
            $(".nav-link").removeClass("active");
            $(".dropdown-item").removeClass("active");
            $this.addClass('active');   
        }
    }
    // validators
    $("body").on('keypress','.username',function(e){
        var regex = new RegExp("^[a-zA-Z0-9_]+$");
	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    if (regex.test(str)) {
	        return true;
	    }
	    e.preventDefault();
	    return false;
    });
    $("body").on('keypress','.password',function(e){
        var regex = new RegExp("^[a-zA-Z0-9 ]+$");
	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    if (regex.test(str)) {
	        return true;
	    }
	    e.preventDefault();
	    return false;
    });
    $("body").on('keypress','.person-name',function(e){
        var regex = new RegExp("^[a-zA-Z. ]+$");
	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    if (regex.test(str)) {
	        return true;
	    }
	    e.preventDefault();
	    return false;
    });
    $("body").on('keypress','.cell-num',function(e){
        var regex = new RegExp("^[0-9]+$");
	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    if (regex.test(str)) {
	        return true;
	    }
	    e.preventDefault();
	    return false;
    });
    $("body").on('keypress','.size',function(e){
        var regex = new RegExp("^[0-9]+$");
	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    if (regex.test(str)) {
	        return true;
	    }
	    e.preventDefault();
	    return false;
    });
    $("body").on('keyup','.money',function(e){
        // skip for arrow keys
        if(event.which >= 37 && event.which <= 40) return;

        // format number
        $(this).val(function(index, value) {
            return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
        });
    });
    $("body").on('keypress','.money',function(e){
        
        var regex = new RegExp("^[0-9]+$");
	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    if (regex.test(str)) {
	        return true;
	    }
	    e.preventDefault();
	    return false;
    });

    //magic begins 
    $("body").on('click','.tooltip',function(e){
        e.preventDefault();
        $(this).tooltip('hide');
    });
    $("body").on('click','.popover',function(e){
        e.preventDefault();
        $(this).popover('hide');
    });
    // serv form actions
	$("body").on("change","#serv",function(e){
		e.preventDefault();
		var $this = $(this);
		if($this.val() === "1" || $this.val() === "2"){
			$("#contypeofsize").show();
			$("#standardSize").show();
			
			$("#mugAndHeat").hide();
			$("#quan3").attr({"disabled":"disabled","required":false});
			$("#nodesign3").attr({"disabled":"disabled"});
			var typeofsize = $("#typeofsize");
			
			if(typeofsize.val() === "1"){
				$("#width2").attr({"disabled":"disabled","required":false});
				$("#height2").attr({"disabled":"disabled","required":false});
				$("#quan2").attr({"disabled":"disabled","required":false});
				$("#nodesign2").attr({"disabled":"disabled"});

				$("#width1").attr({"disabled":false,"required":true}).val("3");
				$("#height1").attr({"disabled":false,"required":true}).val("2");
				$("#quan1").attr({"disabled":false,"required":true}).val("");
				$("#nodesign1").attr({"disabled":false}).prop('checked', false);
                theWidth = $("#width1").val();
                theHeight = $("#height1").val();
                theQuan = 0;
                theNoDesign = 0;
                $("#tp").val("");
                $("#dp").val("");

				$("#standardSize").show();
				$("#seamingSize").hide();
			} else if (typeofsize.val() === "2"){
				$("#width1").attr({"disabled":"disabled","required":false});
				$("#height1").attr({"disabled":"disabled","required":false});
				$("#quan1").attr({"disabled":"disabled","required":false});
				$("#nodesign1").attr({"disabled":"disabled"});

				$("#width2").attr({"disabled":false,"required":true}).val("");
				$("#height2").attr({"disabled":false,"required":true}).val("");
				$("#quan2").attr({"disabled":false,"required":true}).val("");
				$("#nodesign2").attr({"disabled":false}).prop('checked', false);
                theWidth = 0;
                theHeight = 0;
                theQuan = 0;
                theNoDesign = 0;
                $("#tp").val("");
                $("#dp").val("");

				$("#seamingSize").show();
				$("#standardSize").hide();
			}	
		} else if($this.val() === "3"){
			$("#contypeofsize").hide();
			
			$("#standardSize").hide();
			
			$("#customSize").hide();
			
            $("#mugAndHeat").show();
			$("#quan3").attr({"disabled":false,"required":true});
            $("#nodesign3").attr({"disabled":false});
            
			var typeofsize = $("#typeofsize");
			
			if(typeofsize.val() === "1"){
				$("#width2").attr({"disabled":"disabled","required":false});
				$("#height2").attr({"disabled":"disabled","required":false});
				$("#quan2").attr({"disabled":"disabled","required":false});
				$("#nodesign2").attr({"disabled":"disabled"});

				$("#width1").attr({"disabled":"disabled","required":false});
				$("#height1").attr({"disabled":"disabled","required":false});
				$("#quan1").attr({"disabled":"disabled","required":false});
				$("#nodesign1").attr({"disabled":"disabled"});

				$("#standardSize").hide();
				$("#seamingSize").hide();
			} else if (typeofsize.val() === "2"){
				$("#width1").attr({"disabled":"disabled","required":false});
				$("#height1").attr({"disabled":"disabled","required":false});
				$("#quan1").attr({"disabled":"disabled","required":false});
				$("#nodesign1").attr({"disabled":"disabled"});

				$("#width2").attr({"disabled":"disabled","required":false});
				$("#height2").attr({"disabled":"disabled","required":false});
				$("#quan2").attr({"disabled":"disabled","required":false});
				$("#nodesign2").attr({"disabled":"disabled"});

				$("#seamingSize").hide();
				$("#standardSize").hide();
			}
		}
	});
	$("body").on("change","#typeofsize",function(e){
		e.preventDefault();
		var $this = $(this);
		if($this.val() === "1"){
			$("#width2").attr({"disabled":"disabled","required":false});
			$("#height2").attr({"disabled":"disabled","required":false});
			$("#quan2").attr({"disabled":"disabled","required":false});
			$("#nodesign2").attr({"disabled":"disabled"});
			
			$("#width1").attr({"disabled":false,"required":true}).val("3");
			$("#height1").attr({"disabled":false,"required":true}).val("2");
			$("#quan1").attr({"disabled":false,"required":true}).val("");
			$("#nodesign1").attr({"disabled":false}).prop('checked', false);
			theWidth = $("#width1").val();
            theHeight = $("#height1").val();
            theQuan = 0;
            theNoDesign = 0;
            $("#tp").val("");
            $("#dp").val("");

			$("#standardSize").show();
			$("#seamingSize").hide();
		} else if ($this.val() === "2"){
			$("#width1").attr({"disabled":"disabled","required":false});
			$("#height1").attr({"disabled":"disabled","required":false});
			$("#quan1").attr({"disabled":"disabled","required":false});
			$("#nodesign1").attr({"disabled":"disabled"});
			
			$("#width2").attr({"disabled":false,"required":true}).val("");
			$("#height2").attr({"disabled":false,"required":true}).val("");
			$("#quan2").attr({"disabled":false,"required":true}).val("");
			$("#nodesign2").attr({"disabled":false}).prop('checked', false);
            theWidth = 0;
            theHeight = 0;
            theQuan = 0;
            theNoDesign = 0;
            $("#tp").val("");
            $("#dp").val("");

			$("#seamingSize").show();
			$("#standardSize").hide();
		}
    });
    var theWidth = 0;
    var theHeight = 0;
    var theQuan = 0;
    var theNoDesign = 0;

    // height width quan nodesign reg size
    $("body").on("change","#width1",function(e){
        e.preventDefault();
        theWidth = $(this).val();
        var serv = $("#serv").val();
        if(serv == 1){
            theTpTarp();
        } else if (serv == 2){
            theTpVinyl();
        }
    });
    $("body").on("change","#height1",function(e){
        e.preventDefault();
        theHeight = $(this).val();
        var serv = $("#serv").val();
        if(serv == 1){
            theTpTarp();
        } else if (serv == 2){
            theTpVinyl();
        }
    });
    $("body").on("keyup","#quan1",function(e){
        theQuan = $(this).val();
        var serv = $("#serv").val();
        if(serv == 1){
            theTpTarp();
        } else if (serv == 2){
            theTpVinyl();
        }
    });
    $("body").on("change","#nodesign1",function(e){
        e.preventDefault();
        var serv = $("#serv").val();
        if(this.checked){
            theNoDesign = "150";
            if(serv == 1){
                theTpTarp();
            } else if (serv == 2){
                theTpVinyl();
            }
        } else {
            theNoDesign = "0";
            if(serv == 1){
                theTpTarp();
            } else if (serv == 2){
                theTpVinyl();
            }
        }
    });
    // height width quan nodesign custom size
    $("body").on("keyup","#width2",function(e){
        // e.preventDefault();
        theWidth = $(this).val();
        var serv = $("#serv").val();
        if(serv == 1){
            theTpTarp();
        } else if (serv == 2){
            theTpVinyl();
        }
    });
    $("body").on("keyup","#height2",function(e){
        // e.preventDefault();
        theHeight = $(this).val();
        var serv = $("#serv").val();
        if(serv == 1){
            theTpTarp();
        } else if (serv == 2){
            theTpVinyl();
        }
    });
    $("body").on("keyup","#quan2",function(e){
        theQuan = $(this).val();
        var serv = $("#serv").val();
        if(serv == 1){
            theTpTarp();
        } else if (serv == 2){
            theTpVinyl();
        }
    });
    $("body").on("change","#nodesign2",function(e){
        e.preventDefault();
        var serv = $("#serv").val();
        if(this.checked){
            theNoDesign = "150";
            if(serv == 1){
                theTpTarp();
            } else if (serv == 2){
                theTpVinyl();
            }
        } else {
            theNoDesign = "0";
            if(serv == 1){
                theTpTarp();
            } else if (serv == 2){
                theTpVinyl();
            }
        }
    });
    // mug
    $("body").on("keyup","#quan3",function(e){
        theQuan = $(this).val();
        theTpMug();
    });
    $("body").on("change","#nodesign3",function(e){
        e.preventDefault();
        if(this.checked){
            theNoDesign = "150";
            theTpMug();
        } else {
            theNoDesign = "0";
            theTpMug();
        }
    });

    // tp
    $("body").on("change","#tp",function(e){
        e.preventDefault();
        $this = $(this);
        if($this.val() == ""){
            $("#dp").val("").trigger("change");
        } else {
            var dp = parseInt($this.val()) / 2;
            $("#dp").val(dp).trigger("change");
        }
        if(event.which >= 37 && event.which <= 40) return;
        // format number
        $(this).val(function(index, value) {
            return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
        });
    });
    // dp
    $("body").on("change","#dp",function(e){
        e.preventDefault();
        $this = $(this);
        if($this.val() === ""){
            
        } else {
            var roundDp = Math.round( parseInt( $this.val() ) );
            $this.val(roundDp);
        }
        if(event.which >= 37 && event.which <= 40) return;
        // format number
        $(this).val(function(index, value) {
            return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
        });
    });
    $("body").on("keyup","#dp",function(e){
        var $this = $(this);
        var tp = $("#tp").val().replace(/,/g, '');
        var dp = $this.val().replace(/,/g, '');
        if(tp == 0 || tp == ""){
            $this.val("");
        } else if ( Math.round(parseInt(tp)/2) > parseInt(dp) ){
            $this.tooltip({
                "placement": 'top',
                "trigger": 'manual',
                "html": true,
                "animation": true,
                "title" : '<i class="fa fa-times fa-lg"></i> Downpayment must be half price of Total Price'
            });
            $this.tooltip('show');
        } else if ( parseInt(tp) < parseInt(dp) ){
            $this.val(tp);
            $this.tooltip('hide');
        } 
    });
    // ass
    $("body").on("change","#ass",function(e){
        e.preventDefault();
        $this = $(this).val();
        searchExpdate($this);
    });
    function theTpMug(){
        if(theQuan === "" || theNoDesign === ""){
            $("#tp").val("");
            $("#dp").val("");
        } else {
            if(theWidth != 0 && theHeight != 0 && theQuan != 0){
                if(theNoDesign == 0){
                    var tp = ( parseInt(theQuan) * 80) + parseInt(theNoDesign);
                    $("#tp").val(tp).trigger("change");
                } else if (theNoDesign == 150) {
                    var tp = ( parseInt(theQuan) * 80) + parseInt(theNoDesign);
                    $("#tp").val(tp).trigger("change");
                } 
            }  else {
                $("#tp").val("");
                $("#dp").val(""); 
            }     
        }
    }
    function theTpVinyl(){
        if(theWidth === "" || theHeight === "" || theQuan === "" || theNoDesign === ""){
            $("#tp").val("");
            $("#dp").val("");
        } else {
            if(theWidth != 0 && theHeight != 0 && theQuan != 0){
                if(theNoDesign == 0){
                    var tp = (( parseInt(theWidth) * parseInt(theHeight) * 100) * parseInt(theQuan) ) + parseInt(theNoDesign);
                    $("#tp").val(tp).trigger("change");
                } else if (theNoDesign == 150) {
                    var tp = (( parseInt(theWidth) * parseInt(theHeight) * 100) * parseInt(theQuan) ) + parseInt(theNoDesign);
                    $("#tp").val(tp).trigger("change");
                } 
            } else {
                $("#tp").val("");
                $("#dp").val(""); 
            }    
        }
    }
    function theTpTarp(){
        if(theWidth === "" || theHeight === "" || theQuan === "" || theNoDesign === ""){
            $("#tp").val("");
            $("#dp").val("");
        } else {
            if(theWidth != 0 && theHeight != 0 && theQuan != 0){
                if(theNoDesign == 0){
                    var tp = (( parseInt(theWidth) * parseInt(theHeight) * 25) * parseInt(theQuan) ) + parseInt(theNoDesign);
                    $("#tp").val(tp).trigger("change");
                } else if (theNoDesign == 150) {
                    var tp = (( parseInt(theWidth) * parseInt(theHeight) * 25) * parseInt(theQuan) ) + parseInt(theNoDesign);
                    $("#tp").val(tp).trigger("change");
                } 
            } else {
                $("#tp").val("");
                $("#dp").val(""); 
            }     
        }
    }
    function searchExpdate(branchCode){
        $.ajax({
            url: "files/action/idfinder.php",
            type: "POST",
            dataType: "JSON",
            data: {"data": 1, "module": "searchExpdate", "id": branchCode},
            success: function(res){
                var theYear = new Date;
                theYear = theYear.getFullYear();
                switch (res.success) {
                    case false:
                        alertContainer
                            .empty()
                            .append('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fas fa-calendar-check fa-lg"></i> '+ res.messages +' </div>')
                            .fadeTo(2000, 500)
                            .slideUp(500, function(){
                                alertContainer.slideUp(500);
                            })
                            .focus();
                        $('#expdate').data("DateTimePicker").options({
                            minDate: moment(),
                            useCurrent: true,
                            disabledDates: [
                                new Date(theYear, 12 - 1, 25),
                                new Date(theYear, 12 - 1, 30),
                                new Date(theYear, 12 - 1, 31),
                                new Date(theYear, 1 - 1, 1),
                                new Date(theYear, 4 - 1, 9),
                                new Date(theYear, 5 - 1, 1),
                                new Date(theYear, 6 - 1, 12),
                                new Date(theYear, 11 - 1, 1),
                                new Date(theYear, 11 - 1, 2),
                                new Date(theYear, 8 - 1, 26),
                                new Date(theYear, 8 - 1, 21),
                                new Date(theYear, 11 - 1, 30)
                            ]
                        });
                        $('#expdate').val(moment().format('L LT'));
                        break;
                    case true:
                        $('#expdate').data("DateTimePicker").options({
                            minDate: moment(res.messages),
                            useCurrent: true,
                            disabledDates: [
                                new Date(theYear, 12 - 1, 25),
                                new Date(theYear, 12 - 1, 30),
                                new Date(theYear, 12 - 1, 31),
                                new Date(theYear, 1 - 1, 1),
                                new Date(theYear, 4 - 1, 9),
                                new Date(theYear, 5 - 1, 1),
                                new Date(theYear, 6 - 1, 12),
                                new Date(theYear, 11 - 1, 1),
                                new Date(theYear, 11 - 1, 2),
                                new Date(theYear, 8 - 1, 26),
                                new Date(theYear, 8 - 1, 21),
                                new Date(theYear, 11 - 1, 30)
                            ]
                        });
                        $('#expdate').val(moment(res.messages).format('L LT'));
                        break;
                    default:
                        alert(res);
                        break;
                }
            }
        });
    }
});