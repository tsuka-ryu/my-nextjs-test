import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import type { Input } from "@/services/client/Login";
// import * as Login from "@/services/client/Login/__mock__/msw";
// import * as MyProfile from "@/services/client/MyProfile/__mock__/msw";
// import { setupMockServer } from "@/tests/vitest";
import { Login as LoginComponent } from ".";

async function setup(injectValues?: Partial<Input>) {
  const screen = render(<LoginComponent />);
  const input: Input = {
    email: "test@example.com",
    password: "abcd1234",
    ...injectValues,
  };
  const email = screen.getByRole("textbox", { name: "メールアドレス" });
  const password = screen.getByPlaceholder("8文字以上で入力");
  const button = screen.getByRole("button", { name: "ログイン" });
  await email.fill(input.email);
  await password.fill(input.password);
  await button.click();
  return screen;
}

// setupMockServer(...Login.handlers, ...MyProfile.handlers);

test.skip("ログインに成功した場合、redirectUrl に遷移する", async () => {
  await setup();
  await expect.poll(() => window.location.pathname).toBe("/");
});

test.skip("ログインに失敗した場合、失敗した旨が通知される", async () => {
  const screen = await setup({ email: "500@example.com" });
  await expect
    .element(screen.getByRole("alert"))
    .toHaveTextContent("ログインに失敗しました");
});

test.skip("バリデーションエラーの場合、エラーメッセージが表示される", async () => {
  const screen = await setup({ email: "test", password: "1234" });
  const email = screen.getByRole("textbox", { name: "メールアドレス" });
  const password = screen.getByPlaceholder("8文字以上で入力");
  await expect.element(email).toHaveAttribute("aria-describedby");
  await expect.element(password).toHaveAttribute("aria-describedby");
});
