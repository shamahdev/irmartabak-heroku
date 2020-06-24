<template>
  <div class="card p-0 border-none">
    <img
      class="review-thumb card-img-top img-fluid fit-cover"
      :src="img"
      :alt="comment"
    />
    <div class="card-img-overlay2 row m-0 my-auto p-2">
      <div class="col-4 p-0 mx-auto my-auto">
        <img :src="avatar" :alt="name" class="img-fluid p-3" />
      </div>
      <div class="col-8 p-0 my-auto mx-auto">
        <p class="lead3 text-primary mb-1">{{ name }}</p>
        <star-rating
          :rating="rating"
          :read-only="true"
          :increment="0.5"
          :star-size="20"
          glowColor="black"
        ></star-rating>
        <p class="mt-2 mb-0">{{ comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    name: String,
    comment: String,
    img: String,
    avatar: String,
    rating: Number
  }
};
</script>
