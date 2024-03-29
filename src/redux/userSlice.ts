import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginApi,
  loginJwtApi,
  resetPasswordApi,
  signInApi,
  updateProfileApi,
} from "@/api/user";
import { newImageFileUrl } from "@/api/upload";
import { LoginProps, ResetPasswordProps, UserProps } from "@/interfaces/user";
import { RootState } from "./store";
import Cookie from "@/utils/cookie";
import openNotification from "@/utils/openNotification";

const initialState: {
  token: string;
  websocketUrl: string;
  user: UserProps;
} = {
  token: "",
  websocketUrl: "",
  user: {
    avatar: "",
    createdAt: "",
    email: "",
    googleId: "",
    isEmailVerification: false,
    name: "",
    updatedAt: "",
    _id: "",
  },
};

export const signInAction = createAsyncThunk(
  "user/signIn",
  async (data: LoginProps) => await signInApi(data)
);

export const loginAction = createAsyncThunk(
  "user/login",
  async (data: LoginProps) => await loginApi(data)
);

export const loginJwtAction = createAsyncThunk(
  "user/loginJwt",
  async () => await loginJwtApi()
);

export const updateProfileAction = createAsyncThunk(
  "user/updateProfile",
  async (data: { userId: string; file?: Blob; name?: string }) => {
    if (data.file) {
      const { result: imageResult } = await newImageFileUrl(data.file);
      return await updateProfileApi({
        userId: data.userId,
        avatar: imageResult.link,
      });
    } else {
      return await updateProfileApi({
        userId: data.userId,
        name: data.name,
      });
    }
  }
);

export const resetPasswordAction = createAsyncThunk(
  "user/resetPassword",
  async (data: ResetPasswordProps) => await resetPasswordApi(data)
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      Cookie.remove("lunar-token");
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    // 註冊
    builder
      .addCase(signInAction.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.websocketUrl = action.payload.websocketUrl;
        Cookie.set("lunar-token", action.payload.token);
      })
      .addCase(signInAction.rejected, (state) => {
        state.token = "";
        Cookie.remove("lunar-token");
      });
    // 登入
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.websocketUrl = action.payload.websocketUrl;
        Cookie.set("lunar-token", action.payload.token);
      })
      .addCase(loginAction.rejected, (state) => {
        state.token = "";
        Cookie.remove("lunar-token");
      });
    // token 驗證
    builder
      .addCase(loginJwtAction.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.websocketUrl = action.payload.websocketUrl;
      })
      .addCase(loginJwtAction.rejected, (state) => {
        state.token = "";
      });
    // 更新個人資料
    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      if (action.payload.result.avatar) {
        state.user.avatar = action.payload.result.avatar;
      }
      if (action.payload.result.name) {
        state.user.name = action.payload.result.name;
        openNotification({
          message: "使用者名稱更新成功",
          success: true,
        });
      }
    });
    // 重設密碼
    builder.addCase(resetPasswordAction.fulfilled, (_state, _action) => {
      openNotification({
        message: "密碼更新成功",
        success: true,
      });
    });
  },
});

export const { logout } = userSlice.actions;

export const selectAuth = (state: RootState) => Boolean(state.user.token);

export const selectUser = (state: RootState) => state.user.user;

export const selectWebsocketUrl = (state: RootState) => state.user.websocketUrl;

export default userSlice.reducer;
