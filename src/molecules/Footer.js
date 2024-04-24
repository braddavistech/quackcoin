import { styled } from 'styled-components';

const Div = styled.div`
  background-color: #0080ff;
  width: 100vw;
  padding: 20px 0px 5px;
`

const Copywright = styled.p`
  font-weight: bolder;
  text-align: center;
  color: white;
`

const Footer = () => {
  return (
    <Div>
      <Copywright>Copyright 2024 QUACK COIN– All rights reserved.</Copywright>
    </Div>
  );
}

export default Footer;
