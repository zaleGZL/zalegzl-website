import React from 'react'
import Container from '../src/components/Container'

const ContainerDemo = () => (
  <div>
    <Container style={{ backgroundColor: 'red' }}>
      <div style={{ backgroundColor: 'yellow', height: '100px' }}>
        container without fluid
      </div>
    </Container>
    <Container style={{ backgroundColor: 'black', height: '100px' }} fluid />
  </div>
)

export default ContainerDemo
