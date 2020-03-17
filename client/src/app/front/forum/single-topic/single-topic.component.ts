import {Component, OnInit} from '@angular/core';
import {CommentService} from 'src/app/services/CommentService';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServices} from 'src/app/services/UserServices';
import {Topic} from '../../../models/Topic';
import {Comment} from '../../../models/Comment';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../services/security/login.service";
import {StorageService} from "../../../services/security/storage.service";
import {TopicService} from "../../../services/TopicService";
import {AlertService} from "../../../services/managers/AlerteService";

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
  num_topic;
  comment;
  user_connected_id = localStorage.getItem('id');

  addCommentFrom = new FormGroup({
    post: new FormControl('', [Validators.required]),
  });


  constructor(
    private commentService: CommentService,
    private userService: UserServices,
    private topicService: TopicService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.topic = this.route.snapshot.data['topicSelected'];
    this.comments = this.route.snapshot.data['comments'];
    console.log("single topic", this.topic);
  }

  ngOnInit() {
    this.topic = this.route.snapshot.data['topicSelected'];
    this.comments = this.route.snapshot.data['comments'];
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   // tslint:disable-next-line:radix
    //   const num = parseInt(params.get('num_topic'));
    //   this.num_topic = num;
    // });
    // this.user_connected_id = localStorage['id'];
  }

  // getComments() {
  //   this.commentService.getCommentsPerTopic().subscribe(
  //     (response: any) => {
  //       this.data = response;
  //     },
  //     response => console.log(response.statusText)
  //   );
  // }

  addComment() {
    if (LoginService.isLogged()) {
      const currentUser = StorageService.get('currentUser');
      console.log(StorageService.get('currentUser'));
      console.log(this.topic[0]['_id']);
      console.log(this.userService.decodeToken().user.id);
      // tslint:disable-next-line:max-line-length
      this.topicService.addCommentToTopic(this.topic[0]['_id'], this.userService.getIdUserByToken(), this.addCommentFrom.value.post)
        .subscribe(
          response => {
            console.log('here 73');
            this.router.navigate(['/topics/:id', this.topic[0]['_id']]);
          },
          error => {
            console.log('here 76');
            console.log(error);
          }
        );
    } else {
      console.log('here 97777777777777');
      // , content: [this.addCommentFrom.value.post]
      this.router.navigate(['/login'], {queryParams: {returnUrl: ['/topics/add']}});
      this.alertService.error('Vous devez se connecter d\'abord');
    }
  }


  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(data => {
      console.log(data);
      // this.getComments();
    });
  }
}
