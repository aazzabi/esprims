import { HomeComponent } from "./home/home.component";
import { FrontComponent } from "./front.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForumTopicsComponent } from "./forum/forum-topics/forum-topics.component";
import { SingleTopicComponent } from "./forum/single-topic/single-topic.component";
import { GetTopicResolvers } from "../services/resolvers/get.topic.resolvers";
import { GetCommentsResolvers } from "../services/resolvers/get.comments.resolver";
import { AddTopicComponent } from "./forum/addTopic/add-topic.component";
import { AllTopicsResolver } from "../services/resolvers/all.topics.resolver";
import { AllEventsResolver } from "../services/resolvers/all.events.resolver";
import { SingleEventComponent } from "./event/single-event/single-event.component";
import { GetEventResolver } from "../services/resolvers/get.event.resolver";
import { EventsComponent } from "./event/events/events.component";
import { EventServices } from "../services/EventServices";

const routes: Routes = [
  {
    path: "",
    component: FrontComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "",
        loadChildren:
          "../layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      },
      { path: "claim", loadChildren: "./claim/claim.module#ClaimModule" },
      {
        path: "topics",
        component: ForumTopicsComponent,
        resolve: { topics: AllTopicsResolver }
      },
      {
        path: "topics/add",
        component: AddTopicComponent,
        resolve: { topics: AllTopicsResolver }
      },
      {
        path: "topics/:id",
        component: SingleTopicComponent,
        resolve: {
          topicSelected: GetTopicResolvers,
          comments: GetCommentsResolvers
        }
      },
      {
        path: "events/:id",
        component: SingleEventComponent,
        resolve: {
          eventSelected: GetEventResolver
        }
      },
      {
        path: "events",
        component: EventsComponent,
        resolve: { events: AllEventsResolver }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {}
