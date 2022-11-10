import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'user-detail/:id',
        component: UserDetailComponent
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);