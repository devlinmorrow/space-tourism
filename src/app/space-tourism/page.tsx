"use client";

import styled from "styled-components";
import { QUERIES } from "../constants";
import GlobalStyle, { textPreset4 } from "../globalStyles";

export default function SpaceTourism() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header>
          <ImageLine>
            <Image />
            <Line />
          </ImageLine>
          <NavBar>
            <NavLink>00 Home</NavLink>
            <NavLink>01 Destination</NavLink>
            <NavLink>02 Crew</NavLink>
            <NavLink>03 Technology</NavLink>
          </NavBar>
        </Header>
        <Hero>
          <Texts>
            <Subtitle>So, you want to travel to</Subtitle>
            <MainHeading>SPACE</MainHeading>
            <Description>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Description>
          </Texts>
          <ExploreButtonContainer>
            <ExploreButton>Explore</ExploreButton>
          </ExploreButtonContainer>
        </Hero>
      </Background>
    </>
  );
}

const ImageLine = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 96px;
  margin-right: -20px;
  z-index: 100;
`;

const Image = styled.div`
  margin-inline: 64px;
  background-color: var(--white);
  width: 48px;
  height: 48px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: green;
  width: 100%;
  height: 136px;
`;

const Line = styled.hr`
  height: 1px;
  width: 100%;
  border-color: blue;
  size: 4px;
`;

const NavBar = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  height: 96px;
  padding: 0 100px 0 200px;
`;

const NavLink = styled.p`
  color: var(--white);
`;

const Hero = styled.div`
  display: flex;
  padding: 128px 165px;
  height: 100%;
  align-items: flex-end;
  gap: 66px;
`;

const Texts = styled.div`
  flex: 1;
`;

const ExploreButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  color: var(--white);
`;

const ExploreButton = styled.button`
  ${textPreset4}
  height: 272px;
  width: 272px;
  background-color: var(--white);
  color: var(--blue-900);
  border-radius: 50%;
`;

const Description = styled.p`
  color: var(--blue-300);
`;

const MainHeading = styled.h1`
  color: var(--white);
`;

const Subtitle = styled.h3`
  color: var(--blue-300);
`;

const Background = styled.main`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/assets/home/background-home-desktop.jpg");

  @media ${QUERIES.tabletAndDown} {
    background-image: url("/assets/home/background-home-tablet.jpg");
  }

  @media ${QUERIES.mobileAndDown} {
    background-image: url("/assets/home/background-home-mobile.jpg");
  }
`;
