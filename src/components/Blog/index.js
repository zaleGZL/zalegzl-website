import React, { Component } from 'react'
import styled from 'styled-components'
import ContentLoader from '../ContentLoader'
import marked from 'marked'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import './markdown.css'

var renderer = new marked.Renderer()

renderer.heading = function(text, level) {
  return (
    '<h' +
    level +
    '><a name="' +
    text +
    '" class="anchor" href="#' +
    text +
    '"><span class="header-link"></span></a>' +
    text +
    '</h' +
    level +
    '>'
  )
}

const StyledBlogContainer = styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);

  color: rgba(51, 51, 51, 0.9);
`

const StyledInfoContainer = styled.div`
  padding: 1.1rem 1.3rem 1rem 1.3rem;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
`

const StyledInfo = styled.span`
  padding-right: 1.6rem;
  padding-bottom: 0.3rem;

  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.45);
`

const BlogInfo = () => (
  <StyledInfoContainer>
    <StyledTitle>
      [深入浅出React和Redux----读书笔记]Redux和服务器通信
    </StyledTitle>
    <StyledInfo>
      <i className="fas fa-clock" />&nbsp;&nbsp;2018-02-21
    </StyledInfo>
    <StyledInfo>
      <i className="fas fa-eye" />&nbsp;&nbsp;20
    </StyledInfo>
    <StyledInfo>
      <i className="fas fa-tag" />&nbsp;&nbsp;
      <Tag random={true} to="/about">
        React
      </Tag>
    </StyledInfo>
    <StyledInfo>
      <i className="fas fa-folder-open" />&nbsp;&nbsp;
      <Tag random={true} to="/about">
        React
      </Tag>
    </StyledInfo>
  </StyledInfoContainer>
)

const StyledTitle = styled.div`
  font-size: 1.8rem;
  padding-bottom: 1.3rem;
`

const StyledBlogContent = styled.div`
  padding: 1rem 1.3rem 2rem 1.3rem;
`

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: null
    }
  }

  async componentDidMount() {
    let markdown = ''
    try {
      markdown = await axios
        .get('/api')
        .then(response => response.data.markdown)
    } catch (err) {
      console.log(err)
      return
    }

    this.setState({ markdown })
  }

  render() {
    if (this.state.markdown === null) {
      return <ContentLoader height={500} />
    } else {
      return (
        <StyledBlogContainer>
          <BlogInfo />
          <StyledBlogContent className={'markdown-body'}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(this.state.markdown, { renderer: renderer })
              }}
            />
          </StyledBlogContent>
        </StyledBlogContainer>
      )
    }
  }
}

export default Blog
