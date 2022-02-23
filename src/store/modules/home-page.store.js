import {
  getCategories,
  getBanners,
  getProductByCate,
  getProductFeature,
  getProductSaleHot
} from '../../services/home-page.service'

const initialState = {
  listCate: null,
  listBanner: null,
  listProductByCate: null,
  listProductFeature: null,
  listProductSaleHot: null
}

export const state = { ...initialState }

const getters = {
  listCate: state => state.listCate,
  listBanner: state => state.listBanner,
  listProductByCate: state => state.listProductByCate,
  loading: state => state.loading,
}

const mutations = {
  SET_LIST_CATE (state, payload) {
    state.listCate = payload
  },

  SET_LIST_BANNER (state, payload) {
    state.listBanner = payload
  },

  SET_LIST_PRODUCT_BY_CATE (state, payload) {
    state.listProductByCate = payload
  },

  SET_LIST_PRODUCT_FEATURE (state, payload) {
    state.listProductFeature = payload
  },

  SET_LIST_PRODUCT_SALE_HOT (state, payload) {
    state.listProductSaleHot = payload
  },
}

const actions = {
  getListCategories ({ commit }) {
    return getCategories().then(res => {
      commit('SET_LIST_CATE', res.data)
    }).catch((err) => {
      return err.response
    })
  },

  getListBanners ({ commit }) {
    return getBanners().then(res => {
      commit('SET_LIST_BANNER', res.data)
    }).catch((err) => {
      return err.response
    })
  },

  getListProductByCate ({ commit }, param={}) {
    return getProductByCate(param).then(res => {
      commit('SET_LIST_PRODUCT_BY_CATE', res.data)
    }).catch((err) => {
      return err.response
    })
  },

  getListProductFeature ({ commit }, param={}) {
    return getProductFeature(param).then(res => {
      commit('SET_LIST_PRODUCT_FEATURE', res.data)
    }).catch((err) => {
      return err.response
    })
  },

  getListProductSaleHot ({ commit }, param={}) {
    return getProductSaleHot(param).then(res => {
      commit('SET_LIST_PRODUCT_SALE_HOT', res.data)
    }).catch((err) => {
      return err.response
    })
  },
}

export default {

  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
