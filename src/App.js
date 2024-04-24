import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Home from './views/Home';
import HomePageHeader from "./molecules/HomePageHeader";
import Navbar from "./molecules/Navbar";
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
  const [width, setWidth] = useState(window.innerWidth)
  const setWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener('resize', setWindowWidth)

  return (
    <Div>
      <HomePageHeader width={width}/>
      <Navbar width={width}/>
      <Routes>
        <Route path="/founder" element={<Founder />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="*" element={<Home width={width}/>} />
      </Routes>
      <Footer/>
    </Div>
  );
}

export default App;
