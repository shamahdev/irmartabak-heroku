<template>
  <div class="contact">
    <section id="contactus" class="py-3 py-md-5">
      <div class="container-fluid row p-0 m-0 mx-auto my-5">
        <div class="col-10 mx-auto my-auto p-0 text-center">
          <img
            src="/static/img/icon.png"
            class="img-fluid my-2"
            width="140px"
            alt=""
          />
          <p class="lead m-0 mt-5">ERROR 404 NOT FOUND</p>
          <p class="display-4 mb-5">Maaf Halaman ini tidak tersedia!</p>
          <router-link exact to="/" class="btn btn-primary btn-lg px-5 py-3 mt-3 mb-5">Kembali ke Home</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>
