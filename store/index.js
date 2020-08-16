import Cookie from 'js-cookie'
import localStorage from '../services/localStorage'
import { tokenHandler } from '../services/tokenService'

export const state = () => ({
  loadedPosts: [],
  token: null,
})

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts = [...state.loadedPosts, post]
  },
  editPost(state, editedPost) {
    state.loadedPosts = state.loadedPosts.map((post) =>
      post.id === editedPost.id ? { ...editedPost } : post
    )
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
}
export const actions = {
  nuxtServerInit(vuexContext, context) {
    return this.$axios
      .get('/posts.json')
      .then((res) => {
        const posts = []
        for (const key in res.data) {
          posts.push({ ...res.data[key], id: key })
        }
        vuexContext.commit('setPosts', posts)
      })
      .catch((e) => context.error(e))
  },
  addPost(vuexContext, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date(),
    }
    return this.$axios
      .post(
        'https://nuxt-app-d41ed.firebaseio.com/posts.json?auth=' +
          vuexContext.state.token,
        createdPost
      )
      .then((result) => {
        vuexContext.commit('addPost', {
          ...createdPost,
          id: result.data.name,
        })
      })
  },
  editPost(vuexContext, editedPost) {
    const edited = {
      ...editedPost,
      updatedDate: new Date(),
    }
    return this.$axios
      .put(
        'https://nuxt-app-d41ed.firebaseio.com/posts/' +
          editedPost.id +
          '.json?auth=' +
          vuexContext.state.token,
        edited
      )
      .then((result) => {
        vuexContext.commit('editPost', edited)
      })
  },
  login(vuexContext, body) {
    return this.$authService
      .login(body)
      .then(({ data }) => {
        const token = data.idToken
        const expirationDate =
          new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
        vuexContext.commit('setToken', token)

        localStorage.saveToken(token)
        localStorage.saveTokenExpiration(expirationDate)
        Cookie.set('jwt', token)
        Cookie.set('expirationDate', expirationDate)
      })
      .catch((error) => {
        if (error.response.status === 400) {
          throw new Error('Invalid Credentials')
        }
      })
  },
  registr(vuexContext, body) {
    return this.$authService
      .registr(body)
      .then(({ data }) => {
        const token = data.idToken
        const expirationDate =
          new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
        vuexContext.commit('setToken', token)
        localStorage.saveToken(token)
        localStorage.saveTokenExpiration(expirationDate)
        Cookie.set('jwt', token)
        Cookie.set('expirationDate', expirationDate)
      })
      .catch((e) => console.log(e))
  },
  logout({ commit }) {
    commit('clearToken')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    if (process.client) {
      localStorage.clearToken()
    }
  },

  initAuth({ commit, getters, dispatch }, req) {
    const { token, expirationDate } = tokenHandler(req)
    const isValidToken = token && new Date().getTime() < +expirationDate
    if (!isValidToken) {
      dispatch('logout')
      return false
    }

    if (isValidToken && !getters.isAuthenticated) {
      commit('setToken', token)
    }
  },
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
  isAuthenticated(state) {
    return state.token != null
  },
}
