import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginForm, User } from '../../../types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [CookieService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  cookieService: CookieService = inject(CookieService);
  authService: AuthService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.cookieService.get('user') !== '') {
    }
  }

  onSubmit() {
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
