import { useForm } from "react-hook-form";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import type { UploadImageData } from "@/services/client/UploadImage";
import { selectImageFile } from "@/tests/vitest";
import { useUploadImage } from "./useUploadImage";

vi.mock("@/services/client/UploadImage", () => ({
  uploadImage: vi.fn(),
}));

function TestComponent({
  onChange,
  onResolved,
  onRejected,
}: {
  onChange?: (path: string[]) => void;
  onResolved?: (data: UploadImageData) => void;
  onRejected?: (err: unknown) => void;
}) {
  const { register, setValue } = useForm();
  const { onChangeImage, imageUrl } = useUploadImage({
    register,
    setValue,
    onResolved,
    onRejected,
    name: "image",
  });
  return (
    <>
      {imageUrl && <p>selected</p>}
      <input
        type={"file"}
        data-testid="file"
        onChange={(event) => {
          onChangeImage(event);
          onChange?.([event.target.value]);
        }}
      />
    </>
  );
}

test("画像を選択すると imageUrl の値が truthy になる", async () => {
  const { uploadImage } = await import("@/services/client/UploadImage");
  const mockedUploadImage = vi.mocked(uploadImage);
  mockedUploadImage.mockResolvedValueOnce({
    url: "https://example.com",
    filename: "test.png",
    fields: {},
  });

  const mock = vi.fn();
  const screen = render(<TestComponent onChange={mock} />);
  const { filePath, selectImage } = selectImageFile();
  await selectImage(screen);
  expect(mock).toHaveBeenCalledWith(filePath);

  await expect.element(screen.getByText("selected")).toBeInTheDocument();
});

test("アップロードに成功したとき、onResolved が呼ばれる", async () => {
  const { uploadImage } = await import("@/services/client/UploadImage");
  const mockedUploadImage = vi.mocked(uploadImage);
  const mockData = {
    url: "https://example.com",
    filename: "test.png",
    fields: {},
  };
  mockedUploadImage.mockResolvedValueOnce(mockData);

  const handleResolved = vi.fn();
  const screen = render(<TestComponent onResolved={handleResolved} />);
  const { selectImage } = selectImageFile();
  await selectImage(screen);
  expect(handleResolved).toHaveBeenCalledWith(mockData);
});

test("アップロードに失敗したとき、onRejected が呼ばれる", async () => {
  const { uploadImage } = await import("@/services/client/UploadImage");
  const mockedUploadImage = vi.mocked(uploadImage);
  const mockError = new Error("Upload failed");
  mockedUploadImage.mockRejectedValueOnce(mockError);

  const handleRejected = vi.fn();
  const screen = render(<TestComponent onRejected={handleRejected} />);
  const { selectImage } = selectImageFile();
  await selectImage(screen);
  expect(handleRejected).toHaveBeenCalledWith(mockError);
});
