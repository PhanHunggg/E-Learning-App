import { userInfoDto, userLoginDto } from "./../../interfaces/user";
import { login } from "./../../services/user";
import { RootState } from "./../config";
import { CourseCatalogDto } from "./../../interfaces/course";
import { fetchCourseCatalogApi } from "./../../services/course ";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EduState {
  courseCatalog: CourseCatalogDto[];
  userInfo: {};
}

export const fetchCourseCatalogAction = createAsyncThunk(
  "eduReducer/fetchCourseCatalogAction",
  async (_, store) => {
    const rootState = store.getState() as RootState;
    if (rootState.eduReducer.courseCatalog.length)
      return rootState.eduReducer.courseCatalog;
    const result = await fetchCourseCatalogApi();
    return result.data;
  }
);

export const fetchUserInfoAction = createAsyncThunk(
  "eduReducer/fetchUserInfoAction",
  async (data: userLoginDto) => {
    const result = await login(data);
    return result.data;
  }
);

const DEFAULT_STATE = {
  courseCatalog: [],
  userInfo: {},
} as EduState;

const eduSlice = createSlice({
  name: "eduReducer",
  initialState: DEFAULT_STATE,
  reducers: {
    handleLogOut(state: EduState) {
      state.userInfo = {};
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchCourseCatalogAction.fulfilled,
      (state: EduState, action: PayloadAction<CourseCatalogDto[]>) => {
        console.log("fulfilled");
        state.courseCatalog = action.payload;
      }
    );
    builder.addCase(
      fetchUserInfoAction.fulfilled,
      (state: EduState, action: PayloadAction<userLoginDto>) => {
        state.userInfo = action.payload;
      }
    );
  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
