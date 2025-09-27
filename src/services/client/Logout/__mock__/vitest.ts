import { vi } from "vitest";
import { HttpError } from "@/lib/error";
import { data } from "./fixture";

const mockPostLogout = vi.fn();

// Mock both the index file and the fetcher directly
vi.mock("../", () => ({
  postLogout: mockPostLogout,
}));

vi.mock("../fetcher", () => ({
  postLogout: mockPostLogout,
}));

export function mockPostLogoutResolved() {
  mockPostLogout.mockClear();
  mockPostLogout.mockResolvedValue(data);
  return mockPostLogout;
}

export function mockPostLogoutRejected() {
  mockPostLogout.mockClear();
  mockPostLogout.mockRejectedValue(new HttpError(500).serialize());
  return mockPostLogout;
}
