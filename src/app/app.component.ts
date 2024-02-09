import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '../types';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLayoutComponent, HeaderComponent, FooterComponent, CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: User = {
    id: 1,
    firstName: 'John Doe',
    lastName: 'Doe',
    email: 'j' + 'doe' + '@example.com',
    money: 1000,
    roleId: 1
  }

  constructor() { // Esto deberia de decidirlo un servicio
  }
}
