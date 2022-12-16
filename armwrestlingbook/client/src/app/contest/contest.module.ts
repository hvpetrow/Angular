import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContestComponent } from './create-contest/create-contest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContestRoutingModule } from './contest-routing.module';
import { AllTopicsComponent } from './all-topics/all-topics.component';
import { HomeModule } from '../home/home/home.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CreateContestComponent,
    DetailsComponent,
    EditTopicComponent,
    CommentsComponent,
    AllTopicsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ContestRoutingModule,
    HomeModule
  ]
})
export class ContestModule { }
