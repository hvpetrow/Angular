import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { LoginComponent } from "./login/login.component";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    //     {
    //       path: '',
    //       pathMatch: 'full',
    //       component: AllTopicsComponent
    //   },
    {
        path: 'my-posts',
        canActivate: [AuthenticationGuard],
        component: MyPostsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);