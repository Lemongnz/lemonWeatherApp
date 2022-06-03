/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Fav from "./fav";
import CityContext from "../../context/cityContext";

describe("<Fav />", () => {
  let component;
  const name = "miami";
  const providerValue = [{ favCity: [] }];

  beforeEach(() => {
    component = render(
      <CityContext.Provider value={providerValue}>
        <Fav name={name} />
      </CityContext.Provider>
    );
  });

  test("render when name is not included", () => {
    const emptyHeart = component.getByLabelText("emptyHeart");
    expect(emptyHeart).toBeInTheDocument();
  });

  // test("render when name is not included", () => {
  //   const addButton = component.getByLabelText("addButton");

  //   fireEvent.click(addButton);

  //   const fullyHeart = component.getByLabelText("fullyHeart");

  //   component.debug();
  //   expect(fullyHeart).toBeInTheDocument();
  // });
});
