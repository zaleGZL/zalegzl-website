import Styled from 'styled-components'
import { activePaginationClassName } from '../../constants'

export const Container = Styled.div`
  background-color: #fff;
  padding: 1.1rem 1.3rem;
  margin-bottom: 1rem;

  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
`

export const Title = Styled.h4`
  margin: 0.3rem 0 0.7rem 0;
  overflow: hidden;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;

  & a:hover,
  & a:active {
    color: #1890ff;
  }

  & a {
    color: rgba(0, 0, 0, 0.65)
  }
`

export const Summary = Styled.div`
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 0.5rem;
`

export const InfoContainer = Styled.div`
  /* 清除浮动 */
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`

export const Info = Styled.div`
  float: left;
  display: block;
  padding-right: 1.6rem;
  padding-bottom: 0.3rem;

  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.45);
`

export const Pagination = Styled.div`
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

  & a:hover:not(.${activePaginationClassName}) {
    background-color: #ddd;
  }

  & a.${activePaginationClassName} {
    color: white;
    background-color: #1e90ff;
  }
`
