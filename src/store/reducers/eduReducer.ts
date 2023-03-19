import {
  userInfoDto,
  userLoginDto,
  userProfileDto,
} from "./../../interfaces/user";
import { fetchUserProfileApi, login } from "./../../services/user";
// import { RootState } from "./../config";
import {
  CatalogDto,
  CourseCatalogDto,
  CourseListDto,
  ManageDto,
  RegistrationCourseDetailDto,
} from "./../../interfaces/course";
import { UserList, MaLoaiNguoiDung } from "./../../interfaces/userList";
import { RootState } from "./../config";
import {
  fetchCourseCatalogApi,
  fetchCourseListApi,
  fetchUserListApi,
} from "./../../services/course ";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EduState {
  courseCatalog: CourseCatalogDto[];
  courseList: CourseListDto<ManageDto, CatalogDto>[];
  userInfo: userInfoDto | null;
  UserList: Array<UserList<MaLoaiNguoiDung>>;
}

const DEFAULT_STATE = {
  userInfo: null,
  courseCatalog: [],
  courseList: [],
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
    if (rootState.eduReducer.courseList?.length)
      return rootState.eduReducer.courseList;
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
  reducers: {
    handleLogOut(state: EduState) {
      localStorage.removeItem("USER_INFO_KEY");
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

  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
