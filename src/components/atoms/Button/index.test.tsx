import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from ".";

test("[role='button']", async () => {
  const screen = render(<Button>test</Button>);
  await expect
    .element(screen.getByRole("button", { name: "test" }))
    .toBeInTheDocument();
});

test("[role='button'][disabled='true']", async () => {
  const screen = render(<Button disabled>test</Button>);
  await expect.element(screen.getByRole("button")).toBeDisabled();
});
