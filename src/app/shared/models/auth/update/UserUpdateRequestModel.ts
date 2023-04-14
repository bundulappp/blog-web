export interface UserUpdateRequestModel {
  email?: string;
  username?: string;
  password?: string;
  blocked?: boolean;
  confirmed?: boolean;
}
