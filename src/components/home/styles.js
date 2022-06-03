import styled from "styled-components";
import mountain from "../../assets/mountain.png";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) =>
    backGroundColors[props.weatherCode]?.background};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 220px;
    right: 0;
    background-size: 100vmin;
    background-image: url(${mountain});
    background-repeat: no-repeat;
    background-position: bottom center;
    opacity: 0.2;
    z-index: 0;
  }
`;

export const FavListContainer = styled.div`
  z-index: 4;
`;

export const SearchContainer = styled.div`
  background-color: #494b4d2e;

  margin-right: 10px;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #587789;
    background-image: linear-gradient(90deg, #587789 0%, #54aaa2 100%);
  }

  & input {
    display: block;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    font-size: 18px;
    background-color: transparent;
    min-height: 40px;
    padding: 1px 20px;

    &::placeholder {
      color: #363636d6;
    }
  }
`;

export const CurrentWeatherContainer = styled.div`
  max-width: 700px;
  width: 100%;
  min-height: 300px;
`;
export const ForecastContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100px;
`;
export const MoreInfoWeatherContainer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 10px 0;
  height: 85px;
`;

export const ForecastWeatherContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: grid;
  grid-column: 1 / 3;
  grid-row: 1;
  grid-template-columns: 1fr;
`;

const backGroundColors = {
  2: {
    background: "#737A7A",
    input: "#59381d",
  },
  3: {
    background: "#90A9B1",
  },
  5: {
    background: "#9FC6C6",
  },
  6: {
    background: "#FFFFFF",
  },
  7: {
    background: "#60B1E1",
  },
  8: {
    background: "#FEAC66",
    input: "#59381d",
  },
  9: {
    background: "#788C8F",
  },
};

export const FavSearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  z-index: 3;
  max-width: 900px;
`;
