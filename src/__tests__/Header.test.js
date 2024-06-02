import MainNavBar from "../Components/MainNavBar";

import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

test("test header is rendered", () => {
  render(
    <BrowserRouter>
      <MainNavBar />
    </BrowserRouter>
  );

  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
});
