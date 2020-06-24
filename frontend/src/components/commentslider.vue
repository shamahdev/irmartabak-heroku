<template>
<<<<<<< HEAD
  <div id="commentslider" data-aos="fade-up" class="container-fluid row p-0 m-0 mx-auto">
=======
  <div
    id="commentslider"
    data-aos="fade-up"
    class="container-fluid row p-0 m-0 mx-auto"
  >
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
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
<<<<<<< HEAD
        <slide>
          <comment
            img="/static/img/stand.jpg"
            avatar="/static/img/sarie.png"
            name="Sarie Maulida"
            :rating=4
            comment="Sepertinya juara di martabak manisnya, Toping nya banyak martabaknya tebal untuk martabak manis aq kasih nilai 9/10 manisnya g enek sih pas.. Untuk martabak asinnya kebetulan beli yg special cuma 'B' aja sih g begitu wah aq kasih nilai 6/10"
          />
        </slide>
        <slide>
          <comment
            img="/static/img/ekap.png"
            avatar="/static/img/eka.png"
            name="Lutfi Eka"
            :rating=4.5
            comment="Buat martabak manisnya jg lumayan mahal. yg ukuran kecil itu 17rb (untuk sndiri atau brdua) tp sebanding sm rasanya. enak dan bukan pake coklat yg murahan."
          />
        </slide>
        <slide>
          <comment
            img="/static/img/indrip.jpg"
            avatar="/static/img/indrie.png"
            name="Yoriza Indrie"
            :rating=5
            comment="Pengalaman beli via grabfood, harga terjangkau, martabak asin lumayan enak dan martabak manis enak jg. Rasa relatif enak."
          />
        </slide>
        <slide>
          <comment
            img="/static/img/magzp.jpg"
            avatar="/static/img/magz.png"
            name="Riefs Magz"
            :rating=4
            comment="Mantap harga gak terlalu mahal kaya martabak sebelah rasanya enak Top pokonya Pegawainya unik ada pake helm kaya pekerja proyek Pokonya yg belum nyoba coba deh Rekomendasi banget."
=======
        <slide :key="comment.id" v-for="comment in komentardata">
          <comment
            img="/static/img/stand.jpg"
            :avatar="comment.image"
            :name="comment.nama"
            :rating="comment.rating"
            :comment="comment.komentar"
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentslider",
<<<<<<< HEAD
  components: {
    comment: () => import("../components/comment.vue"),
=======
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
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
  }
};
</script>
