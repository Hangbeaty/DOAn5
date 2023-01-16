import { Component, Injector } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { PlaceService } from 'src/app/services/place.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-place-action',
  templateUrl: './place-action.component.html',
  styleUrls: ['./place-action.component.css']
})
export class PlaceActionComponent extends BaseActionComponent{
  constructor(inject:Injector,service:PlaceService) {super(inject,service) }

  ngOnInit(): void {
    if (this.screenType=== ScreenType.Update) {
      this.hiddenImage=true;
    this.form.patchValue(this.data);
  }
}
   form = this.fb!.group({
    placeId:0,
    placeName: null,
    image:null,
    description:null
  })
  hiddenImage: boolean = false;
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

