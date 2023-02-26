import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./features/counterSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

// Retorna o formato do state da nossa aplicação
export type RootState = ReturnType<typeof store.getState>
// Retorna o formato do dispatch da nossa aplicação
export type AppDispatch = typeof store.dispatch