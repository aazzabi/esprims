import { Component, OnInit } from "@angular/core";
import { TopicService } from "src/app/services/TopicService";
import { UserServices } from "src/app/services/UserServices";
import { AlertService } from "src/app/services/managers/AlerteService";
import { Router, ActivatedRoute } from "@angular/router";
import { Topic } from "src/app/models/Topic";

@Component({
  selector: "app-forum-topics",
  templateUrl: "./forum-topics.component.html",
  styleUrls: ["./forum-topics.component.scss"]
})
export class ForumTopicsComponent implements OnInit {
  topics: Topic[];

  constructor(
    private route: ActivatedRoute
  ) {
    this.topics = this.route.snapshot.data["topics"];
    console.log(this.topics);
  }

  ngOnInit() {
    this.topics = this.route.snapshot.data["topics"];
    console.log(this.topics);
  }
}
