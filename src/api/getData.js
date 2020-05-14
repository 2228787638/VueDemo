import axios from '../config/axios'

/**
 * 获取用户列表（分页）
 * @param page 页数
 * @param size 页码大小
 * @returns {*}
 */
export const getUserList = (page, size) => axios.get('/users', {params: {page: page, size: size}})

export const createUser = (user) => axios.post('/users', user)

export const deleteUser = (id) => axios.delete('/users/' + id)

export const updateUser = (user) => axios.put('/users', user)

export const getUserById = (id) => axios.get('/users/' + id)
