<template>
  <div class="card p-0 border-none">
    <img class="card-img-top img-fluid fit-cover" :src="img" :alt="comment" />
    <div class="card-img-overlay2 row m-0 my-auto">
      <div class="col-4 mx-auto my-auto">
        <img :src="avatar" :alt="name" class="img-fluid pb-2 shadow-lg round" />
      </div>
      <div class="col-8 my-auto mx-auto">
        <p class="lead1 text-primary mb-1">{{ name }}</p>
        <p>{{ comment }} <b>#insinyur_martabak #ir_martabak_moment</b></p>
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
    avatar: String
  }
};
</script>
