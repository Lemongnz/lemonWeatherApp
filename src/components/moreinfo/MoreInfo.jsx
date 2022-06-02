import { Container, FavContainer } from "./styles";
import Fav from "../fav/fav";
import { TextMoreInfo } from "./styles";

export default function MoreInfo({ currentWeather }) {
  return (
    <Container>
      {currentWeather && (
        <>
          <div>
            <p>{Math.round(currentWeather?.rh)} %</p>
            <TextMoreInfo>HUMIDITY</TextMoreInfo>
          </div>
          <div>
            <p>{Math.round(currentWeather?.app_temp)}°</p>
            <TextMoreInfo>FEEL LIKE</TextMoreInfo>
          </div>
          <div>
            <p>{Math.round(currentWeather?.wind_spd)} m/s</p>
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
