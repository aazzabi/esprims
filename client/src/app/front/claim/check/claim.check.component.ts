import {Component} from '@angular/core';
import { ClaimService } from 'src/app/services/managers/claim.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-claim-check',
  templateUrl: './claim.check.html',
  styleUrls: ['./claim.check.scss']
})
export class ClaimCheckComponent {

  title = 'Consul Claim';
  status;
  claim;
  constructor(private claimService: ClaimService, private router: Router) {
  }


  getStatusFrom = new FormGroup({
    claimCode: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    
  }
    /*this.claimService.getFaqById(1)
      .subscribe(
        response => {
          console.log('hello faq');

          console.log(response);
          } ,
        error =>{
          console.log('hello error');
          console.log(error);
        } 
    );*/
  

  getClaimStatus() {
        this.claimService.getStatudClaimByCode(this.getStatusFrom.value.claimCode)
      .subscribe( response => {
          this.status = response['claimStatus'];
          console.log(this.status.claimStatus)
        } ,
        error =>{
          console.log(error);
        } 
    );
  }
}
