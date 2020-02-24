import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { Policy } from 'src/app/models/policy.model';

@Component({
  selector: 'policy-list',
  templateUrl: './policy-list.component.html'
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];

  constructor(private policyService: PolicyService) { }

  poli: Policy={
    id: "TestID",
    policyNumber: "TestPoli",
    paymentOption: "TestPay",
    policyAmount: 113,
    extraInfo: "TestInfo"
  };

  ngOnInit() {
    // this.policyService.createPolicy(this.poli);
     this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          policyNumber: e.payload.doc.data()['policyNumber'],
          paymentOption: e.payload.doc.data()['paymentOption'],
          policyAmount: e.payload.doc.data()['policyAmount'],
          extraInfo: e.payload.doc.data()['extraInfo']
        } as Policy;
      })
    }); 
    
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string){
    this.policyService.deletePolicy(id);
  }

}