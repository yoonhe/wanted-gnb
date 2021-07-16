import React from "react";

import styled from "@emotion/styled";

const MainNav = ({ navigations = [], onClick, onSubMenuVisible }) => {
  function handleMouseOver(id) {
    if (id === 0) {
      return onSubMenuVisible(true);
    }
    onSubMenuVisible(false);
  }

  return (
    <NavList>
      {navigations.map(({ id, name, active }) => (
        <Nav
          key={id}
          active={active}
          onClick={() => onClick(id)}
          onMouseOver={() => handleMouseOver(id)}
        >
          <button type="button">{name}</button>
        </Nav>
      ))}
    </NavList>
  );
};

const NavList = styled.ul({
  display: "flex",
});

const Nav = styled.li(({ active }) => ({
  button: {
    position: "relative",
    padding: "15px",
    cursor: "pointer",
    "&:before": {
      display: active ? "block" : "none",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "2px",
      background: "#3366ff",
      content: '""',
    },
  },
}));

export default MainNav;
