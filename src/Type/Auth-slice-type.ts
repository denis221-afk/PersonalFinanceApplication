export interface IAuthState {
  isAuthenticated: boolean;
  user: {
    uid: string;
    email: string;
    accessToken?: string;
  } | null;
}
