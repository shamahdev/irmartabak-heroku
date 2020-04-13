<template>
  <div class="contact">
    <section id="contactus" class="py-3 py-md-5">
      <div class="container-fluid row p-0 m-0 mx-auto my-5">
        <div class="col-10 mx-auto my-auto p-0 text-center">
          <img
            src="/static/img/logo.png"
            class="img-fluid my-2"
            width="200px"
            alt=""
          />
          <p class="display-4 my-5">Berikan kami kritik dan saran!</p>
        </div>
      </div>
      <div class="container-fluid row p-0 m-0 mx-auto">
        <div class="col-8 col-md-6 mx-auto p-0">
          <form @submit.prevent="sendEmail">
            <div class="form-group">
              <label class="lead3" for="formGroupExampleInput">Nama</label>
              <input
                required
                name="user_name"
                type="text"
                class="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="Nama Kamu"
              />
            </div>
            <div class="form-group">
              <label class="lead3" for="formGroupExampleInput">Email</label>
              <input
                required
                name="user_email"
                type="email"
                class="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="namakamu@email.com"
              />
            </div>
            <div class="form-group">
              <label class="lead3" for="exampleFormControlTextarea1"
                >Masukan</label
              >
              <textarea
                required
                name="message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              class="btn btn-primary btn-lg px-5 py-3 mt-3 mb-5"
            >Kirim Email</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Contact",
};
</script>
