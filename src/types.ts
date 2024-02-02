
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

export interface BidOverview {
  userName: string;
  imageUrl: string;
  amount: number;
}

export interface Auction {
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