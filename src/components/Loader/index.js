import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getPixelString } from '../../utils'

const StyledLoaderContainer = styled.div`
  width: 100%;
  min-height: ${({ height }) => getPixelString(height, null)};
  padding-top: ${({ paddingTB }) => getPixelString(paddingTB, null)};
  padding-bottom: ${({ paddingTB }) => getPixelString(paddingTB, null)};
`

const StyledLoader = styled.div`
  border: 10px solid #fff;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  border-bottom: 10px solid #3498db;
  margin: 0 auto;
  width: ${({ size }) => getPixelString(size, null)};
  height: ${({ size }) => getPixelString(size, null)};
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader = ({ minHeight, size }) => {
  const paddingTB = (minHeight - size) / 2
  return (
    <StyledLoaderContainer height={minHeight} paddingTB={paddingTB}>
      <StyledLoader size={size} />
    </StyledLoaderContainer>
  )
}

Loader.propTypes = {
  minHeight: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}

export default Loader
