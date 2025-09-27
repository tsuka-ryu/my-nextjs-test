import mockRouter from "next-router-mock";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Header } from "./";

test.skip("[role=banner]", async () => {
  mockRouter.setCurrentUrl("/");
  const screen = render(<Header />);
  await expect.element(screen.getByRole("banner")).toBeInTheDocument();
});

test.skip("未ログインの場合、ログインボタンが表示される", async () => {
  mockRouter.setCurrentUrl("/");
  const screen = render(<Header />);
  await expect
    .element(screen.getByRole("heading", { name: "Tech Posts" }))
    .toBeInTheDocument();
  await expect
    .element(screen.getByRole("link", { name: "ログイン" }))
    .toBeInTheDocument();
});
