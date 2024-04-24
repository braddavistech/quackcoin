import { styled } from 'styled-components';
import Logo from '../images/NewQuackLogo.png'

const Div = styled.div`
  display: flex;
  justify-content: center;

`

const Image = styled.img`
  position: absolute;
  top: 8vw;
  width: 50%;
`

const QuackMainLogo = () => {
  return (
    <Div>
      <Image src={Logo} alt="Quack Logo" />
    </Div>
  );
}

export default QuackMainLogo;
