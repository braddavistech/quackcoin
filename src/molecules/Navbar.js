import { styled } from 'styled-components';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const WhiteDiv = styled.div`
  background-color: #0181ff;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
`

const Motto = styled.p`
  color: white;
  margin: 0;
  text-align: center;
  font-size: 1.8rem;
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
`

const NavMenuIconDiv = styled.div`
  padding: 5px;
  display: flex;
  justify-content: end;
`

const NavMenu = styled.div`
  display: flex;
  ${(width) => width <= 500 ? `
    flex-direction: column;
  ` : `
    flex-direction: row;
    justify-content: space-evenly;
  `}
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bolder;
  display: flex;
  align-items: center;
  font-size: 20px;
  ${({ active }) => active === 'true' && `
    font-size: 24px;
  `}
`

const Navbar = ({ width }) => {
  const [showMenu, setShowMenu] = useState(width >= 501)
  const location = useLocation();



  console.warn({ width })
  return (
    <WhiteDiv>
      <Motto>NOT JUST A MEME, WE ARE A MOVEMENT!</Motto>
      {width <= 500 && <NavMenuIconDiv>
        {!showMenu ? <MenuIcon onClick={() => setShowMenu(true)} icon={faChevronDown} /> : <MenuIcon onClick={() => setShowMenu(false)} icon={faChevronUp} />}
      </NavMenuIconDiv>}
      {showMenu &&
      <>
        <NavMenu>
          <NavItem to="/" active={(location.pathname === '/').toString()}>
            Home
          </NavItem>
          <NavItem to="/mission" active={(location.pathname === '/mission').toString()}>
            Mission
          </NavItem>
          <NavItem to="/founder" active={(location.pathname === '/founder').toString()}>
            Founder
          </NavItem>
          <NavItem to="/roadmap" active={(location.pathname === '/roadmap').toString()}>
            Roadmap
          </NavItem>
          </NavMenu>
        </>}
    </WhiteDiv>
  );
}

export default Navbar;
