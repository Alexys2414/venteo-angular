import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '../types';
import { UserService } from './services/user.service';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IssuesComponent } from './pages/issues/issues.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLayoutComponent, HeaderComponent, FooterComponent, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, IssuesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userService: UserService = new UserService();
  user: User;

  constructor() { // Esto deberia de decidirlo un servicio
    this.user = this.userService.getUser();
  }
}
