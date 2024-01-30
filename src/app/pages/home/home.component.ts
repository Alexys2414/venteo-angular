import { Component } from '@angular/core';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
