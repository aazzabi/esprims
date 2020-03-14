import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRouting } from './front.routing';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  imports: [
    FrontRouting,
    ClaimModule,
    CarouselModule
  ],
  declarations: [ FrontComponent, HomeComponent ],
})
export class FrontModule { }
