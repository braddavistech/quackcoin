import React from "react";
import { styled } from 'styled-components';
import { Chart } from "react-google-charts";

const FullDiv = styled.div`
  height: 50vw;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`

const Div = styled.div`
  width: ${({ width }) => width <= 500 ? '80vw' : '60vw'};
  background-color: rgb(55,126,254);
`

const Title = styled.p`
  font-size: 22px;
  font-weight: bolder;
  text-align: center;
  margin: 5px 0 0;
`

const PieChart = ({ width }) => {

  const data = [
    ["Allocation", "Percentage of Allocation"],
    ["Burnt", 35],
    ["Presale", 20],
    ["Community Treasury", 15],
    ["Team & Advisors", 10],
    ["Marketing & Advertisement", 10],
    ["CEX's", 5],
    ["Liquidity Pool (LP)", 5]
  ];

  const options = {
    // title: "Token Distribution",
    chartArea: { width: '90%', height: '100%' },
    is3D: true,
    backgroundColor: 'rgb(55,126,254)',
    legend: { position: 'right', alignment: 'center', textStyle: { fontSize: 14, fontWeight: 'bolder' } }
  };

  return (
    <FullDiv>
      <Div width={width}>
        <Title>TOKEN DISTRIBUTION</Title>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"45vw"}
        />
      </Div>
    </FullDiv>
  );
}

export default PieChart