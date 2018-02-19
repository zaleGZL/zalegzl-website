import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tag from '../Tag'

const StyledContainer = styled.div`
  background-color: #fff;
  padding: 1.1rem 1.3rem;
  margin-bottom: 1rem;

  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
`

const StyledTitle = styled.h4`
  margin: 0.3rem 0 0.7rem 0;
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis; */

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;

  & a:hover,
  & a:active {
    text-decoration: underline;
  }

  & a {
    color: #2e3135;
  }
`

const StyledSummary = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 0.5rem;
`

const StyledInfoContainer = styled.div`
  /* 清除浮动 */
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`

const StyledInfo = styled.div`
  float: left;
  display: block;
  padding-right: 1.6rem;
  padding-bottom: 0.3rem;

  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.45);
`

const BlogSummary = () => (
  <StyledContainer>
    <StyledTitle>
      <a href="#123">
        HTTP----HTTP缓存机制3个在 JavaScript 面试前应该知道的问题
      </a>
    </StyledTitle>
    <StyledSummary>
      上一篇结束了underscore中关于函数篇的学习，主要是一些常用的函数和思维的学习，上下文绑定，偏函数的应用，函数的延时执行，函数的节流及防抖等，这些都是在日常开发中常用的方法，值得我们深入学习.
    </StyledSummary>
    <StyledInfoContainer>
      <StyledInfo>
        <i className="fas fa-clock" />&nbsp;&nbsp;2018-02-21
      </StyledInfo>
      <StyledInfo>
        <i className="fas fa-eye" />&nbsp;&nbsp;20
      </StyledInfo>
      <StyledInfo>
        <i className="fas fa-tag" />&nbsp;&nbsp;
        <Tag to="/about">React</Tag>
      </StyledInfo>
      <StyledInfo>
        <i className="fas fa-folder-open" />&nbsp;&nbsp;
        <Tag random={true} to="/about">
          React
        </Tag>
      </StyledInfo>
    </StyledInfoContainer>
  </StyledContainer>
)

const Blog = () => (
  <div>
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
    <BlogSummary />
  </div>
)

export default Blog
