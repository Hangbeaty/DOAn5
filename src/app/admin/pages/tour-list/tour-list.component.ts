import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { TourService } from 'src/app/services/tour.service';
import { BaseActionComponent, BaseTableComponent } from 'src/app/shared/components';
import { TourActionComponent } from '../../action/tour-action/tour-action.component';
import { TourModel } from '../../models/tour.model';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent extends BaseTableComponent<any> implements OnInit {


  constructor(  injector: Injector, service: TourService) { super(injector,service)}
  tourTable: TourModel[] = [];
  ngOnInit(): void {
    this.search();
  }
  model: boolean = true;

  override params = {
    name: '',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "Tour",
      component: TourActionComponent
    }
  };
  onReset(){
    this.params.name='';
    this.search();
  }
}
