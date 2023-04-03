import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequestModel } from 'src/app/shared/models/auth/RegistrationRequestModel';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { UserViewModel } from 'src/app/shared/models/auth/UserViewModel';
import { LoginRequestModel } from 'src/app/shared/models/auth/LoginRequestModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  register(user: RegistrationRequestModel): Observable<void> {
    return this.http.post<void>(
      environment.apiUrl + 'auth/local/register',
      user
    );
  }

  login(loginData: LoginRequestModel): Observable<UserViewModel> {
    return this.http
      .post<UserViewModel>(environment.apiUrl + '/auth/local', loginData)
      .pipe(
        tap((userData) => {
          console.log(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        })
      );
    //https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay
  }
}
