import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./Slice/image-slice";

export default configureStore({
  reducer: {
    images: imageReducer,
  },
});
