import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {LoginService} from '../../services/security/login.service';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  model: any = {};
  public data: any = [];

  errorMessage: string;
  // , @Inject(LOCAL_STORAGE) private storage: WebStorageService
  constructor(private loginService: LoginService, private router: Router) {
  }
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  Login() {
    this.loginService.login(this.model.email, this.model.password)
      .subscribe(
        (response: any) => {
                console.log(response);
                this.router.navigate(['dash']);
            } ,
      error => console.log(error)
    );
  }
}
