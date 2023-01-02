import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    content:[],
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
    addContent :(state, actions) => {
      state.content = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContentType,addCategories ,addTags ,addContent} = categorySlice.actions;

export default categorySlice.reducer;
