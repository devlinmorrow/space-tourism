'use client'

import styled from 'styled-components'
import { QUERIES } from '../constants'
import GlobalStyle from '../globalStyles'

export default function SpaceTourism() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Subtitle>So, you want to travel to</Subtitle>
        <MainHeading>SPACE</MainHeading>
        <Description>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </Description>
      </Background>
    </>
  )
}
const TextStyles = styled`
  h1 {

}
`

const Heading3 = styled.h3`

`

const Description = styled.p`
  color: var(--blue-300);
`

const MainHeading = styled.h1`
  color: var(--white);
`

const Subtitle = styled.h3`
  color: var(--blue-300);
`

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
