import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginForm, RegisterForm, User } from '../../../types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
    MatFormFieldModule,
    MatInput,
    MatButtonModule
  ],
  providers: [CookieService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  cookieService: CookieService = inject(CookieService);
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService);

  hide: boolean = true;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.cookieService.get('user') !== '') {
    }
  }

  onLogin() {
    const formValue = this.loginForm.value;
    
    const loginForm: LoginForm = {
      username: formValue.username || '',
      password: formValue.password || ''
    }

    this.authService.authenticate(loginForm).subscribe(
      user => {
        this.writeUserCookie(user as User);     
        this.redirect();   
      },
      error => {
        console.log('error', error);
      }
    )
  }

  onRegister() {
    const formValue = this.registerForm.value;

    const registerForm: RegisterForm = {
      firstName: formValue.firstName || '',
      lastName: formValue.lastName || '',
      userName: formValue.userName || '',
      email: formValue.email || '',
      password: formValue.password || '',
      repeatPassword: formValue.repeatPassword || ''
    }

    this.userService.create(registerForm).subscribe(
      user => {
        this.writeUserCookie(user as User);
        this.redirect();
      },
      error => {
        console.log('error', error);
      }
    )
  }

  redirect() {
    this.router.navigateByUrl('/');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  writeUserCookie(user: User) {
    this.cookieService.set('user', JSON.stringify(user));
  }
}
