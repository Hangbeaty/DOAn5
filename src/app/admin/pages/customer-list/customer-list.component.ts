import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActionConfig } from 'src/app/core/models/action-config.model';
import { CustomerService } from 'src/app/services/customer.service';

import * as _ from 'lodash';
import { Injector } from '@angular/core';
import { CustomerModel } from '../../models/customer.model';
import { BaseTableComponent } from 'src/app/shared/components';
import { CustomerActionComponent } from '../../action/customer-action/customer-action.component';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends BaseTableComponent<any> implements OnInit {
  constructor(injector: Injector,service:CustomerService){
    super(injector,service)
  }
  model: boolean = true;

  customerTable: CustomerModel[] = [];
  ngOnInit(): void {//
    this.search();
  }
  override params:CustomerModel={
    name:'',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "customer",
      component: CustomerActionComponent
    }
  };
  override search() {
    const param={
      pageIndex: this.dataTable.currentPage,
      pageSize: this.dataTable.size,
      ...this.params,
    }
    this.service.search(param).subscribe({
      next: (res) => {
        this.dataTable=res;
        console.log(res);

        //this.categoryTable = res;
      }
    })
  }
}
