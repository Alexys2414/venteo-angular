import { Component } from '@angular/core';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { AuctionComponent } from '../../components/auction/auction.component';
import { AuctionService } from '../../services/auction.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserLayoutComponent, AuctionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  auctions: any[] = [];
  
  constructor(
    private auctionService: AuctionService) { }
  
  ngOnInit(): void {
    this.findAll();
  }
  findAll():void{
    this.auctionService.findAll().subscribe(auctions => {
      console.log('auctions:', auctions);
      this.auctions = auctions;
    });
  }
}
