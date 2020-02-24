import { Component } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { Policy } from 'src/app/models/policy.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent{
  
  constructor(private policyService: PolicyService) { }

  poli: Policy={
    id: "",
    policyNumber: "TestPoli",
    paymentOption: "TestPay",
    policyAmount: 113,
    extraInfo: "TestInfo"
  };
  
  number = new FormControl('');
  payment = new FormControl('');
  amount = new FormControl('');
  info = new FormControl('');

  logData(){
    console.log(this.number.value);
    console.log(this.payment.value);
    console.log(this.amount.value);
    console.log(this.info.value);
  }

  create(){
    this.poli.policyNumber = this.number.value;
    this.poli.policyAmount = this.amount.value;
    this.poli.paymentOption = this.payment.value;
    this.poli.extraInfo = this.info.value;
    this.policyService.createPolicy(this.poli);
    this.number.setValue("");
    this.amount.setValue("");
    this.payment.setValue("");
    this.info.setValue("");
  }

}
