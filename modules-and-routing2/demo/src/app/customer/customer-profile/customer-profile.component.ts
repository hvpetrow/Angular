import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customer!: IUser;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    //subscribe for params changes in URL 
    this.activatedRoute.params.subscribe(params => {
      const id = this.activatedRoute.snapshot.params['id'];

      this.customerService.getUserById$(id).subscribe({
        next: user => {
          this.customer = user;
        },
        error: error => {
          console.error('error happened', error);
        }
      })
    })

    // this.customerService.getUserById$(id).subscribe(user => {
    //   console.log(user);

    //   this.customer = user;
    // })

  }
}
