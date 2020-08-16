<template>
  <section class="posts">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :preview-text="post.previewText"
      :thumbnail="post.thumbnail"
    />
  </section>
</template>
<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.posts {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
}
</style>
