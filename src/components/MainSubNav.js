import React from "react";

import styled from "@emotion/styled";

const MainSubNav = ({ visible, onSubMenuVisible }) => {
  return (
    <NavWrap display={visible}>
      <NavList display={visible} onMouseLeave={() => onSubMenuVisible(false)}>
        서브메뉴
      </NavList>
    </NavWrap>
  );
};

const NavWrap = styled.div(({ display }) => ({
  visibility: display ? "visible" : "hidden",
  opacity: display ? 1 : 0,
  position: "fixed",
  top: "47px",
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  transition: "0.4s linear",
}));

const NavList = styled.ul(({ display }) => ({
  opacity: display ? 1 : 0,
  position: "relative",
  top: "0",
  left: "0",
  width: "100%",
  height: display ? "500px" : "0px",
  transition: "0.4s linear",
  background: "#fff",
}));

export default MainSubNav;
