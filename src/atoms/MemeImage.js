import { styled } from 'styled-components';
import Logo from '../images/BikeQuack.png';
import Splash from '../images/Splash.png';
import TelegramQuack from '../images/TelegramQuack.png';
import TwitterQuack from '../images/TwitterQuack.png';

const ImageDiv = styled.div`
  // border: 2px solid #FFCA00;
  border-radius: 10px;
  height: fit-content;
  ${({ background }) => background && `background-color: ${background};`}
  ${({ width }) => width <= 500 ? `
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  ` : width <= 1050 ? `
  width: 35vw;
  ` : `
  width: 30vw;
  `};
`
const Image = styled.img`
  height: fit-content;
  border-radius: 10px;
  width: ${({ width }) => width <= 500 ? '80vw': width <= 1050 ? '35vw' : '30vw'};
`

const TitleDiv = styled.div`

  margin: ${({ width }) => width <= 500 ? '30px 10px;' : '0 10px;'}
`

const TitleText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bolder;
  font-size: 20px;
`

const MemeImage = ({ src, alt, width, background, titles, href }) => {

  const makeTitles = (titles) => {
    if (titles) {
      return <TitleDiv width={width}>
        {titles.map(title => <TitleText>{title}</TitleText>) }
      </TitleDiv>
    }
  }

  return (
    <ImageDiv background={background} width={width}>
      {makeTitles(titles)}
      <Image src={src} alt={alt} width={width}  />
    </ImageDiv>
  );
}

export default MemeImage;
