import { Component, Injector, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { BaseTableComponent } from 'src/app/shared/components';
import { ContactActionComponent } from '../../action/contact-action/contact-action.component';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent extends BaseTableComponent<any> implements OnInit {

  constructor(injector: Injector,service:ContactService){
    super(injector,service)
  }
  model: boolean = true;

  contactTable: ContactModel[] = [];
  ngOnInit(): void {//
    this.search();
  }
  override params:ContactModel={
    name:'',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "customer",
      component: ContactActionComponent
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
