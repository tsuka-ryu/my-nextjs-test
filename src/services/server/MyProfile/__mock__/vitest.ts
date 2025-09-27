import { vi } from "vitest";
import { HttpError } from "@/lib/error";
import * as MyProfile from "../";
import { getMyProfileData } from "./fixture";

vi.mock("../");

export function mockGetMyProfileResolved() {
  return vi
    .spyOn(MyProfile, "getMyProfile")
    .mockResolvedValue(getMyProfileData);
}

export function mockGetMyProfileRejected() {
  return vi
    .spyOn(MyProfile, "getMyProfile")
    .mockRejectedValue(new HttpError(500).serialize());
}
