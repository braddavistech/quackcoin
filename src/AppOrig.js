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
import About from "./views/About";
import Chart from "./views/Chart";
import SocialLinks from "./views/SocialLinks";

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
      {/* <Navbar width={width}/> */}
      <Routes>
        <Route path="/about" element={<About width={width} />} />
        <Route path="/roadmap" element={<Roadmap width={width} />} />
        <Route path="/links" element={<SocialLinks width={width} />} />
        <Route path="*" element={<Home width={width}/>} />
        {/* <Route path="/chart" element={<Chart width={width} />} /> */}
        {/* <Route path="/founder" element={<Founder />} /> */}
        {/* <Route path="/mission" element={<Mission />} /> */}
      </Routes>
      {/* <Footer/> */}
    </Div>
  );
}

export default App;
