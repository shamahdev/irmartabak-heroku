<template>
  <carousel
    :autoplay="true"
    :autoplayTimeout="3000"
    :scrollPerPage="false"
    :perPage="1"
    :paginationEnabled="false"
    :navigationEnabled="false"
    :loop="true"
  >
<<<<<<< HEAD
  <slide v-if="loading">
      <div class="container-fluid row p-0 m-0">
        <div class="col-md-5 p-4 p-md-2 p-lg-3 my-auto">
          <div class="jumbotron-fluid bg-white m-3 m-md-0 m-lg-5 pr-0 pr-md-5 pl-0 pl-md-5">
             <p class="skeleton-txt lead mb-0
             ">Martabak Super</p>
            <h1 class="skeleton-txt display-3 mb-5 price">Rp. 30000</h1>
            <div class="mt-3 mb-5">
              <button type="button" class="btn btn-skeleton btn-lg px-5 py-3" disabled>
                Pesan Sekarang
              </button><!--
              --><button type="button" class="btn btn-skeleton btn-lg px-5 py-3" disabled>
=======
    <slide v-if="loading">
      <div class="container-fluid row p-0 m-0">
        <div class="col-md-5 p-4 p-md-2 p-lg-3 my-auto">
          <div
            class="jumbotron-fluid bg-white m-3 m-md-0 m-lg-5 pr-0 pr-md-5 pl-0 pl-md-5"
          >
            <p class="skeleton-txt lead mb-0">
              Martabak Super
            </p>
            <h1 class="skeleton-txt display-3 mb-5 price">Rp. 30000</h1>
            <div class="mt-3 mb-5">
              <button
                type="button"
                class="btn btn-skeleton btn-lg px-5 py-3"
                disabled
              >
                Pesan Sekarang
              </button>
              <button
                type="button"
                class="btn btn-skeleton btn-lg px-5 py-3"
                disabled
              >
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
                Detail
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div class="col-md-7 p-0 skeleton-img">
        </div>
      </div>
    </slide>
    <slide :key="martabak.id" v-for="martabak in martabakhome">
      <div class="container-fluid row p-0 m-0" :key="rating.object_id" v-for="rating in ratingdata">
        <div class="col-md-5 p-4 p-md-2 p-lg-3 my-auto" v-if="rating.object_id == martabak.id">
          <div
            class="container-fluid bg-white m-3 m-md-0 m-lg-5 pr-0 pr-md-5 pl-0 pl-md-5"
          >
            <p class="lead mb-0">{{martabak.name}}</p>
=======
        <div class="col-md-7 p-0 skeleton-img"></div>
      </div>
    </slide>
    <slide :key="martabak.id" v-for="martabak in martabakhome">
      <div
        class="container-fluid row p-0 m-0"
        :key="rating.object_id"
        v-for="rating in ratingdata"
      >
        <div
          class="col-md-5 p-4 p-md-2 p-lg-3 my-auto"
          v-if="rating.object_id == martabak.id"
        >
          <div
            class="container-fluid bg-white m-3 m-md-0 m-lg-5 pr-0 pr-md-5 pl-0 pl-md-5"
          >
            <p class="lead mb-0">{{ martabak.name }}</p>
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
            <div>
              <star-rating
                :rating="parseFloat(rating.average)"
                :read-only="true"
                :increment="0.1"
                :star-size="28"
              ></star-rating>
            </div>
<<<<<<< HEAD
            <h1 class="display-3 mb-5 price">{{ "Rp. " + martabak.price}}</h1>
=======
            <h1 class="display-3 mb-5 price">
              {{ "Rp. " + martabak.lowest_price }}
            </h1>
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
            <div class="mt-3 mb-5">
              <button
                class="btn btn-primary btn-lg px-5 py-3"
                data-toggle="modal"
                :data-target="target"
              >
<<<<<<< HEAD
                Pesan Sekarang
              </button><!--
              --><router-link :to="'/menu/' + martabak.slug" tag="button" class="btn btn-dark btn-lg px-5 py-3">
=======
                Pesan Sekarang</button
              ><!--
              --><router-link
                :to="'/menu/' + martabak.slug"
                tag="button"
                class="btn btn-dark btn-lg px-5 py-3"
              >
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
                Detail
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-7 p-0" v-if="rating.object_id == martabak.id">
          <img class="martabak2" :src="martabak.image" :alt="martabak.name" />
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
export default {
  name: "homeslider",
  data() {
    return {
      martabakhome: [],
      ratingdata: [],
      loading: true,
<<<<<<< HEAD
      errored: false,
=======
      errored: false
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
    };
  },
  created() {
    this.$axios.get("/api/rating/").then(response => {
      this.ratingdata = response.data;
    });
    this.$axios
      .get("/api/martabak/bestseller/")
      .then(response => {
        this.martabakhome = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
<<<<<<< HEAD
      .finally(() => setTimeout(() => this.loading = false, 500))
=======
      .finally(() => setTimeout(() => (this.loading = false), 500));
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
  },
  props: {
    target: String
  }
};
</script>
