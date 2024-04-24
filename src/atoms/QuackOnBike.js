import { styled } from 'styled-components';
import Logo from '../images/BikeQuack.png';
import Splash from '../images/Splash.png';
import TelegramQuack from '../images/TelegramQuack.png';
import TwitterQuack from '../images/TwitterQuack.png';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
`

const Image = styled.img`
  width: 40vw;
  position: relative;
  left: 4vw;
`

const SplashImg = styled.img`
  position: relative;
  left: -3vw;
  bottom: -21vw;
  height: 20vw;
  width: 58vw;

`

const TelegramImg = styled.img`
  position: relative;
  left: -48vw;
  bottom: -18vw;
  height: 18vw;
  cursor: pointer;
`

const TwitterImg = styled.img`
  position: relative;
  left: -44vw;
  bottom: -15vw;
  height: 18vw;
  cursor: pointer;
`

const Paragraph = styled.p`
  color: #0681f8;
  background-color: white;
  font-weight: bolder;
  padding: 10px;
  border-radius: 10px;
  width: 50vw;
  ${({ width }) => width <= 500 ? `
    font-size: 15px;
  ` : `font-size: 30px;`}
  position: relative;
  left: 37vw;
  bottom: -20vw;
  margin: 0px;
font-family: "Permanent Marker", cursive;
`
const SmallParagraph = styled.p`
  color: white;
  font-weight: bolder;
  padding: 10px;
  border-radius: 10px;
  width: 50vw;
  ${({ width }) => width <= 500 ? `
    font-size: 15px;
  ` : `font-size: 25px;`}
  position: relative;
  left: 37vw;
  bottom: -20vw;
  margin: 0px;
font-family: "Permanent Marker", cursive;
`

const QuackOnBike = (props) => {
  const { innerWidth: width } = window;

  return (
    <>
      <Paragraph width={width}>Welcome to $Quack, the quacktastic memecoin that's making waves in the crypto world!</Paragraph>
      <SmallParagraph width={width}>CLICK DUCKS TO JOIN $QUACK COMMUNITY </SmallParagraph>
      <Div>
        <Image src={Logo} props={props} className="Quack-logo" alt="Quack Coin" />
        <SplashImg src={Splash} />
        <TelegramImg onClick={() => window.open('https://t.me/quackpublic')} src={TelegramQuack} />
        <TwitterImg onClick={() => window.open('https://twitter.com/quackonchain')} src={TwitterQuack} />
      </Div>
    </>
  );
}

export default QuackOnBike;
