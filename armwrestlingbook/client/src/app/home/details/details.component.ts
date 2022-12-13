import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

import { Topic } from 'src/app/interfaces/topic';
import { AuthService } from 'src/app/services/auth.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  topicRef = collection(this.firestore, 'topics');
  topicId!: string;
  topic!: any;
  user$ = this.authService.currentUser$;
  userId!: any;
  isParticipant!: Boolean;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, public firestore: Firestore, private topicService: TopicService, private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.userId = user?.uid
    });
    console.log('userId:', this.userId);


    this.activatedRoute.params.subscribe(params => {
      this.topicId = params['topicId'];
      console.log(this.topicId);

      this.topicService
        .getOneTopic(this.topicId)
        .then((data) => {
          this.topic = data.data();
          console.log(this.topic);
        });
    }
    );

    setTimeout(() => {
      console.log(this.topic);
      console.log(this.userId);


      this.isParticipant = this.topic?.likes?.find((like: string | undefined) => like === this.userId);
      console.log('isParticpant:', this.isParticipant);
      console.log('likes:', this.topic?.likes);
    }, 400);
  }



  async likeHandler() {
    const currentTopicRef = doc(this.firestore, "topics", this.topicId);

    try {
      await updateDoc(currentTopicRef, {
        likes: arrayUnion(this.userId)
      });

      this.toast.success('Topic liked!');
    } catch (error) {
      console.log(error);
    }

    this.isParticipant = true;
    console.log('userId:', this.userId);
    console.log('likes:', this.topic.likes);

  }

  async cancelLikeHandler() {
    const currentCauseRef = doc(this.firestore, "topics", this.topicId);

    try {
      await updateDoc(currentCauseRef, {
        participants: arrayRemove(this.userId)
      });
      this.toast.success('You have unliked the topic!');
    } catch (error) {
      console.log(error);
    }

    this.isParticipant = false;

    console.log('likes:', this.topic.likes);

  }

  async deleteHandler() {
    const answer = confirm('Are you sure you want to delete it?')

    if (answer) {
      try {
        await this.topicService.deleteTopic(this.topicId);
      } catch (error) {
        this.toast.error('Something went wrong!')
      }

      this.toast.success('Topic deleted successfully');
      this.router.navigate(['/']);
    }
  }
}
