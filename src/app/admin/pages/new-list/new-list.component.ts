import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActionConfig } from 'src/app/core/models/action-config.model';
import { NewService } from 'src/app/services/new.service';

import * as _ from 'lodash';
import { NewModel } from '../../models/new.model';
import { BaseTableComponent } from 'src/app/shared/components';
import { NewActionComponent } from '../../action/new-action/new-action.component';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent extends BaseTableComponent<any> implements OnInit {


  constructor(injector: Injector,service:NewService) {
    super(injector,service)
  }
  model: boolean = true;

  newTable: NewModel[] = [];
  ngOnInit(): void {//
    this.search();
  }
  override params:NewModel={
    name:'',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "new",
      component: NewActionComponent,

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
      }
    })
  }
}

