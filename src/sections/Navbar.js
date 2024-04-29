import { styled } from 'styled-components';
import QuackText from '../images/QuackText.png'
import BuyButton from '../atoms/BuyButton';

const NavbarDiv = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, .3);
`

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  padding: 5px 0px;
`

const NavLabel = styled.div`
  display: flex;
  align-items: center;
`

const NavItem = styled.p`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: bolder;
`

const QuackImage = styled.img`
  height: ${({ width }) => width <= 500 ? '16px' : '22px'};
  width: auto;
`


const Navbar = ({ width }) => {

  return (
    <NavbarDiv>
      <NavMenu>
        <NavLabel>
          <QuackImage src={QuackText} alt="Quack" width={width} />
        </NavLabel>
        <NavItem>
          About
        </NavItem>
        <NavItem>
          Roadmap
        </NavItem>
        <NavItem>
          Links
        </NavItem>
        <BuyButton width={width} text='BUY NOW' to='https://app.uniswap.org/swap?outputCurrency=0x5ace197d87b614942bc1670eb0ddd55ce4432801&chain=base' />
      </NavMenu>
    </NavbarDiv>
  );
}

export default Navbar;
