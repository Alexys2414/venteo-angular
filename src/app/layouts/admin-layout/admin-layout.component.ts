import { Component, Inject, Input } from '@angular/core';
import { User } from '../../../types';
import { userInfo } from 'os';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  @Input() ROLES: any;
}
