import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Textbox } from ".";

test("[role='textbox']", async () => {
  const screen = render(<Textbox />);
  await expect.element(screen.getByRole("textbox")).toBeInTheDocument();
});

test("[role='textbox'][disabled='true']", async () => {
  const screen = render(<Textbox disabled />);
  await expect.element(screen.getByRole("textbox")).toBeDisabled();
});