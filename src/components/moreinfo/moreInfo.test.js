/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable no-unused-vars */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import MoreInfo from "./moreinfo";

describe("<MoreInfo />", () => {
  const weather = {
    rh: 80,
    app_temp: 23,
    wind_spd: 1,
  };

  test("render content", () => {
    const { getByText } = render(<MoreInfo currentWeather={weather} />);

    getByText(weather.rh);
    getByText(weather.app_temp);
    getByText(weather.wind_spd);
  });

  test("render without info", () => {
    const emptyWeather = {};

    const { getByLabelText } = render(
      <MoreInfo currentWeather={emptyWeather} />
    );

    getByLabelText("humidity");
    getByLabelText("feellike");
    getByLabelText("wind");

    expect(getByLabelText("humidity").textContent).toBe("-");
    expect(getByLabelText("feellike").textContent).toBe("-");
    expect(getByLabelText("wind").textContent).toBe("-");
  });
});
