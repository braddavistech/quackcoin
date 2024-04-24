import { styled } from "styled-components";

const Div = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #9dd2fa;
`

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
`


const Founder = () => {
  return (
    <Div>
      <Title>Our Doxxed Founder</Title>
    </Div>
  );
}

export default Founder;
