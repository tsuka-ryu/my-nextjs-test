import mockRouter from "next-router-mock";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Nav } from "./";

test("「My Posts」がカレント状態になっている", async () => {
  mockRouter.setCurrentUrl("/my/posts");
  const screen = render(<Nav onCloseMenu={() => {}} />);
  const link = screen.getByRole("link", { name: "My Posts" });
  await expect.element(link).toHaveAttribute("aria-current", "page");
});

test("「Create Post」がカレント状態になっている", async () => {
  mockRouter.setCurrentUrl("/my/posts/create");
  const screen = render(<Nav onCloseMenu={() => {}} />);
  const link = screen.getByRole("link", { name: "Create Post" });
  await expect.element(link).toHaveAttribute("aria-current", "page");
});

test.each([
  { url: "/my/posts", name: "My Posts" },
  { url: "/my/posts/123", name: "My Posts" },
  { url: "/my/posts/create", name: "Create Post" },
])("$url では $name がカレントになっている", async ({ url, name }) => {
  mockRouter.setCurrentUrl(url);
  const screen = render(<Nav onCloseMenu={() => {}} />);
  const link = screen.getByRole("link", { name });
  await expect.element(link).toHaveAttribute("aria-current", "page");
});
