import { styled } from 'styled-components';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import QuackText from '../images/QuackText.png'
import BuyButton from '../atoms/BuyButton';

const NavbarDiv = styled.div`
  background-color: var(--background_3);
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
`

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  padding: 5px 0px;
`

const QuackImage = styled.img`
  height: 22px;
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bolder;
  display: flex;
  align-items: center;
  font-size: 18px;
  ${({ active }) => active === 'true' && `
    color: var(--background_1);
  `}
`

const Navbar = ({ width }) => {
  const location = useLocation();

  return (
    <NavbarDiv>
      <NavMenu>
        <NavItem to="/" active={(location.pathname === '/').toString()}>
          <QuackImage src={QuackText} alt="Quack"/>
        </NavItem>
        {width > 500 && <>
        <NavItem to="/about" active={(location.pathname === '/about').toString()}>
          About
        </NavItem>
        <NavItem to="/roadmap" active={(location.pathname === '/roadmap').toString()}>
          Roadmap
        </NavItem>
        <NavItem to="/links" active={(location.pathname === '/links').toString()}>
          Links
        </NavItem>
        {/* <NavItem to="/chart" active={(location.pathname === '/chart').toString()}>
          Chart
        </NavItem> */}
        </>}
        <BuyButton width={width} text='BUY NOW' to='https://app.uniswap.org/swap?outputCurrency=0x5ace197d87b614942bc1670eb0ddd55ce4432801&chain=base' />
      </NavMenu>
      { width <= 500 &&
        <NavMenu>
            <NavItem to="/about" active={(location.pathname === '/about').toString()}>
              About
            </NavItem>
            <NavItem to="/roadmap" active={(location.pathname === '/roadmap').toString()}>
              Roadmap
            </NavItem>
            <NavItem to="/links" active={(location.pathname === '/links').toString()}>
              Links
            </NavItem>
            {/* <NavItem to="/chart" active={(location.pathname === '/chart').toString()}>
              Chart
            </NavItem> */}
        </NavMenu>
      }
    </NavbarDiv>
  );
}

export default Navbar;
