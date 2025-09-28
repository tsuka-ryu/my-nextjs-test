import { describe, test } from "vitest";

// import mockRouter from "next-router-mock";
// import { beforeEach, expect } from "vitest";
// import { render } from "vitest-browser-react";
// import * as MyPost from "@/services/client/MyPost/__mock__/msw";
// import * as MyProfile from "@/services/client/MyProfile/__mock__/msw";
// import { setupMockServer } from "@/tests/vitest";
// import { MyPostEdit } from ".";

// async function setup() {
//   const screen = render(<MyPostEdit />);
//   async function clearTitle() {
//     const textbox = screen.getByRole("textbox", { name: "記事タイトル" });
//     await textbox.clear();
//   }
//   async function saveAsPublished() {
//     await screen.getByRole("button", { name: "記事を公開する" }).click();
//     await expect.element(screen.getByRole("alertdialog")).toBeInTheDocument();
//   }
//   async function saveAsDraft() {
//     await screen.getByRole("switch", { name: "公開ステータス" }).click();
//     await screen.getByRole("button", { name: "下書き保存する" }).click();
//   }
//   async function deletePost() {
//     await screen.getByRole("button", { name: "記事を削除する" }).click();
//   }
//   async function clickButton(name: "はい" | "いいえ") {
//     await screen.getByRole("button", { name }).click();
//   }
//   return {
//     screen,
//     clearTitle,
//     saveAsPublished,
//     saveAsDraft,
//     deletePost,
//     clickButton,
//   };
// }

// const server = setupMockServer(...MyPost.handlers, ...MyProfile.handlers);
// beforeEach(() => {
//   mockRouter.setCurrentUrl("/my/posts/200/edit");
// });

describe("AlertDialog", () => {
  test.skip("「いいえ」を押下すると、AlertDialog が閉じる", async () => {
    // const { screen, saveAsPublished, clickButton } = await setup();
    // await saveAsPublished();
    // await clickButton("いいえ");
    // await expect
    //   .element(screen.getByRole("alertdialog"))
    //   .not.toBeInTheDocument();
  });

  test.skip("不適正内容で送信を試みると、AlertDialog が閉じる", async () => {
    // const { screen, clearTitle, saveAsPublished, clickButton } = await setup();
    // await clearTitle();
    // await saveAsPublished();
    // await clickButton("はい");
    // await expect
    //   .element(screen.getByRole("alertdialog"))
    //   .not.toBeInTheDocument();
  });
});

describe("Toast", () => {
  test.skip("公開に成功した場合「公開に成功しました」が表示される", async () => {
    // const { screen, saveAsPublished, clickButton } = await setup();
    // await saveAsPublished();
    // await clickButton("はい");
    // await expect
    //   .element(screen.getByRole("alert"))
    //   .toHaveTextContent("公開に成功しました");
  });

  test.skip("公開に失敗した場合「公開に失敗しました」が表示される", async () => {
    // server.use(MyPost.handlePutMyPost({ status: 500 }));
    // const { screen, saveAsPublished, clickButton } = await setup();
    // await saveAsPublished();
    // await clickButton("はい");
    // await expect
    //   .element(screen.getByRole("alert"))
    //   .toHaveTextContent("公開に失敗しました");
  });

  test.skip("削除に成功した場合「削除に成功しました」が表示される", async () => {
    // const { screen, deletePost, clickButton } = await setup();
    // await deletePost();
    // await clickButton("はい");
    // await expect
    //   .element(screen.getByRole("alert"))
    //   .toHaveTextContent("削除に成功しました");
  });

  test.skip("削除に失敗した場合「削除に失敗しました」が表示される", async () => {
    // server.use(MyPost.handleDeleteMyPost({ status: 500 }));
    // const { screen, deletePost, clickButton } = await setup();
    // await deletePost();
    // await clickButton("はい");
    // await expect
    //   .element(screen.getByRole("alert"))
    //   .toHaveTextContent("削除に失敗しました");
  });
});

describe("画面遷移", () => {
  test.skip("公開に成功した場合、画面遷移する", async () => {
    // const { saveAsPublished, clickButton } = await setup();
    // await saveAsPublished();
    // await clickButton("はい");
    // expect(mockRouter).toMatchObject({ pathname: "/my/posts/1" });
  });

  test.skip("削除に成功した場合、画面遷移する", async () => {
    // const { deletePost, clickButton } = await setup();
    // await deletePost();
    // await clickButton("はい");
    // expect(mockRouter).toMatchObject({ pathname: "/my/posts" });
  });
});
