import type { IUser } from "./Type";

export interface IUserSlice extends IUser {}

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}
