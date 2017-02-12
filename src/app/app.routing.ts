import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { NewsfeedComponent } from "./newsfeed/newsfeed.component";
import { FriendsComponent } from "./friends/friends.component";


const APP_ROUTES: Routes = [
  { path: '', component: UsersComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'friends', component: FriendsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
