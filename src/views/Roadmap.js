import { styled } from "styled-components";
import ViewWrapper from "../atoms/ViewWrapper";

const Title = styled.h3`
    text-align: center;
    font-size: 30px;
`


const Roadmap = ({ width }) => {

  return (
    <ViewWrapper width={width}>
      <Title width={width}>Placeholder For Roadmap</Title>
    </ViewWrapper>
  );
}

export default Roadmap;
