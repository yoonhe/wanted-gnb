import React, { useEffect, useRef, useState } from "react";

import styled from "@emotion/styled";
import { subNavs } from "../../fixture/subNav";
import { Inner } from "../css/common";

import SubNav from "./SubNav";

const MainSubNav = ({ visible, onSubMenuVisible }) => {
  const [listHeight, setListHeight] = useState(0);
  const subNavRef = useRef();

  useEffect(() => {
    const height = subNavRef?.current?.clientHeight;
    setListHeight(height);
  }, [visible, subNavRef?.current?.clientHeight]);

  return (
    <NavWrap display={visible}>
      <NavList
        display={visible}
        height={listHeight}
        onMouseLeave={() => onSubMenuVisible(false)}
      >
        <SubNavInner ref={subNavRef}>
          {subNavs.map(({ id, oneDepth, twoDepth }) => {
            return (
              <SubNav
                key={id}
                oneDepthMenus={oneDepth}
                twoDepthMenus={twoDepth}
              />
            );
          })}
        </SubNavInner>
      </NavList>
    </NavWrap>
  );
};

const NavWrap = styled.div(({ display }) => ({
  visibility: display ? "visible" : "hidden",
  opacity: display ? 1 : 0,
  position: "fixed",
  top: "48px",
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  transition: "0.3s ease-in-out",
}));

const NavList = styled.div(({ display, height }) => ({
  justifyContent: "space-between",
  opacity: display ? 1 : 0,
  position: "relative",
  top: "0",
  left: "0",
  padding: "40px 0",
  width: "100%",
  height: display ? height : "0px",
  transition: "0.3s ease-in-out",
  background: "#fff",
}));

const SubNavInner = styled(Inner)({
  display: "flex",
});

export default MainSubNav;
