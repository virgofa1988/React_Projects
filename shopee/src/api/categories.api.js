import http from 'src/utils/http'

const URL = 'categories'
const categoriesAPI = {
  getCategories() {
    return http.get(URL)
  }
}

export default categoriesAPI
