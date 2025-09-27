import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { AlertDialog, AlertDialogProvider } from ".";

test("Default", async () => {
  const screen = render(
    <AlertDialogProvider defaultState={{ isShown: true, message: "Test message" }}>
      <AlertDialog />
    </AlertDialogProvider>
  );
  await expect.element(screen.getByRole("alertdialog")).toBeInTheDocument();
});

test("CustomButtonLabel", async () => {
  const screen = render(
    <AlertDialogProvider defaultState={{
      isShown: true,
      message: "Test message",
      okButtonLabel: "OK",
      cancelButtonLabel: "キャンセル"
    }}>
      <AlertDialog />
    </AlertDialogProvider>
  );
  await expect
    .element(screen.getByRole("button", { name: "OK" }))
    .toBeInTheDocument();
  await expect
    .element(screen.getByRole("button", { name: "キャンセル" }))
    .toBeInTheDocument();
});

test("ExcludeCancel", async () => {
  const screen = render(
    <AlertDialogProvider defaultState={{
      isShown: true,
      message: "Test message",
      okButtonLabel: "OK"
    }}>
      <AlertDialog />
    </AlertDialogProvider>
  );
  await expect
    .element(screen.getByRole("button", { name: "OK" }))
    .toBeInTheDocument();
  await expect
    .element(screen.getByRole("button", { name: "CANCEL" }))
    .not.toBeInTheDocument();
});
