import { textPreset8 } from "@/app/globalStyles";
import { useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { QUERIES } from "../../constants";
import { createPortal } from "react-dom";
import Image from "next/image";
import closeIcon from "../../../../public/assets/shared/icon-close.svg";
import hamburgerIcon from "../../../../public/assets/shared/icon-hamburger.svg";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const tabList = [
    { path: "/space-tourism", text: "Home" },
    { path: "/space-tourism/destination", text: "Destination" },
    { path: "/space-tourism/crew", text: "Crew" },
    { path: "/space-tourism/technology", text: "Technology" },
  ];

  return (
    <NavBarWrapper>
      <NavLinks>
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
      </NavLinks>
      {
        <MenuButton $open={open} onClick={() => setOpen(true)}>
          <Image src={hamburgerIcon} alt="open menu"></Image>
        </MenuButton>
      }

      {createPortal(
        <MobileMenu $open={open}>
          <CloseButtonWrapper>
            <MenuButton onClick={() => setOpen(false)}>
              <Image src={closeIcon} alt="close"></Image>
            </MenuButton>
          </CloseButtonWrapper>

          <MobileNavLinks>
            {tabList.map((tab, i) => {
              return (
                <NavLink
                  key={tab.path}
                  href={tab.path}
                  onClick={() => setOpen(false)}
                  $active={tab.path === pathname}
                >
                  <b>0{i}</b> {tab.text.toUpperCase()}
                </NavLink>
              );
            })}
          </MobileNavLinks>
        </MobileMenu>,
        document.body,
      )}
    </NavBarWrapper>
  );
}

interface MobileMenuProps {
  $open?: boolean;
}

const NavLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;

  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`

const MobileNavLinks = styled.div`
  display: none;

  @media ${QUERIES.mobileAndDown} {
    display: block;
  }
`

const MobileMenu = styled.div<MobileMenuProps>`
  display: none;

  @media ${QUERIES.mobileAndDown} {
    display: block;
    position: fixed;
    top: 0;
    right: ${(props) => (props.$open ? 0 : "-100%")};
    z-index: 100;
    height: 100vh;
    width: 254px;
    background-color: black;
    color: white;
    transition: right 1s;
    background-color: rgba(11, 13, 23, 0.15);
    backdrop-filter: blur(80px);
  }
`;

const NavBarWrapper = styled.nav`
  display: flex;
  padding: 0 64px 0 32px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  color: white;

  @media ${QUERIES.mobileAndDown} {
    background-color: unset;
    backdrop-filter: unset;
  }
`;

const CloseButtonWrapper = styled.div`
  padding: 32px;
  display: flex;
  justify-content: flex-end;
`;

interface MenuButtonProps {
  $open?: boolean;
}

const MenuButton = styled.button<MenuButtonProps>`
  display: block;
  color: white;
  opacity: 0;
  transition: opacity 500ms;

  @media ${QUERIES.mobileAndDown} {
    opacity: ${(props) => (props.$open ? 0 : 1)};
  }
`;

interface NavLinkProps {
  $active?: boolean;
}

const NavLink = styled(Link) <NavLinkProps>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  ${textPreset8};
  color: var(--white);
  border-top: solid 4px transparent;
  border-bottom: ${(props) =>
    props.$active ? "solid 4px white" : "solid 4px transparent"};
  border-right: none;

  @media ${QUERIES.mobileAndDown} {
    border-bottom: none;
    border-right: ${(props) =>
    props.$active ? "solid 4px white" : "solid 4px transparent"};
    padding: 8px 0 8px 16px;
  }
`;
