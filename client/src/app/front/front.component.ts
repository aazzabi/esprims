import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserServices} from '../services/UserServices';
import {StorageService} from '../services/security/storage.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent {
  title = 'argon-dashboard-angular';
  bool;

  logged;
  private userLogged: any;

  constructor(private router: Router, private userService: UserServices) {
    this.userLogged = StorageService.get('currentUser');
    console.log(this.userService.decodeToken());
    this.showDropdown();
  }


  logout() {
    this.router.navigate(['/login']);
    StorageService.clear('currentUser');
  }

  showDropdown() {
    if (this.bool === false) {
      this.bool = true;
    } else {
      this.bool = false;
    }
  }


  OnInit() {
    this.showDropdown();
  }
}
