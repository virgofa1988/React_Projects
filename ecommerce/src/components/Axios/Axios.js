import React from 'react'
import axios from 'axios'

//Get data
axios({
  method: 'get',
  url: 'https://reqres.in/api/users?page=2'
})
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })

//Post with alias
// axios
//   .post(
//     'https://reqres.in/api/users',
//     {
//       name: 'Nguyen Anh Tuan'
//     },
//     {
//       headers: {
//         'Content-Type': 'applicatin/json',
//         token: '121212'
//       }
//     }
//   )
//   .then(res => {
//     console.log('Successful', res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// create Instance
// const instance = axios.create({
//   baseURL: 'https://reqres.in/api/',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'applicatin/json',
//     token: '121212instance'
//   }
// })

// instance
//   .post('users', { name: 'Nguyen Anh Tuan Instance' })
//   .then(res => {
//     console.log('Successful - Instance', res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

//Class of instance

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://reqres.in/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'applicatin/json',
        token: '121212instance'
      }
    })
    //Interceptor // change the response data or config data before response to Front-end
    this.instance.interceptors.response.use(
      response => {
        const result = { data: response.data, status: response.status }
        return result
      },
      error => {
        const result = { data: error.response.data, status: error.response.status }
        return Promise.reject(result)
      }
    )
    //Interceptor // change the request data or config data before request to End-end
    this.instance.interceptors.request.use(
      config => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
          config.headers.authorization = accessToken
        }
        return config
      },
      err => {
        return Promise.reject(err.response)
      }
    )
  }
}
const http = new Http().instance
http
  .post('users', { name: 'Nguyen Anh Tuan class' })
  .then(res => {
    console.log('Successful - class', res)
  })
  .catch(err => {
    console.log(err)
  })

export default function Axios() {
  return <div>Axios</div>
}

http.get()
