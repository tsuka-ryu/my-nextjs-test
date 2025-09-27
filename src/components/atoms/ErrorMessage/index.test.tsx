import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { ErrorMessage } from ".";

test("[role='alert']", async () => {
  const screen = render(<ErrorMessage>test</ErrorMessage>);
  await expect.element(screen.getByRole("alert")).toBeInTheDocument();
});
