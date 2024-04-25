import { styled } from "styled-components";
import ViewWrapper from "../atoms/ViewWrapper";

const Title = styled.h3`
    text-align: center;
    font-size: 30px;
`

const ChartData = styled.iframe`

`


const Chart = ({ width }) => {
  return (
    <ViewWrapper width={width}>
      <Title>Placeholder For Chart</Title>
      {/* <ChartData src="https://coinmarketcap.com/community/post/335796758" /> */}
    </ViewWrapper>
  );
}

export default Chart;
