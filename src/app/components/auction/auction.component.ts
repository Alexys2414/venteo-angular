import { Component, Input } from '@angular/core';
import { Auction, User } from '../../../types';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent {
  @Input({required: true}) auction: Auction = {} as Auction;
  @Input({required: true}) user: User = {} as User; 
  constructor() { }

}
