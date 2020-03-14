import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {StorageService} from './storage.service';

// import {LoginService} from './login.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('userToken') != null) {
      const roles = next.data['roles'] as Array<string>;
      if (roles) {
        // const match = this.userService.roleMatch(roles);
        const user = StorageService.get('currentUser');
        const match = roles.find(ob => ob === user.role);
        if (match != null) {
          return true;
        } else {
          // tslint:disable-next-line: quotemark
          // this.toastr.info("You don't have access to this page");
          this.router.navigate(['/login']);
          // this.router.navigate(['/forbidden']);
          return false;
        }
      } else {
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
