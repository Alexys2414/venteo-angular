import { Component, Input } from '@angular/core';
import { Notification } from '../../../types';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @Input({required: true}) notification: Notification = {} as Notification;

  constructor() { }
}