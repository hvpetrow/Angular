import { createReducer, on } from "@ngrx/store";
import { IUser } from "../core/interfaces";
import { decrement, increment, reset } from "./actions";

export const counterReducer = createReducer<number>(0,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => 0)
);

export const currentUserReducer = createReducer<IUser>(
    undefined,
    // on(login),
    // on(logout)
)
