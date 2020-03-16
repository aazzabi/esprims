import {Component, OnInit} from "@angular/core";
import {CommentService} from "src/app/services/CommentService";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {UserServices} from "src/app/services/UserServices";

@Component({
  selector: "app-single-topic",
  templateUrl: "./single-topic.component.html",
  styleUrls: ["./single-topic.component.scss"]
})
export class SingleTopicComponent implements OnInit {
  model: any = {};
  public data: any = [];
  errorMessage: string;
  num_topic;
  user_connected_id = localStorage.getItem("id");

  constructor(
    private commentService: CommentService,
    private userService: UserServices,
    private router: Router,
    private route: ActivatedRoute
  ) {

    console.log("ID USER", localStorage["id"]);

    console.log("this.user_connected_id ", this.user_connected_id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let num = parseInt(params.get("num_topic"));
      this.num_topic = num;
    });
    console.log("ths user is ", localStorage["name"]);
    console.log("all comments", this.getComments());
    this.user_connected_id = localStorage["id"];
  }

  ngOnDestroy() {
  }

  getComments() {
    this.commentService.getCommentsPerTopic().subscribe(
      (response: any) => {
        this.data = response;
      },
      response => console.log(response.statusText)
    );
  }

  addComment(comment) {
    let MyData = {
      user: {
        id: localStorage["id"],
        name: localStorage["name"],
        avatar: localStorage["avatar"]
      },
      topic: this.num_topic,
      text: comment
    };
    this.commentService.addComment(MyData).subscribe(data => {
      console.log(data);
      this.getComments();
    });
  }

  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(data => {
      console.log(data);
      this.getComments();
    });
  }
}
