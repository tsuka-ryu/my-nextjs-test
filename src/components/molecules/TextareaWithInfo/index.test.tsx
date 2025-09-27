import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { TextareaWithInfo } from ".";

test("TextareaWithInfoが正しくレンダリングされる", async () => {
  const screen = render(
    <TextareaWithInfo
      title="記事本文"
      description="半角英数64文字以内で入力してください"
      error="不正な文字が含まれています"
    />
  );

  await expect.element(screen.getByRole("textbox")).toHaveAccessibleName("記事本文");
  await expect.element(screen.getByRole("textbox")).toHaveAccessibleDescription(
    "半角英数64文字以内で入力してください"
  );
  await expect.element(screen.getByText("不正な文字が含まれています")).toBeInTheDocument();
});

test("descriptionのみ表示される", async () => {
  const screen = render(
    <TextareaWithInfo
      title="記事本文"
      description="半角英数64文字以内で入力してください"
    />
  );

  await expect.element(screen.getByRole("textbox")).toHaveAccessibleName("記事本文");
  await expect.element(screen.getByRole("textbox")).toHaveAccessibleDescription(
    "半角英数64文字以内で入力してください"
  );
  await expect.element(screen.getByText("半角英数64文字以内で入力してください")).toBeInTheDocument();
});

test("errorのみ表示される", async () => {
  const screen = render(
    <TextareaWithInfo title="記事本文" error="不正な文字が含まれています" />
  );

  await expect.element(screen.getByRole("textbox")).toHaveAccessibleName("記事本文");
  await expect.element(screen.getByText("不正な文字が含まれています")).toBeInTheDocument();
});
