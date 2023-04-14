export interface UserResetPasswordRequestModel {
  code: string;
  password: string;
  passwordConfirmation: string;
}
