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
    <slide v-bind:key="i" v-for="i in forin">
      <div class="container-fluid row p-0 m-0">
        <div class="col-md-6 p-4 p-m-0 my-auto">
          <div
            class="jumbotron-fluid bg-white m-3 m-md-5 pr-0 pr-md-5 m-md-0 ml-0 ml-md-5 pl-0 pl-md-5"
          >
            <p class="lead">{{ name }}</p>
            <div>
              <star-rating
                :rating="rating"
                :star-style="starStyle"
              ></star-rating>
            </div>
            <h1 class="display-3 mb-5 price">{{ "Rp " + price }}</h1>
            <p class="lead">
              <button
                class="btn btn-primary btn-lg px-5 py-3 mt-3 mb-5"
                data-toggle="modal"
                :data-target="target"
              >
                Pesan Sekarang
              </button>
            </p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-0">
          <img class="martabak2" :src="img" :alt="name" />
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
      starStyle: {
        fullStarColor: "#f1c420",
        starWidth: 30,
        starHeight: 30
      }
    };
  },
  props: {
    forin: Number,
    name: String,
    img: String,
    price: Number,
    rating: Number,
    target: String
  }
};
</script>
