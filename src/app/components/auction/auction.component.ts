import { Component, Input, OnInit } from '@angular/core';
import { Auction, User } from '../../../types';
import { UserService } from '../../services/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit{

  @Input({required: true}) auction: Auction = {} as Auction;

  date = new Date();
  isLive: boolean = false;

  userName: string = '';

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
    this.findUserById(this.auction.userId);
    this.auction.startsAt = new Date(this.auction.startsAt);
    this.auction.endsAt = new Date(this.auction.endsAt);
    if(this.auction.startsAt < this.date && this.auction.endsAt > this.date){
      this.isLive = true;
    }
  }

  findUserById(id: number): void {
    this.userService.findById(id).subscribe(user => {
      this.userName = '@'+user.userName || 'unknown';
    });
  }
}
      