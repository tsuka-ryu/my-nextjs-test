import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Switch } from ".";

test("[role='switch']", async () => {
  const screen = render(<Switch />);
  await expect.element(screen.getByRole("switch")).toBeInTheDocument();
});

test("[role='switch'][disabled='true']", async () => {
  const screen = render(<Switch disabled={true} />);
  await expect.element(screen.getByRole("switch")).toBeDisabled();
});

test("[role='switch'][checked='true']", async () => {
  const screen = render(<Switch defaultChecked={true} />);
  await expect.element(screen.getByRole("switch")).toBeChecked();
});
