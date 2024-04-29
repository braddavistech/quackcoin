import { styled } from "styled-components";
import QuackTitle from "../atoms/QuackTitle";
import MemeImage from "../atoms/MemeImage";
import LamboQuack from "../images/LamboQuack.jpeg"
import BeatlesQuack from "../images/BeatlesQuack.jpeg"
import MatrixQuack from "../images/MatrixQuack.jpeg"
import PeopleQuack from "../images/PeopleQuack.jpeg"
import SpaceQuack from "../images/SpaceQuack.jpeg"
import SuperheroQuack from "../images/SuperheroQuack.jpeg"
import ViewWrapper from "../atoms/ViewWrapper";

const Row = styled.div`
  display: flex;
  flex-direction: ${({ width }) => width <= 500 ? 'column': 'row'};
  justify-content: space-around;
`

const Box = styled.div`
  width: 35vw;
  height: 35vw;
  background-color: white;
`


const About = ({ width }) => {
  return (
    <>
      <Row width={width}>
        <MemeImage width={width} src={LamboQuack} alt="Lambo Quack" />
        <MemeImage width={width} src={BeatlesQuack} alt="Beatles Quack" />
      </Row>
      <Row width={width}>
        <MemeImage width={width} src={MatrixQuack} alt="Matrix Quack" />
        <MemeImage width={width} src={PeopleQuack} alt="People Quack" />
      </Row>
      <Row width={width}>
        <MemeImage width={width} src={SpaceQuack} alt="Space Quack" />
        <MemeImage width={width} src={SuperheroQuack} alt="Superhero Quack" />
      </Row>
    </>
  );
}

export default About;
