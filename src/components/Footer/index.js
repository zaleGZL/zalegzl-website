import React from 'react'
import Styled from 'styled-components'

const StyledFooter = Styled.div`
  padding: 60px 0 10px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2;
  color: #3c3b3b;

  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
`

const Footer = () => (
  <StyledFooter>
    @2018&nbsp;&nbsp;<i className="far fa-user-circle" />&nbsp;ZALE
  </StyledFooter>
)

export default Footer
