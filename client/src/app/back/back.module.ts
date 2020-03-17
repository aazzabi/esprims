import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRouting } from './back.routing';
import { BackComponent } from './back.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import { AddEventComponent } from './dashboard/Events/add-event/add-event.component';
import {FormsModule} from '@angular/forms';
import { ImageUploadModule } from '../SharedComponent/image-upload/image-upload.module';
import { AllEventsComponent } from './dashboard/Events/all-events/all-events.component';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateEventComponent } from './dashboard/Events/update-event/update-event.component';
import {AllTopicsComponent} from './dashboard/Topics/all.topics.component';
import {TopicService} from '../services/TopicService';

@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    FormsModule,
    ImageUploadModule,
    BrowserModule,

  ],
  declarations: [
    BackComponent,
    DashboardComponent,
    AddEventComponent,
    AllEventsComponent,
    UpdateEventComponent,
    AllTopicsComponent,
  ],
  providers: [AuthGuard, TopicService]
})
export class BackModule { }
