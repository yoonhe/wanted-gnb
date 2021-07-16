import React from "react";

import styled from "@emotion/styled";

import { IoIosArrowForward } from "react-icons/io";

const SubNavItem = ({ id, oneDepthMenus = [], twoDepthMenus = [] }) => {
  return (
    <Nav>
      {oneDepthMenus.map((menu) => (
        <dt key={`${id}${menu}`}>
          <ArrowButton type="button">
            {menu}
            <span>
              <IoIosArrowForward />
            </span>
          </ArrowButton>
        </dt>
      ))}
      {twoDepthMenus.map((menu) => (
        <dd key={`${id}${menu}`}>
          <button type="button">{menu}</button>
        </dd>
      ))}
      {twoDepthMenus.length !== 0 && (
        <dd>
          <ArrowButton type="button">
            더보기
            <span>
              <IoIosArrowForward />
            </span>
          </ArrowButton>
        </dd>
      )}
    </Nav>
  );
};

const ArrowButton = styled.button({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 0",
  textAlign: "left",
  span: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
});

const Nav = styled.dl({
  width: "15.666%",
  "& > * button": {
    padding: "5px 20px 5px 0",
    display: "block",
    width: "100%",
    textAlign: "left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  dt: {
    button: {
      fontSize: "17px",
    },
  },
  dd: {
    button: {
      color: "#999",
      svg: {
        color: "#999",
      },
    },
  },
  "@media (min-width: 768px)": {
    "& + &": {
      marginLeft: "20px",
    },
  },
});

export default SubNavItem;
