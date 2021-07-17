import React, { memo } from "react";

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
      {navigations.map(({ id, name, active, onlyWeb }) => (
        <Nav
          key={id}
          active={active}
          onClick={() => onClick(id)}
          onlyWeb={onlyWeb}
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
  flex: "1",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    justifyContent: "flex-start",
  },
});

const Nav = styled.li(({ active, onlyWeb }) => ({
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
    "@media (max-width: 1028px)": {
      padding: "15px 10px",
    },
    "@media (max-width: 768px)": {
      display: onlyWeb && "none",
    },
  },
}));

export default memo(MainNav);
