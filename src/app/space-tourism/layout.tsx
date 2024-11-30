"use client";

import styled from "styled-components";
import { usePathname } from "next/navigation";
import { QUERIES } from "../constants";
import GlobalStyle from "../globalStyles";
import { Header } from "./components/Header";

export default function SpaceTourismLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // TODO: use pathname to underline the associated navlink and to
  // render the background image
  console.log({ pathname });

  //  const { mobile, tablet, desktop } = BACKGROUND_MAPPING[pathname]
  //
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header />
        {children}
      </Background>
    </>
  );
}

const Background = styled.main`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/assets/home/background-home-desktop.jpg");

  @media ${QUERIES.tabletAndDown} {
    height: 100%;
    background-image: url("/assets/home/background-home-tablet.jpg");
  }

  @media ${QUERIES.mobileAndDown} {
    background-image: url("/assets/home/background-home-mobile.jpg");
  }
`;
