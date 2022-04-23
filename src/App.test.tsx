import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders Can't attack", () => {
  render(<App />);
  const element = screen.getByText(/Can't attack/i);
  expect(element).toBeInTheDocument();
});
