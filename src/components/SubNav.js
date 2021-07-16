import React from "react";

import styled from "@emotion/styled";

import { IoIosArrowForward } from "react-icons/io";

const SubNav = ({ id, oneDepthMenus = [], twoDepthMenus = [] }) => {
  return (
    <Nav>
      {oneDepthMenus.map((menu) => (
        <dt key={`${id}${menu}`}>
          <ArrowButton type="button">
            {menu}
            <IoIosArrowForward />
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
            <IoIosArrowForward />
          </ArrowButton>
        </dd>
      )}
    </Nav>
  );
};

const ArrowButton = styled.button({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 0",
  textAlign: "left",
});

const Nav = styled.dl({
  flex: 1,
  "& + &": {
    marginLeft: "20px",
  },
  dt: {
    button: {
      fontSize: "17px",
    },
  },
  dd: {
    button: {
      padding: "5px 20px 5px 0",
      color: "#999",
      svg: {
        color: "#999",
      },
    },
  },
});

export default SubNav;
