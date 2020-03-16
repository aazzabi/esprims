import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-topics',
  templateUrl: './forum-topics.component.html',
  styleUrls: ['./forum-topics.component.scss']
})
export class ForumTopicsComponent implements OnInit {

  constructor() {
    console.log("ROLE", localStorage["role"]);
     }

  ngOnInit() {
  }

}
