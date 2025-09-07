import React from "react";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Heading } from "./";

// Mock specific SVG file
vi.mock("./assets/Pen.svg", () => ({
  __esModule: true,
  default: () => React.createElement("svg", { "data-testid": "pen-icon" }),
}));

test("[role=heading]", async () => {
  const screen = render(<Heading />);
  await expect
    .element(screen.getByRole("heading", { name: "Tech Posts" }))
    .toBeInTheDocument();
});

test("リンクが正しいURLを指している", async () => {
  const screen = render(<Heading />);
  const link = screen.getByRole("link");
  await expect.element(link).toHaveAttribute("href", "/");
});
