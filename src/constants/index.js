// 博客列表每页的数目
const blogListPerPageCount = 5
const activePaginationClassName = 'active-pagination-link'
const blogListQs = 'fields=_id,title,summary,createTime,viewTimes,tags,category'
const blogQs =
  'fields=title,summary,createTime,viewTimes,tags,category,htmlContent,toc'
const apiPrefix = '/api'

const navList = [
  {
    key: 'home',
    to: '/blogs',
    name: '首页',
    icon: 'fas fa-home',
    exact: false
  },
  {
    key: 'categories',
    to: '/categories',
    name: '分类',
    icon: 'fas fa-th',
    exact: false
  },
  {
    key: 'tags',
    to: '/tags',
    name: '标签',
    icon: 'fas fa-tags',
    exact: false
  },
  {
    key: 'about',
    to: '/about',
    name: '关于',
    icon: 'fas fa-user',
    exact: false
  }
]

export {
  blogListPerPageCount,
  activePaginationClassName,
  blogListQs,
  navList,
  apiPrefix,
  blogQs
}
