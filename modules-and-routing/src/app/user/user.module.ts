import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../shared/share.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    UserRoutingModule
  ],
  exports: [
    UserListComponent,
    UserListItemComponent
  ]
})
export class UserModule { }
