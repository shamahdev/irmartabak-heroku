<template>
  <div class="Menu">
    <section id="news" class="py-3 py-md-5">
      <div class="position-relative container-fluid row m-0 mx-auto">
        <div class="col-md-5 p-0 ml-auto">
          <div
            class="sticky-top article p-3"
            style="z-index: 0"
            :key="artikel.id"
            v-for="artikel in artikeldata"
          >
            <headlinechecker v-if="artikel.headline">
              <img
                :src="artikel.image"
                class="img-fluid w-100 thumb2 fit-cover"
                alt=""
              />
              <p class="p-3 text-muted lead3 text-right">
                {{ artikel.tanggal }}
              </p>
              <p class="display-4 mt-2">
                {{ artikel.judul }}
              </p>
              <div v-html="artikel.konten"></div>
              <a :href="artikel.link" class="btn btn-primary btn-lg px-5 py-3"
                >Baca Selengkapnya</a
              >
            </headlinechecker>
          </div>
        </div>
        <div class="col-md-5 row p-0 mr-auto">
          <div
            data-aos="zoom-in"
            :key="artikel.id"
            v-for="artikel in artikeldata"
            class="col-6 col-md-12 col-lg-6 p-1"
          >
            <headlinechecker v-if="!artikel.headline">
              <div class="article p-3">
                <img
                  :src="artikel.image"
                  class="img-fluid w-100 thumb3 fit-cover"
                  alt=""
                />
                <p class="d-none d-md-block p-2 text-muted lead3 text-right mb-0">
                  {{ artikel.tanggal }}
                </p>
                <p class="lead pt-2">{{ artikel.judul }}</p>
                <p class="d-none d-md-block" v-html="artikel.konten"></p>
                <a :href="artikel.link" class="btn btn-primary btn-block py-3"
                  >Baca Selengkapnya</a
                >
              </div>
            </headlinechecker>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      artikeldata: []
    };
  },
  created() {
    this.$axios
      .get("/api/artikel/")
      .then(response => {
        this.artikeldata = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
  }
};
</script>
