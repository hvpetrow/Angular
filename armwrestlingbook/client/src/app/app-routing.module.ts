import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateContestComponent } from './contest/create-contest/create-contest.component';
import { EditTopicComponent } from './contest/edit-topic/edit-topic.component';
import { DetailsComponent } from './home/details/details.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-post', component: CreateContestComponent },
  { path: 'details/:topicId', component: DetailsComponent },
  { path: 'edit/:topicId', component: EditTopicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
