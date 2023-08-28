import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './feature/auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userInformation$ = this.authService.userInformation$;

  constructor(private router: Router, private authService: AuthService) {}
}
