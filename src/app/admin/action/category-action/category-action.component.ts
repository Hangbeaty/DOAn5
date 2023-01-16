import { Component, Injector, OnInit } from '@angular/core';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { CategoryService } from 'src/app/services/category.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-category-action',
  templateUrl: './category-action.component.html',
  styleUrls: ['./category-action.component.css']
})
export class CategoryActionComponent extends BaseActionComponent implements OnInit {

  constructor(inject:Injector,service:CategoryService) {super(inject,service) }

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
   form = this.fb!.group({
    categoryId:0,
    categoryName: null,
    description: null
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
