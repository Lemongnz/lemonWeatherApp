import { Container } from "./styles";
import { useState } from "react";

export default function BurguerButton({ onToggleMenu }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
    onToggleMenu(e);
  };

  return (
    <Container>
      <div
        onClick={handleClick}
        className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}
