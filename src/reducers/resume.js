import axios from 'axios'
import { apiPrefix } from '../constants'

const types = {
  START_GET_RESUME: 'resume/START_GET_RESUME',
  SUCCESS_GET_RESUME: 'resume/SUCCESS_GET_RESUME',
  FAILURE_GET_RESUME: 'resume/FAILURE_GET_RESUME'
}

const initState = {
  status: '',
  htmlContent: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.START_GET_RESUME:
      return {
        ...state,
        status: 'pending'
      }
    case types.SUCCESS_GET_RESUME:
      return {
        htmlContent: action.data,
        status: 'success'
      }
    case types.FAILURE_GET_RESUME:
      return {
        ...state,
        status: 'failure'
      }
    default:
      return state
  }
}

const startGetResume = () => ({
  type: types.START_GET_RESUME
})

const successGetResume = htmlContent => ({
  type: types.SUCCESS_GET_RESUME,
  data: htmlContent
})

const failureGetResume = () => ({
  type: types.FAILURE_GET_RESUME
})

const requestGetResume = () => dispatch => {
  dispatch(startGetResume())

  return axios
    .get(`${apiPrefix}/resumes`)
    .then(response => {
      const { htmlContent } = response.data.data
      dispatch(successGetResume(htmlContent))
      return 'success'
    })
    .catch(error => {
      console.log(error.response)
      dispatch(failureGetResume())
      return 'failure'
    })
}

export { requestGetResume }
