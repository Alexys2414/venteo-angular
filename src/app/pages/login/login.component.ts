import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginForm, RegisterForm, User } from '../../../types';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
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
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.cookieService.get('user') !== '') {
    }
  }

  getFirstNameErrorMessage() {
    if (this.registerForm.controls.firstName.hasError('required')) {
      return 'Debes introducir un nombre';
    }

    if (this.registerForm.controls.firstName.hasError('maxlength')) {
      return 'El nombre debe tener menos de 50 caracteres';
    }

    return this.registerForm.controls.firstName.hasError('minlength') ? 'El nombre debe tener al menos 3 caracteres' : '';
  }

  getLastNameErrorMessage() {
    if (this.registerForm.controls.lastName.hasError('required')) {
      return 'Debes introducir un apellido';
    }

    if (this.registerForm.controls.lastName.hasError('maxlength')) {
      return 'El apellido debe tener menos de 50 caracteres';
    }

    return this.registerForm.controls.lastName.hasError('minlength') ? 'El apellido debe tener al menos 3 caracteres' : '';
  }

  getUserNameErrorMessage() {
    if (this.registerForm.controls.userName.hasError('required')) {
      return 'Debes introducir un nombre de usuario';
    }

    if (this.registerForm.controls.userName.hasError('maxlength')) {
      return 'El nombre de usuario debe tener menos de 50 caracteres';
    }

    return this.registerForm.controls.userName.hasError('minlength') ? 'El nombre de usuario debe tener al menos 3 caracteres' : '';
  }

  getEmailErrorMessage() {
    if (this.registerForm.controls.email.hasError('required')) {
      return 'Debes introducir un correo electrónico';
    }

    return this.registerForm.controls.email.hasError('email') ? 'No es un correo valido' : '';
  }

  getPasswordErrorMessage() {
    if (this.registerForm.controls.password.hasError('required')) {
      return 'Debes introducir una contraseña';
    }

    if (this.registerForm.controls.password.hasError('maxlength')) {
      return 'La contraseña debe tener menos de 50 caracteres';
    }

    if (this.registerForm.controls.password.hasError('minlength')) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }

    return '';
  }

  getRepeatPasswordErrorMessage() {
    if (this.registerForm.controls.password.value !== this.registerForm.controls.repeatPassword.value) {
      return 'Las contraseñas no coinciden';
    }

    if (this.registerForm.controls.repeatPassword.hasError('required')) {
      return 'Debes repetir la contraseña';
    }

    return '';
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
