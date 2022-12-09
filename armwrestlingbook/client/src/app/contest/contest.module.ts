import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContestComponent } from './create-contest/create-contest.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateContestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContestModule { }
