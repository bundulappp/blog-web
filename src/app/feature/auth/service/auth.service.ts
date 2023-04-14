import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequestModel } from 'src/app/shared/models/auth/RegistrationRequestModel';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { UserViewModel } from 'src/app/shared/models/auth/UserViewModel';
import { LoginRequestModel } from 'src/app/shared/models/auth/LoginRequestModel';
import { StorageService } from './storage.service';
import { UserRegisterViewModel } from 'src/app/shared/models/auth/UserRegisterViewModel';
import { Router } from '@angular/router';
import { UserUpdateRequestModel } from 'src/app/shared/models/auth/update/UserUpdateRequestModel';
import { UserUpdateViewModel } from 'src/app/shared/models/auth/update/UserUpdateViewModel';
import { UserResetPasswordRequestModel } from 'src/app/shared/models/auth/update/UserResetPasswordRequestModel';
import { UserForgotPasswordRequestModel } from 'src/app/shared/models/auth/update/UserForgotPasswordRequestModel';
import { UserForgotPasswordViewModel } from 'src/app/shared/models/auth/update/UserForgotPasswordViewModel';
import { UserChangePasswordRequestModel } from 'src/app/shared/models/auth/update/UserChangePasswordRequestModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRegisterKey: string = 'user_registered_at';
  userLoginKey: string = 'user';
  userInformation: UserViewModel | undefined;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {}

  register(user: RegistrationRequestModel): Observable<UserRegisterViewModel> {
    return this.http
      .post<UserRegisterViewModel>(
        environment.apiUrl + '/auth/local/register',
        user
      )
      .pipe(
        tap((userData: UserRegisterViewModel) => {
          this.storageService.setItem(
            this.userRegisterKey,
            `${userData.user.createdAt}`
          );
        })
      );
  }

  login(loginData: LoginRequestModel): Observable<UserViewModel> {
    return this.http
      .post<UserViewModel>(environment.apiUrl + '/auth/local', loginData)
      .pipe(
        tap((userData: UserViewModel) => {
          this.setCurrentUser(userData);
        })
      );
    //https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay
  }

  logout(): void {
    this.storageService.removeItem(this.userLoginKey);
    this.userInformation = undefined;
    this.router.navigate(['/auth/login']);
  }

  userUpdate(
    userData: UserUpdateRequestModel
  ): Observable<UserUpdateViewModel> {
    return this.http.put<UserUpdateViewModel>(
      environment.apiUrl + '/user/me',
      userData
    );
  }

  setCurrentUser(userData: UserViewModel): void {
    this.storageService.clear();
    this.userInformation = userData;
    this.storageService.setItem(this.userLoginKey, JSON.stringify(userData));
  }

  userDelete(): Observable<UserUpdateViewModel> {
    return this.http
      .put<UserUpdateViewModel>(environment.apiUrl + '/user/me', {
        blocked: true,
        confirmed: false,
      })
      .pipe(
        tap(() => {
          this.storageService.clear();
        })
      );
  }

  forgotPassword(
    userData: UserForgotPasswordRequestModel
  ): Observable<UserForgotPasswordViewModel> {
    return this.http.post<UserForgotPasswordViewModel>(
      environment.apiUrl + '/auth/forgot-password',
      {
        email: userData.email,
      }
    );
  }

  resetPassword(
    userData: UserResetPasswordRequestModel
  ): Observable<UserViewModel> {
    return this.http.post<UserViewModel>(
      environment.apiUrl + '/auth/reset-password',
      userData
    );
  }

  changePassword(
    userData: UserChangePasswordRequestModel
  ): Observable<UserViewModel> {
    return this.http.post<UserViewModel>(
      environment.apiUrl + '/auth/change-password',
      userData
    );
  }
}
