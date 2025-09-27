import { userEvent } from "@vitest/browser/context";
import type { ComponentPropsWithoutRef } from "react";
import { useForm } from "react-hook-form";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import type { PutInput } from "@/pages/api/my/posts/[postId]";
import { PostFormFooter } from "./";

const user = userEvent.setup();

function TestComponent(
  props: Omit<
    ComponentPropsWithoutRef<typeof PostFormFooter>,
    "register" | "control"
  >
) {
  const { register, control } = useForm<PutInput>();
  return <PostFormFooter {...props} register={register} control={control} />;
}

const setup = (isSubmitting = false) => {
  const onClickSave = vi.fn();
  const onClickDelete = vi.fn();
  const screen = render(
    <TestComponent
      isSubmitting={isSubmitting}
      onClickSave={onClickSave}
      onClickDelete={onClickDelete}
    />
  );
  const clickSwitch = () =>
    user.click(screen.getByRole("switch", { name: "公開ステータス" }));
  const clickSaveButton = () => {
    try {
      return user.click(screen.getByRole("button", { name: "記事を公開する" }));
    } catch {
      return user.click(screen.getByRole("button", { name: "下書き保存する" }));
    }
  };
  const clickDeleteButton = () =>
    user.click(screen.getByRole("button", { name: "記事を削除する" }));
  return {
    screen,
    clickSwitch,
    clickSaveButton,
    clickDeleteButton,
    onClickSave,
    onClickDelete,
  };
};

test("「下書き保存する」ボタンを押下すると、イベントハンドラーが実行される", async () => {
  const { screen, clickSaveButton, onClickSave } = setup();
  await clickSaveButton();
  await expect
    .element(screen.getByRole("button", { name: "下書き保存する" }))
    .toBeInTheDocument();
  expect(onClickSave).toHaveBeenCalled();
});

test("「記事を公開する」ボタンを押下すると、イベントハンドラーが実行される", async () => {
  const { screen, clickSwitch, clickSaveButton, onClickSave } = setup();
  await clickSwitch();
  await expect
    .element(screen.getByRole("button", { name: "記事を公開する" }))
    .toBeInTheDocument();
  await clickSaveButton();
  expect(onClickSave).toHaveBeenCalled();
});

test("「記事を削除する」ボタンを押下すると、イベントハンドラーが実行される", async () => {
  const { clickDeleteButton, onClickDelete } = setup();
  await clickDeleteButton();
  expect(onClickDelete).toHaveBeenCalled();
});

test("送信中は全てのコントロールが非活性", async () => {
  const { screen } = setup(true);
  await expect
    .element(screen.getByRole("switch", { name: "公開ステータス" }))
    .toBeDisabled();
  await expect
    .element(screen.getByRole("button", { name: "記事を削除する" }))
    .toBeDisabled();
  await expect
    .element(screen.getByRole("button", { name: "下書き保存する" }))
    .toBeDisabled();
});
