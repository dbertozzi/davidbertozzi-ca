import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Projects link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});
