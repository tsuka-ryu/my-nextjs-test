import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { ContentFooter } from "./";

test("[role=contentinfo]", async () => {
  const screen = render(<ContentFooter />);
  await expect.element(screen.getByRole("contentinfo")).toBeInTheDocument();
});
