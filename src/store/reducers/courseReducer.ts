import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HttpRespon } from "../../interfaces/api";
import { CatalogDto, CourseListDto, ManageDto } from "../../interfaces/course";
import { fetchCourseListInPageApi } from "../../services/courseInPage";
import { RootState } from "./../config";

export interface CourseState {
    courseListInPage:HttpRespon<CourseListDto<ManageDto,CatalogDto>[]>     ;
   
}
export const fetchCourseListInPageAction = createAsyncThunk(
    "courseReducer/fetchCourseListInPageAction",
    async (_, store) => {
      const rootState = store.getState() as RootState;
      if (rootState.courseReducer.courseListInPage.items)
        return rootState.courseReducer.courseListInPage;
      const result = await fetchCourseListInPageApi();
      console.log(result.data)
      return result.data;
    }
);
  
const DEFAULT_STATE = {
   
    courseListInPage: {},

} as CourseState;
  
const courseSlice = createSlice({
    name: "courseReducer",
    initialState: DEFAULT_STATE,
    reducers: {
     
    },
    extraReducers(builder) {
     
   
      builder.addCase(
        fetchCourseListInPageAction.fulfilled,
        (
          state: CourseState,
          action: PayloadAction<HttpRespon<CourseListDto<ManageDto,CatalogDto>[]>>
        ) => {
          state.courseListInPage = action.payload;
          // console.log(action.payload);
        }
      );
    },
  });
  
  export const courseReducer = courseSlice.reducer;
  export const eduAction = courseSlice.actions;