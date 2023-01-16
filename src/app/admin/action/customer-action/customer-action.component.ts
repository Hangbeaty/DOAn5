import { Component, Injector } from '@angular/core';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { CustomerService } from 'src/app/services/customer.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-customer-action',
  templateUrl: './customer-action.component.html',
  styleUrls: ['./customer-action.component.css']
})
export class CustomerActionComponent extends BaseActionComponent {
  constructor(inject:Injector,service:CustomerService) {super(inject,service) }

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
   form = this.fb!.group({
    customerId:0,
    customerName: null,
    customerEmail: null,
    customerPhone:null,
    customerAdress:null
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
