import { textPreset8 } from "@/app/globalStyles";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { QUERIES } from "../../constants";
import { createPortal } from "react-dom";

export function NavBar() {
  const pathname = usePathname();

  const tabList = [
    { path: "/space-tourism", text: "Home" },
    { path: "/space-tourism/destination", text: "Destination" },
    { path: "/space-tourism/crew", text: "Crew" },
    { path: "/space-tourism/technology", text: "Technology" },
  ];

  const handleClick = () => {
    console.log("hamburger clicked");
  };

  return (
    <NavBarWrapper>
      {tabList.map((tab, i) => {
        return (
          <NavLink
            key={tab.path}
            href={tab.path}
            $active={tab.path === pathname}
          >
            <b>0{i}</b> {tab.text.toUpperCase()}
          </NavLink>
        );
      })}
      <Button onClick={handleClick}>HAMBURGER</Button>
      {createPortal(
        <MobileMenu>This child is placed in the document body.</MobileMenu>,
        document.body,
      )}
    </NavBarWrapper>
  );
}

// TODO: Hamburger menu should be rendered but outside the right of
// the viewport, then when the hamburger is clicked, update the
// position to show the menu inside the viewport

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  height: 100vh;
  background-color: aliceblue;
`;

const NavBarWrapper = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 64px 0 32px;
  gap: 32px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);

  @media ${QUERIES.mobileAndDown} {
    background-color: unset;
    backdrop-filter: unset;
  }
`;

const Button = styled.button`
  display: none;
  color: white;

  @media ${QUERIES.mobileAndDown} {
    display: block;
  }
`;

interface NavLinkProps {
  $active?: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  ${textPreset8};
  color: var(--white);
  border-top: solid 4px transparent;
  border-bottom: ${(props) =>
    props.$active ? "solid 4px white" : "solid 4px transparent"};

  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`;
