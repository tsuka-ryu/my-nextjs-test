import { userEvent } from "@vitest/browser/context";

export function selectImageFile(
  inputTestId = "file",
  fileName = "hello.png",
  content = "hello"
) {
  const user = userEvent.setup();
  const filePath = [`C:\\fakepath\\${fileName}`];
  const file = new File([content], fileName, { type: "image/png" });

  const selectImage = (screen: any) => {
    const fileInput = screen.getByTestId(inputTestId);
    return user.upload(fileInput, file);
  };

  return { filePath, selectImage };
}
