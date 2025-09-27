import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { PaginationInfo } from ".";

test("[role='region']", async () => {
  const screen = render(<PaginationInfo start={1} end={10} hitCount={100} />);
  await expect
    .element(screen.getByRole("region", { name: "現在表示中の一覧概要" }))
    .toBeInTheDocument();
});
