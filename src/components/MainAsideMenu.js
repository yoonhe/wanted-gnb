import React, { memo } from "react";

import styled from "@emotion/styled";

import { CgProfile } from "react-icons/cg";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const MainAsideMenu = () => {
  return (
    <>
      <Wrap>
        <li>
          <Button type="button">
            <RiSearch2Line size="20" />
          </Button>
        </li>
        <li>
          <Button type="button">
            <IoMdNotificationsOutline size="20" fontWeight="bold" />
          </Button>
        </li>
        <li>
          <Button type="button" onlyWeb={true}>
            <CgProfile size="20" />
          </Button>
        </li>
        <BorderLeftMenu type="border" onlyWeb={true}>
          <BorderRadiusButton type="button">기업 서비스</BorderRadiusButton>
        </BorderLeftMenu>
        <MobileMenu>
          <Button type="button">
            <GiHamburgerMenu size="20" />
          </Button>
        </MobileMenu>
      </Wrap>
    </>
  );
};

const Wrap = styled.ul({
  display: "flex",
  alignItems: "center",
});

const Button = styled.button(({ onlyWeb }) => ({
  position: "relative",
  padding: "5px",
  "@media (max-width: 768px)": {
    display: onlyWeb && "none",
  },
}));

const BorderLeftMenu = styled.li(({ onlyWeb }) => ({
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
  "@media (max-width: 1028px)": {
    paddingLeft: "20px",
    marginLeft: "10px",
  },
  "@media (max-width: 768px)": {
    display: onlyWeb && "none",
  },
}));

const BorderRadiusButton = styled.button({
  padding: "5px 10px",
  border: "1px solid #dcdcdc",
  borderRadius: "20px",
  fontSize: "13px",
});

const MobileMenu = styled.li({
  display: "none",
  "@media (max-width: 768px)": {
    display: "block",
  },
});

export default memo(MainAsideMenu);
