import { IUser } from '../core/interfaces';

export * from './reducer';
export * from './actions';

export interface IRootState {
    counter: number;
    currentUser: IUser
}