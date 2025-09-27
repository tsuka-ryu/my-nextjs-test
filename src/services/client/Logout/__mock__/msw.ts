import { HttpResponse, http } from "msw";
import type { vi } from "vitest";
import type * as ApiLogout from "@/pages/api/logout";
import { path } from "..";
import { data } from "./fixture";

export function handlePostLogout(args?: {
  mock?: ReturnType<typeof vi.fn>;
  status?: number;
}) {
  return http.post<{}, {}, ApiLogout.PostReturn>(path(), async () => {
    args?.mock?.();
    if (args?.status) {
      return new HttpResponse(null, { status: args.status });
    }
    return HttpResponse.json(data);
  });
}

export const handlers = [handlePostLogout()];
