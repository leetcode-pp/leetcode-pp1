import { message } from 'ant-design-vue'
import axios from 'axios'

const host =
  process.env.NODE_ENV === 'production'
    ? 'https://algo91.herokuapp.com'
    : 'http://localhost:3000'
export default function(options) {
  return axios({
    ...options,
    withCredentials: true,
    url: `${host}${options.url}`
  })
    .then(res => res.data)
    .then(res => {
      if (res.success) return res.data
      throw res
    })
    .catch(err => {
      message.error(err.message || '系统开小差~')
      throw err
    })
}