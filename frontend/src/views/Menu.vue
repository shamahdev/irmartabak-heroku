<template>
  <div class="Menu">
    <section id="menuus" class="py-3 py-md-5">
      <div class="row m-0 px-2 px-md-5 mx-2 mx-md-5">
        <div class="col-md-4 p-0 float-left">
          <div class="form-group">
            <label class="lead3" for="search">Cari martabak</label>
            <input
              v-model="searchdata"
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
              <select class="form-control form-control-lg" id="orderby" v-model="orderdata" >
                <option value="name">Nama</option>
                <option value="price">Harga</option>
                <option value="type">Tipe</option>
              </select>
            </div>
            <div class="col-6 p-0">
              <select class="form-control form-control-lg" id="orderby" v-model="orderasc">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-0 px-2 px-md-5 mx-0 mx-md-5 mb-5">
        <div class="col-6 col-md-4 p-0 my-4" v-bind:key="martabak.id" v-for="martabak in search.slice(0,list)">
          <menucard
            :price="martabak.price"
            :name="martabak.name"
            :rating="4.2"
            :img="martabak.image"
            :slug="martabak.slug"
          />
        </div>
        <div class="add-list col-6 col-md-4 p-0 my-4 my-auto h-100" v-if="list < martabakmenu.length">
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
            Kunjungi outlet kami untuk mengetahui menu lainnya!
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
      searchdata: '',
      orderdata: 'name',
      orderasc: 'asc',
      martabakmenu: [],
      list: 5
    };
  },
  computed: {
    search(){
      if(this.orderasc == 'asc'){
        if(this.orderdata == 'name'){
          return this.martabakmenu.filter(m=>{
            return m.name.toLowerCase().includes(this.searchdata.toLowerCase())
          } ).sort((a, b) => (a.name > b.name) - (a.name < b.name))
        }else if(this.orderdata == 'price'){
          return this.martabakmenu.filter(m=>{
            return m.name.toLowerCase().includes(this.searchdata.toLowerCase())
          } ).sort((a, b) => (a.price - b.price))
        }else if(this.orderdata == 'type'){
          return this.martabakmenu.filter(m=>{
            return m.name.toLowerCase().includes(this.searchdata.toLowerCase())
          } ).sort((a, b) => (a.variant > b.variant) - (a.variant < b.variant))
        }
      }else{
        if(this.orderdata == 'name'){
          return this.martabakmenu.filter(m=>{
            return m.name.toLowerCase().includes(this.searchdata.toLowerCase())
          } ).sort((a, b) => (a.name > b.name) - (a.name < b.name)).reverse()
        }else if(this.orderdata == 'price'){
          return this.martabakmenu.filter(m=>{
            return m.name.toLowerCase().includes(this.searchdata.toLowerCase())
          } ).sort((a, b) => (a.price - b.price)).reverse()
        }else if(this.orderdata == 'type'){
          return this.martabakmenu.filter(m=>{
            return m.name.toLowerCase().includes(this.searchdata.toLowerCase())
          } ).sort((a, b) => (a.variant > b.variant) - (a.variant < b.variant)).reverse()
        }
      }
    },
  },
  mounted () {
    this.$axios
      .get('http://127.0.0.1:8000/api/martabak/')
      .then(response => {
        this.martabakmenu = response.data
      })
  },
  components: {
    menucard: () => import("../components/menucard.vue")
  }
};
</script>
