import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import Button from '../src/components/Button'
import GridDemo from './GridDemo'
import ContainerDemo from './ContainerDemo'

import '../src/reboot.css'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module).add('test', () => <Button>button</Button>)

storiesOf('Grid', module).add('grid row column', () => <GridDemo />)

storiesOf('Container', module).add('container', () => <ContainerDemo />)

