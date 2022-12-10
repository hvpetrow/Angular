import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TopicCardComponent } from '../topic-card/topic-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    TopicCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
