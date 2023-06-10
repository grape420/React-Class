/*
  포스트 상세보기에 필요한 reducer를 export
 */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// state 초기값
const initialState = {
  post: {},
  loading: false,
  hasError: false,
};

// slice 객체 생성
const postDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {
    getPostDetailsStart: (state, action) => {
      state.loading = true;
    },
    getPostDetailsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.post = action.payload;
    },
    getPostDetailsFailure: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const {
  getPostDetailsStart,
  getPostDetailsSuccess,
  getPostDetailsFailure,
} = postDetailsSlice.actions;

export default postDetailsSlice.reducer;

export const fetchPostDetails = (id) => {
  return async (dispatch) => {
    dispatch(getPostDetailsStart());

    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      let post = response.data;

      response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      post.username = response.data.username;
      post.email = response.data.email;

      dispatch(getPostDetailsSuccess(post));
    } catch (error) {
      dispatch(getPostDetailsFailure());
    }
  };
};
