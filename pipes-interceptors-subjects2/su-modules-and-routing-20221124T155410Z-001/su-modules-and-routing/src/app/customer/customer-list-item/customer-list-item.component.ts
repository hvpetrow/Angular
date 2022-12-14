import { Target } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.css']
})
export class CustomerListItemComponent implements OnInit {

  date = new Date();
  limit = 15;
  isHidden = false;

  @Input() item!: IUser;
  customers$!: Observable<IUser[]>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers$ = this.customerService.getUsers$();
  }

  onExpand(e: any): void {
    this.limit = Infinity;
    this.isHidden = true;
  }

}
