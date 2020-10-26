<template>
  <section id="landing_page">
    <div class="content">
      <h1 class="text-center">Welcome To ICT-002</h1>
      <div class="d-flex justify-content-center">
        <h3 class="text-center">{{user != {} ? user.name: ''}}. How can we help you?</h3>
        <button class="btn btn-success ml-3" @click="logout()">Logout</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        user: {},
      };
    },
    methods: {
      logout() {
        axios.post("/logout").then((res) => {
          var data = res.data;
          if (data.success) {
            window.location.href = "/";
          }
        });
      },
      loadUserData() {
        axios.get("/landing/current-user").then((response) => {
          this.user = response.data;
        });
      },
    },
    mounted() {
      this.loadUserData();
    },
  };
</script>

<style>
</style>