<template>
  <div id="app">
    <div v-if="showModalBootstrap">
      <ModalBootstrap class="open-it">
        <template v-slot:modalHeader>
          <div class="modal-header">
            <h5 class="modal-title">Mercuries to Caballés Converter</h5>
          </div>
        </template>
        <template v-slot:modalBody>
          <div class="modal-body mx-auto">
            <div class="mx-auto" style="width: 200px;">
              <input />
            </div>
            <p class="mt-3">
              El cambio de xxx Mercuries es de yy Caballés.
            </p>
          </div>
        </template>
        <template v-slot:modalFooter>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              v-on:click="toggleModalBootstrap"
              data-dismiss="modal"
            >
              Close
            </button>
            <!-- <button type="button" class="btn btn-primary">Understood</button> -->
          </div>
        </template>
      </ModalBootstrap>
    </div>
    <div v-else class="whatever">Pos valens, pos adiós</div>
  </div>
</template>

<script type="text/javascript" src="../src/Scripts/app.js"></script>
<style src="../src/Styles/CSS/app.css" scoped></style>
