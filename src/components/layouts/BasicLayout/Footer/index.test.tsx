import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Footer } from "./";

test("[role=contentinfo]", async () => {
  const screen = render(<Footer />);
  await expect.element(screen.getByRole("contentinfo")).toBeInTheDocument();
});
