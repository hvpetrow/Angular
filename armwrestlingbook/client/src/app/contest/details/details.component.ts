import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { arrayRemove, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

import { Topic } from 'src/app/interfaces/topic';
import { AuthService } from 'src/app/services/auth.service';
import { TopicService } from 'src/app/services/topic.service';
import { NgControl } from '@angular/forms';

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
  currentUserEmail!: any;
  hasLiked!: Boolean;
  isOwner!: boolean;
  creatorEmail!: string;
  comments!: any;
  objectKeys = Object.keys;
  commentsArr = [];
  commentCount: any;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, public firestore: Firestore, private topicService: TopicService, private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.userId = user?.uid;
      this.currentUserEmail = user?.email;
    });
    console.log('userId:', this.userId);


    this.activatedRoute.params.subscribe(params => {
      this.topicId = params['topicId'];

      this.topicService
        .getOneTopic(this.topicId)
        .then((data) => {
          this.topic = data.data();
          this.isOwner = this.topic.creator == this.userId;
          this.creatorEmail = this.topic.creatorEmail;
          console.log(this.topic);
        });
    });

    this.getComments();

    setTimeout(() => {
      console.log(this.topic);
      console.log(this.userId);


      this.hasLiked = this.topic?.likes?.find((like: string | undefined) => like === this.userId);
      console.log('isParticpant:', this.hasLiked);
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

    this.hasLiked = true;
    console.log('userId:', this.userId);
    console.log('likes:', this.topic.likes);

  }

  async cancelLikeHandler() {
    const currentCauseRef = doc(this.firestore, "topics", this.topicId);

    try {
      await updateDoc(currentCauseRef, {
        likes: arrayRemove(this.userId)
      });
      this.toast.success('You have unliked the topic!');
    } catch (error) {
      console.log(error);
    }

    this.hasLiked = false;

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

  postComment(comment: NgControl) {
    const newComment = {
      content: comment.value,
      createdAt: serverTimestamp(),
      ownerId: this.userId,
      ownerEmail: this.currentUserEmail,
      topicId: this.topicId
    }

    try {
      const response = this.topicService.addComment(newComment);
      comment.reset();
      console.log(response);
      setTimeout(() => {
        this.getComments();
      }, 300);
    } catch (error) {
      console.error(error);
    }
  }

  async getComments() {
    setTimeout(async () => {
      this.comments = await this.topicService.getCommentsByTopicId(this.topicId);
      console.log(this.comments);
    }, 10);


    console.log(this.commentsArr);

  }
}
