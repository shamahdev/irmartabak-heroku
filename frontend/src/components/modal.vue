<template>
  <div
    class="modal fade bd-example-modal-lg"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="shadow-sm modal-content bg-white pt-3 px-3 pb-0">
        <div class="modal-header">
          <p class="lead3 modal-title">
            {{ title }}
          </p>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
<<<<<<< HEAD
        <slot class="modal-body border-none">
        </slot>
=======
        <slot class="modal-body border-none"> </slot>
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    id: String,
    title: String
  }
};
</script>
