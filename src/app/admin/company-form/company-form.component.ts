import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant.service';
import { Tenant } from '../tenant';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  tenant: Tenant;

  constructor(
    private tenantService: TenantService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.tenantService.getSingle().then(tenant => {
      this.tenant = tenant;
    });
  }

  submit(): void {
    this.tenantService.update(this.tenant).then(tenant => {
      // update model in case it was altered
      this.tenant = tenant;

      // toast that the change was successful
      this.toastr.success('Account has been updated');
    });
  }
}
