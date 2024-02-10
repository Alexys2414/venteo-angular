import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuctionComponent } from './pages/liveAuction/liveAuction.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Subastas • Venteo'},
  {path: 'login', component: LoginComponent, title: 'Iniciar sesión • Venteo'},
  {path: 'notifications', component: NotificationsComponent, title: 'Notificaciones • Venteo'},
  {path: 'profile', component: ProfileComponent, title: 'Perfil • Venteo'},
  {path: 'wallet', component: WalletComponent, title: 'Billetera • Venteo'},
  {path: 'support', component: SupportComponent, title: 'Soporte • Venteo'},
  {path: 'about-us', component: AboutComponent, title: 'Acerca de • Venteo'},
  {path: 'terms', component: TermsComponent, title: 'Términos y condiciones • Venteo'},
  {path: 'category/:id', component: CategoryComponent, title: 'Categoría • Venteo'},
  {path: 'auction/:id', component: AuctionComponent, title: 'Subasta • Venteo'},
  {path: '**', component: NotFoundComponent, title: 'Ande vas pisha? • Venteo'}
];
