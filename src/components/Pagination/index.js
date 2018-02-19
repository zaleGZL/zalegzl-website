import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const activePaginationLinkClassName = 'active-pagination-link'

// 分页链接被激活的样式
const activePaginationLinkStyle = {
  color: 'white',
  backgroundColor: '#1e90ff'
}

const StyledPagination = styled.div`
  padding: 10px 0;
  text-align: center;

  & a {
    color: black;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 1px;
  }

  & a:hover:not(${activePaginationLinkClassName}) {
    background-color: #ddd;
  }
`

const Pagination = () => (
  <StyledPagination>
    <NavLink to="/" exact>
      &laquo;
    </NavLink>
    <NavLink
      to="/page/1"
      exact
      activeClassName={activePaginationLinkClassName}
      activeStyle={activePaginationLinkStyle}
    >
      1
    </NavLink>
    <NavLink
      to="/page/2"
      exact
      activeClassName={activePaginationLinkClassName}
      activeStyle={activePaginationLinkStyle}
    >
      2
    </NavLink>
    <NavLink
      to="/page/3"
      exact
      activeClassName={activePaginationLinkClassName}
      activeStyle={activePaginationLinkStyle}
    >
      3
    </NavLink>
    <NavLink
      to="/page/4"
      exact
      activeClassName={activePaginationLinkClassName}
      activeStyle={activePaginationLinkStyle}
    >
      4
    </NavLink>
    <NavLink
      to="/page/5"
      exact
      activeClassName={activePaginationLinkClassName}
      activeStyle={activePaginationLinkStyle}
    >
      5
    </NavLink>
    <NavLink
      to="/page/10"
      exact
      activeClassName={activePaginationLinkClassName}
      activeStyle={activePaginationLinkStyle}
    >
      &raquo;
    </NavLink>
  </StyledPagination>
)

export default Pagination
