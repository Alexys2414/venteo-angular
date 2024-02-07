import { Component, Input } from '@angular/core';
import { Auction } from '../../../types';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent {
  @Input({required: true}) auction: Auction = {} as Auction;

  constructor() { }

}
