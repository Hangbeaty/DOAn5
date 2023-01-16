import { Component, Injector } from '@angular/core';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { ContactService } from 'src/app/services/contact.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-contact-action',
  templateUrl: './contact-action.component.html',
  styleUrls: ['./contact-action.component.css']
})
export class ContactActionComponent extends BaseActionComponent{
  constructor(inject:Injector,service:ContactService) {super(inject,service) }

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
   form = this.fb!.group({
    id:0,
    name: null,
    email:null,
    phone:null,
    content:null
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
