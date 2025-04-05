import { createSlice } from "@reduxjs/toolkit";

interface Reviews {
    reviews:{
        tmdbId: number;
        title: string;
        poster_path: string
        message: string
        rating?: number
        createdAt: string

    }[] | null
}
   

const initialState : Reviews = {
    reviews  : [],
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        addToReviews: (state, action) => {
            state.reviews?.push(action.payload);
        },
        removeMovieFromReviews: (state, action) => {
        const newWatchlist = state.reviews?.filter((movie) => movie.tmdbId !== action.payload);
        state.reviews = newWatchlist!;
    }}
})

export const { addToReviews, removeMovieFromReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer