import {Component} from '@angular/core';
import {User} from '../models/User';
import {UsersService} from '../services/managers/users.service';
import {Router} from '@angular/router';
import {StorageService} from '../services/security/storage.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent  {
  title = 'argon-dashboard-angular';
  bool = false;
  logged: User;

  constructor(private UserService: UsersService, private router: Router) {
  }

  userLogged = StorageService.get('currentUser');

  logout() {
    this.router.navigate(['/login']);
    StorageService.clear('currentUser');
  }

  showDropdown() {
    if (this.bool === false) {
      this.bool = true;
      console.log(this.bool);
    } else {
      this.bool = false;
    }
  }

  OnInit() {
    this.UserService.GetLoggedUser(StorageService.get('currentUser').userId)
      .subscribe(
        response => {
          console.log(response);
          // tslint:disable-next-line:no-unused-expression
          this.logged = response;
        },
        error => {
          console.log(error);
        }
      );

  }
}
