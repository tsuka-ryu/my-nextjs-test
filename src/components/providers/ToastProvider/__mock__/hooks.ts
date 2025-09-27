import { vi } from "vitest";

const mockShowToast = vi.fn();
const mockHideToast = vi.fn();

vi.mock("../hooks", () => ({
  useToastAction: () => ({
    showToast: mockShowToast,
    hideToast: mockHideToast,
  }),
  useToastState: () => ({
    toasts: [],
  }),
}));

export function mockUseToastAction() {
  // Reset the mocks before each use
  mockShowToast.mockClear();
  mockHideToast.mockClear();

  return { showToast: mockShowToast, hideToast: mockHideToast };
}
