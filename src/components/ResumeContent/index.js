import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestGetResume } from '../../reducers/resume'
import Styled from 'styled-components'
import ContentLoader from '../ContentLoader'
import PointOutContent from '../PointOutContent'
import './markdown.css'

export const BlogContainer = Styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);

  color: rgba(51, 51, 51, 0.9);
`

export const BlogContent = Styled.div`
  padding: 2rem 1.3rem 2rem 1.3rem;
`

class Blog extends Component {
  componentDidMount() {
    this.props.requestGetResume()
  }

  render() {
    const { status, htmlContent } = this.props

    // 检查数据是否处于加载阶段或加载失败
    if (status === '' || status === 'pending') {
      return <ContentLoader height={800} />
    } else if (status === 'failure') {
      return <PointOutContent text="数据加载失败，请刷新页面重试" />
    }

    return (
      <BlogContainer>
        <BlogContent className={'markdown-body'}>
          <div
            dangerouslySetInnerHTML={{
              __html: htmlContent
            }}
          />
        </BlogContent>
      </BlogContainer>
    )
  }
}

const mapStateToProps = state => ({
  status: state.resume.status,
  htmlContent: state.resume.htmlContent
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestGetResume
    },
    dispatch
  )

Blog.propTypes = {
  status: PropTypes.string,
  htmlContent: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
