import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import type { PutInput } from "@/pages/api/my/posts/[postId]";
import { mockUploadImage } from "@/services/client/UploadImage/__mock__/vitest";
import { selectImageFile } from "@/tests/client";
import { PostFormHeroImage } from "./";

function TestComponent({ error }: { error?: string }) {
  const { register, setValue } = useForm<PutInput>();
  return BasicLayout(
    <PostFormHeroImage
      register={register}
      setValue={setValue}
      name="imageUrl"
      error={error}
    />,
  );
}

test.skip("画像が選択されていない時、ボタン表記は「イメージを選択する」", async () => {
  const screen = render(<TestComponent />);
  await expect
    .element(screen.getByRole("button", { name: "イメージを選択する" }))
    .toBeInTheDocument();
});

test.skip("画像が選択されている時、ボタン表記は「イメージを変更する」", async () => {
  mockUploadImage();
  const screen = render(<TestComponent />);
  const { selectImage } = selectImageFile();
  await selectImage(screen);
  await expect
    .element(screen.getByRole("button", { name: "イメージを変更する" }))
    .toBeInTheDocument();
});

test.skip("画像選択でエラーがある時、ボタン表記はエラー文言になる", async () => {
  const screen = render(<TestComponent error="エラー" />);
  await expect
    .element(screen.getByRole("button", { name: "エラー" }))
    .toBeInTheDocument();
});

test.skip("画像のアップロードに失敗した場合、アラートが表示される", async () => {
  mockUploadImage(500);
  const screen = render(<TestComponent />);
  const { selectImage } = selectImageFile();
  await selectImage(screen);
  await expect
    .element(screen.getByRole("alert"))
    .toHaveTextContent("画像のアップロードに失敗しました");
});
