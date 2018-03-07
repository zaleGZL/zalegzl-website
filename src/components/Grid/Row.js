import styled from 'styled-components'

const Row = styled.div`
  /* 清除浮动 */
  &::after {
    content: '';
    clear: both;
    display: table;
  }

  /* 是网格布局具有相同的高度 */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`

export default Row
