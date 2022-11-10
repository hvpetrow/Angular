import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'test',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'test/one'
      },
      {
        path: 'one',
        component: OneComponent
      }, {
        path: 'two',
        component: TwoComponent
      }
    ]
  }
]

export const TestRoutingModule = RouterModule.forChild(routes);