import { combineReducers } from 'redux'
import blogList from './blogList'
import blog from './blog'
import resume from './resume'
import profile from './profile'

export default combineReducers({
  blogList,
  blog,
  resume,
  profile
})
