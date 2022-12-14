import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TopicCardComponent } from '../topic-card/topic-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from '../details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    TopicCardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
