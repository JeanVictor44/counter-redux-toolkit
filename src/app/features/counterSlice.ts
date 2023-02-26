import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    // Nome da chave que salvaremos no state
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.value += 1;
        },

        decrement(state){
            state.value -= 1;
        },
        reset(state){
            state.value = 0;
        }
    }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer 

export const selectCount = (state: RootState) => state.counter.value