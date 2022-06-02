import { useState } from "react";
import useFavCity from "../../hooks/useFavCity";
import BurguerButton from "../burguerButton/burguerButton";
import { Container, BgDiv, FavElement } from "./styles";

export default function FavList() {
  const { favCity } = useFavCity();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <div className="principalButton">
        <BurguerButton onToggleMenu={handleClick} />
      </div>
      {clicked && (
        <>
          <div className={"active"}>
            {favCity.length > 0 ? (
              favCity.map((city) => (
                <FavElement key={city}>
                  <p>{city}</p>
                </FavElement>
              ))
            ) : (
              <div className="list active"> No hay favoritos </div>
            )}
          </div>
          <BgDiv className={"active"}></BgDiv>
        </>
      )}
    </Container>
  );
}
