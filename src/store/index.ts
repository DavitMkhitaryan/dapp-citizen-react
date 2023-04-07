import { configureStore } from '@reduxjs/toolkit';
import {citizensReducer, fetchCitizensList } from './slices/citizensSlice';

const store = configureStore({
    reducer: {
        citizens: citizensReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store, fetchCitizensList};