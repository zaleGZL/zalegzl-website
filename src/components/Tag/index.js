import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colorStyle, colorName } from '../../utils'

const StyledTag = styled.div`
  display: inline-block;
  padding: 0 0.5833rem;
  margin-right: 0.6667rem;
  font-size: 1rem;
  line-height: 1.5;
  height: 1.833rem;
  border-radius: 4px;
  border: 1px solid #d9d9d9;

  /* 标签的默认颜色样式  */
  background-color: #fafafa;
  & a {
    color: rgba(0, 0, 0, 0.65);
  }

  /* 根据color的值来设置颜色样式  */
  & a {
    color: ${({ color }) => color && colorStyle[color]['color']};
  }
  background-color: ${({ color }) =>
    color && colorStyle[color]['background-color']};
  border-color: ${({ color }) => color && colorStyle[color]['border-color']};
`

class Tag extends Component {
  constructor(props) {
    super(props)

    let color = undefined
    if (props.random) {
      color = colorName[Math.floor((Math.random() * 100) % 11)]
    } else if (props.color) {
      color = props.color
    }

    this.state = { color }
  }

  render() {
    return (
      <StyledTag color={this.state.color}>
        <Link to={this.props.to}>{this.props.children}</Link>
      </StyledTag>
    )
  }
}

Tag.propTypes = {
  color: PropTypes.string,
  random: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Tag
