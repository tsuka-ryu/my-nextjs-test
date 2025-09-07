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
