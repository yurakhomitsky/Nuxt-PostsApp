<template>
  <section class="post">
    <div class="post__card">
      <div class="post__title">
        <h1>{{ loadedPost.title }}</h1>
      </div>
      <div class="post__details">
        <div class="post__detail">
          Last updated on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post__detail">{{ loadedPost.author }}</div>
      </div>
      <p class="post__content">
        {{ loadedPost.content }}
      </p>
    </div>
    <section class="post__feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com">feedback</a>
      </p>
    </section>
  </section>
</template>
<script>
export default {
  async asyncData(context) {
    try {
      const response = await context.$axios.get(
        '/posts/' + context.params.id + '.json'
      )
      return {
        loadedPost: response.data,
      }
    } catch (e) {
      context.error({
        statusCOde: 404,
        message: 'Unable to fetch post',
      })
    }
  },
}
</script>
<style scoped>
.post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
}
.post__card {
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
}
.post__title {
  margin-bottom: 20px;
}
.post__title h1 {
  text-align: center;
}
.post__details {
  color: grey;
  border-bottom: 1px solid grey;
  padding: 5px 0px;
  margin-bottom: 20px;
}
</style>
