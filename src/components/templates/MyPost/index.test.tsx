import mockRouter from "next-router-mock";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { getMyPostData } from "@/services/server/MyPost/__mock__/fixture";
import { MyPost } from "./";

test.skip("見出しの表示", async () => {
  const screen = render(<MyPost post={getMyPostData} />);
  await expect
    .element(screen.getByRole("heading", { name: "Frontend Testing Example" }))
    .toBeInTheDocument();
});

test.skip("「編集する」リンクを押下すると、編集ページに遷移する", async () => {
  const screen = render(<MyPost post={getMyPostData} />);
  await screen.getByRole("link", { name: "編集する" }).click();
  await expect.poll(() => mockRouter.pathname).toBe("/my/posts/1/edit");
});
