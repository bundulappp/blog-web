export interface UserChangePasswordRequestModel {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}
