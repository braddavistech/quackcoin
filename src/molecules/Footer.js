import { styled } from 'styled-components';

const Motto = styled.p`
  color: white;
  margin: 0;
  text-align: center;
  font-size: 1.8rem;
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
`

const Div = styled.div`
  background-color: var(--background_3);
  width: 100vw;
`

const Copywright = styled.p`
  font-weight: bolder;
  text-align: center;
  color: white;
  margin: 0;
`

const Footer = () => {
  return (
    <Div>
      <Copywright>Copyright 2024 QUACK COIN– All rights reserved.</Copywright>
    </Div>
  );
}

export default Footer;
