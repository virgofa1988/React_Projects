export const path = {
  home: '/',
  login: '/login',
  user: '/user',
  // Getter Method in Object Programming, profile, purchase and password are property of object
  get profile() {
    return this.user + '/profile'
  },
  get purchase() {
    return this.user + '/purchase'
  },
  get password() {
    return this.user + '/password'
  },
  register: '/register',
  products: '/product',
  cart: '/cart',
  productDetail: '/product/:idProduct',
  notFound: '*'
}
