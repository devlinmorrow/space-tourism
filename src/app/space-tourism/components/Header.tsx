import styled from "styled-components";
import logo from "../../../../public/assets/shared/logo.svg";
import { QUERIES } from "../../constants";

export function Header() {
  return (
    <HeaderWrapper>
      <ImageLine>
        <Image src={logo.src} alt="something" />
        <Line />
      </ImageLine>
      <NavBar>
        <NavLink>00 Home</NavLink>
        <NavLink>01 Destination</NavLink>
        <NavLink>02 Crew</NavLink>
        <NavLink>03 Technology</NavLink>
      </NavBar>
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
  background-color: green;
  width: 100%;
  height: 136px;

  @media ${QUERIES.tabletAndDown} {
    padding-top: 0;
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
  size: 4px;

  // TODO: idea - have transition for line to fade out
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

// TODO: Hamburger menu should be rendered but outside the right of
// the viewport, then when the hamburger is clicked, update the
// position to show the menu inside the viewport

// TODO: update position for tablet view to remove top spacing. And
// get rid '00' for tablet. And hamburger icon for mobile.
const NavBar = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: orange;
  padding: 0 64px 0 32px;
  text-wrap: nowrap;
  gap: 32px;
  height: 100%;
`;

const NavLink = styled.p`
  color: var(--white);
`;
