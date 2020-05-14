import {createUser, getUserList, deleteUser, updateUser, getUserById} from '../../api/getData'
import { Message } from 'element-ui'

export default {
  namespaced: true,
  state: {
    userListPage: [],
    user: {}
  },
  actions: {
    async getUserList ({commit}, pageSize) {
      const response = await getUserList(pageSize.page, pageSize.size)
      const responseData = response.data
      commit('setUserListPage', responseData)
    },
    async createUser ({commit, state}, user) {
      const response = await createUser(user)
      const responseData = response.data
      responseData !== null ? Message.success('创建成功') : Message.error('创建失败')
    },
    async deleteUser ({commit, state}, id) {
      const response = await deleteUser(id)
      const responseData = response.data
      responseData !== null ? Message.success('删除成功') : Message.error('删除失败')
    },
    async updateUser ({commit, state}) {
      const response = await updateUser(state.user)
      const responseData = response.data
      responseData !== null ? Message.success('更新成功') : Message.error('更新失败')
    },
    async getUserById ({commit, state}, id) {
      const response = await getUserById(id)
      const responseData = response.data
      commit('setUser', responseData)
    }
  },
  getters: {
    getUserListPage (state) {
      return state.userListPage
    },
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    setUserListPage (state, userList) {
      state.userListPage = JSON.parse(JSON.stringify(userList))
    },
    setUser (state, user) {
      state.user = JSON.parse(JSON.stringify(user))
    }
  }
}
