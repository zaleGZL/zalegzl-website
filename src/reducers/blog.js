import axios from 'axios'
import { apiPrefix } from '../constants'

const types = {
  // 获取博客信息
  START_GET_BLOG: 'blog/START_GET_BLOG',
  SUCCESS_GET_BLOG: 'blog/SUCCESS_GET_BLOG',
  FAILURE_GET_BLOG: 'blog/FAILURE_GET_BLOG'
}

const initState = {
  status: '',
  data: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.START_GET_BLOG:
      return {
        ...state,
        status: 'pending'
      }
    case types.SUCCESS_GET_BLOG:
      return {
        status: 'success',
        data: action.data
      }
    case types.FAILURE_GET_BLOG:
      return {
        ...state,
        status: 'failure'
      }
    default:
      return state
  }
}

const startGetBlog = () => ({
  type: types.START_GET_BLOG
})

const successGetBlog = blog => ({
  type: types.SUCCESS_GET_BLOG,
  data: blog
})

const failureGetBlog = () => ({
  type: types.FAILURE_GET_BLOG
})

const requestGetBlog = id => dispatch => {
  dispatch(startGetBlog())

  // 发起请求
  return axios
    .get(`${apiPrefix}/blogs/${id}`)
    .then(response => {
      const blog = response.data.data
      dispatch(successGetBlog(blog))
      return 'success'
    })
    .catch(error => {
      console.log(error.response)
      dispatch(failureGetBlog())
      return 'failure'
    })
}

export { requestGetBlog }
