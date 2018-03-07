import axios from 'axios'
import { blogListQs, apiPrefix } from '../constants'

const types = {
  // 获取博客列表
  START_GET_BLOG_LIST: 'blogList/START_GET_BLOG_LIST',
  SUCCESS_GET_BLOG_LIST: 'blogList/SUCCESS_GET_BLOG_LIST',
  FAILURE_GET_BLOG_LIST: 'blogList/FAILURE_GET_BLOG_LIST'
}

const initState = {
  status: '',
  list: [],
  amount: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.START_GET_BLOG_LIST:
      return {
        ...state,
        status: 'pending'
      }
    case types.SUCCESS_GET_BLOG_LIST:
      return {
        status: 'success',
        list: action.data.list,
        amount: action.data.amount
      }
    case types.FAILURE_GET_BLOG_LIST:
      return {
        ...state,
        status: 'failure'
      }
    default:
      return state
  }
}

const startGetBlogList = () => ({
  type: types.START_GET_BLOG_LIST
})

const successGetBlogList = (list, amount) => ({
  type: types.SUCCESS_GET_BLOG_LIST,
  data: {
    list,
    amount
  }
})

const failureGetBlogList = () => ({
  type: types.FAILURE_GET_BLOG_LIST
})

// 请求获取博客列表
const requestGetBlogList = () => dispatch => {
  dispatch(startGetBlogList())

  return axios
    .get(`${apiPrefix}/blogs?${blogListQs}`)
    .then(response => {
      const { blogs, count } = response.data.data
      dispatch(successGetBlogList(blogs, count))
      return 'success'
    })
    .catch(error => {
      console.log(error.response)
      dispatch(failureGetBlogList())
      return 'failure'
    })
}

export { requestGetBlogList }
