import { textPreset8 } from "@/app/globalStyles";
import { useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { QUERIES } from "../../constants";
import { createPortal } from "react-dom";
import Image from "next/image";
import closeIcon from "../../../../public/assets/shared/icon-close.svg";

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
      {
        <MenuButton $open={open} onClick={() => setOpen(true)}>
          HAMBURGER
        </MenuButton>
      }

      {createPortal(
        <MobileMenu $open={open}>
          <CloseButtonWrapper>
            <MenuButton onClick={() => setOpen(false)}>
              <Image src={closeIcon} alt="close"></Image>
            </MenuButton>
          </CloseButtonWrapper>

          <div>This child is placed in the document body.</div>
        </MobileMenu>,
        document.body,
      )}
    </NavBarWrapper>
  );
}

// TODO: Hamburger menu should be rendered but outside the right of
// the viewport, then when the hamburger is clicked, update the
// position to show the menu inside the viewport

interface MobileMenuProps {
  $open?: boolean;
}

const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$open ? 0 : "-100%")};
  z-index: 100;
  height: 100vh;
  background-color: black;
  color: white;
  transition: right 1s;
  background-color: rgba(11, 13, 23, 0.15);
  backdrop-filter: blur(80px);
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
