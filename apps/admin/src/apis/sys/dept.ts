import { request } from '@shoptop/request'

export const getDepartment = () => {
  return request.get({ url: '/demo/account/department' })
}
