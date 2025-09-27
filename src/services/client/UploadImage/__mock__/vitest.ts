import { vi } from "vitest";
import { type ErrorStatus, HttpError } from "@/lib/error";
import { uploadImageData } from "./fixture";

const mockUploadImageFn = vi.fn();

vi.mock("../fetcher", () => ({
  uploadImage: mockUploadImageFn,
}));

export function mockUploadImage(status?: ErrorStatus) {
  if (status && status > 299) {
    return mockUploadImageFn.mockRejectedValueOnce(
      new HttpError(status).serialize(),
    );
  }

  return mockUploadImageFn.mockResolvedValueOnce(uploadImageData);
}
