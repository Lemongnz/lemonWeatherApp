/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import BurguerButton from "./burguerButton";

describe("<BurguerButton />", () => {
  let component;

  beforeEach(() => {
    const onToggleMenu = jest.fn();

    component = render(<BurguerButton onToggleMenu={onToggleMenu} />);
  });

  test("render content before click menu", () => {
    const menuButton = component.getByLabelText("menu-button");
    const secondSpanMenu = component.getByLabelText("span-menu-sd");

    expect(menuButton.className).not.toContain("open");
    expect(secondSpanMenu).toHaveStyle("opacity: 1;");
  });

  test("render content after click menu", () => {
    const menuButton = component.getByLabelText(/menu-button/i);
    const secondSpanMenu = component.getByLabelText(/span-menu-sd/i);

    fireEvent.click(menuButton);

    expect(menuButton.className).toContain("open");
    expect(secondSpanMenu).toHaveStyle("opacity: 0;");
  });
});
