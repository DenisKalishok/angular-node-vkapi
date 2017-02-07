import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';
import {IFriends} from "./friends";

@Component({
  moduleId: module.id,
  selector: 'friends-list',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [FriendsService]
})
export class FriendsComponent implements OnInit {

  friends: IFriends;

  constructor(private friendsService: FriendsService) { }

  getFriendsList(){
    this.friendsService.getFriendsList()
      .subscribe(
        data => { this.friends = data; console.log(data); }
      );
  }

  deleteFriend(id: number){
    this.friendsService.deleteFriend(id)
      .subscribe(
        data => {console.log(data)}
      );
  }

  ngOnInit() {
    this.getFriendsList();
  }
}
