import { userEvent } from "@vitest/browser/context";
import { vi } from "vitest";

export function selectImageFile(
  inputTestId = "file",
  fileName = "hello.png",
  content = "hello",
) {
  const user = userEvent.setup();
  const filePath = [`C:\\fakepath\\${fileName}`];
  const file = new File([content], fileName, { type: "image/png" });

  const selectImage = (screen: unknown) => {
    const fileInput = screen.getByTestId(inputTestId);
    return user.upload(fileInput, file);
  };

  return { filePath, selectImage };
}

export function mockWindowLocationReload() {
  // Create a mock reload function that can be accessed for assertions
  const mockReload = vi.fn();

  // Store original for restoration
  const _originalReload = window.location.reload;

  // For browser mode, we'll just spy on the function without changing window.location
  vi.spyOn(window.location, "reload").mockImplementation(mockReload);

  const cleanup = () => {
    vi.restoreAllMocks();
  };
  return cleanup;
}
