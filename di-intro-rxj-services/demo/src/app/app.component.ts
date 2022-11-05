import { Component } from '@angular/core';
import { map, of } from 'rxjs';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

[1000, 200, 300].map(x => x + 100).map(console.log);

Promise.resolve(1000).then(x => x + 1).then(console.log);

of(1000, 200, 300).pipe(
  map(x => x + 100)
).subscribe((x) => {
  console.log(x);
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public userService: UserService) { }
}
