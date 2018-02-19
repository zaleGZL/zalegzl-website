import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import TopNav from './components/TopNav'
import Container from './components/Container'
import BlogSummary from './components/BlogSummary'
import ProfileCard from './components/ProfileCard'
import Grid from './components/Grid'
import Loader from './components/Loader'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import ContentLoader from './components/ContentLoader'
import Blog from './components/Blog'
import ArticleDirectory from './components/ArticleDirectory'
import styled from 'styled-components'
import ScrollToTop from 'react-scroll-up'
import './reboot.css'

const navList = [
  {
    key: 'home',
    to: '/',
    name: '首页',
    icon: 'fas fa-home',
    exact: true
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

const StyledScrollUp = styled.div`
  font-size: 30px;
  color: #1c93e0;
  &:hover {
    opacity: 0.6;
  }
`

const App = () => (
  <Router>
    <div>
      <TopNav navList={navList} />
      <Container lrPadding={0} style={{ marginTop: '30px' }}>
        <Grid.Row>
          <Grid.Col xs={12} sm={12} md={12} lg={8.5} xl={9}>
            <Blog />
            {/* <ContentLoader height={150}/> */}
            {/* <BlogSummary /> */}
            {/* <Pagination /> */}
          </Grid.Col>
          <Grid.Col xs={0} sm={0} md={0} lg={3.5} xl={3}>
            <ProfileCard />
            <ArticleDirectory />
          </Grid.Col>
        </Grid.Row>
      </Container>
      <Footer />
      <ScrollToTop showUnder={160}>
        <StyledScrollUp>
          <i className="far fa-arrow-alt-circle-up" />
        </StyledScrollUp>
      </ScrollToTop>
    </div>
  </Router>
)

export default App
