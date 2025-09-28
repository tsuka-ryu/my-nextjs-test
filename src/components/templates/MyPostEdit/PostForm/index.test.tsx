import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { handleGetMyProfile } from "@/services/client/MyProfile/__mock__/msw";
import { mockUploadImage } from "@/services/client/UploadImage/__mock__/vitest";
import { selectImageFile } from "@/tests/vitest";
import { PostForm } from ".";

// function setup() {
//   const onClickSave = vi.fn();
//   const onClickDelete = vi.fn();
//   const onValid = vi.fn();
//   const onInvalid = vi.fn();
//   const screen = render(
//     <PostForm
//       title=""
//       description={null}
//       body={null}
//       published={false}
//       imageUrl={null}
//       onClickSave={onClickSave}
//       onClickDelete={onClickDelete}
//       onValid={onValid}
//       onInvalid={onInvalid}
//     />
//   );
//   async function typeTitle(title: string) {
//     const textbox = screen.getByRole("textbox", { name: "記事タイトル" });
//     await textbox.fill(title);
//   }
//   async function saveAsPublished() {
//     await screen.getByRole("switch", { name: "公開ステータス" }).click();
//     await screen.getByRole("button", { name: "記事を公開する" }).click();
//   }
//   async function saveAsDraft() {
//     await screen.getByRole("button", { name: "下書き保存する" }).click();
//   }
//   async function clickDelete() {
//     await screen.getByRole("button", { name: "記事を削除する" }).click();
//   }
//   return {
//     screen,
//     typeTitle,
//     saveAsDraft,
//     saveAsPublished,
//     clickDelete,
//     onClickSave,
//     onClickDelete,
//     onValid,
//     onInvalid,
//   };
// }

// setupMockServer(handleGetMyProfile());

test("不適正内容で保存を試みると、バリデーションエラーが表示される", async () => {
  // const { screen, saveAsDraft } = setup();
  // await saveAsDraft();
  // await expect
  //   .element(screen.getByRole("textbox", { name: "記事タイトル" }))
  //   .toHaveAttribute("aria-describedby");
});

test("不適正内容で保存を試みると、onInvalid イベントハンドラーが実行される", async () => {
  // const { saveAsDraft, onClickSave, onValid, onInvalid } = setup();
  // await saveAsDraft();
  // expect(onClickSave).toHaveBeenCalled();
  // expect(onValid).not.toHaveBeenCalled();
  // expect(onInvalid).toHaveBeenCalled();
});

test("適正内容で「下書き保存」を試みると、onValid イベントハンドラーが実行される", async () => {
  // mockUploadImage();
  // const { typeTitle, saveAsDraft, onClickSave, onValid, onInvalid } = setup();
  // const { selectImage } = selectImageFile();
  // await typeTitle("私の技術記事");
  // await selectImage();
  // await saveAsDraft();
  // expect(onClickSave).toHaveBeenCalled();
  // expect(onValid).toHaveBeenCalled();
  // expect(onInvalid).not.toHaveBeenCalled();
});

test("適正内容で「記事を公開」を試みると、onClickSave イベントハンドラーのみ実行される", async () => {
  // const { typeTitle, saveAsPublished, onClickSave, onValid, onInvalid } =
  //   setup();
  // await typeTitle("私の技術記事");
  // await saveAsPublished();
  // expect(onClickSave).toHaveBeenCalled();
  // expect(onValid).not.toHaveBeenCalled();
  // expect(onInvalid).not.toHaveBeenCalled();
});

test("「記事を削除する」ボタンを押下すると、onClickDelete イベントハンドラーが実行される", async () => {
  // const { clickDelete, onClickDelete } = setup();
  // await clickDelete();
  // expect(onClickDelete).toHaveBeenCalled();
});
