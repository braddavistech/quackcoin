import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import styled from "styled-components";
import Home from './views/Home';
import HomePageHeader from "./molecules/HomePageHeader";
import Footer from "./molecules/Footer";
import Founder from "./views/Founder";
import Roadmap from "./views/Roadmap";
import Mission from "./views/Mission";

const Div = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #9dd2fa;
`
const WhiteDiv = styled.div`
  background-color: white;
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: space-around;
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  display: flex;
  align-items: center;
  font-size: 20px;
  ${({ active }) => active === 'true' && `
    font-size: 24px;
  `}
`

const App = () => {
  const location = useLocation();
  return (
    <Div>
      <HomePageHeader />
      <WhiteDiv>
        <NavItem to="/" active={(location.pathname === '/').toString()}>
          Home
        </NavItem>
        <NavItem to="/mission" active={(location.pathname === '/mission').toString()}>
          Mission
        </NavItem>
        <NavItem to="/founder" active={(location.pathname === '/founder').toString()}>
          Founder
        </NavItem>
        <NavItem to="/roadmap" active={(location.pathname === '/roadmap').toString()}>
          Roadmap
        </NavItem>
      </WhiteDiv>
      <Routes>
        <Route path="/founder" element={<Founder />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </Div>
  );
}

export default App;
