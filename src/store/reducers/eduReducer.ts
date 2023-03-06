import {  userLoginDto } from "./../../interfaces/user";
import { login } from "./../../services/user";
import { RootState } from "./../config";
import {
  CatalogDto,
  CourseCatalogDto,
  CourseListDto,
  ManageDto,
} from "./../../interfaces/course";
import {
  fetchCourseCatalogApi,
  fetchCourseListApi,
} from "./../../services/course ";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EduState {
  courseCatalog: CourseCatalogDto[];
  courseList:CourseListDto<ManageDto,CatalogDto>[];
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

export const fetchCourseListAction = createAsyncThunk(
  "eduReducer/fetchCourseListAction",
  async (_, store) => {
    const rootState = store.getState() as RootState;
    if (rootState.eduReducer.courseList.length)
      return rootState.eduReducer.courseList;
    const result = await fetchCourseListApi();
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
  courseList: [],
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
        state.courseCatalog = action.payload;
      }
    );
    builder.addCase(
      fetchUserInfoAction.fulfilled,
      (state: EduState, action: PayloadAction<userLoginDto>) => {
        state.userInfo = action.payload;
      }
    );
    builder.addCase(
      fetchCourseListAction.fulfilled,
      (
        state: EduState,
        action: PayloadAction<CourseListDto<ManageDto,CatalogDto>[]>
      ) => {
        state.courseList = action.payload;
        console.log(action.payload);
      }
    );
  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
