import React, { Component } from 'react'
import styled from 'styled-components'
import marked from 'marked'
import axios from 'axios'

const StyledArticleDirectoryContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  color: #555;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

const StyledTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0;
`

const StyledContent = styled.div`
  padding: 10px 0;
  font-size: 1.3rem;

  & a {
    color: #555;
  }
`

class ArticleDirectory extends Component {
  constructor(props) {
    super(props)

    this.state = { toc: null }
  }

  async componentDidMount() {
    let toc = ''
    try {
      toc = await axios.get('/api').then(response => response.data.tocContent)
    } catch (err) {
      console.log(err)
      return
    }

    this.setState({ toc })
  }

  render() {
    return (
      <StyledArticleDirectoryContainer>
        <StyledTitle>文章目录</StyledTitle>
        {this.state.toc ? (
          <StyledContent>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(this.state.toc)
              }}
            />
          </StyledContent>
        ) : null}
      </StyledArticleDirectoryContainer>
    )
  }
}

export default ArticleDirectory
