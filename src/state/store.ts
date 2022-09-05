import { configureStore } from "@reduxjs/toolkit";
import { mapSettingsSlice } from "./storeSlices";

export const store = configureStore({
  reducer: {
    settings: mapSettingsSlice.reducer,
  },
});

export type FRLGMapState = ReturnType<typeof store.getState>;
export type FRLGMapDispatch = typeof store.dispatch;
