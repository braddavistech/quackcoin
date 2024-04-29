import { styled } from 'styled-components';
import QuackText from '../images/QuackText.png'

const Div = styled.div`
  display: flex;
  justify-content: center;

`

const Image = styled.img`
  position: absolute;
  top: ${({ width }) => width <= 500 ? '26vw' : '8vw'};
  width: ${({ width }) => width <= 500 ? '75vw' : '50vw'};
`

const QuackTitle = ({ width }) => {
  return (
    <Div>
      <Image src={QuackText} alt="Quack Coin" width={width}/>
    </Div>
  );
}

export default QuackTitle;
