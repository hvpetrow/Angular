import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContestComponent } from './create-contest/create-contest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTopicComponent } from './edit-topic/edit-topic.component';



@NgModule({
  declarations: [
    CreateContestComponent,
    EditTopicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContestModule { }
