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
    <slide v-bind:key="martabak.id" v-for="martabak in martabakhome">
      <div class="container-fluid row p-0 m-0">
        <div class="col-md-6 p-sm-4 p-md-2 p-lg-4 my-auto">
          <div
            class="jumbotron-fluid bg-white m-3 m-lg-5 pr-0 pr-md-3 m-md-0 ml-2 ml-lg-5 pl-0 pl-md-5"
          >
            <p class="lead">{{martabak.name}}</p>
            <div>
              <star-rating
                :rating="rating"
                :star-style="starStyle"
              ></star-rating>
            </div>
            <h1 class="display-3 mb-5 price">{{ "Rp " + martabak.price }}</h1>
            <div class="btn-group mt-3 mb-5">
              <button
                class=" btn btn-primary btn-lg px-5 py-3"
                data-toggle="modal"
                :data-target="target"
              >
                Pesan Sekarang
              </button>
              <router-link :to="'/menu/' + martabak.slug" class="my-auto">
              <button
                class="btn btn-dark btn-lg px-5 py-3"
              >
                Detail
              </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0">
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
      rating: 4.6,
      errored: false,
      loading: true,
      starStyle: {
        emptyStarColor: "#111111",
        starWidth: 30,
        starHeight: 30
      }
    };
  },
  mounted () {
    this.$axios
      .get('http://127.0.0.1:8000/api/martabak/bestseller/')
      .then(response => {
        this.martabakhome = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  props: {
    target: String
  }
};
</script>
