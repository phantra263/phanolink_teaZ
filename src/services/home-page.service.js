import { ApiService } from './api.service'

const BaseUrl = ''

export function getCategories () {
  return ApiService.get(`${BaseUrl}/categories`).then((resp) => resp.data)
}

export function getBanners () {
  return ApiService.get(`${BaseUrl}/banners`).then((resp) => resp.data)
}

export function getProductByCate (param= {}) {
  return ApiService.get(`${BaseUrl}/products`,param).then((resp) => resp.data)
}

export function getProductFeature (param= {}) {
  return ApiService.get(`${BaseUrl}/products`,param).then((resp) => resp.data)
}

export function getProductSaleHot (param= {}) {
  return ApiService.get(`${BaseUrl}/products`,param).then((resp) => resp.data)
}
