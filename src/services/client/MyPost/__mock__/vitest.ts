import { vi } from "vitest";
import { HttpError } from "@/lib/error";
import * as MyPost from "..";
import { deleteMyPostData, updateMyPostData } from "./fixture";

vi.mock("../");

export function mockUpdateMyPostResolved() {
  return vi.spyOn(MyPost, "updateMyPost").mockResolvedValue(updateMyPostData);
}

export function mockUpdateMyPostRejected() {
  return vi
    .spyOn(MyPost, "updateMyPost")
    .mockRejectedValue(new HttpError(500).serialize());
}

export function mockDeleteMyPostResolved() {
  return vi.spyOn(MyPost, "deleteMyPost").mockResolvedValue(deleteMyPostData);
}

export function mockDeleteMyPostRejected() {
  return vi
    .spyOn(MyPost, "deleteMyPost")
    .mockRejectedValue(new HttpError(500).serialize());
}
