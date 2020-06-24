<template>
  <div
    id="commentslider"
    data-aos="fade-up"
    class="container-fluid row p-0 m-0 mx-auto"
  >
    <div class="col-md-12 col-sm-12 p-0 mx-auto">
      <carousel
        :autoplay="true"
        :scrollPerPage="false"
        :perPage="1"
        :perPageCustom="[
          [480, 1],
          [768, 2],
          [992, 3]
        ]"
        :navigationEnabled="false"
        :paginationEnabled="false"
        :loop="true"
      >
        <slide :key="comment.id" v-for="comment in komentardata">
          <comment
            img="/static/img/stand.jpg"
            :avatar="comment.image"
            :name="comment.nama"
            :rating="comment.rating"
            :comment="comment.komentar"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentslider",
  data() {
    return {
      komentardata: []
    };
  },
  created() {
    this.$axios
      .get("/api/komentar/")
      .then(response => {
        this.komentardata = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
  },
  components: {
    comment: () => import("../components/comment.vue")
  }
};
</script>
