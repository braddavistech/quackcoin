import { styled } from "styled-components";
import HomeBody from "../molecules/HomeBody";
import Links from "../molecules/Links";

const Div = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #9dd2fa;
`

const Home = ({ width }) => {
  return (
    <Div>
      <HomeBody width={width}/>
      <Links />
    </Div>
  );
}

export default Home;
