import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',

  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

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

    this.loaded = true;

  }

  /* addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  } */
  /* 
    toggleHide(user: User){
      user.hide = !user.hide;
    } */

  onSubmit(e) {
    console.log("1231232121312");

    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);


  }
}
