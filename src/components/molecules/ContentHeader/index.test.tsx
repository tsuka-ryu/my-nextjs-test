import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { ContentHeader } from "./";

test("[role=banner]", async () => {
  const screen = render(<ContentHeader title="記事タイトル" />);
  await expect.element(screen.getByRole("banner")).toBeInTheDocument();
});

test("title の指定", async () => {
  const screen = render(<ContentHeader title="記事タイトル" />);
  await expect.element(
    screen.getByRole("heading", { name: "記事タイトル" })
  ).toBeInTheDocument();
});

test("description の指定", async () => {
  const screen = render(<ContentHeader title="記事タイトル" description="概要" />);
  await expect.element(screen.getByText("概要")).toBeInTheDocument();
});
