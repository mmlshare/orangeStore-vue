import Index from './components/Index.vue'
import Login from './components/login/Login.vue'
import Admin from './components/admin/Admin'
import User from './components/user/User'

export default [{
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    children:[
      {
        path:'user',
        component:User
      }
    ]
  },
]