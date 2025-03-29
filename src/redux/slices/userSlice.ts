import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  profileImage: string | null;
}

const initialState: UserState = {
  name: null,
  profileImage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.profileImage = action.payload.profileImage;
      if (typeof window !== "undefined") {
        if (!localStorage.getItem("user")) {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      }
    },
    clearUser: (state) => {
      state.name = null;
      state.profileImage = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
