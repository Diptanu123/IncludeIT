import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Asynchronous action for logout
export const logout = createAsyncThunk("auth/logout", async () => {
  // Add any logout logic here (e.g., clearing tokens, API calls)
  localStorage.removeItem("token"); // If you're using token-based authentication
  return null; // Optionally, you can return any data needed for the state
});

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      // Reset state on successful logout
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
