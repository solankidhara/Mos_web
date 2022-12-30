import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    contentType: [],
    category: [],
    tags: [],
    tagTwo: [],
  },
  reducers: {
    addContentType: (state, actions) => {
      state.contentType = actions.payload;
    },
    addCategories: (state, actions) => {
      state.category = actions.payload;
    },
    addTags: (state, actions) => {
      state.tags = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContentType,addCategories ,addTags} = categorySlice.actions;

export default categorySlice.reducer;
