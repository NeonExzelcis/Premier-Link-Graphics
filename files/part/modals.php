<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal_title" aria-hidden="true">
  <div class="container" id="alerthome">
    <div class="row">
      <div class="col-lg-8 col-12 text-center centerdiv">
        <?php
          include_once "alert.php";
        ?>
      </div>
    </div>
  </div>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal_title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="text-light">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>