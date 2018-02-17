import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import TopNav from './components/TopNav'
import Container from './components/Container'
import BlogSummary from './components/BlogSummary'
import Grid from './components/Grid'
import Loader from './components/Loader'
import styled from 'styled-components'
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

const App = () => (
  <Router>
    <div>
      <TopNav navList={navList} />
      <Container lrPadding={0} style={{ marginTop: '30px' }}>
        <Grid.Row>
          <Grid.Col xs={12} sm={10} md={8} gutter={5}>
            <BlogSummary/>
          </Grid.Col>
          <Grid.Col xs={0} sm={2} md={4} gutter={0}>
            456
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  </Router>
)

export default App
