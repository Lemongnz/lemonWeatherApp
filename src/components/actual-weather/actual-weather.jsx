import { CustomImage, Number, Today, TopSide } from "./styles";

export default function ActualWeather({ currentWeather }) {
  return (
    <TopSide>
      {currentWeather && (
        <>
          <Today>
            <p>
              Today in {currentWeather.city_name}, {currentWeather.country_code}
            </p>
          </Today>
          <CustomImage>
            <img
              alt="weather icon"
              src={`https://www.weatherbit.io/static/img/icons/${currentWeather.weather?.icon}.png`}
            />
          </CustomImage>
          <Number>
            <p>{Math.round(currentWeather.temp)}°</p>
          </Number>
        </>
      )}
    </TopSide>
  );
}
