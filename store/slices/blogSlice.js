/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  totalBlogs: [],
};

export const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      return {...state.totalBlogs, ...action.payload};
    },
    getAllBlog:(state,action)=>{
      state.totalBlogs = action.payload;
      // return [...state,...action.payload];
    },
  },
});


export const AllBlogs = state=>state.blog.totalBlogs;

export const {addBlog,getAllBlog} = BlogSlice.actions;

export default BlogSlice.reducer;
