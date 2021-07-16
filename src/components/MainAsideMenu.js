import React from "react";

import styled from "@emotion/styled";

import { CgProfile } from "react-icons/cg";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const MainAsideMenu = () => {
  return (
    <Wrap>
      <li>
        <Button type="button">
          <RiSearch2Line size="25" />
        </Button>
      </li>
      <li>
        <Button type="button">
          <IoMdNotificationsOutline size="25" fontWeight="bold" />
        </Button>
      </li>
      <li>
        <Button type="button">
          <CgProfile size="25" />
        </Button>
      </li>
      <BorderLeftMenu type="border">
        <BorderRadiusButton type="button">기업 서비스</BorderRadiusButton>
      </BorderLeftMenu>
    </Wrap>
  );
};

const Wrap = styled.ul({
  display: "flex",
  alignItems: "center",
});

const Button = styled.button({
  position: "relative",
  padding: "10px",
});

const BorderLeftMenu = styled.li({
  position: "relative",
  paddingLeft: "30px",
  marginLeft: "20px",
  "&:before": {
    display: "block",
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
    width: "1px",
    height: "10px",
    background: "#dcdcdc",
    content: '""',
  },
});

const BorderRadiusButton = styled.button({
  padding: "5px 10px",
  border: "1px solid #dcdcdc",
  borderRadius: "20px",
});

export default MainAsideMenu;
