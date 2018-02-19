import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContentLoaderContaner = styled.div`
  background-color: #fff;
  height: ${({ height }) => height + 'px'};
  border: 1px solid #fff;
  padding: 0 20px;
  margin-bottom: 20px;
  overflow: hidden;
`

const StyledContentContainer = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
  width: ${({ width }) => width + '%'};
  height: 25px;
`

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbfbfb;
`

const getWidthArrayByHeight = height => {
  const number = Math.floor(height / 55)
  const arr = []
  for (let i = 0; i < number; i++) {
    arr.push(Math.floor(Math.random() * 90 + 10))
  }
  return arr
}

const ContentLoader = ({ height }) => (
  <StyledContentLoaderContaner height={height}>
    {getWidthArrayByHeight(height).map((width, index) => (
      <StyledContentContainer key={index} width={width}>
        <StyledContent />
      </StyledContentContainer>
    ))}
  </StyledContentLoaderContaner>
)

ContentLoader.propTypes = {
  height: PropTypes.number.isRequired
}

export default ContentLoader
