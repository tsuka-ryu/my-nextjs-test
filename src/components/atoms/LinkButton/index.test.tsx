import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { LinkButton } from ".";

// Mock Next.js Link component
vi.mock("next/link", () => {
  const MockedLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a {...props} href={href}>
      {children}
    </a>
  );
  return {
    __esModule: true,
    default: MockedLink,
  };
});

test("[role='link']", async () => {
  const screen = render(<LinkButton href="#">test</LinkButton>);
  await expect.element(screen.getByRole("link")).toBeInTheDocument();
});

test("[role='button'][aria-disabled='true']", async () => {
  const screen = render(
    <LinkButton href="#" disabled>
      test
    </LinkButton>,
  );
  await expect
    .element(screen.getByRole("link"))
    .toHaveAttribute("aria-disabled", "true");
});

// TODO: Linkコンポーネントのimport部分のせいでcoverageが50%になってしまう
