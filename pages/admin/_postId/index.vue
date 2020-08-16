<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmit" />
    </section>
  </div>
</template>
<script>
export default {
  middleware: ['check-auth', 'auth'],
  layout: 'admin',
  async asyncData(context) {
    try {
      const response = await context.$axios.get(
        '/posts/' + context.params.postId + '.json'
      )
      return {
        loadedPost: { ...response.data, id: context.params.postId },
      }
    } catch (e) {
      context.error({
        statusCOde: 404,
        message: 'Unable to fetch post',
      })
    }
  },
  methods: {
    async onSubmit(post) {
      // eslint-disable-next-line no-unused-vars
      await this.$store.dispatch('editPost', post)
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
