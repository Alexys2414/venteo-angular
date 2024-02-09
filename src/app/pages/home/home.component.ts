import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { AuctionComponent } from '../../components/auction/auction.component';
import { AuctionService } from '../../services/auction.service';
import { Auction, Category } from '../../../types';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserLayoutComponent, AuctionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  auctions: Auction[] = [];
  categories: Category[] = [];
  now = new Date();
  
  constructor(
    private auctionService: AuctionService,
    private categoryService: CategoryService) { }

  
  ngOnInit(): void {
    this.findAllAuctions();
    this.findAllCategories();
  }

  findAllAuctions():void{
    this.auctionService.findAll().subscribe(auctions => {
      this.auctions = auctions;
    });
  }
  findAllCategories():void{
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
