import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddEventComponent} from './dashboard/Events/add-event/add-event.component';
import {AllEventsComponent} from './dashboard/Events/all-events/all-events.component';
import {UpdateEventComponent} from './dashboard/Events/update-event/update-event.component';
import {AllTopicsComponent} from './dashboard/Topics/all.topics.component';
import {RoleAdminGuard} from '../services/security/role.guard';

const routes: Routes = [
  {
    path: 'dash',
    component: BackComponent,
    canActivateChild: [RoleAdminGuard],
    children: [
      {path: '', component: DashboardComponent},
      {path: 'addevent', component: AddEventComponent},
      {path: 'allevents', component: AllEventsComponent},
      {path: 'topics', component: AllTopicsComponent},
      {path: 'updateEvent/:id', component: UpdateEventComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
