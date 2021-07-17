import React, { useState, useCallback, useEffect } from "react";

import styled from "@emotion/styled";

import { Inner } from "../css/common";

import MainNav from "./MainNav";
import MainAsideMenu from "./MainAsideMenu";
import MainSubNav from "./MainSubNav";

import { mainNavs } from "../../fixture/mainNav";
import MobileMainMenu from "./MobileMainMenu";

const App = () => {
  const [mobileMainMenuVisible, setMobileMainMenuVisible] = useState(false);

  const [navigations, setNavigations] = useState(
    mainNavs.map((nav, index) => ({
      id: index,
      name: nav,
      active: false,
      onlyWeb: index > 1,
    }))
  );

  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const handleNavClick = useCallback((id) => {
    setNavigations((prevNavigation) => {
      return prevNavigation.map((navigation) => {
        const { id: currentId } = navigation;

        return {
          ...navigation,
          active: id === currentId,
        };
      });
    });
  }, []);

  const handleSubMenuVisible = useCallback((isVisible) => {
    setSubMenuVisible(isVisible);
  }, []);

  const handleMobileMenuVisible = useCallback((isVisible) => {
    setMobileMainMenuVisible(isVisible);
  }, []);

  useEffect(() => {
    handleNavClick(0);
  }, []);

  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <>
      <Header>
        <HeaderInner>
          <nav>
            <Logo>
              <button type="button">Wanted</button>
            </Logo>
            <MainNav
              navigations={navigations}
              onClick={handleNavClick}
              onSubMenuVisible={handleSubMenuVisible}
            />
          </nav>
          <MainAsideMenu onMobileMenuVisible={handleMobileMenuVisible} />
          <MainSubNav
            visible={subMenuVisible ? 1 : 0}
            onSubMenuVisible={handleSubMenuVisible}
          />
        </HeaderInner>
      </Header>
      <MobileMainMenu
        visible={mobileMainMenuVisible}
        onVisible={handleMobileMenuVisible}
      />
      <main>
        <Inner>컨텐츠 영역</Inner>
      </main>
    </>
  );
};

const Header = styled.header({
  position: "relative",
  borderBottom: "1px solid #dcdcdc",
});

const HeaderInner = styled(Inner)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  nav: {
    display: "flex",
    flex: "1",
    alignItems: "center",
  },
});

const Logo = styled.p({
  button: {
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
});

export default App;
