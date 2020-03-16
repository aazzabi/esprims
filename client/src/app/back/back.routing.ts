import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard} from '../services/security/auth.guard';
import { AddEventComponent } from './dashboard/Events/add-event/add-event.component';
import { AllEventsComponent } from './dashboard/Events/all-events/all-events.component';
import { UpdateEventComponent } from './dashboard/Events/update-event/update-event.component';

const routes: Routes = [
  {
    path: '',
    component: BackComponent,
    children: [
      {path: 'dash', component: DashboardComponent},
      {path: 'addevent', component: AddEventComponent},
      {path: 'allevents', component: AllEventsComponent},
      {path: 'updateEvent/:id', component: UpdateEventComponent},
      // {path: 'claim', loadChildren: './claim/claim.back.module#ClaimBackModule'},
    ]
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
