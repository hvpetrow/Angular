import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/interfaces/topic';
import { AuthService } from 'src/app/services/auth.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;
  userId!: any;
  topics: Topic[] = [];

  constructor(public authService: AuthService, private topicService: TopicService, private router: Router) { }
  newTopic: Topic = {
    creator: '',
    id: '',
    title: 'ArmFight5',
    photoUrl: 'https://yt3.ggpht.com/ytc/AMLnZu976YbNvm7xB2qtLsf-MDzp7mZ0GbifNywgnlLt=s900-c-k-c0x00ffffff-no-rj',
    comments: [],
    likes: [],
    createdAt: '',
    description: "form of wrestling in which two opponents sit face to face gripping usually their right hands, set corresponding elbows firmly on a surface (such as a tabletop), and attempt to force each other's arm down. called also Indian wrestling."
  }

  ngOnInit(): void {
    console.log('user');
    this.user$.subscribe((user) => {
      this.userId = user?.uid
    });

    this.topicService.getAllTopics().subscribe(topics => {
      this.topics = topics;
      console.log(this.topics);
    });
  }

  // async onCreate() {
  //   const res = await this.TopicService.addTopic(this.newTopic);
  //   console.log('log from createTopic');
  //   console.log(res);

  // }
}
