<template>
  <div id="footer">
    <div class="container-fluid bg-primary row m-0 p-0 mt-auto">
      <div class="col-md-3 p-0 bg-dark p-4">
        <ul class="p-0 footer-list bg-secondary lead3 text-light">
          <router-link to="/location">Outlet Location</router-link>
          <router-link to="/contact">Contact Us</router-link>
          <router-link to="/dev">About Developer</router-link>
          <router-link to="/disclaimer">Disclaimer</router-link>
          <router-link to="/privacypolicy">Privacy Policy</router-link>
        </ul>
      </div>
      <div class="col-md-5 m-auto p-4">
          <h4 class="lead3 mb-3">Kenapa harus Insinyur Martabak?</h4>
          <ul>
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
      <div class="col-md-4 m-auto p-4">
          <h4 class="lead3 mb-3">Hubungi Kami</h4>
          <ul class="p-0 social-footer" style="list-style: none;">
            <li class="mdi mdi-email">ir.martabak@gmail.com</li>
            <li><i class="fab fa-whatsapp mr-2"></i>0895-0410-6666</li>
            <li><i class="fab fa-instagram mr-2"></i>@insinyur_martabak</li>
            <li><i class="fab fa-facebook-f mr-2"></i>Insinyur Martabak</li>
            <li><i class="fab fa-twitter mr-2"></i>@insinyur_mrtbk</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerbar"
};
</script>
