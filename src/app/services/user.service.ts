import { Injectable } from '@angular/core';
import { User } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUser(): User {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      userName: 'jdoe',
      email: 'johndoe@example.es',
      role: 1,
      money: 1000,
      imageUrl: 'https://avatars.githubusercontent.com/u/47410301?v=4'
    }
  }
}
