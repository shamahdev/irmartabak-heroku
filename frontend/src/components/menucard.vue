<template>
<<<<<<< HEAD
  <router-link :to="'/menu/' + slug" exact>
    <div class="card card--menu mx-2">
      <div class="image-card">
      <img
        class="thumb card-img-top img-fluid fit-cover"
        v-bind:src="img"
        :alt="slug"
      />
=======
  <router-link :to="'/menu/' + slug + '/'" exact>
    <div class="card card--menu mx-2">
      <div class="image-card">
        <img
          class="thumb card-img-top img-fluid fit-cover"
          v-bind:src="img"
          :alt="slug"
        />
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
      </div>
      <div class="card-img-overlay">
        <p class="mb-0">{{ name }}</p>
        <div class="text-dark">
<<<<<<< HEAD
          <star-rating 
            :rating="rating" 
=======
          <star-rating
            :rating="rating"
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
            :read-only="true"
            :increment="0.1"
            :star-size="20"
            active-color="#111111"
            glowColor="#FFD645"
          ></star-rating>
        </div>
        <h1 class="display-4 lowest_price">{{ "Rp. " + lowest_price }}</h1>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "menucard",
  props: {
    rating: Number,
    name: String,
    lowest_price: Number,
    slug: String,
    img: String
  }
};
</script>
