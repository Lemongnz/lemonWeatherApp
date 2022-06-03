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
        aria-label="menu-button"
        onClick={handleClick}
        className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
      >
        <span aria-label="span-menu-fs"></span>
        <span aria-label="span-menu-sd"></span>
        <span aria-label="span-menu-tr"></span>
      </div>
    </Container>
  );
}
