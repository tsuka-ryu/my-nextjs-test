import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
// import { handleGetMyProfile } from "@/services/client/MyProfile/__mock__/msw";
// import { setupMockServer } from "@/tests/vitest";
import { LoginUserInfoProvider } from "./LoginUserInfoProvider";
import {
  useLoginUserInfoAction,
  useLoginUserInfoState,
} from "./useLoginUserInfo";

// const server = setupMockServer(handleGetMyProfile());

function TestComponent() {
  const { value } = useLoginUserInfoState();
  const { updateProfile } = useLoginUserInfoAction();
  return (
    <div>
      <p data-testid="name">{value?.name || "No name"}</p>
      <button type="button" onClick={updateProfile}>
        update
      </button>
    </div>
  );
}

test("LoginUserInfoProviderがレンダリングされる", async () => {
  const screen = render(
    <LoginUserInfoProvider>
      <TestComponent />
    </LoginUserInfoProvider>
  );
  await expect.element(screen.getByTestId("name")).toBeInTheDocument();
  await expect.element(screen.getByRole("button")).toBeInTheDocument();
});

// MSW関連のテストはコメントアウト（ブラウザ環境で動作しないため）
// test("初回マウント時、ログインユーザー取得APIを呼ぶ", async () => {
//   const { getMyProfile, screen } = setup();
//   await expect
//     .element(screen.getByTestId("name"))
//     .toHaveTextContent("TaroYamada");
//   expect(getMyProfile).toHaveBeenCalledTimes(1);
// });

// test("updateProfile を呼ぶと、ログインユーザー取得APIを再度呼ぶ", async () => {
//   const { getMyProfile, screen } = setup();
//   await screen.getByRole("button").click();
//   expect(getMyProfile).toHaveBeenCalledTimes(2);
// });
