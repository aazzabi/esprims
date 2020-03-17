import {Component} from '@angular/core';
import {UserServices} from '../services/UserServices';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {
  title = 'back';

  constructor(
    private userService: UserServices,
    private router: Router,
  ) {
    console.log(this.userService.decodeToken().user.role);
  }
}
