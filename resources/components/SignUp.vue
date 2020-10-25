<template>
    <section id="sign_up_page">
        <div class="content">
            <h1 class="login-header">ICT-002 Sign Up</h1>
            <div>{{error}}</div>
            <form @submit.prevent="register()">
                <div class="form-group">
                    <input type="text" v-model="form.name" placeholder="Full Name (e.g. Joe Doe)">
                </div>
                <div class="form-group">
                    <input type="email" v-model="form.email" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="password" v-model="form.password" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password" v-model="form.c_password" placeholder="Confirm Password">
                </div>
                <div class="form-group">
                    <button type="submit" class="ict-btn">Sign up</button>
                </div>

                <p class="text-center">Already have an account? <router-link to="/">Login</router-link></p>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            error: '',
            form: new Form({
                name: '',
                email: '',
                password: '',
                c_password: ''
            })
        }
    },
    methods: {
        register() {
            const form = this.form
            if (form.name == '') {
                this.error = "You have a name, don't you?"
                return
            }

            if (form.email == '') {
                this.error = "Oops, you forgot to put your email"
                return
            }

            if (form.password == '') {
                this.error = "You will need to login later, provide password"
                return
            } else if(form.password.length < 6) {
                this.error = "Password should be at least 6 characters"
                return
            }

            if (form.c_password == '') {
                this.error = "Provide verification password"
                return
            }

            if (form.password !== form.c_password) {
                this.error = "Did you just forget the password you entered above?"
                return
            }
            this.error = ''
            form.post('/register').then((res) => {
                var data = res.data
                if (data.success) {
                    window.location.href = '/landing'
                }
            })
            .catch((err) => console.log(err))
        }
    }
}
</script>