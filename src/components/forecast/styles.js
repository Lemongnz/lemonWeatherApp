import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background-color: $(props => backGroundColors[props.weatherCode]?.background); */
  background-color: #02020221;
  padding: 10px 0;

  .last {
    border-bottom: 1px solid #d1c3c3;
  }
`;
