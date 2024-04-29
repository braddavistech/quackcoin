import { styled } from 'styled-components';
import Logo from '../images/BikeQuack.png';
import Splash from '../images/Splash.png';
import TelegramQuack from '../images/TelegramQuack.png';
import TwitterQuack from '../images/TwitterQuack.png';


const Image = styled.img`
  width: ${({ width }) => width <= 500 ? '80vw': '40vw'};
  margin: auto;
  padding: 30px 0;
`

const MemeImage = ({ src, alt, width}) => {

  return (
    <>
      <Image src={src} alt={alt} width={width}/>
    </>
  );
}

export default MemeImage;
