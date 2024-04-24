import { styled } from "styled-components";
import QuackOnBike from "../atoms/QuackOnBike";
import QuackMainLogo from "../atoms/QuackMainLogo";
import HomePageHeader from "../molecules/HomePageHeader";
import HomeBody from "../molecules/HomeBody";
import Links from "../molecules/Links";
import Footer from "../molecules/Footer";

const Div = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #9dd2fa;
`

const WhiteDiv = styled.div`
  background-color: white;
  width: 100vw;
  height: 30px;
`


const Home = () => {
  return (
    <Div>
      <HomePageHeader />
      <WhiteDiv />
      <HomeBody />
      <Links />
      <Footer />
    </Div>
  );
}

export default Home;
