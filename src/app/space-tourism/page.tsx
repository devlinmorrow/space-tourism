'use client'

import styled from 'styled-components'
import theme from "tailwindcss/defaultTheme";

const Subtitle = styled.h4`
  color: green;
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

  @media (max-width: 768px) {
    background-image: url('/assets/home/background-home-tablet.jpg');
  }

  @media (max-width: 425px) {
    background-image: url('/assets/home/background-home-mobile.jpg');
  }
`
