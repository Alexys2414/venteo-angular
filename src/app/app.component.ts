import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '../types';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLayoutComponent, HeaderComponent, FooterComponent, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, LoginComponent],
  providers: [CookieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cookieService: CookieService = inject(CookieService);
  router: Router = inject(Router);

  user: User | null = null;

  constructor() {}

  ngOnInit() {
    this.user = this.readUserCookie();
  }

  readUserCookie() {
    const cookie = this.cookieService.get('user');

    if (cookie) {
      // Get the value of the cookie
      const cookieValue = JSON.parse(cookie);
      console.log(cookieValue);
      return cookieValue;

    } else {
      this.router.navigate(['/login']);
    }
  }
}
