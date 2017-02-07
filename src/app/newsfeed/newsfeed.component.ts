import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from "./newsfeed.service";

import{ INewsfeed } from '../interface/newsfeed';

@Component({
  moduleId: module.id,
  selector: 'newsfeed-list',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers: [NewsfeedService]
})
export class NewsfeedComponent implements OnInit {

  private newsfeed: INewsfeed;

  constructor(private newsfeedService: NewsfeedService) { }

  getNewsFeed(){
    this.newsfeedService.getNewsFeed()
      .subscribe(
        data => { this.newsfeed=data; console.log(data); }
      );
  }

  ngOnInit() {
    this.getNewsFeed();
  }

}
