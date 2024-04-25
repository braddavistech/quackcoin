import { styled } from "styled-components";
import HomePageHeader from "../molecules/HomePageHeader";
import ViewWrapper from "../atoms/ViewWrapper";
import HomeBody from "../molecules/HomeBody";
import Links from "../molecules/Links";
import HomePageImage from "../images/HomePageImage.jpg"

const Div = styled.div`
  width: 100vw;
`

const Header = styled.img`
  width: 100vw;
`

const Home = ({ width }) => {
  return (
    <ViewWrapper width={width}>
      <Header src={HomePageImage} alt='Quack Header' />
      <Div>
        <HomeBody width={width} />
        {/* <Links /> */}
      </Div>
    </ViewWrapper>
  );
}

export default Home;
