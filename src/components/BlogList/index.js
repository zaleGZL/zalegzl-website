import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from '../ContentLoader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as Styled from './Styled'
import { requestGetBlogList } from '../../reducers/blogList'
import { blogListPerPageCount } from '../../constants'
import Tag from '../Tag'
import { getPaginationArray } from '../../utils'
import { activePaginationClassName } from '../../constants'
import PointOutContent from '../PointOutContent'

class BlogList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 1
    }

    this.onTitleClick = this.onTitleClick.bind(this)
    this.onPaginationClick = this.onPaginationClick.bind(this)
  }

  componentDidMount() {
    this.props.requestGetBlogList()
  }

  onTitleClick(event, to) {
    event.preventDefault()
    this.props.history.push(`/blogs/${to}`)
  }

  onPaginationClick(event, page) {
    event.preventDefault()
    this.setState({ currentPage: page })
  }

  render() {
    const { status, blogList, amount } = this.props
    const { currentPage } = this.state
    const totalPage = Math.ceil(amount / blogListPerPageCount)

    // 检查数据是否加载完成或没有数据
    if (status === 'pending' || status === '') {
      // 若数据正在获取，渲染加载界面
      return <ContentLoader height={650} />
    } else if (status === 'failure') {
      // 若数据加载失败
      return <PointOutContent text="数据加载失败，请刷新页面重试" />
    } else if (status === 'success' && amount === 0) {
      // 数据获取成功，但没有任何数据
      return <PointOutContent text="No data" />
    }

    // 获取博客列表
    const listStartIndex = (currentPage - 1) * blogListPerPageCount
    const listEndIndex = listStartIndex + blogListPerPageCount
    const listData = blogList.slice(listStartIndex, listEndIndex)

    // 博客列表组件
    const list = listData.map(item => (
      <Styled.Container key={item._id}>
        <Styled.Title>
          <a
            href={`/blogs/${item._id}`}
            onClick={e => this.onTitleClick(e, item._id)}
          >
            {item.title}
          </a>
        </Styled.Title>
        <Styled.Summary>{item.summary}</Styled.Summary>
        <Styled.InfoContainer>
          <Styled.Info>
            <i className="fas fa-clock" />&nbsp;&nbsp;{item.createTime
              .toLocaleString()
              .slice(0, 10)}
          </Styled.Info>
          <Styled.Info>
            <i className="fas fa-eye" />&nbsp;&nbsp;{item.viewTimes}
          </Styled.Info>
          <Styled.Info>
            <i className="fas fa-tag" />&nbsp;&nbsp;
            {item.tags.map(tag => (
              <Tag key={tag} isLink={false} random={true}>
                {tag}
              </Tag>
            ))}
          </Styled.Info>
          <Styled.Info>
            <i className="fas fa-folder-open" />&nbsp;&nbsp;
            <Tag isLink={false} random={true}>
              {item.category}
            </Tag>
          </Styled.Info>
        </Styled.InfoContainer>
      </Styled.Container>
    ))

    // 分页组件
    const pageArray = getPaginationArray(currentPage, totalPage)
    const pagination = (
      <Styled.Pagination>
        <a href="#ignore" onClick={e => this.onPaginationClick(e, 1)}>
          &laquo;
        </a>
        {pageArray.map(page => (
          <a
            key={page}
            href="#ignore"
            className={page === currentPage ? activePaginationClassName : ''}
            onClick={e => this.onPaginationClick(e, page)}
          >
            {page}
          </a>
        ))}
        <a href="#ignore" onClick={e => this.onPaginationClick(e, totalPage)}>
          &raquo;
        </a>
      </Styled.Pagination>
    )

    return (
      <div>
        {list}
        {pagination}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: state.blogList.status,
  blogList: state.blogList.list,
  amount: state.blogList.amount
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestGetBlogList
    },
    dispatch
  )

BlogList.propTypes = {
  blogList: PropTypes.array,
  amount: PropTypes.number,
  status: PropTypes.string
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogList)
)
