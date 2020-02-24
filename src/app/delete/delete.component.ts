import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent{

  constructor(private policyService: PolicyService) { }

  id = new FormControl('');

  delete() {
    this.policyService.deletePolicy(this.id.value);
    this.id.setValue('');
  }

}
