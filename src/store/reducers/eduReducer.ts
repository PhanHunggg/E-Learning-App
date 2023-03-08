import { UserList, MaLoaiNguoiDung } from "./../../interfaces/userList";
import {
  CourseList,
  DanhMucKhoaHocDto,
  NguoiTAODto,
} from "./../../interfaces/courseList";
import { RootState } from "./../config";
import { CourseCatalogDto } from "./../../interfaces/course";
import {
  fetchCourseCatalogApi,
  fetchCourseListApi,
  fetchUserListApi,
} from "./../../services/course ";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EduState {
  courseCatalog: CourseCatalogDto[];
  CourseList: Array<CourseList<NguoiTAODto, DanhMucKhoaHocDto>>;
  UserList: Array<UserList<MaLoaiNguoiDung>>;
}

const DEFAULT_STATE = {
  courseCatalog: [],
  CourseList: [],
  UserList: [],
} as EduState;

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

    if (rootState.eduReducer.CourseList.length) {
      return rootState.eduReducer.CourseList;
    }

    const result = await fetchCourseListApi();
    return result.data;
  }
);

export const fetchUserListAction = createAsyncThunk(
  "eduReducer/fetchUserListAction",
  async (_, store) => {
    const RootState = store.getState() as RootState;

    if (RootState.eduReducer.UserList.length) {
      return RootState.eduReducer.UserList;
    }

    const result = await fetchUserListApi();
    return result.data;
  }
);

const eduSlice = createSlice({
  name: "eduReducer",
  initialState: DEFAULT_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchCourseCatalogAction.fulfilled,
      (state: EduState, action: PayloadAction<CourseCatalogDto[]>) => {
        state.courseCatalog = action.payload;
      }
    );

    builder.addCase(
      fetchCourseListAction.fulfilled,
      (
        state: EduState,
        action: PayloadAction<Array<CourseList<NguoiTAODto, DanhMucKhoaHocDto>>>
      ) => {
        state.CourseList = action.payload;
      }
    );

    builder.addCase(
      fetchUserListAction.fulfilled,
      (
        state: EduState,
        action: PayloadAction<Array<UserList<MaLoaiNguoiDung>>>
      ) => {
        state.UserList = action.payload;
      }
    );
  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
