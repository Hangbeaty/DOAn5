import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActionConfig } from 'src/app/core/models/action-config.model';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryActionComponent } from '../../action/category-action/category-action.component';
import { CategoryModel } from '../../models/category.model';
import * as _ from 'lodash';
import { BaseTableComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseTableComponent<any> implements OnInit {
 // configAction: ActionConfig | undefined;
  // constructor(private service: CategoryService, private injector: Injector, private fb: FormBuilder) {
  //  // this.fb = this.injector.get(FormBuilder);
  // }
  constructor(injector: Injector,service:CategoryService){
    super(injector,service)
  }
  model: boolean = true;

  categoryTable: CategoryModel[] = [];
  ngOnInit(): void {//
    this.search();
  }
  override params:CategoryModel={
    name:'',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "category",
      component: CategoryActionComponent,
      dialog: {
        width: '40%'
      }
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
