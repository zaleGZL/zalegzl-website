import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Styled from './Styled'

class ArticleDirectory extends Component {
  render() {
    const toc = this.props.toc
    return (
      <Styled.ArticleDirectoryContainer>
        <Styled.Title>文章目录</Styled.Title>
        {toc ? (
          <Styled.Content>
            <div
              dangerouslySetInnerHTML={{
                __html: toc
              }}
            />
          </Styled.Content>
        ) : null}
      </Styled.ArticleDirectoryContainer>
    )
  }
}

const mapStateToProps = state => ({
  toc: state.blog.data.toc
})

export default connect(mapStateToProps)(ArticleDirectory)
