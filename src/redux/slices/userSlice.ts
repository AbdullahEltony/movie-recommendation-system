import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string | null;
    profileImage: string | null;
  }
  
  const initialState: UserState = {
    name: JSON.parse(localStorage.getItem("user") || "{}").name || null,
    profileImage: JSON.parse(localStorage.getItem("user") || "{}").profileImage || null,
  };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.profileImage = action.payload.profileImage;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.name = null;
      state.profileImage = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
