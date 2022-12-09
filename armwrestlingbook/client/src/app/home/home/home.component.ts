import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contest } from 'src/app/interfaces/contest';
import { AuthService } from 'src/app/services/auth.service';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;
  userId!: any;

  constructor(public authService: AuthService, private contestService: ContestService, private router: Router) { }
  newContest: Contest = {
    creator: '',
    createdAt: '',
    title: 'ArmFight5',
    date: '18.12.2022',
    place: '',
    photoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu976YbNvm7xB2qtLsf-MDzp7mZ0GbifNywgnlLt=s900-c-k-c0x00ffffff-no-rj',
    participants: [],
    description: "form of wrestling in which two opponents sit face to face gripping usually their right hands, set corresponding elbows firmly on a surface (such as a tabletop), and attempt to force each other's arm down. called also Indian wrestling."
  }

  ngOnInit(): void {
    console.log('user');
    this.user$.subscribe((user) => {
      this.userId = user?.uid
    });

    this.contestService.getAllContests().subscribe(contests => {
      console.log('log from getAllContests');
      console.log(contests);
    });
  }

  async onCreate() {
    const res = await this.contestService.addContest(this.newContest);
    console.log('log from createContest');
    console.log(res);

  }



}
