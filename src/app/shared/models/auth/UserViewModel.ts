export interface UserViewModel {
  jwt: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    token: string;
    refreshToken: string;
  };
}