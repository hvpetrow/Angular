import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { serverTimestamp } from 'firebase/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-create-contest',
  templateUrl: './create-contest.component.html',
  styleUrls: ['./create-contest.component.css']
})
export class CreateContestComponent implements OnInit {

  createContestForm!: FormGroup;
  user$ = this.authService.currentUser$;
  userId!: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private topicService: TopicService, private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.userId = user?.uid
    });

    this.createContestForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      photoUrl: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit() {
    console.log(this.createContestForm.value);

    const newContest = {
      ...this.createContestForm.value,
      creator: this.userId,
      comments: [],
      likes: [],
      createdAt: serverTimestamp()
    }

    console.log(newContest);

    try {
      const response = await this.topicService.addTopic(newContest);
      console.log(response);

    } catch (error) {
      this.toast.error('Something went wrong!')
    }

    this.toast.success('Contest added successfully');
    this.router.navigate(['/']);
  }
}
