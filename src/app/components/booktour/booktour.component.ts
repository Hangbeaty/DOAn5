import { Component, Injector, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TourService } from 'src/app/services/tour.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-booktour',
  templateUrl: './booktour.component.html',
  styleUrls: ['./booktour.component.css'],
})
export class BooktourComponent extends BaseComponent implements OnInit {
  constructor(inject: Injector, private service: TourService) {
    super(inject);
  }
  itemRequest:any;
  ngOnInit(): void {
    const tourId: any = this.route!.snapshot.paramMap.get('tourId');//lấy value từ url
    this.service.findById(tourId).subscribe({
      next: (value) => {
        this.itemRequest=value;
        this.form?.patchValue(value);
        this.form?.get('totalMoney')?.setValue(value.price);

      },

    })

    const data: any = JSON.parse(localStorage.getItem('user')!) ;
    this.form?.get('orderAdress')?.setValue(data.customerAdress);
    this.form?.get('orderEmail')?.setValue(data.customerEmail);
    this.form?.get('orderName')?.setValue(data.customerName);
    this.form?.get('orderPhone')?.setValue(data.customerPhone);
    this.form?.get('customerId')?.setValue(data.customerId);
  }
  form = this.fb?.group({
    orderAdress: null,
    orderEmail: null,
    orderName: null,
    orderPhone: null,
    customerId: null,
    categoryName: null,
    placeName: null,
    startDate: null,
    totalMoney: null,
    tourName: null,
    code: null,
    note:null
  });
  orderTour() {

    const data = this.form?.getRawValue();
   // data?.startDate = moment().format('DD/MM/YYYY');
    this.messageService?.confirm().subscribe((isConfirm) => {
      if (isConfirm) {
        this.service.orderTour(data).subscribe({
          next:(value)=> {
            this.messageService?.success("Đặt tour thành công");

          },
          error:()=>{
            this.messageService?.error("CÓ lỗi xảy ra");
          }
        })
      }
    });

  }
}
