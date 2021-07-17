import React, { useState } from "react";

import { mobileMenus } from "../../fixture/mainNav";

import styled from "@emotion/styled";

import { FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import img from "../images/wanted.png";

const MobileMainMenu = ({ visible, onVisible }) => {
  return (
    <MenuWrap active={visible}>
      <Head>
        <Logo>
          <img src={img} />
          로고
        </Logo>
        <button type="button" onClick={() => onVisible(false)}>
          <FaTimes size="25" />
        </button>
      </Head>
      <Body>
        {mobileMenus.map(({ id, menus }) => {
          return (
            <MenuGroup key={id}>
              {menus.map((menu) => (
                <li key={`${id}-${menu}`}>
                  <button type="button">{menu}</button>
                </li>
              ))}

              {id === 1 && (
                <Profile>
                  <button type="button">
                    <CgProfile size="40" />
                  </button>
                </Profile>
              )}
            </MenuGroup>
          );
        })}
      </Body>
    </MenuWrap>
  );
};

const MenuWrap = styled.div(({ active }) => ({
  display: active ? "block" : "none",
  position: "fixed",
  top: 0,
  left: 0,
  padding: "20px 20px 40px",
  width: "100%",
  height: "100%",
  overflow: "auto",
  background: "#fff",
  boxSizing: "border-box",
  "@media (min-width: 768px)": {
    display: "none",
  },
}));

const Head = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Logo = styled.div({
  width: "70px",
  height: "32px",
  overflow: "hidden",
  img: {
    margin: "-3px 0 0 -5px",
    width: "100%",
  },
});

const Body = styled.div({
  margin: "30px 0 0",
});

const MenuGroup = styled.ul({
  position: "relative",
  "& + &": {
    marginTop: "15px",
    paddingTop: "15px",
    borderTop: "1px solid #eee",
  },
  button: {
    padding: "15px 0",
    fontSize: "20px",
  },
});

const Profile = styled.li({
  position: "absolute",
  right: 0,
  top: "7px",
  button: {
    padding: "0",
  },
});

export default MobileMainMenu;
