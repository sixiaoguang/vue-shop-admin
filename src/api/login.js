import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(sysCode) {
  const data = {
    sysCode
  }
  return request({
    url: '/admin/system/userInfo',
    method: 'post',
    data
  })
}
