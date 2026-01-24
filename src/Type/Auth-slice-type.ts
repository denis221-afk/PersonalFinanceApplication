export interface IAuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        email: string;
        name: string;
    } | null;
}