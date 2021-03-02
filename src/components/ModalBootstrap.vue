<template>
  <div class="hello">
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#staticBackdrop"
    >
      Launch converter
    </button> -->

    <div class="modal" id="fuxan" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        
          <div class="modal-content">
            <slot name="modalHeader"></slot>
            <slot name="modalBody"></slot>
            <slot name="modalFooter"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="@/Scripts/modalBootstrap.js"></script>
<style src="@/Styles/CSS/modal-bootstrap.css"></style>
