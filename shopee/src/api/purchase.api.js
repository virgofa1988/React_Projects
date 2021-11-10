import { purchaseStatus } from 'src/constants/status'
import http from 'src/utils/http'

const URL = 'purchases'
const purchaseAPI = {
  //AddToCart API
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  //GetProductInCart API
  getProductInCart() {
    return http.get(`${URL}`, {
      //Define Config Params. axios.get(url,{params:{}})
      params: {
        status: purchaseStatus.inCart
      }
    })
  }
}
export default purchaseAPI
