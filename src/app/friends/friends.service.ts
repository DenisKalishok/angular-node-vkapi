import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IFriends } from '../interface/friends';


@Injectable()
export class FriendsService {

  private friendsUrl = "http://localhost:3000/friends";

  constructor( private http: Http ) { }

  getFriendsList(): Observable <IFriends> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.get( this.friendsUrl, headers )
      .map( (res: Response) => res.json() )
      .catch(( error: any ) => Observable.throw( error.json().error || 'Server error' ));
  }

  deleteFriend( id: number ) {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.delete( this.friendsUrl + '/' + id, headers )
    .map( (res: Response) => res.json() )
    .catch(( error: any) => Observable.throw( error.json().error || 'Server error' ));
  }

}
