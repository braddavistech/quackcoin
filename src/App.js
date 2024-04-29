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
import QuackTitle from './atoms/QuackTitle';
import About from "./sections/About";

const Body = styled.div`

`

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const setWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener('resize', setWindowWidth)

  return (
    <Body>
      <Navbar width={width}/>
      <QuackTitle width={width} />
      <ScrollWrapper speed={40}>
        <About width={width} />
        <About width={width} />
        <About width={width} />
        <About width={width} />
        <About width={width} />
      </ScrollWrapper>
    </Body>
  );
}

export default App;
