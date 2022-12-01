import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./actions";

export const counterReducer = createReducer<number>(0,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => 0)
);
