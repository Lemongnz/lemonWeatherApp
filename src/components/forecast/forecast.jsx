import { useEffect, useState } from "react";
import ForecastItem from "../forecastItem/ForecastItem";
import { Container } from "./styles";

export default function Forecast({ forecast }) {
  const [slicedForecast, setSlicedForecast] = useState([]);

  useEffect(() => {
    if (forecast?.data) {
      setSlicedForecast(forecast.data.slice(0, 5));
    }
  }, [forecast]);
  return (
    <Container>
      {forecast && (
        <>
          {slicedForecast.map((item, index) => {
            return <ForecastItem item={item} key={index}></ForecastItem>;
          })}
        </>
      )}
    </Container>
  );
}
