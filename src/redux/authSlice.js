import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as jwtDecode from "jwt-decode";

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
  return null;
});

const initialState = {
  isAuthenticated: false,
  user: null,
};

const initializeStateFromToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode.jwtDecode(token);
      return {
        isAuthenticated: true,
        user: {
          name: decodedToken.name || null,
          college: decodedToken.college || null,
          userid: decodedToken.userid || null,
        },
      };
    } catch (error) {
      console.error("Token decode error:", error);
      localStorage.removeItem("token");
    }
  }
  return initialState;
};

const authSlice = createSlice({
  name: "auth",
  initialState: initializeStateFromToken(),
  reducers: {
    loginSuccess: (state, action) => {
      const { token, userData } = action.payload;
      localStorage.setItem("token", token);
      state.isAuthenticated = true;
      state.user = {
        name: userData.name || null,
        college: userData.college || null,
        userid: userData.userid || null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;