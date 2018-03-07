import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestGetBlog } from '../../reducers/blog'
import * as Styled from './Styled'
import ContentLoader from '../ContentLoader'
import PointOutContent from '../PointOutContent'
import Tag from '../Tag'
import './markdown.css'

class Blog extends Component {
  componentDidMount() {
    // 获取博客文章的id
    const { match } = this.props
    // 发送请求获取该篇博客信息
    this.props.requestGetBlog(match.params.blogId)
  }

  render() {
    const { status, blog } = this.props

    // 检查数据是否处于加载阶段或加载失败
    if (status === '' || status === 'pending') {
      return <ContentLoader height={800} />
    } else if (status === 'failure') {
      return <PointOutContent text="数据加载失败，请刷新页面重试" />
    }

    return (
      <Styled.BlogContainer>
        <Styled.InfoContainer>
          <Styled.Title>{blog.title}</Styled.Title>
          <Styled.Info>
            <i className="fas fa-clock" />&nbsp;&nbsp;{blog.createTime
              .toLocaleString()
              .slice(0, 10)}
          </Styled.Info>
          <Styled.Info>
            <i className="fas fa-eye" />&nbsp;&nbsp;{blog.viewTimes}
          </Styled.Info>
          <Styled.Info>
            <i className="fas fa-tag" />&nbsp;&nbsp;
            {blog.tags.map(tag => (
              <Tag key={tag} isLink={false} random={true}>
                {tag}
              </Tag>
            ))}
          </Styled.Info>
          <Styled.Info>
            <i className="fas fa-folder-open" />&nbsp;&nbsp;
            <Tag isLink={false} random={true}>
              {blog.category}
            </Tag>
          </Styled.Info>
        </Styled.InfoContainer>
        <Styled.BlogContent className={'markdown-body'}>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.htmlContent
            }}
          />
        </Styled.BlogContent>
      </Styled.BlogContainer>
    )
  }
}

const mapStateToProps = state => ({
  status: state.blog.status,
  blog: state.blog.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestGetBlog
    },
    dispatch
  )

Blog.propTypes = {
  status: PropTypes.string,
  blog: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
