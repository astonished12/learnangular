import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndog@cat.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Jhonson',
        email: 'kevin@the.carrot',
        isActive: false,
        registered: new Date('11/02/2019 08:30:00'),
        hide: true
      },

      {
        firstName: 'Dorel',
        lastName: 'Jianu',
        email: 'dorel@planteaza.com',
        isActive: true,
        registered: new Date('01/02/2018 08:31:00'),
        hide: true

      },
    ]
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      
      setTimeout(() => {
        observer.next({name:"BRAD"});
      }, 4000);
      
    })

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }


}
