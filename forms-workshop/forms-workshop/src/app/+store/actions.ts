import { createAction, props } from "@ngrx/store";
import { IUser } from "../core/interfaces";

export const increment = createAction(`${'[MyCounterComponent]'} Increment`);
export const decrement = createAction(`${'[MyCounterComponent]'} Decrement`);
export const reset = createAction(`${'[MyCounterComponent]'} Reset`);


const currentUserDomain = '[CurrentUser]';
export const login = createAction(`${currentUserDomain} Login`, props<{ user: IUser }>());
export const logout = createAction(`${currentUserDomain} Logout`);
