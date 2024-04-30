import { styled } from "styled-components";
import PieChart from "../molecules/PieChart";
import MemeImage from "../atoms/MemeImage";
import OnlineBossFinger from '../media/images/ChristianHeadshotFingerpointBlue.png'

import OnlineBossOrange from '../media/images/OnlineBossOrange.png'
import Quack from '../media/images/Quack.png'
import LamboQuack from "../media/images/LamboQuack.jpeg"
import BeatlesQuack from "../media/images/BeatlesQuack.jpeg"
import MatrixQuack from "../media/images/MatrixQuack.jpeg"
import PeopleQuack from "../media/images/PeopleQuack.jpeg"
import SpaceQuack from "../media/images/SpaceQuack.jpeg"
import SuperheroQuack from "../media/images/SuperheroQuack.jpeg"

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
  // const topWidth = width <= 500 ? '-20vw' : width <= 700 ? '-25vw' : width <= 1050 ? '-20vw' : '-15vw';

  return (
    <>
      <Row width={width} >
        <MemeImage width={width} src={OnlineBossFinger} alt="Online Boss" background={`rgba(255,255,255,.7)`} titles={['DOXXED FOUNDER', '@ONLINEBOSS_']} href="https://twitter.com/Onlineboss_" />
        <MemeImage width={width} src={Quack} alt="Quack" background={`rgba(255,255,255,.7)`} titles={['$QUACK DEALER']} href="https://twitter.com/quackonchain" />
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
