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
  
  logged;

  constructor( private router: Router) {
    console.log("front")
    console.log(localStorage.getItem("id"))
    this.showDropdown()
  }

  

  logout() {
    this.router.navigate(['/login']);
          localStorage["name"] = null
          localStorage["avatar"] = null
          localStorage["role"] = null
          localStorage["token"] = null
    this.logged=false
  }

  showDropdown() {
    if (localStorage['token']!= null)
    {
      this.logged= true 
    }
    else this.logged=false ; 
  }

  OnInit() {
    this.showDropdown()
  

  }
}
