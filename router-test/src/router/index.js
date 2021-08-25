import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Admin from '../views/Admin'
import Basic_info from '../views/admin_views/Basic_info.vue'
import Analyse_time from '../views/admin_views/Analyse_time.vue'
import Analyse_http from '../views/admin_views/Analyse_http.vue'
import Entries from '../views/admin_views/Entries.vue'
import Browse from '../views/user_views/Browse.vue'
import UpdatePassword from '../components/UpdatePassword.vue'
import UpdateUsername from '../components/UpdateUsername.vue'
import LogOut from '../views/LogOut'
import Dropdown from '../components/Dropdown.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin_views/Basic_info.vue',
    name: 'Basic_info',
    component: Basic_info
  },
  {
    path: '/admin_views/Analyse_time.vue',
    name: 'Analyse_time',
    component: Analyse_time
  },
  {
    path: '/admin_views/Analyse_http.vue',
    name: 'Analyse_http',
    component: Analyse_http
  },
  {
    path: '/admin_views/Entries.vue',
    name: 'Entries',
    component: Entries
  },
  {
    path: '/user_views/Browse.vue',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/UpdatePassword.vue',
    name: 'UpdatePassword',
    component: UpdatePassword
  },
  {
    path: '/UpdateUsername.vue',
    name: 'UpdateUsername',
    component: UpdateUsername
  },
  {
    path: '/Dropdown.vue',
    name: 'Dropdown',
    component: Dropdown
  },
  {
    path: '/LogOut.vue',
    name: 'LogOut',
    component: LogOut
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
