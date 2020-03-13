<template>
  <div class="Menu">
    <section id="menuus" class="py-3 py-md-5">
      <div class="row m-0 px-2 px-md-5 mx-2 mx-md-5">
        <div class="col-md-4 p-0 float-left">
          <div class="form-group">
            <label class="lead3" for="search">Cari martabak</label>
            <input
              required
              type="text"
              class="mdi form-control form-control-lg"
              id="search"
              placeholder="Martabak Manis/Asin. . ."
            />
          </div>
        </div>
        <div class="col-md-5 p-0"></div>
        <div class="col-md-3 p-0">
          <label class="lead3" for="orderby">Urutkan berdasarkan</label>
          <div class="row m-0 p-0">
            <div class="col-6 p-0">
              <select class="form-control form-control-lg" id="orderby">
                <option>Nama</option>
                <option>Harga</option>
                <option>Tipe</option>
              </select>
            </div>
            <div class="col-6 p-0">
              <select class="form-control form-control-lg" id="orderby">
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-0 px-2 px-md-5 mx-0 mx-md-5 mb-5">
        <div class="col-6 col-md-4 p-0 my-4" v-bind:key="i" v-for="i in list">
          <menucard
            :price="15000"
            name="Martabak Sapi"
            :rating="4"
            img="static/img/martabak.jpg"
            slug="martabak-super-sapi-mozarella"
          />
        </div>
        <div class="add-list col-6 col-md-4 p-0 my-4 my-auto h-100">
          <div class="card p-0 py-3 border-none" @click="list += 3">
            <div class="mx-auto my-auto text-center">
              <i class="mdi mdi-plus-box-multiple" style="font-size: 5rem"></i>
              <p class="lead3 mb-0 px-5">
                Tekan untuk menampilkan lebih banyak menu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid row p-0 m-0 mx-auto my-5">
        <div class="col-10 mx-auto my-auto p-0 text-center">
          <img
            src="static/img/logo.png"
            class="img-fluid my-2"
            width="200px"
            alt=""
          />
          <p class="display-4 my-5">
            Datangi tempat kami untuk mengetahui menu lainnya!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Menu",
  data() {
    return {
      list: 5
    };
  },
  components: {
    menucard: () => import("../components/menucard.vue")
  }
};
</script>
