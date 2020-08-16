// eslint-disable-next-line no-unused-vars
export default function auth(context) {
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
