import { Component } from '@angular/core';
import { app } from '../../../../server';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  title = 'angular-playground';
}
