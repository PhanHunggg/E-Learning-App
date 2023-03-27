import { notification } from "antd";
import { userLoginDto } from "./../../interfaces/user";
import {
  fetchUserListApi,
  findUserApi,
  findUserRepairApi,
  login,
} from "./../../services/user";
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
  userInfo: userLoginDto | undefined;
  UserList: Array<UserList<MaLoaiNguoiDung>>;
  findUserList: Array<userLoginDto>;
  findUserRepairList: Array<userLoginDto>;
  findCourseList: CourseListDto<ManageDto, CatalogDto>[];
}

const DEFAULT_STATE = {
  userInfo: undefined,
  courseCatalog: [],
  courseList: [],
  UserList: [],
  findUserList: [],
  findUserRepairList: [],
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
    try {
      const result = await login(data);
      localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data));
      notification.success({
        message: "Đăng nhập thành công",
        duration: 2,
      });
      return result.data;
    } catch (error: any) {
      notification.error({
        message: error.response.data,
        duration: 2,
      });
    }
  }
);

export const fetchUserListAction = createAsyncThunk(
  "eduReducer/fetchUserListAction",
  async () => {
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

export const findUserRepairAction = createAsyncThunk(
  "eduReducer/findUserRepairApi",
  async () => {
    const result = await findUserRepairApi();
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
      state.userInfo = undefined;
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
      (state: EduState, action: PayloadAction<userLoginDto | undefined>) => {
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
      (
        state: EduState,
        action: PayloadAction<Array<CourseListDto<ManageDto, CatalogDto>>>
      ) => {
        state.findCourseList = action.payload;
      }
    );

    builder.addCase(
      findUserRepairAction.fulfilled,
      (state: EduState, action: PayloadAction<any>) => {
        state.findUserRepairList = action.payload;
      }
    );
  },
});

export const eduReducer = eduSlice.reducer;
export const eduAction = eduSlice.actions;
