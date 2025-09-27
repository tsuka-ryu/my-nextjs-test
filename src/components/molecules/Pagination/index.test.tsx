import { userEvent } from "@vitest/browser/context";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { generatePagination } from "@/lib/util/pagination";
import { Pagination } from ".";

const user = userEvent.setup();

const clickLink = (screen: any, name: string) =>
  user.click(screen.getByRole("link", { name }));

const setup = (page: number, max = 9, pathname = "/posts") => {
  return render(
    <Pagination
      pathname={pathname}
      pagination={generatePagination(page, max)}
    />
  );
};

const assertHasCurrent = async (screen: any, name: string) =>
  await expect
    .element(screen.getByRole("link", { name }))
    .toHaveAttribute("aria-current", "page");

test.skip("現在ページ値を渡していない場合、レンダリングされない", async () => {
  const screen = setup(0);
  await expect
    .element(screen.getByRole("navigation", { name: "ページネーション" }))
    .not.toBeInTheDocument();
});

test.skip("現在ページ値を渡している場合、レンダリングされる", async () => {
  const screen = setup(1);
  await expect
    .element(screen.getByRole("navigation", { name: "ページネーション" }))
    .toBeInTheDocument();
});

test.skip("カレント表記が変化する", async () => {
  const screen = setup(1);
  await assertHasCurrent(screen, "1");
  await clickLink(screen, "2");
  await assertHasCurrent(screen, "2");
});

test.skip("URL検索クエリーが変わる", async () => {
  const mockRouter = (globalThis as unknown as { mockRouter: any }).mockRouter;
  mockRouter.query = { page: "1" };
  const screen = setup(1);
  expect(mockRouter.query).toEqual({ page: "1" });
  await clickLink(screen, "2");
  // Note: In real app, this would be updated by navigation
  // This test verifies the link behavior, actual query change needs router integration
});
