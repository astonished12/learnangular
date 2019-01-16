import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: 'Strada varius',
          city: 'Vaslui'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Jhonson',
        age: 34,
        address: {
          street: 'Strada varius asdasdsa',
          city: 'Vaslui 1'
        }
      },

      {
        firstName: 'Dorel',
        lastName: 'Jianu',
        age: 34,
        address: {
          street: 'Langa garla',
          city: 'Vaslui 2'
        }
      },
    ]

    this.loaded = true;
    this.showExtended = true;

    this.addUser({
      firstName: 'Ionutz',
      lastName: 'Doe',
    });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
