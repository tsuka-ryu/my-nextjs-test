import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { AnchorButton } from ".";

test("[role='link']", async () => {
  const screen = render(<AnchorButton href="#">test</AnchorButton>);
  await expect.element(screen.getByRole("link")).toBeInTheDocument();
});

test("[role='button'][aria-disabled='true']", async () => {
  const screen = render(
    <AnchorButton href="#" disabled>
      test
    </AnchorButton>,
  );
  await expect
    .element(screen.getByRole("link"))
    .toHaveAttribute("aria-disabled", "true");
});
