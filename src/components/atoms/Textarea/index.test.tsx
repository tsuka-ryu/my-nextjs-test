import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Textarea } from ".";

test("[role='textbox']", async () => {
  const screen = render(<Textarea />);
  await expect.element(screen.getByRole("textbox")).toBeInTheDocument();
});

test("[role='textbox'][disabled='true']", async () => {
  const screen = render(<Textarea disabled />);
  await expect.element(screen.getByRole("textbox")).toBeDisabled();
});