import http from 'src/utils/http'

const URL = 'products'
const productsAPI = {
  getProductsAPI(config) {
    return http.get(URL, config)
  },
  getProductDetailAPI(id) {
    return http.get(`${URL}/${id}`)
  }
}

export default productsAPI
