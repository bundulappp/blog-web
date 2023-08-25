import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { RegistrationRequestModel } from 'src/app/shared/models/auth/RegistrationRequestModel';
import { LoginRequestModel } from 'src/app/shared/models/auth/LoginRequestModel';
import { StorageService } from './storage.service';
import { UserRegisterViewModel } from 'src/app/shared/models/auth/UserRegisterViewModel';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/shared/models/auth/UserViewModel';
import { UserUpdateRequestModel } from 'src/app/shared/models/auth/UserUpdateRequestModel';
import { UserUpdateViewModel } from 'src/app/shared/models/auth/update/UserUpdateViewModel';
import { UserForgotPasswordRequestModel } from 'src/app/shared/models/auth/update/UserForgotPasswordRequestModel';
import { UserForgotPasswordViewModel } from 'src/app/shared/models/auth/update/UserForgotPasswordViewModel';
import { UserResetPasswordRequestModel } from 'src/app/shared/models/auth/update/UserResetPasswordRequestModel';
import { UserChangePasswordRequestModel } from 'src/app/shared/models/auth/update/UserChangePasswordRequestModel';
import { UserLoginResponseModel } from 'src/app/shared/models/auth/update/UserLoginResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRegisterKey: string = 'user_registered_at';
  userLoginKey: string = 'user';
  userInformation: UserLoginResponseModel | undefined;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {
    const userData = this.storageService.getItem(this.userLoginKey);
    if (!!userData) {
      this.userInformation = JSON.parse(userData);
    }
  }

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

  login(loginData: LoginRequestModel): Observable<UserLoginResponseModel> {
    return this.http
      .post<UserLoginResponseModel>(
        environment.apiUrl + '/auth/local',
        loginData
      )
      .pipe(
        tap((userData: UserLoginResponseModel) => {
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

  setCurrentUser(userData: UserLoginResponseModel): void {
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
