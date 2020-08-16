<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  methods: {
    async onSubmitted(postData) {
      await this.$store.dispatch('addPost', postData)
      this.$router.push('/admin')
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>
<style scoped>
.admin-post-page {
}
.update-form {
  width: 80%;
  display: block;
  max-width: 1440px;
  margin: 20px auto;
  background-color: #fafafa;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
</style>
