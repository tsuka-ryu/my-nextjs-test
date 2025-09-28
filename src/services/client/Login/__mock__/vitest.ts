import { vi } from "vitest";
import { HttpError } from "@/lib/error";
import * as Login from "../fetcher";
import { data } from "./fixture";

vi.mock("../fetcher");

export function mockPostLoginResolved() {
  return vi.spyOn(Login, "postLogin").mockResolvedValue(data);
}

export function mockPostLoginRejected() {
  return vi
    .spyOn(Login, "postLogin")
    .mockRejectedValue(new HttpError(500).serialize());
}
