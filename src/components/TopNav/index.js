import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Container from '../Container'

const activeTopNavLinkClassName = 'active-top-nav-link'
const responsiveTopNavClassName = 'responsive-top-nav'

// 导航链接被激活的样式
const activeStyle = {
  color: 'white',
  backgroundColor: '#1e90ff'
}

const StyledTopNav = styled.div`
  /* 使用BFC清除浮动 */
  overflow: hidden;

  background-color: #fff;
  position: relative;
  min-height: 22px;
  font-weight: 300;

  z-index: 1000;
  transition: background-color 0.3s;

  & a {
    float: left;
    display: block;
    color: #444;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    line-height: 22px;

    transition: background-color 0.3s;
  }

  & a:hover {
    background-color: #1e90ff;
  }

  & .icon {
    display: none;
    font-size: 15px;
  }

  @media only screen and (max-width: 575px) {
    & a:not(.${activeTopNavLinkClassName}) {
      display: none;
    }

    & a.${activeTopNavLinkClassName} {
      position: absolute;
      left: 0;
      top: 0;
    }

    & a.icon {
      float: right;
      display: block;
    }

    &.${responsiveTopNavClassName} {
      padding-top: 50px;
    }

    &.${responsiveTopNavClassName} a.icon {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1010;
    }

    &.${responsiveTopNavClassName} a {
      float: none;
      display: block;
      text-align: left;
    }

    &.${responsiveTopNavClassName} a.${activeTopNavLinkClassName} {
      width: 100%;
      z-index: 1005;
    }
  }
`

const StyledIcon = styled.a`
  font-size: 15px;
`

const StyledBackgroundContainer = styled(Container)`
  background-color: #fff;
  border-bottom: 1px solid #d6d3d3;
  border-top: 3px solid #268ffb;

  position: absolute;
  left: 0;
  top: 0;
`

class TopNav extends Component {
  constructor(props) {
    super(props)

    this.state = { className: '' }

    this.onIconClick = this.onIconClick.bind(this)
    this.onLinkClick = this.onLinkClick.bind(this)
  }

  onIconClick(e) {
    e.preventDefault()
    if (this.state.className !== '') {
      this.setState({ className: '' })
    } else {
      this.setState({ className: responsiveTopNavClassName })
    }
  }

  onLinkClick() {
    this.setState({ className: '' })
  }

  render() {
    return (
      <StyledBackgroundContainer fluid lrPadding={0}>
        <Container lrPadding={0}>
          <StyledTopNav className={this.state.className}>
            {this.props.navList.map(item => (
              <NavLink
                key={item.key}
                to={item.to}
                exact={item.exact}
                activeClassName={activeTopNavLinkClassName}
                activeStyle={activeStyle}
                onClick={this.onLinkClick}
              >
                <i className={item.icon} />&nbsp;{item.name}
              </NavLink>
            ))}
            <StyledIcon
              href="#ignore"
              className="icon"
              onClick={e => this.onIconClick(e)}
            >
              &#9776;
            </StyledIcon>
          </StyledTopNav>
        </Container>
      </StyledBackgroundContainer>
    )
  }
}

/**
 * navList: 导航链接信息对象的数组，每个对象包含以下属性
 *   key: react 中的 key，有利于性能优化
 *   to:  NavLink 中的 to
 *   name: 链接显示的文本
 *   exact: NavLink 中的 exact
 *   icon: font awesome 对应图标的 class 名称
 */
TopNav.propTypes = {
  navList: PropTypes.array
}

export default TopNav
