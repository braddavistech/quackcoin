import { styled } from "styled-components";
import ViewWrapper from "../atoms/ViewWrapper";
import Links from "../molecules/Links";

const Title = styled.h3`
    text-align: center;
    font-size: 30px;
`


const SocialLinks = ({ width }) => {
  return (
    <ViewWrapper width={width}>
      <Title>Links</Title>
      <Links width={width} />
    </ViewWrapper>
  );
}

export default SocialLinks;
