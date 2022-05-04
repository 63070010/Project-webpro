import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegiSter from '../views/Register-Ebook.vue'
import LogIn from '../views/Login-Ebook.vue'
import Profile_user from '../views/Profile_user.vue'
import DetailsBook from '../views/DetailsBook.vue'
import Cart_Book from '../views/Cart_Book.vue'
import DetailPromotion from '../views/DetailPromotion.vue'
import AdminPage from '../views/AdminPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import ReadBook from '../views/ReadBook.vue'
import WriteBook from '../views/WriteBook.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    meta: { guess: true },
    component: RegiSter
  }
  ,
  {
    path: '/login',
    name: 'login',
    meta: { guess: true },
    component: LogIn
  },
  {
    path: '/Profile_user/:id',
    name: 'Profile_user',
    meta: { login: true },
    component: Profile_user
  },
  {
    path: '/DetailsBook/:id',
    name: 'DetailsBook',
    meta: { login: true },
    component: DetailsBook
  },
  {
    path: '/Cart_Book',
    name: 'Cart_Book',
    meta: { login: true },
    component: Cart_Book
  },
  {
    path: '/DetailPromotion/:id',
    name: 'DetailPromotion',

    component: DetailPromotion
  }
  ,
  {
    path: '/AdminPage',
    name: 'AdminPage',
    meta: { login: true },
    component: AdminPage
  },
  {
    path: '/CheckoutPage/:id',
    name: 'CheckoutPage',
    meta: { login: true },
    component: CheckoutPage
  },
  {
    path: '/ReadBook',
    name: 'ReadBook',
    meta: { login: true },
    component: ReadBook
  },
  {
    path: '/WriteBook',
    name: 'WriteBook',
    meta: { login: true },
    component: WriteBook
  }, 
  {
    path: '/ReadBook',
    name: 'ReadBook',
    meta: { login: true },
    component: WriteBook
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token')

  if (to.meta.login && !isLoggedIn) {
    alert('Please login first!')
    next({ path: '/user/login' })
  }

  if (to.meta.guess && isLoggedIn) {
    alert("You've already logged in")
    next({ path: '/' })
  }

  next()
})

export default router
