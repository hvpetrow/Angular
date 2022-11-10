import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser | undefined;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUser(this.activatedRoute.snapshot.params.id).subscribe(user => {

    });
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.userService.loadUser(+id).subscribe;
    // });
  }

}
