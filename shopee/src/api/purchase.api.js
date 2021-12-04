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
  },
  //Update Purchase
  updatePurchase(data) {
    return http.put(`${URL}/update-purchase`, data)
  },
  //Delete Purchase
  deletePurchase(data) {
    return http.delete(`${URL}`, data)
  },
  //Proceed Checkout Purchasing
  buyPurchase(data) {
    return http.post(`${URL}/buy-products`, data)
  }
}
export default purchaseAPI
