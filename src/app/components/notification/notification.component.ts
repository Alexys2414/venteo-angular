import { Component, Input } from '@angular/core';
import { Notification } from '../../../types';
import { timeStamp } from 'console';
import { Timestamp, timestamp } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @Input({required: true}) notification: Notification = {} as Notification;

  constructor() {
    console.log(typeof this.notification.sendOn);
  }
}