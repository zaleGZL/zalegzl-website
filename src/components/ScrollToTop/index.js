import React from 'react'
import Styled from 'styled-components'
import ScrollToTop from 'react-scroll-up'
const StyledScrollUp = Styled.div`
  font-size: 30px;
  color: #1c93e0;
  &:hover {
    opacity: 0.6;
  }
`

const ScrollToTopCustom = () => (
  <ScrollToTop showUnder={160}>
    <StyledScrollUp>
      <i className="far fa-arrow-alt-circle-up" />
    </StyledScrollUp>
  </ScrollToTop>
)

export default ScrollToTopCustom