import { Component, Injector } from '@angular/core';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { OrderService } from 'src/app/services/order.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-order-action',
  templateUrl: './order-action.component.html',
  styleUrls: ['./order-action.component.css']
})
export class OrderActionComponent extends BaseActionComponent{
  constructor(inject:Injector,service:OrderService) {super(inject,service) }

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
   form = this.fb!.group({
    orderId:0,
    orderName: null,
    orderAdress:null,
    orderEmail:null,
    orderPhone:null,
    totalMoney:null,
    tourName:null,
    status:null,
    orderDate:null,
    categoryName:null,
    placeName:null,
    startDate:null,
    note:null

  })
  override save() {

    const data = this.form.getRawValue();


    if (this.form?.status === 'VALID') {
      this.messageService?.confirm().subscribe((isConfirm) => {
        if (isConfirm) {
          if (this.screenType == ScreenType.Create) {
            this.create(data);
          } else {
            this.update(data);
          }
        }
      });
    } else {
      validateAllFormFields(this.form!);
    }
  }
}
