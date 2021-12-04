import { LocalStorage } from 'src/constants/localStorage'
import axios from 'axios'
class Http {
  constructor() {
    //Read more instance on Axios. It's like a default data
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API || 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      heades: {
        'Content-Type': 'application/json'
      }
    })
    //Interceptors || midleware handle response's payload and request's payload before reach FE or BE
    this.instance.interceptors.response.use(
      response => {
        const result = { ...response.data, status: response.status }
        return result
      },
      ({ response }) => {
        console.log('Interceptors', response)
        const result = { ...response.data, status: response.status }
        return Promise.reject(result)
      }
    )

    this.instance.interceptors.request.use(
      config => {
        const accessToken = localStorage.getItem(LocalStorage.accessToken)
        if (accessToken) {
          config.headers.authorization = accessToken
        }
        return config
      },
      ({ response }) => {
        return Promise.reject(response)
      }
    )
  }
  //restAPI
  get(url, config = null) {
    return this.instance.get(url, config)
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config)
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config)
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, { data, ...config })
  }
}

const http = new Http()
export default http
