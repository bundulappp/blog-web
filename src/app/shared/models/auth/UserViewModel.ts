export interface UserViewModel {
  id: number;
  username: string;
  password: string;
  email: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
