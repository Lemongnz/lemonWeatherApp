import ActualWeather from "../actual-weather/actual-weather";
import Forecast from "../forecast/forecast";
import {
  Container,
  CurrentWeatherContainer,
  FavListContainer,
  FavSearchContainer,
  ForecastContainer,
  ForecastWeatherContainer,
  MoreInfoWeatherContainer,
  SearchContainer,
} from "./styles";
import { useState } from "react";
import {
  getCurrentWeather,
  getForecastWeather,
} from "../../service/httpClient";
import FavList from "../menu/menu";
import MoreInfo from "../moreinfo/MoreInfo";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState();
  const [colorCode, setColorCode] = useState("2");

  const searchWeather = (e) => {
    if (e.key === "Enter") {
      getCurrentWeather(query).then((res) => {
        const firstWeatherCode = res.data[0].weather.code.toString()[0];
        if (!res.error) {
          setCurrentWeather(res.data[0]);
          setQuery("");
          setColorCode(firstWeatherCode);
        }
      });
      getForecastWeather(query).then((data) => {
        setForecast(data);
      });
    }
  };

  return (
    <Container weatherCode={colorCode}>
      <FavSearchContainer>
        <FavListContainer>
          <FavList />
        </FavListContainer>
        <SearchContainer>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={searchWeather}
          />
        </SearchContainer>
      </FavSearchContainer>

      <ForecastWeatherContainer>
        <CurrentWeatherContainer>
          <ActualWeather currentWeather={currentWeather} />
        </CurrentWeatherContainer>

        <ForecastContainer>
          <Forecast forecast={forecast} />
        </ForecastContainer>

        <MoreInfoWeatherContainer>
          <MoreInfo currentWeather={currentWeather} />
        </MoreInfoWeatherContainer>
      </ForecastWeatherContainer>
    </Container>
  );
}
