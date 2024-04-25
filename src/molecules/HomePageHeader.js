import { styled } from 'styled-components';
import HomePagePhoto from '../atoms/HomePagePhoto';
import BackToHodl from '../images/BackToHodl.jpeg';
import BalloonQuack from '../images/BalloonQuack.jpeg';
import BarQuack from '../images/BarQuack.jpeg'
import BatmanQuack from '../images/BatmanQuack.jpeg';
import BeatlesQuack from '../images/BeatlesQuack.jpeg'
import HomePageImage from '../images/HomePageImage.jpg'
// import CardQuack from '../images/CardQuack.jpeg';
// import ChessQuack from '../images/ChessQuack.jpeg';
// import CookQuack from '../images/CookQuack.jpeg';
// import KingQuack from '../images/KingQuack.jpeg'
import LamboQuack from '../images/LamboQuack.jpeg'
import MatrixQuack from '../images/MatrixQuack.jpeg'
import PeopleQuack from '../images/PeopleQuack.jpeg';
import SpaceQuack from '../images/SpaceQuack.jpeg';
import SuperheroQuack from '../images/SuperheroQuack.jpeg'

import QuackMainLogo from '../atoms/QuackMainLogo';
import BuyButton from '../atoms/BuyButton';

const Div = styled.div`
  background-color: #9dd2fa;
`

const WrapperDiv = styled.div`

  height: 40vw;
  overflow-x: hidden;
  overflow-y: hidden;
`

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
`

const Overlay = styled.div`
  background-color: #9dd2faab;
  height: 40vw;
  width: 100vw;
  position: absolute;
  top: 0;

`

const HomePageHeader = ({ width }) => {
  return (
    <Div>
      <WrapperDiv>

        <ImageRow>
          <HomePagePhoto src={LamboQuack} alt="Lambo Meme" width='24%' tilt='-6deg' top='-25px' left='-3%' />
          <HomePagePhoto src={SuperheroQuack} alt="Superhero Meme" width='24%' tilt='2deg' top='-22px' left='-3%' />
        <HomePagePhoto src={PeopleQuack} alt="People Meme" width='24%' tilt='-2deg' top='-22px' left='35%' />
          <HomePagePhoto src={SpaceQuack} alt="Space Meme" width='24%' tilt='2deg' top='-22px' left='-11%' />
          <HomePagePhoto src={BeatlesQuack} alt="Beatles Meme" width='24%' tilt='-2deg' top='-22px' left='-55%' />
        </ImageRow>
        <ImageRow>
          <HomePagePhoto src={BalloonQuack} alt="Balloon Meme" width='24%' tilt='-6deg' top='-25px' left='-3%' />
          <HomePagePhoto src={BarQuack} alt="Bar Meme" width='24%' tilt='2deg' top='-23px' left='-3%' />
          <HomePagePhoto src={BatmanQuack} alt="Batman Meme" width='24%' tilt='-2deg' top='-22px' left='35%' />
          <HomePagePhoto src={MatrixQuack} alt="Matrix Meme" width='24%' tilt='2deg' top='-24px' left='-11%' />
          <HomePagePhoto src={BackToHodl} alt="Back To The Future Meme" width='24%' tilt='-2deg' top='-28px' left='-55%' />
        </ImageRow>
      </WrapperDiv>
      <Overlay />
      <QuackMainLogo />
      {/* <BuyButton to="https://app.uniswap.org/swap?outputCurrency=0x5ace197d87b614942bc1670eb0ddd55ce4432801&chain=base" text="BUY QUACK" /> */}
    </Div>
  );
}

export default HomePageHeader;
