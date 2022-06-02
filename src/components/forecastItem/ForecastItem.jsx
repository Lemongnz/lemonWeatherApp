import { ForecastItemContainer } from "./styles";

export default function ForecastItem({ item }) {
  return (
    <ForecastItemContainer>
      <div className="image">
        <img
          alt="weather icon"
          src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
        />
      </div>
      <div className="temp">
        {Math.round(item.app_max_temp)}°/ {Math.round(item.app_min_temp)}°
      </div>
    </ForecastItemContainer>
  );
}
