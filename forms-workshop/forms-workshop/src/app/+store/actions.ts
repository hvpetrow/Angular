import { createAction } from "@ngrx/store";

export const increment = createAction(`${'[MyCounterComponent]'} Increment`);
export const decrement = createAction(`${'[MyCounterComponent]'} Decrement`);
export const reset = createAction(`${'[MyCounterComponent]'} Reset`);
