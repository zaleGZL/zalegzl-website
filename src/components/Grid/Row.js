import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  /* 清除浮动 */
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`

export default Row
