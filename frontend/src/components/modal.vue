<template>
  <div
    class="modal fade bd-example-modal-lg"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="shadow-sm modal-content bg-white pt-3 px-3 pb-0">
        <div class="modal-header">
          <h5 class="display-5 modal-title" id="exampleModalLongTitle">
            {{ title }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="mdi mdi-close-thick"></i>
          </button>
        </div>
        <div class="modal-body border-none">
          <slot></slot>
        </div>
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
