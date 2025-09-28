import { vi } from "vitest";
import { HttpError } from "@/lib/error";
import * as Login from "..";
import { postLoginData } from "./fixture";

vi.mock("../");

export function mockPostLoginResolved() {
  return vi.spyOn(Login, "postLogin").mockResolvedValue(postLoginData);
}

export function mockPostLoginRejected() {
  return vi
    .spyOn(Login, "postLogin")
    .mockRejectedValue(new HttpError(500).serialize());
}
