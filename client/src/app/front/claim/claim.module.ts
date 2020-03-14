import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimRouting } from './claim.routing'
import { ClaimCheckComponent } from './check/claim.check.component'
import { ClaimService } from 'src/app/services/managers/claim.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ClaimRouting,
    ReactiveFormsModule
  ],
  declarations: [ClaimCheckComponent],
  providers: [ClaimService]
})
export class ClaimModule { }
