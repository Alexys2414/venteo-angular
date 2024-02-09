import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../types';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() user:User = {
  id: 18,
  firstName: "Natalia",
  lastName: "Risueño",
  userName: "@vvnat",
  email: "nrisuenosantiago@gmail.com",
  password: "123abc",
  repeatPassword: "123abc",
  bornDate: new Date("2004-05-27"),
  imageUrl:  "https://avatars.githubusercontent.com/u/118915775?v=4",
  createdAt: new Date("2021-05-27"),
  roleId: 1,
  money: 1000
  };
}
