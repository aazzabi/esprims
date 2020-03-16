import {Component, OnInit} from '@angular/core';
import {CommentService} from 'src/app/services/CommentService';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserServices} from 'src/app/services/UserServices';
import {Topic} from '../../../models/Topic';
import {Comment} from '../../../models/Comment';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})
export class SingleTopicComponent implements OnInit {
  topic: Topic;
  comments: Comment[];
  model: any = {};
  public data: any = [];
  errorMessage: string;
  num_topic;
  user_connected_id = localStorage.getItem('id');

  constructor(
    private commentService: CommentService,
    private userService: UserServices,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.topic = this.route.snapshot.data['topicSelected'];
    this.comments = this.route.snapshot.data['comments'];
    console.log(this.topic);
    console.log(this.comments.length);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const num = parseInt(params.get('num_topic'));
      this.num_topic = num;
    });
    console.log('ths user is ', localStorage['name']);
    this.user_connected_id = localStorage['id'];
  }

  // getComments() {
  //   this.commentService.getCommentsPerTopic().subscribe(
  //     (response: any) => {
  //       this.data = response;
  //     },
  //     response => console.log(response.statusText)
  //   );
  // }

  addComment(comment) {
    const MyData = {
      user: {
        id: localStorage['id'],
        name: localStorage['name'],
        avatar: localStorage['avatar']
      },
      topic: this.num_topic,
      text: comment
    };
    this.commentService.addComment(MyData).subscribe(data => {
      console.log(data);
      // this.getComments();
    });
  }

  //
  // deleteComment(id) {
  //   this.commentService.deleteComment(id).subscribe(data => {
  //     console.log(data);
  //     this.getComments();
  //   });
  // }
}
