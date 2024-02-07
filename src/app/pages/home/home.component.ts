import { Component } from '@angular/core';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { AuctionComponent } from '../../components/auction/auction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserLayoutComponent, AuctionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
