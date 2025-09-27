import React from "react";
import { vi } from "vitest";

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
  }) => React.createElement("a", { ...props, href }, children);

  return {
    __esModule: true,
    default: MockedLink,
  };
});

// Mock Next.js router
vi.mock("next/router", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    isReady: true,
  }),
}));
