import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  topics: any = {};
  objectKeys = Object.keys;

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
  }

  async searchTopics(search: NgControl) {
    this.topics = false;
    let result: { [key: string]: Topic } = {};
    const oldTopics = await this.topicService.getAllTopics();
    const topicsKeys = Object.keys(oldTopics);

    topicsKeys.forEach(key => {
      if (oldTopics[key].title.toLowerCase().includes(search.value.toLowerCase())) {
        result[key] = oldTopics[key];
      }
    });

    if (Object.keys(result).length == 0) {
      this.topics = 'no topics';
    } else {
      this.topics = result;
    }
  }
}
