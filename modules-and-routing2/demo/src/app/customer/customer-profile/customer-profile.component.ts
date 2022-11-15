import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customer!: IUser;
  id!: number;
  isLoading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private titleService: Title) { }

  ngOnInit(): void {
    //subscribe for params changes in URL
    this.activatedRoute.params.pipe(
      tap(params => {
        this.id = +params['id'];

        this.titleService.setTitle('Profile ' + this.id);
        this.isLoading = true;
      }),
      mergeMap(params => {
        return this.customerService.getUserById$(params['id'])
      })
    )
      .subscribe({
        next: user => {
          this.customer = user;
          this.isLoading = false;
        },
        error: error => {
          this.isLoading = false;
          console.error('error happened', error);
        }
      }
      )

    // this.activatedRoute.params.subscribe(params => {
    //   const id = params['id'];

    //   this.customerService.getUserById$(id).subscribe({
    //     next: user => {
    //       this.customer = user;
    //     },
    //     error: error => {
    //       console.error('error happened', error);
    //     }
    //   })
    // })

    // this.customerService.getUserById$(id).subscribe(user => {
    //   console.log(user);

    //   this.customer = user;
    // })

  }
}
