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
  listProduct: null,
  listProductFeature: null,
  listProductSaleHot: null,
  loading: false
}

export const state = { ...initialState }

const getters = {
  listBanner: state => state.listBanner,
  listProduct: state => state.listProduct,
  loading: state => state.loading,

}

const mutations = {
  SET_LIST_CATE (state, payload) {
    state.listCate = payload
  },

  SET_LIST_BANNER (state, payload) {
    state.listBanner = payload
  },

  SET_LIST_PRODUCT (state, payload) {
    state.listProduct = payload
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

  getListProductByCate ({ commit }, id) {
    return getProductByCate(id).then(res => {
      commit('SET_LIST_PRODUCT', res.data)
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
