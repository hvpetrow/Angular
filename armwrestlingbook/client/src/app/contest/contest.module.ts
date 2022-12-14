import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContestComponent } from './create-contest/create-contest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    CreateContestComponent,
    EditTopicComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContestModule { }
