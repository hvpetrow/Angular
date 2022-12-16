import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { AllTopicsComponent } from "./all-topics/all-topics.component";
import { CreateContestComponent } from "./create-contest/create-contest.component";
import { DetailsComponent } from "./details/details.component";
import { EditTopicComponent } from "./edit-topic/edit-topic.component";

const routes: Routes = [
    {
        path: 'all-topics',
        pathMatch: 'full',
        component: AllTopicsComponent
    },
    {
        path: 'new',
        canActivate: [AuthenticationGuard],
        component: CreateContestComponent
    },
    {
        path: ':topicId/edit',
        component: EditTopicComponent
    },
    {
        path: ':topicId/details',
        component: DetailsComponent,
    },
];

export const ContestRoutingModule = RouterModule.forChild(routes);