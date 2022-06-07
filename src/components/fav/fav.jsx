import { TiHeartOutline, TiHeart } from "react-icons/ti";
import useFav from "../../hooks/useFavCity";
import { Container, CustomButton } from "./styles";

export default function Fav({ name }) {
  const { favCity, addFav, removeFav } = useFav();

  const handleClick = () => {
    favCity?.includes(name) ? removeFav(name) : addFav(name);
  };
  return (
    <Container>
      <CustomButton aria-label="addButton" onClick={handleClick}>
        {favCity?.includes(name) ? (
          <span aria-label="fullyHeart" className="added">
            <TiHeart />
          </span>
        ) : (
          <span aria-label="emptyHeart">
            <TiHeartOutline />
          </span>
        )}
      </CustomButton>
    </Container>
  );
}
