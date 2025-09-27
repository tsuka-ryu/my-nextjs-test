import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Combobox } from "./";

test("[role=combobox]", async () => {
  const screen = render(<Combobox />);
  await expect.element(screen.getByRole("combobox")).toBeInTheDocument();
});
