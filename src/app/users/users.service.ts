import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser } from '../interface/user';

@Injectable()
export class UsersService {

  private usersUrl = "http://localhost:3000/users";

  constructor( private http: Http ) { }

  getUserInfo(id: number): Observable <IUser[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post( this.usersUrl + '/' + id, headers )
      .map( (res: Response) => res.json())
      .catch(( error: any ) => Observable.throw( error.json().error || 'Server error' ));
  }

}
