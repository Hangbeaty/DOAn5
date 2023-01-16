import { Component, Injector, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { BaseTableComponent } from 'src/app/shared/components';
import { OrderActionComponent } from '../../action/order-action/order-action.component';
import { OrderModel } from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends BaseTableComponent<any> implements OnInit{
  constructor(  injector: Injector, service: OrderService) { super(injector,service)}
  orderTable: OrderModel[] = [];
  ngOnInit(): void {
    this.search();
  }
  model: boolean = true;

  override params = {
    name: '',
  }
  override initConfigAction(): void {
    this.configAction = {
      title: "Order",
      component: OrderActionComponent
    }
  };
  onReset(){
    this.params.name='';
    this.search();
  }
}
