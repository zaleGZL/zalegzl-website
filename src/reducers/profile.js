import axios from 'axios'
import { apiPrefix } from '../constants'

const types = {
  START_GET_PROFILE_INFO: 'profile/START_GET_PROFILE_INFO',
  SUCCESS_GET_PROFILE_INFO: 'profile/SUCCESS_GET_PROFILE_INFO',
  FAILURE_GET_PROFILE_INFO: 'profile/FAILURE_GET_PROFILE_INFO'
}

const initState = {
  status: '',
  blogCount: 0,
  tagCount: 0,
  categoryCount: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.START_GET_PROFILE_INFO:
      return {
        ...state,
        status: 'pending'
      }
    case types.SUCCESS_GET_PROFILE_INFO:
      return {
        status: 'success',
        ...action.data
      }
    case types.FAILURE_GET_PROFILE_INFO:
      return {
        ...state,
        status: 'failure'
      }
    default:
      return state
  }
}

const startGetProfileInfo = () => ({
  type: types.START_GET_PROFILE_INFO
})

const successGetProfileInfo = data => ({
  type: types.SUCCESS_GET_PROFILE_INFO,
  data
})

const failureGetProfileInfo = () => ({
  type: types.FAILURE_GET_PROFILE_INFO
})

const requestGetProfileInfo = () => dispatch => {
  dispatch(startGetProfileInfo())

  return axios
    .get(`${apiPrefix}/profiles`)
    .then(response => {
      const data = response.data.data
      dispatch(successGetProfileInfo(data))
      return 'success'
    })
    .catch(error => {
      console.log(error.response)
      dispatch(failureGetProfileInfo())
      return 'failure'
    })
}

export { requestGetProfileInfo }
