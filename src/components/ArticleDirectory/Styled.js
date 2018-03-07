import Styled from 'styled-components'

export const ArticleDirectoryContainer = Styled.div`
  background-color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  color: #636363;
  font-weight: 300;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

export const Title = Styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0;
`

export const Content = Styled.div`
  padding: 10px 0;
  font-size: 1.3rem;
  padding-right: 15px;

  & a {
    color: #636363;
  }
  & a:hover, & a:active {
    color: #303030;
    font-weight: 400;
  }
`
