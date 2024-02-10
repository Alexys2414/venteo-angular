import { Component, inject } from '@angular/core';
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
export class LoginComponent {
  cookieService: CookieService = inject(CookieService);
  authService: AuthService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router) { }

  onSubmit() {
    const formValue = this.loginForm.value;
    
    const loginForm: LoginForm = {
      username: formValue.username || '',
      password: formValue.password || ''
    }

    this.authService.authenticate(loginForm).subscribe(
      user => {
        this.writeUserCookie(user as User);
        
        this.router.navigate(['/']);

      },
      error => {
        console.log('error', error);
      }
    )
  }

  writeUserCookie(user: User) {
    this.cookieService.set('user', JSON.stringify(user));
  }
}
