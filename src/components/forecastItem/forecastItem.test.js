/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test("render content", () => {
  const item = {
    weather: {
      icon: "icon-test",
    },
    app_max_temp: 10.19,
    app_min_temp: 1.21,
  };

  const { getByAltText, getByText } = render(<ForecastItem item={item} />);

  const img = getByAltText("weather");
  getByText(10);
  getByText(1);

  expect(img.src).toEqual(
    "https://www.weatherbit.io/static/img/icons/icon-test.png"
  );
});
