import { styled } from 'styled-components';
import Logo from '../images/BikeQuack.png'

const DivRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const ButtonDiv = styled.div`
  border: 2px solid black;
  border-radius: 50px;
  justify-content: center;
  ${({ width }) => width <= 500 ? `
    width: 60vw;
     `: `width: 20vw;`
  }
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  min-width: 150px;
`

const Image = styled.img`
  width: 35px;
  height: 35px;
`

const Text = styled.p`
  font-size: 20px;
  font-weight: bolder;
  font-family: "Permanent Marker", cursive;
  margin: 0px;
`

const LinkButton = (props) => {
  const { innerWidth: width } = window;

  console.warn({ props })
  return (
    <DivRow>
      <ButtonDiv width={width} onClick={() => window.open(props.to)}>
        <Image src={props.src} alt={props.text} />
        <Text>{props.text}</Text>
      </ButtonDiv>
    </DivRow>
  );
}

export default LinkButton;
