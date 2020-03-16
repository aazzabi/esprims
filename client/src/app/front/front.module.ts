import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRouting } from './front.routing';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {UsersService} from '../services/managers/users.service';
import {BrowserModule} from '@angular/platform-browser';
import { ForumTopicsComponent } from './forum/forum-topics/forum-topics.component';
import { SingleTopicComponent } from './forum/single-topic/single-topic.component';


@NgModule({
  imports: [
    BrowserModule,
    FrontRouting,
    ClaimModule,
  ],
  declarations: [ FrontComponent, HomeComponent, ForumTopicsComponent, SingleTopicComponent ],
  providers:[
    UsersService,
  ]
})
export class FrontModule { }
