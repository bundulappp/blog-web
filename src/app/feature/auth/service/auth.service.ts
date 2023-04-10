import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequestModel } from 'src/app/shared/models/auth/RegistrationRequestModel';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { UserViewModel } from 'src/app/shared/models/auth/UserViewModel';
import { LoginRequestModel } from 'src/app/shared/models/auth/LoginRequestModel';
import { UserRegisterViewModel } from 'src/app/shared/models/auth/UserRegisterViewModel';
import { StorageService } from './localstorage.service';
import { Router } from '@angular/router';
import { UserUpdateRequestModel } from 'src/app/shared/models/auth/UserUpdateRequestModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRegisterKey: string = 'user_registered_at';
  userLoginKey: string = 'user';
  userInformation: UserViewModel | undefined;

  constructor(private http: HttpClient, private storageService: StorageService, private router: Router) {}

  getToken(): string | null {
    return localStorage.getItem('token');
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

  login(loginData: LoginRequestModel): Observable<UserViewModel> {
    return this.http
      .post<UserViewModel>(environment.apiUrl + '/auth/local', loginData)
      .pipe(
        tap((userData) => {
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

  userUpdate(userData: UserUpdateRequestModel): Observable<UserViewModel> {
    return this.http
      .put<UserViewModel>(environment.apiUrl + '/user/me', userData)
      .pipe(
        tap((userData: UserViewModel) => {
          this.setCurrentUser(userData);
        })
      );
  }

  setCurrentUser(userData: UserViewModel): void {
    this.storageService.clear();
    this.userInformation = userData;
    this.storageService.setItem(this.userLoginKey, JSON.stringify(userData));
  }
}
