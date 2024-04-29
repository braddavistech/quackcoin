import { styled } from 'styled-components';
import Logo from '../images/BikeQuack.png'

const DivRow = styled.div`
  display: flex;
  justify-content: end;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;

`

const Button = styled.button`
  background-color: #FFCA00;
  display: flex;
  justify-content: center;
  width: ${({ width }) => width <= 500 ? '105px' : '130px'};
  font-size: 18px;
  font-weight: bolder;
  border-radius: 22px;
  border: 1px solid black;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 1);
  color: black;
  height: 24px;
  cursor: pointer;
`

const BuyButton = ({ width, to, text} ) => {
  return (
      <ButtonDiv onClick={() => window.open(to)}>
        <Button className="Quack-logo" alt="Quack Coin" target="_blank" width={width}>{text}</Button>
      </ButtonDiv>
  );
}

export default BuyButton;
