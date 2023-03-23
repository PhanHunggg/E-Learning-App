import { userLoginDto } from "./../../interfaces/user";
import { fetchUserListApi, findUserApi, login } from "./../../services/user";
import {
  CatalogDto,
  CourseCatalogDto,
  CourseListDto,
  ManageDto,
} from "./../../interfaces/course";
import { UserList, MaLoaiNguoiDung } from "./../../interfaces/userList";
import { RootState } from "./../config";
import {
  fetchCourseCatalogApi,
  fetchCourseInformationApi,
  fetchCourseListApi,
  findCourseApi,
} from "./../../services/course ";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EduState {
  courseCatalog: CourseCatalogDto[];
  courseList: CourseListDto<ManageDto, CatalogDto>[];
  userInfo: userLoginDto | null;
  UserList: Array<UserList<MaLoaiNguoiDung>>;
  findUserList: Array<userLoginDto>;
  findCourseList: CourseListDto<ManageDto, CatalogDto>[];
}

const DEFAULT_STATE = {
  userInfo: null,
  courseCatalog: [],
  courseList: [],
  UserList: [],
  findUserList: [],
  findCourseList: [],
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
  async () => {
    const result = await fetchCourseListApi();
    return result.data;
  }
);

export const fetchUserInfoAction = createAsyncThunk(
  "eduReducer/fetchUserInfoAction",
  async (data: userLoginDto) => {
    const result = await login(data);
    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data));
    return result.data;
  }
);

export const fetchUserListAction = createAsyncThunk(
  "eduReducer/fetchUserListAction",
  async (_, store) => {
    const result = await fetchUserListApi();
    return result.data;
  }
);

export const findUserAction = createAsyncThunk(
  "eduReducer/findUserApi",
  async (data: string) => {
    const result = await findUserApi(data);
    return result.data;
  }
);

export const findCourseAction = createAsyncThunk(
  "eduReducer/findCourseApi",
  async (data: string) => {
    const result = await findCourseApi(data);
    return result.data;
  }
);

export const fetchCourseInformationAction = createAsyncThunk(
  "eduReducer/fetchCourseInformationApi",
  async (id: string) => {
    const result = await fetchCourseInformationApi(id);
    return result.data;
  }
);

const eduSlice = createSlice({
  name: "eduReducer",
  initialState: DEFAULT_STATE,
  reducers: {
    handleLogOut(state: EduState) {
      state.userInfo = null;
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
        action: PayloadAction<CourseListDto<ManageDto, CatalogDto>[]>
      ) => {
        state.courseList = action.payload;
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

    builder.addCase(
      findUserAction.fulfilled,
      (state: EduState, action: PayloadAction<any>) => {
        state.findUserList = action.payload;
      }
    );

    builder.addCase(
      findCourseAction.fulfilled,
      (state: EduState, action: PayloadAction<any>) => {
        state.findCourseList = action.payload;
      }
    );
  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
