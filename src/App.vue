<template>
  <div id="app">
    <body>
      <ModalBootstrap class="open-it">
        <template v-slot:modalHeader>
         <div class="modal-header">
        <h5 class="modal-title">Me cago en su puta madre</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>


      </template>
      <template v-slot:modalBody>
       <div class="modal-body">
        ...
      </div>
      </template>
      <template v-slot:modalFooter>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Understood</button> -->
      </div>
       </template>

      </ModalBootstrap>
    </body>
  </div>
</template>

<script type="text/javascript" src="../src/Scripts/app.js"></script>
<style src="../src/Styles/CSS/app.css" scoped></style>
