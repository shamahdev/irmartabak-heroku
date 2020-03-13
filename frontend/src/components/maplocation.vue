<template>
  <div class="map">
    <section id="map">
      <div class="container-fluid row p-0 m-0">
        <div class="col-md-6 col-sm-12 p-0 my-auto">
          <h1 class="text-center display-4 my-3">Temukan Kami Di</h1>
          <div class="col-lg-11 col-md-12 col-sm-12 float-right p-0">
            <div class="map-point">
              <div
                class="container bg-light"
                @click="
                  set_active(0);
                  map_embed =
                    '!1m18!1m12!1m3!1d15842.932382044912!2d107.64236086977539!3d-6.922476099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e12f13b5c7%3A0x345f76036dfa4d45!2sIr.%20Martabak(Insinyur%20Martabak)!5e0!3m2!1sid!2sid!4v1583127885422!5m2!1sid!2sid';
                "
                v-bind:class="{ active: map_active[0] }"
              >
                <p class="lead3 mb-2">Kiaracondong</p>
                <p>Jl. Babakan Sari no 115 Kiaracondong, Bandung</p>
                <p class="lead3 float-right bg-white px-3 py-2">
                  Buka 14.00 - 23.00
                </p>
              </div>
              <div
                class="container bg-light"
                @click="
                  set_active(1);
                  map_embed =
                    '!1m18!1m12!1m3!1d126744.20115044081!2d107.50106452753097!3d-6.919712449868398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9c9deb18173%3A0xa322ce9752833d6e!2sINSINYUR%20MARTABAK%20(Cab.%20Cibaduyut)Tci!5e0!3m2!1sid!2sid!4v1583329833260!5m2!1sid!2sid';
                "
                v-bind:class="{ active: map_active[1] }"
              >
                <p class="lead3 mb-2">Cibaduyut</p>
                <p>Jl. Terusan Cibaduyut no 24</p>
                <p class="lead3 float-right bg-white px-3 py-2">
                  Buka 14.00 - 23.00
                </p>
              </div>
              <div
                class="container bg-light"
                @click="
                  set_active(2);
                  map_embed =
                    '!1m18!1m12!1m3!1d3960.7552930782185!2d107.56582911477288!3d-6.919830795000185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e54725725d71%3A0x4acc64799d73c5a4!2sInsinyur%20Martabak%20(%20Cab.%20Cijerah%20)!5e0!3m2!1sid!2sid!4v1583633863749!5m2!1sid!2sid';
                "
                v-bind:class="{ active: map_active[2] }"
              >
                <p class="lead3 mb-2">Cijerah</p>
                <p>Jl. Melong Asih no 45, Cijerah</p>
                <p class="lead3 float-right bg-white px-3 py-2">
                  Buka 14.00 - 23.00
                </p>
              </div>
              <div
                class="container bg-light"
                @click="
                  set_active(3);
                  map_embed =
                    '!1m18!1m12!1m3!1d63372.259363445395!2d107.56934759335452!3d-6.918529420231828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7f72be3d75b%3A0x48e71cca1384341d!2sGrabkitchen%20Tubagus%20Ismail!5e0!3m2!1sid!2sid!4v1583642863673!5m2!1sid!2sid';
                "
                v-bind:class="{ active: map_active[3] }"
              >
                <p class="lead3 mb-2">Grab Kitchen (GrabFood only)</p>
                <p>Grab Kitchen, Jl. Tubagus Ismail Raya no 24</p>
                <p class="lead3 float-right bg-white px-3 py-2">
                  Buka 14.00 - 23.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0 my-auto inner-shadow-lg">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              :src="'https://www.google.com/maps/embed?pb=' + map_embed"
              frameborder="0"
              style="border:0; position:relative; height:90vh"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "maplocation",
  data() {
    return {
      map_active: [true, false, false, false],
      map_embed:
        "!1m18!1m12!1m3!1d15842.932382044912!2d107.64236086977539!3d-6.922476099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e12f13b5c7%3A0x345f76036dfa4d45!2sIr.%20Martabak(Insinyur%20Martabak)!5e0!3m2!1sid!2sid!4v1583127885422!5m2!1sid!2sid"
    };
  },
  methods: {
    set_active(num) {
      var i,
        n = this.map_active.length;
      for (i = 0; i < n; i++) {
        this.map_active[i] = false;
      }
      //Set Active
      this.map_active[num] = true;
    }
  }
};
</script>
