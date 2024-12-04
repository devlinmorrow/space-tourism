"use client";

import styled from "styled-components";
import { usePathname } from "next/navigation";
import { QUERIES } from "../constants";
import GlobalStyle from "../globalStyles";
import { Header } from "./components/Header";

const BACKGROUND_MAPPING = {
  "/space-tourism": {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
  },
  destination: {
    // mobile:
  },
};

export default function SpaceTourismLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // TODO: use pathname to underline the associated navlink and to

  const { mobile, tablet, desktop } = BACKGROUND_MAPPING[pathname];

  return (
    <>
      <GlobalStyle />
      <Background desktopSrc={desktop} tabletSrc={tablet} mobileSrc={mobile}>
        <Header />
        {children}
      </Background>
    </>
  );
}

interface BackgroundProps {
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
}

const Background = styled.main<BackgroundProps>`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.desktopSrc});

  @media ${QUERIES.tabletAndDown} {
    height: 100%;
    background-image: url(${(props) => props.tabletSrc});
  }

  @media ${QUERIES.mobileAndDown} {
    background-image: url(${(props) => props.mobileSrc});
  }
`;
