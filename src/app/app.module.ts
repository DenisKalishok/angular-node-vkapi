import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
