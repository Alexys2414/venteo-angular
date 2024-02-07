import { Timestamp } from "rxjs";

// Tipos de la aplicación
export interface Link {
  path: string;
  text: string;
}

// Tipos del servidor
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password?: string;
  bornDate?: Date;
  imageUrl?: string;
  createdAt?: Date;
  role: number;
  money?: number;
}

export interface Notification {
  notificationId: number;
  categoryId: number;
  subject: string;
  message: string;
  sendOn: Date;
}

export interface Auction{
  auctionId: number;
  auctionName: string;
  auctionDescription: string;
  categoryId: number;
  userId: number;
  startsAt: Date;
  endsAt: Date;
  initialPrice: number;
  imageUrl: string;
}