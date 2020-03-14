import {HomeComponent} from './home/home.component';
import {FrontComponent} from './front.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: '', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
      {path: 'claim', loadChildren: './claim/claim.module#ClaimModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {
}
