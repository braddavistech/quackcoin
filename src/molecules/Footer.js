import { styled } from 'styled-components';
import QuackOnBike from '../atoms/QuackOnBike';

const Div = styled.div`
  background-color: #0080ff;
  width: 100vw;
  padding: 20px 0px 5px;
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

const Footer = () => {
  return (
    <Div>

      <Copywright>Copyright 2024 QUACK COIN– All rights reserved.</Copywright>
    </Div>
  );
}

export default Footer;
