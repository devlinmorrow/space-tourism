"use client";

import styled from "styled-components";
import { QUERIES } from "../constants";
import { textPreset1, textPreset4, textPreset5, textPreset9 } from "../globalStyles";

export default function SpaceTourism() {
  return (
    <Hero>
      <Texts>
        <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
        <MainHeading>SPACE</MainHeading>
        <Description>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Description>
      </Texts>
      <ExploreButtonContainer>
        <ExploreButton>EXPLORE</ExploreButton>
      </ExploreButtonContainer>
    </Hero>
  );
}

const Hero = styled.div`
  display: flex;
  padding: 128px 165px;
  height: 100%;
  align-items: flex-end;
  gap: 66px;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
    align-items: center;
    padding: 128px 165px;
  }

  // @media ${QUERIES.mobileAndDown} {
  // }
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
`;

const Description = styled.p`
  ${textPreset9}
  color: var(--blue-300);
`;

const MainHeading = styled.h1`
  ${textPreset1}
  color: var(--white);
`;

const Subtitle = styled.h3`
  ${textPreset5}
  color: var(--blue-300);
`;
