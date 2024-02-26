import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/feature/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userInformation$ = this.authService.userInformation$;

  constructor(private router: Router, private authService: AuthService) {}

  navigatoToMain(): void {
    this.router.navigate(['/main']);
  }

  navigateToSettings(): void {
    this.router.navigate(['/auth/profile']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
