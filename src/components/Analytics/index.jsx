import React from 'react'
import { Container } from './style'
import { Statistics } from './Statistics'
import { Media } from './Media'
import { Emails } from './Emails'
import { Moliya } from './Moliya'

const Analytics = () => {
  return (
    <Container>Analytics
        <Statistics/>
        <Media/>
        <Emails/>
        <Moliya/>
    </Container>
  )
}

export default Analytics