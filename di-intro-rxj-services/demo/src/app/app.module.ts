import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    //   {
    //   provide: UserService,
    //   useClass: UserService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
