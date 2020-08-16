import axios from 'axios';
<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
      </p>

      <ul>
        <li v-for="(error, index) in errors" :key="index" class="error">
          {{ error }}
        </li>
      </ul>

      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput v-model="password" type="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px;"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
      errors: [],
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.errors = []
        if (!this.isLogin) {
          await this.$store.dispatch('registr', {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          })
        } else {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          })
        }
        this.$router.push('/admin')
      } catch (error) {
        this.errors.push(error)
      }
    },

    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
  },
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
.error {
  color: red;
}
</style>
