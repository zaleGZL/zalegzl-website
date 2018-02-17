import React from 'react'
import Grid from '../src/components/Grid'
import { injectGlobal } from 'styled-components'

const GridDemo = () => (
  <Grid.Row>
    <Grid.Col
      xs={4}
      sm={8}
      lg={10}
      style={{ height: '100px', backgroundColor: 'red' }}
    />
    <Grid.Col
      xs={4}
      sm={2}
      lg={1}
      style={{ height: '100px', backgroundColor: 'blue' }}
      gutter={15}
    />
    <Grid.Col
      xs={4}
      sm={2}
      lg={1}
      style={{ height: '100px', backgroundColor: 'black' }}
      gutter={15}
    />
  </Grid.Row>
)

export default GridDemo
