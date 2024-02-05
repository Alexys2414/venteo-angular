import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../../components/notification/notification.component';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent{
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationsService) { }

  findAllByUserId():void{
    this.notificationService.findAllByUserId(1).subscribe(notifications => this.notifications = notifications);
  }
}
