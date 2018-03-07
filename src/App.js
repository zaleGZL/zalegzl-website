import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/TopNav'
import Container from './components/Container'
import ProfileCard from './components/ProfileCard'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Blog from './components/Blog'
import ArticleDirectory from './components/ArticleDirectory'
import './reboot.css'
import BlogList from './components/BlogList'
import { navList } from './constants'
import ScrollToTop from './components/ScrollToTop'
import PointOutContent from './components/PointOutContent'
import ResumeContent from './components/ResumeContent'

const OnDevelopingContent = () => <PointOutContent text="开发中，敬请期待..." />
const NotFoundContent = () => <PointOutContent text="404 Not found" />

const App = () => (
  <Router>
    <div>
      <TopNav navList={navList} />
      <Container lrPadding={0} style={{ marginTop: '30px' }}>
        <Grid.Row>
          <Grid.Col xs={12} sm={12} md={12} lg={8.5} xl={9}>
            <Switch>
              <Route exact path="/" component={BlogList} />
              <Route exact path="/blogs" component={BlogList} />
              <Route path="/blogs/:blogId" component={Blog} />
              <Route path="/tags" component={OnDevelopingContent} />
              <Route path="/categories" component={OnDevelopingContent} />
              <Route path="/about" component={ResumeContent} />
              <Route component={NotFoundContent} />
            </Switch>
          </Grid.Col>
          <Grid.Col xs={0} sm={0} md={0} lg={3.5} xl={3}>
            <ProfileCard />
            <Route path="/blogs/:blogId" component={ArticleDirectory} />
          </Grid.Col>
        </Grid.Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </div>
  </Router>
)

export default App
