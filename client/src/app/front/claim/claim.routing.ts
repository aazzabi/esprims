import { ClaimCheckComponent } from './check/claim.check.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../services/security/role.guard';

const routes: Routes = [
  { path: 'check', component: ClaimCheckComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */ },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRouting { }
