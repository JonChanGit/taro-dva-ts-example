import {Request} from '../../utils/request'

export const getList = data => {
  return Request.request(
    {
      url: 'https://wechat.jonpad.com.cn/top-summary/search',
      method: 'GET',
      data: {
        ...data
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      }
    }
  )
}
