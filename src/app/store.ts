import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "../screens/homePage/slice";
import reduxLogger from "redux-logger";
import CoursePageReducer from "../screens/coursesPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    coursePage: CoursePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
