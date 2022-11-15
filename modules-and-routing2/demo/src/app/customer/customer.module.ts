import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerListItemComponent,
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
