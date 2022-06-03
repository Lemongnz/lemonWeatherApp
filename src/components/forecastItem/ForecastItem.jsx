import { ForecastItemContainer } from "./styles";

export default function ForecastItem({ item }) {
  return (
    <ForecastItemContainer>
      <div className="image">
        <img
          alt="weather"
          src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
        />
      </div>
      <div className="temp">
        <p>
          <span>{Math.round(item.app_max_temp)}</span>°
        </p>
        /
        <p>
          <span>{Math.round(item.app_min_temp)}</span>°
        </p>
      </div>
    </ForecastItemContainer>
  );
}
