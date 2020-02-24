import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PolicyService } from 'src/app/services/policy.service';
import { Policy } from 'src/app/models/policy.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent {

  constructor(private policyService: PolicyService) { }

  poli: Policy={
    id: "",
    policyNumber: "TestPoli",
    paymentOption: "TestPay",
    policyAmount: 113,
    extraInfo: "TestInfo"
  };

  id = new FormControl('');
  number = new FormControl('');
  payment = new FormControl('');
  amount = new FormControl('');
  info = new FormControl('');

  update() {
    this.poli.id = this.id.value;
    this.poli.policyNumber = this.number.value;
    this.poli.policyAmount = this.amount.value;
    this.poli.paymentOption = this.payment.value;
    this.poli.extraInfo = this.info.value;
    this.policyService.updatePolicy(this.poli);
    this.id.setValue("");
    this.number.setValue("");
    this.amount.setValue("");
    this.payment.setValue("");
    this.info.setValue("");
  }

}
