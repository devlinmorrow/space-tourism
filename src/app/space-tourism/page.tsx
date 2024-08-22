'use client'

import styled from 'styled-components'
import theme from "tailwindcss/defaultTheme";

const Subtitle = styled.h4`
  color: green;
`

export default function SpaceTourism() {
  return (
    <>
      <Background>
        <Subtitle>HELLO WORLD</Subtitle>
      </Background>
    </>
  )
}

const Background = styled.main`
  // MOBILE + DEFAULT STYLES
  height: 100vh;
  width: 100vw;
  background-image: url('/assets/home/background-home-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  //@include tablet {
  //  background-image: url('/assets/home/background-home-tablet.jpg');
  //}

  //@include desktop {
  //  background-image: url('/assets/home/background-home-desktop.jpg');
  //}
`
