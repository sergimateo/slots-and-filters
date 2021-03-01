<template>
  <div class="hello">
  
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <slot name="modalHeader"></slot>
      <slot name="modalBody"></slot>
      <slot name="modalFooter"></slot>
    </div>
  </div>
</div>
  </div>
</template>

<script type="text/javascript" src="@/Scripts/modalBootstrap.js"></script>
<style src="@/Styles/CSS/modal-bootstrap.css"></style>
