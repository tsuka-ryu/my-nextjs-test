import { vi } from "vitest";
import { HttpError } from "@/lib/error";
import * as MyProfile from "..";
import { getMyProfileData } from "./fixture";

vi.mock("../");

export function mockUpdateMyProfileEditResolved() {
  return vi
    .spyOn(MyProfile, "getMyProfile")
    .mockResolvedValue(getMyProfileData);
}

export function mockUpdateMyProfileEditRejected() {
  return vi
    .spyOn(MyProfile, "getMyProfile")
    .mockRejectedValue(new HttpError(500).serialize());
}
