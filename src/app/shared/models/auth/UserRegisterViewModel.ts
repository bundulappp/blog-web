export interface UserRegisterViewModel {
  user: {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
