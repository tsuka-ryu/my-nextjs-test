import { type ReactNode, useCallback, useEffect } from "react";
import { useAsyncFn } from "react-use";
import type { AsyncState } from "react-use/lib/useAsyncFn";
import { getMyProfile } from "@/services/client/MyProfile";
import type { GetMyProfileReturn } from "@/services/server/MyProfile";

import {
  LoginUserInfoActionContext,
  LoginUserInfoStateContext,
} from "./LoginUserInfoContext";

export const LoginUserInfoProvider = ({
  children,
  defaultState,
}: {
  children: ReactNode;
  defaultState?: AsyncState<GetMyProfileReturn>;
}) => {
  const [profile, updateProfile] = useAsyncFn(getMyProfile, [], defaultState);

  const memoizedUpdateProfile = useCallback(() => {
    updateProfile();
  }, [updateProfile]);

  useEffect(() => {
    memoizedUpdateProfile();
    // NOTE: 初回レンダリングのみ実行させたいようなので、もしかしたらこの治し方だとバグるかも
  }, [memoizedUpdateProfile]);
  return (
    <LoginUserInfoStateContext.Provider value={profile}>
      <LoginUserInfoActionContext.Provider value={{ updateProfile }}>
        {children}
      </LoginUserInfoActionContext.Provider>
    </LoginUserInfoStateContext.Provider>
  );
};
