import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      identifier: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.getRawValue()).subscribe({
        next: (userData) => {
          this.loginForm.reset();
          if (!!userData) {
            this.toastr.success('Sikeres bejelentkezés!');
            this.router.navigate(['/main']);
          } else {
            this.toastr.error('Sikertelen bejelentkezés!');
          }
        },
        error: () => {
          this.toastr.error('Sikertelen bejelentkezés!');
        },
      });
    }
  }
}
