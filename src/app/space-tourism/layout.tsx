"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { QUERIES } from "../constants";
import GlobalStyle from "../globalStyles";
import { Header } from "./components/Header";

type MediaQueryImageSrcs = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type BackgroundMappingType = Record<string, MediaQueryImageSrcs>;

const BACKGROUND_MAPPING: BackgroundMappingType = {
  "space-tourism": {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
  },
  "space-tourism/destination": {
    mobile: "/assets/destination/background-destination-mobile.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    desktop: "/assets/destination/background-destination-desktop.jpg",
  },
};

function getBackgroundImages(pathName: string): MediaQueryImageSrcs {
  return BACKGROUND_MAPPING[pathName] || BACKGROUND_MAPPING["space-tourism"];
}

export default function SpaceTourismLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname().replace(/^\//, "");
  const backgroundImageSrcs = getBackgroundImages(pathname);

  // TODO: use pathname to underline the associated navlink and to
  return (
    <>
      <GlobalStyle />
      <Background
        $desktopSrc={backgroundImageSrcs.desktop}
        $tabletSrc={backgroundImageSrcs.tablet}
        $mobileSrc={backgroundImageSrcs.mobile}
      >
        <Header />
        {children}
      </Background>
    </>
  );
}

interface BackgroundProps {
  $desktopSrc: string;
  $tabletSrc: string;
  $mobileSrc: string;
}

const Background = styled.main<BackgroundProps>`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.$desktopSrc});

  @media ${QUERIES.tabletAndDown} {
    background-image: url(${(props) => props.$tabletSrc});
  }

  @media ${QUERIES.mobileAndDown} {
    background-image: url(${(props) => props.$mobileSrc});
  }
`;
