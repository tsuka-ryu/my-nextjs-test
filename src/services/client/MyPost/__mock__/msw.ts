import { HttpResponse, http } from "msw";
import { path } from "..";
import { deleteMyPostData, updateMyPostData } from "./fixture";

export function handlePutMyPost(args?: { status?: number }) {
  return http.put(path(":id"), async () => {
    if (args?.status) {
      return new HttpResponse(null, { status: args.status });
    }
    return HttpResponse.json(updateMyPostData);
  });
}

export function handleDeleteMyPost(args?: { status?: number }) {
  return http.delete(path(":id"), async () => {
    if (args?.status) {
      return new HttpResponse(null, { status: args.status });
    }
    return HttpResponse.json(deleteMyPostData);
  });
}

export const handlers = [handlePutMyPost(), handleDeleteMyPost()];
