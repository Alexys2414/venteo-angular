import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { Auction } from '../../../types';
import { AuctionsService } from '../../services/auctions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  auctions?: Auction[] = []
  auction: Auction = {} as Auction;

  constructor(private auctionService: AuctionsService) { }

  ngOnInit(): void {
      this.auctionService.getAuctions().subscribe(
        {
          next: (auctions) => this.auctions = auctions,
          error: (error) => console.error(error)
        }
      )

      this.auctionService.getAuction(1).subscribe(
        {
          next: (auction) => this.auction = auction,
          error: (error) => console.error(error)
        }
      )
  }
}
