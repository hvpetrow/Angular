import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-profile-posts',
  templateUrl: './customer-profile-posts.component.html',
  styleUrls: ['./customer-profile-posts.component.css']
})
export class CustomerProfilePostsComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

}
