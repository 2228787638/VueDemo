import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import UserList from '../view/user/UserList'
import UserAdd from '../view/user/UserAdd'
import User from '../view/user/User'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: 'add',
          component: UserAdd
        },
        {
          path: 'list',
          component: UserList
        }
      ]
    }
  ]
})
