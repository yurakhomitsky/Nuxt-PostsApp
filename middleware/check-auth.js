// eslint-disable-next-line no-unused-vars
export default function checkAuth(context) {
  context.store.dispatch('initAuth', context.req)
}
