import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';
import { RouterModule } from '@angular/router';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfilePostsComponent } from './customer-profile-posts/customer-profile-posts.component';
import { CustomerProfileAlbumsComponent } from './customer-profile-albums/customer-profile-albums.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerListItemComponent,
    CustomerProfileComponent,
    CustomerProfilePostsComponent,
    CustomerProfileAlbumsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CustomerListComponent
  ]
})
export class CustomerModule { }
