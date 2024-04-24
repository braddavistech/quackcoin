import { styled } from 'styled-components';
import QuackOnBike from '../atoms/QuackOnBike';

const Div = styled.div`
  width: 100vw;
`

const TextDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Paragraph = styled.p`
  font-weight: bolder;
  border-radius: 10px;
  width: 90vw;
  ${({ width }) => width <= 500 ? `
    font-size: 15px;
  ` : `font-size: 30px;`}
  margin: 30px 0px;
  font-family: "Permanent Marker", cursive;
  text-align: center;
`

const HomeBody = ({ width }) => {
  return (
    <Div>
      <QuackOnBike width={width} style={`width: 40vw;`} />
      <TextDiv>
      <Paragraph><span style={{color: 'yellow'}}>$Quack</span> is not just a memecoin.</Paragraph>
      <Paragraph>We are a movement. Quack is the mighty duck of the base blockchain, bringing a splash of humour and excitement to the world of digital currency. Join us and become part of the flock today!</Paragraph>
      </TextDiv>
    </Div>
  );
}

export default HomeBody;
