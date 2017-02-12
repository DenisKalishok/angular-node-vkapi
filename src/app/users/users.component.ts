import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { IUser } from '../interface/user';

@Component({
  moduleId: module.id,
  selector: 'user-info',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {

  private users: IUser[];

  constructor( private usersService: UsersService ) { }

  getUserInfo(id: number) {
    this.usersService.getUserInfo(id)
      .subscribe(
        data => { this.users = data; console.log( data ); }
      );
  }

  ngOnInit() {
    this.getUserInfo(412974046);
  }

}
