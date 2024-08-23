import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./lang-slice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

// Типы для использования в компоненте
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
