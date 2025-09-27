import { HttpResponse, http } from "msw";
import type { vi } from "vitest";
import type * as ApiMyProfile from "@/pages/api/my/profile";
import { path } from "..";
import { getMyProfileData } from "./fixture";

export function handleGetMyProfile(args?: {
  mock?: ReturnType<typeof vi.fn>;
  status?: number;
}) {
  return http.get<{}, {}, ApiMyProfile.GetReturn>(path(), async () => {
    args?.mock?.();
    if (args?.status) {
      return new HttpResponse(null, { status: args.status });
    }
    return HttpResponse.json(getMyProfileData);
  });
}

export const handlers = [handleGetMyProfile()];
