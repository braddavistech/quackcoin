import { styled } from "styled-components";
import PieChart from "../molecules/PieChart";
import MemeImage from "../atoms/MemeImage";
import OrangeBoss from '../images/OrangeBoss.png'
import Quack from '../images/Quack.png'
import LamboQuack from "../images/LamboQuack.jpeg"
import BeatlesQuack from "../images/BeatlesQuack.jpeg"
import MatrixQuack from "../images/MatrixQuack.jpeg"
import PeopleQuack from "../images/PeopleQuack.jpeg"
import SpaceQuack from "../images/SpaceQuack.jpeg"
import SuperheroQuack from "../images/SuperheroQuack.jpeg"

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  ${({ width }) => width <= 500 ? `
    flex-direction: column;
  `: `
    flex-direction: row;
    padding: 30px 0;
  `}
`

const Box = styled.div`
  width: 35vw;
  height: 35vw;
  background-color: white;
`


const ScrollContent = ({ width }) => {
  return (
    <>
      <Row width={width} top={width <= 500 ? '-50vw' : width <= 700 ? '-40vw' : width <= 1050 ? '-30vw' : '-20vw'}>
        <MemeImage width={width} src={OrangeBoss} alt="Online Boss" background={`var(--background-orange)`} titles={['DOXXED FOUNDER', '@ONLINEBOSS_']}/>
        <MemeImage width={width} src={Quack} alt="Quack" background={`var(--background-orange)`} titles={['$QUACK DEALER']} />
      </Row>
      <PieChart width={width} />
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

export default ScrollContent;
