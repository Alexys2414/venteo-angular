import { Component, Input, OnInit } from '@angular/core';
import { Auction, User } from '../../../types';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit{

  @Input({required: true}) auction: Auction = {} as Auction;

  userName: string = '';

  constructor(private userService: UserService) { 

    console.log('auction:', this.auction);
  }

  ngOnInit(): void {
    this.findUserById(this.auction.userId);
    console.log('userName:', this.userName);
  }

  findUserById(id: number): void {
    this.userService.findById(id).subscribe(user => {
      this.userName = user.userName || '';
    });
  }
}
