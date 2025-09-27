import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { TextboxWithError } from "./";

test("エラーメッセージがない", async () => {
  const screen = render(<TextboxWithError name="title" />);
  await expect.element(screen.getByRole("textbox")).toBeInTheDocument();
  await expect.element(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "false");
});

test("エラーメッセージがある", async () => {
  const error = "エラーがあります";
  const screen = render(<TextboxWithError name="title" error={error} />);
  await expect.element(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  await expect.element(screen.getByRole("alert")).toBeInTheDocument();
  await expect.element(screen.getByRole("alert")).toHaveTextContent(error);
});
