import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { ActionConfig } from 'src/app/core/models/action-config.model';
import { PlaceService } from 'src/app/services/place.service';
import { BaseTableComponent } from 'src/app/shared/components';
import { PlaceActionComponent } from '../../action/place-action/place-action.component';
import { PlaceModel } from '../../models/place.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent extends BaseTableComponent<any> implements OnInit {

  constructor(injector: Injector,service:PlaceService){
    super(injector,service)
  }
  model: boolean = true;

  customerTable: PlaceModel[] = [];
  ngOnInit(): void {//
    this.search();
  }
  override params:PlaceModel={
    name:'',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "Place",
      component: PlaceActionComponent
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
