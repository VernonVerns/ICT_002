<template>
    <section id="landing_page">
        <div class="content">
            <h1 class="text-center">Welcome To ICT-002</h1>
            <h3 class="text-center">John Doe</h3>
        </div>
        <button class="btn btn-success" @click="logout()">Logout</button>
    </section>
</template>

<script>
export default {
    methods: {
        logout() {
            axios.post('/logout').then((res) => {
                var data = res.data
                if (data.success) {
                    window.location.href = '/'
                }
            })
        }
    }
}
</script>

<style>

</style>