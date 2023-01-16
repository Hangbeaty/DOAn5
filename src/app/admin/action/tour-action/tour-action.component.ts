import { Component, Injector, OnInit } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { ScreenType } from 'src/app/core/utils/enums';
import { TourService } from 'src/app/services/tour.service';
import { BaseActionComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-tour-action',
  templateUrl: './tour-action.component.html',
  styleUrls: ['./tour-action.component.css']
})
export class TourActionComponent extends BaseActionComponent implements OnInit {
  constructor(inject:Injector, service:TourService){super(inject, service)}
  form = this.fb.group({
    tourId:0,
    categoryId: null,
    tourName: null,
    price:null,
    placeId:null,
    description: null,
    time:null,
    image:null,
    placeName:null,
  })
  hiddenImage: boolean = false;
  ngOnInit():void{
    if (this.screenType=== ScreenType.Update) {
      this.hiddenImage=true;
    this.form.patchValue(this.data);

    }
  }
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
