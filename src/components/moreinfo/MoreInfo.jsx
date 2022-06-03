import { Container, FavContainer } from "./styles";
import Fav from "../fav/fav";
import { TextMoreInfo } from "./styles";

export default function MoreInfo({ currentWeather }) {
  return (
    <Container>
      {currentWeather && (
        <>
          <div>
            <p>
              <span aria-label="humidity">
                {Math.round(currentWeather?.rh) || "-"}
              </span>
              %
            </p>
            <TextMoreInfo>HUMIDITY</TextMoreInfo>
          </div>
          <div>
            <p>
              <span aria-label="feellike">
                {Math.round(currentWeather?.app_temp) || "-"}
              </span>
              °
            </p>
            <TextMoreInfo>FEEL LIKE</TextMoreInfo>
          </div>
          <div>
            <p>
              <span aria-label="wind">
                {Math.round(currentWeather?.wind_spd) || "-"}
              </span>{" "}
              m/s
            </p>
            <TextMoreInfo>WIND</TextMoreInfo>
          </div>
          <FavContainer>
            <Fav name={currentWeather.city_name} />
          </FavContainer>
        </>
      )}
    </Container>
  );
}
