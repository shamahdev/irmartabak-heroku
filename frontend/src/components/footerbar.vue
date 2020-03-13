<template>
  <footer>
    <div class="container-fluid row m-0 p-0">
      <div class="col-md-3 p-0 bg-dark py-5 px-5">
        <ul class="p-0 footer-list bg-secondary lead3 text-light">
          <router-link to="/location">Outlet Location</router-link>
          <router-link to="/contact">Contact Us</router-link>
          <router-link to="/aboutus">About Developer</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/disclaimer">Disclaimer</router-link>
          <router-link to="/privacypolicy">Privacy Policy</router-link>
        </ul>
      </div>
      <div class="col-md-5 p-0 bg-primary">
        <div class="px-5 pt-5 pb-md-5 pb-0">
          <h4 class="lead3 mb-3">Kenapa harus Insinyur Martabak?</h4>
          <ul class="lead2">
            <li>Bahan baku halal dan kualitas nomor 1</li>
            <li>Selalu mengutamakan kebersihan</li>
            <li>
              Adonan Martabak manis yang lembut, tanpa ragi dan pemanis buatan
            </li>
            <li>
              Martabak telur dengan rasa yang gurih di dalam dan garing di luar
            </li>
            <li>
              Dimasak sepenuh hati oleh para insinyur professional dalam bidang
              martabak
            </li>
            <li>sekali coba tak akan pindah ke lain hati :)</li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 p-0 bg-primary">
        <div class="p-5">
          <h4 class="lead3 mb-3">Hubungi Kami</h4>
          <ul class="p-0 lead2 social-footer" style="list-style: none;">
            <li class="mdi mdi-email">ir.martabak@gmail.com</li>
            <li class="mdi mdi-phone">0895-0410-6666</li>
            <li class="mdi mdi-instagram">@insinyur_martabak</li>
            <li class="mdi mdi-facebook-box">Insinyur Martabak</li>
            <li class="mdi mdi-twitter">@insinyur_mrtbk</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerbar"
};
</script>
