'use client'

import styled from 'styled-components'
import { QUERIES } from '../constants'

const colorString = "color: pink;"

const Subtitle = styled.h4`
  ${colorString}
`

export default function SpaceTourism() {
  return (
    <Background>
      <Subtitle>HELLO WORLD</Subtitle>
    </Background>
  )
}


const Background = styled.main`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/assets/home/background-home-desktop.jpg');

  @media ${QUERIES.tabletAndDown} {
    background-image: url('/assets/home/background-home-tablet.jpg');
  }

  @media ${QUERIES.mobileAndDown} {
    background-image: url('/assets/home/background-home-mobile.jpg');
  }
`
