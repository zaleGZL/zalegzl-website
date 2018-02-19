import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFooter = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2;
  color: #999;
`

const Footer = () => (
  <StyledFooter>
    @2018&nbsp;&nbsp;<i className="far fa-user-circle" />&nbsp;ZALE
  </StyledFooter>
)

export default Footer
