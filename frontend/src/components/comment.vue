<template>
  <div data-aos="zoom-in" class="card p-0 border-none">
    <img class="card-img-top img-fluid fit-cover" :src="img" :alt="comment" />
    <div class="card-img-overlay2 row m-0 my-auto">
      <div class="col-4 mx-auto my-auto">
        <img :src="avatar" :alt="name" class="img-fluid pb-2 round" />
      </div>
      <div class="col-8 my-auto mx-auto">
        <p class="lead3 text-primary mb-1">{{ name }}</p>
        <p>{{ comment }}</p>
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
