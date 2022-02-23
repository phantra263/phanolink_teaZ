import { ApiService } from './api.service'

const BaseUrl = ''

export function getCategories () {
  return ApiService.get(`${BaseUrl}/categories`).then((resp) => resp.data)
}
