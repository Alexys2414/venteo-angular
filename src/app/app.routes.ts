import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', children: [
    {path: '', component: AdminLayoutComponent,},
    {path: 'users', component: AdminLayoutComponent},
  ]},
  {path: '**', component: NotFoundComponent}
];
