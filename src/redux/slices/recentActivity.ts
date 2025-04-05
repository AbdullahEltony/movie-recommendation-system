import { createSlice } from "@reduxjs/toolkit";

interface Activities {
  recentActivities:
    | {
        tmdbId: number;
        movieTitle: string;
        poster_path: string;
        rating?: number;
        createdAt: string;
        reviewMessage?: string;
        type: string;
      }[]
    | null;
}

const initialState: Activities = {
  recentActivities: [],
};

const ActivitiesSlice = createSlice({
  name: "recentActivities",
  initialState,
  reducers: {
    addToRecentActivities: (state, action) => {
      const isExistMovie = state.recentActivities?.find(
        (m) => m.tmdbId === action.payload.tmdbId && m.type === action.payload.type
      )
      if (!isExistMovie) {
        state.recentActivities?.push(action.payload);
      }
    },
  },
});

export const { addToRecentActivities } = ActivitiesSlice.actions;
export default ActivitiesSlice.reducer;
