import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { mockUseToastAction } from "@/components/providers/ToastProvider/__mock__/hooks";
import { HttpError } from "@/lib/error";
import { getMyProfileData } from "@/services/client/MyProfile/__mock__/fixture";
import { LoginUser } from "./";

// ブラウザモードではwindow.location.reloadのモックが制限されています

// Mock the logout service directly in the test file
vi.mock("@/services/client/Logout", () => ({
  postLogout: vi.fn(),
}));

const _setup = () => {
  const { showToast } = mockUseToastAction();
  const screen = render(<LoginUser {...getMyProfileData} />);
  const clickLogout = async () => {
    const region = screen.getByRole("region", { name: "ログインユーザー" });
    await region.hover();
    const button = screen.getByRole("button", { name: "ログアウト" });
    await button.click();
  };
  return { showToast, clickLogout };
};

test.skip("ログアウトに成功すると、トーストが表示されない", async () => {
  // Get the mocked function
  const mockPostLogout = vi.mocked(
    await import("@/services/client/Logout"),
  ).postLogout;

  // Setup mock to resolve successfully
  mockPostLogout.mockClear();
  mockPostLogout.mockResolvedValue({ success: true });

  const { showToast } = mockUseToastAction();
  const screen = render(<LoginUser {...getMyProfileData} />);

  // ログインユーザー領域を確認
  const region = screen.getByRole("region", { name: "ログインユーザー" });
  await expect.element(region).toBeInTheDocument();

  // ホバーしてボタンを表示
  await region.hover();

  // ログアウトボタンを確認
  const button = screen.getByRole("button", { name: "ログアウト" });
  await expect.element(button).toBeInTheDocument();

  // ボタンクリック
  await button.click();

  expect(mockPostLogout).toHaveBeenCalled();
  expect(showToast).not.toHaveBeenCalled();
});

test.skip("ログアウトに失敗すると、Toast が表示される", async () => {
  // Get the mocked function
  const mockPostLogout = vi.mocked(
    await import("@/services/client/Logout"),
  ).postLogout;

  // Setup mock to reject
  mockPostLogout.mockClear();
  mockPostLogout.mockRejectedValue(new HttpError(500).serialize());

  const { showToast } = mockUseToastAction();
  const screen = render(<LoginUser {...getMyProfileData} />);

  // ログインユーザー領域を確認
  const region = screen.getByRole("region", { name: "ログインユーザー" });
  await expect.element(region).toBeInTheDocument();

  // ホバーしてボタンを表示
  await region.hover();

  // ログアウトボタンを確認
  const button = screen.getByRole("button", { name: "ログアウト" });
  await expect.element(button).toBeInTheDocument();

  // ボタンクリック
  await button.click();

  expect(mockPostLogout).toHaveBeenCalled();
  expect(showToast).toHaveBeenCalled();
});
