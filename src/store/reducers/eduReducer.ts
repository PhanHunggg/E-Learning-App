<<<<<<< HEAD
import { userLoginDto } from "./../../interfaces/user";
import { fetchUserListApi, findUserApi, login } from "./../../services/user";
=======
import {
  userInfoDto,
  userLoginDto,
  userProfileDto,
} from "./../../interfaces/user";
import { fetchUserProfileApi, login } from "./../../services/user";
// import { RootState } from "./../config";
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
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
  fetchCourseInformationApi,
  fetchCourseListApi,
  findCourseApi,
} from "./../../services/course ";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EduState {
  courseCatalog: CourseCatalogDto[];
  courseList: CourseListDto<ManageDto, CatalogDto>[];
<<<<<<< HEAD
  userInfo: userLoginDto | null;
=======
  userInfo: userInfoDto | null;
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
  UserList: Array<UserList<MaLoaiNguoiDung>>;
  findUserList: Array<userLoginDto>;
  findCourseList: CourseListDto<ManageDto, CatalogDto>[];
}

const DEFAULT_STATE = {
  userInfo: null,
  courseCatalog: [],
  courseList: [],
  UserList: [],
<<<<<<< HEAD
  findUserList: [],
  findCourseList: [],
=======
  
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
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

<<<<<<< HEAD
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
=======

>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a

const eduSlice = createSlice({
  name: "eduReducer",
  initialState: DEFAULT_STATE,
  reducers: {
    handleLogOut(state: EduState) {
<<<<<<< HEAD
=======
      localStorage.removeItem("USER_INFO_KEY");
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
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

<<<<<<< HEAD
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
=======
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
