import {HomeComponent} from './home/home.component';
import {FrontComponent} from './front.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ForumTopicsComponent } from './forum/forum-topics/forum-topics.component';
import { SingleTopicComponent } from './forum/single-topic/single-topic.component';
import {GetTopicResolvers} from '../services/resolvers/get.topic.resolvers';
import {GetCommentsResolvers} from '../services/resolvers/get.comments.resolver';
import {AddTopicComponent} from './forum/addTopic/add-topic.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: '', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
      {path: 'claim', loadChildren: './claim/claim.module#ClaimModule'},
      { path: 'topics', component: ForumTopicsComponent },
      { path: 'topics/add', component: AddTopicComponent},
      { path: 'topics/:id', component: SingleTopicComponent, resolve: { topicSelected: GetTopicResolvers, comments: GetCommentsResolvers }},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {
}
