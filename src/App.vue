<template>
  <div id="app">
    <div v-if="showModalBootstrap">
      <ModalBootstrap>
        <template v-slot:modalHeader>
          <div class="modal-header">
            <h5 class="modal-title mx-auto">{{ modalTitle }}</h5>
          </div>
        </template>
        <template v-slot:modalBody>
          <div class="modal-body mx-auto">
            <div class="mx-auto" id="input-box">
              <InputBoxCurrency
                :amountprop="amount"
                @amountHasChangedEvent="amount = $event"
              ></InputBoxCurrency>
            </div>

            <!-- Esto es un test con vue2-filters package -->

            <p class="p-content mt-3">
              Exchange Mercuries
              {{
                amount
                  | mercs | currency("ℳ ", 2, {
                    thousandsSeparator: ",",
                    decimalSeparator: ".",
                  })
              }}
              to Caballés:
              {{
                amount
                  | caballes
                  | currency(" ₵", 3, {
                    symbolOnLeft: false,
                    thousandsSeparator: ".",
                    decimalSeparator: "'",
                  })
              }}.
            </p>
            <!-- Este es el filtro original antes de poner el plugin de vue2filters -->
            <!-- <p class="p-content mt-3">
              Exchange of ℳ {{ mercuries | mercs }} to Caballés is
              {{ mercuries | caballes }} ₵.
            </p> -->
          </div>
        </template>
        <template v-slot:modalFooter>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="toggleModalBootstrap"
            >
              Done
            </button>
          </div>
        </template>
      </ModalBootstrap>
    </div>
    <div v-else @click="toggleModalBootstrap" class="seagull">
      {{ freddieMessage }}
    </div>

    <div></div>
  </div>
</template>

<script type="text/javascript" src="../src/Scripts/app.js"></script>
<style src="../src/Styles/CSS/app.css" scoped></style>
