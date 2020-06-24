<template>
  <div class="location my-5">
    <maplocation />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Location",
  components: {
    maplocation: () => import("../components/maplocation.vue")
  }
};
</script>
