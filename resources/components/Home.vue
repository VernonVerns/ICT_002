<template>
  <section id="login_page">
    <div class="content">
      <h1 class="login-header">ICT-002 Login</h1>
      <div>{{error}}</div>
      <form @submit.prevent="login()">
        <div class="form-group">
          <input type="email" v-model="form.email" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" v-model="form.password" placeholder="Password">
        </div>
        <div class="form-group">
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
        <div class="form-group">
          <button type="submit" class="ict-btn">Login</button>
        </div>
      </form>

      <p class="text-center">Don't have an account? <router-link to="/register">Sign up</router-link>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        error: "",
        form: new Form({
          email: "",
          password: "",
        }),
      };
    },
    methods: {
      login() {
        const form = this.form;

        if (form.email == "") {
          this.error = "Email is required";
          return;
        }

        if (form.password == "") {
          this.error = "Password is required";
          return;
        }

        this.error = "";
        form
          .post("/login")
          .then((response) => {
            let res = response.data;
            if (res.success) {
              window.location.href = "/landing";
            } else {
              this.error = res.message;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
  };
</script>