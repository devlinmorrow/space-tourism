import styled from "styled-components";
import logo from "../../../../public/assets/shared/logo.svg";
import { QUERIES } from "../../constants";
import { NavBar } from "@/app/space-tourism/components/NavBar";

export function Header() {
  return (
    <HeaderWrapper>
      <ImageLine>
        <Image src={logo.src} alt="something" />
        <Line />
      </ImageLine>
      <NavBar />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  padding-top: 40px;
  top: 0;
  width: 100%;
  height: 136px;

  @media ${QUERIES.tabletAndDown} {
    padding-top: 0;
    height: 96px;
  }
`;

const ImageLine = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-right: -20px;
  z-index: 100;
  height: 100%;
`;

const Image = styled.img`
  margin-inline: 64px;
  width: 48px;
  height: 48px;
`;

const Line = styled.hr`
  height: 1px;
  width: 100%;
  border-color: blue;

  // TODO: idea - have transition for line to fade out
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;
