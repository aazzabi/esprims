import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRouting } from './front.routing';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {BrowserModule} from '@angular/platform-browser';
import { ForumTopicsComponent } from './forum/forum-topics/forum-topics.component';
import { SingleTopicComponent } from './forum/single-topic/single-topic.component';
import {GetTopicResolvers} from '../services/resolvers/get.topic.resolvers';
import {GetCommentsResolvers} from '../services/resolvers/get.comments.resolver';
import {UserServices} from '../services/UserServices';
import {AddTopicComponent} from './forum/addTopic/add-topic.component';
import {AlertComponent} from './alerteJumbotron/alert.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FrontRouting,
    ClaimModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FrontComponent,
    AlertComponent,
    HomeComponent,
    AddTopicComponent,
    ForumTopicsComponent,
    SingleTopicComponent ],
  providers: [
    GetTopicResolvers,
    GetCommentsResolvers,
    UserServices
  ]
})
export class FrontModule { }
