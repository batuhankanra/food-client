import { configureStore } from "@reduxjs/toolkit";
import modal from './features/modal'
import api from './features/api'


export const store=configureStore({
    reducer:{
        modal,
        api
        
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch