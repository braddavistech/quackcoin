import { styled } from 'styled-components';
import LinkButton from '../atoms/LinkButton';
import LinkedIn from '../images/LinkedIn.png'
import Uniswap from '../images/Uniswap.png'
import Quack from '../images/Quack.png'
import Dextools from '../images/Dextools.png'

const Div = styled.div`
  display: flex;
    ${({ width }) => width <= 500 ? `
    flex-direction: column;
     `: `flex-direction: row;`
  }
  flex-wrap: wrap;
  background-color: white;
  width: 100vw;
  padding: 20px 0px 5px;
  justify-content: space-evenly;
  align-items: center;
`

const Image = styled.img`
  width: 50px;
`

const Paragraph = styled.p`
  font-weight: bolder;
  padding: 10px;
  border-radius: 10px;
  width: 100vw;
  ${({ width }) => width <= 500 ? `
    font-size: 15px;
  ` : `font-size: 30px;`}
  font-family: "Permanent Marker", cursive;
  text-align: center;
`

const Copywright = styled.p`
  font-weight: bolder;
  text-align: center;
`

const Links = () => {
  const { innerWidth: width } = window;
  return (
    <Div width={width}>
      <LinkButton src={Uniswap} to={'https://app.uniswap.org/swap?outputCurrency=0x5ace197d87b614942bc1670eb0ddd55ce4432801&chain=base'} text="Uniswap" />
      <LinkButton src={Dextools} to={'https://www.dextools.io/app/en/base/pair-explorer/0xdb8e18f3884a52d283500554dde7dd3b5d633d78?t=1713736611418'} text="DexTools" />
      <LinkButton src={LinkedIn} to={'https://www.linkedin.com/in/christian-clayton-398330157'} text="CEO LinkedIn" />
      <LinkButton src={Quack} to={'https://twitter.com/Onlineboss_'} text="CEO Twitter" />
    </Div>
  );
}

export default Links;
