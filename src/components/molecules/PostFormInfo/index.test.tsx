import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import type { PutInput } from "@/pages/api/my/posts/[postId]";
import { PostFormInfo } from "./";

function TestComponent() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<PutInput>();
  return <PostFormInfo register={register} control={control} errors={errors} />;
}

test("「記事タイトル」に文字入力すると、カウンターがカウントアップされる", async () => {
  const screen = render(<TestComponent />);
  await expect.element(screen.getByText("0 / 64")).toBeInTheDocument();
  const title = screen.getByRole("textbox", { name: "記事タイトル" });
  await title.fill("テスト");
  await expect.element(screen.getByText("3 / 64")).toBeInTheDocument();
});

test("「記事概要」に文字入力すると、カウンターがカウントアップされる", async () => {
  const screen = render(<TestComponent />);
  await expect.element(screen.getByText("0 / 128")).toBeInTheDocument();
  const description = screen.getByRole("textbox", { name: "記事概要" });
  await description.fill("あいうえお");
  await expect.element(screen.getByText("5 / 128")).toBeInTheDocument();
});
