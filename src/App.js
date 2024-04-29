import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ScrollWrapper from "./molecules/ScrollWrapper";
import Navbar from './sections/Navbar';
import Socials from "./molecules/Socials";
import About from "./sections/ScrollContent";

const Body = styled.div`

`

const ParallaxDiv = styled.div`
  ${({ top }) => top && `
    position: relative;
    top: ${top};
  `}
`

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const setWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener('resize', setWindowWidth)

  return (
    <Body>
      <Navbar width={width} />
      <Socials width={width} />
      <ParallaxDiv top={width <= 500 ? '-90vw' : width <= 700 ? '-36vw' : width <= 1050 ? '-30vw' : '-20vw'}>
        <ScrollWrapper speed={70}>
          <About width={width} />
        </ScrollWrapper>
        <Socials width={width} />
      </ParallaxDiv>
    </Body>
  );
}

export default App;
