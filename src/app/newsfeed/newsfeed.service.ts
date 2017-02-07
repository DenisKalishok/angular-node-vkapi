import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import{ INewsfeed } from './newsfeed';

import { Observable } from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsfeedService {

  private newsFeedUrl = "http://localhost:3000/newsfeed";

  constructor(private http: Http) { }

  getNewsFeed(): Observable <INewsfeed>  {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.get(this.newsFeedUrl, headers)
      .map( (res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
