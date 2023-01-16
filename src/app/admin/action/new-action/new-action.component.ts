import { Component, Injector, OnInit } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { NewService } from 'src/app/services/new.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.css']
})
export class NewActionComponent extends BaseActionComponent {
  constructor(inject:Injector,service:NewService) {super(inject,service) }
  ngOnInit(): void {
    if (this.screenType=== ScreenType.Update) {
      this.hiddenImage=true;
    this.form.patchValue(this.data);

    }
  }
  form = this.fb.group({
    newId:0,
    newName: null,
    description:null,
    image:null,

  })
  hiddenImage: boolean = false;

  override save() {
    // if (this.loadingService.loading) {
    //   return;
    // }
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

  uploadHandler(event: FileUpload) {
    const formData: FormData = new FormData();
    formData.append('uploadFiles', event.files[0]);
    this.service.UploadFileFormData(formData).subscribe({
      next: (file) => {
        this.form.get('image')?.setValue(file);
      },
      error: (err) => {
        console.log(err);

        this.messageService?.error('Có lỗi xảy ra');
      },
    });
  }


}

