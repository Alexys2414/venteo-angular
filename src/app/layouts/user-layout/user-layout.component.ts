import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Link, User } from '../../../types';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
    links: Link[] = [
      { path: '/', text: 'Home' },
      { path: '/profile', text: 'Profile' },
      { path: '/notifications', text: 'Notifications' },
    ]
    @Input({required: true}) user: User = {} as User;
}
