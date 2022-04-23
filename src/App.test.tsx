import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import App from "./App";

test("renders Can't attack", () => {
  render(<App />);
  const element = screen.getByText(/Can't attack/i);
  expect(element).toBeInTheDocument();
});

test("Render App", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
