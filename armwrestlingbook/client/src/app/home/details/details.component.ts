import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  topicId!: string;
  topic!: any;

  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicService, private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {
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
    )
  }

  async deleteHandler() {
    try {
      await this.topicService.deleteTopic(this.topicId);
    } catch (error) {
      this.toast.error('Something went wrong!')
    }

    this.toast.success('Contest added successfully');
    this.router.navigate(['/']);
  }
}
