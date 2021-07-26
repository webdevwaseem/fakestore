import { configureStore } from "@reduxjs/toolkit";
import basketreducer from "./basket";

export const store = configureStore({
  reducer: {
    basket: basketreducer,
  },
});
export type TStore = ReturnType<typeof store.getState>;
