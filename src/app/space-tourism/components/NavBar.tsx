import { textPreset8 } from "@/app/globalStyles";
import styled from "styled-components";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

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
            // TODO swap these for styled Next links instead to stop hard reload flash
            href={tab.path}
            $active={tab.path === pathname}
          >
            <b>0{i}</b> {tab.text}
          </NavLink>
        );
      })}
    </NavBarWrapper>
  );
}

// TODO: Hamburger menu should be rendered but outside the right of
// the viewport, then when the hamburger is clicked, update the
// position to show the menu inside the viewport

// TODO: update position for tablet view to remove top spacing. And
// get rid '00' for tablet. And hamburger icon for mobile.
const NavBarWrapper = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: orange;
  padding: 0 64px 0 32px;
  gap: 32px;
  height: 100%;
`;

interface NavLinkProps {
  $active?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  ${textPreset8};
  color: var(--white);
  border-top: solid 4px transparent;
  border-bottom: ${(props) =>
    props.$active ? "solid 4px white" : "solid 4px transparent"};
`;
