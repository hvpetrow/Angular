import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { AboutComponent } from './pages/about/about.component';
import { DefaultViewComponent } from './pages/default-view/default-view.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DefaultViewComponent
  },
  {
    path: '123',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user/:id',
    component: CustomerProfileComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
